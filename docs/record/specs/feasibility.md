---
type: spec
id: V1.S1.T4
title: Vet sources — Feasibility
status: shipped
stage: V1.S1
branch: docs/feasibility
pr: #359
opened: 2026-09-10
shipped: 2026-09-16
---

# V1.S1.T4 — vet sources: Feasibility

**Links:** [ROADMAP line](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) ·
[FACTS FE-01..14](../../data/FACTS.md#f-fe--feasibility-14--source-task-v1s1t4) ·
[the assignment map](../../data/FACTS.md#t2t6-assignment-map) ·
[SOURCES — the shipped T2 entries as the format](../../data/SOURCES.md) ·
[reliability law](../../FOUNDATION.md#the-reliability-law) ·
[D-015](../DECISIONS.md#d-015--data-asset-law) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window) ·
[D-088 rulings 3, 11, 17](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)

## Goal

Vet a real source for every Feasibility slot, prove each one with a
spike fetch that actually runs, and write the entries to
`docs/data/SOURCES-feasibility.md` in the format
[SOURCES.md](../../data/SOURCES.md) already ships for Weather.

The slots, from [the assignment map](../../data/FACTS.md#t2t6-assignment-map)
— walked from the map itself, not from a remembered count:

- `geocoding-places`
- `destination-affordances`
- `places-venues`
- `opening-hours`
- `seasonal-closures`
- `routing`
- `cost-basis`
- `reservation-flags`
- `venue-attributes`
- `parking`
- `route-services`
- `area-profiles`
- `venue-reputation`
- `fx-rates`
- `money-saving-tips`
- `conduct-norms`

[D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
RE-CUT THIS BENCH after it was born. Three of its rulings land here:
ruling 11 added
[FE-15](../../data/FACTS.md#f-fe-15--money-saving-tips-) money-saving
tips and
[FE-16](../../data/FACTS.md#f-fe-16--dress-code--conduct-norms-)
dress-code and conduct norms, both RETRIEVAL facts with their own
slots; ruling 3 made the retrieval-policy row mandatory on every
entry (§ Duty A below); ruling 17 put Google Maps grounding / Places
on this bench to be judged (§ Duty B below). Ruling 8 also moved real
PRICES out of this family into the new Cost family — so
[FE-07](../../data/FACTS.md#f-fe-07--cost-estimate-bands) here is
BANDS ONLY, and a live quote is
[V1.S1.T8](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)'s,
never this bench's.

The widest family and the one where LICENSE decides the answer. Google Places forbids caching beyond narrow limits, which disqualifies a slot from the asset layer under [D-015](../DECISIONS.md#d-015--data-asset-law) — so retention_rights is a PRIMARY selection criterion here, not a footnote. OSM/Overture/Overpass are the obvious store-raw candidates; opening hours are notoriously stale in OSM and that must be graded honestly rather than wished away.

## Duty A — the retrieval-policy row (D-088 ruling 3)

EVERY FACT GETS ONE RETRIEVAL-POLICY ROW in
`docs/data/SOURCES-feasibility.md`, with exactly three fields and no
others, as defined at
[FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file):

1. **allowed domains + grade** — which domains may answer the fact at
   all, each tagged authoritative (**B**) or other (**C**). A domain
   absent from the list is not a fallback; it is out of bounds.
2. **quote required** — yes / no. When yes, a value with no verifiable
   span at the fetched url is DISCARDED, never downgraded.
3. **freshness window** — in the fact's own units.

The worked example to replicate is the WEATHER ENTRIES in
[SOURCES.md](../../data/SOURCES.md), which already carry the row.

Two constraints that are easy to get wrong, and are therefore written
here rather than assumed:

- **A slot that cannot reach rung 5a writes `n/a` AND SAYS WHY.**
  Silence is not `n/a`.
- **GRADE B IS DEFINED BY DOMAIN CLASS**, at
  [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts) — the operator
  itself, a government body, a transit authority, established press. A
  policy row APPLIES that definition to named domains; it may never
  promote a domain outside those classes to B. Where a row's tag and
  §3's classes disagree, §3 governs.
- The policy is **per FACT**, not per source. Where every fact in a
  slot shares one policy the entry writes it once and SAYS SO; the
  moment two facts differ, the row splits and names the fact IDs it
  governs.

## Duty B — the Google Maps verdict (D-088 ruling 17)

Evaluate **Google Maps grounding / Places** as a registry and
affordance source against this family's requirements, and record the
verdict with its **license, quota and freshness**. It bears on
[FE-01](../../data/FACTS.md#f-fe-01--destination-registry) (destination
registry),
[FE-03](../../data/FACTS.md#f-fe-03--venue--poi-records) (venue/POI
records) and
[FE-02](../../data/FACTS.md#f-fe-02--destinationactivity-affordances-)
(affordances).

THE CRITICAL QUESTION IS CACHING AND RETENTION. Under
[D-015](../DECISIONS.md#d-015--data-asset-law) a caching-prohibited
source disqualifies a slot from the asset layer, and D-015's own
rationale names "Places-style no-caching rules" as the hazard. The
terms are to be READ, not assumed, and the verdict must NAME THE
RETENTION CLAUSE THAT DECIDES IT — adopt, reject, or
adopt-for-X-only.

## Out of scope

- **App code.** [V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) is docs and spike scripts only.
- **The consolidation.** [V1.S1.T7](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) merges the four
  `SOURCES-<family>.md` files into
  [SOURCES.md](../../data/SOURCES.md) and deletes them. This bench
  writes its own file and never touches SOURCES.md — that is what
  makes the four benches lane-disjoint
  ([D-020](../DECISIONS.md#d-020--parallel-lanes-v2)).
- **Any workshop change.** The product-first window
  ([D-086](../DECISIONS.md#d-086--workshop-the-product-first-window) ·
[D-088 rulings 3, 11, 17](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 1) is open. A fix this bench genuinely needs to proceed
  rides this bench as a recorded deviation; anything else is filed
  in [IDEAS](../../IDEAS.md), not fixed.

## Plan

1. Read the FE-01..14 fact rows and confirm the slot list against
   [the assignment map](../../data/FACTS.md#t2t6-assignment-map) —
   walk the real rows rather than trusting this spec's copy.
2. Per slot: identify candidate sources; check LICENSE AND RETENTION
   FIRST (a caching-prohibited source disqualifies the slot from the
   asset layer, [D-015](../DECISIONS.md#d-015--data-asset-law));
   then coverage, freshness, cost.
3. Write a spike script per source under `scripts/spikes/`, named
   `feasibility-<slot>.mjs`, zero-dependency Node, and RUN IT. Record
   the confirmed payload keys from the real response.
4. Write `docs/data/SOURCES-feasibility.md`: one entry per slot, every field the Weather
   entries carry — serves / source / confirmed keys / grade /
   freshness / coverage / cost / retention_rights + license_class +
   attribution / spike path + run date / alternatives rejected.
5. Any slot with no reliable source is marked **LLM-research grade →
   rendered as unverified**, explicitly, per the
   [reliability law](../../FOUNDATION.md#the-reliability-law). A
   named gap is a result; a guess is a defect.

## Done means

- [ ] Every slot on
      [the assignment map](../../data/FACTS.md#t2t6-assignment-map)'s
      [V1.S1.T4](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
      line — walked from the map, not from a count — has an entry in
      `docs/data/SOURCES-feasibility.md`, or is explicitly marked LLM-research grade with
      the reason.
- [ ] Every entry names a spike script that EXISTS under
      `scripts/spikes/` and was RUN, with its run date and the
      keys the real response returned.
- [ ] Every entry carries retention_rights, license_class and any
      attribution duty, each verified at the source's own terms page
      with the date it was read.
- [ ] Grades follow the canonical scale at
      [ENGINE §7](../../ENGINE.md#7-render--honest-pixels).
- [ ] No file outside `docs/data/SOURCES-feasibility.md`,
      `scripts/spikes/feasibility-*` and `scripts/spikes/_overpass.mjs`
      is touched, except this bench's own spec and memory.
      (`_overpass.mjs` is a CONTRACT CHANGE made mid-bench — a
      zero-dependency helper shared by this bench's own OSM spikes,
      added because the public Overpass endpoint rate-limits hard
      enough that retry, mirror rotation and a client timeout had to
      live in one place rather than be copied nine times. It is named
      here, and narrated in the memory, rather than slipped in.
      It is still lane-disjoint: no sibling bench touches it.)
- [ ] **Duty A.** Every entry carries a retrieval-policy row with its
      three fields, or `n/a` WITH THE REASON. No entry is silent about
      retrieval, and no row promotes a domain outside
      [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)'s classes
      to grade B.
- [ ] **Duty B.** The Google Maps grounding / Places verdict is
      recorded with its license, quota and freshness, and it NAMES THE
      RETENTION CLAUSE THAT DECIDES IT, quoted from the terms with the
      date they were read.
- [ ] Full CI mirror green; the PUSHED head's Actions run green.

## Deviations

<filled by ship>

## Open questions

<raise as BLOCKED: comments on the PR — never guess a founder call>
