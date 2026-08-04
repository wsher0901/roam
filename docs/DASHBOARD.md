---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 15:39 UTC by the cockpit · from the cloud
FLIGHT 2 IS AIRBORNE — 1 lane WORKING, 2 at the gate · needs-you 2 ·
git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🔴 **SAY THE FREEZE WORD NOW — `ground the fleet`, in the
   cockpit session on your phone. THE WINDOW IS OPEN AND IT
   CLOSES BY ITSELF.** You ruled `re-spawn C` at 15:34; lane C
   canaried at 15:37 and was acked airborne at 15:38, so for the
   first time in this flight a lane is genuinely MID-WORK — which
   is the one property MODE P has never been tested against. It
   stops being true the moment C finishes, and C's cargo is one
   table row. The word is exact: a bare "land" is
   [land](skills/land.md)'s trigger 4 and routes to MODE R, which
   fences nothing. (since 08-04)
   → [land §Scenario 3](skills/land.md#scenario-3--the-founders-freeze-word-only)
   · [the trigger table](skills/land.md#the-trigger-table--what-starts-a-landing)
2. 🟡 **THE MERGE WORD ON [#278](https://github.com/wsher0901/roam/pull/278)
   AND [#279](https://github.com/wsher0901/roam/pull/279)** — both
   complete, both Actions-green on the pushed head, both standing
   at THE GATE since 15:05. Both are LANE-AUTHORED, so the law asks
   any non-author session's review and then your word; the cockpit
   is a non-author of both and can supply the review on request.
   Nothing expires here — they wait as long as you need.
   (since 08-04)
   → [LAWS §no-solo-approval](LAWS.md#workflow-non-negotiable)

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
| lane · home-hook-row | HOME: the close-lock hook's missing row | 🟡 | WORKING — respawned on your word, canary 15:37, acked airborne 15:38 · the flight's only interruptible lane · [#280](https://github.com/wsher0901/roam/pull/280) |
| lane · canary-ack-commit | §Canary: the ack is a commit on origin, never a message | 🟢 | COMPLETE 15:05 UTC, awaiting merge · [#278](https://github.com/wsher0901/roam/pull/278) |
| lane · cloud-git-identity | machine-setup: the cloud seat's git identity | 🟢 | COMPLETE 15:04 UTC, awaiting merge · [#279](https://github.com/wsher0901/roam/pull/279) |

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

That ruling restored the experiment. Lane C canaried at 15:37 and
was acked airborne at 15:38, so a lane is working again and the
freeze word has a subject. THE WINDOW IS SELF-CLOSING: C's cargo is
one table row plus a table audit, and when it finishes, the
mid-work property leaves with it — which is exactly how the first
attempt was lost. The freeze word is Needs-you 1 for that reason
and nothing else.

WHAT THE FREEZE IS EXPECTED TO PROVE, so the result can be read
against it afterwards: that MODE P's fence, written onto a branch
whose worker is still running, actually STOPS that worker — the
wake-lock's rejected-push rule, never once exercised. A and B get
fenced at the gate alongside C, which tests the cheaper half:
whether the fleet-at-ground table and the `grounded for local
pickup` marker bring all three back at the next pickup's resume
ask.

Both finished PRs stand ready at THE GATE meanwhile, so AUTO-LAND
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

- 🔴 THE MID-WORK WINDOW CLOSES BEFORE A COCKPIT CAN OPEN — lanes
  A and B pushed their completion rewrites at 15:04 and 15:05;
  liftoff fired the cockpit at 15:11 and 15:12 and it seated at
  15:18. The fire comes after the lanes by construction, so a duty
  timed against "the fleet is mid-work" cannot be discharged by
  promptness. Answered for THIS flight by respawning lane C, which
  is a manual save and not a fix. → the flight-context line above
- 🟡 LANE C'S FIRST SPAWN PRODUCED NO SESSION — the label
  registered on GitHub and `count:runs` counted it, but nothing was
  ever born; the phantom-label case, met live for the second time.
  THE RESPAWN AT 15:35 ANSWERED ONE QUESTION: an identical label
  cycle on the same PR canaried in two minutes, so the silence was
  not caused by the bench having been labeled before. The first
  failure's cause remains unknown from any seat with a git clone —
  the routine's run history is a UI surface. → its bench memory, on
  the branch behind [#280](https://github.com/wsher0901/roam/pull/280)
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

Say `ground the fleet` while lane C is still working — the cockpit
has pushed your phone and the window closes on its own when C
finishes. The fleet freezes mid-work, which is the whole
experiment, and everything after that is the next pickup's. The two
finished PRs keep until you want them; they expire never.
