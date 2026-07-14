---
type: history
slug: ci-trust
shipped: 2026-07-14 10:32
pr: 117
---
# ci-trust — CI is the arbiter: Actions-green at every gate; the local gate mirrors all six CI steps; anchors born resolving

## Status

Shipped — merged as
[PR #117](https://github.com/wsher0901/roam/pull/117) on the
founder's word after external review, second of the merge order
#115 → #117. Its own new law held on the way out: every gate waited
on the pushed commit's Actions run going green, and both welds
merged under `--auto`, on green.

## What this task is

CI is the single arbiter of "green." THE GATE, every lane's
ready-flip, and LAWS' "done" all require the pushed commit's GitHub
Actions run to be green — local green never suffices. The preflight
gate became the full CI mirror (lint · format:check · check:links ·
tests · build); [decide](../../../skills/decide.md) now runs check:links
before an entry's first push, so a D-number heading and every link to
it are born resolving. Recorded as
[D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027).

## Pending issues

none. The one founder decision — enable branch protection? — was
answered yes and applied: main requires the `checks` context,
enforce_admins on, no review requirement, strict off.

## Left / idle

Only the merge word. On approval, ship's atomic weld squash-merges;
protection means the weld itself only lands once `checks` is green
(the law enforcing itself). Nothing parked.

## The story

Born from this session's CI-trust diagnosis. The founder asked for a
failure diagnosis; the run log showed a pattern — many PRs going
fail→pass on one branch, each first failure a check:links anchor miss
(a D-number heading and its links not yet in the same commit), plus
one spell where main itself was red for ~30 minutes (#111→#112).
Seven red Actions notifications had reached the founder before any
written report, because every report was built from local checks and
nothing ever looked at Actions. The fix makes Actions the arbiter
everywhere a gate exists (ship, lanes, LAWS' "done") and kills the
anchor stumble at its source (decide runs check:links pre-push).

Two judgment calls on the branch. First, the D-number: main's last is
D-036, but D-037 is claimed by the in-flight laws-close PR #115
(awaiting the merge word). Reusing D-037 would collide the moment
#115 merges, so this task took D-038 — the correct number reserves
D-037 for laws-close. Second, the required check context: the PR
carries three green checks (Vercel, Vercel Preview Comments, and the
CI job `checks`); only `checks` is the lint/format/links/tests/build
gate, so protection requires that one — not the Vercel deploy checks,
which would wrongly block a merge on an unrelated preview hiccup.

Node was never the problem: the diagnosis proved the pipeline
healthy, so the earlier node-24 hypothesis is retracted and ci.yml
stays untouched. Pre-push git hooks were rejected too — the
decide-step check:links call is lighter and per-machine hooks don't
travel with the public repo.

Ideas surfaced: anchor-generating helper for D-links (recurring
first-push stumble; see the run-log pattern in this task's story).

## Where to look

Spec: [ci-trust](../../../specs/ci-trust.md) · decision:
[D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)
· PR [#117](https://github.com/wsher0901/roam/pull/117) · targets:
[ship](../../../skills/ship.md) ·
[parallel-lanes](../../../skills/parallel-lanes.md) ·
[decide](../../../skills/decide.md) ·
[LAWS §Workflow](../../../LAWS.md#workflow-non-negotiable) ·
[SETUP §Once and done](../../../SETUP.md#once-and-done--cloud-accounts).
