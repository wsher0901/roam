---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · written from the record · cloud lane
---

# The cloud spawn route ladder — how a lane is actually started

> **CURRENT ENDING (2026-08-06).** Two rungs, and the top one is
> the recipe of record: **flip the pre-birthed PR ready, THEN apply
> (or cycle) the `lane:cloud` label** — because the routine's
> `pull_request.labeled` trigger does not fire on draft PRs, an
> undocumented platform behaviour proven by a three-point
> experiment. Rung 2 is manual: a session opened on the branch with
> a pasted kickoff. Route 1b — an API trigger that would let benches
> stay draft and give the ready-flip back its "this is finished"
> meaning — remains STAGED, adopt-at-first-need. The routine's
> prompt lives as a box master at [LANE-WORKER.md](../LANE-WORKER.md),
> a copy of which must be re-saved into the provider's box by hand,
> a change that fails silently if forgotten. The maiden checklist
> still carries one unticked box, the dormant-baton case, whose
> expected retirer was itself retired. **What the last month added
> is not a new rung but a measurement: the ladder's weak joint is
> TIMING at both ends — dispatch latency at the platform's, ack
> latency at the baton-holder's — and both have killed live lanes.**

## What it is

The procedure that turns a bench on origin into a running cloud
worker, written as a ladder so the next person tries the rung that
works first:

