---
type: policy
title: Decision policy
status: living
---
# Decision policy — how the engine reasons and renders

## 1. What this is
The engine's decision brain on paper: every already-decided rule for
how Roam reasons about facts and renders claims, collected in one
place. This file is the CANONICAL home of the engine's reasoning
rules — the plan-synthesis rules moved here from
[FOUNDATION](FOUNDATION.md) by
[D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy)
— and consolidates every other decided rule with a link to its
source ([FOUNDATION](FOUNDATION.md), a D-number, or a
[FACTS](data/FACTS.md)/[SOURCES](data/SOURCES.md) anchor). It seeds
the [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) engine
contract and the [V1.S4](ROADMAP.md#v1s4--suggest) brain prompt.
Gaps and conflicts found while consolidating are NOT resolved here —
they live in [Open questions](#10-open-questions) for the founder.

## 2. The reliability law
- Never fabricate anything; every fact is checked.
  ([FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law))
- A check module ships only when its information source is reliable
  and consistently obtainable.
  ([FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law))
- Anything unverifiable is labeled unverified in the plan — never
  guessed.
  ([FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law))
- Every check declares its source and confidence; the Verdict shape
  carries score, confidence, source, explanation.
  ([FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law);
  [V1.S3.T1](ROADMAP.md#v1s3--engine-core--two-families-deep))

## 3. Grade → render matrix
Grade scale is provisional until ratified in
[V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
— see [Open questions](#10-open-questions).
- **A** — authoritative or model-grade, globally consistent,
  obtainable, license-clean → renders as **verified**.
  ([SOURCES.md](data/SOURCES.md))
- **B** — authoritative where covered, with coverage or fidelity
  caveats → **verified where covered, labeled elsewhere**.
  ([SOURCES.md](data/SOURCES.md))
- **C** — estimated / derived / curated → renders as **labeled
  estimate**. ([SOURCES.md](data/SOURCES.md))
- **D** — LLM-research grade → **always renders unverified**.
  ([SOURCES.md](data/SOURCES.md);
  [D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders))
- Internal engine configuration (e.g. activity sensitivity profiles)
  is not a world claim and never renders as a fact.
  ([SOURCES.md §activity-profiles](data/SOURCES.md#activity-profiles))
- Forecast vs climatology: real forecast when the trip is near,
  climatology when it is far — and the plan says which it used.
  ([FOUNDATION §What Roam checks](FOUNDATION.md#what-roam-checks--the-five-families);
  [F-WX-11](data/FACTS.md#f-wx-11--climate-normals-by-date-of-year))
- [TP-42](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
  (verified-only strictness: labeled | strict, default labeled)
  governs the rung 4–5 render policy.
  ([FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
- Grades are living — earned, never grandfathered (demotion in §4).
  ([D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented))

## 4. Ladder fall-through
- The reliability ladder, top-down: (1) global-by-construction
  source → (2) regional authoritative source → (3) computed from
  physics/math → (4) estimated ranges, labeled → (5) LLM-research
  grade, rendered unverified → (6) refusal — "can't verify here"
  rather than guessing.
  ([D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders))
- Every coverage-risky fact (⚠) declares its fallback ladder, vetted
  top-down in V1.S1.T2–T6.
  ([D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders);
  [FACTS §How to read this file](data/FACTS.md#how-to-read-this-file))
- Freshness windows bound cache staleness: each fact declares the
  maximum staleness before refetch; windows tighten as the activity
  date nears.
  ([FACTS §How to read this file](data/FACTS.md#how-to-read-this-file))
- Runtime degradations down the ladder are recorded per slot
  (ladder_falls), feeding source health.
  ([TELEMETRY §3](data/TELEMETRY.md#3-source-health-p6))
- Demotion law: sustained fetch failure, schema drift, or
  miscalibration demotes a source's grade, and renders fall down the
  ladder automatically; promotion only via re-vetting.
  ([D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented);
  [TELEMETRY §3](data/TELEMETRY.md#3-source-health-p6))

## 5. Provenance & supersede order
- The floor never changes: origin + dates always suffices; every
  other traveler field defaults to Null.
  ([D-011](DECISIONS.md#d-011--2026-06--traveler-input-vocabulary-rich-nullable-tiered-append-only))
- Every stored traveler field carries provenance
  {stated | inferred | default} plus updated_at.
  ([D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert))
- Supersede order on upsert: stated > inferred > default; newer >
  older.
  ([D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert))
- A stated-only class is never inferred: nationality, special
  conditions, accessibility, allergy details.
  ([D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert);
  [FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
- Ask tiers cap elicitation: at most six upfront questions; most
  fields are asked later when they earn it, or never — inferred /
  defaulted / composition-adjusted with warn-don't-block.
  ([D-012](DECISIONS.md#d-012--2026-06--elicitation--inference-policy-ask-tiers-provenance-upsert))
- Traveler-vocabulary extension is append-only: a new field is one
  nullable column plus a D-number.
  ([D-011](DECISIONS.md#d-011--2026-06--traveler-input-vocabulary-rich-nullable-tiered-append-only))

## 6. Preferences are defaults, not blinders
- Honor the stated preference, and surface a significantly better
  alternative when one exists (airports, dates, areas).
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Proactive shifts: when moving a departure day or the whole window
  measurably improves the trip, say so — date flexibility is an
  engine lever.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Near-peer alternatives: in shortlist mode, score the list and also
  surface off-list options of equal merit.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Explanation duty: every ranking and every edit verdict carries its
  reasons.
  ([FOUNDATION §Principles](FOUNDATION.md#principles))
- Accepted trade-offs lock: once the traveler accepts a trade-off it
  is pinned and not re-litigated; pinned items carry acceptance
  provenance.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy);
  [FACTS Appendix B](data/FACTS.md#appendix-b--plan-parameters-t7-must-schema-not-world-facts))

## 7. Constraint priority
- Feasibility outranks desire: an infeasible must-do is declined with
  an alternative (often a different window); a feasible trade-off is
  presented with pros and cons.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Constraint priority = category × intensity: severe jet-lag outranks
  mild rain; intensity is data, not vibes.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- The traveler's ranked trade-off priority
  ([TP-30](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012):
  budget / must-dos / comfort / time) sets the demotion order when
  limits bind.
  ([FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
- Staged synthesis: a cheap coarse pass first; killer constraints
  (departure bounds, trip length, budget) are confirmed before any
  expensive search.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Composition-aware matching: party makeup (ages, type) reshapes
  venue choice and defaults — fewer stops, gentler pace — without
  being asked.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Condition-aware placement: never schedule an exposed activity into
  the hottest or most hostile hour without reason; daylight, heat,
  UV, and crowds steer time-of-day.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))

## 8. Warn, don't block — and the refusal rung
- Outside hard feasibility, the engine warns and lets the traveler
  decide.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- The refusal rung: where nothing verifiable exists and no honest
  label helps, the engine says "can't verify here" rather than
  guessing (ladder rung 6).
  ([D-010](DECISIONS.md#d-010--2026-06--global-coverage-via-graded-fallback-ladders))
- Scope refusals: no booking, payments, or reservations — the engine
  informs, never transacts; no live fare/price scraping — cost means
  honest estimate ranges.
  ([ROADMAP §V1 — The demo](ROADMAP.md#v1--the-demo--active))
- Content guardrails: no demographic packing lists (gear notes only
  when an activity demands them); dietary handling filters options
  but never guarantees safety — travelers verify allergens with
  venues.
  (canonical here — moved from FOUNDATION by
  [D-021](DECISIONS.md#d-021--2026-07--plan-synthesis-principles-re-home-to-decision-policy))
- Never a silent squeeze-in: every edit re-validates the WHOLE plan
  and explains what the change knocks over.
  ([FOUNDATION §The spine](FOUNDATION.md#the-spine))

## 9. Units
- All storage and engine math use SI/metric exclusively, never mixed.
  ([D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion))
- Conversion to US units happens only at render time, via the
  [TP-43](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
  settings field (default metric; never asked; the UI exposes the
  toggle).
  ([D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion))
- Locale-based defaulting (US users → imperial) is deferred until
  accounts/locale exist.
  ([D-013](DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion))

## 10. Open questions
Found while consolidating; for the founder — not resolved here.
1. **Confidence has no defined scale.** The reliability law requires
   confidence on every claim
  ([FOUNDATION](FOUNDATION.md#the-reliability-law)) and the Verdict
   shape carries it
   ([V1.S3.T1](ROADMAP.md#v1s3--engine-core--two-families-deep)),
   but no decided rule says how confidence is computed or what scale
   it uses. Likely home: the V1.S3.T1 check contract.
2. **The grade scale is provisional.** [SOURCES.md](data/SOURCES.md)
   says "provisional until ratified in V1.S1.T7" — the §3 matrix
   inherits that status until
   [T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
   ratifies it.
3. **TP-42 "strict" mode is underspecified.**
   [FACTS Appendix A](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
   says the field governs the "rung 4–5 render policy" but not what
   strict does concretely (hide rung 4–5 content vs render it with
   harder labels).
4. **TP-30 × category-intensity composition is unspecified.** How the
   traveler's ranked trade-off priority
   ([TP-30](data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
   composes with the engine's category × intensity ranking
   ([§7](#7-constraint-priority)) — which
   applies first when they disagree — is not decided.
5. **Intensity thresholds don't exist yet.** "Intensity is data, not
   vibes" ([§7](#7-constraint-priority)),
   but the thresholds/weights live in the
   [WX-13](data/FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types)
   profiles authored in
   [V1.S3.T3](ROADMAP.md#v1s3--engine-core--two-families-deep) —
   until then there is no decided scale.
