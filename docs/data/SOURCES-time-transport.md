---
type: sources
title: Source registry — Time & transport
status: living
---

# Source registry — Time & transport (V1.S1.T5)

One entry per Time & transport source slot
([FACTS "T2–T6 assignment map"](FACTS.md#t2t6-assignment-map)): the
vetted source serving each slot's facts, with its confirmed keys,
grade, freshness, coverage, cost, license, retrieval policy and spike.
Format and field order follow the weather entries already shipped in
[SOURCES.md](SOURCES.md), which
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
will consolidate this file into.

**THE GRADE SCALE IS NOT HERE.** Its one canonical home is
[ENGINE §7](../ENGINE.md#7-render--honest-pixels).

**Every entry carries a RETRIEVAL POLICY** — allowed domains and their
grade, whether a quote is required, and the freshness window — defined
in
[FACTS § How to read this file](FACTS.md#how-to-read-this-file) and
required of every entry by
[D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 3. The policy is PER FACT; where every fact in a slot shares
one policy the row says so explicitly. A slot that cannot reach rung
5a writes `n/a` AND SAYS WHY.

**GRADE B IS DEFINED BY DOMAIN CLASS.**
[ENGINE §3](../ENGINE.md#3-acquire--get-the-facts) fixes the classes —
the operator itself, a government body, a transit authority, or
established press. For this family that means THE CARRIER, THE AIRPORT
OPERATOR, or THE TRANSIT AUTHORITY. An aggregator, a flight-tracking
site, a travel blog and an airline trade body are **C**, however
good. No row below promotes a domain outside those classes to B
without saying, in the row, which class it is claiming and why.

## What this family cannot do, stated first

This is the most data-gated family in the inventory and
[FACTS](FACTS.md) already marks
[TT-02](FACTS.md#f-tt-02--route-existence-) and
[TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) ⚠⚠. The vetting
confirms it. Three findings govern everything below:

1. **There is no free, licensable, global source of flight routes or
   schedules.** Every candidate API answered HTTP 401 unauthenticated
   (spike §1 of
   [`time-transport-flight-schedules.mjs`](../../scripts/spikes/time-transport-flight-schedules.mjs)).
   The cheapest licensed tier that includes both Airline Routes and
   Flight Schedules is aviationstack Basic at **$49.99/month**
   ($44.99 billed yearly, 10,000 requests/month), read off the
   vendor's pricing page during the spike run. The free tier is
   explicitly *Non-Commercial Use* and does not include either
   product.
2. **The only free bulk route dataset is nine and a half years
   stale.** OpenFlights `routes.dat` was last modified
   **2017-02-02** and still carries 798 Air Berlin routes, 210
   Monarch routes and 268 Flybe routes — three carriers that no
   longer exist. It is a weak prior, never an answer.
3. **Automated fetches of carrier sites are frequently blocked.**
   Lufthansa and Schiphol returned HTTP 403 to a plain request while
   Heathrow and Narita returned 200. Rung-5a retrieval for this
   family therefore depends on the retrieval module
   ([V1.S3.T8](../ROADMAP.md#v1s3--engine-core--two-families-deep))
   using a real search-and-fetch path, not `fetch()`; a policy that
   assumes raw fetching would be a policy that silently fails.

**The honest V1 answer for [TT-02](FACTS.md#f-tt-02--route-existence-)
and [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) is a retrieval
policy plus a labeled grade, not a feed.** Whether to buy a schedule
feed is a founder call, raised as a `BLOCKED:` comment on the task's
PR.

## Time & transport slots (V1.S1.T5)

### airports

- Serves: [TT-01](FACTS.md#f-tt-01--airport-registry).
- Source: OurAirports open data
  (`davidmegginson.github.io/ourairports-data/airports.csv` — the
  distribution host that `ourairports.com/data/` itself links to for
  every CSV, verified 2026-09-15). Rung 1: a global open dataset,
  complete by construction for the registry fields.
- Confirmed keys (spike, all present): `id, ident, type, name,
  latitude_deg, longitude_deg, elevation_ft, continent, iso_country,
  iso_region, municipality, scheduled_service, icao_code, iata_code,
  gps_code, local_code, home_link, wikipedia_link, keywords`.
  Companion files `countries.csv`, `regions.csv`,
  `airport-frequencies.csv` and `runways.csv` all return HTTP 200.
- Grade: **A for the registry** (IATA/ICAO code, geocode, country,
  region, municipality, scheduled-service flag — every field
  [TT-01](FACTS.md#f-tt-01--airport-registry) names except one).
  **C for the multi-airport region grouping**, which
  [TT-01](FACTS.md#f-tt-01--airport-registry) asks for by name and
  this dataset does not carry as a field. The spike measured the gap
  rather than assuming it:
  - `municipality` is a city NAME, not a metro grouping. Filtering it
    for "London" returns four airports, one of which is **YXU in
    Ontario, Canada**. Filtering for "Paris" returns **zero**,
    because CDG's municipality string is
    `"Paris (Roissy-en-France, Val-d'Oise)"`.
  - The IATA metropolitan code (LON, PAR, TYO, NYC, OSA) is **not a
    row and not a column** — it appears only inside the free-text
    `keywords` field, and only sometimes: `keywords` yields 5
    airports for LON and 5 for NYC, but **1 for PAR**, because ORY's
    `keywords` field is empty and BVA's never mentions Paris.
  - Consequence: a curated metro-grouping overlay is required for
    multi-airport regions. It is small (tens of metros for V1) and
    versioned in-repo, and it grades **C** as curated data.
- Freshness served: quarterly per
  [TT-01](FACTS.md#f-tt-01--airport-registry); the source itself is
  updated far more often (`Last-Modified: Tue, 15 Sep 2026 01:53:58
  GMT` at spike time).
- Coverage: 86,080 rows across 247 ISO country codes; 9,055 carry an
  IATA code; 4,335 have `scheduled_service=yes`; **4,133 have both** —
  that last number is the addressable airport universe for V1.
  Breakdown by type: 42,731 small, 23,214 heliports, 13,520 closed,
  4,106 medium, 1,174 large, 1,273 seaplane bases, 62 balloonports.
- Cost: free, no key, no rate limit (static file over CDN; 12.7 MB,
  fetched and parsed in 638 ms).
- retention_rights: store-raw. license_class: **public domain**
  (verified 2026-09-15 at `ourairports.com/data/`, which states:
  "All data is released to the Public Domain, and comes with no
  guarantee of accuracy or fitness for use"). Attribution: none
  required; courtesy credit to OurAirports. Public domain is the
  cleanest possible outcome for
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) — no
  share-alike, no segmentation duty.
- Retrieval policy — **per fact, and this slot serves one fact**, so
  one row. It exists only for the metro-grouping gap above; the
  registry fields are rung 1 and never retrieved.
  - allowed domains + grade: the AIRPORT OPERATOR's own site (**B** —
    the operator class; e.g. Aéroports de Paris publishes which
    airports it operates for Paris, which is exactly the ORY gap) ·
    the national CIVIL AVIATION AUTHORITY or transport ministry
    (**B** — government body) · IATA's own code registry (**B**,
    claiming the OPERATOR class over the code system it owns and
    publishes — IATA is authoritative about its own metropolitan-area
    codes, and about nothing else here; it is **not** treated as
    authoritative about airlines, which would be a trade body
    describing its members) · any other domain, including travel
    wikis and aggregators (**C**).
  - quote required: **yes** — a claim that two airports serve one
    city is a claim about someone else's published grouping.
  - freshness window: 1 year. Metro groupings change on the scale of
    airport openings, not days.
- Spike:
  [`scripts/spikes/time-transport-airports.mjs`](../../scripts/spikes/time-transport-airports.mjs)
  — run 2026-09-15. Returned 86,080 rows, the 19 columns above, the
  four coverage counts, and the named metro-grouping misses (ORY,
  BVA, NRT, EWR verified individually).
- Alternatives rejected: **OpenFlights airports.dat** (smaller — its
  own page says "over 10,000 airports" against OurAirports' 86,080 —
  and ODbL where OurAirports is public domain; its own site points
  readers at OurAirports); **commercial airport APIs** (cost with no
  advantage for a static registry); **Wikidata** (good metro
  groupings, but SPARQL-endpoint fragility and uneven completeness
  for a field that a small curated table solves outright).

### flight-routes

- Serves: [TT-02](FACTS.md#f-tt-02--route-existence-) ⚠⚠.
- Source: **no licensable live feed at any free tier.** The slot is
  served by rung-5a retrieval from carrier and airport published
  timetables, with OpenFlights `routes.dat` retained ONLY as a
  negative-direction prior (see grade). This is the ladder working as
  designed, not a source.
- Confirmed keys (spike): OpenFlights `routes.dat` is positional CSV —
  `airline, airlineID, src, srcID, dst, dstID, codeshare, stops,
  equipment` — 67,663 rows, 37,595 distinct directed airport pairs,
  568 carriers, 67,652 rows with `stops=0`. The live APIs returned no
  keys because none returned data: aviationstack HTTP 401
  (`missing_access_key`), AeroDataBox HTTP 401, FlightAware AeroAPI
  HTTP 401. Amadeus Self-Service could not be reached at all from the
  spike host (`test.api.amadeus.com` → `ENOTFOUND`) and is therefore
  recorded as **unvetted**, not as rejected.
- Grade: **C**, with a **B ceiling on the subset of routes whose
  operator page is reachable and quotable**, and **D** where neither
  applies. Reasoning, stated plainly because this is the grade the
  family gets judged on: a rung-5a retrieval from a carrier's or
  airport's own timetable is B by domain class, but the spike showed
  reachability is uneven (Heathrow and Narita HTTP 200; Schiphol and
  Lufthansa HTTP 403), so B cannot be claimed globally. **V1 cannot
  serve global route existence above C.**
  - OpenFlights is **not** graded B or C as a value source. Its last
    commit touching `data/routes.dat` is **2017-02-02** — 3,512 days,
    9.6 years — and it still carries **798 Air Berlin** (ceased
    2017), **210 Monarch/ZB** (ceased 2017) and **268 Flybe** (ceased
    2020) routes. A dataset that flies dead airlines cannot assert
    that a route EXISTS. It may only support the weaker, ageing claim
    that a pair *has historically had* service, which is a prior for
    ranking candidates, never a rendered fact.
- Freshness served: monthly per
  [TT-02](FACTS.md#f-tt-02--route-existence-) — achievable for
  retrieved values, not for the OpenFlights prior, which is frozen.
- Coverage: retrieval coverage follows whichever airports and
  carriers publish reachable timetables — good for large European and
  Asian hubs, thin for secondary airports and much of Africa and
  Central Asia. The OpenFlights prior covers 37,595 pairs as of 2017.
- Cost: free at rung 5a (retrieval module call cost only). The
  licensed alternative is **aviationstack Basic, $49.99/month**
  ($44.99 billed yearly) for 10,000 requests/month including Airline
  Routes and Flight Schedules; Professional is $149.99/month for
  50,000; Business $499.99/month for 250,000. Figures read from
  `aviationstack.com/product` on 2026-09-15 during the spike run.
- retention_rights: for retrieved values, store-raw with provenance
  per [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts) (`{url,
  quoted span, fetched_at, domain grade}`). For the OpenFlights
  prior: license_class **ODbL + Database Contents License** (verified
  2026-09-15 at `openflights.org/data.php`: "The OpenFlights Airport,
  Airline, Plane and Route Databases are made available under the
  Open Database License"). ODbL share-alike attaches to publicly
  released derived databases, so under
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) it is usable
  only as a LICENSE-SEGMENTED COLLECTIVE layer — never blended into
  the proprietary derivative layer. Attribution: OpenFlights, with a
  free-license duty on any public derived database.
- Retrieval policy — **per fact; this slot serves one fact**, so one
  row. This is the row
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  amended [TT-02](FACTS.md#f-tt-02--route-existence-) to require.
  - allowed domains + grade: the CARRIER's own site (**B** —
    operator; a carrier is authoritative about which routes it flies)
    · the AIRPORT OPERATOR's own site, including its published
    destination map and timetable (**B** — operator) · the national
    CIVIL AVIATION AUTHORITY (**B** — government body) ·
    ESTABLISHED PRESS reporting a route launch or cut and naming the
    carrier (**B** — press) · any other domain, explicitly including
    route-mapping sites, flight-tracking sites, aggregators and
    travel forums (**C**). An airline trade body is **C**: it
    describes its members rather than operating the service.
  - quote required: **yes**. A route claim with no span at the
    fetched url is discarded, not downgraded — "does this flight
    exist" is the kind of claim a hallucination is most likely to
    invent, and
    [TT-02](FACTS.md#f-tt-02--route-existence-) feeds Suggest's
    reachability gate.
  - freshness window: 30 days, tightening to 7 days inside the trip
    window. Schedules change seasonally and routes are cut with
    weeks of notice.
- Spike:
  [`scripts/spikes/time-transport-flight-routes.mjs`](../../scripts/spikes/time-transport-flight-routes.mjs)
  — run 2026-09-15. Returned the OpenFlights row/pair/carrier counts,
  the 2017-02-02 last-commit date via the GitHub API, the
  defunct-carrier route counts, the four unauthenticated API
  responses, and HTTP 200 from three airport-operator pages.
- Alternatives rejected: **OpenSky Network** (ADS-B observations
  would reveal which pairs are actually flown — but its Terms of Use,
  fetched and quoted in section 3 of the
  [flight-schedules spike](../../scripts/spikes/time-transport-flight-schedules.mjs)
  on 2026-09-15, license the data "solely for the purpose of
  non-profit research and non-profit education" and require a written
  license for "any use by a for-profit or commercial entity". A
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) disqualifier
  regardless of quality); **scraping carrier sites** (ToS, and the
  403s show it would fail anyway); **OAG / Cirium** (the industry
  schedule sources, enterprise-priced and quote-gated — revisit only
  if [ROADMAP](../ROADMAP.md) budgets a schedule feed).

### flight-schedules

- Serves: [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) ⚠⚠.
- Source: **none free.** Same gate as
  [flight-routes](#flight-routes) and harder, because
  [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) needs
  DEPARTURE/ARRIVAL TIME BANDS and DURATIONS per route, not merely
  existence. Served by rung-5a retrieval from airport and carrier
  timetable pages.
- Confirmed keys (spike): none — every schedule endpoint probed
  returned HTTP 401. aviationstack `/timetable` and `/flightsFuture`:
  `missing_access_key`. AeroDataBox: `Invalid API key`. FlightAware
  AeroAPI: `INVALID_API_KEY`. The only endpoint that returned a
  payload was OpenSky `/states/all` (live ADS-B positions), which
  answers a different question and is licence-disqualified anyway.
- Grade: **C where an airport or carrier timetable page is reachable
  and quotable, D otherwise.** Red-eye identification
  ([TP-08](FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)'s
  add-a-night rule) needs departure and arrival CLOCK TIMES, which is
  the most expensive thing on this page to obtain honestly. **This is
  the one slot V1 genuinely cannot serve at a useful grade without
  spending money**, and the entry says so rather than implying a
  feed exists.
  - Why C rather than B even on a reachable operator page: an airport
    departures board is authoritative for TODAY, not for the
    "typical time bands" [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-)
    actually asks for. Deriving a typical band from a single day's
    board is a DERIVATION on top of a retrieval, and
    [ENGINE §7](../ENGINE.md#7-render--honest-pixels) grades derived
    values C. A published seasonal timetable PDF from the carrier
    would reach B; those are inconsistently available.
- Freshness served: weekly–monthly per
  [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-).
- Coverage: whatever the retrieval module can reach. The spike found
  Heathrow (200) and Narita (200) reachable, Schiphol (403) and
  Lufthansa (403) blocked — roughly half the sample, which is the
  honest expectation to set.
- Cost: free at rung 5a. **A licensed feed costs $49.99/month at
  entry** (aviationstack Basic, 10,000 requests/month, Flight
  Schedules and Future Flight included), read from the vendor page
  2026-09-15. At V1 demo volumes with the cache-heavy doctrine this
  is the cheapest credible upgrade in the whole family, and it would
  move both
  [TT-02](FACTS.md#f-tt-02--route-existence-) and
  [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) at once.
- retention_rights: retrieved values store-raw with provenance.
  **aviationstack, if bought, needs its retention terms re-read
  before caching** — its Terms (read 2026-09-15) contain no "cache"
  or "caching" language at all, and state that content "may not be
  redistributed" and that reproduction or redistribution not in
  accordance with the License Agreement is "expressly prohibited".
  Internal caching is probably fine and redistribution is certainly
  not, but *probably* is not a
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) clearance:
  **the purchase decision must include a written confirmation of
  retention rights.** license_class: proprietary, unresolved.
- Retrieval policy — **per fact; this slot serves one fact**, so one
  row. Amended into
  [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) by
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state).
  - allowed domains + grade: the CARRIER's own published timetable
    (**B** — operator) · the AIRPORT OPERATOR's own departures /
    arrivals board or seasonal timetable (**B** — operator) · the
    national CIVIL AVIATION AUTHORITY (**B** — government body) · any
    other domain, including flight-tracking and booking aggregators
    (**C**). Note that a B-graded DOMAIN can still yield a C-graded
    VALUE here, per the grade note above: the domain class sets the
    ceiling, the derivation sets the floor.
  - quote required: **yes**. A departure time with no span at the
    fetched url is discarded. A fabricated flight time is the single
    most damaging error this family can make — it is the input to the
    backward-chained leave-time chain.
  - freshness window: 7 days inside the trip window, 30 days outside
    it.
- Spike:
  [`scripts/spikes/time-transport-flight-schedules.mjs`](../../scripts/spikes/time-transport-flight-schedules.mjs)
  — run 2026-09-15. Returned five unauthenticated API responses (four
  401s, one OpenSky 200), the live aviationstack price table, quoted
  licence text from the OpenSky and aviationstack terms pages, and
  the four operator-page status codes.
- Alternatives rejected: **OpenSky** (non-profit-research-only
  licence, quoted above — and it observes actual flights rather than
  publishing schedules); **scraping booking engines** (ToS, fragility,
  and [ROADMAP V1](../ROADMAP.md#v1--the-demo--active) refuses live
  fare scraping outright); **deriving bands from OpenFlights
  `equipment` codes** (the dataset is 9.6 years stale and carries no
  times at all).

### tz-data

- Serves: [TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift).
- Source: the **IANA time zone database, bundled inside Node's ICU** —
  no network call and no dependency for the computation itself. The
  one network step, lat/lon → IANA zone name, uses the Open-Meteo
  endpoint already vetted for the weather family
  ([SOURCES §weather-forecast](SOURCES.md#weather-forecast)). Rung 3:
  computed, exactly as
  [TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift) types it.
- Confirmed keys (spike): `process.versions.tz = 2025c`,
  `process.versions.icu = 78.2`,
  `Intl.supportedValuesOf("timeZone")` = **418 zones**. From
  Open-Meteo: `timezone`, `timezone_abbreviation`,
  `utc_offset_seconds`.
- Grade: **A.** The only fact in this family that is fully,
  globally, exactly obtainable. Three independent correctness checks
  passed in the spike:
  - **DST transition**: `Europe/London` returns `+00:00` at
    2026-03-28T12:00Z and `+01:00` at 2026-03-30T12:00Z — the
    transition is honoured, which a static offset table would get
    wrong twice a year.
  - **Non-integer offsets**: `Asia/Kolkata +05:30`,
    `Asia/Kathmandu +05:45`, `Australia/Eucla +08:45`,
    `Pacific/Chatham +12:45` — all correct, which a
    whole-hour-offset model would get wrong permanently.
  - **Cross-check**: for Tokyo, Kathmandu, Reykjavik and Adelaide the
    ICU-computed offset and the Open-Meteo `utc_offset_seconds`
    **agreed in all four cases**.
  - Jet-lag shift, the value
    [TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift) feeds to
    [TP-09](FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
    first-day pacing, computes directly: New York → Tokyo = +13 h
    eastward, Sydney → Kolkata = −5.5 h westward.
- Freshness served: yearly, per
  [TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift). The real
  trigger is a tzdb release — governments change DST rules with
  little notice, so the **operational duty is to track the Node/ICU
  tzdata version and refresh on release**, not to wait a year. The
  Node 24.14.0 build used in the spike carries 2025c.
- Coverage: global and exact — 418 IANA zones covering every
  inhabited place, plus the lat/lon → zone resolution for arbitrary
  coordinates.
- Cost: none. No key, no rate limit, no per-call cost for the
  arithmetic; the zone-name lookup rides a call the weather family
  already makes.
- retention_rights: store-raw. license_class: the IANA tz database is
  **public domain** (verified 2026-09-15 at
  `data.iana.org/time-zones/tzdb/LICENSE`, which states: "Unless
  specified below, all files in the tz code and data (including this
  LICENSE file) are in the public domain"); the lat/lon lookup
  inherits Open-Meteo's
  CC-BY-4.0 as already recorded in
  [SOURCES §weather-forecast](SOURCES.md#weather-forecast).
  Attribution: none required for tzdb; Open-Meteo credit flows from
  the weather entry.
- Retrieval policy: **`n/a`, and the reason is that no retrievable
  claim exists.** [TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift)
  is computed from a public-domain database held in process; there is
  no url to fetch, no span to quote, and a retrieved offset would be
  strictly worse than the computed one. If a future DST rule change
  outran the bundled tzdata, the fix is a tzdb/runtime upgrade at
  rung 3 — never a retrieval.
- Spike:
  [`scripts/spikes/time-transport-tz.mjs`](../../scripts/spikes/time-transport-tz.mjs)
  — run 2026-09-15. Returned the tzdata version, the zone count, both
  sides of a DST transition, four non-integer offsets, four jet-lag
  shifts, and four ICU-vs-API agreement checks (4/4 agree).
- Alternatives rejected: **a hosted timezone API** (Google Time Zone,
  TimeZoneDB — cost and a network dependency for arithmetic that is
  already local and exact); **a hand-maintained offset table** (fails
  on DST and on the 45-minute zones, as the spike demonstrates);
  **`tz-lookup` or a shapefile package for lat/lon → zone** (a real
  option and dependency-light, held in reserve — it would remove the
  one network call, and is worth adopting if Open-Meteo is ever
  demoted).

### airport-access

- Serves: [TT-05](FACTS.md#f-tt-05--airport-access--buffers-baggage--and-border-aware).
- Source: **three different sources, because this slot is three
  different questions.** The entry keeps them apart on purpose.
  - `access_modes[]` → **OpenStreetMap via Overpass** (rung 2: which
    modes physically reach the terminal). Typical times are NOT
    sourced here — they inherit
    [FE-06](FACTS.md#f-fe-06--travel-times--distances-per-mode)
    routing, which belongs to
    [V1.S1.T4](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code).
  - `checkin_buffer_min` / `security_buffer_min` /
    `bag_claim_buffer_min` → **no feed exists anywhere.** Curated
    in-repo policy table + rung-5a retrieval.
  - `immigration_wait_class` → **US CBP publishes; no one else does
    globally.**
- Confirmed keys (spike): from Overpass, OSM tags `railway=station |
  halt`, `highway=bus_stop`, `amenity=taxi`, `amenity=car_rental`
  with `name`. From CBP `awt.cbp.gov/api/airports`: `IATA, Id,
  IsPublic, LastUpdated, Name, Terminal`. No keys for buffers — there
  is no payload to confirm.
- Grade: **B for `access_modes[]`** (OSM is well-tagged at real
  airports and the spike proves it discriminates correctly);
  **C for the buffers** (curated, with a B ceiling on a quotable
  carrier page); **C for `immigration_wait_class` in the US and D
  elsewhere.** Evidence:
  - Overpass returned, at a 2–3 km radius: LHR — 9 subway/station +
    3 rail + 120 bus stops + 13 car rental; CDG — 7 subway/station +
    3 rail (naming "Aéroport Charles de Gaulle 2 TGV (RER)") + 87 bus
    stops + 3 taxi ranks; NRT — 6 rail (成田空港, 空港第2ビル) + 86 bus
    stops. **KEF returned 10 bus stops, 1 taxi rank, 44 car rental
    and ZERO rail** — which is correct: Iceland has no passenger
    railway. A source that gets the negative case right is a source
    worth grading B.
  - CBP `/api/airports` returns 66 rows covering **46 distinct IATA
    codes, all United States**. The historical wait-time export paths
    (`/api/waitTime/csv`, `/api/waitTime/excel`, found by reading the
    site's own JS bundle) return the SPA shell rather than data for
    every parameter combination tried, so **the series is recorded as
    located but NOT obtained.** Even fully working it is US-only, so
    the global answer is unchanged.
- Freshness served: yearly for buffers and wait class, per
  [TT-05](FACTS.md#f-tt-05--airport-access--buffers-baggage--and-border-aware);
  access-mode times inherit routing freshness from
  [FE-06](FACTS.md#f-fe-06--travel-times--distances-per-mode).
- Coverage: OSM access modes are global with good tagging at
  scheduled-service airports. Buffers are curated — V1 scope is the
  demo's airports, not all 4,133. Immigration wait class: US only
  from a publisher, estimated-and-labeled everywhere else.
- Cost: free. Overpass is a free shared service — **and its
  availability is part of the cost**: the spike hit HTTP 429 then
  repeated HTTP 504s on the public instance and needed a
  mirror-and-retry loop to complete. A production path needs a
  self-hosted Overpass or a paid instance; this is an infrastructure
  line item, not a licence problem.
- retention_rights: store-raw. license_class: OSM is **ODbL**
  (verified 2026-09-15 at `openstreetmap.org/copyright`: "OpenStreetMap
  is open data, licensed under the Open Data Commons Open Database
  License (ODbL) by the OpenStreetMap Foundation"), so the same
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) segmentation
  rule as OpenFlights applies — collective layer, never blended.
  CBP data is **US-Gov public domain**. The curated buffer table is
  ours. Attribution: "© OpenStreetMap contributors" on any surface
  rendering OSM-derived access modes.
- Retrieval policy — **THE ROW SPLITS HERE**, because this slot's
  three questions do not share a policy and an entry-level shorthand
  would be wrong. All three rows govern
  [TT-05](FACTS.md#f-tt-05--airport-access--buffers-baggage--and-border-aware).
  - **`access_modes[]`** — allowed domains + grade: the AIRPORT
    OPERATOR's own "getting here" page (**B** — operator) · the
    TRANSIT AUTHORITY operating the link (**B** — transit authority;
    e.g. the body running an airport rail line) · any other domain
    (**C**). quote required: **no** — mode existence is corroborated
    by OSM at rung 2, so retrieval is a supplement rather than the
    sole basis, and a value without a span is downgraded rather than
    discarded. freshness window: 1 year.
  - **buffers (`checkin_buffer_min`, `security_buffer_min`,
    `bag_claim_buffer_min`)** — allowed domains + grade: the
    CARRIER's own check-in / bag-drop deadline page (**B** —
    operator, and the carrier is the only party that can set its own
    cutoff) · the AIRPORT OPERATOR's own page (**B** — operator, for
    security-hall guidance) · the national aviation security
    authority (**B** — government body) · any other domain,
    explicitly including travel guides and forums (**C**). quote
    required: **yes** — a cutoff is a number someone published, and
    a wrong one makes a traveler miss a flight. freshness window:
    1 year, and re-fetch on any itinerary that depends on a bag-drop
    cutoff inside 30 days of departure.
  - **`immigration_wait_class`** — allowed domains + grade: the
    national BORDER or CUSTOMS agency (**B** — government body; CBP
    in the US, and its equivalents elsewhere) · the AIRPORT
    OPERATOR's own published wait times (**B** — operator) ·
    ESTABLISHED PRESS reporting sustained border delays (**B** —
    press) · any other domain (**C**). quote required: **yes**.
    freshness window: 90 days — a wait CLASS (fast/normal/slow) is a
    seasonal characteristic, not a live measurement, and
    [ROADMAP V1](../ROADMAP.md#v1--the-demo--active) refuses live
    status anyway.
- Spike:
  [`scripts/spikes/time-transport-airport-access.mjs`](../../scripts/spikes/time-transport-airport-access.mjs)
  — run 2026-09-15. Returned the four airports' tagged access modes
  (including KEF's correct zero-rail), the CBP airport list with its
  46 US IATA codes, the two non-responding export paths, and the four
  carrier/operator page results: Lufthansa HTTP 403, Japan Airlines
  HTTP 403, Heathrow HTTP 404 and British Airways timing out — none
  of the four served a plain automated request.
- Alternatives rejected: **a commercial "airport ground transport"
  API** (none found with global coverage and a clean licence);
  **deriving buffers from a rule of thumb** (a fabricated number
  rendered as a fact is precisely what the
  [reliability law](../FOUNDATION.md#the-reliability-law) forbids —
  a curated table with a visible provenance is the honest form of the
  same knowledge); **live immigration wait feeds** (US-only,
  undocumented, and
  [ROADMAP V1](../ROADMAP.md#v1--the-demo--active) refuses live
  status).

### intercity-ground

- Serves: [TT-06](FACTS.md#f-tt-06--intercity-ground-options-) ⚠.
- Source: **OpenStreetMap via Overpass** for route existence and
  vehicle carriage (rung 2), **the Mobility Database catalogue** to
  locate national rail/coach/ferry GTFS feeds that carry durations
  (rung 1 for the catalogue, rung 2 for each feed), and **rung-5a
  retrieval from the operator's own timetable** for the two fields
  neither carries.
- Confirmed keys (spike): OSM relation tags on `route=ferry` —
  `name`, `from`, `to`, `operator`, `duration`, `motor_vehicle`,
  `interval`, `seasonal`. Mobility Database `sources.csv` — 29
  columns including `data_type`, `location.country_code`,
  `location.municipality`, `provider`, `is_official`, `is_seasonal`,
  `urls.direct_download`, `urls.license`,
  `urls.authentication_type`.
- Grade: **C**, rising to **B in Western Europe** where a national
  feed and a reachable operator page coexist. The grade is set by a
  measured tag-coverage gap, not an impression:
  - `motor_vehicle` — which is how `vehicle_allowed` gets computed,
    and the field
    [TT-06](FACTS.md#f-tt-06--intercity-ground-options-) singles out
    because "island itineraries break without car-ferry awareness" —
    is tagged on **3 of 16** ferry routes around Piraeus (19%),
    **3 of 7** around Split (43%) and **8 of 10** around Oban (80%).
    Usable in Scotland, unusable in Greece.
  - `duration` is tagged on 3/16, 0/7 and 2/10 respectively.
  - **`interval` is tagged on ZERO ferry routes in all three
    regions**, and **`seasonal` on ZERO.** So two of
    [TT-06](FACTS.md#f-tt-06--intercity-ground-options-)'s five
    dictionary fields — `frequency_class` and the seasonality
    awareness the fact explicitly asks for — **have no source in OSM
    at all.** They must come from rung-5a retrieval or from a GTFS
    calendar, and the entry says so rather than implying OSM covers
    them.
  - The Mobility Database's own `is_seasonal` flag is set on **9 rows
    out of 3,511** — effectively unusable as a seasonality signal.
- Freshness served: monthly per
  [TT-06](FACTS.md#f-tt-06--intercity-ground-options-); OSM is
  continuously edited (the Overpass response carried
  `timestamp_osm_base: 2026-09-15T20:02:32Z`), GTFS feeds refresh on
  their own operator's cadence.
- Coverage: measured per country from the catalogue, and it is the
  strong-Europe / thin-elsewhere shape
  [TT-06](FACTS.md#f-tt-06--intercity-ground-options-) predicted —
  ES 169 GTFS feeds (124 matching intercity/rail/ferry names), FR
  123 (6), IT 77 (8), DE 60 (7), GB 46 (1), JP 18 (**0** intercity),
  GR 4 (1), HR 4 (0), NO 1 (0), **KR 0**. Ferry existence via OSM is
  global; the tag QUALITY is not.
  **The parenthesised number is a NAME-MATCH HEURISTIC over the
  provider and feed name, not a census** — JP's 0 means no Japanese
  feed's NAME looked intercity, not that Japan has no intercity rail
  data. The same blank-column trap that hid Tokyo's feeds in
  [local-transit](#local-transit) applies here, and a per-country
  decision must open the feeds rather than trust this count. KR's 0
  is different and is real: South Korea has zero catalogue rows of
  any type.
- Cost: free. Same Overpass availability caveat as
  [airport-access](#airport-access) — the public instance returned
  HTTP 504 during this spike and the query completed only after
  mirror-retry.
- retention_rights: store-raw. license_class: OSM **ODbL** (verified
  2026-09-15, as above) — segmented collective layer under
  [D-015](../record/DECISIONS.md#d-015--data-asset-law). Mobility
  Database metadata is **CC0 1.0** (verified 2026-09-15 at
  `mobilitydatabase.org/terms-and-conditions`: "All metadata
  generated by MobilityData is licensed under CC0 1.0"), but **each
  GTFS feed carries its own operator licence, and only 1,709 of 3,511
  catalogue rows (49%) carry a licence url at all** — so a feed's
  licence must be checked individually before it is cached. That
  check is a per-city gate, not a one-time clearance. Attribution:
  "© OpenStreetMap contributors"; per-operator attribution as each
  feed requires.
- Retrieval policy — **THE ROW SPLITS BY FIELD**, because the fields
  this slot serves have genuinely different exposure. All rows govern
  [TT-06](FACTS.md#f-tt-06--intercity-ground-options-).
  - **existence + `mode` + `typical_duration_min`** — allowed domains
    + grade: the OPERATOR's own timetable (**B** — operator; a ferry
    or rail company is authoritative about its own sailings) · the
    national or regional TRANSPORT AUTHORITY (**B** — government
    body / transit authority) · any other domain, including travel
    guides and ferry-booking aggregators (**C**). quote required:
    **yes**. freshness window: 30 days, 7 days inside the trip
    window.
  - **`vehicle_allowed` and `frequency_class` (the two fields with no
    dataset)** — allowed domains + grade: the FERRY OR RAIL
    OPERATOR's own site (**B** — operator, and for vehicle carriage
    the operator is the ONLY authority, since whether a sailing takes
    cars is a fact about that operator's vessel) · the national
    TRANSPORT AUTHORITY (**B**) · any other domain (**C**). quote
    required: **yes** — a traveler stranded with a hire car because a
    sailing was foot-passenger-only is the concrete failure this
    field exists to prevent. freshness window: 30 days, and re-fetch
    inside 14 days of a sailing date because seasonal timetables
    change.
- Spike:
  [`scripts/spikes/time-transport-intercity-ground.mjs`](../../scripts/spikes/time-transport-intercity-ground.mjs)
  — run 2026-09-15. Returned ferry-route counts and per-tag coverage
  for three island regions, a worked example per region (including
  Caledonian MacBrayne's Oban–Castlebay route with
  `duration=04:45, motor_vehicle=yes`), the ten-country feed census,
  and the `is_seasonal` count.
- Alternatives rejected: **Transitland** (a genuinely good feed
  registry with service alerts, but HTTP 401 unauthenticated — key
  required; revisit if the catalogue proves insufficient);
  **Rome2Rio / similar multimodal aggregators** (exactly the product
  shape needed, but commercial, and an aggregator is a **C** domain
  under [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts) even when
  it is right); **per-country operator APIs** (Deutsche Bahn, SNCF
  and others publish good open APIs — each needs its own key and its
  own vetting, which is per-destination work for
  [V1.S7](../ROADMAP.md#v1s7--the-other-four-families-plug-in-proof),
  not a V1 global source).

### local-transit

- Serves: [TT-07](FACTS.md#f-tt-07--local-transit-modes-) ⚠.
- Source: **the Mobility Database catalogue** (rung 1 — a free, open,
  keyless registry of the world's GTFS feeds) to locate a city's
  feed, the **GTFS feed itself** (rung 2 — the transit authority's
  own published schedule) for headways, and **OpenStreetMap via
  Overpass** (rung 2) for mode presence where no feed exists.
- Confirmed keys (spike): catalogue `sources.csv` — `mdb_source_id,
  data_type, entity_type, location.country_code,
  location.subdivision_name, location.municipality, provider,
  is_official, is_producer_url_unstable, is_seasonal, name, note,
  feed_contact_email, static_reference, urls.direct_download,
  urls.authentication_type, urls.authentication_info,
  urls.api_key_parameter_name, urls.latest, urls.license,
  location.bounding_box.*, status, features, redirect.*`. From
  Overpass: `route` values `subway | light_rail | tram | bus | ferry`
  plus the `interval` tag.
- Grade: **B where a GTFS feed exists and its licence permits
  caching; C where only OSM answers.** The B is proven, not assumed:
  the spike DOWNLOADED a real feed rather than stopping at finding
  one. Toei's GTFS zip (7.39 MB, 15 tables) contains
  `stop_times.txt` with **1,034,053 rows** carrying
  `arrival_time` and `departure_time` per trip per stop, so typical
  headways are computable from the feed. (It has no
  `frequencies.txt`; headways come from the stop-time series, which
  is the common case.) The named gaps:
  - The catalogue holds **3,511 rows — 2,476 GTFS and 1,035
    GTFS-RT — across 88 country codes**, with 1,923 flagged
    `is_official`.
  - **Seoul and Reykjavík have no GTFS feed in the catalogue at
    all** — South Korea and Iceland have **zero rows of any type**,
    not merely zero matches. For those cities, mode presence must
    come from OSM and headways from retrieval.
  - **Tokyo has two, and finding them required fixing the search.**
    Both are from the Tokyo Metropolitan Bureau of Transportation
    (Toei Bus and Toei Train) — the transit authority itself, a
    grade-B domain — and both are licensed **CC BY 4.0**, which is
    asset-layer clean. See the method note below, because the way
    they were nearly missed matters more than the count.
  - Paris (6 feeds, IDFM / Transilien SNCF), London (6, TfL and
    others), New York (85 across the metro area, MTA and many
    operators) and Lisbon (17, Carris / TST / Fertagus) are well
    covered — though New York's 85 include **52 rows with no licence
    url at all**, which is the per-feed gate below in miniature.
  - **592 catalogue rows (17%) require authentication** — a
    per-operator key, which is per-city onboarding work, not a global
    switch.
  - **METHOD NOTE, recorded because it changed an answer.** A first
    pass keyed only on `location.municipality` reported ZERO feeds
    for Tokyo. That was false: Tokyo's two feeds leave
    `municipality` blank and carry the city in
    `location.subdivision_name`, so the filter was reading a blank
    column as an absence — and it undercounted London, New York and
    Lisbon for the same reason. The spike now searches
    `location.municipality`, `location.subdivision_name`, `provider`
    and `name`, and PRINTS WHICH FIELD MATCHED. A coverage claim is
    only as good as the column it was read from.
  - OSM answers mode PRESENCE well: Tokyo returned 1,546 route
    relations (bus 1,455, subway 76, ferry 7, light_rail 6, tram 2),
    Lisbon 1,478 (bus 1,435, ferry 18, tram 11, subway 8), Reykjavik
    78 (**bus 74, ferry 4, and no subway or tram** — correct).
  - OSM does **not** answer HEADWAYS: the `interval` tag appears on
    85 of Tokyo's 1,546 relations, **1 of Lisbon's 1,478**, and 6 of
    Reykjavik's 78. Typical headways must come from a GTFS feed, and
    where there is no feed they fall to retrieval.
- Freshness served: quarterly per
  [TT-07](FACTS.md#f-tt-07--local-transit-modes-) — comfortable, since
  modes and typical headways are structural.
- Coverage: 88 countries with at least one feed; global for mode
  presence via OSM; the named holes above.
- Cost: free. Overpass availability caveat as above (the spike was
  rate-limited at HTTP 429, then met HTTP 504s, and completed only
  via mirror-retry — the retry is visible in the spike output).
- retention_rights: **per feed, and this is the gate.** The catalogue
  METADATA is **CC0 1.0** (verified 2026-09-15 at
  `mobilitydatabase.org/terms-and-conditions`); the catalogue API
  codebase is Apache-2.0; but each GTFS feed carries the transit
  authority's own licence and **only 49% of rows carry a licence url**.
  license_class: mixed — resolve per city before caching, per
  [D-015](../record/DECISIONS.md#d-015--data-asset-law); a feed whose
  terms prohibit caching disqualifies that city from the asset layer
  and falls to OSM + retrieval. OSM is **ODbL**. Attribution:
  MobilityData for the catalogue, the transit authority per feed,
  "© OpenStreetMap contributors" for OSM-derived values.
- Retrieval policy — **per fact; this slot serves one fact**, so one
  row. It carries real weight here because of the Tokyo/Seoul hole.
  - allowed domains + grade: the TRANSIT AUTHORITY's own site (**B** —
    transit authority, named explicitly in
    [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts)'s classes;
    e.g. the operator of a city's metro) · the CITY or regional
    GOVERNMENT's transport pages (**B** — government body) · any
    other domain, including journey-planner apps, transit wikis and
    travel guides (**C**).
  - quote required: **no** for mode presence (OSM corroborates at
    rung 2, so a value without a span is downgraded rather than
    discarded); **yes** for a headway number, which is a specific
    published figure and is worthless if invented.
  - freshness window: 180 days. Metro lines and typical headways
    change on the scale of infrastructure projects, and
    [TT-07](FACTS.md#f-tt-07--local-transit-modes-) asks for quarterly
    freshness on the fact itself.
- Spike:
  [`scripts/spikes/time-transport-local-transit.mjs`](../../scripts/spikes/time-transport-local-transit.mjs)
  — run 2026-09-15. Returned the catalogue's 3,511 rows and 29
  columns, the data-type and licence-coverage counts, the seven-city
  feed census with the matched field named for each city (Seoul and
  Reykjavik at zero, Tokyo at two), the three-city OSM mode census
  with `interval` tag counts, and the Toei GTFS download with its
  table list and `stop_times.txt` header and first row.
- Alternatives rejected: **Transitland** (HTTP 401 — key required;
  the catalogue serves the same discovery need keylessly);
  **the Mobility Database REST API** (did not resolve from the spike
  host, and it is key-gated regardless — the CSV catalogue is the
  keyless path and carries the same metadata); **downloading every
  GTFS feed up front** (gigabytes for data that is only needed per
  destination, and it would cache feeds whose licences have not been
  read — a
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) violation by
  construction).

### transport-disruptions

- Serves: [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-) ⚠.
- Source: **per-operator feeds where they exist** (rung 2 — the
  transit authority's own notice board, machine-readable), and
  **rung-5a retrieval from operator notices and established press**
  everywhere else. There is no global source; that absence is the
  entry's main finding.
- Confirmed keys (spike, live data): TfL `Line/Mode/.../Status`
  returns per-line `lineStatuses[]` with `id, lineId, statusSeverity,
  statusSeverityDescription, reason, created, validityPeriods,
  disruption`, and `validityPeriods[]` carries `fromDate, toDate,
  isNow`. TfL `Line/Mode/tube/Disruption` returns `category, type,
  categoryDescription, description, affectedRoutes, affectedStops,
  closureText`. MTA's GTFS-RT service-alerts JSON returns
  `{header, entity[]}` with `entity[].alert`.
- Grade: **B in covered cities, C-to-D elsewhere.** The mapping onto
  [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-)'s
  dictionary is exact where a feed exists, and the spike caught a
  real disruption to prove it rather than describing a schema:
  - At run time, 1 of 20 TfL lines was not in Good Service — the
    **Piccadilly line, `statusSeverity: 6 ("Severe Delays")**, with
    `validityPeriods[0] = {fromDate: 2026-09-15T19:32:22Z, toDate:
    2026-09-16T00:29:00Z, isNow: true}`.
  - `statusSeverity` → TT-08 `severity`; `validityPeriods` →
    `window {start, end, open_ended}`; `reason` → `scope_note`;
    the line and mode → `operator` and `mode`. Every dictionary field
    has a home.
  - MTA's GTFS-RT alerts answer the same shape for New York with no
    key.
  - Bay Area 511 returned HTTP 401 ("The API key is not provided") —
    the control confirming that many operator feeds ARE key-gated.
- Freshness served: weekly, daily within 2 weeks of the dates, per
  [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-). Feed
  values are effectively real-time; the fetch cadence is ours.
- Coverage: **city-by-city, and thin.** A handful of large transit
  authorities publish keyless machine-readable alerts; most do not.
  Nothing covers national rail strikes globally — the "SNCF strike
  Mar 12–14" example in
  [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-) itself is
  a press-and-operator-notice fact, not a feed fact.
- Cost: free for the feeds vetted. Per-operator keys where required.
- retention_rights: **UNRESOLVED for TfL and recorded as such.**
  TfL's transport-data terms page returned **HTTP 403 to an automated
  request**, so its licence could not be verified during this vetting
  and is **not** claimed here. Under the verification law this slot
  therefore may NOT assert store-raw rights for TfL data:
  **re-verify TfL's terms manually before caching any TfL payload.**
  MTA's GTFS-RT feeds are published openly by a US public authority;
  their terms should get the same manual check. license_class: TfL
  unverified · MTA unverified-but-public · retrieved values carry
  provenance per
  [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts). Attribution: an attribution
  string of the form "Powered by TfL Open Data" is widely used by TfL
  data consumers, but THIS VETTING DID NOT VERIFY IT — it is recorded
  as a lead for the manual check, not as a confirmed duty.
- Retrieval policy — **per fact; this slot serves one fact**, so one
  row. Amended into
  [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-) by
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state),
  and it is the row that matters most in this family because most of
  the world has no feed.
  - allowed domains + grade: the OPERATOR's own notices, status page
    or newsroom (**B** — operator; SNCF on an SNCF strike) · the
    TRANSIT AUTHORITY for the region (**B** — transit authority) ·
    the national TRANSPORT MINISTRY or a government emergency-
    information site (**B** — government body) · ESTABLISHED PRESS
    reporting a strike or closure and naming the operator or union
    (**B** — press, named explicitly in
    [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts)) · any other
    domain, including travel blogs, forums and aggregator "strike
    trackers" (**C**).
  - quote required: **yes**, with the same asymmetry the weather
    family applies to alerts: **an unverified all-clear is the one
    output this slot must never produce.** A retrieved value with no
    span at the fetched url is discarded. Absence of a found
    disruption is NOT evidence of no disruption, and must render as
    silence-with-honesty (rung 6), never as "no disruptions
    expected". **This slot has no rung 5b** — a remembered strike
    date is worse than saying nothing, because
    [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-) drives
    a Suggest demerit and a mode substitution.
  - freshness window: 7 days outside the trip window; **24 hours
    within 14 days of the dates**, matching the fact's own daily
    cadence near the trip.
- Spike:
  [`scripts/spikes/time-transport-disruptions.mjs`](../../scripts/spikes/time-transport-disruptions.mjs)
  — run 2026-09-15. Returned five operator-feed probes (TfL ×2 and
  MTA live with no key, Bay Area 511 HTTP 401, Rejseplanen empty),
  the live Piccadilly-line severe-delay payload with its validity
  period, and three global-aggregator probes (Transitland 401,
  Mobility Database API unresolved, and the EU national-access-point
  page HTTP 200 — an HTML page on `transport.ec.europa.eu`, with no
  feed API found at it).
- Alternatives rejected: **a global disruption aggregator** — none
  found; the search is recorded rather than the conclusion asserted,
  and the EU national-access-point page returned HTML with no feed
  endpoint discoverable from it; **GTFS-RT service alerts as the
  universal answer** (they exist per operator and the catalogue lists
  1,035 of them, but they cover urban transit, not national rail
  strikes or airport closures, which is most of what
  [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-) is for);
  **news-API strike trackers** (aggregators are **C** domains, and a
  paid news API buys no authority the operator's own notice does not
  already have).

## What V1 cannot serve, and why

Stated as a list because
[the spec](../record/specs/time-transport.md) makes a named gap a
result rather than a failure.

| Fact | Obtainable today | Why not better |
|---|---|---|
| [TT-02](FACTS.md#f-tt-02--route-existence-) route existence | **C** globally; B only where an operator page is reachable and quotable | No free licensable feed; the one free dataset is 9.6 years stale and flies three dead airlines |
| [TT-03](FACTS.md#f-tt-03--flight-schedule-blocks-) schedule blocks | **C** where a timetable page is reachable, **D** elsewhere | Typical time bands derived from a day's departures board are a derivation on a retrieval; every schedule API answered 401; the entry tier costs $49.99/month |
| [TT-05](FACTS.md#f-tt-05--airport-access--buffers-baggage--and-border-aware) `immigration_wait_class` | **C** in the US, **D** elsewhere | Only US CBP publishes, its export endpoint did not yield data, and no equivalent exists globally |
| [TT-06](FACTS.md#f-tt-06--intercity-ground-options-) `frequency_class` + ferry seasonality | **C** via retrieval only | OSM tags `interval` and `seasonal` on **zero** ferry routes in all three regions sampled; the catalogue's `is_seasonal` is set on 9 of 3,511 rows |
| [TT-07](FACTS.md#f-tt-07--local-transit-modes-) headways in Seoul and Reykjavík | **C** via retrieval only | South Korea and Iceland have zero catalogue rows of any type; OSM gives modes but tags `interval` on 1 of 1,478 relations in the comparable Lisbon sample. (Tokyo is NOT in this row — it has two CC BY 4.0 feeds from its transit authority.) |
| [TT-08](FACTS.md#f-tt-08--transport-disruptions--strikes-) outside covered cities | **B** via retrieval where an operator or press notice exists, **silence** otherwise | No global aggregator exists; and this slot has no rung 5b, so absence renders as silence rather than an all-clear |

Two facts are fully served:
[TT-01](FACTS.md#f-tt-01--airport-registry) at **A** for the registry
(C for metro grouping) and
[TT-04](FACTS.md#f-tt-04--timezone-offset--jet-lag-shift) at **A**
outright.
