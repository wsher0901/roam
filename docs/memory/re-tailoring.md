---
type: memory
id: re-tailoring
updated: 2026-09-15 · founder's answers applied · control tower (home PC)
---
# re-tailoring — the September re-tailoring

## Status

complete, awaiting merge — 2026-09-15. All eighteen rulings applied,
`D-088` appended, entry and ripple in ONE commit (`2f70a56`). The
critic round ran and returned sixteen findings; all sixteen are
answered. The founder reviewed `841b8e5` — PASS, zero findings — and
answered both `BLOCKED:` lines: **Q1 FREEZE**, **Q2 NARROW**. Both
are applied, so the payload moved and the review re-issues per sha.
At THE GATE. DO NOT MERGE — the founder's word is "review" on the
Web surface.

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

none. Both `BLOCKED:` lines are answered and applied — see the
story's last entry.

## Left / idle

Nothing parked. The critic round is closed — sixteen findings, all
answered in the diff.

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

**Verification.** `check:links` 0 broken and 0 bare D-numbers across
360 files (two bare ones were caught in the Appendix A note and
reworded) · `check:vocab` 14 rows, 0 would fail · `check:memory`
valid · `check:ledger` in sync · `format:check`, `lint`, `test` all
pass · Actions green on every pushed head.

**2026-09-15 · the critic round, and what it caught.** Sixteen
findings against the pushed head; all answered, the diff changed,
CI re-green. Three would have shipped as defects:

1. **[ENGINE §11](../ENGINE.md#11-invariants--the-reliability-law)'s
   boundary clause still read "rung 5" while the new paragraph
   beside it announced the boundary was "unchanged across both".**
   Literally: a rung-5a value could never reach
   [Judge](../ENGINE.md#4-judge--per-check-verdicts), which would
   have made the retrieval module and half of ruling 1 dead on
   arrival. **The lesson is exact and worth keeping: when an
   amendment SPLITS a term, the sentences that use the old term are
   the diff, and the one most likely to be missed is the one the
   amendment itself calls unchanged.** Rewritten to name 5b, and to
   say outright that a 5a value is SOURCED and enters Judge like any
   other fetch.
2. **The provenance tag set forked three ways** — ruling 15's
   `stated/inferred/derived` against the standing
   `stated/inferred/default`, in four places, with no reconciliation
   and no supersede rank for the new tag. Reconciled to four, with
   `derived` deliberately held OUTSIDE the supersede order rather
   than given a rank nobody decided.
3. **[FACTS](../data/FACTS.md) still said cost meant ranges only**,
   twice, one of them nine lines above the new text contradicting
   it.

The rest were survivals of the rename and forks the split created.
The one that mattered beyond this bench: EIGHT per-fact lines in
FACTS said "else LLM-research grade" — which now routes past 5a
entirely. Renaming a grade and re-cutting the facts that cite it are
the same job, not two.

**And the chronicle came back.** The V1.S7 rename repair had moved
one count cell and left the rest of the stage table, so it summed to
35 against a stated 34. Its caption says the numbers derive at every
reading, so the table was re-derived whole (39 / 5) and the story
under it now says "34 when this was written" instead of "34 today"
— the paragraph is a lecture about literals never re-checked, and it
had become its own example.

**2026-09-15 · the founder's answers, and what they settled.**
Review of `841b8e5` came back PASS with zero findings, and both
`BLOCKED:` lines were answered. Both changed the payload, so the
review re-issues against the new sha.

**Q1 → FREEZE, and it minted a small standing rule.** The four
count-bearing [FACTS](../data/FACTS.md) headings keep their text;
one of them alone carries 47 inbound links, several from frozen
record files that may not be edited. Each STALE one now carries a
line saying so —
[F-FE (14)](../data/FACTS.md#f-fe--feasibility-14--source-task-v1s1t4)
holding 16,
[Appendix A (TP-01..47)](../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
holding 49, and the
[T2–T6 assignment map](../data/FACTS.md#t2t6-assignment-map) now
spanning T8.
[F-CC (8)](../data/FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6)
got NO line, because its count is still correct and the founder's
instruction was "under each STALE heading" — it joins the class the
moment CC gains a fact.

The rule behind it went into
[FACTS § How to read this file](../data/FACTS.md#how-to-read-this-file):
**headings never carry counts from here on.** Worth keeping because
of WHY it exists — a count inside an anchor is a derived value
welded into an identifier, so the derivation law forbids the literal
and the anchor forbids the fix. The only escape is to never create
one, which is why the rule is prospective rather than a repair.

**Q2 → NARROW, and the boundary is a test rather than a list.**
"Here, now" plans FROM the present moment — tonight, tomorrow, the
day ahead for a traveler already at the destination — and is still
planning ahead of the plan. It does NOT bring mid-trip operations
into V1: no live tracking, no notifications, no in-the-moment
steering during an activity; those stay the mid-trip companion,
V2+. The sentence landed in D-088's ruling 10, in
[FOUNDATION §The spine](../FOUNDATION.md#the-spine), and as one
clause on
[V1.S6.T4](../ROADMAP.md#v1s6--edit--revalidate-the-money-moment).

The distinction is sharper than "before vs during the trip", which
was what made it look like a contradiction in the first place: the
line is whether Roam is COMPOSING a plan not yet executed — which
it is, whether the plan covers October or the next four hours — or
WATCHING one the traveler is inside. V1 does the first from any
starting point and none of the second, so the standing "mid-trip
features" refusal stands unedited and always did.

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
