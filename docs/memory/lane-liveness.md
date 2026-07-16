---
type: memory
id: lane-liveness
updated: 2026-07-16 · birth · work PC
---
# lane-liveness — live-vs-reclaimable from the commit heartbeat

## Status
airborne — bench born on `docs/lane-liveness` by the cockpit, working
it directly; draft PR next. Work ahead: D-042 + the ripple (LAWS ·
parallel-lanes · pickup · session-start hook · TEMPLATE · HOME ·
IDEAS) in one commit.

## What this task is
The fix for the ledger-integrity parallel-lane incident: "commits are
the heartbeat" becomes load-bearing. A bench/worktree with a fresh
heartbeat is LIVE — never adopted, never secured or pruned; a
terminal Status or silence past the staleness window makes it
RECLAIMABLE; doubt → ask. The rule is read at the two sites that were
blind — the claim check ([LAWS §Workflow](../LAWS.md#workflow-non-negotiable))
and pickup §3's worktree sweep, fed by a per-worktree verdict the
session-start hook computes and prints. The wake-lock backstops a
misjudged window. Out of scope: the double-dispatch diagnostic
(IDEAS), cloud/routine changes, product code. Spec:
[lane-liveness](../specs/lane-liveness.md).

## Pending issues
none.

## Left / idle
Everything — work not yet begun; this is the birth stub.

## The story
Born 2026-07-16, the morning after the incident: a cockpit session
claim-checked a bench that a live lane was flying, adopted it,
re-implemented the task, and removed the lane's worktree mid-flight.
The lane survived (bench-first + push-every-commit) and the collision
cost only duplicate work — but both blind spots were real: the claim
check read Status words and PR state, never the heartbeat; pickup §3
treated every dirty sibling worktree as dead by assumption.

## Where to look
Spec: [lane-liveness](../specs/lane-liveness.md). The incident:
[ledger-integrity history](../history/workshop/mechanism/ledger-integrity.md).
Rule home once shipped: [parallel-lanes](../skills/parallel-lanes.md)
§Liveness; window constant: its §Canary; hook:
`.claude/hooks/session-start.mjs`.
