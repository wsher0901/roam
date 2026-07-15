---
type: history
slug: retroactivity-sweep
shipped: 2026-07-15 12:08
pr: 132
---
# retroactivity-sweep — Retroactivity sweep

## Status
Shipped — merged as
[PR #132](https://github.com/wsher0901/roam/pull/132) on the founder's
word. Every gate on the way out waited on the pushed commit's Actions
run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
Repair three later-found gaps the moment they surfaced (the
retroactivity law): the "Cloud ledger" ghost that survived in HOME's
retention table after the abort-ledger retirement; the word "waiting"
in handoff's Sessions lead-in, which is not a Status-vocabulary word
(the vocabulary word is "blocked"); and two omissions in recall's
routing table (FOUNDATION as an identity home; DESIGN-KICKOFF as the
design-session-governance home). No new decision — this codifies
#128's Sessions-single-home and the D-036/D-039 routing completeness.
Out of scope: everything else — no LAWS, no restructuring.

## Pending issues
none.

## Left / idle
Nothing parked.

## The story
Born this session from the kickoff, the fourth in a run of currency
sweeps. The abort-ledger retirement (skills-precision-pass #128, then
its gate amendment) repointed the ghost across skills, HOME's
canary portrait, and TEMPLATE — but one sibling phrase, "the board's
Cloud ledger" in HOME's retention table, was missed; the
home-currency-pass caught the daily-loop and Terms drift but not that
row. The retroactivity law says a later-found gap is repaired the
moment it is found, so this sweep closes it, plus two smaller
precision misses: handoff's Sessions lead-in used "waiting" where the
State column takes Status-vocabulary words (blocked), and recall's
routing table omitted FOUNDATION (identity provenance) and
DESIGN-KICKOFF (design-session governance) from the homes it opens.

## Where to look
Spec: [retroactivity-sweep](../../../specs/retroactivity-sweep.md) ·
the targets: [HOME](../../../HOME.md) retention table,
[handoff §4](../../../skills/handoff.md),
[recall](../../../skills/recall.md) routing table.
