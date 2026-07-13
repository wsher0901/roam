---
type: spec
id: engine-recut
title: Consolidation recut — DECISION-POLICY becomes ENGINE (the brain skeleton); PROJECT-POLICY to house style
status: open
stage: workshop
branch: docs/engine-recut
pr: —
opened: 2026-07-13
shipped: —
---
# engine-recut — Consolidation recut: DECISION-POLICY becomes ENGINE (the brain skeleton); PROJECT-POLICY to house style
**Links:** [ENGINE](../ENGINE.md) ·
[PROJECT-POLICY](../PROJECT-POLICY.md) · [LAWS](../LAWS.md) ·
[HOME](../HOME.md) · [ROADMAP](../ROADMAP.md) · Decisions:
[D-021](../DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy) ·
[D-028](../DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)

## Goal
The engine consolidation becomes an operational skeleton — pipeline
stages, IO, procedures, rules-in-slots, a loud OPEN register — under
its true name [ENGINE.md](../ENGINE.md);
[PROJECT-POLICY](../PROJECT-POLICY.md)
adopts the same house style (gloss + bold handles + per-section
Sources); full retroactive ripple across the corpus.

## Out of scope
- ANY rule-semantics change in either file.
- New rules beyond the four OPEN-register items.
- Resolving any OPEN item.
- DASHBOARD content beyond one mechanical link repair.
- ROADMAP checkbox state.

## Plan
1. Bench birth: branch docs/engine-recut → this spec + memory stub →
   draft PR.
2. git mv the old consolidation to ENGINE.md (history follows), then
   overwrite ENGINE.md and [PROJECT-POLICY](../PROJECT-POLICY.md)
   with the workshop payloads byte-exact; derive the three
   best-effort anchors (D-014 entry · V1.S6 stage · TELEMETRY §1/§2)
   from their real headings and correct them if they differ.
3. Run [decide](../skills/decide.md): append the next D-number
   (computed from [DECISIONS](../DECISIONS.md)' tail) — entry + full
   ripple in the SAME commit: living docs (LAWS · HOME · ROADMAP ·
   FACTS · SOURCES · decide skill) rename + retarget per the anchor
   map; frozen records (DECISIONS · history/ · finalized specs)
   repair link targets only; [DASHBOARD](../DASHBOARD.md) gets
   exactly one mechanical link repair, noted in memory as a
   sanctioned retroactivity repair.
4. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [ ] Both files byte-match the workshop payloads (modulo the
      sanctioned anchor corrections of step 2)
- [ ] "DECISION-POLICY" appears nowhere in the repo as a link target
      and nowhere in living-doc prose
- [ ] Every old section anchor repaired per the map; old anchors
      absent repo-wide
- [ ] `node scripts/check-links.mjs` passes
- [ ] Lint + tests green
- [ ] ROADMAP checkboxes unchanged

## Deviations
<filled by ship: anything done differently than planned — or "none">

## Open questions
none
