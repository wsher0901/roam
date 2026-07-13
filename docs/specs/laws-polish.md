---
type: spec
id: laws-polish
title: LAWS polish — glossed lane law, provenance to consolidations, ship syncs with main
status: open
stage: workshop
branch: docs/laws-polish
pr: —
opened: 2026-07-13
shipped: —
---
# laws-polish — LAWS polish: glossed lane law, provenance to consolidations, ship syncs with main
**Links:** [LAWS](../LAWS.md) · [PROJECT-POLICY](../PROJECT-POLICY.md) ·
[ship](../skills/ship.md) · [HOME](../HOME.md) · Decisions:
[D-009](../DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap) ·
[D-023](../DECISIONS.md#d-023--2026-07--universal-draft-pr-at-birth--micro-pr-carve-out-recut-amends-d-002-d-008-d-020)

## Goal
[LAWS](../LAWS.md) reads as pure plain-language commands (D-cites
out, one-line whys in), the pacing law is consolidated into
[PROJECT-POLICY](../PROJECT-POLICY.md), and [ship](../skills/ship.md)
gains a sync-with-main preflight.

## Out of scope
- Any lane-law semantics change (glosses only).
- machine-setup / vault lens (next task).
- Renaming "cockpit" (decided: keep).

## Plan
1. Bench birth: branch docs/laws-polish → spec + memory stub →
   draft PR.
2. Run [decide](../skills/decide.md): append the next D-number
   (computed from [DECISIONS](../DECISIONS.md)' tail) — entry + full
   ripple in the SAME commit:
   - LAWS header points to the three rationale homes; the four
     inline D-citations go (bench-first, micro-PR, pacing, stack);
   - bench-first bullet and lane-law points 1–5 + 7 carry one-line
     whys; baton law gets its definition clause;
   - "Before saying done" gains the main-sync step (merge, never
     rebase);
   - [ship](../skills/ship.md) §1 Preflight merges current
     origin/main before gating;
   - [PROJECT-POLICY §Workshop choices](../PROJECT-POLICY.md#workshop-choices)
     gains the pacing law with its
     [D-009](../DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)
     provenance;
   - [HOME](../HOME.md)'s ship portrait mentions the sync.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [ ] Edits 1–8 landed verbatim
- [ ] Zero D-number mentions left in [LAWS](../LAWS.md)
- [ ] [PROJECT-POLICY](../PROJECT-POLICY.md) carries the pacing law
      with [D-009](../DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)
- [ ] [ship.md](../skills/ship.md) and [LAWS](../LAWS.md) both carry
      the main-sync step
- [ ] `node scripts/check-links.mjs` passes
- [ ] Lint + tests green

## Deviations
<filled by ship — or "none">

## Open questions
none
