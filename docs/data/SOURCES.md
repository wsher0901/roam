---
type: sources
title: Source registry
status: living
---
# Source registry — V1
One entry per source slot ([FACTS.md](FACTS.md) "T2–T6 assignment
map"): the vetted source serving each slot's facts, with its
confirmed keys, grade, freshness, coverage, cost, license, and spike.
Manual: [HOME §Reading the data files](../HOME.md#reading-the-data-files).

**THE GRADE SCALE IS NOT HERE.** Its one canonical home is
[ENGINE §7](../ENGINE.md#7-render--honest-pixels), and this file
points at it rather than restating it — including the consequence
[D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state) added, that a rung-5a retrieval grades **B** from an
authoritative domain and **C** from any other, while rung-5b model
memory grades **D**.

**Every entry below also carries a RETRIEVAL POLICY** — allowed
domains and their grade, whether a quote is required, and the
freshness window — defined in
[FACTS § How to read this file](FACTS.md#how-to-read-this-file).
A slot whose facts cannot reach rung 5a writes `n/a` AND SAYS WHY;
silence is not `n/a`.

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
  SI-native ([D-013](../record/DECISIONS.md#d-013--canonical-units-si-storage) friendly).
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
  2026-09-11 at open-meteo.com/en/terms). Attribution: credit
  Open-Meteo (and it credits underlying model providers). CC-BY is
  asset-layer safe: storage, revision series, and internal derivatives
  allowed with attribution; no share-alike contamination.
- Spike: scripts/spikes/weather-forecast.mjs — run 2026-09-11,
  Reykjavik, all 14 hourly Dictionary keys present (zero missing)
  plus daily uv_index_max, 7-day hourly payload.
- Retrieval policy: `n/a` — every fact in this slot is answered at
  rung 1 by a global-by-construction API, so no rung-5a path exists
  to police. If Open-Meteo is ever demoted, the backup is MET Norway
  at rung 1, not retrieval.
- Alternatives rejected: OpenWeatherMap (free-tier data CC BY-SA —
  share-alike risk for the asset layer per [D-015](../record/DECISIONS.md#d-015--data-asset-law); re-verify if ever
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
- Spike: scripts/spikes/weather-climatology.mjs — run 2026-09-11,
  Reykjavik October normals computed from 10y ERA5, 3,653 days of
  daily history returned (mean max 6.8 °C, mean min 2.8 °C,
  18.0 rain days — sane values).
- Retrieval policy: `n/a` — rung 1, global reanalysis; normals are
  computed by us from the series, never read off a page.
- Alternatives rejected: Meteostat (CC BY-NC — non-commercial-only
  kills product use; [D-015](../record/DECISIONS.md#d-015--data-asset-law) disqualifier); NOAA NCEI normals (US-only —
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
- Spike: scripts/spikes/weather-alerts.mjs — run 2026-09-11, 3 active
  FL alerts, full payload keys confirmed.
- Retrieval policy — THE SLOT WHERE THIS MATTERS MOST, because
  outside the US there is no rung-2 source yet:
  - allowed domains + grade: the national meteorological service's
    own site and the country's civil-protection or emergency-
    management body (**B**); established press reporting an official
    warning and naming its issuer (**B**); any other domain is OUT
    OF BOUNDS — an alert is not a fact we accept from a weather blog.
  - quote required: **yes**. No span at the fetched url ⇒ the value
    is discarded, never downgraded. AN UNVERIFIED ALL-CLEAR IS THE
    ONE OUTPUT THIS SLOT MUST NEVER PRODUCE, so silence-with-honesty
    (rung 6) outranks a remembered answer: this slot has NO rung-5b.
  - freshness window: 15–60 min within 72 h of the dates; daily
    otherwise — the same window the fetched path uses.
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
- Retrieval policy — model values answer "is it snowing"; retrieval
  is only for the resort-grade truth they cannot carry:
  - allowed domains + grade: the resort operator's own conditions
    page and the national ski-area association (**B**); regional
    tourism boards and established press (**B**); other domains
    (**C**).
  - quote required: **yes** — lifts open and groomed runs are
    claims about someone else's operation.
  - freshness window: 24 h, and 6 h inside the trip window.
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
- Retrieval policy — this is the slot's uncurated tail, which today
  renders at grade D; retrieval is how it climbs:
  - allowed domains + grade: NOAA, WMO and national meteorological
    services (**B**); national disaster-management agencies (**B**);
    other domains (**C**).
  - quote required: **yes** — a season definition is quotable or it
    is not a definition.
  - freshness window: yearly, reviewed with the curated table.
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
- Retrieval policy: `n/a` — we are the source, and profiles are
  engine configuration rather than world claims
  ([ENGINE §4](../ENGINE.md#4-judge--per-check-verdicts)), so there
  is nothing to retrieve and nothing to grade.
- Cost: none. retention_rights: ours. license_class: repo license.
- Spike: n/a (no fetch).

## Pending slots
Sky & sea (T3) · Feasibility (T4) · Time & transport (T5) · Crowds &
calendar (T6) · Cost (T8, [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)) — entries land with
their tasks, each carrying the retrieval-policy row above.
