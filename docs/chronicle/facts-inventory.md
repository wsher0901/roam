---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# FACTS — the world-fact inventory, and the decision to name every gap before filling any

> **CURRENT ENDING (2026-08-06).** Living and complete as an
> inventory: [FACTS](../data/FACTS.md) enumerates **54 world facts**
> across the five check families (Weather 14 · Sky & sea 10 ·
> Feasibility 14 · Time & transport 8 · Crowds & calendar 8), plus
> the 47 traveler parameters (Appendix A), the plan parameters
> (Appendix B), and the telemetry vocabulary (Appendix C, folded in
> from the retired TELEMETRY.md). Every fact declares its spine step,
> scope, freshness window and source slot; **22 of the 54 are marked
> ⚠ coverage-risky** and carry a fallback ladder. The 54 facts map
> onto **43 source slots**, of which **6 are filled** — the weather
> family — leaving 37 waiting on
> [V1.S1.T3–T6](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code).
> **Two numbers in this file's own lineage are easy to cross:** the
> world inventory grew 47 → 54, and the traveler vocabulary settled
> at 47 — so "47" names different things depending on which appendix
> you are in.

## What it is

The cornerstone of the data gate: what the engine must KNOW, written
down before anything was built to fetch it.

Each of the 54 facts is a numbered entry (`F-WX-01`, `F-SS-04`,
`F-FE-09`, …) declaring five things:

- **What** it is, in one line;
- **Spine** — which of Suggest / Plan / Edit consumes it;
- **Scope** — global, or where coverage actually reaches;
- **Freshness** — how stale the value may be before it must be
  refetched (6 h for temperature, tightening to 1–3 h within 48 h of
  the activity; a yearly recompute for climate normals);
- **Type and source slot** — fetched, computed, or derived, and the
  named slot in [SOURCES](../data/SOURCES.md) that must serve it.

That last field is the hinge of the whole data gate. **A fact and its
source are separate artifacts**: FACTS says what must be known,
SOURCES says where it comes from, and a slot name is the join between
them. It is what let the inventory be completed months before its
sourcing was — and what makes the unfilled slots countable rather than
vague.

The file also carries the 15-type activity taxonomy — beach, on-water,
hiking, city walking, viewpoints, golden-hour photography, stargazing,
seasonal nature, snow sports, indoor venues, dining, nightlife,
festivals, theme parks, driving legs — which is the join vocabulary
for the rest of the inventory: weather sensitivity profiles,
destination affordances, venue reputation, and traveler interest
weights all key off that one list.

## What raised it

[FOUNDATION](../FOUNDATION.md)'s reliability law — never fabricate,
every fact checked, a check module ships only with a reliable source —
is unenforceable against an unenumerated set. You cannot promise that
every fact is sourced until you can say how many facts there are.

So [V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
was cut as a GATE rather than a task: docs and spike scripts only, no
app code, running as a parallel lane beside the skeleton. The
inventory had to exist before sourcing, and sourcing before the
engine, because the alternative — discovering mid-build that a
promised check has no obtainable data — would have falsified the
product's central claim after the code was written.

The coverage question raised the second half. A global product whose
facts are US-shaped would either lie outside the US or quietly narrow
its scope; the demo's own wow cases (aurora, blossom timing, tidal
flats) are international.

## What changed, in order

