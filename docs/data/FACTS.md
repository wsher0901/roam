# Fact inventory — V1 (V1.S1.T1)

What the engine must KNOW (54 world facts, five families) and what it
may be TOLD (47 traveler parameters, Appendix A). This file is the
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
- Dictionaries: new and amended facts carry a "Dictionary:" line — the
  exact payload keys a vetted source must supply. T2–T6 confirm and
  record final keys per slot in SOURCES.md; where a fact has no
  Dictionary line yet, the vetting task derives it from the What line.
- Units: all stored values are SI/metric; conversion happens at
  display time only (D-013).
- Fact cache is bitemporal and append-only: every value carries
  valid_for (when true in the world) and recorded_at (when learned);
  values are superseded, never overwritten (D-015).
- The Dictionary line doubles as the schema-drift contract — live
  source payloads are monitored against it (docs/data/TELEMETRY.md §3).
- Traveler-side ask tiers, provenance, and upsert rules live in
  Appendix A (D-012).

## Activity taxonomy (15 types — ships as a data file)
beach & swimming · on-water (boat, kayak, surf) · hiking & trails ·
city walking & sightseeing · scenic viewpoints · golden-hour
photography · stargazing & aurora · seasonal nature viewing (foliage,
blooms, wildlife) · snow sports · indoor venues (museums, galleries,
shopping) · dining & food markets · nightlife (bars, clubs, live
music) · festivals & events · theme parks · driving legs / road trips.
Fifteen types. The join vocabulary for the whole inventory: WX-13
sensitivity profiles, FE-02 affordances, FE-13 reputation, and TP-13
interest weights all key off this list. Growing it later is a data
edit plus a D-number, not a rewrite.

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

### F-WX-13 — Activity weather-sensitivity profiles (×15 types)
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

## F-FE — Feasibility (14) — source task V1.S1.T4
Socket notes: visa/entry rules, safety advisories, venue accessibility
data, real prices = Later sockets. The lodging anchor (where each day
starts/ends) is a PLAN parameter, not a world fact — T7 schemas it
under plans.

