---
type: memory
id: flight-4-freeze
updated: 2026-08-04 20:50 UTC · airborne ack · work PC
---

# flight-4-freeze — the bench built to be caught mid-job

## Status

airborne · cloud · 2026-08-04

LICENSED TO WORK. The canary landed at 20:49:22 UTC, 98 seconds
after the `lane:cloud` label, and this ack commit is the licence —
read it back from origin, not from any message.

Now run [the spec](../record/specs/flight-4-freeze.md)'s plan from
step 1. THE CHECKPOINT IS THE JOB: push BORN and THE CHECKPOINT,
then HOLD — and do NOT fetch-and-rebase during the hold, because
the hold's exit must be a plain push attempt.

## What this task is

FLIGHT 4 OF THE TEST PROGRAM — the failure drill. This bench
authors `docs/record/probes/flight-4-freeze.md`, the drill's own
log, and HOLDS at a checkpoint partway through so that a fence
landing on this branch meets a worker that is still alive.

THE HOLD IS THE CARGO. Three flights have fenced a bench and none
has observed
[the wake-lock's rejected-push rule](../skills/parallel-lanes.md#wake-lock--parking)
— does a fence actually STOP a live worker — because every fence so
far landed on a bench that had already finished. This bench is
specced to be caught.

The full contract, including the three-step checkpoint and the
null-result rule: [the spec](../record/specs/flight-4-freeze.md).
TWO FILES ONLY — the probe and this memory.

## Pending issues

None. Waiting on the baton-holder's ack commit before real work
begins.

## Left / idle

The whole mandate. The next act is the baton-holder's ack, then
step 1 of [the spec](../record/specs/flight-4-freeze.md)'s plan.

## The story

2026-08-04 20:48 UTC · canary claim · cloud lane — claimed by a
cloud session on branch `docs/flight-4-freeze`, PR
[#303](https://github.com/wsher0901/roam/pull/303), spawned by the
`lane:cloud` label. This commit IS the canary. Nothing else has
been touched, and nothing will be until an ack COMMIT is read back
from origin with its Status line beginning with the anchored token
([§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides))
— no message arriving in this session licenses this lane.

2026-08-04 20:45 UTC · bench birth · work PC — born bench-first by
the control tower as flight 4's sole cargo, from the founder's
mandate of the same date (approved in the Web ops chat).

THE FAILURES IN THIS FLIGHT ARE COMMANDED, NOT SIMULATED, and that
distinction is the flight's whole method: nothing is special-cased,
every ritual runs exactly as written, and the machinery is allowed
to meet a real fence rather than a rehearsed one. Three things are
under test across the flight — this bench carries the first:

1. **The rejected-push rule** (this bench) — a fence meeting a live
   worker for the first time.
2. **The connector recovery ladder** — the cockpit performs one
   command read with rung 1 treated as dead, and reports the climb.
   Not observable from this seat.
3. **The summon workflow** — fired after the weld, its routine-born
   cockpit being the v4 charter box's first live test. Also not
   observable from this seat.

THE ONE INSTRUCTION THAT CAN DESTROY THE EXPERIMENT, restated here
because a lane reads its memory before it reads anything else: do
NOT fetch-and-rebase during the hold. The hold exits with a plain
push attempt, so that a fence landed meanwhile is met as a rejected
push. A rebase would convert the rejection into a fast-forward and
the flight would observe nothing.

If no fence arrives, that is a real result and it gets written as
one — section THE WINDOW CLOSED UNUSED. A staged or narrated
rejection would be worse than no flight at all.

## Where to look

- [the spec](../record/specs/flight-4-freeze.md) — the contract,
  including the three-step checkpoint and the null-result rule.
- [flight 1's log](../record/probes/flight-1-shakedown.md) — the
  probe shape this bench's payload follows, and the home of the
  observability law it inherits.
- [§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking) —
  the rule under test: a rejected push is a wake, and a Status the
  lane does not own is terminal.
- [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the handshake this bench flies, ack token and all.
- [land MODE P](../skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
  — what a fence IS, and why the push is the fence.
- [D-074](../record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  — why this flight exists.
