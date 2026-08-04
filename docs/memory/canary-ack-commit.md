---
type: memory
id: canary-ack-commit
updated: 2026-08-04 14:28 UTC · bench birth · work PC
---
# canary-ack-commit — a lane reads its licence from the branch

## Status
bench ready

Born bench-first at the desk, 2026-08-04, as LANE A of FLIGHT 2.
Nothing claimed yet. The next seat to write here is the lane, with
its canary claim.

## What this task is
One rule into
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides):
a lane's licence to work is an ack COMMIT ON ORIGIN, never a message
delivered to its session. Flight 1 met the failure live — a
well-formed ack token arrived by message twenty seconds before any
ack commit existed — and the lane refused it only because it
happened to check origin. The contract never told it to.

Scope edges and the full mandate:
[the spec](../record/specs/canary-ack-commit.md). The two files this
lane may touch are named there and are not negotiable — flight 2
flies three lanes at once, and disjointness is what keeps them from
colliding.

## Pending issues
None yet.

One thing to hold carefully rather than solve: the word-versus-token
match question is FILED DEFERRED by the founder and sits in the same
section this bench edits. It must come out of this bench unruled.

## Left / idle
Everything — the bench has not been claimed.

## The story
2026-08-04 14:28 UTC · bench birth · work PC — the founder set
flight 2's scope: three cloud lanes carrying flight 1's own repairs
back into the machinery, so that the fleet path gets flown while
real cargo moves. This bench is lane A.

The cargo was chosen because it is the sharpest thing flight 1
learned and the only one that is a safety hole rather than an
inconvenience: if a message can start a lane working, then anything
able to write to a lane's session can start it working. The lane
that met it survived on a habit, not on a rule.

## Where to look
- [the spec](../record/specs/canary-ack-commit.md) — the mandate,
  the fleet law, and Done-means.
- [flight 1's story](../record/history/workshop/mechanism/flight-1-probe.md)
  — the false ack, and what neither seat could observe about it.
- [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the section under edit.
- [IDEAS](../IDEAS.md) — the line this repair closes, closed at the
  ground after the weld and never by this lane.

## Status vocabulary
See [TEMPLATE](TEMPLATE.md).
