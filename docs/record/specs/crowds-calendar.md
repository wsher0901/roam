---
type: spec
id: V1.S1.T6
title: Vet sources — Crowds & calendar
status: open
stage: V1.S1
branch: docs/crowds-calendar
pr: —
opened: 2026-09-10
shipped: —
---

# V1.S1.T6 — vet sources: Crowds & calendar

**Links:** [ROADMAP line](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) ·
[FACTS CC-01..08](../../data/FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6) ·
[the assignment map](../../data/FACTS.md#t2t6-assignment-map) ·
[SOURCES — the shipped T2 entries as the format](../../data/SOURCES.md) ·
[reliability law](../../FOUNDATION.md#the-reliability-law) ·
[D-015](../DECISIONS.md#d-015--data-asset-law) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)

## Goal

Vet a real source for every Crowds & calendar slot, prove each one with a
spike fetch that actually runs, and write the entries to
`docs/data/SOURCES-crowds-calendar.md` in the format
[SOURCES.md](../../data/SOURCES.md) already ships for Weather.

The slots, from [the assignment map](../../data/FACTS.md#t2t6-assignment-map)
— 8 of them:

- `public-holidays`
- `school-calendars`
- `religious-observances`
- `events-feed`
- `seasonal-crowding`
- `venue-busyness`
- `trending-general`
- `cruise-port-calls`

V1 ships trending via GENERAL SIGNALS ONLY ([ROADMAP V1](../../ROADMAP.md#v1--the-demo--active)) — no social scraping, no per-venue live busyness that needs a prohibited feed. School calendars are administratively fragmented and are the slot most likely to end LLM-research grade; say so rather than overclaiming coverage.

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

1. Read the CC-01..08 fact rows and confirm the slot list against
   [the assignment map](../../data/FACTS.md#t2t6-assignment-map) —
   walk the real rows rather than trusting this spec's copy.
2. Per slot: identify candidate sources; check LICENSE AND RETENTION
   FIRST (a caching-prohibited source disqualifies the slot from the
   asset layer, [D-015](../DECISIONS.md#d-015--data-asset-law));
   then coverage, freshness, cost.
3. Write a spike script per source under `scripts/spikes/`, named
   `crowds-calendar-<slot>.mjs`, zero-dependency Node, and RUN IT. Record
   the confirmed payload keys from the real response.
4. Write `docs/data/SOURCES-crowds-calendar.md`: one entry per slot, every field the Weather
   entries carry — serves / source / confirmed keys / grade /
   freshness / coverage / cost / retention_rights + license_class +
   attribution / spike path + run date / alternatives rejected.
5. Any slot with no reliable source is marked **LLM-research grade →
   rendered as unverified**, explicitly, per the
   [reliability law](../../FOUNDATION.md#the-reliability-law). A
   named gap is a result; a guess is a defect.

## Done means

- [ ] Every one of the 8 slots has an entry in
      `docs/data/SOURCES-crowds-calendar.md`, or is explicitly marked LLM-research grade with
      the reason.
- [ ] Every entry names a spike script that EXISTS under
      `scripts/spikes/` and was RUN, with its run date and the
      keys the real response returned.
- [ ] Every entry carries retention_rights, license_class and any
      attribution duty, each verified at the source's own terms page
      with the date it was read.
- [ ] Grades follow the canonical scale at
      [ENGINE §7](../../ENGINE.md#7-render--honest-pixels).
- [ ] No file outside `docs/data/SOURCES-crowds-calendar.md` and `scripts/spikes/crowds-calendar-*`
      is touched, except this bench's own spec and memory.
- [ ] Full CI mirror green; the PUSHED head's Actions run green.

## Deviations

<filled by ship>

## Open questions

<raise as BLOCKED: comments on the PR — never guess a founder call>
