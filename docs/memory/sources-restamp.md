---
type: memory
id: sources-restamp
updated: 2026-09-11 · canary ack · work PC control tower
---
# sources-restamp — the three weather spikes, re-run and restamped

## Status
airborne · work PC agent team · 2026-09-11

Canary acked by the work PC control tower. The lane is licensed to work.

## What this task is
[SOURCES](../data/SOURCES.md)'s three weather spike stamps and its
Open-Meteo licence line all read 2026-06-12. This bench re-runs
`weather-forecast.mjs`, `weather-climatology.mjs` and
`weather-alerts.mjs`, then restamps those four lines with today's
date and today's observed values — keys present, days of history,
active-alert count.

Nothing else moves. A grade, freshness window or coverage claim
changes ONLY if a spike contradicts it, and then the bench STOPS
with a `BLOCKED:` comment rather than editing it — a demotion takes
evidence and a D-number. The [IDEAS](../IDEAS.md) T7 rider stays
open: T7 re-runs every spike in the registry at consolidation,
including the families that do not exist yet.

## Pending issues
none at birth.

## Left / idle
The whole payload.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as lane B of
the test flight — the dress rehearsal for
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6, run as an agent team with the founder at the desk.

## Where to look
- [SOURCES](../data/SOURCES.md) — the four lines to restamp.
- `scripts/spikes/weather-forecast.mjs` ·
  `scripts/spikes/weather-climatology.mjs` ·
  `scripts/spikes/weather-alerts.mjs`.
- [IDEAS](../IDEAS.md) — the T7 rider that stays open.
- [the spec](../record/specs/sources-restamp.md).