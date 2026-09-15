---
type: memory
id: re-tailoring
updated: 2026-09-15 · payload pushed · control tower (home PC)
---
# re-tailoring — the September re-tailoring

## Status

complete, awaiting merge — 2026-09-15. All eighteen rulings applied,
`D-088` appended, entry and ripple in ONE commit (`2f70a56`). CI green
on the pushed head. Two `BLOCKED:` lines are open on
[#367](https://github.com/wsher0901/roam/pull/367) and neither blocks
the diff. Waiting on the critic round, then THE GATE. DO NOT MERGE —
the founder's word is "review" on the Web surface.

## What this task is

Record eighteen founder rulings taken on the Web surface
2026-09-11 → 15 as `D-088 — [product] The September re-tailoring —
retrieval, the optimizer, cost, trend, state`, and ripple them in
the same commit. The contract is
[the spec](../record/specs/re-tailoring.md).

The short version: the June definitions assumed a model that only
structures text. Retrieval with citations changed what is
verifiable, so the ladder's rung 5 splits into 5a
(retrieved-with-provenance, graded B or C by domain) and 5b
(remembered, graded D); cost becomes a sixth check family inside
V1; the optimizer gets a name and an OPEN slot; the brain becomes
stateless over a versioned state store; and the receipt — not the
plan — becomes the demo.

Product work inside the product-first window
([D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)).
No ROADMAP tick.

## Pending issues

Two `BLOCKED:` lines, both raised as scope calls rather than
guesses, both answerable in one word:

1. **Four [FACTS](../data/FACTS.md) headings carry counts inside
   their slugs** — `F-FE — Feasibility (14)` (now 16), `Appendix A
   — Traveler parameters (TP-01..47)` (now 49), `T2–T6 assignment
   map` (now spans T8), and `F-CC — Crowds & calendar (8)` (still
   8, listed as the fourth of the class). Renaming them would break
   40+ citations across [HOME](../HOME.md), the chronicle and
   frozen history. Left frozen; the live numbers are written into
   the bodies instead. Answer wanted: `freeze` · `sweep now` ·
   `sweep later`.
2. **Ruling 10 collides with V1's standing "mid-trip features"
   refusal.** "Here, now" ships in V1 as
   [V1.S6.T4](../ROADMAP.md#v1s6--edit--revalidate-the-money-moment)
   and as a named demo scenario, while
   [ROADMAP §V1](../ROADMAP.md#v1--the-demo--active) still refuses
   mid-trip features and [FOUNDATION](../FOUNDATION.md) still calls
   Roam the pre-trip brain. D-088 is a roadmap decision and COULD
   move that boundary — the founder did not say to, so it was not
   moved by inference. Answer wanted: `strike it` · `narrow it` ·
   `leave it`.

## Left / idle

Nothing parked. The critic round is running against the pushed
diff; its findings land here before the gate report.

## The story

**2026-09-15 · birth.** Branch cut from `main` at `9af72e1`. The
mandate arrived complete — eighteen rulings, their target files,
the numbers to mint, the verification list — so no discussion
preceded the spec; the spec is the mandate transcribed into a
contract with the enumeration walk attached. Spec + memory stub +
draft [#367](https://github.com/wsher0901/roam/pull/367) pushed
first.

**The scope fence met the verify list, and the verify list won,
twice.** The mandate fenced the diff to six files and said "nothing
else". Two of its own VERIFY conditions could not be met inside
that fence:

- `grep "five families" → 0 outside record/ and chronicle/`
  required [HOME](../HOME.md), which is neither. Two lines swept
  there, plus the family-ID list, which had to learn `F-CO`.
- Ruling 8 ordered
  [V1.S7](../ROADMAP.md#v1s7--the-other-four-families-plug-in-proof)
  retitled "The other four families". That slug is cited once from
  `docs/chronicle/roadmap.md`, and `check:links` walks the chronicle
  like everything else — so the rename REQUIRED repairing that
  citation or shipping red. Repaired, one line.

Both are recorded as deviations in the spec. The general lesson is
the one the sweep law already states from the other side: a heading
rename is never local, and the fence a mandate draws around FILES
does not bind `check:links`, which walks all 360.

**Where the numbers came from.** Nothing was copied. The V1 total
was derived by walking the checkbox lines: S1 8 · S2 5 · S3 8 ·
S4 3 · S5 3 · S6 4 · S7 4 · S8 4 = **39, 5 done** (the mandate
predicted 39 and the walk agreed). [FACTS](../data/FACTS.md) was
counted the same way — **59** `### F-XX-NN` headings and **49**
`| TP-NN |` rows, no duplicates in either. `OPEN-1..10` unique.

**One correction worth keeping.** Ruling 13 says TP-48/49 are "an
amendment to D-011/D-012's table, noted there by link". "There" is
ambiguous between the DECISIONS entries and the table itself — and
the log's own law, ruled at
[#193](https://github.com/wsher0901/roam/pull/193), is that
amendments live in NEW entries and the amended entry is left
unannotated. Reading "D-011/D-012's table" as
[FACTS Appendix A](../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
— which is literally what that table is — satisfies both the ruling
and the law: the note went into Appendix A, linking D-088, and the
two frozen entries were not touched.

**Two derived consequences the mandate did not spell out**, both
recorded in D-088:

- [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  became `[seq after T1–T6 and T8]`. The mandate said T7
  consolidates FIVE files; the fifth is T8's, so T7 cannot precede
  T8. Naming any dependency means naming all of them
  ([D-087](../record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)'s
  own correction), so T1–T6 stayed in the tag.
- The `weather-alerts` slot's retrieval policy says the slot has
  **no rung 5b**. It follows from the slot's existing rule — never
  a fabricated all-clear — and the new ladder: if 5a finds nothing,
  a REMEMBERED all-clear would be exactly the forbidden output, so
  refusal outranks memory there.

**Verification.** `check:links` 7886 links / 360 files, 0 broken,
0 bare D-numbers (two bare ones were caught in the Appendix A note
and reworded) · `check:vocab` 14 rows, 0 would fail · `check:memory`
valid · `check:ledger` in sync · `format:check`, `lint`, `test` all
pass · Actions green on the PUSHED head `2f70a56`.

## Where to look

- [the spec](../record/specs/re-tailoring.md) — the contract and
  its deviations.
- [#367](https://github.com/wsher0901/roam/pull/367) — the draft PR
  and the two `BLOCKED:` lines.
- [D-087](../record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
  — the entry this one builds on; its model boundary holds
  unchanged across both new rungs.
- [ENGINE §12](../ENGINE.md#12-open-register) — `OPEN-10`, and the
  keep-the-number rule that governs it.
