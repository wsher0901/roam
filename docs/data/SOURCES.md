---
type: sources
title: Source registry
status: living
---
# Source registry — V1
One entry per source slot ([FACTS.md](FACTS.md) "T2–T6 assignment
map"): the vetted source serving each slot's facts, with its
confirmed keys, grade, freshness, coverage, cost, license, and spike.
Manual: [HOME §Reading the data files](../HOME.md#reading-the-data-files)
· grade scale (canonical):
[DECISION-POLICY §3](../DECISION-POLICY.md#3-grade--render-matrix).

## Weather slots (V1.S1.T2)

### weather-forecast
- Serves: [WX-01](FACTS.md#f-wx-01--temperature-actual--feels-like-hourly), [WX-02](FACTS.md#f-wx-02--precipitation-probability-hourly), [WX-03](FACTS.md#f-wx-03--precipitation-amount--type-hourly), [WX-04](FACTS.md#f-wx-04--wind-speed--gusts-hourly), [WX-05](FACTS.md#f-wx-05--cloud-cover-hourly), [WX-06](FACTS.md#f-wx-06--visibility--fog-hourly), [WX-07](FACTS.md#f-wx-07--humidity-hourly), [WX-08](FACTS.md#f-wx-08--uv-index-daily),
  [WX-14](FACTS.md#f-wx-14--wmo-condition-code-hourly) (and the forecast half of [WX-10](FACTS.md#f-wx-10--snowfall--snow-depth-daily-)).
- Source: Open-Meteo Forecast API (api.open-meteo.com/v1/forecast) —
  best-match blend of national numerical models (ECMWF, GFS, ICON,
  Météo-France, JMA, …). Rung 1: global by construction.
- Confirmed keys (spike, all present, zero missing): temperature_2m,
  apparent_temperature, precipitation_probability, precipitation,
  rain, snowfall, snow_depth, weather_code, wind_speed_10m,
  wind_gusts_10m, cloud_cover, visibility, relative_humidity_2m,
  uv_index (hourly); uv_index_max (daily). Units returned per key;
  SI-native ([D-013](../DECISIONS.md#d-013--2026-06--canonical-units-si-storage-display-time-conversion) friendly).
- Grade: A. Forecast horizon: 7 days spiked; API supports up to 16
  (beyond horizon, [WX-11](FACTS.md#f-wx-11--climate-normals-by-date-of-year) climatology takes over per [FACTS](FACTS.md)).
- Freshness served: 6 h; 1–3 h within 48 h (model update cycles
  support this).
- Coverage: global, any lat/lon (model grid interpolation).
- Cost: free tier 10,000 calls/day (non-commercial) — ample for
  V1 demo with the cache-heavy doctrine; commercial use requires API
  Standard (fixed monthly, 1M calls/mo) — budgeted as the go-to-market
  switch, no code change (same API, keyed endpoint).
- retention_rights: store-raw. license_class: CC-BY-4.0 (verified
  2026-06-12 at open-meteo.com/en/terms). Attribution: credit
  Open-Meteo (and it credits underlying model providers). CC-BY is
  asset-layer safe: storage, revision series, and internal derivatives
  allowed with attribution; no share-alike contamination.
- Spike: scripts/spikes/weather-forecast.mjs — run 2026-06-12,
  Reykjavik, all Dictionary keys present, 7-day hourly payload.
- Alternatives rejected: OpenWeatherMap (free-tier data CC BY-SA —
  share-alike risk for the asset layer per [D-015](../DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented); re-verify if ever
  reconsidered); MET Norway (CC-BY 4.0, solid — kept as rung-1 BACKUP
  candidate if Open-Meteo degrades); Tomorrow.io / Visual Crossing
  (commercial-first pricing, no advantage for V1).

### weather-climatology
- Serves: [WX-11](FACTS.md#f-wx-11--climate-normals-by-date-of-year) (Suggest's merit workhorse); derivation input to
  [WX-12](FACTS.md#f-wx-12--seasonal-weather-risk-windows-).
- Source: Open-Meteo Historical Weather API
  (archive-api.open-meteo.com, ERA5/ERA5-Land reanalysis, 1940→).
  Rung 1: global by construction.
- Confirmed keys (spike): daily temperature_2m_max, temperature_2m_min,
  precipitation_sum, wind_speed_10m_max, sunshine_duration (more
  available: humidity, snowfall, wind gusts). Normals are computed by
  us per date-of-year window (the computation is the [WX-11](FACTS.md#f-wx-11--climate-normals-by-date-of-year) value; the
  raw series is asset-layer history).
- Grade: A.
- Freshness served: yearly recompute (near-immutable).
- Coverage: global, any lat/lon, 80+ years of history.
- Cost: free tier (non-commercial) — one call returns a decade of
  daily history (spiked: 3,653 days in a single response); normals are
  cached effectively forever, so call volume is trivial.
- retention_rights: store-raw. license_class: CC-BY-4.0. Attribution:
  Open-Meteo + Copernicus/ECMWF (ERA5).
- Spike: scripts/spikes/weather-climatology.mjs — run 2026-06-12,
  Reykjavik October normals computed from 10y ERA5 (mean max 6.8 °C,
  18 rain days — sane values).
- Alternatives rejected: Meteostat (CC BY-NC — non-commercial-only
  kills product use; [D-015](../DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented) disqualifier); NOAA NCEI normals (US-only —
  rung 2, unnecessary given rung-1 coverage); raw Copernicus CDS
  (free + open but heavyweight retrieval pipeline; Open-Meteo serves
  the same reanalysis pre-shaped).

### weather-alerts
- Serves: [WX-09](FACTS.md#f-wx-09--severe-weather-alerts-).
- Source: NWS api.weather.gov (alerts/active by point/zone/area).
  Rung 2: national authoritative source, US + territories.
- Confirmed keys (spike, live alerts): event, severity, urgency,
  certainty, onset, expires, ends, status, messageType, areaDesc,
  headline, description, instruction (full CAP-style payload).
- Grade: B — authoritative where covered; US-only today. Ladder
  behavior elsewhere: no alert source ⇒ "alerts unverified here"
  label (rung 5) or silence-with-honesty (rung 6) — never a fabricated
  all-clear. EU candidate: MeteoAlarm (registration + per-country
  redistribution caveats — vet as its own mini-spike when
  international alerts are prioritized; tracked as the slot's known
  gap).
- Freshness served: 15–60 min within 72 h of dates; else daily.
- Cost: free. Mandatory User-Agent header identifying the app.
- retention_rights: store-raw. license_class: US-Gov public domain.
  Attribution: courtesy credit ("Source: NWS").
- Spike: scripts/spikes/weather-alerts.mjs — run 2026-06-12, 2 active
  FL alerts, full payload keys confirmed.
- Alternatives rejected: commercial CAP aggregators (cost without V1
  benefit); scraping national met services (ToS + fragility).

### snow-conditions
- Serves: [WX-10](FACTS.md#f-wx-10--snowfall--snow-depth-daily-) (snowfall + snow depth).
- Source: same Open-Meteo Forecast API payload (snowfall, snow_depth
  keys — confirmed in the weather-forecast spike). Model-grade values.
- Grade: B — global model values, reliable for "is it snowing /
  is there base"; resort-grade truth (groomed runs, lifts) is NOT
  represented — per [FACTS](FACTS.md), model values render as labeled estimates
  for resort decisions. Resort-feed upgrade is a Later vetting item.
- Freshness served: daily.
- Cost / retention / license / attribution: as weather-forecast
  (CC-BY-4.0, store-raw).
- Spike: covered by scripts/spikes/weather-forecast.mjs (snowfall,
  snow_depth present).
- Alternatives rejected: resort-data APIs (fragmented, mostly
  commercial/ToS-gated; revisit when snow-sports demo scenarios
  demand resort fidelity).

### weather-seasonal-risk
- Serves: [WX-12](FACTS.md#f-wx-12--seasonal-weather-risk-windows-).
- Source: DERIVED + CURATED — no external fetch. Risk windows
  (monsoon, hurricane/typhoon season, extreme-heat months) are
  computed from [WX-11](FACTS.md#f-wx-11--climate-normals-by-date-of-year) climatology statistics (e.g. months where
  P95 precipitation or heat exceeds thresholds) plus a small curated
  regional table versioned in-repo (seeded from authoritative refs,
  e.g. NOAA hurricane-season definitions); uncurated regions may use
  LLM-research grade, rendered unverified (rung 5).
- Grade: C (derived/curated; D where LLM-seeded and not yet curated).
- Freshness: yearly review.
- Cost: none. retention_rights: internal derivative of CC-BY inputs —
  attribution flows from weather-climatology. license_class: internal
  (+ CC-BY attribution duty on derived layers).
- Spike: none (no fetch path; derivation spec above is the contract).
- Alternatives rejected: single global "risk API" (none exists with
  credible coverage); pure LLM curation (violates the reliability law
  without the unverified label).

### activity-profiles
- Serves: [WX-13](FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types) (weather-sensitivity profiles × 15 activity types).
- Source: CURATED IN-REPO data file — we are the source. Contents
  authored in [V1.S3.T3](../ROADMAP.md#v1s3--engine-core--two-families-deep); format fixed by [FACTS.md](FACTS.md); versioned in git
  (the version IS the freshness).
- Grade: A for obtainability (internal); render policy: profiles are
  engine configuration, not world claims — they never render as facts.
- Cost: none. retention_rights: ours. license_class: repo license.
- Spike: n/a (no fetch).

## Pending slots
Sky & sea (T3) · Feasibility (T4) · Time & transport (T5) · Crowds &
calendar (T6) — entries land with their tasks.
