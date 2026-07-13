---
type: spec
id: foundation-v4
title: FOUNDATION v4 — principles recut, open family set, lifespan repair
status: shipped
stage: workshop
branch: docs/foundation-v4
pr: 85
opened: 2026-07-12
shipped: 2026-07-12
---
# foundation-v4 — FOUNDATION v4: principles recut, open family set, lifespan repair
**Links:** [FOUNDATION](../FOUNDATION.md) ·
[DECISION-POLICY §5](../ENGINE.md#2-intake--resolve-the-traveler) ·
[HOME](../HOME.md) · Decisions:
[D-012](../DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert) ·
[D-021](../DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy) ·
[D-022](../DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004) ·
Terms: [check module](../HOME.md#terms)

## Goal
Recut [FOUNDATION](../FOUNDATION.md)'s principles for honesty and the
founder's corrections; open the family set; repair the one
[D-022](../DECISIONS.md#d-022--2026-07--version-ladder--lifespan-split-amends-d-004)
violation (the pre-trip lifespan clause duplicating a ROADMAP refusal).

## Out of scope
- ROADMAP content — V1 "all five families" stays (version scope).
- Any app/engine code.
- DESIGN-KICKOFF.

## Plan
1. Bench birth: branch docs/foundation-v4 → spec + memory stub →
   draft PR.
2. Run [decide](../skills/decide.md): append the next D-number
   (computed from [DECISIONS](../DECISIONS.md)' tail) — entry + full
   ripple in the SAME commit:
   - [FOUNDATION](../FOUNDATION.md) edits: lifespan sentence · open
     family header + intro · plug-in principle (re-tune clause) ·
     in-app principle (open list) · layered personalization.
   - [DECISION-POLICY §5](../ENGINE.md#2-intake--resolve-the-traveler):
     supersede order gains the cohort layer; new cohort-prior bullet.
   - [HOME](../HOME.md): FOUNDATION portrait (section list + judgment-
     moments sentence) · check-module term re-anchored + re-phrased.
   - Anchor ripple (retroactivity law): every repo-wide hit of the
     old five-families anchor → `what-roam-checks`; hit list derived
     at execution time.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no merge;
   founder approval follows external review.

## Done means
- [x] Edits 1–8 landed verbatim
- [x] [DECISION-POLICY §5](../ENGINE.md#2-intake--resolve-the-traveler)
      carries the cohort layer
- [x] Zero repo-wide occurrences of the old anchor
- [x] `node scripts/check-links.mjs` passes
- [x] Lint + tests green

## Deviations
None material. The workshop expected anchor-ripple hits in
docs/history/; the execution-time grep found exactly two hits, both
outside history/ ([DECISION-POLICY §3](../ENGINE.md#7-render--honest-pixels)
and [HOME §Terms](../HOME.md#terms)) — both repaired.

## Open questions
none
