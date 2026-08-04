---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 15:18 UTC by the cockpit's self-seat · from
the cloud
FLIGHT 2 IS AIRBORNE — 2 lanes AT THE GATE, 1 parked · needs-you 2 ·
git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🔴 **RULE THE FREEZE — the two lanes finished before it could
   catch them.** A and B were complete and awaiting merge by 15:05,
   ten minutes after waking, so `ground the fleet` can no longer
   fence anything MID-WORK, which was the point. The cockpit pushes
   you one message with three options and its recommendation
   (reviving lane C first is the only one that still tests the
   mid-work property). The word itself is unchanged and still
   exact: `ground the fleet` — a bare "land" is
   [land](skills/land.md)'s trigger 4 and routes to MODE R.
   (since 08-04)
   → [land §Scenario 3](skills/land.md#scenario-3--the-founders-freeze-word-only)
   · [the trigger table](skills/land.md#the-trigger-table--what-starts-a-landing)
2. 🟡 **RULE LANE C — re-spawn `home-hook-row`, or leave it
   parked.** Its spawn produced no session at all (below). One
   label cycle on
   [#280](https://github.com/wsher0901/roam/pull/280) revives it
   and costs one cap run; the bench is intact either way. Say it in
   the cockpit session; the cockpit executes. (since 08-04)
   → its bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280)

## The baton

COCKPIT — live since 15:18 UTC (liftoff) ·
https://claude.ai/code/session_01HbmFzb7mq4z9u8p3PjjkGT · awaiting
your word on 2 items

Last flight: LANDED 2026-08-04 · 13:53 UTC via AUTO-LAND — fleet
empty, nothing owed you · clean

⚠️ **TWO BIRTHS WERE FIRED, AND THE SEAT ABOVE IS NOW TAKEN.**
Liftoff fired rung 1 twice — 15:11 UTC and 15:12 UTC — because the
first fire's exit status was not captured and its speed was misread
as a failure; the second fire returned exit 0 in 6.8s, which is
what a successful dispatch looks like, so the first is presumed to
have dispatched too. THE RULE IS UNCHANGED AND THE BOARD IS THE
ARBITER: the first session to seat itself holds the baton, and it
has — the cockpit at the url above read `self-seat pending` on this
board and seated itself. THE TWIN, IF IT LIVES, IS A STRAY BIRTH
under [the charter](COCKPIT-CHARTER.md)'s rule 1 — push nothing,
write nothing, name the live cockpit above and stop. DO NOT run the
landing ritual for this: a stray never flew, so rule 8's tombstone
is the wrong script and fencing this flight's lanes would end
flight 2 on an accident rather than on the founder's word.

## In flight

| Who | For | State | Move |
|---|---|---|---|
| cockpit | commands flight 2 from the cloud | 🟡 | live since 15:18 UTC · push sent · awaiting your word on 2 items |
| lane · canary-ack-commit | §Canary: the ack is a commit on origin, never a message | 🟢 | COMPLETE 15:05 UTC, awaiting merge · [#278](https://github.com/wsher0901/roam/pull/278) |
| lane · cloud-git-identity | machine-setup: the cloud seat's git identity | 🟢 | COMPLETE 15:05 UTC, awaiting merge · [#279](https://github.com/wsher0901/roam/pull/279) |
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

THE COCKPIT'S ONE NON-STANDARD DUTY — RECUT AT 15:16 UTC, because
the thing it was timed against has already happened. The original
duty was to push the founder the moment the fleet was confirmed
MID-WORK, so the freeze would fence lanes that were still working.
BOTH LANES FINISHED FIRST: A and B were complete and awaiting merge
by 15:05, roughly ten minutes after they woke. The warning written
into this line — that small doc edits finish fast and a lane that
finishes takes the test with it — came true before the cockpit
existed to act on it.

So the duty is now a DECISION to carry, not a word to relay. SEND
EXACTLY ONE PUSH to the founder's phone, naming the freeze word
`ground the fleet` verbatim AND the fact that it can no longer
catch these two mid-work. Give the three options and a
recommendation, per [the charter](COCKPIT-CHARTER.md)'s rule 5:

1. **Revive lane C first** (Needs-you 2), let it reach real work,
   then freeze — the mid-work property survives with one lane, and
   A and B get fenced at the gate alongside it. ONE cap run. THE
   RECOMMENDATION: it is the only option that still tests what the
   founder asked to test.
2. **Freeze now** — MODE P's mechanics all run (the fence commit,
   the fleet-at-ground table, the grounded marker, the resume ask
   at the next pickup), but nothing is interrupted, so the one
   thing left unproven is whether a fence actually STOPS a working
   lane. That is the wake-lock's rejected-push rule, and it stays
   untested.
3. **Merge A and B first** on the founder's word — each needs an
   independent non-author review — then decide about a later
   flight with cargo big enough to still be running.

Until that word comes, both PRs stand ready at THE GATE, so
AUTO-LAND cannot fire. Nothing is lost by the wait.

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

Watch your phone. The cockpit sends one push naming `ground the
fleet`; say it from there and the fleet freezes mid-work, which is
the whole experiment. Everything after that is the next pickup's.
