---
type: spec
id: pre-s3-rulings
title: The model boundary and three plan corrections
status: open
stage: V1.S3
branch: docs/pre-s3-rulings
pr: —
opened: 2026-09-11
shipped: —
---
# pre-s3-rulings — what the model may and may not produce, before S3 starts

**Links:** [ENGINE](../../ENGINE.md) ·
[ENGINE §2](../../ENGINE.md#2-intake--resolve-the-traveler) ·
[ENGINE §11](../../ENGINE.md#11-invariants--the-reliability-law) ·
[ENGINE §12](../../ENGINE.md#12-open-register) ·
[ROADMAP](../../ROADMAP.md) ·
[FOUNDATION §The reliability law](../../FOUNDATION.md#the-reliability-law)
· [D-010](../DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
· [D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)

## Goal

Record the founder's four rulings as `D-087 — [product] The model
boundary and three plan corrections`, and apply the ripple in the
same commit. The rulings are DECIDED, not proposed; they come from
the Web full-pass validation of 2026-09-10.

1. **The model boundary.**
   [ENGINE §11](../../ENGINE.md#11-invariants--the-reliability-law)
   gains the rule fixing what a language model may and may not
   produce inside the engine, plus a one-line note in
   [ENGINE §2](../../ENGINE.md#2-intake--resolve-the-traveler)'s
   procedure step 1 pointing at it.
2. **Demo guardrails.**
   [V1.S8](../../ROADMAP.md#v1s8--demo-polish) gains T4, and T3
   becomes `[seq after T1, T2, T4]`.
3. **The S3 dependency.**
   [V1.S3.T2](../../ROADMAP.md#v1s3--engine-core--two-families-deep)
   becomes `[seq after V1.S2.T4]` — the fact cache is Postgres and
   needs the migrations.
4. **The eval set.**
   [V1.S3.T6](../../ROADMAP.md#v1s3--engine-core--two-families-deep)
   grows the eval set; §11 gains the handled-input rule; OPEN-9 is
   marked CLOSED by D-087 in the register, its NUMBER KEPT so
   inline `OPEN-9` references still resolve.

## Out of scope

- **[ENGINE §1](../../ENGINE.md#1-the-shape-of-one-thought) and
  §0's "the shape is provisional" sentence.** Untouched. (The
  mandate cites it as §1's; it is §0's. Named here so the
  discrepancy is recorded rather than silently corrected.)
- **OPEN-1 through OPEN-8.** Only OPEN-9 closes.
- **Renumbering the register.** The number is kept on purpose.
- **Any engine code.** V1.S3 has not started.
- **Ticking any ROADMAP checkbox.** Ticks are ship's alone.

## Plan

1. Walk the version ladder in
   [ROADMAP](../../ROADMAP.md) and re-read EVERY edit against it —
   the enumeration law: each `[seq …]` marker walked from the real
   task list, not reasoned about in the abstract.
2. Append D-087 in decide's exact format, heading `## D-087 —
   [product] The model boundary and three plan corrections`.
3. Ripple, SAME commit: ENGINE §11, §2, §12; ROADMAP V1.S3 and
   V1.S8.
4. Weave gate: every D-number, roadmap ID, fact ID and sibling doc
   in the new text is a link — except the `In full:` line, which is
   a verbatim quotation the weave rule does not reach.
5. `npm run check:links`.

## Done means

- [ ] D-087 exists with the four rulings, three rejected
      alternatives (one line each), and a `Why:` citing the Web
      full-pass validation BY DATE (2026-09-10) with nothing
      derived from it.
- [ ] [ENGINE §11](../../ENGINE.md#11-invariants--the-reliability-law)
      carries the model-boundary invariant and the handled-input
      rule.
- [ ] [ENGINE §2](../../ENGINE.md#2-intake--resolve-the-traveler)
      procedure step 1 carries one line on the model's role there,
      pointing at §11.
- [ ] [ENGINE §12](../../ENGINE.md#12-open-register) OPEN-9 is
      marked CLOSED by D-087 → §11, its number kept.
- [ ] [V1.S8](../../ROADMAP.md#v1s8--demo-polish) T4 exists;
      V1.S8.T3 reads `[seq after T1, T2, T4]`.
- [ ] [V1.S3.T2](../../ROADMAP.md#v1s3--engine-core--two-families-deep)
      reads `[seq after V1.S2.T4]` with the reason.
- [ ] [V1.S3.T6](../../ROADMAP.md#v1s3--engine-core--two-families-deep)
      names the eval set and zero live calls.
- [ ] D-087's `Affects:` line and the actual edits match exactly.
- [ ] `npm run check:links` passes.

## Deviations

<filled by ship>

## Open questions

none
