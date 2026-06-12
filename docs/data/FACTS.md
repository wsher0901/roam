# Fact inventory — V1 (V1.S1.T1)

What the engine must KNOW (47 world facts, five families) and what it
may be TOLD (26 traveler parameters, Appendix A). This file is the
source of truth for source vetting (V1.S1.T2–T6) and the storage
schema (V1.S1.T7). Scope guards inherited from FOUNDATION: pre-trip
only; estimates only (ranges, never live fares/prices); no booking or
live status; informing, never transacting.

## How to read this file
- IDs are stable: F-WX (weather), F-SS (sky & sea), F-FE (feasibility),
  F-TT (time & transport), F-CC (crowds & calendar).
- Source slots are the join to docs/data/SOURCES.md: every fact names
  exactly one slot; a slot may serve many facts; T2–T6 produce one
  SOURCES.md entry per slot. Type "computed" facts name the slot of
  their primary input — no separate fetch occurs.
- Two jobs: Suggest = trip-merit ("is this trip worth it for these
  dates?" — a destination famous for an activity is docked when that
  activity's conditions are bad in the window). Plan = placement of
  individual activities. Edit re-validates the whole plan and inherits
  every Plan fact; freshness tightening near the activity date covers
  Edit's needs. Inside the forecast horizon, Suggest sharpens its merit
  read with the real forecast instead of climatology.
- Types: fetched (external source) · computed (math, exact everywhere)
  · curated (maintained in-repo as data) · estimated (labeled ranges)
  · LLM-research grade (always rendered unverified).
- The reliability ladder (D-010) — coverage-risky facts (⚠) are vetted
  down these rungs: 1 global-by-construction source → 2 regional
  authoritative source → 3 computed → 4 estimated, labeled → 5
  LLM-research grade, rendered unverified → 6 refusal.
- Freshness = maximum cache staleness before refetch.
- This file lists check INPUTS only. Check scores are engine logic
  (V1.S3), not facts.

## Activity taxonomy (14 types — ships as a data file)
beach & swimming · on-water (boat, kayak, surf) · hiking & trails ·
city walking & sightseeing · scenic viewpoints · golden-hour
photography · stargazing & aurora · seasonal nature viewing (foliage,
blooms, wildlife) · snow sports · indoor venues (museums, galleries,
shopping) · dining & food markets · festivals & events · theme parks ·
driving legs / road trips.
The join vocabulary for the whole inventory: WX-13 sensitivity
profiles, FE-02 affordances, and TP-13 interest weights all key off
this list. Growing it later is a data edit plus a D-number, not a
rewrite.

## F-WX — Weather (14) — source task V1.S1.T2
Socket note: air quality, pollen, smoke seasons = Later socket
(FOUNDATION) — excluded from V1.

### F-WX-01 — Temperature, actual + feels-like (hourly)
- What: air temperature and apparent temperature per hour at a point.
- Spine: Plan (hourly, per activity); Suggest via daily roll-up.
- Scope: global.
- Freshness: 6 h; 1–3 h within 48 h of the activity.
- Type: fetched. Source slot: weather-forecast.

### F-WX-02 — Precipitation probability (hourly)
- What: chance of any precipitation per hour (%).
- Spine: Plan; Suggest via daily roll-up.
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

### F-WX-03 — Precipitation amount + type (hourly)
- What: expected mm and form (rain/snow/sleet).
- Spine: Plan; Suggest roll-up. Snow can ADD merit (snow sports).
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

### F-WX-04 — Wind speed + gusts (hourly)
- What: sustained wind and gusts at a point.
- Spine: Plan (gusts gate boats, ridgelines, cable cars); Suggest
  roll-up.
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

### F-WX-05 — Cloud cover (hourly)
- What: total cloud fraction (%).
- Spine: Plan (stargazing, aurora, photography, viewpoints); Suggest
  roll-up.
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

### F-WX-06 — Visibility + fog (hourly)
- What: surface visibility distance / fog likelihood.
- Spine: Plan (viewpoints, driving legs).
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

### F-WX-07 — Humidity (hourly)
- What: relative humidity; heat-comfort modifier.
- Spine: Plan.
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

### F-WX-08 — UV index (daily)
- What: peak UV index per day (beach, midday hikes).
- Spine: Plan.
- Scope: global. Freshness: daily.
- Type: fetched. Source slot: weather-forecast.

### F-WX-09 — Severe weather alerts ⚠
- What: official warnings (storm, heat, flood, wind) active or
  forecast for an area.
- Spine: Plan hard demerit; Suggest demerit if active in window.
- Scope: global ambition; alert systems are national → ladder
  (rung 2 per country; gaps labeled).
- Freshness: 15–60 min within 72 h of dates; else daily.
- Type: fetched. Source slot: weather-alerts.

### F-WX-10 — Snowfall + snow depth (daily) ⚠
- What: fresh snowfall and base depth at a point.
- Spine: Plan; Suggest merit for snow sports.
- Scope: global via models; resort-grade truth is fragmented → ladder
  (model values rendered as labeled estimates where unverified).
- Freshness: daily.
- Type: fetched. Source slot: snow-conditions.

### F-WX-11 — Climate normals by date-of-year
- What: typical temp range, rain days, wind, humidity, sun hours for a
  location and calendar window.
- Spine: SUGGEST PRIMARY (the merit workhorse); Plan fallback beyond
  forecast horizon.
- Scope: global. Freshness: yearly (near-immutable).
- Type: fetched. Source slot: weather-climatology.

### F-WX-12 — Seasonal weather-risk windows ⚠
- What: monsoon, hurricane/typhoon, extreme-heat seasons by region
  ("Caribbean in September").
- Spine: Suggest demerit.
- Scope: global; curation-dependent → ladder.
- Freshness: yearly.
- Type: fetched + curated. Source slot: weather-seasonal-risk.

### F-WX-13 — Activity weather-sensitivity profiles (×14 types)
- What: per-activity-type sensitivity to WX-01..10/14 (thresholds and
  weights). Contents authored in V1.S3.T3; format fixed here.
- Spine: scoring lens for both jobs; personalized by TP-14..16.
- Scope: global (type-level, not place-level).
- Freshness: versioned in repo.
- Type: curated. Source slot: activity-profiles.

### F-WX-14 — WMO condition code (hourly)
- What: standard categorical condition (clear/fog/rain/thunderstorm…);
  canonical UI label + thunderstorm gate for exposed activities.
- Spine: Plan.
- Scope: global. Freshness: 6 h; 1–3 h ≤48 h.
- Type: fetched. Source slot: weather-forecast.

## F-SS — Sky & sea (10) — source task V1.S1.T3
Socket note: swell, sea state, water temperature = Later sockets —
on-water activities are judged on wind + tides in V1, labeled as such.
Water-safety advisories ride with the safety-advisories Later socket.

### F-SS-01 — Sun ephemeris
- What: sunrise/sunset, civil + astronomical twilight, day length per
  date/location.
- Spine: Suggest (daylight budget docks outdoor-heavy trips in
  short-day months); Plan.
- Scope: global, exact. Freshness: immutable (computed per date).
- Type: computed. Source slot: astro-ephemeris.

### F-SS-02 — Golden / blue hour windows
- What: photography light windows derived from SS-01.
- Spine: Plan (chronotype-aware placement, TP-10).
- Scope: global, exact. Freshness: immutable.
- Type: computed. Source slot: astro-ephemeris.

### F-SS-03 — Moon ephemeris
- What: phase, illumination %, moonrise/moonset per night.
- Spine: Plan (stargazing wants dark; full-moon walks want bright);
  Suggest demerit for aurora trips in bright-moon weeks.
- Scope: global, exact. Freshness: immutable.
- Type: computed. Source slot: astro-ephemeris.

### F-SS-04 — Tide tables ⚠
- What: high/low tide times + heights at coastal points/stations.
  Lunar forcing is already baked into harmonic predictions — these
  values ARE the moon-resulting tide.
- Spine: Plan (tide pools, flats access, beach windows); Suggest minor
  (tidal-flat destinations).
- Scope: global ambition → ladder: rung 1 global harmonic models,
  rung 2 NOAA (US) and national services, gaps labeled.
- Freshness: weekly per trip window (predictions are deterministic).
- Type: fetched. Source slot: tides.

### F-SS-05 — Aurora activity forecast
- What: Kp / geomagnetic activity, 3-day forecast + 27-day outlook.
- Spine: Plan (which night to hunt); Suggest only inside horizon.
- Scope: global (planetary index). Freshness: 6 h in-window; else daily.
- Type: fetched. Source slot: aurora-forecast.

### F-SS-06 — Aurora viability (latitude × season)
- What: whether aurora is plausible at all for a place and date range
  (darkness from SS-01 × geomagnetic latitude). "Iceland in June =
  midnight sun, no aurora."
- Spine: Suggest (merit gate).
- Scope: global, exact. Freshness: yearly.
- Type: computed + curated. Source slot: aurora-viability.

### F-SS-07 — Seasonal nature timing ⚠
- What: bloom / foliage / wildlife-viewing windows (cherry blossom
  fronts, fall-foliage peaks, migrations).
- Spine: SUGGEST (major merit driver); Plan (which day, which park).
- Scope: global ambition; regional trackers where they exist → ladder
  (else LLM-research grade, rendered unverified).
- Freshness: weekly in season; else yearly.
- Type: fetched + curated. Source slot: nature-timing.

### F-SS-08 — Night-sky darkness
- What: light-pollution class at a location (satellite-derived).
- Spine: Suggest (dark-sky destinations); Plan (where to stargaze).
- Scope: global. Freshness: yearly.
- Type: fetched. Source slot: night-sky-darkness.

### F-SS-09 — Astronomical events calendar
- What: meteor-shower peaks, solar/lunar eclipses with visibility
  paths. An eclipse over the trip dates is a major merit event.
- Spine: Suggest + Plan.
- Scope: global, exact. Freshness: yearly (ephemeris is known ahead).
- Type: computed + curated. Source slot: astro-events.

### F-SS-10 — Tidal range class
- What: spring vs neap classification + daily range magnitude, derived
  from SS-04 and cross-checked against SS-03 ("Thursday is a spring
  low — exceptional tide-pooling").
- Spine: Plan; Suggest minor (tidal-flat destinations).
- Scope: wherever SS-04 resolves. Freshness: inherits SS-04.
- Type: computed. Source slot: tides.

## F-FE — Feasibility (9) — source task V1.S1.T4
Socket notes: visa/entry rules, safety advisories, venue accessibility
data, real prices = Later sockets. The lodging anchor (where each day
starts/ends) is a PLAN parameter, not a world fact — T7 schemas it
under plans.

### F-FE-01 — Destination registry
- What: canonical destination record — geocode, country, region,
  timezone (tz via math, shared with TT-04's slot).
- Spine: all steps (everything keys off it).
- Scope: global. Freshness: static; tz rules yearly.
- Type: fetched + computed. Source slot: geocoding-places.

### F-FE-02 — Destination↔activity affordances ⚠
- What: what a destination is known for / supports, per the 14 types.
  Enables the core Suggest dock: "famous for X, but X is bad then".
- Spine: SUGGEST PRIMARY.
- Scope: global ambition; curated for demo destinations → ladder (else
  LLM-research grade, rendered unverified).
- Freshness: yearly.
- Type: curated + LLM-research grade. Source slot:
  destination-affordances.

### F-FE-03 — Venue / POI records
- What: name, geocode, category (mapped to the 14 types).
- Spine: Plan.
- Scope: global. Freshness: monthly.
- Type: fetched. Source slot: places-venues.

### F-FE-04 — Opening hours
- What: weekly hours + holiday/observance overrides (links CC-01,
  CC-03) + last-entry times where published.
- Spine: Plan/Edit HARD GATE ("open when you arrive"); re-verify at
  plan time for the actual dates.
- Scope: global; quality varies by country — graded in T4.
- Freshness: weekly; plan-time re-check.
- Type: fetched. Source slot: opening-hours.

### F-FE-05 — Seasonal closures & operating seasons ⚠
- What: passes, parks, ferries, attractions with seasonal operation
  ("closed Nov–Apr").
- Spine: Suggest (a trip built around a closed thing is dead); Plan.
- Scope: global ambition; fragmented official sources → full ladder.
- Freshness: monthly + plan-time check.
- Type: fetched + curated. Source slot: seasonal-closures.

### F-FE-06 — Travel times & distances per mode
- What: point-to-point typical times/distances (walk/drive/transit).
  TYPICAL times, never live traffic (pre-trip identity).
- Spine: Plan (day sequencing vs pace budget); Edit (drag → re-time).
- Scope: global (OSM-based routing). Freshness: static-ish; monthly.
- Type: fetched. Source slot: routing.

### F-FE-07 — Cost-estimate bands
- What: typical meal / admission / local-transport / lodging price
  bands; flight-cost ranges may include a typical checked-bag fee
  RANGE (per TP-26). Ranges only — real prices = Later socket.
- Spine: Suggest (budget fit vs TP-12); Plan (cost labels).
- Scope: global. Freshness: quarterly.
- Type: estimated (+ fetched where published). Source slot: cost-basis.

### F-FE-08 — Reservation / timed-entry flags ⚠
- What: book-ahead and timed-entry requirements (informing, never
  transacting).
- Spine: Plan ("book ahead" flag).
- Scope: global ambition → ladder.
- Freshness: monthly.
- Type: fetched + curated. Source slot: reservation-flags.

### F-FE-09 — Venue attributes
- What: indoor/outdoor exposure (required to apply WX-13 per venue),
  typical visit duration (required to build a day), family fit
  (consumed with TP-02).
- Spine: Plan.
- Scope: global. Freshness: monthly; estimated where missing, labeled.
- Type: fetched + estimated. Source slot: venue-attributes.

## F-TT — Time & transport (7) — source task V1.S1.T5
The most data-gated family (ROADMAP): TT-02/03 carry the heaviest
ladders. Socket note: airline-specific baggage allowances/fees = Later
(rides with real-prices socket); V1 models baggage only as TIME via
TP-26 → TT-05. No live flight status, no fares (V1 refusals).

### F-TT-01 — Airport registry
- What: airports (IATA, geocode, cities served) incl. multi-airport
  regions.
- Spine: Suggest (reachability); Plan (airport choice, TP-04).
- Scope: global (open datasets). Freshness: quarterly.
- Type: fetched. Source slot: airports.

### F-TT-02 — Route existence ⚠⚠
- What: which airport pairs have scheduled service (direct / typical
  1-stop) and typical carriers.
- Spine: SUGGEST (is the destination reasonably reachable?); Plan.
- Scope: global ambition; schedule data is commercially gated → full
  ladder incl. LLM-research grade, labeled.
- Freshness: monthly.
- Type: fetched. Source slot: flight-routes.

### F-TT-03 — Flight schedule blocks ⚠⚠
- What: typical departure/arrival time bands + durations per route;
  red-eye identification. Feeds the add-a-night rule (TP-08), the
  boundary-time fit (floor), and the TP-05 max-travel gate.
- Spine: Plan.
- Scope: global ambition; same gating as TT-02 → full ladder.
- Freshness: weekly–monthly.
- Type: fetched. Source slot: flight-schedules.

### F-TT-04 — Timezone offset + jet-lag shift
- What: origin↔destination offset and shift magnitude (consumed with
  TP-09 for first-day pacing; Suggest weighs shift vs trip length).
- Spine: Suggest; Plan.
- Scope: global, exact. Freshness: yearly (DST rule updates).
- Type: computed. Source slot: tz-data.

### F-TT-05 — Airport access + buffers (baggage-aware)
- What: door-to-airport modes + typical times (reuses routing slot
  values) and check-in/security buffer policy conditioned on TP-26:
  bag-drop cutoff vs gate-only cutoff on departure; baggage-claim
  buffer before day-one ground transport. Powers FOUNDATION's
  backward-chained leave-time.
- Spine: Plan.
- Scope: global (policy is curated; times via FE-06).
- Freshness: yearly (buffers); times inherit routing.
- Type: fetched + curated. Source slot: airport-access.

### F-TT-06 — Intercity ground options ⚠
- What: rail/bus existence + typical durations between destination
  pairs.
- Spine: Suggest (reachable without flying); Plan.
- Scope: strong EU/JP coverage, gaps elsewhere → ladder.
- Freshness: monthly.
- Type: fetched. Source slot: intercity-ground.

### F-TT-07 — Local transit modes ⚠
- What: metro/tram/bus availability per destination, typical headways;
  pass costs flow to FE-07. "What to ride and why."
- Spine: Plan.
- Scope: GTFS where available → ladder.
- Freshness: quarterly.
- Type: fetched + curated. Source slot: local-transit.

## F-CC — Crowds & calendar (7) — source task V1.S1.T6
Socket note: SNS trend mining = Later socket; CC-07 is the V1
general-signals stand-in (FOUNDATION).

### F-CC-01 — Public holidays
- What: destination country/region holidays.
- Spine: Suggest (peak warning OR festive merit); Plan (→ FE-04
  overrides).
- Scope: near-global. Freshness: yearly.
- Type: fetched. Source slot: public-holidays.

### F-CC-02 — School holiday calendars ⚠
- What: destination-region school breaks (domestic crowd driver);
  weighting interacts with TP-02.
- Spine: Suggest.
- Scope: patchy outside a handful of countries → ladder.
- Freshness: yearly.
- Type: fetched. Source slot: school-calendars.

### F-CC-03 — Religious observance periods + effects ⚠
- What: observance calendars (Ramadan, Shabbat, Holy Week, major
  festival closures) + practical regional effects (daytime dining,
  shutdown windows). Dates are deterministic; effects are curated.
- Spine: Suggest (warning/merit); Plan (hours interplay with FE-04).
- Scope: global ambition → ladder (effects: curated, else LLM-research
  grade labeled).
- Freshness: yearly + curated review.
- Type: fetched/computed + curated. Source slot: religious-observances.

### F-CC-04 — Events & festivals ⚠
- What: concerts, festivals, marathons, conferences with area + dates.
  BOTH polarities: reason-to-go vs disruption (street closures, hotel
  surge); resolved per traveler by TP-13 vs TP-17.
- Spine: Suggest; Plan.
- Scope: city-dependent feeds → ladder.
- Freshness: weekly.
- Type: fetched. Source slot: events-feed.

### F-CC-05 — Seasonal crowd level
- What: peak / shoulder / off classification by destination and month
  ("Venice in August").
- Spine: SUGGEST (the peak-vs-off merit core).
- Scope: global; curated + derived from CC-01/02 + WX-11; LLM-research
  grade labeled where uncurated.
- Freshness: yearly.
- Type: curated + derived. Source slot: seasonal-crowding.

### F-CC-06 — Venue busyness curves ⚠
- What: typical crowd by hour/day per venue ("museum at opening").
- Spine: Plan.
- Scope: high ToS/coverage risk → ladder; often estimated, labeled.
- Freshness: monthly.
- Type: fetched + estimated. Source slot: venue-busyness.

### F-CC-07 — Trending signal (general, non-SNS)
- What: rising destination/venue interest from general public signals.
- Spine: Suggest merit bump.
- Scope: global, coarse. Freshness: weekly.
- Type: fetched + derived. Source slot: trending-general.

## T2–T6 assignment map
- V1.S1.T2 (Weather): WX-01..14 → slots weather-forecast,
  weather-alerts, snow-conditions, weather-climatology,
  weather-seasonal-risk, activity-profiles.
- V1.S1.T3 (Sky & sea): SS-01..10 → astro-ephemeris, tides,
  aurora-forecast, aurora-viability, nature-timing, night-sky-darkness,
  astro-events.
- V1.S1.T4 (Feasibility): FE-01..09 → geocoding-places,
  destination-affordances, places-venues, opening-hours,
  seasonal-closures, routing, cost-basis, reservation-flags,
  venue-attributes.
- V1.S1.T5 (Time & transport): TT-01..07 → airports, flight-routes,
  flight-schedules, tz-data, airport-access, intercity-ground,
  local-transit.
- V1.S1.T6 (Crowds & calendar): CC-01..07 → public-holidays,
  school-calendars, religious-observances, events-feed,
  seasonal-crowding, venue-busyness, trending-general.
Rule: one SOURCES.md entry per slot; every entry lists the fact IDs it
serves, its reliability grade, freshness, coverage notes, cost, and the
spike script path.

## Appendix A — Traveler parameters (TP-01..26) — per D-011
The floor: origin + dates always works; dates may carry optional
earliest-departure / latest-return boundary times. Every field below is
OPTIONAL and defaults to Null. Tiers: engine = a named V1 check
consumes it; brain-only = Claude personalizes, no deterministic check;
socket = stored, unconsumed in V1. Extension is append-only (one
nullable column + a D-number). These are inputs, not world facts — no
source slots; validation rules land in T7.

| ID | Field | Values | Consumed by | Tier |
|---|---|---|---|---|
| TP-01 | Adults in party | int | cost ×, pace prior | engine |
| TP-02 | Children's ages | list of ints | CC-02 weighting, FE-09 family fit, pace ceiling | engine |
| TP-03 | Seniors in party | int | gentler pace prior | engine |
| TP-04 | Home airport(s) | IATA list | TT-01 multi-airport choice | engine |
| TP-05 | Max total travel hours | number | Suggest gate via TT-03 | engine |
| TP-06 | Max stops | int | TT-02/03 fit | engine |
| TP-07 | Cabin class | econ/prem/biz | FE-07 cost basis | engine |
| TP-08 | Red-eye OK | bool | add-a-night rule (TT-03) | engine |
| TP-09 | Jet-lag sensitivity | low/med/high | first-day pacing (TT-04) | engine |
| TP-10 | Chronotype | early/flexible/night | SS-02 placement, first slots | engine |
| TP-11 | Pace | relaxed/standard/packed | daily activity budget | engine |
| TP-12 | Budget tier | shoestring/moderate/comfort/luxury | FE-07 fit labels | engine |
| TP-13 | Activity interest weights | map over 14 types: avoid→love | Suggest ranking, Plan selection | engine |
| TP-14 | Heat tolerance ceiling | threshold or level | personalizes WX-13 | engine |
| TP-15 | Cold tolerance floor | threshold or level | personalizes WX-13 | engine |
| TP-16 | Rain tolerance | level | personalizes WX-13 | engine |
| TP-17 | Crowd tolerance | low/med/high | scales CC demerits | engine |
| TP-18 | Fitness / max trail difficulty | easy/mod/hard | hiking feasibility | engine |
| TP-19 | Willing to drive | bool | driving legs, FE-06 mode | engine |
| TP-20 | Transit comfort | any/prefer-private | TT-07 mode choice | engine |
| TP-21 | Dietary notes | list/free | dining picks | brain-only |
| TP-22 | Accessibility needs | list | — (FOUNDATION Later socket) | socket |
| TP-23 | Must-do / avoid | free text | brain interprets | brain-only |
| TP-24 | Free-form notes | text | brain interprets | brain-only |
| TP-25 | Visited / excluded destinations | list | Suggest filter | engine |
| TP-26 | Baggage plan | carry-on only / checked + count | TT-05 buffers + arrival chain; FE-07 coarse fee range | engine |

## Appendix B — Plan parameters (T7 must schema; not world facts)
- Lodging anchor: the point each day starts/ends (user-chosen area or
  brain-suggested centroid). Drives FE-06 day routing.