1. **Label-spawn.** On the pre-birthed PR: `gh pr ready <N>`, then
   apply or cycle `lane:cloud`. A routine bound to the repo,
   triggered by `pull_request.labeled` and filtered to that label,
   starts a cloud session on that PR. Its saved prompt is a copy of
   [LANE-WORKER.md](../LANE-WORKER.md); the wiring — location,
   trigger, GitHub App requirement, caps — lives at
   [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
2. **Manual.** claude.ai/code or the mobile app → a new session on
   the pre-birthed branch → paste the kickoff line.

An **idempotency guard** sits in front of rung 1: read the PR's
labels and the memory Status before labelling. A claimed or
airborne Status, or a label already present, means the lane is
flying — never re-add a label to spawn "again".

## What raised it

The delegation maiden flight, 2026-07-16, which spent an entire
evening discovering that the obvious recipe does not work. A label
on a draft PR produced nothing, twice, including once with the
routine verified Active — and a ready-flip plus a label produced a
canary in ninety seconds. Doctrine had to record the winning recipe
before the next liftoff relied on it.

The awkward part of that finding, stated where it belongs: **the
ready-flip means two different things now.** It is the completion
signal in the lane law and it is an ignition step in rung 1. The
guard is written into the recipe — for a cloud lane mid-flight,
ready ≠ complete; completion remains @mention plus Actions green
plus founder review, and the memory Status is the truth — and route
1b exists specifically to take the overload away again.

## What changed, in order

- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — spawning by label becomes the design.** A zero-secret GitHub
  label, drivable from a phone, beats API wiring that would put a
  bearer token on two machines; ad-hoc CLI spawn is banned outright.
- **[D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  — the three-point experiment becomes doctrine.** 17:02 label on a
  draft → nothing · 21:31 re-label on the draft, routine verified
  Active → nothing · 21:53 ready-flip + label → canary in 90
  seconds. Route 1b is staged; the reply-ack window (~15 minutes) is
  confirmed live at first use, a 22:10 reply answered by a 22:11
  commit.
- **The phantom-run lesson, from the same night.** The local
  `count:runs` proxy read 1 while the provider's own history showed
  zero runs ever: the proxy counts LABEL EVENTS, so it is an upper
  bound on spend and not a meter. Draft-label failures burn proxy
  counts and no provider runs.
- **The resurrection clause
  ([#175](https://github.com/wsher0901/roam/pull/175), 2026-07-19).**
  Ending or archiving a session in the UI does not reliably stop
  its heartbeat push: a retired session re-created its deleted
  branch four minutes later at the byte-identical SHA, with the
  cloud proxy pushing as the founder. So after any retirement,
  verify the branch stays dead and re-delete on sight —
  same-SHA resurrections carry no unique work by construction,
  since session branches are born at main's HEAD.
- **[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  — the ladder's operator changes.** The cockpit becomes the away
  surface that drives these two acts, inheriting the mail-slot
  rules; the cloud clerk, which had been expected to close the
  ladder's last open box, is retired instead.
- **[D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  — the routine's prompt becomes a BOX MASTER.** The saved prompt
  moves out of SETUP into its own file whose rules are explicit: the
  box is a copy, never the source; edits ride PRs into the master;
  and the re-save rides the board's Needs-you until done, **because
  a master change that never reaches the box fails silently** — the
  next lane is simply born without it and nobody is told.
- **2026-08-04 — the dispatch-latency correction, and it is the
  most useful datum on this page.** A bench read as "spawn produced
  no session" had in fact received one: a cloud session reached it
  about 27 minutes after the label, found a parked Status,
  self-terminated without claiming, and reported its own stale clone
  head. The respawn's session arrived in about two minutes. Same
  route, same bench, ~27 minutes then ~2. **The failure mode is
  dispatch latency exceeding the canary window, not a dead
  trigger** — and the original diagnosis was corrected on the
  record rather than quietly replaced.

## Where it stands

Rung 1 is the working recipe and has started every cloud lane since
the maiden flight. Rung 2 is a real fallback. Route 1b is still
staged, which means the ready-flip still carries two meanings and
the guard sentence is still load-bearing.

**The verify checklist still carries one unticked box, and it has
been orphaned rather than merely deferred.** The dormant-baton case
— what happens when a lane needs an answer and no baton-holder is
seated — was to be closed by the cloud clerk, which was verified,
made primary, and then retired on 2026-07-22. The case now falls to
the cockpit and stays open until an answer is proven live. It has
now been open for longer than the mechanism that was supposed to
close it existed.

**The derived addition this story makes to the census cell: the
ladder's real fragility is timing, at BOTH ends of the handshake,
and the second end was demonstrated on the day this story was
written.** The 2026-08-04 correction showed the platform's end —
dispatch arriving after the ~10-minute canary window had already
expired. On 2026-08-06 the baton-holder's end failed the same way
twice in one afternoon: two lanes of a seven-bench fleet canaried,
waited, were acked about twelve minutes later, and by then had
given up — one stood down loudly, one stopped silently. The fix
applied on the third attempt was procedural, not mechanical: the
ack was PRE-STAGED before the canary landed, and the licence
followed the claim by about ninety seconds. **A window that is
generous for a worker is not generous for a human composing prose,
and nothing in the ladder measures the difference.** Filed here as
observed behaviour; no rule has been written for it.

## Sources

Down-links only.

- [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
  — the ladder, the recipe of record, the idempotency guard, the
  filled maiden checklist and the resurrection clause ·
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the window constants the ladder is timed against.
- [LANE-WORKER.md](../LANE-WORKER.md) — the routine's prompt
  master and its re-save law ·
  [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
  — the routine's wiring ·
  [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
  — api-ignition, awaiting first need.
- [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  ·
  [D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract).
- [the maiden flight's report](../record/history/workshop/mechanism/maiden-flight-report.md)
  — the three-point evidence and the phantom-run catch ·
  [the shakedown audit](../record/history/workshop/mechanism/shakedown-audit.md)
  — the resurrection forensics ·
  [flight 4's log](../record/probes/flight-4-freeze.md).
- Spans cited by the census:
  [#144](https://github.com/wsher0901/roam/pull/144) ·
  [#146](https://github.com/wsher0901/roam/pull/146) ·
  [#180](https://github.com/wsher0901/roam/pull/180) ·
  [#191](https://github.com/wsher0901/roam/pull/191) ·
  [#197](https://github.com/wsher0901/roam/pull/197).
