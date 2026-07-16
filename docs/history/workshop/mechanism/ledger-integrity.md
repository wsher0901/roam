---
type: history
slug: ledger-integrity
shipped: 2026-07-16 08:57
pr: 140
---
# ledger-integrity — a CI gate for the history ↔ ledger bijection

## Status
Shipped — merged as
[PR #140](https://github.com/wsher0901/roam/pull/140) on the founder's
word. Every gate on the way out waited on the pushed commit's Actions
run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
A CI gate enforcing the ship §7 invariant — history/ files and the
ledger index stay in one-to-one bijection — so a dropped or orphaned
ledger line goes RED, not silent. Plus a weld-staging line in
[ship §7](../../../skills/ship.md) so the exact drop that hit
cap-confirm ([#138](https://github.com/wsher0901/roam/pull/138), fixed
in [#139](https://github.com/wsher0901/roam/pull/139)) can't recur.
Enforces an existing invariant; no new decide. Out of scope:
reformatting the ledger, the four-door legend, product code.
See [[roam-weld-stage-all-files]].

## Pending issues
none.

## Left / idle
Nothing parked. The orphaned worktree from the collision below was
removed during ship.

## The story
STEP 0 reconciliation ran first. The founder's "65 vs 70" was a rough
grep counting legend bullets; the real state is clean — 65 history
files ↔ 65 ledger lines, perfect bijection by trailing #PR. The design
pivot: the kickoff framed the match as (quadrant, slug), but the 36
pre-slug frozen ledger lines carry a #PR and no slug, and reformatting
them is out of scope. The trailing #PR is the one key on both sides for
all 65 entries, so the checker keys on #PR and additionally asserts
quadrant/slug agreement wherever a slug exists. A crude first grep
flagged a phantom dup #128 (the home-currency-pass title cites `#128`);
anchoring PR extraction at end-of-line resolved it — a lesson the
checker bakes in. Negative tests proved it goes red on a drop (the
exact cap-confirm #138 case), an orphan, a bad quadrant, and a missing
#PR. Only the living CI-mirror lists (LAWS §Workflow, ship §1) gained
"ledger"; frozen records (D-038, shipped specs/history) were left as
true records of their time.

Mid-task the `docs+cap-confirm` worktree collapsed out from under the
lane — a second (cockpit) session had independently picked up the same
task and removed that worktree, so this lane's `.git` link vanished and
git resolved to the main checkout. The committed bench was safe on
origin and the checker text was in context; recovery was to restore the
main checkout to `main`, `git worktree add` a fresh worktree on the
existing branch, re-enter it, re-junction node_modules, and copy the
checker back. No work was lost — bench-first + push-every-commit
absorbed a genuine two-worker collision, and the cockpit then found
this lane already finished, verified it independently, and carried it
to the gate.

## Where to look
Checker:
[scripts/check-ledger.mjs](../../../../scripts/check-ledger.mjs)
(styled on [check-links.mjs](../../../../scripts/check-links.mjs)).
Wiring: package.json,
[ci.yml](../../../../.github/workflows/ci.yml). Invariant + staging
line: [ship §7](../../../skills/ship.md). Living step lists:
[LAWS §Workflow](../../../LAWS.md#workflow-non-negotiable), ship §1.
Data: [the ledger](../../README.md). Spec:
[ledger-integrity](../../../specs/ledger-integrity.md). PR:
[#140](https://github.com/wsher0901/roam/pull/140).
