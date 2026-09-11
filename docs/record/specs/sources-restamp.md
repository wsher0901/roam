---
type: spec
id: sources-restamp
title: Re-run the three weather spikes and restamp their dates
status: open
stage: V1.S1
branch: docs/sources-restamp
pr: 364
opened: 2026-09-11
shipped: —
---
# sources-restamp — a grade resting on a fetch nobody re-ran

**Links:** [SOURCES](../../data/SOURCES.md) ·
[FACTS](../../data/FACTS.md) ·
[V1.S1.T2](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
· [V1.S1.T7](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
· [IDEAS](../../IDEAS.md) ·
[reliability law](../../FOUNDATION.md#the-reliability-law) ·
[ENGINE §7](../../ENGINE.md#7-render--honest-pixels)

## Goal

Every spike stamp in [SOURCES](../../data/SOURCES.md) reads
`run 2026-06-12` — ninety-one days old — and the Open-Meteo licence
line reads `verified 2026-06-12`. The
[reliability law](../../FOUNDATION.md#the-reliability-law) does not
license a grade resting on a fetch nobody re-ran.

Re-run the three weather spike scripts and restamp, with TODAY's
date and TODAY's observed values:

- `scripts/spikes/weather-forecast.mjs` → the `weather-forecast`
  Spike line;
- `scripts/spikes/weather-climatology.mjs` → the
  `weather-climatology` Spike line;
- `scripts/spikes/weather-alerts.mjs` → the `weather-alerts` Spike
  line (the active-alert count is observed, not recalled);
- the `weather-forecast` licence line's `verified <date>` —
  re-verified at open-meteo.com/en/terms.

## Out of scope

- **Every grade, freshness window, coverage claim and cost line.**
  They do not move on this bench. **If a spike CONTRADICTS one —
  a missing key, a shrunken horizon, a licence that changed — STOP
  and post a `BLOCKED:` comment.** A demotion takes evidence and a
  D-number ([SOURCES](../../data/SOURCES.md)'s own rule), which is
  not this bench's remit.
- **The `snow-conditions`, `weather-seasonal-risk` and
  `activity-profiles` entries.** The first is covered by the
  forecast spike and its Spike line names no date; the other two
  have no fetch path at all.
- **The four pending family slots** (T3–T6) and the T7
  consolidation.
- **The [IDEAS](../../IDEAS.md) T7 rider — it STAYS.** This bench
  restamps the three weather spikes that exist today; T7 re-runs
  EVERY spike in the registry at consolidation, including the
  families that do not exist yet. The rider is not closed by this
  bench and its line is not touched.

## Plan

1. Read `scripts/spikes/*.mjs` before running them — know what each
   prints and which values the stamps quote.
2. Run each of the three, capturing full output to the memory file
   BY COMMAND (the command line and its output, so a cold reader
   can re-run it).
3. Read today's date from the shell clock (`date -u`), never from
   memory — the [time doctrine](../../LAWS.md#knowledge--tracking).
4. Restamp the three Spike lines and the one licence `verified`
   line with today's date and today's OBSERVED values: keys
   present, days of history returned, active-alert count.
5. Compare every observed value against the claim beside it. A
   contradiction → STOP with a `BLOCKED:` comment naming the claim,
   the observed value, and the line.
6. Weave + `npm run check:links`.

## Done means

- [x] All three spikes were run today and their outputs are in
      `docs/memory/sources-restamp.md`, each with the command that
      produced it.
- [x] The three `Spike: … run <date>` lines carry today's date and
      today's observed values.
- [x] The `weather-forecast` licence line carries today's
      `verified <date>`.
- [x] No grade, freshness, coverage or cost claim changed — or the
      bench is BLOCKED with the contradiction named.
- [x] The [IDEAS](../../IDEAS.md) T7 rider line is untouched.
- [x] `npm run check:links` passes.
- [x] The diff touches `docs/data/SOURCES.md`, this spec, and
      `docs/memory/sources-restamp.md` — nothing else.

## Deviations

<filled by ship>

## Open questions

none
