---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 15:14 UTC by the cockpit's self-seat · from
the cloud
FLIGHT 2 — 2 lanes DONE at the gate, 1 never spawned; the mid-work
window closed before the cockpit was born · needs-you 3 ·
git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **RULE LANE C — re-spawn `home-hook-row`, or leave it
   parked.** Its spawn produced no session at all (below). One
   label cycle on
   [#280](https://github.com/wsher0901/roam/pull/280) revives it
   and costs one cap run; the bench is intact either way. THIS
   RULING NOW CARRIES THE TEST: lane C is the only lane that could
   still be mid-work when you say the freeze word. Say it in the
   cockpit session; the cockpit executes. (since 08-04)
   → its bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280)
2. 🟡 **SAY THE FREEZE WORD — `ground the fleet` — in the cockpit
   session on your phone.** Still owed, but ITS PREMISE HAS
   CHANGED: lanes A and B finished at 15:04–15:05 UTC, before the
   cockpit was fired at 15:09, so there is nothing mid-work left
   for MODE P to fence unless lane C is revived first (item 1).
   Said now, the word still exercises MODE P and the grounded-fleet
   resume; it no longer exercises the mid-work fencing. The exact
   word matters — a bare "land" is [land](skills/land.md)'s
   trigger 4 and routes to MODE R, which tests nothing.
   (since 08-04)
   → [land §Scenario 3](skills/land.md#scenario-3--the-founders-freeze-word-only)
   · [the trigger table](skills/land.md#the-trigger-table--what-starts-a-landing)
3. 🟡 **THE MERGE WORD ON [#278](https://github.com/wsher0901/roam/pull/278)
   AND [#279](https://github.com/wsher0901/roam/pull/279)** — both
   lanes are complete, both pushed heads are Actions-green, both
   stand ready at THE GATE. Both are LANE-AUTHORED, so the law
   asks any non-author session's review and then your word; the
   cockpit is a non-author of both and can supply the review on
   request. Say it in the cockpit session. (since 08-04)
   → [LAWS §no-solo-approval](LAWS.md#workflow-non-negotiable)

## The baton

COCKPIT — live since 15:14 UTC (liftoff) ·
https://claude.ai/code/session_01HbmFzb7mq4z9u8p3PjjkGT · awaiting
your word on 3 items
Last flight: LANDED 2026-08-04 · 13:53 UTC via AUTO-LAND — fleet
empty, nothing owed you · clean

## In flight

| Who | For | State | Move |
|---|---|---|---|
| cockpit | commands flight 2 from the cloud | 🟡 | live since 15:14 UTC · awaiting your word on 3 items |
| lane · canary-ack-commit | §Canary: the ack is a commit on origin, never a message | 🟢 | COMPLETE 15:05 UTC · green · at the gate · [#278](https://github.com/wsher0901/roam/pull/278) |
| lane · cloud-git-identity | machine-setup: the cloud seat's git identity | 🟢 | COMPLETE 15:04 UTC · green · at the gate · [#279](https://github.com/wsher0901/roam/pull/279) |
| lane · home-hook-row | HOME: the close-lock hook's missing row | 🔴 | cloud spawn failed — label registered 14:54:43Z, no session ever born; bench intact, parked pending your word · [#280](https://github.com/wsher0901/roam/pull/280) |

FLIGHT CONTEXT — flight 2 is a TEST FLIGHT and its cargo is real.
The three benches carry flight 1's own findings back into the
machinery, each on ONE file so no two lanes can collide by
construction. What is under test is THE FLEET PATH — concurrent
lanes, [land](skills/land.md) MODE P fencing them, and the
grounded-fleet resume at the next pickup — designed by
[D-054](record/DECISIONS.md#d-054--the-landing-skill), repaired by
audit at [D-070](record/DECISIONS.md#d-070--baton-renderings-single-homed),
and never once flown.

THE COCKPIT'S ONE NON-STANDARD DUTY was to send exactly one push
naming the freeze word the moment the fleet was confirmed
MID-WORK. IT COULD NOT BE DISCHARGED AS WRITTEN: by the time this
cockpit existed, both working lanes had already finished. The push
went out anyway, naming the real state rather than the expected
one — a cockpit reports what is, never what the plan assumed. The
timing gap itself is the flight's first finding, logged under
Issues.

## Working on

- FLIGHT 2 OF THE TEST PROGRAM — the fleet path flown for the
  first time, carrying three of flight 1's repairs as real cargo.
  Scope set by the founder 2026-08-04.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order)),
one phase per line:

- PHASE 1 — settle & test: the audit is done; flight 1 shipped and
  FLIGHT 2 IS FLYING — the fleet path is what it tests.
- PHASE 2 — the vault: chronicle story lanes + a polish pass;
  opens with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

- The session-start sweep's blind spot — the stale-branch sweep
  cannot see a branch carrying no upstream config; logged as an
  inbox line after being reproduced both ways.
  [#277](https://github.com/wsher0901/roam/pull/277)
- Flight 1, the shakedown — the flight machinery flown end to end
  on trivial cargo and logged from inside itself; five of nine
  chain links proved visible from a lane's seat, four not.
  [#268](https://github.com/wsher0901/roam/pull/268)
- Atlas becomes designed figures — eight hand-drawn SVG swimlanes
  where the lane is the owner; mermaid retired.
  [#265](https://github.com/wsher0901/roam/pull/265)
- The Atlas no-scroll law — ATLAS stops scrolling sideways; all
  seven diagrams rewrapped, plus the intake band and a sitting.
  [#263](https://github.com/wsher0901/roam/pull/263)

**Issues**

- 🔴 THE MID-WORK WINDOW CLOSED BEFORE THE COCKPIT OPENED — lanes
  A and B pushed their completion rewrites at 15:04 and 15:05 UTC;
  [liftoff](skills/liftoff.md) fired the cockpit at 15:09 and it
  seated itself at 15:14. The cockpit's one non-standard duty was
  conditioned on a fleet state that had already passed, and no
  amount of promptness on its part could have recovered it: the
  fire comes after the lanes, by construction. Flight 2's first
  finding, and an argument that the freeze test needs a lane
  deliberately slower than the cockpit's own birth. → Needs-you 1
  and 2
- 🔴 LANE C'S SPAWN PRODUCED NO SESSION — the label registered on
  GitHub and `count:runs` counted it, but nothing was ever born.
  The phantom-label case, met live for the second time. → its
  bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280) · Needs-you 2
- ⏳ THE FALSE ACK — flight 1's sharpest finding: a message
  carrying a well-formed ack token reached a lane before any ack
  existed, and only a check against origin caught it. NOW IN
  FLIGHT as lane A's cargo. → its line in [IDEAS](IDEAS.md)
- ⏳ The §Canary word-vs-token match question is DEFERRED by the
  founder — filed, no ruling made. → its line in [IDEAS](IDEAS.md)
- ⏳ FLIGHT 1 SURFACED FIVE: no git-identity step for the cloud
  seat (NOW IN FLIGHT as lane B's cargo) · GitHub cannot record
  the non-author review · a memory's `updated:` stamp carries no
  timezone · the claim Status form differs between its two
  homes · route 1 consumes the ready-flip. → their lines in
  [IDEAS](IDEAS.md)
- ⏳ The figure law's reach into [HOME](HOME.md) is DEFERRED by
  the founder — filed, no ruling made. → its line in
  [IDEAS](IDEAS.md)
- ⏳ Four joints of the workshop are JUDGMENT ONLY, now drawn and
  each carrying an inbox line: the links gate is
  destination-blind · nothing checks derivation · board freshness
  waits for a ritual · nothing enforces the review or your word.
  → their lines in [IDEAS](IDEAS.md)
- ⏳ The baton case table has no case for a GROUND HANDOFF — this
  board's own line was written without one. → its line in
  [IDEAS](IDEAS.md)
- ⏳ `npm run count:runs` fails under the work PC's Git Bash while
  the script run directly succeeds. → its line in
  [IDEAS](IDEAS.md)
- ⏳ HOME's files table has no row for the user-prompt-submit
  hook, though it exists and enforces the close-lock. IN FLIGHT as
  lane C's cargo, if you revive it. → its line in
  [IDEAS](IDEAS.md)
- ⏳ The figure audit that proved all eight ATLAS figures lives
  only as prose in the bench's story — no script, no CI gate, so
  the result is reproducible only by re-authoring it. → its line
  in [IDEAS](IDEAS.md)

## Where we are (Roam)

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░ (T3–T6 paused → phase 3)
S2 · Skeleton & design · 3/5 ███░░ (T5 paused → phase 3)
S3–S8 · queued in order · 0/22

## Web + Design

- (Web) "GitHub workflow protocol and web instructions setup" —
  the audit's ops chat; it carried the external review of all
  twelve benches, and approved THE TEST PROGRAM whose flight 2 is
  now flying. → next: nothing owed.

## Next

Three words are owed, and they are independent: rule lane C (the
only way the mid-work freeze test is still runnable), say `ground
the fleet` when you want the flight to end, and give the merge
word on the two finished PRs. Say any of them in the cockpit
session; the cockpit executes and reports.
