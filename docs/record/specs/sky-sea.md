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
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)

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
   attribution / spike path + run date / alternatives rejected.
5. Any slot with no reliable source is marked **LLM-research grade →
   rendered as unverified**, explicitly, per the
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
- [ ] No file outside `docs/data/SOURCES-sky-sea.md` and `scripts/spikes/sky-sea-*`
      is touched, except this bench's own spec and memory.
- [ ] Full CI mirror green; the PUSHED head's Actions run green.

## Deviations

<filled by ship>

## Open questions

<raise as BLOCKED: comments on the PR — never guess a founder call>
