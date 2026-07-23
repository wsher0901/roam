---
type: spec
id: clerk-retirement
title: Clerk retirement — execute D-046's staged retirement so no live instruction points at a deleted routine
status: open
stage: workshop
branch: docs/clerk-retirement
pr: —
opened: 2026-07-23
shipped: —
---

# clerk-retirement — the repo stops pointing at a vehicle that cannot fire

**Links:**
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
(staged the retirement) ·
[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
(superseded its last function) ·
[liftoff](../skills/liftoff.md) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[IDEAS](../IDEAS.md) · verified record:
[cloud-clerk](cloud-clerk.md) · [clerk-notify](clerk-notify.md) ·
[clerk-autospawn](clerk-autospawn.md) ·
[shakedown-audit](shakedown-audit.md)

## Goal

One theme: **the clerk is gone from the ladder.** The founder
deleted the clerk routine on 2026-07-22. The repo still says it
exists — so a fallback rung, the rung a seat reaches for precisely
when everything above it has failed, now points at a vehicle that
cannot fire. This bench removes every LIVE instruction that reaches
for the clerk, keeps every VERIFIED RECORD of what it proved, and
adds no new machinery.

The distinction that governs every edit here: an instruction tells a
future seat to *do* something, and a false one is a trap; a record
says what *was* proved, and deleting it destroys evidence. Live
instructions go. Records are annotated with a tombstone and stay.

## Why there is no new D-number

Deliberate, and recorded here so a future seat does not hunt for a
decide that was never written.

[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
already DECIDED the retirement — its clerk-retirement-staged clause
is the decision, and it named the trigger (the cockpit maiden
drill's closeout).
[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
then superseded the clerk's last unique function: the connector
ladder ends in a phone bootstrap — Claude app, new session on the
repo, the two-line bootstrap paste — which is the same
last-resort reach the clerk once served, by a route that needs no
standing session and no second routine.

So this bench EXECUTES a standing decision rather than making a new
one. Under the laws a decide records a roadmap-level CHANGE; nothing
changes here that was not already decided. Writing a D-049 would
imply the retirement was still open on 2026-07-23, which would be
false. Decides are immutable and their anchors are load-bearing —
every existing D-046 link in the tree survives this bench untouched.

## Out of scope

- Any new machinery — no scripts, no workflows, no replacements.
- A new D-number (reasoning above).
- Deleting the clerk's verified record. The C/N/A checklists, the
  charter master, and the shipped specs and histories STAY, marked
  retired. What the clerk proved — API fire, standing watch,
  turn-end push as the notification — is load-bearing evidence for
  the cockpit that replaced it.
- The founder's `.env.local` files at either seat. A dead token is
  inert; the removal is a founder act at each seat's next sitting,
  noted in SETUP, not urgent.
- Deleting the clerk routine or session in the cloud UI — already
  done by the founder on 2026-07-22; this bench only catches the
  repo up.

## Plan

**1 · [liftoff](../skills/liftoff.md) — the clerk leaves the
ladder.** Two live instructions go:

- §4's backstop rung ("Backstop, until the clerk's staged
  retirement … `npm run fire:clerk`") is rewritten so the ladder
  ends where
  [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  ends it: the phone bootstrap — Claude app, new session on the
  repo, the two-line bootstrap paste.
- §2's budget line drops `fire:clerk` from the cap arithmetic;
  `fire:cockpit` is now the only API fire that spends a run.

Every D-046 link in the file stays exactly as it is.

**2 · [`scripts/fire.mjs`](../../scripts/fire.mjs) — one target.**
The `clerk` entry leaves `TARGETS`; the script takes `cockpit`
only, and an unknown target still exits non-zero with an honest
usage message. The `process.exitCode` drain idiom and every honest
exit code are kept EXACTLY — they are the Shakedown Flight's
exit-127 repair and are not this bench's to touch.
[`package.json`](../../package.json) loses `fire:clerk` and keeps
`fire:cockpit`. [`.env.example`](../../.env.example) loses the
`CLERK_` placeholders and keeps the `COCKPIT_` pair.

**3 · [SETUP](../SETUP.md) — annotate, never delete.** The
cloud-clerk section, its charter master, and the notify/autospawn
sections each gain the tombstone:

> RETIRED 2026-07-22 — routine deleted; superseded by D-046
> (cockpit) and D-048 (connector ladder). Verified record kept:
> C1–C6, N2/N3, A1/A4 green; the mechanisms it proved — API fire,
> standing watch, turn-end push — live on in the cockpit.

Plus a note that the `CLERK_` pair in both seats' `.env.local` is
dead and may be removed at each seat's next sitting.

**4 · [IDEAS](../IDEAS.md).** The clerk-retirement line closes,
dated, naming this PR. Everything else stays open: maiden grading ·
the notification taxonomy · self-authored gates carrying the review
verdict · the `count:runs` wrapper · the cap-arithmetic blind spots ·
the reviewer DEFECT · the interactive-vs-routine connector
hypothesis.

**5 · [DASHBOARD](../DASHBOARD.md) at the ship tail.** The standing
manual-acts item loses the clerk re-save (both remaining boxes are
current as of 07-22); Needs-you keeps only the home-PC seat debt —
the `COCKPIT_` pair and `claude --version` at 2.1.195 or later.

## Files touched

[`docs/skills/liftoff.md`](../skills/liftoff.md) ·
[`scripts/fire.mjs`](../../scripts/fire.mjs) ·
[`package.json`](../../package.json) ·
[`.env.example`](../../.env.example) ·
[`docs/SETUP.md`](../SETUP.md) · [`docs/IDEAS.md`](../IDEAS.md) ·
[`docs/specs/clerk-retirement.md`](clerk-retirement.md) ·
[`docs/memory/clerk-retirement.md`](../memory/clerk-retirement.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.

ONE ADDITION to the mandate's list, flagged for the founder's word
at the gate:
[`docs/skills/parallel-lanes.md`](../skills/parallel-lanes.md) — see
Deviations.

## Done-means

- [ ] [liftoff](../skills/liftoff.md) contains no `fire:clerk` and
      no clerk rung; §4's backstop ends at the D-048 phone
      bootstrap; §2's budget names `fire:cockpit` only.
- [ ] Every D-046 link in every touched file is byte-identical to
      what it was before this bench.
- [ ] [`scripts/fire.mjs`](../../scripts/fire.mjs) takes `cockpit`
      only; the `process.exitCode` drain idiom and the honest exit
      codes are unchanged.
- [ ] `node scripts/fire.mjs clerk` exits non-zero with an honest
      unknown-target message.
- [ ] `node scripts/fire.mjs cockpit` still rejects pre-spawn with
      fake credentials from a temp cwd — the
      [#175](https://github.com/wsher0901/roam/pull/175) method:
      zero cap burn, honest exit 1.
- [ ] [`package.json`](../../package.json) has no `fire:clerk` and
      keeps `fire:cockpit`; [`.env.example`](../../.env.example)
      has no `CLERK_` placeholders and keeps the `COCKPIT_` pair.
- [ ] [SETUP](../SETUP.md)'s clerk sections carry the tombstone
      verbatim, delete nothing, and note the dead `.env.local` pair
      as a non-urgent founder act.
- [ ] [IDEAS](../IDEAS.md) closes the clerk-retirement line, dated,
      naming this PR; the seven named items stay open.
- [ ] grep: no live instruction anywhere tells a seat to fire or
      arm the clerk — D-046 anchor slugs and `history/` prose
      excepted.
- [ ] `check:links` · `check:ledger` · `check:memory` green; the
      full CI mirror green locally AND the pushed head's Actions
      run green.
- [ ] ship §6's critic has run and its verdict rides to the gate.

## Deviations

ONE, flagged for the founder's word at the gate.

`docs/skills/parallel-lanes.md` is NOT on the mandate's FILES
TOUCHED list, but its §Mail slot carries two LIVE instructions that
are exactly the defect this bench exists to remove: it lists "the
cloud clerk … armed until its staged retirement" as the away-surface
FALLBACK, and it states that the clerk "can also be armed as a
watcher", naming its turn-end announcements as the notification
channel for `BLOCKED:` comments, lane completions, and CI red on
main. Both point a future seat at a routine that no longer exists,
and the second is the more dangerous of the two — it promises a
notification channel that will now silently never fire.

Treatment matches SETUP's: annotate, never delete. The clerk keeps
its verified credit in both sentences; what changes is that neither
still tells a seat the vehicle is armed, and the notification duty
is pointed at the cockpit's turn-end (charter rule 5), which is
where it actually lives now.

If the founder prefers the mandate's list held strictly, this hunk
drops on its own and the rest of the bench stands; the gap then
wants its own chore PR under the retroactivity law.

## Open questions

None. The two founder acts this bench records are non-urgent and
already on the board: removing the dead `CLERK_` pair from each
seat's `.env.local`, and the home-PC seat debt.
