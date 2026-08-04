---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 15:44 UTC by the cockpit · from the cloud
FLIGHT 2 — ALL 3 LANES DONE, all at the gate; no lane is working ·
needs-you 2 ·
git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **THE MERGE WORD ON THREE PRs —
   [#278](https://github.com/wsher0901/roam/pull/278) ·
   [#279](https://github.com/wsher0901/roam/pull/279) ·
   [#280](https://github.com/wsher0901/roam/pull/280).** All three
   lanes are complete and Actions-green on their pushed heads; the
   whole of flight 2's cargo is now standing at THE GATE. Every one
   is LANE-AUTHORED, so the law asks any non-author session's
   review and then your word — the cockpit authored no payload
   among them (a memory stub and an ack are not authorship) and can
   review all three on request. Nothing expires; they wait as long
   as you need. (since 08-04)
   → [LAWS §no-solo-approval](LAWS.md#workflow-non-negotiable)
2. 🟡 **RULE THE FREEZE TEST — run MODE P anyway, or reschedule
   it.** The mid-work window closed a second time: lane C was acked
   airborne 15:38 and complete 15:43, FOUR MINUTES AND FORTY-EIGHT
   SECONDS, so there is again no working lane to fence. Saying
   `ground the fleet` now still exercises MODE P's other half — the
   fence commits, the fleet-at-ground table, the `grounded for
   local pickup` marker, and the resume ask at your next pickup,
   none of which has ever been flown either. What it cannot test is
   whether a fence STOPS a live worker. The alternative is to merge
   the cargo and reschedule the mid-work half onto a flight whose
   lanes run in tens of minutes. (since 08-04)
   → [land §Scenario 3](skills/land.md#scenario-3--the-founders-freeze-word-only)
   · [the trigger table](skills/land.md#the-trigger-table--what-starts-a-landing)

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
| cockpit | commands flight 2 from the cloud | 🟡 | live since 15:18 UTC · awaiting your word on 2 items |
| lane · canary-ack-commit | §Canary: the ack is a commit on origin, never a message | 🟢 | COMPLETE 15:05 UTC, awaiting merge · [#278](https://github.com/wsher0901/roam/pull/278) |
| lane · cloud-git-identity | machine-setup: the cloud seat's git identity | 🟢 | COMPLETE 15:04 UTC, awaiting merge · [#279](https://github.com/wsher0901/roam/pull/279) |
| lane · home-hook-row | HOME: the close-lock hook's missing row | 🟢 | COMPLETE 15:43 UTC, awaiting merge — respawned on your word, acked 15:38, done in 4m48s · [#280](https://github.com/wsher0901/roam/pull/280) |

FLIGHT CONTEXT — flight 2 is a TEST FLIGHT and its cargo is real.
The three benches carry flight 1's own findings back into the
machinery, each on ONE file so no two lanes can collide by
construction. What is under test is THE FLEET PATH — concurrent
lanes, [land](skills/land.md) MODE P fencing them, and the
grounded-fleet resume at the next pickup — designed by
[D-054](record/DECISIONS.md#d-054--the-landing-skill), repaired by
audit at [D-070](record/DECISIONS.md#d-070--baton-renderings-single-homed),
and never once flown.

THE COCKPIT'S ONE NON-STANDARD DUTY was RECUT AT 15:16 UTC and is
now DISCHARGED. Its original form — push the founder the moment the
fleet is confirmed MID-WORK — was unfulfillable: A and B were
complete by 15:05 and the cockpit was not fired until 15:11, so no
moment of its existence found a working fleet. The recut turned the
duty into a decision to carry, the cockpit carried it with three
options, and THE FOUNDER RULED `re-spawn C` AT 15:34.

That ruling restored the experiment for FOUR MINUTES AND FORTY-EIGHT
SECONDS. Lane C canaried 15:37, was acked airborne 15:38:20, and
pushed its completion at 15:43:08. THE WINDOW CLOSED A SECOND TIME,
and this time nothing about the timing was anyone's fault: the
cockpit acked within seventy seconds of the canary and pushed the
founder's phone within another minute. The window is simply shorter
than a human answering a phone.

THE MEASUREMENT IS THE FINDING, and it is worth more than the test
it defeated. A cloud lane carrying doc-sized cargo runs about five
minutes from licence to completion. Any duty timed against "the
fleet is mid-work" is therefore unrunnable by construction on cargo
this size — not unlucky twice, but impossible twice, and it would
be impossible a third time. What the mid-work half needs is a lane
whose work is measured in TENS of minutes, or a bench whose spec
tells it to hold at a checkpoint until acked. That is a decision
for a later flight, and it is Needs-you 2.

WHAT REMAINS TESTABLE TODAY, unchanged and never once flown: MODE
P's other half. Say `ground the fleet` on a fleet of three
COMPLETED lanes and the fence commits, the fleet-at-ground table,
the `grounded for local pickup` marker and the resume ask at the
next pickup all run for real. Only the rejected-push rule — does a
fence STOP a live worker — stays unproven, because there is no live
worker left to stop.

All three PRs stand ready at THE GATE meanwhile, so AUTO-LAND
cannot fire and nothing is lost by any amount of waiting.

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

- 🔴 THE MID-WORK FREEZE TEST IS UNRUNNABLE ON DOC-SIZED CARGO, now
  measured twice. Attempt 1: A and B finished at 15:04–15:05, before
  the cockpit was fired at 15:11 — the fire comes after the lanes by
  construction. Attempt 2, with the respawned lane C and a cockpit
  already seated and watching: acked 15:38:20, complete 15:43:08 —
  FOUR MINUTES FORTY-EIGHT SECONDS, of which the cockpit spent about
  two on its ack and its push. The failure is not promptness and
  cannot be fixed by more of it; the property under test needs a
  lane that runs for tens of minutes, or a bench specced to hold at
  a checkpoint. → the flight-context line above · Needs-you 2
- 🔴 THE CANARY WINDOW IS NARROWER THAN THE DISPATCH SPREAD — and
  lane C's "spawn produced no session" was WRONG, corrected from
  first-hand evidence. A cloud session DID reach that bench, at
  15:21 UTC, ~27 minutes after the 14:54:43Z label and long past
  the ~10-minute window; it found the parked Status, self-terminated
  without claiming, and said so in a PR comment at 15:22 that names
  its own stale clone head. The respawn's session arrived in ~2
  minutes. SAME ROUTE, SAME BENCH, ~27 MIN THEN ~2 MIN: the failure
  mode is DISPATCH LATENCY, not a dead trigger — a materially
  different repair from the one a lost-spawn reading suggests, and
  an argument for a window wider than the observed spread.
  Consequence, already backstopped: a re-spawn can put two sessions
  on one bench, and the wake-lock kills the loser at the cost of a
  burned cap run, never split-brain work — which is exactly what
  happened at 15:21.
  → [the comment](https://github.com/wsher0901/roam/pull/280#issuecomment-5181103787)
  · its bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280)
- 🔴 THE COCKPIT REPEATED THE WRONG DIAGNOSIS FOR 25 MINUTES, and
  the reason is worth more than the error. It read
  [#280](https://github.com/wsher0901/roam/pull/280)'s metadata
  before the respawn, saw `comments: 2`, and did not open them; the
  contradicting evidence was one call away and sat unread from
  15:22 to 15:47. The board it painted, and the advice it gave the
  founder, both carried "no session was ever born" as fact. NOTHING
  IN THE WORKSHOP CATCHES THIS: a PR's comments are the lane's only
  channel for what a git clone cannot show, and no gate, ritual or
  law requires reading them before acting on a bench.
  → its line in [IDEAS](IDEAS.md), when the harvest runs
- 🟡 A LANE'S STAMPS DRIFTED ~2.5 MINUTES INTO THE FUTURE — lane C
  read the shell clock once on waking and extrapolated the rest
  from the shape of its own work, so a completion carried `15:47`
  while the clock read `15:45:54`. It caught and corrected itself.
  A live breach of the derivation law's second half, and EVERY GATE
  PASSED IT: `check:memory`, `check:links` and CI were all green,
  because a plausible stamp is indistinguishable from a true one.
  → its bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280)
- 🟡 A REDELIVERED `pull_request.labeled` CAUGHT LIVE — a second
  event fired for [#280](https://github.com/wsher0901/roam/pull/280)
  at ~15:46 citing head `8400157`, five commits behind the branch.
  The lane re-read its Status from origin, found a line it owned,
  and carried on; a FRESH session would have found the same line,
  not owned it, and self-terminated. Same rule, two seats, two
  correct opposite actions — the read-origin-first rule doing the
  whole job.
  → its bench memory, on the branch behind [#280](https://github.com/wsher0901/roam/pull/280)
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

Nothing is urgent any more — the timed part of this flight is over
and it produced a measurement instead of a pass. Flight 2's whole
cargo sits green at the gate waiting for your word, and the freeze
question is now a scheduling call rather than a race: run MODE P
today on a finished fleet, or keep the word for a flight with
slower lanes. Either way the three PRs keep; they expire never.
