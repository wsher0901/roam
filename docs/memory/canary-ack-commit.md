---
type: memory
id: canary-ack-commit
updated: 2026-08-04 15:00 UTC · airborne ack · work PC
---
# canary-ack-commit — a lane reads its licence from the branch

## Status
airborne · cloud · 2026-08-04

Born bench-first at the desk, 2026-08-04, as LANE A of FLIGHT 2. A
cloud lane woke on the `lane:cloud` label at 14:56 UTC and claims
this bench with this commit. It now waits for the baton-holder's
ack, tested for as
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
prescribes — the anchored token at the start of this Status line —
and read from the branch on origin, never from anything delivered to
the session. No real work until then.

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
The whole payload — the lane is claimed but unlicensed until the ack
commit lands on origin.

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

2026-08-04 14:58 UTC · canary claim · cloud — the lane woke on the
label and posted this claim as its first act. Two frictions to
report before any payload work, per the fleet law's "friction is a
finding" clause:

- THE LANE WOKE WITHOUT KNOWING WHICH BENCH IT OWNED. Three PRs
  carry `lane:cloud` at once — flight 2's whole point — and the
  kickoff prompt says "that PR" as though one were distinguishable.
  Nothing in the prompt, the branch checked out (a
  `claude/…` session branch, not a lane branch), or the PR bodies
  names it. The answer turned out to be in the ENVIRONMENT:
  `CCR_TRIGGER_PR_NUMBER=278`, with `CCR_TRIGGER_HEAD_SHA` and
  `CLAUDE_CODE_BASE_REF=refs/pull/278/head` agreeing. That is a
  reliable identifier the contract never mentions, and without it a
  fleet lane must guess and race its siblings for a bench. Worth a
  line in the lane-worker master.
- THE CLOUD SEAT'S GIT IDENTITY WAS `Claude
  <noreply@anthropic.com>` on arrival, exactly as lane B's bench
  predicts; this lane set it from main's existing convention before
  committing. Independent confirmation of lane B's cargo, observed
  rather than inferred.

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
