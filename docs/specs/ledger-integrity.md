---
type: spec
id: ledger-integrity
title: Ledger integrity — a CI gate for the history ↔ ledger bijection
status: open
stage: workshop
branch: chore/ledger-integrity
pr: —
opened: 2026-07-15
shipped: —
---
# ledger-integrity — a CI gate for the history ↔ ledger bijection

**Links:**
[history legend + ledger](../history/README.md) ·
[ship §7 — the weld](../skills/ship.md) ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
[check-links (style model)](../../scripts/check-links.mjs) ·
Terms: [the ledger](../HOME.md#terms)

## Goal

Make the ship §7 invariant — every shipped story has exactly one
ledger line, and every ledger line has exactly one history file —
machine-checkable and enforced by CI, so a dropped or orphaned ledger
line turns the PR RED (unmergeable) instead of leaving a silent gap.
A weld-staging tightening in ship §7 removes the way the line got
dropped in the first place. Enforces an existing invariant; no new
decision, no D-number.

## Out of scope

- Changing the ledger's format or the four-door legend. In particular,
  the pre-slug frozen ledger lines (`<date> · <title> → <quadrant> ·
  #<pr>`, no slug) are NOT reformatted — the checker accommodates them.
- Any product code.

## Plan

1. `scripts/check-ledger.mjs` — new, styled on `check-links.mjs`
   (zero deps, CRLF-normalized, header comment, nonzero-on-failure
   with file-specific messages, else the in-sync count).
2. `package.json` — `check:ledger` right after `check:links`.
3. `.github/workflows/ci.yml` — `npm run check:ledger` right after the
   `check:links` step, joining the arbiter's gates.
4. `docs/skills/ship.md` §7 — one belt-and-suspenders staging line
   after the ledger-append bullet.
5. Weave/retroactivity — every corpus list that enumerates the local
   CI-mirror steps gains "ledger" (LAWS §Workflow + any HOME/skills
   echo).

### The checker's join key (reconciliation)

The task framed the match as `(quadrant, id)` where id is the ledger
slug. Reality (STEP 0): the 36 pre-slug frozen ledger lines carry a
`#PR` but no slug, and reformatting them is out of scope. The stable
key present on BOTH sides for all 65 entries is the trailing `#PR`
(every ledger line ends `· #<n>`; every history file has `pr:` in
frontmatter). So the checker keys the bijection on the trailing #PR,
then asserts `(quadrant, slug)` agreement for every entry that carries
a slug — a superset of the `(quadrant, id)` intent that survives the
real data. Failure cases (a)–(d) from the kickoff are all covered.

## Done means

- [x] `scripts/check-ledger.mjs` exists, zero deps, CRLF-safe; exits 0
      on main printing "N history files ↔ N ledger lines, in sync";
      exits nonzero with a file-specific message on a drop, an orphan,
      a missing #PR, a bad quadrant, a quadrant/slug mismatch, or a
      duplicate.
- [x] A temp orphan line makes it exit nonzero with a clear message
      (verified, then removed).
- [x] `package.json` has `check:ledger` after `check:links`.
- [x] `ci.yml` runs `check:ledger` after `check:links`.
- [x] ship §7 carries the "stage the whole move together" line.
- [x] Every corpus CI-mirror step list includes "ledger".
- [x] STEP 0 checker output pasted in the PR body; any pre-existing
      mismatch fixed as data (none found — clean by #PR).
- [x] check:links green; full CI mirror (now six steps) green; the
      pushed commit's Actions run green.

## Deviations

- Join key is the trailing `#PR`, not `(quadrant, slug)` as the
  kickoff framed it — the 36 pre-slug frozen ledger lines carry no
  slug and are out of scope to reformat, so #PR is the only key on
  both sides. Slug + quadrant are still asserted wherever a slug
  exists (see the spec's join-key note).
- Only the LIVING CI-mirror lists (LAWS §Workflow, ship §1) gained
  "ledger". Frozen records (D-038 and the shipped specs/history/) were
  left intact — they truthfully record a five-check mirror at their
  time, and D-038's anchor encodes "six", so editing it would be a
  disproportionate link ripple outside this task.

## Open questions

none — STEP 0 reconciliation found main already in bijection by #PR.
