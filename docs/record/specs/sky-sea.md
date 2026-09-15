---
type: spec
id: V1.S1.T3
title: Vet sources — Sky & sea
status: open
stage: V1.S1
branch: docs/sky-sea
pr: —
opened: 2026-09-10
shipped: —
---

# V1.S1.T3 — vet sources: Sky & sea

**Links:** [ROADMAP line](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) ·
[FACTS SS-01..10](../../data/FACTS.md#f-ss--sky--sea-10--source-task-v1s1t3) ·
[the assignment map](../../data/FACTS.md#t2t6-assignment-map) ·
[SOURCES — the shipped T2 entries as the format](../../data/SOURCES.md) ·
[reliability law](../../FOUNDATION.md#the-reliability-law) ·
[D-015](../DECISIONS.md#d-015--data-asset-law) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window) ·
[D-088 ruling 3 — the retrieval-policy row](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state) ·
[FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file)

## Goal

Vet a real source for every Sky & sea slot, prove each one with a
spike fetch that actually runs, and write the entries to
`docs/data/SOURCES-sky-sea.md` in the format
[SOURCES.md](../../data/SOURCES.md) already ships for Weather.

The slots, from [the assignment map](../../data/FACTS.md#t2t6-assignment-map)
— 7 of them:

- `astro-ephemeris`
- `tides`
- `aurora-forecast`
- `aurora-viability`
- `nature-timing`
- `night-sky-darkness`
- `astro-events`

Sun/moon geometry is MATH, not a feed — an ephemeris library is a legitimate source and its entry says so. Tides are NOAA for US waters and patchy elsewhere: **global gaps are labelled, never guessed**. Nature timing (whales, blooms, migrations) is the family's weakest ground — anything without a real source is marked LLM-research grade so T7 renders it unverified.

## The retrieval-policy row — added by D-088 after this bench was born

[D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
landed on main on 2026-09-15, after this bench's birth, and ruling 3
adds a duty this spec did not originally carry. It is recorded here
rather than anywhere else, because
[D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 3 names T3–T6 as adding their own rows WHEN THEY RESPAWN.

**Every fact this bench serves gets ONE retrieval-policy row in
`docs/data/SOURCES-sky-sea.md`, with exactly three fields and no
others** — the definition is
[FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file),
and the worked example to copy is the WEATHER ENTRIES in
[SOURCES.md](../../data/SOURCES.md):

| Field | What it fixes |
|---|---|
| **allowed domains + grade** | which domains may answer this fact at all, each tagged authoritative (**B**) or other (**C**); a domain absent from the list is out of bounds, not a fallback |
| **quote required** | yes / no — when yes, a value with no verifiable span at the fetched url is DISCARDED, never downgraded |
| **freshness window** | how stale a retrieved value may be before refetch, in the fact's own units |

Three rules bind the row, and each one is a way this bench could get
it wrong:

1. **A slot that cannot reach rung 5a writes `n/a` AND SAYS WHY.**
   Silence is not `n/a`.
2. **The policy is PER FACT.** An entry-level row is a shorthand
   that must DECLARE ITSELF as one, and it is only lawful where
   every fact the slot serves shares the policy; the moment two
   facts differ, the row splits and names the fact IDs it governs.
3. **Grade B is defined by DOMAIN CLASS, not by the row that lists
   the domain.** [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)
   fixes what authoritative means — the operator itself, a
   government body, a transit authority, established press — and a
   policy row APPLIES that definition to named domains. IT MAY
   NEVER PROMOTE A DOMAIN OUTSIDE THOSE CLASSES TO B. Where a row's
   tag and §3's classes disagree, §3 governs.

The same entry also inherits
[D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 1's vocabulary: the phrase "LLM-research grade" is RETIRED.
A fact the model FETCHED under a policy is rung 5a (grade **B**
authoritative / **C** elsewhere); a fact the model REMEMBERED is
rung 5b (grade **D**, rendered unverified). This spec's own Plan
step 5 was written before the split and is corrected below.

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

1. Read the SS-01..10 fact rows and confirm the slot list against
   [the assignment map](../../data/FACTS.md#t2t6-assignment-map) —
   walk the real rows rather than trusting this spec's copy.
2. Per slot: identify candidate sources; check LICENSE AND RETENTION
   FIRST (a caching-prohibited source disqualifies the slot from the
   asset layer, [D-015](../DECISIONS.md#d-015--data-asset-law));
   then coverage, freshness, cost.
3. Write a spike script per source under `scripts/spikes/`, named
   `sky-sea-<slot>.mjs`, zero-dependency Node, and RUN IT. Record
   the confirmed payload keys from the real response.
4. Write `docs/data/SOURCES-sky-sea.md`: one entry per slot, every field the Weather
   entries carry — serves / source / confirmed keys / grade /
   freshness / coverage / cost / retention_rights + license_class +
   attribution / **retrieval policy** / spike path + run date /
   alternatives rejected.
5. Any slot with no reliable source names WHICH BOTTOM RUNG it
   lands on, per the split above: rung 5a (retrieved under the
   policy, grade **B** from an authoritative domain and **C**
   elsewhere) before rung 5b (model memory, grade **D**, rendered
   unverified), per the
   [reliability law](../../FOUNDATION.md#the-reliability-law). A
   named gap is a result; a guess is a defect.

## Done means

- [ ] Every one of the 7 slots has an entry in
      `docs/data/SOURCES-sky-sea.md`, or is explicitly marked LLM-research grade with
      the reason.
- [ ] Every entry names a spike script that EXISTS under
      `scripts/spikes/` and was RUN, with its run date and the
      keys the real response returned.
- [ ] Every entry carries retention_rights, license_class and any
      attribution duty, each verified at the source's own terms page
      with the date it was read.
- [ ] Grades follow the canonical scale at
      [ENGINE §7](../../ENGINE.md#7-render--honest-pixels).
- [ ] **Every entry carries a retrieval-policy row** with exactly
      the three fields above — or `n/a` WITH ITS REASON. Any
      entry-level row declares itself a shorthand; any row whose
      facts differ splits and names the fact IDs. No domain outside
      [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)'s
      authoritative classes is tagged **B**.
- [ ] No file outside `docs/data/SOURCES-sky-sea.md` and `scripts/spikes/sky-sea-*`
      is touched, except this bench's own spec and memory.
- [ ] Full CI mirror green; the PUSHED head's Actions run green.

## Deviations

<filled by ship>

## Open questions

<raise as BLOCKED: comments on the PR — never guess a founder call>
