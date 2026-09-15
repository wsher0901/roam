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
retention the asset layer is built on. The one proprietary alternative whose terms this
bench READ IN FULL — Google — forbids exactly that, clause by quoted
clause. See [§ The Google Maps verdict](#the-google-maps-verdict).
The others named in the entries below (TripAdvisor, Yelp, Foursquare,
Numbeo, Mapbox) were NOT read, and each entry says so where it names
them: they were not pursued, which is not the same as vetted and
rejected.

**Two: the public OSM query endpoints are not production
infrastructure.** Overpass allows TWO concurrent slots per IP and
answers HTTP 429 `rate_limited` past them — HIT REPEATEDLY during this
bench's spikes, not read about; the five-city coverage sweep needed
backoff and four mirrors to finish. Nominatim's usage policy, read
2026-09-15 at operations.osmfoundation.org/policies/nominatim, states
*"an absolute maximum of 1 request per second"*, requires a User-Agent
identifying the application, and discourages bulk geocoding; this
bench respected it rather than testing it.

**And that same policy contains the sentence that most cleanly
separates the open sources from the proprietary ones:** *"Results must
be cached on your side."* Nominatim REQUIRES the caching that
[§ The Google Maps verdict](#the-google-maps-verdict) shows Google
forbids. The two ecosystems ask for opposite behaviour from the same
application, and
[D-015](../record/DECISIONS.md#d-015--data-asset-law) points one way.

Every OSM-backed entry below is graded on the DATA, and every one
carries the same operational caveat: production needs a self-hosted
instance or an offline extract. That is an engineering cost, not a
licence problem, and it does not move any grade.

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
  **Foursquare Places** — not vetted; see
  [§ venue-reputation](#venue-reputation).
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
    BOUNDS. They are the freshest source of opening hours in the
    world, and Google's terms were read here and refuse it outright
    ([§ The Google Maps verdict](#the-google-maps-verdict)); the
    others are excluded on the same expectation, UNVERIFIED and said
    so. Either way none may appear in an allowed list in this file
    without its own terms read first.
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

## parking

- Serves: [FE-10](FACTS.md#f-fe-10--parking-).
- Source: **OpenStreetMap** via Overpass (ODbL) — `amenity=parking`
  features for the parking half, and `boundary=low_emission_zone` for
  `restricted_driving_zone`, the field that earns this slot its keep.
- Confirmed keys (spike, 2026-09-15, Rome centre): `parking`,
  `fee`, `charge`, `access`, `capacity`, `name`, `maxstay` on parking
  features; `boundary` and `name` on zones. 825 parking features and 1
  restricted zone returned.
- **Dictionary coverage, measured:**
  | FE-10 field | OSM tag | coverage |
  |---|---|---|
  | `availability_class` | `parking` (surface / multi-storey / underground …) | 612 / 825 = **74.2%** |
  | `restrictions_note` | `access` | 370 / 825 = 44.8% |
  | `cost_band` | `fee` | 214 / 825 = 25.9% |
  | `cost_band` | `charge` (an actual price) | 6 / 825 = **0.7%** |
  | `capacity` (not FE-09/10 Dictionary, useful) | `capacity` | 82 / 825 = 9.9% |
  | `name` | `name` | 73 / 825 = 8.8% |
  | `restrictions_note` | `maxstay` | 0 / 825 = **0.0%** |
  | `distance_to_entrance_m` | — | **COMPUTED** by us from the parking geocode and the venue geocode |
- **`restricted_driving_zone` — the Florence/Rome fine-prevention fact.**
  The mechanism works: the query returned Rome's **"Fascia Verde"** as
  a `boundary=low_emission_zone` relation, so a ZTL/LEZ polygon IS
  fetchable from OSM and a plan can test a drive against it.
  **But one zone is not Rome's ZTL story** — the historic-centre ZTL,
  which is the one that actually fines tourists, did not come back
  under either `low_emission_zone` or `traffic_zone` in this bbox. The
  honest reading is that OSM's zone tagging is INCONSISTENT between the
  environmental zone (well tagged) and the municipal access zone
  (tagged variously, or not at all), and this slot therefore cannot
  promise the fine-prevention fact from OSM alone. Naming the gap is
  the result; a plan that says "no restricted zone here" on this data
  would be exactly the wrong output.
- Grade: **C** overall — **B** for `availability_class` where tagged,
  **C** for `cost_band` (the price tag is present on 0.7% of features,
  so the band is estimated), and **C-with-a-named-gap** for
  `restricted_driving_zone` until the retrieval policy below fills it.
- Freshness served: monthly, per [FACTS](FACTS.md). Zone boundaries
  change on municipal timescales and are re-checked yearly, with a
  plan-time check whenever a drive enters a city centre.
- Coverage: global in principle; parking tagging is dense in Europe
  and thin elsewhere, and ZTL/LEZ tagging is inconsistent even where
  the zone is famous — measured above, not assumed.
- Cost: free; Overpass slot limits per
  [finding two](#three-findings-that-shape-every-entry-below).
- retention_rights: **store-raw**. license_class: **ODbL 1.0**.
  Attribution: "© OpenStreetMap contributors".
- **Retrieval policy** — the row SPLITS, and the split is the whole
  point of this slot: one field can cost a traveller a fine, the rest
  cost them a walk.
  - `restricted_driving_zone` —
    - allowed domains + grade: the CITY OR MUNICIPAL GOVERNMENT'S own
      site, including its mobility or police department (**B**,
      government body); the national transport ministry (**B**); the
      zone operator where a city delegates enforcement (**B**,
      operator); established press reporting a zone change and naming
      the authority (**B**). Car-rental and travel-blog pages are
      **C** AND ARE NEVER SUFFICIENT ALONE for a `present: true`
      verdict — they are corroboration.
    - quote required: **yes**, and the span must carry the ZONE'S
      HOURS AND EXEMPTIONS, not merely its existence. A ZTL that is
      active only 06:30–18:00 on weekdays is a different fact from one
      that is always active, and the difference is the fine.
    - freshness window: 1 year, and a plan-time re-check on any drive
      entering a city centre.
  - `availability_class`, `cost_band`, `restrictions_note`,
    `distance_to_entrance_m` —
    - allowed domains + grade: the parking operator or garage's own
      site (**B**, operator); the municipal parking authority (**B**,
      government body); other domains (**C**).
    - quote required: **no** — these are bands and classes, and a
      garage's price changes faster than any window we would set. An
      estimate labeled as an estimate is the honest rendering; a
      quoted price that has since changed is worse.
    - freshness window: 90 days. `distance_to_entrance_m` is computed
      and has no window.
- Spike: `scripts/spikes/feasibility-parking.mjs` — run 2026-09-15 over
  Rome centre. Returned 825 parking features with the coverage table
  above, and the single `low_emission_zone` relation "Fascia Verde"
  with the historic-centre ZTL absent.
- Alternatives rejected: **Google Places parking attributes** — see
  [§ The Google Maps verdict](#the-google-maps-verdict).
  **Commercial parking APIs** (ParkWhiz, SpotHero and similar) —
  booking products, US-centric, and booking is out of V1 scope.
  **Urban Access Regulations in Europe** (urbanaccessregulations.eu) —
  the authoritative European registry of LEZ and access zones, and the
  obvious fix for the gap named above; NOT VETTED in this bench because
  it publishes as a website rather than an API and its re-use terms
  were not read. Recorded as the leading candidate to close this slot's
  gap, with a terms read as the first step.

## seasonal-closures

- Serves: [FE-05](FACTS.md#f-fe-05--seasonal-closures--operating-seasons-).
- Source: **OpenStreetMap's `opening_hours` month-range syntax and
  `access:conditional`** where tagged (ODbL, rung 1), and **RETRIEVAL
  at rung 5a from operators and park authorities** everywhere else —
  which, on the measurement below, is most places.
- Confirmed keys (spike, 2026-09-15, 2,060 Iceland features):
  `opening_hours` carrying month ranges, `access:conditional`,
  `seasonal`.
- **The signal is real and machine-readable. The denominator is the
  story:**
  | signal | coverage |
  |---|---|
  | `opening_hours` present at all | 132 / 2,060 = **6.4%** |
  | …of which carry a MONTH RANGE | 31 / 2,060 = **1.5%** |
  | `seasonal=*` | 12 / 2,060 = 0.6% |
  | `access:conditional` | 4 / 2,060 = **0.2%** |
- **Where it IS tagged the value is excellent** — these came back
  verbatim, and each is exactly the fact FE-05 wants:
  - `Fischersetur` — `May 15-Sep 15 Mo-Su 13:00-16:00; Sep 16-May 14 off`
    (an explicit closed season, the "closed Nov–Apr" case)
  - `Flugsafnið` — `Jun-Sep 11:00-17:00; Oct-May: Sa 13:00-17:00`
    (reduced winter operation, not closure — a distinction a plan must
    keep)
  - `Bláa Lónið` — a five-band year:
    `Jan 01-May 25: Mo-Su 08:00-22:00; May 26-Jun 29: Mo-Su 07:00-23:00; Jun 30-Aug 20: Mo-Su 07:00-24:00; Aug 21-Oct 01: Mo-Su 08:00-22:00; Oct 02-Dec 31: Mo-Su 08:00-21:00`
  - `Aurora Reykjavik` — `Mar-Oct: Mo-Su 09:00-20:00; Nov-Feb: Mo-Su 09:00-18:00`
  - and from `access:conditional`, a road closed for a reason no
    schedule would predict:
    `"Bridge is temporarily removed during breeding/nurturing season each year"`
- **At 1.5% this cannot be the primary path, and the fact is one where
  being wrong ends the trip** — FE-05 exists because "a trip built
  around a closed thing is dead". So the ordering is: OSM answers where
  tagged, retrieval answers otherwise, and SILENCE IS NEVER READ AS
  OPEN-ALL-YEAR. A destination whose seasonality cannot be established
  carries the uncertainty into Suggest rather than being planned around
  as if it were open.
- Grade: **B** where OSM carries a month range or an operator page is
  quoted; **C** from a guide; **never D** — the quote rule below.
- Freshness served: monthly, plus a plan-time check, per
  [FACTS](FACTS.md). The plan-time check is what catches a pass that
  opened late after a heavy winter, which no cached month range can
  know.
- Coverage: measured on Iceland, deliberately — the country where
  seasonal operation genuinely gates a plan (F-roads, highland huts,
  seasonal museums). If coverage is 1.5% there, it is not better in
  places where seasonality matters less to mappers. That extrapolation
  is a judgement and is labeled as one; it is not a second measurement.
- Cost: free; Overpass slot limits per
  [finding two](#three-findings-that-shape-every-entry-below).
- retention_rights: **store-raw** for the OSM tags; **cache-only** plus
  a curated table for the retrieved half. license_class: **ODbL 1.0**
  (OSM); per-domain for spans. Attribution: "© OpenStreetMap
  contributors".
- **Retrieval policy** — SHORTHAND, declaring itself: one fact, one
  row. This is the busiest policy in the file after
  [§ opening-hours](#opening-hours), because it covers ~98% of cases.
  - allowed domains + grade: the OPERATOR'S own site — the museum,
    lagoon, lift company or ferry line (**B**, operator); the
    managing government authority — a national park service, a roads
    administration, a highland-road authority (**B**, government
    body); the transit authority for a seasonal ferry or bus (**B**,
    transit authority); established press reporting a seasonal opening
    or closure and naming its source (**B**); travel guides (**C**).
    Crowd-sourced trip reports are OUT OF BOUNDS: last year's visitor
    is not this year's schedule.
  - quote required: **yes**, and the span must carry THE DATES. "Open
    in summer" is not a seasonal window; `May 15 – Sep 15` is. A value
    with no dated span is discarded, so **this slot has no rung 5b** —
    a remembered season is how a traveller drives four hours to a
    closed gate.
  - freshness window: 30 days, and **7 days inside the trip window**,
    because seasonal openings slip with the weather and the slip is
    announced late.
- Spike: `scripts/spikes/feasibility-seasonal-closures.mjs` — run
  2026-09-15 over Iceland, 2,060 features. Returned the coverage table,
  the 31 month-range values (12 quoted above verbatim) and the four
  `access:conditional` values.
- Alternatives rejected: **Google Places** — see
  [§ The Google Maps verdict](#the-google-maps-verdict); its
  `opening_hours` models seasonal variation poorly in any case.
  **National park service APIs** — the US NPS has one and it is
  excellent, but it is one country, so it is a rung-2 upgrade for US
  destinations rather than a source for this slot; recorded as a
  candidate to vet when US park scenarios enter the demo set.
  **Ski-resort and lift-operator feeds** — fragmented and mostly
  commercial; the same conclusion
  [SOURCES §snow-conditions](SOURCES.md#snow-conditions) already
  reached for [WX-10](FACTS.md#f-wx-10--snowfall--snow-depth-daily-).

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
  not vetted, and not needed: they resell the same ECB reference rates
  this entry takes from the publisher, so
  [D-015](../record/DECISIONS.md#d-015--data-asset-law)'s preference
  for the source settles it before any terms question arises. **Mid-market scraping** — never; and FE-14 wants
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

## reservation-flags

- Serves: [FE-08](FACTS.md#f-fe-08--reservation--timed-entry--permit-flags-).
- Source: **RETRIEVAL-FIRST at rung 5a, seeded by OSM's `website` tag,
  plus a curated table** for the demo destinations' headline venues.
  OSM's own `reservation` tag is corroboration only — the measurement
  below is why.
- Confirmed keys (spike, 2026-09-15, 2,808 bookable-class venues across
  Rome and Florence): `reservation` (values `yes`, `recommended`,
  `required`), `fee`, `charge`, `website`, `opening_hours`.
- **Dictionary coverage — this is the sparsest slot in the family:**
  | signal | Rome | Florence | combined |
  |---|---|---|---|
  | `reservation=*` | 20 / 2,000 = 1.0% | 11 / 808 = 1.4% | **31 / 2,808 = 1.1%** |
  | `website` (the retrieval seed) | 706 / 2,000 = 35.3% | 227 / 808 = 28.1% | **933 / 2,808 = 33.2%** |
  | `fee=*` | 98 / 2,000 = 4.9% | 49 / 808 = 6.1% | 5.2% |

  The 31 tagged venues carried `yes` (21), `recommended` (9) and
  `required` (1) — real values, e.g. "Da Bucatino" `reservation=yes`,
  "La Giostra" `reservation=recommended`.
- **And sparsity is not even the main problem: OSM DOES NOT MODEL THIS
  FACT.** FE-08's Dictionary asks for `requirement_class`,
  `typical_lead_time_days` and `sellout_speed`. OSM has no tag for lead
  time and no tag for sellout speed anywhere in its schema — so even
  100% `reservation` coverage would answer one field of three. And
  PERMITS, the case FE-08 names explicitly (Inca Trail, Half Dome), are
  issued by authorities that publish no feed at all.
- **THE ABSENCE RULE, stated because it is the whole point of the
  fact.** An untagged venue is NOT "no reservation needed". At 1.1%
  coverage that inference would be wrong 99 times in 100, and it is
  the precise failure — arriving at a sold-out timed entry — that
  FE-08 exists to prevent. Silence is the retrieval trigger; if
  retrieval also finds nothing, the plan carries "booking requirement
  unknown — check before you go", never a clean bill.
- Grade: **B** where the operator's own page answers, **C** from a
  guide, **never D** — the quote rule below forbids it. The OSM tag
  alone renders as **C** corroboration.
- Freshness served: monthly, per [FACTS](FACTS.md), and a plan-time
  re-check for any venue whose class is `required` or `permit` —
  booking windows open on fixed dates, and that date is the fact.
- Coverage: the retrieval seed reaches a third of venues; for the rest
  the allowed-domain search must find the operator, which the
  [§ money-saving-tips](#money-saving-tips) spike showed is the weak
  link — guessed URLs 404 and operator sites bot-block.
- Cost: free for the OSM half; retrieval-module cost for the rest.
- retention_rights: **store-raw** for the OSM tags; **cache-only** plus
  our curated table for the retrieved half. license_class:
  **ODbL 1.0** (OSM); per-domain for retrieved spans; repo licence for
  the curated table. Attribution: "© OpenStreetMap contributors", plus
  each span's own url.
- **Retrieval policy** — SHORTHAND, declaring itself: one fact, one
  row, governing all three Dictionary fields, because they come off the
  same page when they come at all.
  - allowed domains + grade: the venue or attraction OPERATOR'S OWN
    booking or visit page (**B**, operator) — the primary, and the one
    the `website` tag seeds; the managing government authority for
    parks and permits, such as a national park service or a heritage
    ministry (**B**, government body); the official ticketing agent a
    venue names on its own site (**B**, operator by delegation);
    established press reporting a booking-window change (**B**);
    travel guides (**C**). Third-party resellers and tour aggregators
    are OUT OF BOUNDS: their lead times describe THEIR inventory, not
    the venue's.
  - quote required: **yes** for `requirement_class` and
    `typical_lead_time_days` — both are claims a traveller plans a trip
    around, and a wrong lead time is a missed booking window.
    **no** for `sellout_speed`, a coarse class nobody publishes
    verbatim and which we assign from evidence.
  - freshness window: 90 days, and **7 days inside the trip window**;
    a `permit` class re-checks at plan time regardless.
- Spike: `scripts/spikes/feasibility-reservation-flags.mjs` — run
  2026-09-15 over Rome (2,000) and Florence (808) bookable-class
  venues. Returned the coverage table above and the three real
  `reservation` values.
- Alternatives rejected: **Google Places** (`reservable` and booking
  links) — see
  [§ The Google Maps verdict](#the-google-maps-verdict).
  **OpenTable / TheFork / Resy APIs** — partner-gated booking products;
  booking is out of V1 scope, and their coverage is restaurants only,
  which is the half of FE-08 that matters least: a missed dinner is
  recoverable, a missed permit is not.

## venue-attributes

- Serves: [FE-09](FACTS.md#f-fe-09--venue-attributes).
- Source: **OpenStreetMap tags where they exist, ESTIMATED per category
  where they do not** — and the spike's finding is that "where they do
  not" is nearly everywhere. [FACTS](FACTS.md) types this fact
  "fetched + estimated"; the measurement below fixes the ratio.
- Confirmed keys (spike, 2026-09-15, 2,535 Rome-centre venues): the
  tags that exist at all are `outdoor_seating`, `building`, `indoor`,
  `dog`, `wheelchair` and `website`. `min_age`, `duration` and any
  adult-audience tag returned ZERO across the whole sample.
- **Dictionary coverage — the honest table, and it is mostly zeros:**
  | FE-09 field | OSM tag | coverage |
  |---|---|---|
  | `indoor_outdoor` | `outdoor_seating` | 417 / 2,535 = **16.4%** |
  | `indoor_outdoor` | `building` | 122 / 2,535 = 4.8% |
  | `indoor_outdoor` | `indoor` | 6 / 2,535 = 0.2% |
  | `pet_friendly` | `dog` | 3 / 2,535 = **0.1%** |
  | `family_fit` | `kids_area` / `playground` | 2 / 2,535 = **0.1%** |
  | `min_age_note` | `min_age` | 0 / 2,535 = **0.0%** |
  | `audience_suitability` | — | 0 / 2,535 = **0.0%** |
  | `typical_visit_minutes` | `duration` | 0 / 2,535 = **0.0%** |

  For reference, not FE-09 fields: `wheelchair` 331 / 2,535 = 13.1%,
  and `website` **789 / 2,535 = 31.1%** — the retrieval seed, and the
  most useful thing this slot's query returns.
- **So the verdict per field is that OSM DOES NOT MODEL THIS FACT**, and
  saying so is the result:
  - `indoor_outdoor` — PARTIAL from tags, otherwise INFERRED from the
    category ([FE-03](FACTS.md#f-fe-03--venue--poi-records)'s type:
    a museum is indoor, a viewpoint is outdoor). Reliable inference,
    labeled.
  - `typical_visit_minutes` — not modelled; ESTIMATED per category and
    labeled. This is engine configuration of the same kind as
    [WX-13](FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types)'s
    profiles, authored in-repo rather than fetched.
  - `family_fit`, `audience_suitability` — not modelled; estimated
    from category plus `min_age` where present.
    `audience_suitability` matters more than its coverage suggests
    because it powers composition-aware matching
    ([ENGINE §5](../ENGINE.md#5-aggregate--one-score)), so where the
    estimate is weak it must render as an estimate, never as a filter
    that silently drops venues.
  - `min_age_note` — retrieval from the operator site, then estimated.
  - `pet_friendly` — `unknown` IS A LEGAL VALUE per
    [FACTS](FACTS.md), and at 0.1% tag coverage `unknown` is the
    honest answer for almost every venue. It is not inferred.
- Grade: **C** — estimated and derived for all six Dictionary fields,
  which [ENGINE §7](../ENGINE.md#7-render--honest-pixels) renders as a
  labeled estimate. **B** only for the minority of venues where a tag
  or a retrieved operator page actually answers.
- Freshness served: monthly; the estimates are static until the
  category table is revised.
- Coverage: global for the category inference (it rides
  [FE-03](FACTS.md#f-fe-03--venue--poi-records), which is global);
  effectively nil for the tag path.
- Cost: free; Overpass slot limits per
  [finding two](#three-findings-that-shape-every-entry-below).
- retention_rights: **store-raw** for the OSM tags; the estimates are
  ours. license_class: **ODbL 1.0** for the fetched half; repo licence
  for the estimate tables. Attribution: "© OpenStreetMap contributors".
- **Retrieval policy** — the row SPLITS, because one field is a rule a
  traveller is refused entry under and the rest are comfort
  judgements:
  - `min_age_note` and `audience_suitability` —
    - allowed domains + grade: the venue operator's own site (**B**,
      operator); a government licensing or cultural authority (**B**);
      established press (**B**); travel guides (**C**).
    - quote required: **yes** for `min_age_note` — an age limit turns
      a family away at the door. **no** for `audience_suitability`,
      which is a class we assign rather than a rule anyone publishes.
    - freshness window: 1 year.
  - `indoor_outdoor`, `typical_visit_minutes`, `family_fit`,
    `pet_friendly` — `n/a`, and the reason is that these are NOT
    CLAIMS ANYONE PUBLISHES. No page states "the typical visit is 90
    minutes"; that is our estimate, and dressing it in a retrieved
    receipt would make a guess look verified, which is the precise
    inversion [FOUNDATION](../FOUNDATION.md#the-reliability-law)
    forbids. They render as labeled estimates instead.
- Spike: `scripts/spikes/feasibility-venue-attributes.mjs` — run
  2026-09-15 over 2,535 Rome-centre venues. Returned the coverage
  table above, including the four zeros.
- Alternatives rejected: **Google Places attributes** (`dine_in`,
  `good_for_children`, `allows_dogs` — a near-exact match for this
  Dictionary) — see
  [§ The Google Maps verdict](#the-google-maps-verdict). This slot and
  [§ opening-hours](#opening-hours) are where the licence costs Roam
  the most.

## route-services

- Serves: [FE-11](FACTS.md#f-fe-11--route-services-driving-legs-).
- Source: **OpenStreetMap amenities** via Overpass (ODbL, rung 1) —
  `amenity=fuel`, `amenity=charging_station`, `highway=rest_area|services`
  — with **the headline value COMPUTED by us, not fetched.** This is
  the slot where the fact Roam sells does not exist in any database:
  nobody publishes "no fuel for 180 km"; it falls out of the positions.
- Confirmed keys (spike, 2026-09-15, Vík→Höfn corridor): `amenity`,
  `name`, `brand`, `socket:*` on charging stations, `highway` on rest
  areas, plus `lat`/`lon` or `center`. Returned **7 fuel stations, 16
  charging stations and 12 rest areas.**
- **The computed value works, end to end.** From the seven fuel
  positions the spike computed `fuel_gap_max_km = 63.0 km`, between
  **Orkan** (63.417, −18.994) and **N1** (63.794, −18.040), and
  rendered FE-11's `warning_text` as *"no fuel 63 km after Orkan"* —
  the exact shape the fact specifies. `ev_coverage_class` computed to
  **good** (16 chargers against 7 fuel stations), with `socket:*`
  detail present on **9 of 16**.
- **Dictionary coverage:**
  | FE-11 field | how it is answered |
  |---|---|
  | `services_waypoints[]` | FETCHED — OSM amenity positions and types |
  | `fuel_gap_max_km` | **COMPUTED** from those positions |
  | `warning_text` | **COMPUTED** from the gap and the preceding station |
  | `ev_coverage_class` | **COMPUTED** from charger-to-fuel ratio |
  | `leg_id` · `km_mark` | COMPUTED against [FE-06](FACTS.md#f-fe-06--travel-times--distances-per-mode)'s leg distances |
  | `tolls.present` | FETCHED — OSM `toll=yes` on ways |
  | `tolls.est_band` | **NOT IN OSM** → retrieval, rung 5a |
- **One caveat the spike makes visible and the entry must not hide:**
  the gap was computed by ordering stations along the corridor's
  east–west axis, which is a straight-line proxy. The real value must
  be computed ALONG THE ROUTE GEOMETRY from
  [§ routing](#routing), because a station 2 km off the road at the
  wrong moment is not a station, and a corridor that bends makes
  longitude order wrong. The spike proves the DATA and the ARITHMETIC;
  the projection onto the route is
  [V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep)'s, and
  is named here rather than assumed away.
- Grade: **B** — authoritative where covered, and fuel and charging
  infrastructure is among the better-mapped OSM categories because it
  matters to the people who map. `tolls.est_band` is **C** until
  retrieved from the operator, then **B**.
- Freshness served: monthly, per [FACTS](FACTS.md). A station that
  closed is the failure mode here, and it is why the warning is phrased
  as a distance rather than a promise of a specific pump.
- Coverage: global, with the usual OSM density bias. The corridor
  chosen is deliberately the sparse case FE-11 names — Iceland's south
  coast — because a slot that only works in the Netherlands is not
  vetted.
- Cost: free; Overpass slot limits per
  [finding two](#three-findings-that-shape-every-entry-below).
- retention_rights: **store-raw**; the computed gaps and warnings are
  our own derivative. license_class: **ODbL 1.0**. Attribution:
  "© OpenStreetMap contributors".
- **Retrieval policy** — the row SPLITS, because six of these fields
  are computed and one is a price:
  - `tolls.est_band` —
    - allowed domains + grade: the road or tunnel OPERATOR'S own
      tariff page (**B**, operator); the national roads administration
      or transport ministry (**B**, government body); established
      press reporting a tariff change (**B**); motoring-club and
      travel-guide pages (**C**).
    - quote required: **yes** — a toll is a charge a traveller pays,
      and an unquoted figure is a wrong budget line. It rides
      [§ cost-basis](#cost-basis)'s band discipline: a range is honest,
      an invented exact figure is not.
    - freshness window: 1 year, and a plan-time re-check on any leg
      whose `tolls.present` is true.
  - `services_waypoints[]`, `fuel_gap_max_km`, `warning_text`,
    `ev_coverage_class`, `leg_id`, `km_mark`, `tolls.present` —
    `n/a`. The first and last are fetched at rung 1; the rest are
    COMPUTED from geometry. There is no page that states the fuel gap
    on a given leg, so there is no span to quote, and a retrieved
    "there's a long stretch with no petrol" would be strictly less
    trustworthy than the number we can derive.
- Spike: `scripts/spikes/feasibility-route-services.mjs` — run
  2026-09-15 over the Vík→Höfn corridor. Returned the amenity counts,
  the 63.0 km computed gap with both bracketing stations named, the
  `ev_coverage_class` computation and the socket-detail ratio.
- Alternatives rejected: **Google Places fuel/EV** — see
  [§ The Google Maps verdict](#the-google-maps-verdict); ToS 3.2.3(c)
  also forbids deriving content from Places coordinates, which is
  exactly what the gap computation is. **OpenChargeMap** — genuinely
  good EV data and an open project, but its API requires a registered
  key (verified 2026-09-15: HTTP 403, "You must specify an API key");
  not adopted because OSM's `charging_station` answers
  `ev_coverage_class` without one. Recorded as the upgrade path if
  socket-level detail beyond OSM's 9-in-16 is ever needed, with a
  licence read as the first step. **Commercial fuel-price APIs** — a
  price product, and FE-11 wants presence and gaps, not price.

## area-profiles

- Serves: [FE-12](FACTS.md#f-fe-12--area-profiles-).
- Source: **OpenStreetMap `place=suburb|neighbourhood|quarter`** for the
  registry half (ODbL, rung 1), with the CHARACTER half curated for
  demo destinations and retrieved at rung 5a elsewhere — exactly the
  split [FACTS](FACTS.md) types it as.
- Confirmed keys (spike, 2026-09-15, Rome): element `type`/`id`,
  `tags.name`, `tags.place`, `tags.wikidata`, and `lat`/`lon`.
- **Dictionary coverage, measured over 113 Rome area features:**
  | FE-12 field | how it is answered | coverage |
  |---|---|---|
  | `area_id` | OSM `type/id` | **113 / 113 = 100.0%** |
  | `name` | `name` | **113 / 113 = 100.0%** |
  | `centroid` | node position | **113 / 113 = 100.0%** |
  | `wikidata` cross-ref (not FE-12; the retrieval seed) | `wikidata` | 83 / 113 = 73.5% |
  | `vibe_tags[]` | NOT MODELLED | curated, then retrieval 5a |
  | `price_band` | NOT MODELLED | curated, then retrieval 5a |
  | `centrality` | COMPUTED from centroid vs city centroid | — |
  | `transit_access_class` | COMPUTED from [TT-07](FACTS.md#f-tt-07--local-transit-modes-) stops within a radius | — |
  | `best_for[]` | COMPUTED from the [FE-03](FACTS.md#f-fe-03--venue--poi-records) POI mix in the area | — |

  Real names returned: Garbatella, Pigneto, San Lorenzo, Monteverde,
  Balduina, Quadraro — the vocabulary a traveller actually uses about
  where to stay.
- **AND THE SPIKE FOUND A GAP IN OUR OWN PLAN, recorded rather than
  smoothed.** FE-12's Dictionary says "centroid/polygon", and the
  derivations above assume a polygon: `best_for[]` is defined as the
  POI mix INSIDE the area. **All 113 features came back as NODES** — a
  named point, no boundary — and the query's second half,
  `rel[boundary=administrative][admin_level=9|10]`, returned NOTHING
  for Rome. OSM gives us the area REGISTRY at rung 1 and does not,
  here, give us area GEOMETRY.

  The consequence is concrete: `best_for[]` and `transit_access_class`
  cannot be computed by point-in-polygon on this data. They need either
  a radius around the centroid — cheap, approximate, and it will
  mis-assign venues near a boundary — or a real polygon source.
  [V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep) decides
  which; this bench's duty is to say the polygon is not in hand.
  Note also that `admin_level` numbering is country-specific, so a
  production query cannot hard-code 9/10 — that is a per-country
  lookup, and another reason the radius path may win.
- Grade: **A** for `area_id`, `name` and `centroid`. **C** for
  `vibe_tags[]` and `price_band`, curated or retrieved, and **C** for
  the three computed fields, since a radius approximation is an
  estimate and renders as one.
- Freshness served: yearly, per [FACTS](FACTS.md). Neighbourhood names
  and characters move slowly; price bands follow
  [§ cost-basis](#cost-basis)'s quarterly cycle where they are curated.
- Coverage: global for the registry, with the same European density
  bias as every OSM slot. Polygon availability is worse than point
  availability everywhere, and is unmeasured outside Rome — named as
  this slot's open question rather than assumed to be the same.
- Cost: free; Overpass slot limits per
  [finding two](#three-findings-that-shape-every-entry-below).
- retention_rights: **store-raw**. license_class: **ODbL 1.0**;
  curated vibe tables are ours. Attribution: "© OpenStreetMap
  contributors".
- **Retrieval policy** — the row SPLITS between the registry half and
  the character half:
  - `vibe_tags[]` and `price_band` —
    - allowed domains + grade: the city government's own neighbourhood
      and district pages, and the official tourism board (**B**,
      government body); established press with a dated neighbourhood
      feature (**B**); established travel guides (**C**); local blogs
      carrying a visible date (**C**). Real-estate listing sites are
      OUT OF BOUNDS for `price_band`: they price property, and FE-12's
      band is about what a VISITOR pays.
    - quote required: **no.** `vibe_tags[]` draws from a controlled
      vocabulary and `price_band` is a 1–4 class; neither is a verbatim
      claim anyone publishes, and demanding a span would force the
      module to quote a sentence that does not say what we store. The
      provenance url is still kept, so the receipt opens onto the
      source even though the value is our classification of it.
      **NO SAFETY SCORING** — advisories are a deferred socket per
      [FACTS](FACTS.md), and no allowed domain is listed for one.
    - freshness window: 1 year.
  - `area_id`, `name`, `centroid` — `n/a`, answered at rung 1 by a
    global database. `centrality`, `transit_access_class` and
    `best_for[]` — `n/a`, computed from other facts rather than
    retrieved.
- Spike: `scripts/spikes/feasibility-area-profiles.mjs` — run
  2026-09-15 over Rome. Returned 113 named areas with 100% coverage on
  the three registry fields, 73.5% Wikidata linkage, and the
  nodes-not-polygons finding above.
- Alternatives rejected: **Google Places / Maps neighbourhood
  boundaries** — see
  [§ The Google Maps verdict](#the-google-maps-verdict); ToS 3.2.3(c)
  names point-in-polygon analysis on Places coordinates as a
  prohibited derivation, which is precisely the computation this slot
  wants. **Airbnb / Booking neighbourhood guides** — proprietary, and
  commercially motivated on exactly the field (`price_band`) we would
  be borrowing. **Real-estate listing data** — prices property, not
  visits; out of bounds above.

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
- **Retrieval policy** — SHORTHAND, declaring itself: one fact, one
  row. It governs `momentum` and the corroboration of `fame_level`;
  the pageview series itself is fetched, not retrieved, and
  `evidence_basis` records which path answered:
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
- **Retrieval policy** — SHORTHAND, declaring itself: this slot serves
  one fact and the row governs it whole. The slot is nothing BUT its
  policy, since there is no feed underneath it:
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
- **Retrieval policy** — SHORTHAND, declaring itself: one fact, one
  row, governing every field of it, because a venue's dress rule and
  its photography rule are published on the same page when they are
  published at all:
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
