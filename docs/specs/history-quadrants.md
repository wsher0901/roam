---
type: spec
id: history-quadrants
title: History organizes by issue-door quadrants; TEMPLATE owns the memory format and Status vocabulary
status: shipped
stage: workshop
branch: docs/history-quadrants
pr: 108
opened: 2026-07-13
shipped: 2026-07-13
---
# history-quadrants — History organizes by issue-door quadrants; TEMPLATE owns the memory format and Status vocabulary

**Links:**
[history/README](../history/README.md) ·
[ship](../skills/ship.md) ·
[handoff](../skills/handoff.md) ·
[memory TEMPLATE](../memory/TEMPLATE.md) ·
Decisions:
[D-034](../DECISIONS.md#d-034--2026-07--history-quadrants--productworkshop--definitionimplementation-memory-template-owns-format--status-vocabulary-extends-d-024s-narrative-layer-and-d-032s-states)

## Goal
Any future issue has exactly one door — history reorganizes into
the founder's 2×2 (product × workshop · definition ×
implementation); the weld learns the quadrant step; the memory
[TEMPLATE](../memory/TEMPLATE.md) becomes the single owner of the
format and the post-D-032 Status vocabulary. Moves and link repairs
only — no story content changes (frozen class).

## Out of scope
- Graph-seed shades (declined).
- Version sub-buckets (rolling wave — when a quadrant bloats).
- Any wording change inside moved stories.

## Plan
1. Bench birth: branch docs/history-quadrants → this spec + memory
   stub → draft PR.
2. Run [decide](../skills/decide.md)
   ([D-034](../DECISIONS.md#d-034--2026-07--history-quadrants--productworkshop--definitionimplementation-memory-template-owns-format--status-vocabulary-extends-d-024s-narrative-layer-and-d-032s-states)):
   entry + ripple in the same commit — the four quadrant dirs and
   50 git mv moves per the fixed mapping, the README legend
   payload, the repo-wide link ripple (flat history links →
   quadrant paths; relative links inside moved stories re-depthed —
   targets only, prose untouched), [ship](../skills/ship.md) §4/§7
   and [handoff](../skills/handoff.md) §3/§4 edits, the
   [TEMPLATE](../memory/TEMPLATE.md) Status-vocabulary appendix.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [x] Quadrant counts 11/3/17/19 (telemetry-fold, welded after the
      brief was drafted, joins workshop/definition per the brief)
- [x] history root holds only README + the four quadrant dirs
- [x] Zero flat history links repo-wide (sole survivors: links to
      history/README.md itself — the legend does not move)
- [x] TEMPLATE carries the Status vocabulary
- [x] handoff §3 and ship §4 point at TEMPLATE
- [x] check-links green (1268 links, 0 broken)
- [x] Lint + tests green

## Open questions
none
