---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 15:15 UTC by pickup · from the cockpit
FLIGHT 2 — 2 lanes complete at the gate, 1 never spawned; nothing
is mid-work · needs-you 2 · git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🔴 **RULE THE FREEZE TEST — say `revive lane C` or `land`.**
   The freeze word has nothing left to freeze: lanes A and B were
   COMPLETE at 15:04 and 15:05, before this cockpit was fired at
   15:09, so `ground the fleet` today would fence two finished
   benches and prove nothing. Reviving lane C
   ([#280](https://github.com/wsher0901/roam/pull/280), one label
   cycle, one cap run) puts one lane genuinely mid-work and the
   test back on; `land` retires the flight on what it already
   proved. Say it here, in this session. (since 08-04)
   → [land §Scenario 3](skills/land.md#scenario-3--the-founders-freeze-word-only)
   · [the trigger table](skills/land.md#the-trigger-table--what-starts-a-landing)
2. 🟡 **THE MERGE WORD ON [#278](https://github.com/wsher0901/roam/pull/278)
   AND [#279](https://github.com/wsher0901/roam/pull/279)** — both
   complete, both green on the pushed head, both carrying this
   cockpit's non-author review. Nothing merges without your word.
   Say it here; the cockpit welds. (since 08-04)
   → [ship](skills/ship.md) · [LAWS §Workflow](LAWS.md#workflow-non-negotiable)

## The baton

COCKPIT — live since 15:15 UTC (liftoff) · https://claude.ai/code/session_013fXYxuZCRXnaMQDn8a8jTV · awaiting your word on 2 items
Last flight: LANDED 2026-08-04 · 13:53 UTC via AUTO-LAND — fleet
empty, nothing owed you · clean

## In flight

| Who | For | State | Move |
|---|---|---|---|
| cockpit | commands flight 2 from the cloud | 🟡 | live since 15:15 UTC · awaiting your word on 2 items |
| lane · canary-ack-commit | §Canary: the ack is a commit on origin, never a message | 🟢 | complete 15:05 UTC · reviewed 15:14 · at the gate · [#278](https://github.com/wsher0901/roam/pull/278) |
| lane · cloud-git-identity | machine-setup: the cloud seat's git identity | 🟢 | complete 15:04 UTC · reviewed 15:14 · at the gate · [#279](https://github.com/wsher0901/roam/pull/279) |
| lane · home-hook-row | HOME: the close-lock hook's missing row | 🔴 | cloud spawn failed — label registered 14:54:43Z, no session ever born; bench intact, parked pending your word · [#280](https://github.com/wsher0901/roam/pull/280) |

FLIGHT CONTEXT — flight 2 is a TEST FLIGHT and its cargo is real.
The three benches carry flight 1's own findings back into the
machinery, each on ONE file so no two lanes can collide by
construction. Under test is THE FLEET PATH — concurrent lanes,
[land](skills/land.md) MODE P fencing them, and the grounded-fleet
resume at the next pickup — designed by
[D-054](record/DECISIONS.md#d-054--the-landing-skill), repaired by
audit at [D-070](record/DECISIONS.md#d-070--baton-renderings-single-homed),
and never once flown.

HALF THE TEST IS ALREADY PASSED, half is now unreachable without a
ruling. PASSED: concurrency — three benches labeled within four
seconds, two lanes flew simultaneously, neither touched a sibling's
file, and both redelivered label events hit the wake-lock and died
harmless. UNREACHED: MODE P fencing and the grounded-fleet resume,
because both working lanes finished before this cockpit was born —
the exact failure the flight plan warned of ("a lane that finishes
first takes the test with it"). Lane C is the only bench left that
can be mid-work; Needs-you 1 is that ruling.

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

- 🔴 LANE C'S SPAWN PRODUCED NO SESSION — the label registered on
  GitHub and `count:runs` counted it, but nothing was ever born.
  The phantom-label case, met live for the second time. → its
  bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280) · Needs-you 1
- 🔴 THE FLEET OUTRAN ITS COCKPIT — the lanes were labeled at
  14:54 and both finished by 15:05; liftoff fired the cockpit at
  15:09, four minutes after the fleet stopped being observable
  mid-work. A cockpit born after its fleet cannot witness it. →
  Needs-you 1 · harvest at landing
- ⏳ THE FALSE ACK — flight 1's sharpest finding: a message
  carrying a well-formed ack token reached a lane before any ack
  existed, and only a check against origin caught it. AT THE GATE
  as lane A's cargo. → its line in [IDEAS](IDEAS.md)
- ⏳ The §Canary word-vs-token match question is DEFERRED by the
  founder — filed, no ruling made. → its line in [IDEAS](IDEAS.md)
- ⏳ FLIGHT 1 SURFACED FIVE: no git-identity step for the cloud
  seat (AT THE GATE as lane B's cargo) · GitHub cannot record
  the non-author review — PARTLY ANSWERED 15:14: a COMMENT review
  posts fine on one's own PR, so the review IS recordable; what
  GitHub refuses is APPROVE · a memory's `updated:` stamp carries
  no timezone · the claim Status form differs between its two
  homes · route 1 consumes the ready-flip. → their lines in
  [IDEAS](IDEAS.md)
- ⏳ SHIP §1'S VERIFICATION LOOP HAS NO INSTALL RUNG — a fresh
  cloud seat arrives with empty `node_modules`, so `lint` and
  `format:check` fail on a missing package and read as a repo
  fault; `npm ci` fixes it. Found by lane B. → its bench memory,
  finding 3, behind [#279](https://github.com/wsher0901/roam/pull/279)
- ⏳ A LANE CANNOT TELL WHICH BENCH IS ITS OWN — the lane-worker
  prompt says "that PR" while a fleet labels several at once; the
  answer is in the environment (`CCR_TRIGGER_PR_NUMBER`), which no
  document mentions. Found by lane A, and it is the fleet-specific
  gap flight 1 could not surface. → its bench memory, behind
  [#278](https://github.com/wsher0901/roam/pull/278)
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
  the script run directly succeeds; from a cloud seat it fails
  differently — no `gh` auth at all, so the cap must be read from
  the founder. → its line in [IDEAS](IDEAS.md)
- ⏳ HOME's files table has no row for the user-prompt-submit
  hook, though it exists and enforces the close-lock. Lane C's
  cargo, unstarted. → its line in [IDEAS](IDEAS.md)
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

Two words are owed, both in this session: rule the freeze test
(`revive lane C` or `land`), and the merge word on the two benches
standing at the gate.
