---
type: spec
id: telemetry-fold
title: TELEMETRY folds into FACTS — Appendix C; file retired
status: open
stage: workshop
branch: docs/telemetry-fold
opened: 2026-07-13
---
# telemetry-fold — TELEMETRY folds into FACTS: Appendix C; file retired

**Links:**
[FACTS](../data/FACTS.md) ·
[SCHEMA](../data/SCHEMA.md) ·
[ENGINE](../ENGINE.md) ·
[ROADMAP](../ROADMAP.md) ·
[HOME](../HOME.md) ·
Decisions:
[D-033](../DECISIONS.md#d-033--2026-07--telemetry-folds-into-facts-appendix-c-file-retired-upholds-d-014-extends-the-d-030-retirement-pattern)

## Goal
The telemetry vocabulary lives where the founder's charter puts
decided information categories — [FACTS](../data/FACTS.md) — and
the standalone file retires with full succession. Move-only: not
one event, threshold, or definition changes.

## Out of scope
- Any content edit beyond heading levels and self-anchors.
- [history/](../history/README.md) (next task).
- [SCHEMA](../data/SCHEMA.md) content beyond its link.

## Plan
1. Bench birth: branch docs/telemetry-fold → this spec + memory
   stub → draft PR.
2. Run [decide](../skills/decide.md)
   ([D-033](../DECISIONS.md#d-033--2026-07--telemetry-folds-into-facts-appendix-c-file-retired-upholds-d-014-extends-the-d-030-retirement-pattern)):
   entry + ripple in the same commit — Appendix C appended to
   [FACTS](../data/FACTS.md) (four headings demoted and renamed
   C1–C4, body byte-faithful), data/TELEMETRY.md deleted, the
   grep-derived hit list rippled per the anchor map (living docs
   reworded and re-anchored; frozen records get link targets only,
   prose keeps the historical name).
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [ ] Appendix C carries all four TELEMETRY sections
- [ ] The file is gone
- [ ] Zero markdown links target data/TELEMETRY.md repo-wide
- [ ] check-links green
- [ ] Lint + tests green

## Open questions
none
