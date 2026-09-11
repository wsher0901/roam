---
type: memory
id: sources-restamp
updated: 2026-09-11 · completion · work PC agent-team lane B
---
# sources-restamp — the three weather spikes, re-run and restamped

## Status
complete, awaiting merge — 2026-09-11

All three weather spikes re-run today, the Open-Meteo terms page
re-read, and the four stamps in [SOURCES](../data/SOURCES.md)
carry today's date and today's observed values. Nothing
contradicted a grade, freshness window, coverage claim or cost
line, so nothing else moved and the bench never had to block.

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
none. No spike contradicted anything it was measured against.

## Left / idle
nothing. The payload is complete and pushed; the bench waits on
review and the merge word.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as lane B of
the test flight — the dress rehearsal for
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6, run as an agent team with the founder at the desk. Canary
pushed, ack read back from origin as a commit
(`airborne · work PC agent team · 2026-09-11`), then the work.

**The three runs.** Each script was read before it was run, so the
stamps quote values the script actually prints rather than values
the old stamp asserted. All three succeeded first try — no retries,
no transient failures against either live API. Their verbatim
output is below, by command.

**The forecast spike held every claim it touches.** All fourteen
hourly Dictionary keys came back, `missing vs Dictionary: none`,
plus `uv_index_max` daily; the horizon printed 7 days, which is what
the entry's "7 days spiked" says. The old stamp said "all Dictionary
keys present" — true, and now said with the count and the
zero-missing line that prove it.

**The climatology spike returned numbers identical to June's.** Mean
daily max 6.8 °C and 18.0 rain days per October, the same two values
the old stamp carried, from the same 3,653-day 2016–2025 ERA5 window.
That is the entry's own "yearly recompute (near-immutable)" freshness
claim behaving exactly as written: a fixed historical window does not
drift between June and September. The stamp now also carries the days
of history returned and the mean daily min (2.8 °C), so a cold reader
can see the run was real rather than copied.

**The alerts count moved, which is why it is observed and not
recalled.** The Miami point had no active alerts, so the script fell
back to area FL as designed and found **3** — not June's 2. A Flood
Advisory for Bay and Walton counties was the first feature, and its
payload carried every key the entry's "Confirmed keys" line names
(event, severity, urgency, certainty, onset, expires, ends, status,
messageType, areaDesc, headline, description, instruction) inside a
32-key CAP payload. Claim intact; count restamped.

**The licence line was re-verified, not assumed.** open-meteo.com/en/terms
was fetched and read today: CC-BY 4.0, attribution required, free
tier under 10,000 calls/day for non-commercial use, and no
share-alike condition anywhere on the page. That matches the entry's
licence class, its attribution note, its "no share-alike
contamination" reading and its cost line, so only the `verified`
date moved. Had the page been unreachable, the stamp would have
stayed at 2026-06-12 and the bench would have blocked — a
verification date is a claim about an act performed, not a date to
refresh on faith.

**The hard-stop rule never fired.** Every observed value was
compared against the claim standing beside it — keys against
"Confirmed keys", horizon against "7 days spiked", days of history
against the cost line's "3,653 days in a single response", the alert
payload against the alerts "Confirmed keys", the terms page against
the licence and cost lines. Nothing came back short, so no grade,
freshness window, coverage claim or cost line was touched, and no
`BLOCKED:` comment was owed. The diff is four lines in
[SOURCES](../data/SOURCES.md), this memory, and the spec.

**One gotcha, environmental and worth the next lane's minute.** A
fresh agent-team worktree carries an EMPTY `node_modules`, so
`npm run build` fails there with Next reporting "node_modules/next
was removed, renamed, or has a broken symlink" — nothing to do with
the diff. Vitest, ESLint and Prettier survive it by resolving up to
the clone root; Next does not, because it fixes its workspace root
at the worktree's own lockfile. `npm ci` in the worktree fixes it,
and the build then passes clean. The full CI mirror is green here
and on the pushed head.

## The spike runs, by command
Run from the repository root on 2026-09-11. A cold reader re-runs
these three commands and compares.

`node scripts/spikes/weather-forecast.mjs`

```text
location: 64.139565 -21.971603 Atlantic/Reykjavik
hourly keys returned: time, temperature_2m, apparent_temperature, precipitation_probability, precipitation, rain, snowfall, snow_depth, weather_code, wind_speed_10m, wind_gusts_10m, cloud_cover, visibility, relative_humidity_2m, uv_index
missing vs Dictionary: none
daily keys returned: time, uv_index_max

sample @ 2026-09-11T12:00
  temperature_2m: 8.1 °C
  apparent_temperature: 3.4 °C
  precipitation_probability: 100 %
  precipitation: 0 mm
  rain: 0 mm
  snowfall: 0 cm
  snow_depth: 0 m
  weather_code: 3 wmo code
  wind_speed_10m: 22.3 km/h
  wind_gusts_10m: 39.2 km/h
  cloud_cover: 100 %
  visibility: 33140 m
  relative_humidity_2m: 75 %
  uv_index: 1.95 
forecast horizon (days available): 7
```

`node scripts/spikes/weather-climatology.mjs`

```text
daily keys returned: time, temperature_2m_max, temperature_2m_min, precipitation_sum, wind_speed_10m_max, sunshine_duration
days of history returned: 3653

October normals (Reykjavik, 10y ERA5):
  mean daily max temp: 6.8 degC
  mean daily min temp: 2.8 degC
  rain days (>=1mm) per October: 18.0
  mean daily max wind: 23.0 km/h
  mean sunshine h/day: 4.3
```

`node scripts/spikes/weather-alerts.mjs`

```text
scope: area FL; active alerts: 3
first alert payload keys: @id, @type, id, areaDesc, geocode, affectedZones, references, sent, effective, onset, expires, ends, status, messageType, category, severity, certainty, urgency, event, sender, senderName, headline, description, instruction, response, note, parameters, scope, code, language, web, eventCode

sample:
  event: Flood Advisory
  severity: Minor
  urgency: Expected
  onset: 2026-09-11T08:40:00-04:00
  expires: 2026-09-11T11:45:00-04:00
  areaDesc: Bay, FL; Walton, FL
```

## Where to look
- [SOURCES](../data/SOURCES.md) — the four restamped lines: the
  `weather-forecast`, `weather-climatology` and `weather-alerts`
  Spike lines, and the `weather-forecast` licence `verified` date.
- `scripts/spikes/weather-forecast.mjs` ·
  `scripts/spikes/weather-climatology.mjs` ·
  `scripts/spikes/weather-alerts.mjs`.
- [IDEAS](../IDEAS.md) — the T7 rider, deliberately untouched.
- [the spec](../record/specs/sources-restamp.md) · PR #364.