- **[#31](https://github.com/wsher0901/roam/pull/31) — FACTS is born
  at 47 world facts**
  ([D-010](../record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
  ·
  [D-011](../record/DECISIONS.md#d-011--traveler-input-vocabulary)).
  The inventory enumerates every fact the five families need, each
  with spine step, scope, freshness need and an empty source slot for
  the vetting tasks to fill. **D-010 is the ruling that shaped the
  file's texture**: V1 coverage is global from day one — no geography
  cut — and every coverage-risky fact declares a six-rung fallback
  ladder, vetted top-down: (1) sources global by construction
  (numerical weather models, astronomical and harmonic math) → (2)
  regional authoritative sources → (3) computed from physics → (4)
  estimated ranges, labeled → (5) LLM-research grade, always rendered
  unverified → (6) **refusal — the engine says "can't verify here"
  rather than guessing.** The sixth rung is what makes the ladder
  honest rather than a licence to degrade indefinitely. Two
  alternatives were rejected and the reasoning still holds: a
  US+Canada-only V1 (fastest to all-green grades, but it kills the
  international demo scenarios and only DEFERS sourcing work that must
  happen anyway) and a US-plus-shortlist cut (bounded, but it creates
  a two-tier product and still leaves the ladder unbuilt).
- **[#33](https://github.com/wsher0901/roam/pull/33) — the inventory
  grows 47 → 54.** The bench best known for taking the traveler
  vocabulary from 26 to 47 fields also grew the WORLD inventory by
  seven facts. This is the origin of the number collision that this
  story's ending flags: after this bench, 47 is the count of TRAVELER
  PARAMETERS and 54 the count of WORLD FACTS, and the file's own intro
  states both plainly.
- **[#35](https://github.com/wsher0901/roam/pull/35) — the telemetry
  vocabulary is defined, separately**
  ([D-014](../record/DECISIONS.md#d-014--telemetry-posture)). What the
  system records about ITSELF lands in its own file, deliberately
  distinct from world facts and traveler inputs.
- **[D-033](../record/DECISIONS.md#d-033--telemetry-folds-into-facts)
  — TELEMETRY folds in as Appendix C, and the file is retired.** The
  standalone file confused its own author ("not sure what this is
  for"). The founder's charter for FACTS — categories of information
  we decided to incorporate, each definition within — described the
  telemetry vocabulary exactly, and FACTS already hosted non-world
  vocabularies in Appendices A and B. Folding was chosen over keeping
  the file with an explanatory line, on the grounds that **the file's
  existence was the confusion**, so a purpose note would have treated
  the symptom.

## Where it stands

Complete as an inventory, one-fifth sourced, and unread by any code.

Derived at this story's write time:

| Family | Facts | ⚠ coverage-risky | Source slots | Slots filled |
| --- | --- | --- | --- | --- |
| [Weather](../data/FACTS.md#f-wx--weather-14--source-task-v1s1t2) | 14 | 3 | 6 | 6 |
| [Sky & sea](../data/FACTS.md#f-ss--sky--sea-10--source-task-v1s1t3) | 10 | 2 | 7 | 0 |
| [Feasibility](../data/FACTS.md#f-fe--feasibility-14--source-task-v1s1t4) | 14 | 7 | 14 | 0 |
| [Time & transport](../data/FACTS.md#f-tt--time--transport-8--source-task-v1s1t5) | 8 | 5 | 8 | 0 |
| [Crowds & calendar](../data/FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6) | 8 | 5 | 8 | 0 |
| **Total** | **54** | **22** | **43** | **6** |

**The risk is not evenly spread, and its shape confirms a claim
FOUNDATION makes in prose.** Weather is the largest family and the
least risky (3 of 14 marked ⚠) because numerical models are global by
construction — rung 1 covers nearly all of it. Time & transport is the
smallest family and proportionally the riskiest (5 of 8), which is
exactly why FOUNDATION calls it "the most data-gated family" and says
schedule-level facts ship only with a consistently reliable source.
Feasibility carries the largest absolute risk (7 of 14) — opening
hours, seasonal closures, reservation flags and parking are the facts
the world simply does not publish uniformly. **The families that are
easiest to promise are the ones physics already solved; the ones that
depend on institutions publishing their own hours are where the
ladder does its work.**

Two structural properties are worth naming.

**Every gap is countable.** Because a fact names its slot, "how much
of the data gate is done" has an exact answer — 6 of 43 slots — rather
than an impression. An inventory that named its sources inline would
have made the same work invisible.

**Retention and licence are selection criteria, not afterthoughts.**
The file's own rule for SOURCES entries requires `retention_rights`
and `license_class` per slot, and
[D-015](../record/DECISIONS.md#d-015--data-asset-law) makes
caching-prohibited sources DISQUALIFYING for the asset layer. The
quiet-asset promise in FOUNDATION is therefore enforced at the
sourcing gate rather than hoped for later.

The open edges are three, and all are honest rather than hidden.
Thirty-seven slots are unfilled and four families unvetted. The
storage schema that would give these facts a home
([V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code))
is unbuilt, so freshness windows and the bitemporal cache law are
declared and unenforced. And nothing in `engine/` reads this file yet —
the check modules that would consume these facts arrive in
[V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep).

## Sources

Down-links only.

- [FACTS](../data/FACTS.md) — the inventory itself; every count in
  this story is derived from it at write time.
- [FACTS · T2–T6 assignment map](../data/FACTS.md#t2t6-assignment-map)
  — the fact→slot mapping and the per-entry rule for SOURCES.
- [D-010](../record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
  — global coverage, the six-rung ladder, and the rejected geography
  cuts.
- [D-011](../record/DECISIONS.md#d-011--traveler-input-vocabulary) —
  the traveler half of the inventory.
- [D-014](../record/DECISIONS.md#d-014--telemetry-posture) — the
  telemetry vocabulary this file later absorbed.
- [D-015](../record/DECISIONS.md#d-015--data-asset-law) — bitemporal,
  append-only storage; licence and retention as primary selection
  criteria.
- [D-033](../record/DECISIONS.md#d-033--telemetry-folds-into-facts) —
  the fold into Appendix C and the file retirement.
- [the v1.s1.t1 story](../record/history/product/definition/v1.s1.t1.md)
  — [#31](https://github.com/wsher0901/roam/pull/31), the inventory's
  birth.
- [the traveler-vocabulary story](../record/history/product/definition/traveler-vocabulary.md)
  — [#33](https://github.com/wsher0901/roam/pull/33), where the world
  inventory grew 47 → 54.
- [SOURCES](../data/SOURCES.md) — the slot registry these facts point
  into.
- [HOME §Reading the data files](../HOME.md#reading-the-data-files) —
  the manual for the ⚠ mark and the ladder.
