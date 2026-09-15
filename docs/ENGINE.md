---
type: spec
title: The engine
status: living
---
# The engine on paper — how Roam thinks

## 0. What this is
The brain's blueprint. This file describes the engine as a pipeline:
what flows in, what each stage does, what flows out, and which rule
governs each step. When the engine is built (V1.S3), the code must
match this file; when engine code is reviewed, it is reviewed
against this file.

Two kinds of content, always visibly separated:
- **Rules** — already decided, binding now, each traceable through
  its stage's Sources line. Rules change only by D-number.
- **OPEN slots** — decisions not yet made, marked `OPEN-n` inline
  and collected in [§12](#12-open-register). An OPEN slot is never
  silently filled: filling one takes a D-number, which converts it
  into a rule — and the filled slot then KEEPS ITS NUMBER and is
  marked CLOSED in place, because inline `OPEN-n` mentions resolve
  by number ([§12](#12-open-register) holds the rule). The engine
  grows by accretion — new sources, new families, new metrics plug
  into stages; the pipeline shape stays.

Procedure steps describe the shape of one pass; the shape is
provisional until the V1.S3.T1 contract ratifies it, the same way
the grade scale is provisional until T7. Written for the builder
first — the session implementing or reviewing the engine — and for
the founder auditing what has been decided. Sections 2–9 of the old
form are canonical here since
[D-021](record/DECISIONS.md#d-021--plan-synthesis-principles-re-home).

## 1. The shape of one thought
Every request — a first ask, a full plan, or a single edit — runs
the same pass:

```
INTAKE → ACQUIRE → JUDGE → AGGREGATE → SYNTHESIZE → RENDER
   ↑                                        |
   └––––––– RE-VALIDATE ←– edit/drift ––––––┘
GATE wraps every stage · LEARN taps every stage · INVARIANTS bind all
```

| Stage | One-line job |
|---|---|
| [2 · Intake](#2-intake--resolve-the-traveler) | turn raw traveler input into resolved, provenance-tagged fields |
| [3 · Acquire](#3-acquire--get-the-facts) | fetch every needed world fact down its reliability ladder |
| [4 · Judge](#4-judge--per-check-verdicts) | each check family scores its condition per activity |
| [5 · Aggregate](#5-aggregate--one-score) | compose verdicts into placement and trip scores |
| [6 · Synthesize](#6-synthesize--build-the-plan) | search, place, and schedule under the constraints |
| [7 · Render](#7-render--honest-pixels) | show every claim exactly as honestly as its grade allows |
| [8 · Gate](#8-gate--warn-or-refuse) | warn, and let the traveler decide — or refuse the scope |
| [9 · Re-validate](#9-re-validate--edits-and-drift) | any change re-runs the whole pass, never a patch |
| [10 · Learn](#10-learn--the-loop-back) | log, measure, demote, improve |
| [11 · Invariants](#11-invariants--the-reliability-law) | the reliability law over every stage |

## 2. Intake — resolve the traveler
*Turn whatever the traveler gave us into resolved fields, each
tagged with where it came from.*

In: raw traveler input — typed, pasted, or UPLOADED — + stored
traveler fields.
Out: resolved field set, each value carrying provenance +
updated_at.

Procedure:
1. Accept the floor: origin + dates always suffices to proceed — a
   language model STRUCTURES whatever else the traveler said into
   these fields and does nothing else here
   ([§11](#11-invariants--the-reliability-law)).
2. Attach provenance to every field: {stated | inferred | default}.
3. Resolve conflicts by supersede order.
4. Elicit only what has earned asking; never re-ask what is known.

Rules:
- **Intake is multimodal** — a pasted booking confirmation, a
  screenshot, or a PDF is traveler input like any other sentence:
  the model EXTRACTS its fields, schema-validated, and everything
  it extracts is `stated` provenance because the traveler supplied
  the document. Extraction is the model's Intake role and nothing
  more; the boundary is
  [§11](#11-invariants--the-reliability-law)'s. An uploaded plan
  that is to be re-validated rather than merely read enters through
  the same door —
  [V1.S6.T4](ROADMAP.md#v1s6--edit--revalidate-the-money-moment).
- **The floor never changes** — origin + dates always suffices;
  every other traveler field defaults to Null.
- **Everything carries provenance** — every stored traveler field
  carries {stated | inferred | default} plus updated_at.
- **Who wins on upsert** — stated > inferred (own) > cohort prior >
  default; newer > older — the traveler's own signal always outranks
  category patterns.
- **The stated-only class is never inferred** — nationality, special
  conditions, accessibility, allergy details.
- **Ask tiers cap elicitation** — at most six upfront questions;
  most fields are asked later when they earn it, or never — inferred
  / defaulted / composition-adjusted with warn-don't-block.
- **Vocabulary grows append-only** — a new traveler field is one
  nullable column plus a D-number.
- **Cohort priors are patterns, never pigeonholes** — learned from
  similar travelers, never demographic stereotypes; layer activation
  is version scope, and cohort learning is not V1.

Sources:
[D-011](record/DECISIONS.md#d-011--traveler-input-vocabulary)
·
[D-012](record/DECISIONS.md#d-012--elicitation-and-inference-policy)
·
[D-025](record/DECISIONS.md#d-025--foundation-v4-principles-recut)
·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
·
[FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
· [ROADMAP](ROADMAP.md)

## 3. Acquire — get the facts
*For every activity × check family, fetch the answer from the best
source alive — and step down the ladder, label in hand, when it
dies.*

In: candidate activities/places × the check families in play.
Out: fact values, each stamped with source, grade, rung, fetched_at.

Procedure:
1. Look up the fact's declared ladder.
2. Try rungs top-down until one answers; record any fall
   (ladder_falls).
3. Pick forecast vs climatology by trip horizon; remember which.
4. Respect freshness: refetch anything staler than its window.

Rules:
- **The ladder, top-down** — (1) global-by-construction source →
  (2) regional authoritative source → (3) computed from physics/math
  → (4) estimated ranges, labeled → (5a) MODEL-RETRIEVED WITH
  PROVENANCE → (5b) MODEL MEMORY, rendered unverified → (6) refusal
  — "can't verify here" rather than guessing.
- **Rung 5 is two rungs, not one** — the split is
  [D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)'s
  amendment to
  [D-010](record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)'s
  ladder, and it is the difference between a model that FETCHED an
  answer and a model that REMEMBERED one.
  - **5a — model-retrieved with provenance.** The model searches
    and fetches under the fact's declared retrieval policy, and the
    value is stored with a provenance record of four parts:
    `{url, quoted span, fetched_at, domain grade}`. A quoted span
    that does not appear at the fetched url is not a rung-5a value.
    GRADE B on an AUTHORITATIVE DOMAIN — the operator itself, a
    government body, a transit authority, or established press —
    and GRADE C everywhere else. Freshness-windowed like any other
    fetch, and cached like any other fetch.
  - **5b — model memory.** The model's own recollection, with no
    url and no span. GRADE D, rendered unverified, and exactly one
    step above refusal.
  - The model FETCHES AND QUOTES; it never scores.
    [D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)'s
    boundary holds unchanged over both rungs
    ([§11](#11-invariants--the-reliability-law)).
- **Every rung-5a fact is served by the retrieval module** —
  [V1.S3.T8](ROADMAP.md#v1s3--engine-core--two-families-deep) owns
  the search, the fetch, the quote extraction, the schema
  validation and the cache; no stage fetches for itself.
- **The retrieval policy is per fact, not per model** — allowed
  domains and their grade, whether a quote is required, and the
  freshness window are declared in the fact's
  [SOURCES](data/SOURCES.md) entry and defined in
  [FACTS § How to read this file](data/FACTS.md#how-to-read-this-file).
- **Declared in advance** — every coverage-risky fact (⚠) declares
  its fallback ladder, vetted top-down in V1.S1.T2–T6 and, for
  cost, [V1.S1.T8](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code).
- **Forecast vs climatology** — real forecast when the trip is near,
  climatology when it is far; the plan says which it used.
- **Freshness windows bound staleness** — each fact declares the
  maximum staleness before refetch; windows tighten as the activity
  date nears.

Sources:
[D-010](record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
·
[D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
· [FACTS §How to read this file](data/FACTS.md#how-to-read-this-file)
· [F-WX-11](data/FACTS.md#f-wx-11--climate-normals-by-date-of-year) ·
[FOUNDATION §What Roam checks](FOUNDATION.md#what-roam-checks)

## 4. Judge — per-check verdicts
*Each check family looks at one condition for one activity and
returns a verdict with its receipt attached.*

In: fact values (from Acquire) + activity sensitivity profiles.
Out: one Verdict per activity × family.

```
Verdict {
  score        # how good/bad this condition is here — scale OPEN-1
  confidence   # how sure we are — scale OPEN-1
  source       # which source, which rung, which grade
  explanation  # the reason, in words a traveler can read
}
```

Procedure:
1. Load the family's sensitivity profile for this activity type.
2. Score the condition against the profile (thresholds: OPEN-5).
3. Attach confidence, source, explanation.

Rules:
- **Every claim carries its receipt** — each check declares its
  source and confidence; the Verdict shape carries score,
  confidence, source, explanation.
- **Engine config is not a world claim** — internal configuration
  (e.g. activity sensitivity profiles) never renders as a fact.

Sources:
[FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law)
· [V1.S3.T1](ROADMAP.md#v1s3--engine-core--two-families-deep) ·
[WX-13](data/FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types)

## 5. Aggregate — one score
*Fold many verdicts into one placement score and one trip score —
reliability weighing in, importance ranked, nothing hidden.*

In: Verdicts per activity × family + traveler priority (TP-30).
Out: placement scores, trip score, ranked alternatives.

```
placement_score(activity, slot) =
    compose( verdicts, weights, priorities )   # OPEN-6
# how grade & confidence weight the number:      OPEN-6
# how TP-30 composes with category×intensity:    OPEN-4
```

Rules:
- **Priority = category × intensity** — severe jet-lag outranks mild
  rain; intensity is data, not vibes.
- **The traveler's ranked priority sets the demotion order** — TP-30
  (budget / must-dos / comfort / time) decides what gives first when
  limits bind.

Sources: canonical here since
[D-021](record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
·
[TP-30, FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)

## 6. Synthesize — build the plan
*Search cheap before expensive, place with the conditions, honor the
ask — and still show the better trip when one exists.*

In: scored candidates + constraints + traveler fields.
Out: a day-by-day plan + near-peer alternatives + flagged
trade-offs.

Procedure:
1. Coarse pass first; confirm killer constraints (departure bounds,
   trip length, budget) before any expensive search.
2. Place activities condition-aware; match composition-aware.
3. Score the shortlist; also score off-list near-peers.
4. Surface proactive shifts where the window measurably improves.

**The optimizer.** Placement is not a sort — it is a CONSTRAINT
SCHEDULER, and it is a named component of this stage so that
[V1.S5.T1](ROADMAP.md#v1s5--plan) builds one thing rather than
discovering it.

- **What it solves over:** time windows (opening
  [hours](data/FACTS.md#f-fe-04--opening-hours),
  [reservation and timed-entry flags](data/FACTS.md#f-fe-08--reservation--timed-entry--permit-flags-),
  [daylight](data/FACTS.md#f-ss-01--sun-ephemeris), weather-fit via
  the [sensitivity profiles](data/FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types))
  · the travel-time matrix
  ([FE-06](data/FACTS.md#f-fe-06--travel-times--distances-per-mode))
  · day rhythm
  ([TP-48](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
  · the pace and density budgets
  ([TP-11, TP-27](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
  · and PINS —
  [TP-44](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
  commitments and accepted trade-offs, which are constraints, not
  preferences.
- **Its objective is the composed score** — the same one
  [§5](#5-aggregate--one-score) composes; the optimizer introduces
  no second notion of "good". How that number is composed is
  OPEN-6.
- **Simulation is a re-solve, not a preview.** "What if I move
  this?" pins the move and re-solves the whole day; the answer is
  the SCORE DELTA, rendered in words
  ([§7](#7-render--honest-pixels)'s explanation duty).
- **"Degrades" is a threshold, not a feeling** — a delta past a
  threshold, on the intensity scale that is OPEN-5. The solver
  class and the threshold's own value are OPEN-10.
- **The model never solves.** It proposes candidates and explains
  outcomes; the schedule is computed
  ([§11](#11-invariants--the-reliability-law)).

Rules:
- **Feasibility outranks desire** — an infeasible must-do is
  declined with an alternative (often a different window); a
  feasible trade-off is presented with pros and cons.
- **Staged synthesis** — a cheap coarse pass first; killer
  constraints are confirmed before any expensive search.
- **Composition-aware matching** — party makeup (ages, type)
  reshapes venue choice and defaults — fewer stops, gentler pace —
  without being asked.
- **Condition-aware placement** — never schedule an exposed activity
  into the hottest or most hostile hour without reason; daylight,
  heat, UV, and crowds steer time-of-day. **CROWD AND SCARCITY
  MODELLING IS THIS RULE, NAMED**: anticipating other travelers is
  not a separate faculty but the placement lens reading four facts
  already in the inventory — venue busyness
  ([CC-06](data/FACTS.md#f-cc-06--venue-busyness-curves-)), sellout
  speed (the `sellout_speed` field of
  [FE-08](data/FACTS.md#f-fe-08--reservation--timed-entry--permit-flags-)),
  cruise port-call days
  ([CC-08](data/FACTS.md#f-cc-08--cruise-port-call-schedules-)), and
  the holiday and school calendars
  ([CC-01](data/FACTS.md#f-cc-01--public-holidays),
  [CC-02](data/FACTS.md#f-cc-02--school-holiday-calendars-)). No new
  fact is needed for it
  ([D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)).
- **Proposed, then verified** — the model may PROPOSE destinations
  and activities, and every proposal is then verified down the
  ladder, landing at rung 5a or better before it can be offered;
  anything that can only reach 5b is labeled or dropped, never
  quietly ranked. The curated set remains the warmed demo path
  ([V1.S8.T3](ROADMAP.md#v1s8--demo-polish)), not the ceiling.
- **Honor, then better** — honor the stated preference, and surface
  a significantly better alternative when one exists (airports,
  dates, areas).
- **Proactive shifts** — when moving a departure day or the whole
  window measurably improves the trip, say so; date flexibility is
  an engine lever.
- **Near-peer alternatives** — in shortlist mode, score the list and
  also surface off-list options of equal merit.
- **Accepted trade-offs lock** — once the traveler accepts a
  trade-off it is pinned and not re-litigated; pinned items carry
  acceptance provenance.

Sources: canonical here since
[D-021](record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
(the optimizer, proposed-then-verified, crowds named) ·
[FACTS Appendix B](data/FACTS.md#appendix-b--plan-parameters-t7-must-schema-not-world-facts)

## 7. Render — honest pixels
*Every claim on screen looks exactly as sure as it really is — no
more.*

In: the plan + every claim's grade, rung, confidence.
Out: the rendered plan, every claim labeled per the matrix.

| Grade | Meaning | Renders as |
|---|---|---|
| **A** | authoritative or model-grade; globally consistent, obtainable, license-clean | **verified** |
| **B** | authoritative where covered; coverage or fidelity caveats — INCLUDING a rung-5a retrieval from an authoritative domain (operator, government, transit authority, established press) | **verified where covered, labeled elsewhere** |
| **C** | estimated / derived / curated — INCLUDING a rung-5a retrieval from any other domain | **labeled estimate** |
| **D** | model memory (rung 5b): no url, no quoted span | **always unverified** |

The grade scale is provisional until ratified in V1.S1.T7 (OPEN-2).
This table is the CANONICAL grade scale;
[SOURCES](data/SOURCES.md) points here rather than restating it.

**A rung-5a claim renders with its receipt attached** — the domain
it came from and the span that was quoted, reachable from the claim
itself. That is what makes B or C honest for a retrieved value, and
it is the demo's centrepiece
([V1.S8.T3](ROADMAP.md#v1s8--demo-polish)): every rendered claim
opens its evidence. A rung-5b claim has no receipt to open, which is
exactly why it renders unverified.

Rules:
- **Traveler strictness (TP-42)** — the verified-only setting
  (labeled | strict, default labeled) governs how ladder rungs 4–5
  render; what strict does concretely is OPEN-3.
- **Convert only at render time** — units convert via the TP-43
  settings field (default metric; never asked; the UI exposes the
  toggle). Locale-based defaulting (US → imperial) is deferred until
  accounts/locale exist.
- **Explanation duty** — every ranking and every edit verdict
  carries its reasons.

Sources: [SOURCES.md](data/SOURCES.md) (incl.
[§activity-profiles](data/SOURCES.md#activity-profiles)) ·
[D-010](record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
·
[D-013](record/DECISIONS.md#d-013--canonical-units-si-storage)
·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
·
[FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
· [FOUNDATION §Principles](FOUNDATION.md#principles) ·
[T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)

## 8. Gate — warn or refuse
*The engine advises; the traveler decides — except where honesty or
scope forbids.*

Rules:
- **Warn, don't block** — outside hard feasibility, the engine warns
  and lets the traveler decide.
- **The refusal rung** — where nothing verifiable exists and no
  honest label helps, the engine says "can't verify here" rather
  than guessing (ladder rung 6).
- **Scope refusals** — no booking, payments, or reservations (the
  engine informs, never transacts). **THE PRICE REFUSAL IS AMENDED
  BY
  [D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)**,
  and the amendment is narrow: where a LICENSED, NON-BOOKING API
  exists — flights first — the engine may show a LIVE QUOTE, which
  is timestamped and freshness-windowed IN MINUTES, because a stale
  quote is worse than no quote. Everywhere else cost means an
  honest range. A SCRAPED PRICE IS STILL REFUSED, on licence and
  fragility grounds, whatever it would cost to obtain. And a quote
  is not a booking: showing a fare never becomes selling one.
  → [F-CO](data/FACTS.md#f-co--cost-3--source-task-v1s1t8).
- **Content guardrails** — no demographic packing lists (gear notes
  only when an activity demands them); dietary handling filters
  options but never guarantees safety — travelers verify allergens
  with venues.

Sources: canonical here since
[D-021](record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
·
[D-010](record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
· [ROADMAP §V1 — The demo](ROADMAP.md#v1--the-demo--active)

## 9. Re-validate — edits and drift
*Touch one thing and the whole plan re-thinks — never a quiet
patch.*

In: an accepted plan + a perturbation (traveler edit; later, fact
drift).
Out: a fully re-scored plan + what the change knocked over, in
words.

Rules:
- **Never a silent squeeze-in** — every edit re-validates the WHOLE
  plan and explains what the change knocks over.
- **Every version diff carries its reason** — what changed, and WHY
  the traveler asked for it when they said, tagged `stated` or
  `absent`. A REASON IS NEVER INFERRED: if the traveler gave none,
  the diff says `absent` and stops there, because a guessed motive
  is a fabricated fact about a person. The tagged diffs compose
  into the DECISION PATH — the sequence of changes and reasons a
  traveler can read back and walk to any earlier version
  ([V1.S6.T3](ROADMAP.md#v1s6--edit--revalidate-the-money-moment)).
  The event that records it is
  [Appendix C1](data/FACTS.md#c1--behavior-events-d-014)'s.
- Pinned trade-offs keep their acceptance provenance through
  re-validation (see [§6](#6-synthesize--build-the-plan)).
- Whether a changed or expired **fact** re-validates a standing plan
  is OPEN-7 — edits are decided; drift is not.

Sources: [FOUNDATION §The spine](FOUNDATION.md#the-spine) ·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
· [V1.S6](ROADMAP.md#v1s6--edit--revalidate-the-money-moment)

## 10. Learn — the loop back
*Everything the engine does is a data point; grades are earned for
life, never granted for life.*

In: every pass — verdicts, falls, renders, traveler responses.
Out: telemetry events, source-health signals, demotions, eval runs.

Rules:
- **Behavior events are logged** — the decided event vocabulary
  lives in
  [FACTS Appendix C1](data/FACTS.md#c1--behavior-events-d-014).
- **Every fall is logged** — runtime degradations down the ladder
  are recorded per slot (ladder_falls), feeding source health.
- **Grades are living** — earned, never grandfathered. Demotion law:
  sustained fetch failure, schema drift, or miscalibration demotes a
  source's grade, and renders fall down the ladder automatically;
  promotion only via re-vetting.
- How outcomes feed weights, rankings, and profiles — the learning
  loop as a duty, bounded by the explanation duty — is OPEN-8. The
  eval-set gate was OPEN-9 and is now an invariant
  ([§11](#11-invariants--the-reliability-law), closed by
  [D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)).

Sources:
[D-014](record/DECISIONS.md#d-014--telemetry-posture)
·
[D-015](record/DECISIONS.md#d-015--data-asset-law)
· [FACTS Appendix C3](data/FACTS.md#c3--source-health-p6)

## 11. Invariants — the reliability law
*True at every stage, for every claim, forever.*

- **Never fabricate** — every fact is checked.
- **Unverifiable means labeled** — anything unverifiable is labeled
  unverified in the plan, never guessed.
- **Reliable source or no ship** — a check module ships only when
  its information source is reliable and consistently obtainable.
- **The model boundary** — a language model structures what the
  traveler said ([Intake](#2-intake--resolve-the-traveler)), phrases
  explanations and rendered text
  ([Render](#7-render--honest-pixels)), and may propose candidates
  that [Acquire](#3-acquire--get-the-facts) then verifies. It never
  produces a world fact, a score, a confidence, a grade, or a
  source; every model output entering a stage is schema-validated;
  a model's own world claim exists only at ladder rung 5, labeled,
  and never enters [Judge](#4-judge--per-check-verdicts) or
  [Aggregate](#5-aggregate--one-score).
  **RUNG 5 IS NOW TWO RUNGS
  ([D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)),
  and the boundary is unchanged across both:** a model may FETCH
  and QUOTE (rung 5a, provenance attached), and it may REMEMBER
  (rung 5b, grade D) — it never SCORES either one. Retrieval widens
  what the model may bring back; it does not widen what the model
  may decide.
- **State outranks transcript** — the brain is STATELESS over a
  VERSIONED STATE STORE. Three things are stored, not remembered:
  the TRAVELER MODEL (every constraint and preference with
  provenance — `stated` / `inferred` / `derived`), the TRIPQUERY,
  and the PLAN VERSIONS. Every turn renders from state; THE
  TRANSCRIPT IS NEVER RE-READ to recover what the traveler wants.
  The consequence is the point: a redaction is a STATE EDIT plus a
  NEW VERSION, so "we forgot that" is verifiable by construction
  rather than promised — there is no conversation buried behind the
  state that could still be holding the deleted thing.
- **SI/metric everywhere inside** — all storage and engine math,
  exclusively, never mixed.
- **Explainable by construction** — the engine may learn from data
  (cohort priors, later signal tuning) but never becomes a black
  box: every output stays traceable to sources, rules, and stated
  reasons.
- **Any in-scope input is handled** — measured against the eval set
  [V1.S3.T6](ROADMAP.md#v1s3--engine-core--two-families-deep) owns.

Sources:
[FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law)
·
[D-010](record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
·
[D-013](record/DECISIONS.md#d-013--canonical-units-si-storage)
·
[D-025](record/DECISIONS.md#d-025--foundation-v4-principles-recut)
·
[D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
·
[D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)

## 12. Open register
Undecided slots, numbered; referenced inline as OPEN-n. Filling one
takes a D-number. For the founder — nothing here is resolved by this
file. **A filled slot KEEPS ITS NUMBER and is marked CLOSED in
place** — the register never renumbers, because every inline
OPEN-n reference elsewhere in this file and in the chronicle
resolves by number.

1. **Confidence & score scales.** Every Verdict carries score and
   confidence, but no decided rule says how either is computed or
   what scale it uses. Likely home: the V1.S3.T1 check contract.
2. **The grade scale is provisional.** SOURCES.md says "provisional
   until ratified in V1.S1.T7" — the §7 matrix inherits that status
   until T7 ratifies it.
3. **TP-42 "strict" mode is underspecified.** The field governs the
   rung 4–5 render policy, but what strict does concretely — hide
   rung 4–5 content, or render it with harder labels — is not
   decided.
4. **TP-30 × category-intensity composition.** When the traveler's
   ranked trade-off priority disagrees with the engine's category ×
   intensity ranking, which applies first is not decided.
5. **Intensity thresholds don't exist yet.** "Intensity is data, not
   vibes" — but the thresholds and weights live in the WX-13
   activity-sensitivity profiles authored in V1.S3.T3; until then
   there is no decided scale.
6. **The aggregation law** — the umbrella over 1, 4, and 5: how
   per-check verdicts, each with a grade and a confidence, compose
   into one placement score and one trip score; what weight
   reliability carries in the number itself, not just the label.
7. **Fact-drift re-validation.** Edits re-validate the whole plan;
   whether a changed or expired fact does the same to a standing
   plan — and when — is undecided. Barely binds in V1; real the day
   plans outlive a session.
8. **The learning loop as an engine duty.** Telemetry
   ([D-014](record/DECISIONS.md#d-014--telemetry-posture)),
   quality & ground truth (P5), and eval-run storage (T7) exist as
   parts; the rule that outcomes feed grades, weights, and rankings
   — without breaking the explanation duty — is undecided.
9. **The eval-set gate — CLOSED by
   [D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
   → [§11](#11-invariants--the-reliability-law).** The standing
   principle — the engine must handle arbitrary in-scope input,
   measured against a large, diverse evaluation set — is now an
   invariant, and the set itself is owned by
   [V1.S3.T6](ROADMAP.md#v1s3--engine-core--two-families-deep).

10. **The solver class and the degradation threshold.**
    [§6](#6-synthesize--build-the-plan) names the optimizer and
    what it solves over, but not WHAT KIND of solver runs it —
    greedy-with-repair, a CP/MIP model, local search — nor the
    value of the threshold past which a score delta counts as
    "degrades" (its SCALE is OPEN-5's; its CUTOFF is this slot's).
    **Decided before
    [V1.S5](ROADMAP.md#v1s5--plan) opens**, because
    [V1.S5.T1](ROADMAP.md#v1s5--plan) is the task that would
    otherwise pick one by accident. Minted by
    [D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state).

Sources:
[V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) ·
[V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
· [SOURCES.md](data/SOURCES.md) ·
[FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
·
[WX-13](data/FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types)
· [FACTS Appendix C2](data/FACTS.md#c2--quality--ground-truth-p5)
