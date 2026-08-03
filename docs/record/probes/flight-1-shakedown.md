---
type: probe-record
title: Flight 1 — the shakedown, logged from inside it (2026-08-03)
status: frozen
---

# Flight 1 — the shakedown, logged from inside the lane

The flight's own log, written by the cloud lane that flew it, on
[PR #268](https://github.com/wsher0901/roam/pull/268). The bench is
CARGO: the payload is small and harmless so that any failure
observed is a failure of the MACHINERY, not of the work. Contract:
[the spec](../specs/flight-1-probe.md).

**THE RULE THIS FILE OBEYS.** Everything below is either something
this seat OBSERVED — a clock read, a git object, an API response —
or the exact words **"not observable from this seat"**. Nothing is
inferred from what the documents say ought to have happened. Several
lines are unobservable by construction: they happen after the lane's
last push, and writing them as unobservable is the correct result,
not a gap. All times are UTC unless the source itself carried an
offset, in which case the offset is shown as the source wrote it.

## BORN

| Fact | Value | How this seat saw it |
|---|---|---|
| Vehicle | cloud session, Linux container, `user=root host=vm` | shell |
| Working dir | `/home/user/roam` | shell |
| Branch worked | `docs/flight-1-probe` | `git status` |
| Branch at wake | `claude/lucid-allen-7gxtus`, created at `c8fe3d9` | reflog + session-start hook line |
| Head at wake | `c8fe3d9` — "flight-1-probe bench born — spec + memory stub" | `git log` |
| Base at wake | `main` at `41d3c61` (it moved mid-flight — see MOMENT 4) | PR #268 API response |
| Git identity | `Claude <noreply@anthropic.com>` | `git config` |
| Remote | a local HTTP git proxy on `127.0.0.1`, not `github.com` directly | `git remote -v` |
| PR at wake | #268, **state ready — NOT draft**, label `lane:cloud` present | PR #268 API response |
| Trigger named to the lane | "a pull request labeled `lane:cloud`" | this session's own kickoff prompt |

The birth in the order this seat can put it:

- **21:36:34Z** — the earliest event this seat can see on the PR at
  all: the Vercel bot's deployment comment.
- **21:36:45Z** — the PR's `updated_at` on this seat's first read.
  What edit that stamp belongs to is **not observable from this
  seat**; the PR API returns the stamp, not its cause.
- **21:36:53** — the container's own git checkout of `c8fe3d9`, 35
  seconds before this session's first clock read. THE ENVIRONMENT
  WAS BORN ON THE PR HEAD, not on `main` — the clone arrives already
  standing on the bench.
- **21:37:28** — this session's first clock read, and its checkout
  of `docs/flight-1-probe`.

Two facts about the birth that this seat can state and that the
ground cannot see as cheaply:

1. **The bench was complete before the worker existed.** At wake,
   branch, spec (`docs/record/specs/flight-1-probe.md`), memory stub
   and the PR were all already on origin, in ONE commit authored
   before this session's environment was created. Bench-first birth
   is not a claim the lane has to take on trust — it is the state of
   the tree the lane wakes into.
2. **The session-start hook fired on the wrong branch and said so.**
   Its line read "on `claude/lucid-allen-7gxtus` — pull skipped": the
   container names a session branch of its own at the PR head, and
   the lane has to step off it deliberately. The hook printed the
   truth rather than the expectation, which is how a lane catches
   this in one line instead of one commit.

## THE CANARY

**Lane side.** One trivial commit — memory Status set to
`claimed by cloud — 2026-08-03`, plus the moment-1 diary line —
pushed at **21:38:01** as commit `676c9b3`, roughly 33 seconds after
this session's first clock read. The Status this lane overwrote was
`bench ready, no worker yet`: not a claim owned by anyone else and
not terminal, so the bench was this lane's to take.

**Baton-holder side — the ack token, verbatim as posted:**

```text
airborne · https://claude.ai/code/session_01NcE9UvzhybxinCqre5LvE2 · 2026-08-03
```

Middots, not em-dashes; the token first on the line. It matches
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)'s
contract character-for-character — the form the 2026-07-22 near-miss
was recorded to protect. Observed facts about the ack:

- Commit `5b21ab6`, "docs: airborne ack — flight-1-probe is licensed
  to work", authored **2026-08-03T17:38:53-04:00** — 21:38:53Z, **52
  seconds after the canary landed**.
- Author and committer: `Wonseuk`, the founder's GitHub identity.
  WHETHER A HUMAN OR A SESSION PUSHING AS THE FOUNDER WROTE IT IS
  NOT OBSERVABLE FROM THIS SEAT — git records the identity, never
  the hand.
- The ack's URL field names THIS LANE'S OWN cloud session.
- This lane's watcher detected it at **21:39:15**, its own polling
  interval behind the push. Canary → licensed to work: **74 seconds
  of the ~10-minute window**, about 12% of it.

**The match was ANCHORED, and the anchoring mattered.** The watcher
tested whether the Status line STARTS WITH the token, never a
substring search — this lane's own claim prose contains the word
"airborne", so a substring match would have found the lane's own
writing and read it as the ack. That failure mode is not
hypothetical here: it was live in the file the whole time the
watcher ran.

Two things the ack surfaced that are cheap to fix and cost nothing
to notice:

- **The `updated:` stamp carries no timezone.** The ack's frontmatter
  reads `2026-08-03 17:38 · airborne ack · work PC`; the canary's
  reads `2026-08-03 21:38 UTC · canary claim · cloud`. Same minute,
  four hours apart on the page. Nothing is wrong — each seat read its
  own clock, as the derivation law requires — but a cold reader
  cannot order a memory's own stamps without knowing each seat's
  offset.
