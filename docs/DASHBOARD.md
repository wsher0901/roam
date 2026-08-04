---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 16:02 UTC by land (MODE P) · from the cloud
FLIGHT 2 IS GROUNDED — 3 lanes fenced, all complete and green,
waiting at your desk · needs-you 2 · git outranks this board. How to
read it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **SIT DOWN AT A DESK AND RUN [pickup](skills/pickup.md) — it
   asks, and your answer moves all three.** The whole of flight 2's
   cargo is fenced, complete and green, waiting in the
   fleet-at-ground table below. THE ANSWER THIS FLEET WANTS IS
   `local <id>`, ONE PER LANE — adopt the branch at the desk, zero
   cap runs, give the merge word, weld. Do NOT answer `continue`:
   it redeploys three fresh cloud workers onto finished benches,
   costs three cap runs, and gives them nothing to do. Each lane's
   fence says the same thing in its own words. (since 08-04)
   → [pickup §6](skills/pickup.md#6--fleet-resume-on-the-founders-answer)
   · [LAWS §no-solo-approval](LAWS.md#workflow-non-negotiable)
2. 🟡 **RESCHEDULE THE MID-WORK FREEZE TEST, or retire it.** It is
   now unproven for the THIRD time and the reason is measured, not
   guessed: lane C ran 4m48s from licence to done, and the founder's
   word arrived 17 minutes after that. The fence landed on a
   finished bench, so the wake-lock's rejected-push rule — does a
   fence actually STOP a live worker — remains the one designed
   behaviour this workshop has never observed. It needs a lane whose
   cargo runs for tens of minutes, or a bench specced to HOLD at a
   checkpoint until acked. Your call whether that earns its own
   flight. (since 08-04)
   → [parallel-lanes §Wake-lock](skills/parallel-lanes.md#wake-lock--parking)
   · [land MODE P](skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
   · [the trigger table](skills/land.md#the-trigger-table--what-starts-a-landing)

## The baton

No live seat — LANDED 2026-08-04 · 16:02 UTC via MANUAL-LAND ·
3 lanes frozen → grounded for local pickup 2026-08-04

⚠️ **THE DOUBLE BIRTH RESOLVED ITSELF, and the record is worth
keeping.** Liftoff fired rung 1 twice — 15:11 and 15:12 UTC —
because the first fire's exit status was not captured and its speed
was misread as a failure. BOTH COCKPITS WERE REAL AND BOTH REACHED
THIS BOARD. They raced to seat: the winner merged its self-seat at
[#283](https://github.com/wsher0901/roam/pull/283), and the twin's
own attempt survives as
[#285](https://github.com/wsher0901/roam/pull/285), opened 15:17:33
and closed unmerged. The board-is-the-arbiter rule was flown for
real, against a genuine two-session race, and it held with no
collision and no lost work. Nothing is owed here; the note stands
because the next double fire will be read against it.

## In flight

Nothing flying. THE FLEET IS AT GROUND — three benches fenced by
[land](skills/land.md) MODE P at 16:02 UTC, each complete to its
last push and resumable from any seat.

**THE FLEET AT GROUND** — `progress` and `exact next step` are
lifted from each lane's own fence, so this table and the memories
cannot disagree.

| id | purpose | progress | exact next step | state |
|---|---|---|---|---|
| canary-ack-commit | §Canary: a lane's licence is an ack commit on origin, never a message | DONE — spec fully met incl. the negative one; green on `e0891f1`; reviewed | answer `local canary-ack-commit` at pickup, then the merge word on [#278](https://github.com/wsher0901/roam/pull/278) | held |
| cloud-git-identity | machine-setup: the cloud seat's git identity | DONE — spec fully met; green on `974a8ef`; reviewed; carries one triage note to the desk | answer `local cloud-git-identity` at pickup, then the merge word on [#279](https://github.com/wsher0901/roam/pull/279) | held |
| home-hook-row | HOME: the close-lock hook's missing row | DONE — row in, 5-finding table audit reported; green on `14c935d`; reviewed | answer `local home-hook-row` at pickup, then the merge word on [#280](https://github.com/wsher0901/roam/pull/280) | held |

NO LANE HERE WANTS A WORKER. All three are finished; `redeploy`
would spend three cap runs to spawn sessions with nothing to do.
`local <id>` adopts each branch at the desk for zero cap runs, which
is the whole reason this fleet was grounded rather than merged from
the phone.

⚠️ **ONE STRAY BRANCH, DELIBERATELY NOT DELETED** —
`chore/cockpit-seat-repaint` carries one unique commit (`b8a907a`),
the twin cockpit's losing self-seat board draft behind the closed
[#285](https://github.com/wsher0901/roam/pull/285). The
resurrection rule forbids deleting a branch with unique commits, so
it is surfaced here instead. Its content is a superseded board
repaint and nothing else; safe to delete at the desk once you have
looked.

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

THE FOUNDER SAID `ground the fleet` AT 16:00 UTC, holding the
merges deliberately so the gates would travel to the desk through
pickup's resume ask rather than being decided from a phone. MODE P
ran at 16:02: three fences written and pushed, this board painted,
the flight closed. WHAT THAT PROVED, and it is the first time any
of it has been flown — the fence commit lands on a branch and
carries the full pause block; the fleet-at-ground table renders
from the fences rather than from the cockpit's memory; the
`grounded for local pickup` marker is on THE BATON line where
[pickup §5](skills/pickup.md#5--render-the-sit-down-summary-exactly-this-shape)'s
two-fact trigger reads it. The resume ask itself is the last
untested link and it fires at the next sit-down.

WHAT STAYS UNPROVEN, for the third time and now for a measured
reason: the wake-lock's rejected-push rule. All three fences landed
on finished benches, so no lane was ever stopped by one. That
behaviour is designed, load-bearing, and has never been observed —
the single largest untested claim left in the machinery.

## Working on

- FLIGHT 2 OF THE TEST PROGRAM — FLOWN AND GROUNDED 2026-08-04. The
  fleet path exercised for the first time end to end, carrying three
  of flight 1's repairs as real cargo; all three are fenced at the
  gate above, awaiting the desk. Scope set by the founder 2026-08-04.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order)),
one phase per line:

- PHASE 1 — settle & test: the audit is done; flight 1 shipped and
  FLIGHT 2 HAS FLOWN AND GROUNDED. Its cargo welds at your next
  sit-down; one property it went to test is still unproven and
  Needs-you 2 asks whether that earns another flight.
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

Sit down at either desk and run [pickup](skills/pickup.md). It will
find the marker on THE BATON line and the fleet-at-ground table
above, and ask you the resume question — the last link of the fleet
path that has never been flown. Answer `local <id>` three times,
give the merge word, and flight 2's cargo welds for zero cap runs.
Nothing expires and nothing is urgent.
