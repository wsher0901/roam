---
type: spec
id: setup-consolidation
title: Setup consolidation — SETUP.md born; equipment-plan and PROJECT-POLICY retired; the writing laws adopted
status: shipped
stage: workshop
branch: docs/setup-consolidation
pr: 99
opened: 2026-07-13
shipped: 2026-07-13
---
# setup-consolidation — Setup consolidation: SETUP.md born; equipment-plan and PROJECT-POLICY retired; the writing laws adopted

**Links:**
[SETUP](../SETUP.md) ·
[LAWS](../LAWS.md) ·
[HOME](../HOME.md) ·
[DESIGN-KICKOFF](../DESIGN-KICKOFF.md) ·
[machine-setup](../skills/machine-setup.md) ·
Decisions:
[D-029](../DECISIONS.md#d-029--2026-07--corpus-writing-laws--readability-first-links-below-prose) ·
[D-030](../DECISIONS.md#d-030--2026-07--setup-consolidation--setupmd-equipment-plan-and-project-policy-retired-extends-d-024s-retirement-pattern-amends-the-d-021-consolidation-split)

## Goal
The workshop's tooling inventory lives in one listing-style file
(SETUP.md); the two files it obsoletes retire with full succession;
the two corpus writing laws are on the books.

## Out of scope
- Full Law-2 restyle of LAWS, DESIGN-KICKOFF, or any other existing
  file — the leg-end sweep owns that; only lines this PR touches
  conform.
- Any ritual-procedure semantics.
- ROADMAP.
- DASHBOARD beyond sanctioned mechanical link repairs.

## Plan
1. Bench birth: branch docs/setup-consolidation → this spec + memory
   stub → draft PR.
2. Run decide TWICE (the next two D-numbers), each entry in the same
   commit as its ripple: the corpus writing laws
   (readability-first; links below prose) · the setup consolidation
   (SETUP.md born, both files retired with succession).
3. Operations: create SETUP.md byte-exact · delete
   PROJECT-POLICY, the equipment-plan procedure, and the
   equipment-plan stub folder · the named DESIGN-KICKOFF,
   machine-setup, LAWS, and HOME edits · corpus succession ripple —
   living docs re-pointed with wording; frozen records link-targets
   only; DASHBOARD mechanical repairs only, each noted in memory.
4. Verify (below) · ship to THE GATE — no merge; founder approval
   follows external review.

## Done means
- [x] SETUP.md byte-matches the payload
- [x] Both retired files and the equipment-plan stub folder are gone
- [x] Zero link targets to either retired file repo-wide
- [x] LAWS carries the stubs rule and the re-pointed rationale line
- [x] HOME reflects the new file set
- [x] check-links green (1155 links, 0 broken)
- [x] Lint + tests green

## Deviations
None material; judgment calls recorded in the task memory: the
retiring files needed a forced git rm over zero-content CRLF
phantoms · DASHBOARD needed zero repairs (its grep hits were an
anchor slug and frozen row text, not link targets) · HOME's
governing-documents count recut from four to three · the SETUP
portrait keeps the brief's literal heading style.

## Open questions
none