- **The claim form differs between its two homes.**
  [§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)'s
  lane side says `claimed by <vehicle> — <date>`;
  [TEMPLATE](../../memory/TEMPLATE.md)'s state table says
  `claimed — <vehicle · date>`. Only the airborne row is
  machine-checked, so the claim row can drift between homes without
  anything going red. This lane wrote §Canary's form.

## THE DIARY

One line per memory moment
([the four](../../skills/parallel-lanes.md#the-four-memory-moments-the-lanes-diary-rule)),
written AT the moment rather than reconstructed at the end.

- **21:38 — MOMENT 1, the handshake claim.** Status → claimed by
  cloud, pushed, then the wait. Written into the memory as the canary
  commit itself, so the claim and its diary line are the same act.
- **21:38 — MOMENT 2, the first decision.** Made while arming the
  watcher, before the ack existed to test it: keep the match
  anchored at the START of
  the line but on the WORD `airborne` rather than on `airborne ·`,
  so that an em-dash ack — the exact 2026-07-22 failure — is still
  caught, while a substring match on the lane's own prose still
  cannot be. The stricter test would have been correct here and
  brittle in the recorded failure; the anchor is what does the
  safety work, not the middot.
- **MOMENT 3, blocking — DID NOT OCCUR.** No `BLOCKED:` comment was
  posted, because nothing on this flight was ambiguous enough to need
  the founder. Recorded as absent rather than omitted: a probe that
  silently drops a moment reads the same as one that never reached
  it.
- **21:45 — MOMENT 4, completion.** Branch synced with the main that
  had moved under it (#269 landed mid-flight), the full verification
  loop run green — links 4481/0 broken, ledger 114↔114, memory
  valid, lint, format, 3 tests, build — and the simulation law
  checked mechanically rather than asserted: this lane's own two
  commits touch `docs/memory/flight-1-probe.md` and this file, and
  nothing else. The merge of `main` brings main's own files along, as
  a merge must; the lane authored none of them. Written before the
  completion comment, per the contract's ordering.

## WHAT A GREEN FLIGHT PROVES

The nine links of the chain, each an observation or the exact words
"not observable from this seat".

1. **Bench pre-birthed** — ✅ OBSERVED. Branch, spec, memory stub and
   PR #268 were all on origin at `c8fe3d9` before this session's
   environment was created (`21:36:53` checkout of a commit already
   carrying all four).
2. **Spawn route 1** — ✅ PARTIALLY OBSERVED, and the unobserved half
   named. Observed: at wake the PR was READY (not draft) and carried
   the `lane:cloud` label, and this session's kickoff names that label
   as its trigger. **The ORDER of the ready-flip and the label — the
   thing route 1 actually fixes — is not observable from this seat:**
   the PR API returns current state and one `updated_at`, and this
   seat could not read the PR's event timeline (the issue-timeline
   call rejects a PR number with "Could not resolve to an Issue").
   That the spawn worked at all is observed; that it worked BECAUSE
   the flip preceded the label is not.
3. **Canary inside the window** — ✅ OBSERVED. Canary 21:38:01, ack
   authored 21:38:53, detected 21:39:15. 74 seconds against a
   ~10-minute window.
4. **Work pushed** — ✅ OBSERVED. Every commit of this flight was
   pushed as it was made; the branch, not the session, holds the
   work. This line is verifiable by anyone from `git log` alone,
   which is the point of it.
5. **Ready flip** — ⚠️ OBSERVED AS A NO-OP, and this is a finding.
   The PR was ALREADY READY when this lane woke, because route 1
   spawns by flipping ready and then labelling. There is no flip left
   for the lane to perform at completion, so THE READY STATE CARRIES
   NO INFORMATION ABOUT COMPLETION on a route-1 cloud lane —
   [§Cloud spawn](../../skills/parallel-lanes.md#cloud-spawn--route-ladder)'s
   "ready ≠ complete" guard, met in the wild. What this lane can
   actually signal at completion is the memory Status, the pushed
   commit, and the @mention comment; the flip is the one contract step
   that route 1 has already consumed. The staged `api-ignition`
   target named in that section is the thing that would give it back.
6. **Non-author review** — NOT OBSERVABLE FROM THIS SEAT. It happens
   after this lane's last push, and no-solo-approval puts it in
   another session's hands by construction.
7. **The founder's word** — NOT OBSERVABLE FROM THIS SEAT.
8. **The weld** — NOT OBSERVABLE FROM THIS SEAT. A lane never merges;
   "done" means founder-approved and merged, and neither half is the
   lane's to see.
9. **Auto-land unprompted** — NOT OBSERVABLE FROM THIS SEAT. Landing
   is the cockpit's ritual
   ([land](../../skills/land.md)), fired after this bench closes.

**What the four unobservable lines are worth.** They are not
failures of the flight and not gaps in the log — they are the shape
of the lane's seat, drawn accurately. A lane can prove its own birth,
its handshake, and its work. It cannot prove its review, its
approval, its merge, or its fleet's landing, and a probe that claimed
otherwise would launder assumption into the record. The ground can
close those four in a sentence each; the lane can only mark where its
sight ends. **That boundary — five links visible from inside, four
only from outside — is this flight's actual result.**

This log is frozen as written: it is the view from ONE seat, and
editing it later from the ground would destroy the only thing it
records that nothing else can. The four unobservable links belong to
whoever can see them — the bench's entry in
[record/history/](../history), written after the weld.

Sources:
[the spec](../specs/flight-1-probe.md) ·
[LAWS §Parallel lanes & cloud](../../LAWS.md#parallel-lanes--cloud) ·
[parallel-lanes](../../skills/parallel-lanes.md) ·
[liftoff](../../skills/liftoff.md) ·
[land](../../skills/land.md) ·
[D-043](../DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign) ·
[D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
