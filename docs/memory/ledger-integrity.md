---
type: memory
id: ledger-integrity
updated: 2026-07-15 · completion · work PC
---
# ledger-integrity — a CI gate for the history ↔ ledger bijection

## Status
complete, awaiting merge — checker + CI wiring + ship §7 tightening
pushed on `chore/ledger-integrity`,
[PR #140](https://github.com/wsher0901/roam/pull/140) ready. At THE
GATE: founder approval follows external review. Full CI mirror (now
six local checks) green; the pushed commit's Actions run is the
arbiter.

## What this task is
A CI gate enforcing the ship §7 invariant — history/ files and the
ledger index stay in one-to-one bijection — so a dropped or orphaned
ledger line goes RED, not silent. Plus a weld-staging line in
[ship §7](../skills/ship.md) so the exact drop that hit cap-confirm
([#138](https://github.com/wsher0901/roam/pull/138), fixed in
[#139](https://github.com/wsher0901/roam/pull/139)) can't recur.
Enforces an existing invariant; no new decide. Out of scope:
reformatting the ledger, the four-door legend, product code.
See [[roam-weld-stage-all-files]].

## Pending issues
none.

## Left / idle
Nothing parked. One cleanup left for the session: the orphaned
`.claude/worktrees/docs+cap-confirm` directory (a node_modules
junction + a stray scripts/ copy) from the worktree collapse below —
remove the junction with `rmdir` (never `rm -rf`, which would follow
it into the real node_modules).

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
session — its `.git` link vanished, so git resolved to the main
checkout (which had ended up on this branch). The committed bench was
safe on origin and the checker text was in context; recovery was to
restore the main checkout to `main`, `git worktree add` a fresh
worktree on the existing branch, re-enter it, re-junction node_modules,
and copy the checker back. No work lost.

## Where to look
Checker: [scripts/check-ledger.mjs](../../scripts/check-ledger.mjs)
(styled on [check-links.mjs](../../scripts/check-links.mjs)). Wiring:
package.json, [ci.yml](../../.github/workflows/ci.yml). Invariant +
staging line: [ship §7](../skills/ship.md). Living step lists:
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable), ship §1. Data:
[the ledger](../history/README.md). Spec:
[ledger-integrity](../specs/ledger-integrity.md). PR:
[#140](https://github.com/wsher0901/roam/pull/140).
