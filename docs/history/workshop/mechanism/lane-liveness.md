---
type: history
slug: lane-liveness
shipped: 2026-07-16 10:37
pr: 142
---
# lane-liveness — live-vs-reclaimable from the commit heartbeat

## Status
Shipped — merged as
[PR #142](https://github.com/wsher0901/roam/pull/142) on the founder's
word. Every gate on the way out waited on the pushed commit's Actions
run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
The fix for the ledger-integrity parallel-lane incident: "commits are
the heartbeat" becomes load-bearing
([D-042](../../../DECISIONS.md#d-042--2026-07--lane-liveness--derive-live-vs-reclaimable-from-the-commit-heartbeat-read-it-at-claim-check-and-session-start-cleanup-so-a-live-lane-is-never-adopted-or-pruned-amends-the-claim-check-clause-and-pickup-3-upholds-the-wake-lock-and-seat-invariance)).
A bench/worktree with a non-terminal Status and a fresh heartbeat is
LIVE — never adopted, never secured or pruned; a terminal Status
(parked · failed · held · shipped · superseded) or silence past the
staleness window (~30 min, home: parallel-lanes §Canary) makes it
RECLAIMABLE; doubt → ask. Read at the two previously blind sites —
the claim check ([LAWS §Workflow](../../../LAWS.md#workflow-non-negotiable))
and [pickup §3](../../../skills/pickup.md)'s worktree sweep — fed by
a per-worktree verdict the session-start hook computes and prints.
Out of scope: the double-dispatch diagnostic (logged to
[IDEAS](../../../IDEAS.md)), cloud/routine changes, product code.
Spec: [lane-liveness](../../../specs/lane-liveness.md).

## Pending issues
none.

## Left / idle
Nothing parked. The double-dispatch diagnostic deliberately lives in
IDEAS, not here.

## The story
Born 2026-07-16, the morning after the incident: a cockpit session
claim-checked a bench that a live lane was flying, adopted it,
re-implemented the task, and removed the lane's worktree mid-flight.
The lane survived (bench-first + push-every-commit) and the collision
cost only duplicate work — but both blind spots were real: the claim
check read Status words and PR state, never the heartbeat; pickup §3
presumed every dirty sibling worktree dead.

The one design call made here: the kickoff's LIVE clause ("last
commit within the window, whatever the Status") and RECLAIMABLE
clause ("terminal Status OR silent") overlap on a just-parked bench —
the park stamp IS a fresh commit. Precedence had to go to the
terminal Status, or a parked bench could not be lawfully resumed or
respawned until the window lapsed, breaking the ordinary
handoff→liftoff flow. That precedence is safe by the kickoff's own
argument: the wake-lock guarantees no worker survives a Status it
does not own, so a terminal word is authoritative regardless of
heartbeat age. "Whatever the Status" now reads precisely: whatever
NON-terminal word the Status shows (airborne, claimed, blocked, bench
ready…), a fresh heartbeat means hands off.

The hook's verdict was proven against a scratch worktree three ways —
fresh commit + airborne → LIVE; a two-hour-backdated commit →
RECLAIMABLE (silent past the window); Status stamped parked →
RECLAIMABLE (terminal) — then the scratch was removed. One test
gotcha: the `GIT_COMMITTER_DATE` env var rejects relative dates
("2 hours ago") that `--date` would accept; an ISO timestamp works.

Two small fidelity notes. The kickoff's pickup §3 replacement ended
"Git wins where it disagrees with the board" — §3 already closes with
exactly that rule, so the sentence was not duplicated. And the
kickoff said to extend the hook's "existing worktree listing"; the
hook had none (only gone-local branch removal), so the per-worktree
block is new, placed right after it.

## Where to look
The rule:
[parallel-lanes §Liveness](../../../skills/parallel-lanes.md#liveness--live-vs-reclaimable);
window constant: its §Canary. Read-sites:
[LAWS §Workflow](../../../LAWS.md#workflow-non-negotiable) claim-check
clause · [pickup §3](../../../skills/pickup.md). The verdict:
`.claude/hooks/session-start.mjs`. Vocabulary:
[TEMPLATE](../../../memory/TEMPLATE.md). Decision:
[D-042](../../../DECISIONS.md#d-042--2026-07--lane-liveness--derive-live-vs-reclaimable-from-the-commit-heartbeat-read-it-at-claim-check-and-session-start-cleanup-so-a-live-lane-is-never-adopted-or-pruned-amends-the-claim-check-clause-and-pickup-3-upholds-the-wake-lock-and-seat-invariance).
The incident: [ledger-integrity](ledger-integrity.md).
PR: [#142](https://github.com/wsher0901/roam/pull/142).
