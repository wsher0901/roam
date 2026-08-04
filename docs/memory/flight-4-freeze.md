---
type: memory
id: flight-4-freeze
updated: 2026-08-04 21:10 UTC · the hold closed unused · cloud lane
---

# flight-4-freeze — the bench built to be caught mid-job

## Status

airborne · cloud · 2026-08-04 — THE HOLD CLOSED UNUSED, exiting

The hold ran its full 15 minutes (20:54:32Z → 21:09:49Z) and NO
FENCE ARRIVED: origin's head never moved off `d5347ca` and no
ack-to-proceed comment reached
[#303](https://github.com/wsher0901/roam/pull/303). That is the
null result [the spec](../record/specs/flight-4-freeze.md) names,
and it is written as one — never a staged rejection.

The lane held with `ls-remote` only, performing NO fetch at all, so
the no-rebase instruction held by construction rather than by
discipline. The exit is the plain push attempt the spec requires.

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

None. The hold is over and nothing is blocked.

## Left / idle

The exit push's own outcome, which is the last thing this flight
observes and goes into the probe's THE EXIT PUSH from git's report.

## Ideas surfaced

- §Canary disagrees with itself about the ack token's middle field:
  the canonical block reads `airborne · <url> · <date>`, the
  baton-holder bullet says `airborne · <vehicle or url> · <date>`.
  This flight's ack wrote a vehicle (`cloud`) — canonical under the
  bullet, not under the block. Nothing broke; the section simply
  cannot be quoted from one place. Detail in the probe's THE
  CHECKPOINT.
- A cloud lane's remote is not a constant across flights: flight 1
  observed a local HTTP git proxy on `127.0.0.1`, this flight
  observed `github.com` directly, same spawn route, a day apart.
  Worth knowing before any doctrine is written that assumes one.
- The freeze drill's apparatus works and is re-flyable as-is; only
  the fence was missing. If it is re-flown, the variable to change
  is the fence side — the hold produced a live, stopped worker for
  16 minutes and would have produced one for any window asked of
  it. Whether 15 minutes is enough for a fence to be summoned is
  not a lane's call.
- A lane holding for a signal should poll with `git ls-remote`, not
  `git fetch`: it reads origin without writing local refs, so no
  later step can fast-forward past what it was watching for. Cheap,
  and it makes a whole class of self-inflicted contamination
  impossible. Candidate line for
  [§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking).

## The story

2026-08-04 21:10 UTC · the hold closed unused · cloud lane — the
15-minute window ran out with origin's head unmoved at `d5347ca`
and no ack-to-proceed comment on
[#303](https://github.com/wsher0901/roam/pull/303). The bench held
the alive-and-stopped state for the whole window — the state three
previous flights could not offer a fence — and the fence did not
come. THE RULE UNDER TEST IS STILL UNOBSERVED, but for a new
reason: before, there was no live worker to stop; this time there
was one, and no event arrived. WHY is not observable from this
seat, and the probe says so rather than guessing.

One instrument decision worth keeping: the hold polled with
`git ls-remote` and never fetched, so a fast-forward past a fence
was impossible by construction rather than avoided by discipline.
For a drill whose experiment a single reflexive `git pull` would
destroy, that is the difference between a safeguard and an
intention.

2026-08-04 20:53 UTC · MOMENT 2, the checkpoint · cloud lane — the
probe's BORN and THE CHECKPOINT are written and this commit pushes
them. THE DECISION RECORDED HERE IS THE MATCHER: this lane armed
the anchored test on the FULL token `airborne ·`, the form
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
fixes, and not on the bare word that
[flight 1](../record/probes/flight-1-shakedown.md) substituted and
recorded as its most consequential finding. That choice is what
makes this flight's handshake green a green for the contract rather
than for a modified instrument. The ack itself arrived as commit
`c08a079` at 20:50:12Z and was read back from origin at 20:50:27Z —
85 seconds after the canary, ~14% of the window.

A redelivered `pull_request.labeled` webhook citing the birth SHA
`771bd45` — two commits stale — reached this session at ~20:50:2x.
The wake-lock was obeyed: Status re-read from origin FIRST, no
duplicate claim, no second canary. Third recorded occurrence of
that redelivery, third harmless death.

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
