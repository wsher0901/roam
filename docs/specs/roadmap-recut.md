---
type: spec
id: roadmap-recut
title: ROADMAP recut — plain-language V1, completion criteria, per-family vetting outputs
status: open
stage: workshop
branch: docs/roadmap-recut
pr: —
opened: 2026-07-13
shipped: —
---
# roadmap-recut — ROADMAP recut: plain-language V1, completion criteria, per-family vetting outputs
**Links:** [ROADMAP](../ROADMAP.md) · [HOME](../HOME.md) · Decisions:
[D-020](../DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration) ·
[D-022](../DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004) ·
Terms: [version / stage / task](../HOME.md#terms)

## Goal
Make [ROADMAP](../ROADMAP.md) a clean plain-language read (living-plan
note, prose V1 goal), rename Done-when → Completion criteria, and
align T3–T6 outputs with
[D-020](../DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)'s
lane-disjoint rule.

## Out of scope
- Stage-header renames (inbound anchors).
- FOUNDATION.md · DASHBOARD.md.
- Any checkbox state.
- The spec-level term "Done-means" (different artifact, keeps its
  name).

## Plan
1. Bench birth: branch docs/roadmap-recut → spec + memory stub →
   draft PR.
2. Run [decide](../skills/decide.md): append the next D-number
   (computed from [DECISIONS](../DECISIONS.md)' tail) — entry + full
   ripple in the SAME commit:
   - living-plan paragraph replaces the rolling-wave shorthand;
   - versions table: "Done when" → "Completion criteria"; V1 row
     links the check families;
   - V1 block rewritten in prose (goal first; "Active stages" lines
     deleted — stored status violated the derivation law);
   - stage-level "Done when:" → "Completion criteria:" (×8);
   - T3–T6 gain per-family output files (code-styled paths, not
     links — the files don't exist yet); T7 consolidates and deletes
     them;
   - ticked tasks link their [history](../history/README.md) stories;
   - term-rename ripple in living docs (hit list derived at
     execution time; DECISIONS.md and docs/history/ excluded).
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [ ] Edits 1–7 landed verbatim
- [ ] Zero "Done when" and zero bare "same outputs" left in
      [ROADMAP](../ROADMAP.md)
- [ ] `node scripts/check-links.mjs` passes
- [ ] Lint + tests green

## Deviations
<filled by ship — or "none">

## Open questions
none
