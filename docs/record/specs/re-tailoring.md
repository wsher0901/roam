---
type: spec
id: re-tailoring
title: The September re-tailoring
status: open
stage: V1.S1
branch: docs/re-tailoring
pr: #367
opened: 2026-09-15
---
# re-tailoring — eighteen rulings that re-cut the June definitions

**Links:** [DECISIONS](../DECISIONS.md) · [ENGINE](../../ENGINE.md) ·
[FOUNDATION](../../FOUNDATION.md) · [ROADMAP](../../ROADMAP.md) ·
[FACTS](../../data/FACTS.md) · [SOURCES](../../data/SOURCES.md) ·
[D-010](../DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
·
[D-011](../DECISIONS.md#d-011--traveler-input-vocabulary)
·
[D-012](../DECISIONS.md#d-012--elicitation-and-inference-policy)
·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)
·
[D-087](../DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)

## Goal

Record the founder's eighteen rulings of 2026-09-11 → 15 as
`D-088 — [product] The September re-tailoring — retrieval, the
optimizer, cost, trend, state`, and apply the ripple in the SAME
commit. The rulings are DECIDED, not proposed; they were taken on
the Web surface.

The eighteen, in the founder's order:

1. **The ladder split** — rung 5 becomes 5a (model-retrieved with
   provenance) and 5b (model memory).
2. **The retrieval module** — `V1.S3.T8`.
3. **The retrieval-policy row** — a per-fact row in every
   [SOURCES](../../data/SOURCES.md) entry.
4. **The brain as a harness over engine-as-tools** —
   `V1.S4.T1` rewritten.
5. **Candidates proposed, then verified** — `V1.S4.T2`.
6. **The eval set uses models** — `V1.S3.T6` grows.
7. **The receipt is the demo** — `V1.S8.T3` Done-means + three
   named scenarios.
8. **Cost — a sixth family, in V1** — `F-CO`, `V1.S1.T8`,
   `V1.S7.T4`, and five→six families everywhere.
9. **Trend as a computed signal** — `F-CC-07` amended.
10. **The "here, now" entry** — a fourth level of certainty;
    `V1.S6.T4`.
11. **Tips and dress code** — `F-FE-15`, `F-FE-16`.
12. **The optimizer is a named component** — ENGINE §6 + `OPEN-10`.
13. **Day-rhythm parameters** — `TP-48`, `TP-49`.
14. **Crowds and scarcity, named** — no new facts.
15. **State outranks transcript** — an ENGINE §11 invariant.
16. **Change tracking with stated reasons** — ENGINE §9 + a
    telemetry event.
17. **Maps grounding in T4** — recorded as T4's duty only.
18. **Distribution socket** — ROADMAP Pool.

## Out of scope

- **The four [V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 specs and branches.** Untouched, by mandate. Their ROADMAP
  checkbox lines are untouched too, because rulings 3 and 17 place
  their new duties in D-088 and say "edited nowhere in this bench".
- **Ticking any ROADMAP checkbox.** Ticks are ship's alone.
- **[DASHBOARD](../../DASHBOARD.md).** The bar re-derivation and the
  one new Needs-you line are the weld's board repaint, not this
  diff.
- **Any engine or app code.** V1.S1 is docs + spike scripts only.
- **`SOURCES-cost.md` itself.** `V1.S1.T8` writes it; this bench
  only creates the task and the slot expectation.
- **Renumbering `OPEN-1`..`OPEN-9`.** Only `OPEN-10` is minted.
- **The count-bearing FACTS headings** — `F-FE — Feasibility (14)`,
  `F-CC — Crowds & calendar (8)`, `Appendix A — Traveler parameters
  (TP-01..47)`, and `T2–T6 assignment map`. Their slugs are the
  anchors of 40+ citations across
  [HOME](../../HOME.md), the chronicle, and frozen history; renaming
  them is a sweep the mandate did not order. Raised as the bench's
  first `BLOCKED:` line. → § Deviations.
- **V1's "mid-trip features" refusal and
  [FOUNDATION](../../FOUNDATION.md)'s "pre-trip brain" sentence.**
  Ruling 10 puts "here, now" inside V1 and ruling 7 names it as a
  seeded demo scenario, which reads as mid-trip on any plain
  reading. D-088 is a roadmap decision and COULD move that
  boundary; the founder did not say to, so it was not moved by
  inference. Both lines stand unedited — the bench's second
  `BLOCKED:` line.

## Plan

1. Walk the version ladder in [ROADMAP](../../ROADMAP.md) and the
   fact families in [FACTS](../../data/FACTS.md) from their real
   text — the enumeration law — and land each of the eighteen
   rulings on the lines it actually touches.
2. Append D-088 in [decide](../../skills/decide.md)'s exact format,
   heading `## D-088 — [product] The September re-tailoring —
   retrieval, the optimizer, cost, trend, state`, tagged
   `[product]` per
   [D-086](../DECISIONS.md#d-086--workshop-the-product-first-window).
   Eight cited URLs, nothing fetched. Seven rejected alternatives,
   one line each.
3. Ripple, SAME commit:
   [ENGINE](../../ENGINE.md) §2 · §3 · §5 · §6 · §7 · §8 · §9 ·
   §11 · §12 ·
   [FOUNDATION](../../FOUNDATION.md) §The spine · §What Roam checks ·
   [ROADMAP](../../ROADMAP.md) V1 header · V1.S1 · V1.S3 · V1.S4 ·
   V1.S5 · V1.S6 · V1.S7 · V1.S8 · Pool ·
   [FACTS](../../data/FACTS.md) header · § How to read this file ·
   F-FE · F-CC · the new F-CO · the assignment map · Appendix A ·
   Appendix B · Appendix C1 ·
   [SOURCES](../../data/SOURCES.md) grade-scale block · all six
   weather slots · Pending slots.
4. Sweep `five families` / `five check families` to six from THE
   DESTINATION — grep the phrase, not its predicted neighbours —
   and re-run the grep to zero outside `record/` and `chronicle/`.
5. Re-derive the V1 task count from the checkbox lines themselves;
   never copy the old number.
6. Weave gate: every D-number, roadmap ID, fact ID, TP ID and
   sibling doc in the new text is a link — except the `In full:`
   line, which is a verbatim quotation the weave rule does not
   reach.
7. `npm run check:links` · `npm run check:vocab` · `npm run
   check:memory` · `npm run lint` · `npm run format:check` · `npm
   run test`.

## Done means

- [ ] D-088 exists, heading tagged `[product]`, with all eighteen
      rulings, the eight cited URLs, and seven rejected
      alternatives.
- [ ] Ruling 1: [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)
      carries the 5a/5b ladder,
      [§7](../../ENGINE.md#7-render--honest-pixels) the grade
      consequences, [§11](../../ENGINE.md#11-invariants--the-reliability-law)
      the amended boundary; [FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file)
      carries the rung-5 reading rule;
      [SOURCES](../../data/SOURCES.md) points at §7 as canonical.
- [ ] Ruling 2: `V1.S3.T8` exists, `[P after T2]`.
- [ ] Ruling 3: the retrieval-policy row is DEFINED in FACTS'
      reading rules and PRESENT on every weather slot in
      [SOURCES](../../data/SOURCES.md).
- [ ] Ruling 4: `V1.S4.T1` reads as the harness over the engine's
      tool contract; [ENGINE §2](../../ENGINE.md#2-intake--resolve-the-traveler)
      names images/PDFs as intake.
- [ ] Ruling 5: `V1.S4.T2` verifies proposed candidates;
      [ENGINE §6](../../ENGINE.md#6-synthesize--build-the-plan)
      gains one line.
- [ ] Ruling 6: `V1.S3.T6` names model-generated inputs, a model
      judge for explanations, deterministic score grading, and
      recommendation quality as a metric.
- [ ] Ruling 7: `V1.S8.T3` Done-means carries "every rendered claim
      opens its evidence" and the three named scenarios.
- [ ] Ruling 8: `F-CO` family with `F-CO-01..03` exists;
      `V1.S1.T8` and `V1.S7.T4` exist; `V1.S1.T7` consolidates
      FIVE files; `V1.S7` is titled "The other four families";
      [ENGINE §8](../../ENGINE.md#8-gate--warn-or-refuse)'s scope
      refusal is amended; `F-FE-07` cross-links `F-CO`; every
      "five families" outside `record/` and `chronicle/` reads six.
- [ ] Ruling 9: `F-CC-07` carries the proxies, the rung-5a press
      route, the platform-mining deferral on ToS grounds, and the
      lag label; `V1.S7.T3` names it.
- [ ] Ruling 10: [FOUNDATION §The spine](../../FOUNDATION.md#the-spine)
      carries the fourth level of certainty; `V1.S6.T4` exists.
- [ ] Ruling 11: `F-FE-15` and `F-FE-16` exist.
- [ ] Ruling 12: [ENGINE §6](../../ENGINE.md#6-synthesize--build-the-plan)
      names the optimizer; `OPEN-10` is in the register;
      `V1.S5.T1` reads "Plan synthesis — the optimizer …".
- [ ] Ruling 13: `TP-48` and `TP-49` are in Appendix A, with the
      D-088 amendment noted there by link.
- [ ] Ruling 14: [ENGINE §6](../../ENGINE.md#6-synthesize--build-the-plan)'s
      condition-aware placement cites the crowd and scarcity facts;
      no new fact IDs minted for it.
- [ ] Ruling 15: [ENGINE §11](../../ENGINE.md#11-invariants--the-reliability-law)
      carries the state-over-transcript invariant; FACTS Appendix B
      carries the provenance tag.
- [ ] Ruling 16: [ENGINE §9](../../ENGINE.md#9-re-validate--edits-and-drift)
      carries the stated-reason rule; Appendix C1 gains the event.
- [ ] Ruling 17: recorded in D-088 as
      [V1.S1.T4](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)'s
      duty, edited nowhere.
- [ ] Ruling 18: the Pool carries the MCP-server socket.
- [ ] Every new `F-`, `TP-` and `OPEN-` number is unique.
- [ ] The V1 task total is RE-DERIVED from the checkbox lines
      (35 → 39) and the derivation is shown at the gate.
- [ ] D-088's `Affects:` line and the actual edits match exactly.
- [ ] `check:links`, `check:vocab`, `check:memory`, lint, format and
      test all pass; the PUSHED head's Actions run is green.
- [ ] A critic round has run against the pushed diff.

## Deviations

**THE FILE FENCE WAS CROSSED TWICE, AND BOTH TIMES THE MANDATE'S
OWN VERIFY LIST REQUIRED IT.** The mandate named six files and said
"nothing else"; two of its VERIFY conditions could not be met
inside that fence.

- **`docs/HOME.md` — four lines.** VERIFY demanded
  `grep "five families" → 0 outside record/ and chronicle/`, and
  HOME is neither. Two "five families" lines became six, and the
  family-ID list and its Sources block learned `F-CO`. Nothing else
  in HOME was touched.
- **`docs/chronicle/roadmap.md` — one line.** Ruling 8 ordered
  [V1.S7](../../ROADMAP.md#v1s7--the-other-four-families-plug-in-proof)
  retitled, and that slug is cited once from the chronicle.
  `check:links` walks all 360 md files, frozen record included, so
  the rename REQUIRED the repair or the branch ships red. The row's
  count column moved 3 → 4 with it.

**Two consequences were DERIVED rather than dictated**, and both
are written into D-088 rather than left implicit:

- **[V1.S1.T7](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  became `[seq after T1–T6 and T8]`.** The mandate said T7
  consolidates FIVE `SOURCES-<family>.md` files; the fifth is T8's
  output, so T7 cannot precede T8. T1–T6 stayed in the tag because
  [D-087](../DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
  ruled that naming any dependency means naming all of them. T8's
  line gained `-> docs/data/SOURCES-cost.md` for the same reason:
  "five files" is only true if T8 writes one.
- **The `weather-alerts` slot has NO rung 5b.** Its existing rule
  forbids a fabricated all-clear; under the new ladder a REMEMBERED
  all-clear is exactly that, so refusal (rung 6) outranks memory in
  that one slot. Stated in its retrieval policy.

**Ruling 13's "noted there by link" was read as Appendix A, not as
the DECISIONS entries.**
[FACTS Appendix A](../../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
IS "D-011/D-012's table", and the log's own law — ruled at
[#193](https://github.com/wsher0901/roam/pull/193) — is that
amendments live in new entries while the amended entry stays
unannotated. The note went into Appendix A; D-011 and D-012 were
not touched.

**`F-CC-07`'s heading was renamed** from "Trending signal (general,
non-SNS)" to "Trending signal (computed)". Not ordered, but ruling
9 makes "non-SNS" false — the signal now reads YouTube and Reddit
APIs — and the old slug was cited from ONE place, inside FACTS
itself. A rename with no external citation is free; the four
headings in § Out of scope are not.

## Open questions

Two, both raised as `BLOCKED:` lines on
[#367](https://github.com/wsher0901/roam/pull/367) with the answer
format wanted, neither resolved here: the count-bearing headings
(`freeze` · `sweep now` · `sweep later`) and the mid-trip
collision (`strike it` · `narrow it` · `leave it`).