### F-FE-01 — Destination registry
- What: canonical destination record — geocode, country, region,
  timezone (tz via math, shared with TT-04's slot), elevation_m, and
  practicalities.
- Dictionary: geocode · country · region · tz · elevation_m ·
  currency_code · payment_norm (card-everywhere/mixed/cash-leaning) ·
  languages[] · english_friendliness_class (high/med/low) ·
  driving_side (left/right) · idp_required (bool) ·
  tap_water_class (drinkable/bottled-advised) · plug_type
- Spine: all steps; elevation feeds first-days acclimatization pacing;
  english_friendliness is the world-side half of TP-39;
  driving_side + idp_required gate the TP-19 drive chain abroad.
- Scope: global. Freshness: static; tz/practicalities yearly.
- Type: fetched + computed + curated. Source slot: geocoding-places.

### F-FE-02 — Destination↔activity affordances ⚠
- What: what a destination is known for / supports, per the 15 types.
  Enables the core Suggest dock: "famous for X, but X is bad then".
- Spine: SUGGEST PRIMARY.
- Scope: global ambition; curated for demo destinations → ladder (else
  LLM-research grade, rendered unverified).
- Freshness: yearly.
- Type: curated + LLM-research grade. Source slot:
  destination-affordances.

### F-FE-03 — Venue / POI records
- What: name, geocode, category (mapped to the 15 types).
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
- What: typical price bands per destination — meals, admissions, local
  transport, lodging, rental car — plus official charges and norms.
  Ranges only — real prices = Later socket. Flight-cost ranges may
  include a typical checked-bag fee RANGE (per TP-26).
- Dictionary: meal_band · admission_band · local_transport_band ·
  lodging_band · rental_car_band · tourist_city_fees {present,
  est_band, note} · tipping_norm (none/round-up/5-10%/15-20%/included)
  · fx_link -> FE-14
- Spine: Suggest (budget fit vs TP-12/TP-36); Plan (cost labels).
- Scope: global. Freshness: quarterly.
- Type: estimated (+ fetched where published). Source slot: cost-basis.

### F-FE-08 — Reservation / timed-entry / permit flags ⚠
- What: book-ahead, timed-entry, and PERMIT requirements (Inca Trail,
  Half Dome), with booking-window behavior (informing, never
  transacting).
- Dictionary: requirement_class (none/recommended/required/permit) ·
  typical_lead_time_days · sellout_speed (slow/fast/minutes) · note
- Spine: Plan ("book ahead" flag); pre-trip reminders ("opens 30 days
  out, gone in minutes").
- Scope: global ambition → ladder. Freshness: monthly.
- Type: fetched + curated. Source slot: reservation-flags.

### F-FE-09 — Venue attributes
- What: per-venue planning attributes consumed by confirmed traveler
  fields.
- Dictionary: indoor_outdoor (indoor/outdoor/mixed) ·
  typical_visit_minutes · family_fit · min_age_note ·
  audience_suitability (all-ages/adults-leaning/adults-only-18+/21+) ·
  pet_friendly (yes/outdoor-only/no/unknown)
- Spine: Plan; audience_suitability powers composition-aware matching
  (FOUNDATION §Plan-synthesis principles).
- Scope: global. Freshness: monthly; estimated where missing, labeled.
- Type: fetched + estimated. Source slot: venue-attributes.

### F-FE-10 — Parking ⚠
- What: parking reality at venues and areas — the rental-car chain's
  second link.
- Dictionary: attach_to (venue/area) · availability_class
  (onsite/nearby-garage/street-only/scarce) · distance_to_entrance_m ·
  cost_band (free→high) · restricted_driving_zone {present, type:
  ZTL/LEZ, note} · restrictions_note
- Spine: Plan (drive mode); ZTL/LEZ flags prevent the classic
  Florence/Rome rental fine.
- Scope: global ambition → ladder (estimated, labeled, where thin).
- Freshness: monthly. Type: fetched + estimated. Source slot: parking.

### F-FE-11 — Route services (driving legs) ⚠
- What: what exists along a driving leg — fuel, rest, EV charging,
  tolls — and the gaps.
- Dictionary: leg_id · fuel_gap_max_km · services_waypoints[] {type:
  fuel/rest/EV, location, km_mark} · ev_coverage_class
  (good/sparse/none) · tolls {present, est_band} · warning_text
  ("no fuel 180 km after Vík")
- Spine: Plan — gas-stop insertion, remote-leg warnings; mileage from
  FE-06 distances.
- Scope: global via map amenities. Freshness: monthly.
- Type: fetched + computed. Source slot: route-services.

### F-FE-12 — Area profiles ⚠
- What: neighborhood-level character per destination, for
  optimal-stay-area computation (lodging is suggested by AREA, not
  property; type preference is TP-38; handoff via API/connector where
  available, else precise search keywords).
- Dictionary: area_id · name · centroid/polygon · vibe_tags[]
  (controlled vocab: historic, nightlife, quiet, beachfront, market,
  scenic, business) · price_band (1–4) · centrality (core/inner/outer)
  · transit_access_class · best_for[] (15 activity types)
- Spine: Plan (stay-area math: budget × routes × desired feel);
  Suggest light. No safety scoring — advisories are a deferred socket.
- Scope: curated for demo destinations → ladder (LLM-grade labeled).
- Freshness: yearly. Type: curated + LLM-research grade. Source slot:
  area-profiles.

### F-FE-13 — Venue reputation ⚠
- What: fame and momentum per venue — the world-side of the offbeat
  dial (TP-47) and the dining-intelligence ask (trending vs classic;
  coffee/tea/dessert ride FE-03 categories, prices ride FE-07).
- Dictionary: fame_level (iconic/classic/known/niche/hidden) ·
  momentum (rising/steady/fading) · evidence_basis
  (curated/signals/LLM)
- Spine: Plan selection; Suggest light. Two axes because a fading icon
  and a rising hidden gem are different recommendations.
- Scope: global ambition → ladder. Freshness: monthly.
- Type: fetched + curated + LLM-research grade. Source slot:
  venue-reputation.

### F-FE-14 — Currency exchange rates
- What: daily mid-market FX so every cost range and the TP-36 budget
  ceiling render in the traveler's currency.
- Dictionary: base_ccy · quote_ccy · rate · as_of_date
- Spine: cost display; TP-36 overrun check.
- Scope: global. Freshness: daily.
- Type: fetched. Source slot: fx-rates.

## F-TT — Time & transport (8) — source task V1.S1.T5
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

### F-TT-05 — Airport access + buffers (baggage- and border-aware)
- What: door-to-airport modes + typical times (reuses routing slot
  values); check-in/security buffer policy conditioned on TP-26
  (bag-drop vs gate-only cutoffs; claim buffer on arrival); and
  arrival immigration-wait class for international arrivals — the
  slowest link in the day-one chain.
- Dictionary: access_modes[] {mode, typical_min} · checkin_buffer_min
  {bags, no_bags} · security_buffer_min {intl, domestic} ·
  bag_claim_buffer_min · immigration_wait_class (fast/normal/slow)
- Spine: Plan — FOUNDATION's backward-chained leave-time + day-one
  arrival chain.
- Scope: global (policy curated; times via FE-06; wait class per
  airport where published, else estimated labeled).
- Freshness: yearly; times inherit routing. Type: fetched + curated.
  Source slot: airport-access.

### F-TT-06 — Intercity ground options ⚠
- What: rail / bus / FERRY existence + typical durations between
  destination pairs — island itineraries break without car-ferry and
  seasonality awareness.
- Dictionary: pair_id · mode (rail/bus/ferry) · typical_duration_min ·
  vehicle_allowed (bool, ferries) · frequency_class
  (multi-daily/daily/seasonal)
- Spine: Suggest (reachable without flying); Plan.
- Scope: strong EU/JP coverage, gaps elsewhere → ladder.
- Freshness: monthly. Type: fetched. Source slot: intercity-ground.

### F-TT-07 — Local transit modes ⚠
- What: metro/tram/bus availability per destination, typical headways;
  pass costs flow to FE-07. "What to ride and why."
- Spine: Plan.
- Scope: GTFS where available → ladder.
- Freshness: quarterly.
- Type: fetched + curated. Source slot: local-transit.

### F-TT-08 — Transport disruptions & strikes ⚠
- What: announced strikes, line closures, and schedule-affecting
  disruption windows ("SNCF strike Mar 12–14").
- Dictionary: region · mode (rail/metro/bus/air/ferry/port) · operator
  · window {start, end, open_ended} · severity (minor/partial/major) ·
  scope_note
- Spine: Suggest demerit when overlapping the window; Plan warnings
  and mode substitution.
- Scope: global ambition; notice boards + news → full ladder incl.
  LLM-grade labeled.
- Freshness: weekly; daily within 2 weeks of dates.
- Type: fetched. Source slot: transport-disruptions.

## F-CC — Crowds & calendar (8) — source task V1.S1.T6
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
- What: concerts, festivals, marathons, conferences, major civic
  events with area + dates. BOTH polarities: reason-to-go vs
  disruption; resolved per traveler by TP-13 vs TP-17.
- Dictionary: event_id · name · area · dates · expected_scale_band ·
  disruption_flag (closes-streets/strains-lodging/none)
- Spine: Suggest; Plan.
- Scope: city-dependent feeds → ladder. Freshness: weekly.
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

### F-CC-08 — Cruise port-call schedules ⚠
- What: published ship arrivals at port towns — when the old town
  floods and when it breathes ("3 ships in Dubrovnik Tue, in port
  10:00–17:00").
- Dictionary: port_id · date · ships_count · passengers_band
  (<2k / 2–6k / >6k) · in_port_window
- Spine: Plan timing (shift the old-town visit); Suggest minor.
- Scope: published port schedules; gaps labeled → ladder.
- Freshness: weekly. Type: fetched. Source slot: cruise-port-calls.

## T2–T6 assignment map
- V1.S1.T2 (Weather): WX-01..14 → slots weather-forecast,
  weather-alerts, snow-conditions, weather-climatology,
  weather-seasonal-risk, activity-profiles.
- V1.S1.T3 (Sky & sea): SS-01..10 → astro-ephemeris, tides,
  aurora-forecast, aurora-viability, nature-timing, night-sky-darkness,
  astro-events.
- V1.S1.T4 (Feasibility): FE-01..14 → geocoding-places,
  destination-affordances, places-venues, opening-hours,
  seasonal-closures, routing, cost-basis, reservation-flags,
  venue-attributes, parking, route-services, area-profiles,
  venue-reputation, fx-rates.
- V1.S1.T5 (Time & transport): TT-01..08 → airports, flight-routes,
  flight-schedules, tz-data, airport-access, intercity-ground,
  local-transit, transport-disruptions.
- V1.S1.T6 (Crowds & calendar): CC-01..08 → public-holidays,
  school-calendars, religious-observances, events-feed,
  seasonal-crowding, venue-busyness, trending-general,
  cruise-port-calls.
Rule: one SOURCES.md entry per slot; every entry lists the fact IDs it
serves, the confirmed payload keys (Dictionary), its reliability
grade, freshness, coverage notes, cost, the spike script path,
retention_rights (store-raw / derived-only / cache-only / none),
license_class, and attribution duties. Retention and license are
PRIMARY selection criteria: caching-prohibited sources disqualify a
slot from the asset layer (D-015).

## Appendix A — Traveler parameters (TP-01..47) — per D-011 + D-012
The floor: origin + dates always suffices. Dates carry: start, end,
flexibility {fixed | ±N days | open window ("October")}, optional
boundary times (earliest departure / latest return). When flexibility
≠ fixed, trip_length_nights is the single non-negotiable ask
(statistics-based default if declined). Every field below is OPTIONAL
and defaults to Null.
Ask tiers (D-012): U = upfront (capped at six questions: origin,
dates+flexibility+length, who's going, budget, multi-city, one
interest pass; language joins contextually for international scope) ·
L = later/contextual · N = never (inferred, defaulted,
composition-adjusted, warn-don't-block) · S = settings.
Provenance: every field stores {stated | inferred | default} +
updated_at. Supersede: stated > inferred > default; newer > older.
Stated-only class (never inferred): TP-22, TP-41, TP-45, allergy
details inside TP-21. Tiers: engine / brain-only / socket. Extension
is append-only (D-011). No source slots — the source is the traveler;
validation lands in T7.

| ID | Field | Values | Ask | Consumed by | Tier |
|---|---|---|---|---|---|
| TP-01 | Adults | int | U | cost ×, pace prior | engine |
| TP-02 | Children's ages | [int] | U | CC-02, FE-09 fit, pace ceiling | engine |
| TP-03 | Seniors | int | U | gentler pace prior | engine |
| TP-04 | Home airport(s) | [IATA] | N — derived from origin; explicit value restricts | TT-01 | engine |
| TP-05 | Max total travel hours | num | L | Suggest gate via TT-03 | engine |
| TP-06 | Max stops | int | N — composition-derived default | TT-02/03 | engine |
| TP-07 | Cabin class | econ/prem/biz | N — default economy | FE-07 | engine |
| TP-08 | Red-eye OK | bool | L — only when it significantly boosts; lean no for elderly/kids | add-a-night (TT-03) | engine |
| TP-09 | Jet-lag sensitivity | low/med/high | L — post-draft; shapes first days | TT-04 pacing | engine |
| TP-10 | Chronotype | early/flexible/night | N — infer | SS-02 placement | engine |
| TP-11 | Pace (per-stop speed) | quick-hit/standard/lingering | L | time per activity — NOT density | engine |
| TP-12 | Budget tier | shoestring/moderate/comfort/luxury | U (or TP-36) | FE-07 labels | engine |
| TP-13 | Interest weights | map ×15 types: avoid→love | U light, else inferred from destination | Suggest rank, Plan select | engine |
| TP-14 | Heat ceiling | °C | N — guideline; composition-adjust; warn | WX-13 personal | engine |
| TP-15 | Cold floor | °C | N — same | WX-13 | engine |
| TP-16 | Rain tolerance | level | N — default: avoid rain | WX-13 | engine |
| TP-17 | Crowd tolerance | low/med/high | L/contextual | CC demerits | engine |
| TP-18 | Fitness / trail cap | easy/mod/hard | N — average default; composition-adjust; micro-ask on near-swaps | hiking | engine |
| TP-19 | Willing to drive | bool | U-adjacent — it cascades (rental→parking→transit timeline) | drive chain, FE-06 mode | engine |
| TP-20 | Transit modes accepted | set: metro/bus/taxi/rideshare/tour-bus | L | TT-07, FE-06 mode | engine |
| TP-21 | Dietary | list | L — filters options, NEVER a safety guarantee; allergies stated-only | dining picks | brain |
| TP-22 | Accessibility | list | N — socket | — | socket |
| TP-23 | Must-do / avoid | lists (fears map here too) | L — the anchor ask around the draft | pins/blocks via compromise flow | engine+brain |
| TP-24 | Free-form notes | text | always-on capture | brain | brain |
| TP-25 | Visited / excluded | lists (+ visit counts) | N — capture | Suggest filter | engine |
| TP-26 | Baggage plan | carry-on / checked+count | L | TT-05 buffers; FE-07 fee range; shopping headroom note | engine |
| TP-27 | Density (day fullness) | light/standard/full | L | daily activity budget | engine |
| TP-28 | Trip goal | relax/balanced/see-everything/deep-dive | L early — identify or ask | defaults for TP-11/27; recommendation course | engine |
| TP-29 | Trip focus | multi: food/art/nature/shopping/nightlife/experience | L — post-draft centerpieces | plan centerpieces | engine+brain |
| TP-30 | Trade-off priority | ranked: budget/must-dos/comfort/time | L — when conflicts arise | demotion order under limits | engine |
| TP-31 | Intent mode | fixed/shortlist/open | N — inferred from phrasing | Suggest behavior switch | engine |
| TP-32 | Shortlist | [destinations] | N — use when given | compare set + near-peer alternatives | engine |
| TP-33 | Multi-city | single base / open | U | TT-06; plan structure | engine |
| TP-34 | Party type | solo/couple/friends/family/multi-gen/group/business | U (inside who's-going) | venue vibe; rec shaping | engine+brain |
| TP-35 | Occasion | honeymoon/anniversary/birthday/reset/none | L | tone + picks | brain |
| TP-36 | Budget ceiling | {amount, currency} | U (alt form of TP-12) | Σ FE-07 ranges vs cap via FE-14 | engine |
| TP-37 | Rail-over-flight pref | prefer-when-viable/none | N — engine suggests when better or budget-driven | TT-02/03 vs TT-06 weighting | engine |
| TP-38 | Accommodation style | hotel/apartment/resort/hostel/B&B | L — at lodging step | FE-07 lodging band; FE-12 area pick | brain |
| TP-39 | Language comfort | english-friendly preferred / anywhere | U-contextual (intl scope) | check vs FE-01 english_friendliness | engine |
| TP-40 | Reference trips | [{place, sentiment, why}] | N — synthesized from anything said | brain steering ("more like Kyoto") | brain |
| TP-41 | Nationality / passports | [ISO] | N — account page when auth exists; NEVER inferred | keys visa socket | socket |
| TP-42 | Verified-only strictness | labeled/strict | S — default labeled | rung 4–5 render policy | engine |
| TP-43 | Units | metric/us | S — default metric (D-013) | display conversion | engine |
| TP-44 | Time commitments | [{what, where, when, recurring}] | L / capture | Plan anchors; pre-locked items | engine |
| TP-45 | Special conditions | pregnancy, recovery, etc. | N — stated-only | adjust + warn; liability guard | brain |
| TP-46 | Pets along | {along, type} | N — capture | FE-09 pet filter | brain |
| TP-47 | Mainstream↔offbeat dial | classics/mix/hidden-gems | L or inferred | FE-13 weighting | engine+brain |

## Appendix B — Plan parameters (T7 must schema; not world facts)
- Lodging anchor: the point each day starts/ends (user-chosen area or
  brain-suggested centroid). Drives FE-06 day routing.
- Item lock-state: accepted trade-offs and TP-44 commitments are
  pinned ("bible") — carried per plan item with acceptance provenance
  (FOUNDATION §Plan-synthesis principles; T7 schemas it).
