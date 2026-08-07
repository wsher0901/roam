---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# ENGINE — the brain on paper, and the discipline of numbering what is not yet decided

> **CURRENT ENDING (2026-08-06).** Standing as the brain's blueprint:
> a pipeline of **nine stages** — Intake → Acquire → Judge →
> Aggregate → Synthesize → Render → Gate → Re-validate → Learn — plus
> a tenth section of Invariants that binds all of them, and a
> numbered **Open register carrying nine undecided slots**. Rules and
> OPEN slots are always visibly separated, and an OPEN slot is never
> silently filled: filling one takes a D-number, which converts it
> into a rule. **The census cell for this item says "ten pipeline
> stages"; derived from the file, the pipeline is NINE** — the tenth
> row of ENGINE's own table is §11 Invariants, which is a law over
> every stage rather than a stage. The same cell says the nine
> questions are "parked until V1.S3 opens"; also not quite — the
> register names different homes, and at least OPEN-2 (the grade
> scale) belongs to
> [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code),
> a stage EARLIER than S3. The derivations win.

## What it is

[ENGINE](../ENGINE.md) is the engine described before it is built,
with a stated contract on both sides: when the engine is built
([V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep)), the
code must match this file; when engine code is reviewed, it is
reviewed against this file.

Every request — a first ask, a full plan, or a single edit — runs the
same pass:

```
INTAKE → ACQUIRE → JUDGE → AGGREGATE → SYNTHESIZE → RENDER
   ↑                                        |
   └––––––– RE-VALIDATE ←– edit/drift ––––––┘
GATE wraps every stage · LEARN taps every stage · INVARIANTS bind all
```

The file's most distinctive property is that it holds **two kinds of
content that never blur**:

- **Rules** — already decided, binding now, each traceable through its
  stage's Sources line, and changeable only by D-number.
