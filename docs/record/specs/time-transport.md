---
type: spec
id: V1.S1.T5
title: Vet sources — Time & transport
status: shipped
stage: V1.S1
branch: docs/time-transport
pr: #360
opened: 2026-09-10
shipped: 2026-09-16
---

# V1.S1.T5 — vet sources: Time & transport

**Links:** [ROADMAP line](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) ·
[FACTS TT-01..08](../../data/FACTS.md#f-tt--time--transport-8--source-task-v1s1t5) ·
[the assignment map](../../data/FACTS.md#t2t6-assignment-map) ·
[SOURCES — the shipped T2 entries as the format](../../data/SOURCES.md) ·
[reliability law](../../FOUNDATION.md#the-reliability-law) ·
[D-015](../DECISIONS.md#d-015--data-asset-law) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window) ·
[D-088 ruling 3 — the retrieval-policy row](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state) ·
[FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file) ·
[ENGINE §3 — the 5a/5b ladder](../../ENGINE.md#3-acquire--get-the-facts)

## Goal

Vet a real source for every Time & transport slot, prove each one with a
spike fetch that actually runs, and write the entries to
`docs/data/SOURCES-time-transport.md` in the format
[SOURCES.md](../../data/SOURCES.md) already ships for Weather.

The slots, from [the assignment map](../../data/FACTS.md#t2t6-assignment-map)
— 8 of them:

- `airports`
- `flight-routes`
- `flight-schedules`
- `tz-data`
- `airport-access`
- `intercity-ground`
- `local-transit`
- `transport-disruptions`

**Grade this family hardest — it is the most data-gated.** Schedule feeds are commercial and expensive; the honest answer for V1 may be a LOWER grade with a named gap rather than a source the demo cannot afford. V1 refuses live fare scraping ([ROADMAP V1](../../ROADMAP.md#v1--the-demo--active)), so cost is an estimate range and nothing here should imply otherwise.

## Out of scope

- **App code.** [V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) is docs and spike scripts only.
- **The consolidation.** [V1.S1.T7](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) merges the four
  `SOURCES-<family>.md` files into
  [SOURCES.md](../../data/SOURCES.md) and deletes them. This bench
  writes its own file and never touches SOURCES.md — that is what
  makes the four benches lane-disjoint
  ([D-020](../DECISIONS.md#d-020--parallel-lanes-v2)).
- **Any workshop change.** The product-first window
  ([D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)
  ruling 1) is open. A fix this bench genuinely needs to proceed
  rides this bench as a recorded deviation; anything else is filed
  in [IDEAS](../../IDEAS.md), not fixed.

## Plan

1. Read the TT-01..08 fact rows and confirm the slot list against
   [the assignment map](../../data/FACTS.md#t2t6-assignment-map) —
   walk the real rows rather than trusting this spec's copy.
2. Per slot: identify candidate sources; check LICENSE AND RETENTION
   FIRST (a caching-prohibited source disqualifies the slot from the
   asset layer, [D-015](../DECISIONS.md#d-015--data-asset-law));
   then coverage, freshness, cost.
3. Write a spike script per source under `scripts/spikes/`, named
   `time-transport-<slot>.mjs`, zero-dependency Node, and RUN IT. Record
   the confirmed payload keys from the real response.
4. Write `docs/data/SOURCES-time-transport.md`: one entry per slot, every field the Weather
   entries carry — serves / source / confirmed keys / grade /
   freshness / coverage / cost / retention_rights + license_class +
   attribution / **retrieval policy** / spike path + run date /
   alternatives rejected.
5. Any slot with no reliable source falls to the rung-5 bottom, and
   the entry NAMES WHICH OF THE TWO RUNGS
   ([ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)): a
   retrievable slot declares its rung-5a policy; only what retrieval
   cannot reach is **rung 5b — model memory, grade D, rendered
   unverified**, per the
   [reliability law](../../FOUNDATION.md#the-reliability-law). The
   retired phrase "LLM-research grade" appears nowhere. A named gap
   is a result; a guess is a defect.

## The retrieval-policy duty (D-088 ruling 3)

Landed on this bench by
[D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state),
which split the ladder's rung 5 after this bench was born and
recorded the duty rather than editing a live branch. **Every fact
this bench serves gets ONE RETRIEVAL-POLICY ROW** in
`docs/data/SOURCES-time-transport.md`, with exactly three fields and
no others, per
[FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file):

| Field | What it fixes |
|---|---|
| allowed domains + grade | which domains may answer this fact at all, each tagged authoritative (**B**) or other (**C**); a domain absent from the list is out of bounds, not a fallback |
| quote required | yes / no — when yes, a value with no verifiable span at the fetched url is DISCARDED, never downgraded |
| freshness window | how stale a retrieved value may be before refetch, in the fact's own units |

Three rules bind the row, and this family is where each bites:

- **The row is PER FACT.** An entry-level row is a shorthand that is
  only lawful when every fact the slot serves shares one policy, and
  it must SAY SO. The moment two facts differ, the row splits and
  names the fact IDs it governs.
- **Grade B is defined by DOMAIN CLASS, never by the row that lists
  the domain** ([ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)):
  for this family that means THE CARRIER, THE AIRPORT, or THE TRANSIT
  AUTHORITY itself, a government body, or established press. A policy
  row may not promote anything else to B — an aggregator, a
  flight-tracking blog, a fan wiki and a trade association are all
  **C**, however good they are.
- **A slot that cannot reach rung 5a writes `n/a` AND SAYS WHY.**
  Silence is not `n/a`.

[TT-02](../../data/FACTS.md#f-tt-02--route-existence-) and
[TT-08](../../data/FACTS.md#f-tt-08--transport-disruptions--strikes-)
were amended by the same decision to name rung 5a explicitly — the
carrier's or airport's own published timetable for TT-02, the
operator's own notices and established press for TT-08 — so their
rows are the ones the family is graded on.

## Done means

- [ ] Every one of the 8 slots has an entry in
      `docs/data/SOURCES-time-transport.md`; a slot with no fetchable
      source names the rung it falls to — 5a with its policy, or 5b
      (model memory, grade D, rendered unverified) — with the reason.
- [ ] Every entry names a spike script that EXISTS under
      `scripts/spikes/` and was RUN, with its run date and the
      keys the real response returned.
- [ ] Every entry carries retention_rights, license_class and any
      attribution duty, each verified at the source's own terms page
      with the date it was read.
- [ ] Grades follow the canonical scale at
      [ENGINE §7](../../ENGINE.md#7-render--honest-pixels).
- [ ] **Every fact carries a retrieval-policy row** per
      [§ The retrieval-policy duty](#the-retrieval-policy-duty-d-088-ruling-3)
      — three fields, per fact (or a shorthand that declares itself),
      no domain outside
      [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)'s classes
      tagged B, and every `n/a` accompanied by its reason.
- [ ] No file outside `docs/data/SOURCES-time-transport.md` and `scripts/spikes/time-transport-*`
      is touched, except this bench's own spec and memory.
- [ ] Full CI mirror green; the PUSHED head's Actions run green.

## Deviations

<filled by ship>

## Open questions

<raise as BLOCKED: comments on the PR — never guess a founder call>
