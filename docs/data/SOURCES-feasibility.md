---
type: sources
title: Source registry — Feasibility
status: living
---
# Source registry — Feasibility ([V1.S1.T4](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code))

One entry per Feasibility source slot, in the format
[SOURCES.md](SOURCES.md) ships for Weather.
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
merges this file into [SOURCES.md](SOURCES.md) and deletes it; nothing
here edits that file.
Manual: [HOME §Reading the data files](../HOME.md#reading-the-data-files).

**THE GRADE SCALE IS NOT HERE.** Its one canonical home is
[ENGINE §7](../ENGINE.md#7-render--honest-pixels).

**Every entry carries a RETRIEVAL POLICY** — allowed domains and their
grade, whether a quote is required, and the freshness window — defined
at
[FACTS § How to read this file](FACTS.md#how-to-read-this-file) and
required by
[D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 3. A slot whose facts cannot reach rung 5a writes `n/a` AND
SAYS WHY. **The policy is PER FACT**; where every fact in a slot
shares one, the entry writes it once and says so.

**GRADE B IS DEFINED BY DOMAIN CLASS**, at
[ENGINE §3](../ENGINE.md#3-acquire--get-the-facts) — operator,
government body, transit authority, established press. A row applies
that definition; it never promotes a domain outside those classes.

## Three findings that shape every entry below

**One: the licence question is settled, and it settles it in OSM's
favour.** OpenStreetMap is ODbL — share-alike on a derived DATABASE,
but explicitly compatible with
[D-015](../record/DECISIONS.md#d-015--data-asset-law)'s
license-segmented collective store, and it permits the store-raw
retention the asset layer is built on. Every proprietary alternative
vetted here (Google, TripAdvisor, Numbeo, Foursquare) forbids exactly
that. See [§ The Google Maps verdict](#the-google-maps-verdict).

**Two: the public OSM query endpoints are not production
infrastructure.** Overpass allows TWO concurrent slots per IP and
answers HTTP 429 `rate_limited` past them; Nominatim's usage policy
caps at 1 req/s and forbids bulk geocoding. Both were hit during this
bench's spikes, not read about. Every OSM-backed entry below is graded
on the DATA, and every one of them carries the same operational
caveat: production needs a self-hosted instance or an offline extract.
That is an engineering cost, not a licence problem, and it does not
move any grade.

**Three: a source can answer HTTP 200 and still be dead.** Three
candidates did during this bench — `restcountries.com/v3.1` returns
200 with `"This API version has been deprecated"`, `exchangerate.host`
returns 200 with `missing_access_key`, and the public OSRM demo
accepts `/route/v1/walking` and returns the CAR profile's numbers
byte-for-byte. Each grade below therefore rests on a spike that
checked the PAYLOAD, never the status code.

---

## geocoding-places

- Serves: [FE-01](FACTS.md#f-fe-01--destination-registry).
- Source: THREE open sources, one per half of the Dictionary.
  **Nominatim** (nominatim.openstreetmap.org) for geocode, country and
  region — rung 1, global. **Open-Meteo Elevation**
  (api.open-meteo.com/v1/elevation, Copernicus DEM) for elevation_m —
  rung 1, global. **Wikidata Query Service** (query.wikidata.org) for
  the country practicalities — rung 2, one SPARQL call answering every
  ISO code at once.
- Confirmed keys (spike, 2026-09-15): Nominatim returns `place_id`,
  `licence`, `osm_type`, `osm_id`, `lat`, `lon`, `category`, `type`,
  `place_rank`, `importance`, `addresstype`, `name`, `display_name`,
  `address`, `extratags`, `boundingbox`. Wikidata returns `P498`
  (currency ISO), `P37` (languages), `P1622` (driving side), `P2853`
  (plug types). Open-Meteo returns `elevation` in metres.
- Dictionary coverage, measured rather than claimed — 9 of 13 fields
  are fetched, and the 4 that are not are named:
  | field | how it is answered |
  |---|---|
  | geocode · country · region | Nominatim, rung 1 |
  | elevation_m | Open-Meteo, rung 1 (Reykjavik 7 m, Kyoto 51 m, Rome 42 m) |
  | tz | COMPUTED from geocode, shared with [TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift)'s slot |
  | currency_code · languages · driving_side · plug_type | Wikidata, rung 2 (ISK/Icelandic/right/Schuko+Europlug; JPY/Japanese/left/NEMA; EUR/Italian/right/Schuko+Europlug+Type L) |
  | payment_norm · english_friendliness_class · idp_required · tap_water_class | NO REGISTRY EXISTS → retrieval, rung 5a |
- Grade: **A** for the fetched nine (authoritative, global,
  license-clean); **C** for the four retrieved fields, or **B** where
  the retrieval lands on a government domain.
- Freshness served: geocode/country/region static, re-checked yearly;
  elevation static; practicalities yearly.
- Coverage: global. Two real gaps found in the spike — Nominatim
  returns the country name LOCALISED unless `accept-language=en` is
  sent (`Ísland`, `日本`), and `address.state` is absent for
  city-states and for Kyoto, so `region` must fall back through
  `state` → `region` → `county` rather than assume one key.
- Cost: free, all three. Nominatim caps at 1 req/s with a mandatory
  identifying User-Agent and forbids bulk geocoding on the public
  instance; Wikidata asks the same courtesy.
- retention_rights: **store-raw** (all three). license_class:
  Nominatim **ODbL 1.0**; Wikidata **CC0**; Open-Meteo elevation
  **CC-BY-4.0** (Copernicus). Attribution: "© OpenStreetMap
  contributors" — returned in the payload's own `licence` field and
  verified there on 2026-09-15; Copernicus/Open-Meteo for elevation;
  Wikidata requires none.
- **Retrieval policy** — SHORTHAND, and it declares itself: this slot
  serves one fact, but only FOUR OF ITS FIELDS reach rung 5a, so the
  row governs those four and nothing else.
  - allowed domains + grade: the destination country's own government
    portals — foreign-ministry, tourism-board and health-authority
    domains (**B**, government body); the operator of a national
    payment or water utility (**B**, operator); established press
    (**B**); travel-guide and expat sites (**C**). Any other domain is
    out of bounds.
  - quote required: **yes** for `idp_required` and `tap_water_class` —
    both are advice a traveller acts on, and an unquoted "tap water is
    fine" is the kind of claim the reliability law exists to stop.
    **no** for `payment_norm` and `english_friendliness_class`, which
    are coarse classes rather than verbatim rules.
  - freshness window: 1 year, and re-checked at plan time for
    `idp_required` (a driving-permit rule changes without notice).
- Spike: `scripts/spikes/feasibility-geocoding-places.mjs` — run
  2026-09-15 against Reykjavik, Kyoto and Rome. Returned all three
  geocodes with OSM relation IDs, three elevations, and the full
  Wikidata practicalities row for each; printed the 9/13 coverage
  table above and named the 4 missing fields.
- Alternatives rejected: **REST Countries** (`restcountries.com/v3.1`)
  — returns HTTP 200 carrying `"This API version has been
  deprecated"`, verified 2026-09-15; a dead source that reads green.
  **GeoNames** — free tier requires a registered account and the demo
  account is permanently over quota (verified 2026-09-15); CC-BY and
  workable, but Wikidata answers the same fields at CC0 with no
  account. **Open-Elevation** — returned `0.0 m` for central Reykjavik
  against Open-Meteo's `7 m` (verified 2026-09-15); wrong, not merely
  coarse. **Google Geocoding/Places** — see
  [§ The Google Maps verdict](#the-google-maps-verdict).

## places-venues

- Serves: [FE-03](FACTS.md#f-fe-03--venue--poi-records).
- Source: **OpenStreetMap POIs** via Overpass (ODbL). Rung 1: global,
  and the densest open POI database there is.
- Confirmed keys (spike, 2026-09-15): element `type`/`id` (the stable
  venue key), `lat`/`lon` or `center`, and `tags` carrying `name`,
  `tourism`, `amenity`, `shop`, `historic`, `natural`, `route`, plus
  `wikidata`, `wikipedia`, `website` and `fee` where present. A real
  returned record: `{"name":"Museo Storico dei Bersaglieri",
  "lat":41.909267,"lon":12.5010785,
  tags:["fee","museum","name","source","tourism","wikidata",
  "wikimedia_commons","wikipedia"]}`.
- **Dictionary coverage, measured over 3,668 Rome-centre elements:**
  | FE-03 field | coverage |
  |---|---|
  | geocode | **3,668 / 3,668 = 100.0%** |
  | category (a mapped tag) | **3,668 / 3,668 = 100.0%** |
  | name | 3,226 / 3,668 = **87.9%** |
  | `wikidata` cross-ref (not FE-03; the join key to [FE-13](FACTS.md#f-fe-13--venue-reputation-)) | 407 / 3,668 = 11.1% |
- **The 15-type mapping was tested, not assumed, and it holds:
  0.0% unmapped.** Every element the query returned landed in a Roam
  activity type — dining & food markets 2,335 · city walking &
  sightseeing 943 · nightlife 201 · indoor venues 125 · scenic
  viewpoints 56 · hiking & trails 8. The caveat is that this is a
  ONE-WAY test: it proves the OSM tags we ASK for map cleanly, not
  that the 15 types cover everything OSM holds. The reverse direction
  is a
  [V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep) concern
  and is named here rather than claimed.
- Grade: **A** for geocode and category; **B** for name, because 12%
  of elements are unnamed and an unnamed venue cannot be placed in a
  plan at all — it is filtered, not labeled.
- Freshness served: monthly, per [FACTS](FACTS.md). POI existence
  changes slowly; hours do not, which is why they are
  [§ opening-hours](#opening-hours)' problem and not this slot's.
- Coverage: global. Density varies enormously by region, and the
  honest statement is that OSM POI density correlates with European
  mapping-community activity — the same asymmetry
  [§ opening-hours](#opening-hours) measured.
- Cost: free; the Overpass slot limit of
  [finding two](#three-findings-that-shape-every-entry-below) applies.
- retention_rights: **store-raw**. license_class: **ODbL 1.0**.
  Attribution: "© OpenStreetMap contributors".
- **Retrieval policy:** `n/a` for the three Dictionary fields — a POI's
  name, position and category are answered at rung 1 by a global
  database, and retrieving them from a page would be strictly worse
  and unverifiable against the venue we actually mean. Retrieval
  applies to this slot's NEIGHBOURS, not to it: hours are
  [§ opening-hours](#opening-hours)' policy, attributes are
  [§ venue-attributes](#venue-attributes)', reputation is
  [§ venue-reputation](#venue-reputation)'. What this slot contributes
  to all three is the `website` tag, which is the retrieval SEED — the
  allowed operator domain, supplied by OSM rather than guessed, which
  is exactly what the 404 in
  [§ money-saving-tips](#money-saving-tips)' spike showed is needed.
- Spike: `scripts/spikes/feasibility-places-venues.mjs` — run
  2026-09-15 over Rome centre, 3,668 elements, OSM base
  `2026-09-15T20:36:48Z`. Returned the coverage table, the per-type
  counts and the 0.0% unmapped result.
- Alternatives rejected: **Google Places** — see
  [§ The Google Maps verdict](#the-google-maps-verdict).
  **Foursquare Places / OS Places** — storage restricted to IDs.
  **Overture Maps Foundation** — genuinely interesting, open
  (CDLA-Permissive / ODbL segments), and a real future candidate for
  its POI theme; NOT adopted for V1 because it ships as monthly
  cloud-hosted Parquet with no query API, so consuming it is a data
  pipeline rather than a fetch. Recorded as the leading upgrade path
  for this slot, to revisit when scale makes self-hosting worthwhile.

## opening-hours

- Serves: [FE-04](FACTS.md#f-fe-04--opening-hours).
- Source: **OpenStreetMap `opening_hours`**, queried through Overpass
  (ODbL). Rung 1 where tagged. The tag's grammar is a real
  specification — it expresses weekly rules, public-holiday overrides,
  last-entry times and month ranges — and the spike returned all of
  those from live data.
- Confirmed keys (spike, 2026-09-15): `opening_hours` on the element's
  `tags`, alongside `name`, `tourism`/`amenity` and the element
  `center`. Real values returned, verbatim:
  `"We-Mo 08:30-19:30; Tu off; May 1 off; Dec 25 off"` (Rome museum —
  weekly rule plus two public-holiday overrides) and
  `"Jan 02-Feb 15,Oct 28-Dec 31 08:30-16:30; Jan 16-Mar 15 08:30-17:00; Mar 16-24 08:30-17:30; Mar 25-Aug 31 08:30-19:15; Sep 01-30 08:30-19:00"`
  (Rome attraction — a full seasonal schedule in one field).
- Grade: **B** — and the honest half of that grade is the coverage,
  which this bench measured rather than wished away. Across 12,627 venues
  in five city centres on five continents,
  **3,969 carried an `opening_hours` tag: 31.4%.**

  | city | tagged / total | coverage |
  |---|---|---|
  | Reykjavik, IS | 197 / 391 | **50.4%** |
  | Paris, FR | 2,232 / 5,219 | **42.8%** |
  | Rome, IT | 704 / 2,535 | **27.8%** |
  | Kyoto, JP | 410 / 2,167 | **18.9%** |
  | Bangkok, TH | 426 / 2,315 | **18.4%** |

  | category | tagged / total | coverage |
  |---|---|---|
  | museum / gallery | 230 / 674 | 34.1% |
  | bar / pub / nightclub | 530 / 1,608 | 33.0% |
  | restaurant / cafe | 3,138 / 9,970 | 31.5% |
  | attraction | 71 / 375 | **18.9%** |

  Two readings matter. **The country spread is nearly 3×**, and it runs
  against the demo's ambitions — Kyoto and Bangkok, the two non-European
  cities, are the two worst covered. **And `attraction` is the worst
  category everywhere**, which is precisely the category a sightseeing
  day is built from.

  FE-04 IS A HARD GATE ("open when you arrive"). A gate that is silent
  on two venues in three cannot run on the tagged fraction alone, so
  the retrieval policy below is not this slot's fallback — it is half
  its working path. **SILENCE IS NEVER READ AS OPEN, AND NEVER AS
  CLOSED**; it is the retrieval trigger, and if retrieval also fails
  the placement is refused at rung 6 rather than guessed.
- Freshness served: weekly, **plus a plan-time re-check for the actual
  dates**, per [FACTS](FACTS.md). The plan-time re-check is not
  optional here: it is what catches the holiday override the weekly
  cache missed.
- Coverage: global in principle, and the table above in practice.
  A SECOND FRESHNESS TRAP, found by the spike: the Overpass mirrors do
  not agree on how current they are. The same run read an OSM base
  timestamp of `2026-09-15T20:30Z` from overpass-api.de but
  `2026-07-24` for Kyoto and `2026-05-06` for Paris from the
  kumi.systems mirror — up to four months stale. For a hard gate that
  is a correctness issue, not a performance one, so a production
  deployment must PIN its instance and read the base timestamp, never
  round-robin mirrors silently.
- Cost: free. The public Overpass instance allows two concurrent slots
  per IP; this spike's five queries hit HTTP 429 and 504 repeatedly and
  needed backoff and mirror rotation to finish.
- retention_rights: **store-raw**. license_class: **ODbL 1.0**.
  Attribution: "© OpenStreetMap contributors" (verified 2026-09-15 in
  the Nominatim payload's own `licence` field and at
  openstreetmap.org/copyright).
- **Retrieval policy** — SHORTHAND, and it declares itself: this slot
  serves one fact, and the row governs it whole. It is the busiest
  policy in this file, because it covers the ~69% of venues OSM does
  not answer for:
  - allowed domains + grade: **the venue operator's own website**
    (**B**, operator) — and OSM itself supplies the seed, since the
    `website` tag is present far more often than `opening_hours`; the
    operator's page on a government cultural or parks portal (**B**,
    government body); the transit authority for a station or terminal
    (**B**, transit authority); established press for a reported
    closure or a change of hours (**B**). Aggregators and review
    platforms — Google, TripAdvisor, Yelp, Facebook — are OUT OF
    BOUNDS: they are the freshest source of opening hours in the world
    and every one of them forbids storing it
    ([§ The Google Maps verdict](#the-google-maps-verdict)), so they
    may not appear in an allowed list in this file at all.
  - quote required: **yes.** An opening time with no verifiable span at
    the fetched url is DISCARDED, not downgraded — **this slot has no
    rung 5b.** A remembered opening time is how a traveller ends up at
    a locked door, which is the exact failure
    [FOUNDATION](../FOUNDATION.md#the-reliability-law) names.
  - freshness window: 7 days, and **24 hours inside the trip window**;
    a `required`-class placement re-checks at plan time regardless of
    cache age.
- Spike: `scripts/spikes/feasibility-opening-hours.mjs` — run
  2026-09-15 across Reykjavik, Rome, Kyoto, Paris and Bangkok, 12,627
  elements. Returned the two coverage tables above, the 55 month-range
  values, the verbatim samples quoted above, and the mirror-staleness
  finding.
- Alternatives rejected: **Google Places `opening_hours` /
  `current_opening_hours`** — comprehensively better data, and refused
  outright by ToS 3.2.3(a) and (b); see
  [§ The Google Maps verdict](#the-google-maps-verdict). This is the
  slot where the licence costs Roam the most, and it is recorded as a
  known, accepted cost rather than an oversight. **Foursquare Places** and **Yelp Fusion**
  — not vetted clause by clause (see
  [§ venue-reputation](#venue-reputation)); not pursued for the same
  reason.
  **Scraping operator sites at scale** — distinct from per-fact
  retrieval under a policy, and rejected: it is a different legal
  posture, a fragility burden, and it is not what
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 1 authorised.

## routing

- Serves: [FE-06](FACTS.md#f-fe-06--travel-times--distances-per-mode).
- Source: **Valhalla** (valhalla1.openstreetmap.de, FOSSGIS) as
  primary — `/route` and `/sources_to_targets` — with **OSRM**
  (router.project-osrm.org) kept for the car-only matrix. Both are
  open engines over OSM (ODbL). Rung 1: global, and TYPICAL times by
  construction, which is what FE-06 asks for (no live traffic — the
  pre-trip identity).
- Confirmed keys (spike, 2026-09-15): OSRM `/table` returns `code`,
  `durations`, `distances`, `sources`, `destinations`; `/route`
  returns `routes[].distance`, `.duration`, `.legs[]`. Valhalla
  `/route` returns `trip.summary.length`, `.time`, `trip.legs[]`,
  `trip.status_message`; `/sources_to_targets` returns a
  `time`/`distance` matrix. Valhalla `/status` reported version
  `3.8.3-cc015b6` and `tileset_last_modified` 2026-09-14 — a
  one-day-old planet tileset.
- Grade: **A** for walk and drive, and the reason Valhalla wins is a
  spike finding, not a preference. The public OSRM demo instance
  carries the CAR PROFILE ONLY and silently ignores the profile path
  segment: `/route/v1/driving`, `/walking` and `/cycling` over the
  same four Rome stops all returned 10.88 km / 26.8 min, identical to
  three decimal places. Valhalla differentiates correctly on the same
  stops — auto 14.22 km / 59.6 min, pedestrian 6.84 km / 89.8 min,
  bicycle 9.39 km / 35.9 min. A source that answers 200 with the wrong
  profile's numbers is worse than one that errors, and grading walking
  times off OSRM would have been a silent A on car data.
- **TRANSIT IS NOT SERVED HERE.** Valhalla's `multimodal` costing needs
  a GTFS-fed tileset and the public FOSSGIS instance ships none —
  probed 2026-09-15, HTTP 400. Transit is
  [TT-07](FACTS.md#f-tt-07--local-transit-modes-)'s
  ([V1.S1.T5](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)),
  and this slot's boundary is recorded rather than papered over.
- Freshness served: monthly (road geometry is static-ish); the
  upstream tileset rebuilds roughly daily.
- Coverage: global, both engines, anywhere OSM has roads and paths.
- Cost: free. Both are community-run instances with fair-use
  expectations and no SLA — the self-hosting caveat of
  [finding two](#three-findings-that-shape-every-entry-below) applies
  hardest here, because the optimizer
  ([ENGINE §6](../ENGINE.md#6-synthesize--build-the-plan)) calls the
  matrix on every re-solve.
- retention_rights: **store-raw** — computed routes over ODbL data;
  the travel-time matrix is a derived database and stays in the
  OSM-licensed segment per
  [D-015](../record/DECISIONS.md#d-015--data-asset-law).
  license_class: **ODbL 1.0** (data); engines are open source.
  Attribution: "© OpenStreetMap contributors"; courtesy credit to
  FOSSGIS for the hosted instances.
- **Retrieval policy:** `n/a` — and the reason is not that retrieval is
  unnecessary but that it is WRONG HERE. A travel time is computed
  from geometry; a model quoting "about 20 minutes" from a blog has no
  span that can be verified against the route actually planned. If
  both engines were lost the fallback is another OSM router (GraphHopper,
  self-hosted OSRM with the foot profile built), never rung 5a.
- Spike: `scripts/spikes/feasibility-routing.mjs` — run 2026-09-15 on
  four Rome stops (Colosseum, Pantheon, Trevi, Vatican Museums).
  Returned both 4×4 matrices, all three Valhalla profiles, the
  Valhalla tileset date, the OSRM profile-collapse finding, and the
  multimodal 400.
- Alternatives rejected: **Google Directions / Distance Matrix** — see
  [§ The Google Maps verdict](#the-google-maps-verdict); distance
  matrix results are named in ToS 3.2.3(a) as a thing that may not be
  stored. **Mapbox Directions** — NOT VETTED, and
  recorded as unvetted rather than rejected: its retention terms live
  in the Mapbox Product Terms, which this bench did not read, so no
  claim is made about them. It was not pursued because Valhalla
  already answers FE-06 at rung 1 over ODbL data with no retention
  question to resolve. **OSRM demo as primary** — rejected on the
  profile-collapse finding above; kept as the car-matrix path only.

## fx-rates

- Serves: [FE-14](FACTS.md#f-fe-14--currency-exchange-rates).
- Source: **ECB euro foreign-exchange reference rates**
  (ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml) — a central bank
  publishing once per working day around 16:00 CET. Rung 1:
  authoritative, and the publisher every commercial FX API resells.
  **frankfurter.app** is kept as an open-source mirror of the same
  data for the historical series.
- Confirmed keys (spike, 2026-09-15): the feed's `Cube time` attribute
  gives `as_of_date` directly — `2026-09-15` — and each `Cube
  currency/rate` pair gives the EUR-based rate. Every FE-14 Dictionary
  field is answered: `base_ccy`, `quote_ccy`, `rate` (computed as a
  cross-rate through EUR), `as_of_date` (read FROM THE FEED, never
  from the local clock — the derivation law's time rule).
- Grade: **A**, within the covered set.
- Coverage — **and the gap is real: 30 currencies, not all of them.**
  The spike checked a spread of destination currencies and found ISK,
  JPY, EUR, USD, THB, GBP and KRW present — and VND, MAD, EGP, PEN and
  TZS ABSENT. A destination priced in a currency outside the ECB list
  cannot be served at rung 1 by this feed, and
  [FE-07](FACTS.md#f-fe-07--cost-estimate-bands)'s `fx_link` inherits
  that gap. The tail needs a rung-2 source (a national central bank's
  own feed) vetted per destination when those destinations enter the
  demo set; that is named here as this slot's known gap rather than
  left to be discovered.
- Freshness served: daily, matching the publication cycle. The feed
  does not update at weekends, so `as_of_date` legitimately lags the
  calendar by up to three days and MUST be rendered, not hidden.
- Cost: free, no key, no registration.
- retention_rights: **store-raw**. license_class: ECB reference rates
  are published for free re-use with attribution (verified 2026-09-15
  at the eurofxref feed and the ECB's re-use notice). Attribution:
  "Source: European Central Bank". frankfurter.app adds none of its
  own.
- **Retrieval policy:** `n/a` — one fact, answered at rung 1 by a
  central bank, and a retrieved exchange rate would be strictly worse
  than the published one. For currencies OUTSIDE the ECB set the
  answer is a different rung-1 publisher (that country's central
  bank), not retrieval: a rate quoted from a page is stale by
  construction and there is no authoritative domain that would make it
  less so.
- Spike: `scripts/spikes/feasibility-fx-rates.mjs` — run 2026-09-15.
  Parsed 30 currencies from the ECB XML with `as_of_date=2026-09-15`,
  computed five cross-rate Dictionary rows (USD→ISK 121.327671,
  USD→JPY 155.004766, USD→EUR 0.866626, GBP→THB 44.892498, KRW→EUR
  0.000638), confirmed frankfurter serves a byte-identical currency
  set and EUR→JPY value (178.86), and pulled a historical series
  (2026-01-02 → 2026-01-09, 6 trading days) to prove the
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) revision series
  is obtainable for free.
- Alternatives rejected: **exchangerate.host** — now key-gated;
  returns HTTP 200 with `missing_access_key`, verified 2026-09-15.
  **Commercial FX APIs** (Fixer, CurrencyLayer, Open Exchange Rates) —
  all resell the ECB feed, all key-gated, and their free tiers
  restrict redistribution;
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) prefers the
  publisher. **Mid-market scraping** — never; and FE-14 wants
  mid-market, which the ECB publishes and a bank's retail page does not.

## cost-basis

- Serves: [FE-07](FACTS.md#f-fe-07--cost-estimate-bands).
  **BANDS ONLY.** Live quotes are
  [F-CO](FACTS.md#f-co--cost-3--source-task-v1s1t8)'s
  ([V1.S1.T8](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code))
  since
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 8, and a quote supersedes the matching band for that one item.
- Source: **CURATED bands, anchored by an open price index.** No source
  publishes this Dictionary — the spike looked and says so. What is
  open and cacheable is a RELATIVE price level: **World Bank
  PA.NUS.PPP** (api.worldbank.org, global, no key) and **Eurostat
  price level indices** (EU-only, finer). Those SCALE curated bands
  from a demo destination to an unvisited one; they are not the bands.
- Confirmed keys (spike, 2026-09-15): World Bank returns
  `indicator`, `country`, `countryiso3code`, `date`, `value` — real
  2023 PPP conversion factors of Iceland 137.850321, Italy 0.601949,
  Japan 93.831737, Thailand 10.633894 (LCU per international $).
  Eurostat's JSON-stat endpoint answered 200 with 39 countries in its
  `geo` dimension; the spike's unfiltered query returned the index
  BASELINE (100) for every one of them, so Eurostat is confirmed
  REACHABLE but its per-category slice is not yet confirmed — it needs
  an explicit `time` and `ppp_cat` selection, and is recorded here as
  reachable-but-unproven rather than as a working source.
- Grade: **C** — curated and derived, which is exactly what
  [ENGINE §7](../ENGINE.md#7-render--honest-pixels) grades C and
  renders as a labeled estimate. `tourist_city_fees` and
  `tipping_norm` reach **B** when retrieved from a city-government
  domain.
- Freshness served: quarterly for the bands; the PPP anchor updates
  annually.
- Coverage: curated for the demo destinations; PPP-scaled globally at
  country granularity, which is coarser than the city granularity
  FE-07 wants — a real fidelity caveat, and the reason this slot is C
  rather than B.
- Cost: free (World Bank, Eurostat). Nothing is bought.
- retention_rights: **store-raw** for the indices; the bands are ours.
  license_class: World Bank **CC-BY-4.0**; Eurostat **CC-BY-4.0**;
  curated bands are repo-licensed. Attribution: World Bank and
  Eurostat on any rendered index-derived figure.
- **Retrieval policy** — the row SPLITS, because two of this fact's
  fields behave differently from the rest:
  - `tourist_city_fees` and `tipping_norm` —
    - allowed domains + grade: the city or regional government's own
      site, and the national tax or tourism authority (**B**,
      government body); the operator's own booking or information page
      for a fee it charges (**B**, operator); established press
      reporting a fee change and naming the authority (**B**);
      travel-guide sites (**C**).
    - quote required: **yes** for `tourist_city_fees` — a per-night
      city tax is a number a traveller is charged, and an unquoted one
      is a wrong invoice. **no** for `tipping_norm`, a coarse class.
    - freshness window: 1 year, and re-checked at plan time for
      `tourist_city_fees`, which changes on municipal budget cycles.
  - the five `*_band` fields and `fx_link` — `n/a`. They are DERIVED,
    not retrieved: bands come from the curated table scaled by the PPP
    anchor, and `fx_link` points at
    [FE-14](FACTS.md#f-fe-14--currency-exchange-rates). There is no
    page that states "the meal band in Rome is X", so there is no span
    to quote; a retrieved band would be a model's summary of blog
    prices wearing a receipt.
- Spike: `scripts/spikes/feasibility-cost-basis.mjs` — run 2026-09-15.
  Probed Numbeo (key-gated), Eurostat (reachable, baseline-only
  result), World Bank (four real PPP factors returned) and printed the
  negative verdict above.
- Alternatives rejected: **Numbeo** — the obvious cost-of-living
  dataset. What WAS verified 2026-09-15 is that its API is key-gated:
  the spike's unkeyed call was refused. Its licence terms were NOT
  read in this bench, so this entry makes no claim about them; it is
  recorded as key-gated-and-unvetted, and would need a terms read
  before any adoption. **Scraped menu and
  admission prices** — forbidden outright by
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 8 ("never a scraped price"). **Expedia / Booking rate APIs** — not
  vetted, and not needed: booking is out of V1 scope entirely, and a
  rate API answers [F-CO](FACTS.md#f-co--cost-3--source-task-v1s1t8)'s
  question, not this one's.

## venue-reputation

- Serves: [FE-13](FACTS.md#f-fe-13--venue-reputation-).
- Source: **Wikimedia pageviews REST API**
  (wikimedia.org/api/rest_v1/metrics/pageviews) as an open, cacheable
  PROXY, joined to venues through OSM's `wikidata` tag. Rung 3: a
  signal, not a measurement of reputation.
- Confirmed keys (spike, 2026-09-15): `items[].project`, `.article`,
  `.granularity`, `.timestamp`, `.access`, `.agent`, `.views` —
  daily series, 181 days returned per article.
- Grade: **C** for `fame_level`, and **NOT SERVED** for `momentum`. The
  spike separates these honestly. Fame discriminates by orders of
  magnitude over 180 days — Colosseum 591,799 views, Pantheon 491,340,
  Trevi Fountain 248,236, Basilica of San Clemente 1,228, Centrale
  Montemartini 509 — which maps cleanly onto FE-13's
  iconic/classic/known/niche/hidden scale. Momentum does NOT: the same
  run returned ratios of 0.83, 0.85, 0.81, 0.94 and 1.13, reading the
  Colosseum as "fading" when what it is measuring is the end of Rome's
  summer. A seasonal artifact presented as momentum would be a wrong
  recommendation, so `momentum` falls to FE-13's other bases (curated,
  or retrieval at 5a) and carries
  [CC-07](FACTS.md#f-cc-07--trending-signal-computed)'s lag label per
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 9 — "rising, as of last week", never a bare "trending now".
- `evidence_basis` is therefore **signals** for fame and
  **curated** or **LLM** for momentum — never "curated" for a
  pageview-derived value.
- Freshness served: monthly recompute; the API lags roughly two days.
- Coverage: every venue with an English Wikipedia article, which is
  good for icons and thin for exactly the hidden gems the offbeat dial
  ([TP-47](FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012))
  wants. That asymmetry is the slot's honest weakness: the proxy is
  most confident where it is least needed.
- Cost: free, no key.
- retention_rights: **store-raw**. license_class: Wikimedia REST
  metrics are **CC0** (the pageview counts; article TEXT is CC-BY-SA
  and is not used here). Attribution: courtesy credit to Wikimedia.
- **Retrieval policy** — governs `momentum` and the corroboration of
  `fame_level`; the pageview series itself is fetched, not retrieved:
  - allowed domains + grade: established press with a DATED article —
    a city paper's restaurant column, a national broadsheet's travel
    desk (**B**, established press); the venue operator's own site for
    awards and openings (**B**, operator); a government tourism body
    (**B**); food and travel blogs with a visible publication date
    (**C**). Review platforms — Google, TripAdvisor, Yelp, Foursquare
    — are OUT OF BOUNDS, on terms, not on quality.
  - quote required: **yes**, and the span must carry a DATE. A
    momentum claim without a date is not a momentum claim, and this is
    the field where model memory is most tempting and least
    acceptable.
  - freshness window: 90 days for `momentum` — past that the signal is
    dropped, not aged, because
    [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
    ruling 9 requires the label to carry the lag and a lag beyond a
    season is not a trend. 1 year for `fame_level`.
- Spike: `scripts/spikes/feasibility-venue-reputation.mjs` — run
  2026-09-15 over five Rome venues chosen to span the fame scale,
  window 2026-03-17 → 2026-09-13. Returned the volumes and ratios
  quoted above and printed the momentum-is-seasonal finding.
- Alternatives rejected: **Google Places ratings / review counts** —
  see [§ The Google Maps verdict](#the-google-maps-verdict).
  **TripAdvisor Content API**, **Yelp Fusion** and
  **Foursquare Places** — NOT VETTED CLAUSE BY CLAUSE, and said
  plainly rather than asserted: each is partner- or key-gated behind
  an application this bench did not make, so their retention terms
  were not read and no quotation of them appears here. They were not
  pursued because the one platform whose terms WERE read in full
  refuses the asset layer outright, and because a review platform's
  ratings are its product — the prior that the others restrict
  retention too is strong, but a prior is not a vetting, and if one of
  them is ever wanted its terms get their own read.
  The pageview proxy is chosen because it is weak-but-ownable rather
  than strong-but-rented.

## money-saving-tips

- Serves: [FE-15](FACTS.md#f-fe-15--money-saving-tips-) — new from
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 11.
- Source: **RETRIEVAL ONLY, rung 5a. There is no feed and there is no
  candidate to reject** — city passes, museum free days, combination
  tickets and published coupons are announced on operator and
  city-government pages and nowhere else. This entry vets the PATH, not
  a product.
- Confirmed keys (spike, 2026-09-15): the provenance record the path
  produces — `{url, fetched_at, domain_grade, quote_required}` — was
  written for the one target that yielded a verifiable span. FE-15's
  own Dictionary fields (`tip_id`, `kind`, `applies_to`,
  `saving_est_band`, `conditions_note`, `valid_until`, `provenance`)
  are composed by the retrieval module
  ([V1.S3.T8](../ROADMAP.md#v1s3--engine-core--two-families-deep)) from
  the quoted span; none of them is a payload key of any API.
- Grade: **B** when the span comes from an operator or city-government
  domain, **C** from anywhere else in the allowed list, **never D** —
  see the quote rule below.
- **Freshness served: A COUPON IS A FACT WITH A HALF-LIFE.** Every tip
  carries `valid_until` and an expired tip is DROPPED, never rendered
  stale. Window: monthly, and daily inside the trip window.
- Coverage, measured — **the path is real and it fails more often than
  it succeeds.** The spike fetched four allowed-domain targets and got
  2 of 4 reachable and 1 of 4 quotable. `atac.roma.it`'s tourist-ticket
  page returned HTTP 404 on a plausible URL, and
  `parisjetaime.com` returned HTTP 403 to a scripted request. That is
  the honest operating picture for this slot: guessed URLs 404 and
  operator sites bot-block, so
  [V1.S3.T8](../ROADMAP.md#v1s3--engine-core--two-families-deep) needs
  a SEARCH step and a browser-grade fetcher, not a bare `fetch`. Named
  here as this slot's blocking dependency.
- Cost: the retrieval module's model and fetch cost; no licence fee.
- retention_rights: **cache-only, and that is enough here** — what is
  stored is our own structured tip record plus the quoted span and its
  url, which is quotation for attribution, not republication of a
  database. license_class: per-domain, unknown in advance; the span is
  kept short and always attributed to its url.
- **Retrieval policy** — this slot is nothing but its policy, and it
  governs the one fact whole:
  - allowed domains + grade: the transport operator or museum's own
    site (**B**, operator); the city or regional government and its
    official tourism board (**B**, government body); the transit
    authority publishing a pass (**B**, transit authority);
    established press reporting a scheme and naming its issuer (**B**);
    reputable travel-guide sites (**C**). Coupon-aggregator and
    affiliate sites are OUT OF BOUNDS — their incentive is the sale,
    and a discount that does not exist is worse than no discount.
  - quote required: **yes**, absolutely, and the span must contain the
    CONDITIONS as well as the saving. A value with no verifiable span
    is discarded, never downgraded — so this slot HAS NO RUNG 5B. A
    remembered coupon is the exact defect
    [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
    ruling 11 named when it dated this fact.
  - freshness window: 30 days, and 1 day inside the trip window;
    `valid_until` overrides both — past it the tip is dropped.
- Spike: `scripts/spikes/feasibility-retrieval-probe.mjs` — run
  2026-09-15. Fetched four allowed-domain targets, extracted one
  verifiable span with its provenance record, and recorded the 404 and
  the 403 verbatim rather than retrying until something worked.
- Alternatives rejected: **coupon aggregators and affiliate feeds**
  (Groupon, Klook, GetYourGuide) — commercial incentive plus
  booking-partner terms; out of bounds on both counts.
  **Model memory** — refused by the quote rule above.

## conduct-norms

- Serves: [FE-16](FACTS.md#f-fe-16--dress-code--conduct-norms-) — new
  from
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 11.
- Source: **RETRIEVAL, rung 5a, plus a small curated table** for the
  demo destinations' headline venues. As with FE-15 there is no feed
  to vet: a basilica's covering rule lives on the basilica's own page.
- Confirmed keys (spike, 2026-09-15): same provenance record as
  above. FE-16's Dictionary (`norm_id`, `applies_to`, `category`,
  `requirement_class`, `note`, `provenance`) is composed from the
  quoted span; `requirement_class` is the field that decides whether a
  placement is invalidated, and it is the one that must come from the
  operator rather than a guide.
- Grade: **B** from the operator's own site or a government tourism
  body, **C** from a travel guide.
- Freshness served: yearly; **re-checked at plan time for any venue
  whose `requirement_class` is `required`**, because that is the class
  that can invalidate an otherwise perfect placement.
- Coverage: same measured picture as FE-15 — 2 of 4 targets reachable,
  1 of 4 quotable in the spike. Notably `vatican.va` redirected to
  `basilicasanpietro.va` and served 8,054 characters of text with NO
  dress-code span matching any of four needles, so the run recorded a
  DISCARD rather than inventing a covering rule. That is the policy
  behaving correctly and it is the reason the number is reported
  rather than smoothed.
- Cost: the retrieval module's cost; no licence fee.
- retention_rights: **cache-only** plus our own curated table.
  license_class: per-domain; spans are short and attributed.
- **Retrieval policy:**
  - allowed domains + grade: the venue operator's own site — the
    basilica, temple, museum or restaurant (**B**, operator); the
    national or city government tourism body and any relevant ministry
    (**B**, government body); established press (**B**); established
    travel guides (**C**). Crowd-sourced forums and review platforms
    are OUT OF BOUNDS: a conduct norm reported by a visitor is a
    visitor's impression, and FE-16 is consumed as a hard placement
    constraint.
  - quote required: **yes** where `requirement_class` is `required` —
    "shoulders and knees must be covered" is a rule a traveller is
    turned away for, and it is quotable or it is not a rule.
    **no** where the class is `advisory`, which is a norm rather than
    a requirement.
  - freshness window: 1 year, and plan-time re-check for the
    `required` class.
- Spike: `scripts/spikes/feasibility-retrieval-probe.mjs` — run
  2026-09-15; the two FE-16 targets are the first two in its target
  list. One quotable span (japan.travel, manners/etiquette), one
  correct discard (vatican.va → basilicasanpietro.va, no matching
  span).
- Alternatives rejected: **model memory alone** — grade D, refused for
  the `required` class by the quote rule; a wrongly remembered dress
  code sends a traveller to a door they are turned away from.
  **Crowd-sourced etiquette wikis and forums** — out of bounds above.

---

## The Google Maps verdict

[D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 17 put Google Maps grounding / Places on this bench, as a
candidate registry and affordance source for
[FE-01](FACTS.md#f-fe-01--destination-registry),
[FE-02](FACTS.md#f-fe-02--destinationactivity-affordances-) and
[FE-03](FACTS.md#f-fe-03--venue--poi-records). The offer is real: over
250 million places, and a licensable grounding API.

**VERDICT: REJECTED for the asset layer; ADOPTED for deep-linking
only.**

**The clause that decides it** — Google Maps Platform Service Specific
Terms **§10.3.1**, read at cloud.google.com/maps-platform/terms/maps-service-terms
on 2026-09-15:

> Customer will not, and will not permit its End Users or
> third-parties to … **attempt to extract or otherwise separate Google
> Maps Content from the Grounded Output**

That is a description of
[D-015](../record/DECISIONS.md#d-015--data-asset-law)'s asset layer.
Roam's store is structured, bitemporal, append-only fact rows lifted
out of a response and kept — extraction and separation, by
construction. The thirty-day permission in **§10.2.2** does not rescue
it:

> As a limited exception … to the prohibition on caching or storing
> Google Maps Content, Customer may cache Grounded Output for up to
> **thirty (30) consecutive days solely for the purpose of evaluating
> and optimizing the performance or display** of the Grounded Output
> for the Customer Application.

A debugging-and-rendering allowance is not a data asset, and thirty
days is shorter than the revision series
[D-015](../record/DECISIONS.md#d-015--data-asset-law) exists to keep.

**Plain Places is refused one step earlier**, by Maps Platform Terms of
Service **§3.2.3(a)**, which names this family's exact payload:

> Customer will not export, extract, or otherwise scrape Google Maps
> Content for use outside the Services. For example, Customer will
> not: (i) pre-fetch, index, store, reshare, or rehost Google Maps
> Content outside the services; (ii) bulk download Google Maps tiles,
> Street View images, geocodes, directions, distance matrix results,
> roads information, **places information**, elevation values, and
> time zone details; (iii) **copy and save business names, addresses,
> or user reviews**

And **§3.2.3(c)** forbids creating content from Maps Content, listing
among its examples "use latitude/longitude values from the Places API
as an input for point-in-polygon analysis" — which is what
[FE-12](FACTS.md#f-fe-12--area-profiles-)'s area assignment does — and
using Maps Content "to train, test, validate or fine-tune" models.

The rest of the standard spine, for the record, since a verdict is a
vetting and carries the same fields as an adopted entry:

- Serves (if adopted): [FE-01](FACTS.md#f-fe-01--destination-registry),
  [FE-02](FACTS.md#f-fe-02--destinationactivity-affordances-),
  [FE-03](FACTS.md#f-fe-03--venue--poi-records) — and, tempting most
  of all, [FE-04](FACTS.md#f-fe-04--opening-hours).
- Source: Google Maps Platform Places API, and Maps Grounding Lite /
  Grounding with Google Maps.
- Confirmed keys: NOT SPIKED, deliberately — calling either needs a
  billed key, and under
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) the answer does
  not depend on what they return but on what may be KEPT. The spike
  reads the terms instead.
- Grade (if adopted): **A** on data quality. Not the binding
  constraint.
- Freshness served: excellent, and not in dispute — Google's places
  data is fresher and denser than OSM's, particularly for opening
  hours. This is the real cost of the rejection and it is stated
  plainly rather than minimised.
- Coverage: over 250 million places, global; better than OSM
  essentially everywhere outside Europe.
- Cost / quota: pay-as-you-go per request. Maps Grounding Lite is
  documented at 300 queries per minute per project for `search_places`,
  with a demo key for prototyping; the Gemini-side grounding tool bills
  per grounded prompt.
- retention_rights: **NONE** beyond the two carve-outs below —
  30 days for Grounded Output, evaluation-and-display only, and
  `place_id` indefinitely. license_class: **proprietary**, per the
  Maps Platform Terms of Service and Service Specific Terms; not an
  open data licence. Attribution: required, including the Google logo
  and source links.

**None of the quality matters**, because
[D-015](../record/DECISIONS.md#d-015--data-asset-law) makes retention
a PRIMARY selection criterion and its own rationale names
"Places-style no-caching rules" as the hazard it was written against.

**What survives.** Service Specific Terms **§3** permits ID caching
indefinitely:

> Customer may cache the Google ID values from the Services that
> return such field and allow caching … For example, Customer may
> cache (a) `place_id` from Places API, Directions API, Geolocation
> API and Routes API

So a `place_id` may be stored as an external cross-reference on an
OSM-sourced venue, to power an "open in Google Maps" deep link. **That
is a link, not a fact**: it carries no coverage duty, no freshness
duty and no grade, and nothing in the engine may read a claim out of
it.

- **Retrieval policy:** `n/a`, and for an unusual reason worth stating
  plainly — not because the domain is unauthoritative but because it
  is CONTRACTUALLY OUT OF BOUNDS as a stored source. `maps.google.com`
  and Places responses may not appear in any allowed-domain list in
  this file. Where a Google-surfaced fact is wanted, the answer is to
  retrieve it from the OPERATOR'S OWN SITE, which is grade B anyway
  and carries no retention restriction.
- Spike: `scripts/spikes/feasibility-maps-grounding.mjs` — run
  2026-09-15. It fetches both governing terms documents live and greps
  the six deciding clauses out of them, printing each verbatim;
  6 of 6 were located. It deliberately does not call Places or the
  grounding tool, because the answer does not depend on what they
  return — it depends on what may be kept. Re-running it is how this
  verdict gets re-vetted when the terms change.