- **OPEN slots** — decisions not yet made, marked `OPEN-n` inline at
  the exact place the gap bites, and collected in
  [§12](../ENGINE.md#12-open-register).

The inline marking is what makes this more than a to-do list. In
[§5 Aggregate](../ENGINE.md#5-aggregate--one-score), the scoring
formula is literally written as
`placement_score = compose(verdicts, weights, priorities)` with
`OPEN-6` beside it — the file states that it does not know how the
number is computed, in the place where the number would be computed.

## What raised it

Two problems, and the second is the interesting one.

**The name was lying.** The file existed as DECISION-POLICY, and the
founder read that as a policy for decisions in general — governance,
not travel reasoning. The name misled its own author, and that
observation opened the task.

**The prose hid the pipeline.** The file described a pipeline in
topic-essay form, so the shape it was actually specifying could not be
seen. And undecided calculations were scattered through the prose as
implications rather than declarations — which is the failure the
reliability law forbids everywhere else in the product. The recut
applied Roam's own honesty rule to Roam's own blueprint: **an
undecided slot must be loud, not implied.**

## What changed, in order

- **[#69](https://github.com/wsher0901/roam/pull/69) — the file
  becomes canonical for plan synthesis**
  ([D-021](../record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)).
  [FOUNDATION](../FOUNDATION.md) drops its plan-synthesis section and
  this file's existing word-for-word mirrors become the originals:
  preferences-as-defaults, constraint priority, warn-don't-block,
  composition- and condition-aware placement, staged synthesis,
  near-peer alternatives, proactive shifts, trade-off locking. One
  home per rule — identity in FOUNDATION, engine reasoning here — and
  because the mirror already existed, canonicalizing REMOVED a
  duplication rather than creating a file.
- **[#95](https://github.com/wsher0901/roam/pull/95) — the recut, the
  rename, and the register**
  ([D-028](../record/DECISIONS.md#d-028--consolidation-recut-decision-policy-becomes-engine)).
  DECISION-POLICY becomes ENGINE and is reshaped from topic-prose into
  the pipeline form; undecided calculations become numbered OPEN
  slots; four founder-raised gaps join the register (the aggregation
  law, fact-drift re-validation, the learning loop, the eval-set
  gate), taking it from five slots to nine; and one invariant makes
  the explainability boundary explicit. Three execution details from
  that bench are worth keeping because each is a small transferable
  lesson:
  - **The rename was committed as a pure `git mv` BEFORE the content
    rewrite**, in its own commit, so git records a 100% rename and
    history follows the file through a full-content overwrite.
  - **The bench's own anchor self-check caught the brief.** Of three
    best-effort link targets supplied to it, two were right and one
    was wrong — the payload guessed an anchor that did not exist, and
    the real heading was found and used instead. The only deliberate
    divergence from the brief's bytes, and it was the correct one.
  - **A verbatim payload would have deleted something.**
    [HOME](../HOME.md)'s portrait was a JOINT portrait of two
    consolidated files; the instruction said replace its body with a
    paragraph that described only ENGINE. Following it literally would
    have erased the other file's only portrait, so the bench split the
    portrait in two and recorded the deviation. **An instruction that
    is correct about its subject can still be destructive about its
    context.**
- **Alternatives rejected at the recut, still binding.** Keeping the
  name with a disambiguating sentence was rejected because the name
  keeps whispering wrong; two sequential PRs were rejected for the
  intermediate broken-link state; and putting the four founder gaps
  into rules sections was rejected outright — they are undecided, so
  register only.

## Where it stands

Complete as a blueprint, unbuilt as code, and explicit about the
difference. `engine/` in the repo says so in its own words: the real
CheckModule contract, Verdict shape and orchestrator arrive with
V1.S3.T1, and nothing there defines that contract yet.

**The stage count, derived.** ENGINE's own table has ten rows,
numbered §2 through §11. Nine of them are pipeline stages — Intake,
Acquire, Judge, Aggregate, Synthesize, Render, Gate, Re-validate,
Learn. The tenth, §11 Invariants, is described in the file as "true at
every stage, for every claim, forever" — it is the reliability law
projected over the pipeline, not a step in it, and the diagram places
it accordingly ("INVARIANTS bind all"). Counting table rows gives ten;
counting stages gives nine. The census cell counted rows.

**The register, and where its slots actually live.** Nine open slots,
and their homes are not uniform:

| Slot | The undecided thing | Named home |
| --- | --- | --- |
| OPEN-1 | confidence & score scales | V1.S3.T1 contract |
| OPEN-2 | the grade scale is provisional | **V1.S1.T7** |
| OPEN-3 | what TP-42 "strict" does concretely | — |
| OPEN-4 | TP-30 × category-intensity precedence | — |
| OPEN-5 | intensity thresholds | V1.S3.T3 profiles |
| OPEN-6 | **the aggregation law** — the umbrella over 1, 4, 5 | — |
| OPEN-7 | fact-drift re-validation of standing plans | — |
| OPEN-8 | the learning loop as an engine duty | — |
| OPEN-9 | the eval-set gate | V1.S3 contract |

So "parked until V1.S3 opens" is right for some and wrong for others:
OPEN-2 waits on T7 in
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code),
and four slots name no home at all. The four unhomed ones are the
substantive ones — OPEN-6 in particular is the umbrella question of
how graded, confidence-carrying verdicts compose into a single score,
which is the arithmetic at the centre of the whole product.

Two properties are worth naming.

**The invariants are the only part of the file that is already
binding.** Never fabricate · unverifiable means labeled · reliable
source or no ship · SI everywhere inside · **explainable by
construction** — the last of which draws the line the learning loop
must not cross: the engine may learn from data, but never becomes a
black box, and every output stays traceable to sources, rules and
stated reasons. That invariant is what makes OPEN-8 a genuinely hard
question rather than a deferred one.

**The file has a provisionality it admits twice over.** The procedure
steps describe the shape of one pass, and the file states that the
shape is provisional until the V1.S3.T1 contract ratifies it — the
same way the grade scale is provisional until T7. A blueprint that
declares which of its own parts are not yet load-bearing is doing the
reliability law's work on itself.

The open edge is the honest one: this is a description of a brain that
has never run. Its nine stages, its scoring gaps, and its invariants
will first be tested against code in
[V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep), which has
zero of seven tasks ticked.

## Sources

Down-links only.

- [ENGINE](../ENGINE.md) — the blueprint; the stage count and register
  table above are derived from it at write time.
- [ENGINE §12 Open register](../ENGINE.md#12-open-register) — the nine
  slots and their named homes.
- [ENGINE §11 Invariants](../ENGINE.md#11-invariants--the-reliability-law)
  — the reliability law over every stage.
- [ENGINE §7 Render](../ENGINE.md#7-render--honest-pixels) — the
  A/B/C/D grade matrix and its provisional status.
- [D-021](../record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
  — the plan-synthesis rules become canonical here.
- [D-028](../record/DECISIONS.md#d-028--consolidation-recut-decision-policy-becomes-engine)
  — the rename, the pipeline form, the register's growth to nine, and
  the rejected alternatives.
- [D-013](../record/DECISIONS.md#d-013--canonical-units-si-storage) —
  the SI-inside invariant and render-time conversion.
- [the engine-recut story](../record/history/product/definition/engine-recut.md)
  — [#95](https://github.com/wsher0901/roam/pull/95): the `git mv`
  ordering, the anchor self-check, and the joint-portrait judgment
  call.
- [the foundation-roadmap-recut story](../record/history/product/definition/foundation-roadmap-recut.md)
  — [#69](https://github.com/wsher0901/roam/pull/69): where the
  synthesis rules moved in.
- [FOUNDATION §The reliability law](../FOUNDATION.md#the-reliability-law)
  — the source of the invariants.
