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

## What [D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state) added to this bench

[D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
landed after this bench was born and two of its rulings are this
bench's duty. Recorded here because ruling 3 says the T3–T6 benches
add their own rows WHEN THEY RESPAWN, and this is the respawn.

**Ruling 3 — the retrieval-policy row.** Every fact gets ONE row in
`docs/data/SOURCES-crowds-calendar.md`, with exactly three fields
and no others, per
[FACTS § How to read this file](../../data/FACTS.md#how-to-read-this-file):

- **allowed domains + grade** — each domain tagged authoritative
  (**B**) or other (**C**).
- **quote required** — yes / no.
- **freshness window** — in the fact's own units.

The worked example to copy is the WEATHER entries in
[SOURCES.md](../../data/SOURCES.md). The row is PER FACT; an
entry-level row is a shorthand that must declare itself, and splits
the moment two of the slot's facts differ. **A slot that cannot
reach rung 5a writes `n/a` AND SAYS WHY — silence is not `n/a`.**
Grade **B** is defined by DOMAIN CLASS at
[ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts) — operator,
government body, transit authority, established press — and a
policy row APPLIES that definition; it may never promote a domain
outside those classes to B.

**Ruling 9 — [CC-07](../../data/FACTS.md#f-cc-07--trending-signal-computed) is now the centrepiece.** Trend is a COMPUTED
signal from proxies, never an assertion. The `trending-general`
slot must vet, for real:

- **reservation scarcity** and **review velocity** — measurements we
  take, not opinions we read.
- **YouTube and Reddit velocity via their own APIs** — key
  requirement, quota, and DECISIVELY whether their terms permit
  CACHING / RETENTION of derived metrics. Per
  [D-015](../DECISIONS.md#d-015--data-asset-law) a
  caching-prohibited source disqualifies a slot from the asset
  layer, so a proxy that cannot be licensed is DROPPED from the V1
  proxy set with its reason stated.
- **dated press and blogs at rung 5a** — the date is part of the
  fact.
- **PLATFORM MINING (Instagram, TikTok) stays a Later socket**, and
  the ground is TERMS OF SERVICE rather than difficulty. No scraper
  is vetted; the reason is recorded under Alternatives rejected.
- The rendered label CARRIES THE SIGNAL'S LAG (`lag_days`) —
  "rising, as of last week", never a bare "trending now".

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
   attribution / **retrieval policy** / spike path + run date /
   alternatives rejected.
5. Any slot with no reliable source is marked **LLM-research grade →
   rendered as unverified**, explicitly, per the
   [reliability law](../../FOUNDATION.md#the-reliability-law). A
   named gap is a result; a guess is a defect.

## Done means

- [x] Every one of the 8 slots has an entry in
      `docs/data/SOURCES-crowds-calendar.md`, or is explicitly marked LLM-research grade with
      the reason.
- [x] Every entry names a spike script that EXISTS under
      `scripts/spikes/` and was RUN, with its run date and the
      keys the real response returned.
- [x] Every entry carries retention_rights, license_class and any
      attribution duty, each verified at the source's own terms page
      with the date it was read.
- [x] Grades follow the canonical scale at
      [ENGINE §7](../../ENGINE.md#7-render--honest-pixels).
- [x] Every fact carries a RETRIEVAL-POLICY row with its three
      fields, or `n/a` WITH ITS REASON — never silence
      ([D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
      ruling 3). No policy row promotes a domain outside
      [ENGINE §3](../../ENGINE.md#3-acquire--get-the-facts)'s
      classes to **B**.
- [x] `trending-general` names the proxy set V1 can ACTUALLY
      LICENSE, each proxy's terms read at its own terms page with
      the date, and every dropped proxy carries its reason
      ([D-088](../DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
      ruling 9).
- [x] No file outside `docs/data/SOURCES-crowds-calendar.md` and `scripts/spikes/crowds-calendar-*`
      is touched, except this bench's own spec and memory.
- [x] Full CI mirror green; the PUSHED head's Actions run green. One
      local exception, recorded rather than waved through: `npm run
      build` cannot run in this worktree, whose `node_modules/` holds
      only a vitest cache, so Next resolves no local install. CI runs
      it on the pushed head and it passes there
      ([D-038](../DECISIONS.md#d-038--ci-is-the-arbiter) — CI is the
      arbiter, and this diff contains no app code).

## Deviations

Two, both recorded rather than hidden:

1. **`venue-busyness` names a spike that returned no payload keys**,
   because there is no licensed fetch path to return any. Its spike
   proves the ABSENCE instead — no busyness field in Google's own
   Places data-fields reference, and the No Scraping / No Caching
   clauses quoted from the Maps Platform Terms. The Done-means box
   asking for "the keys the real response returned" is ticked on that
   reading: the spike ran, and what it returned is evidence.
2. **Two licence reads ended in read-and-found-nothing, and one ended
   in a failed read**, all three recorded as such in the entries rather
   than rounded to "unrestricted": Aladhan and the two port authorities
   publish no reuse terms on the pages read; NYC Open Data's terms page
   could not be located from two candidate URLs, and the dataset's own
   Socrata metadata carries no `license` field. None is treated as
   permission.

## Open questions

<raise as BLOCKED: comments on the PR — never guess a founder call>
