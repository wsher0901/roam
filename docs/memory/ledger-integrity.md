---
type: memory
id: ledger-integrity
updated: 2026-07-15 · birth · work PC
---
# ledger-integrity — a CI gate for the history ↔ ledger bijection

## Status
airborne — bench born on `chore/ledger-integrity`, draft PR next.
Work underway: the check-ledger script + its CI wiring + the ship §7
staging tightening.

## What this task is
A CI gate enforcing the ship §7 invariant — history/ files and the
ledger index stay in one-to-one bijection — so a dropped or orphaned
ledger line goes RED, not silent. Plus a weld-staging line in
[ship §7](../skills/ship.md) so the exact drop that happened on
cap-confirm ([#138](https://github.com/wsher0901/roam/pull/138), fixed
in [#139](https://github.com/wsher0901/roam/pull/139)) can't recur.
Enforces an existing invariant; no new decide. Out of scope:
reformatting the ledger, the four-door legend, product code.
See [[roam-weld-stage-all-files]].

## Pending issues
none.

## Left / idle
Nothing parked.

## The story
STEP 0 reconciliation ran first. The founder's "65 vs 70" was a rough
grep counting legend bullets; the real state is clean — 65 history
files ↔ 65 ledger lines, perfect bijection by trailing #PR, no
orphans, drops, dups, or bad quadrants. The design pivot: the kickoff
framed the match as (quadrant, slug), but the 36 pre-slug frozen
ledger lines carry a #PR and no slug, and reformatting them is out of
scope. The trailing #PR is the one key on both sides for all 65
entries — every ledger line ends `· #<n>`, every history file has
`pr:` frontmatter — so the checker keys on #PR and additionally
asserts quadrant/slug agreement wherever a slug exists. A crude first
grep flagged a phantom dup #128 (the home-currency-pass title
references `#128`); anchoring PR extraction at end-of-line resolved it
— a lesson the checker bakes in.

## Where to look
Checker: `scripts/check-ledger.mjs` (born in this task's work commit,
styled on [check-links.mjs](../../scripts/check-links.mjs)). Wiring:
package.json, [ci.yml](../../.github/workflows/ci.yml). Invariant:
[ship §7](../skills/ship.md). Data: [the ledger](../history/README.md).
Spec: [ledger-integrity](../specs/ledger-integrity.md).
