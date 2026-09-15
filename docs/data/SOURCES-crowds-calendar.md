---
type: sources
title: Source registry — Crowds & calendar
status: living
---
# Source registry — Crowds & calendar (V1.S1.T6)

One entry per source slot for the
[F-CC family](FACTS.md#f-cc--crowds--calendar-8--source-task-v1s1t6),
in the format [SOURCES.md](SOURCES.md) ships for Weather. This file is
TEMPORARY BY DESIGN:
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
merges it into [SOURCES.md](SOURCES.md) and deletes it, which is what
keeps the vetting benches file-disjoint
([D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2)).

**The grade scale is not here.** Its one home is
[ENGINE §7](../ENGINE.md#7-render--honest-pixels).

**Every entry carries a RETRIEVAL POLICY** — allowed domains and their
grade, whether a quote is required, and the freshness window — defined
at [FACTS § How to read this file](FACTS.md#how-to-read-this-file) and
required of every entry by
[D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 3. A slot that cannot reach rung 5a writes `n/a` AND SAYS WHY.
**Grade B is defined by DOMAIN CLASS** at
[ENGINE §3](../ENGINE.md#3-acquire--get-the-facts) — operator,
government body, transit authority, established press — and no policy
row below promotes a domain outside those classes to B.

**Every grade here is backed by a live run on 2026-09-15**, from the
script named in each entry. Where a spike could not run, the entry says
so and the slot is graded unproven rather than guessed.

## The family's one structural finding

Four of these eight slots have no global source and never will, because
the underlying facts are published **per jurisdiction by the body that
owns them** — a school ministry, a city hall, a port authority. The
vetting question for those slots is therefore not "which API" but "how
honestly does coverage degrade", and every entry below answers that
before it answers anything else.

## public-holidays

- Serves: [CC-01](FACTS.md#f-cc-01--public-holidays).
- Source: TWO free keyless compilations, used together —
  **Nager.Date** (`date.nager.at/api/v3`) for breadth and
  **OpenHolidays API** (`openholidaysapi.org`) for regional depth.
  Rung 2: both compile each country's officially published holidays;
  neither is itself the publishing government.
- Confirmed keys (spike, live):
  - Nager.Date — `date`, `localName`, `name`, `countryCode`, `fixed`,
    `global`, `counties`, `launchYear`, `types`.
  - OpenHolidays — `id`, `startDate`, `endDate`, `type`, `name[]`
    (multilingual), `regionalScope`, `temporalScope`, `nationwide`,
    `subdivisions[]{code, shortName}`.
- Grade: **B where BOTH indexes cover the country**, because agreement
  between two independent compilations of the same gazette is a check
  we can actually run; **C where only one covers it**, since a single
  uncorroborated compilation of someone else's publication is a curated
  value rather than an authoritative one. Promotion to A is available
  per country by vetting that country's own gazette — not done here.
- Freshness served: yearly, refreshed each January; a country may amend
  a holiday mid-year, so a refetch inside 30 days of the trip window is
  cheap insurance.
- Coverage (measured, not claimed): Nager.Date lists **204** countries;
  OpenHolidays lists **36**. Both were walked, and the gaps are
  specific:
  - **India, Pakistan and Thailand are absent from the Nager.Date index
    entirely** — three high-traffic destinations, so this is a product
    gap and not a footnote.
  - **Brazil is listed by OpenHolidays and returns an empty array** — a
    country in the index with no data behind it, which is a worse
    failure than absence because it reads as "no holidays".
  - Regional depth is where OpenHolidays earns its place: Spain returns
    **54** entries (44 regional-only) against Nager.Date's 32, and
    resolves subdivisions to codes like `ES-CN-SC-TE`.
- Cost: free, no key, no registration, no published rate limit on
  either.
- retention_rights: **cache-only pending a licence answer** — see the
  risk below. license_class: the SERVICE CODE is licensed (Nager.Date
  MIT, OpenHolidays AGPL-3.0, both read at their GitHub repositories
  2026-09-15) but **NEITHER PROJECT STATES A LICENCE FOR THE DATA IT
  SERVES**, which is the thing we would store. Attribution: credit both
  projects.
- **RISK, NAMED RATHER THAN ASSUMED:** it is tempting to argue that
  holiday dates are facts, that facts are not copyrightable, and so to
  treat the payload as freely storable. That is a legal conclusion this
  bench is not entitled to draw. Until it is answered the slot is
  cache-only and outside the asset layer under
  [D-015](../record/DECISIONS.md#d-015--data-asset-law). The escape
  hatch is cheap and known: the dates are re-derivable from each
  country's own gazette at rung 2, so nothing is trapped.
- Retrieval policy — for the countries neither index covers:
  - allowed domains + grade: the country's own government gazette,
    ministry of the interior or labour, or national tourism board where
    it is a state body (**B**, government body); its embassy or
    consulate pages (**B**, government body); established press
    reporting a declared public holiday and naming the decree (**B**);
    any other domain (**C**).
  - quote required: **yes** — a holiday closes things, and a date with
    no quotable source is a guess with a calendar icon.
  - freshness window: 1 year, refetched inside 30 days of the trip
    window, because ad-hoc national holidays are declared at short
    notice in exactly the countries the indexes do not cover.
- Spike: `scripts/spikes/crowds-calendar-public-holidays.mjs` — run
  2026-09-15. Walked 10 probe countries across both APIs and returned
  the counts, key lists and gaps quoted above.
- Alternatives rejected: **Calendarific** (a free tier exists but is
  registration-and-key-gated with commercial pricing above it; no
  advantage over two keyless sources for V1); **python-holidays /
  date-holidays vendored as a library** (moves the same compilation
  in-process, inherits the same unstated data provenance, and adds a
  dependency we would then own); **each country's gazette directly**
  (the correct rung-2 answer and far too large for V1 — it is the
  per-country promotion path when a destination earns it).

## school-calendars

- Serves: [CC-02](FACTS.md#f-cc-02--school-holiday-calendars-).
- Source: **OpenHolidays API** `SchoolHolidays` endpoint, free and
  keyless. Rung 2 where covered.
- Confirmed keys (spike, live): `id`, `startDate`, `endDate`, `type`
  (`School`), `name[]`, `regionalScope`, `temporalScope`, `nationwide`,
  `subdivisions[]{code, shortName}`.
- Grade: **B where covered, D elsewhere.**
  [CC-02](FACTS.md#f-cc-02--school-holiday-calendars-) predicted
  "patchy outside a handful of countries"; the spike walked every
  country in the index rather than sampling, so the patchiness is now a
  number.
- Freshness served: yearly; regional authorities publish the next school
  year 6–12 months ahead.
- Coverage (every country in the index walked, 2026-09-15): **32 of 36
  return 2026 data**; **BR, LV, SE and VA are listed and return
  nothing**. The 32 are Europe plus Mexico and South Africa — so the
  United States, the United Kingdom, Canada, Japan, Australia and the
  whole of Asia have NO source in this slot. Subdivision depth inside
  the covered set varies by two orders of magnitude: Netherlands 354
  subdivisions, Czechia 77, Switzerland 41, Germany 16 — while Croatia,
  Hungary, Ireland, Portugal and Belgium return national dates with
  **zero** subdivisions. A German answer is regionally precise; a
  Belgian answer is a national approximation, and the two must not
  render alike.
- Cost: free, no key.
- retention_rights: cache-only, for the same unstated-data-licence
  reason as `public-holidays`. license_class: service code AGPL-3.0
  (read 2026-09-15); data licence unstated. Attribution: credit
  OpenHolidays.
- Retrieval policy — this slot's uncovered majority is the normal case,
  not the exception:
  - allowed domains + grade: the national or regional ministry of
    education, the state or provincial education department, or the
    school district itself (**B**, government body); an individual
    school's own published calendar when the question is that school
    (**B**, operator); established press reporting term dates (**B**);
    tourism boards, parenting sites and calendar aggregators (**C**).
  - quote required: **yes** — a term date drives a crowd estimate, and
    an unquoted one is an assumption about a whole country's families.
  - freshness window: 1 year, refetched when the trip window falls
    within 60 days, since regional authorities move in-service days.
- Spike: `scripts/spikes/crowds-calendar-school-calendars.mjs` — run
  2026-09-15. 36 countries walked; 32 with data, 4 empty; per-country
  period and subdivision counts printed.
- Alternatives rejected: **scraping ministry sites per country** (the
  right data at a maintenance cost V1 cannot carry, and fragile in
  exactly the fragmented way that makes this slot hard); **inferring
  school breaks from public holidays** (rejected on correctness — the
  summer break is the dominant domestic crowd driver and it is not a
  public holiday anywhere, so the inference would be silently wrong in
  the months that matter most).

## religious-observances

- Serves:
  [CC-03](FACTS.md#f-cc-03--religious-observance-periods--effects-).
- Source: THREE, and the split between them is the point — **the dates
  are computed or converted; the effects are not published anywhere.**
  - Christian movable feasts: **computed in-repo** (Meeus/Jones/Butcher
    for Gregorian Easter, Meeus for Julian/Orthodox Easter, both inside
    the spike). Rung 3: arithmetic, no network.
  - Jewish calendar: **Hebcal** (`www.hebcal.com`), free and keyless.
    Rung 3 in substance — the Hebrew calendar is deterministic
    arithmetic and Hebcal is its reference implementation.
  - Islamic calendar: **Aladhan** (`api.aladhan.com`), free and
    keyless, Gregorian↔Hijri conversion. Rung 3 with a stated method.
- Confirmed keys (spike, live):
  - computed — Western Easter 2026-04-05, Orthodox Easter 2026-04-12,
    Ash Wednesday 2026-02-18, Good Friday 2026-04-03, Holy Week window
    2026-03-30 → 2026-04-05.
  - Hebcal — `title`, `date`, `hdate`, `category`, `subcat`, `hebrew`,
    `leyning`, `link`, `memo`; 40 major-holiday items for 2026.
  - Aladhan — `hijri{date, day, weekday, month{number, en, ar, days},
    year, designation, holidays[], method}` plus the `gregorian`
    mirror; method returned as `HJCoSA`. Ramadan 1447 resolved to
    2026-02-18 → 2026-03-19.
- Grade: **A for the computed Christian dates** (deterministic and
  independently checkable); **A for Hebcal's dates**, where Diaspora vs
  Israel is a PARAMETER we must set rather than an uncertainty;
  **B for Islamic dates**, because a calculated calendar can differ
  from local moon-sighting observance by ±1 day and that caveat must
  render rather than hide. **The EFFECTS are C when curated and fall to
  the retrieval policy below otherwise** — never higher.
- Freshness served: yearly for dates (they are known decades ahead);
  curated review yearly for effects.
- Coverage: global for all three date families. Effects coverage is
  whatever we curate and nothing more.
- Cost: none. No key on any of the three.
- retention_rights: **store-raw** for Hebcal and for anything we compute
  ourselves; **store-raw** for Aladhan conversions, which are
  calculations rather than compiled content. license_class: Hebcal API
  content **CC-BY-4.0**, verified 2026-09-15 at
  `hebcal.com/home/developer-apis` — "Content generated by the
  Hebcal.com web APIs is licensed under a Creative Commons Attribution
  4.0 International License"; Aladhan is operated by Islamic Network as
  a free service with published source and no restrictive data terms
  found on its own pages, read 2026-09-15 — recorded as
  read-and-found-nothing rather than as a positive grant. Attribution:
  credit Hebcal; credit Islamic Network / AlAdhan.
- **THE EFFECTS HALF HAS NO SOURCE, AND THE SPIKE PROVES IT BY KEY.**
  Neither payload carries a structured effects field: the spike tests
  for `effects`, `closures`, `business_impact`, `opening_hours` and
  `shutdown_window` by KEY NAME and finds none. It tests by key
  deliberately — an earlier prose grep "found" an effect in a Hebcal
  memo reading "continues for 25 hours", which is a sentence about a
  fast and not a field: exactly the false case the
  [enumeration law](../LAWS.md#knowledge--tracking) warns about.
- Retrieval policy — **PER FACT-HALF, AND THIS ENTRY IS WHERE THE
  SHORTHAND SPLITS**, because the dates and the effects of
  [CC-03](FACTS.md#f-cc-03--religious-observance-periods--effects-) do
  not share a policy:
  - **dates:** `n/a` — they are computed or converted at rung 3, so
    there is no retrieval path to police and no domain that could
    outrank arithmetic.
  - **effects** (what shuts, when dining changes, which windows go
    quiet):
    - allowed domains + grade: the venue or operator's own site for its
      own closure (**B**, operator); the national or municipal
      government's holiday-trading or public-services notice (**B**);
      established press reporting observance effects in that city
      (**B**); religious institutions' own published schedules (**C** —
      a mosque or a synagogue is authoritative about ITSELF, which
      makes it the operator for its own hours and nothing more, so a
      general claim about a city's dining does not inherit that
      authority); travel blogs and forums (**C**).
    - quote required: **yes**. An effect claim is a claim about
      somebody else's business hours.
    - freshness window: 1 year for a recurring norm; 30 days inside the
      trip window, because observance dates move against the Gregorian
      calendar and last year's article may describe a different season.
- Spike: `scripts/spikes/crowds-calendar-religious-observances.mjs` —
  run 2026-09-15; returned the dates above and the by-key absence of
  effects in both payloads.
- Alternatives rejected: **a single "world religious calendar" API**
  (the ones found bundle dates with editorial descriptions under
  unclear terms, and the dates are computable for free); **inferring
  effects from the date** (rejected outright — "it is Ramadan, so
  restaurants are shut" is false in most of the world and insulting
  where it is false; effects are curated or quoted, never derived from
  a calendar).

## events-feed

- Serves: [CC-04](FACTS.md#f-cc-04--events--festivals-).
- Source: **municipal open-data feeds, one city at a time.** The proven
  example is **NYC Permitted Event Information** (Socrata,
  `data.cityofnewyork.us/resource/tvpp-9vvx.json`), free and keyless.
  Rung 2: the city's own event-permitting office.
- Confirmed keys (spike, live): `event_id`, `event_name`,
  `start_date_time`, `end_date_time`, `event_agency`, `event_type`,
  `event_borough`, `event_location`, `street_closure_type`,
  `community_board`, `police_precinct`, `cemsid`.
  Dictionary mapping: `event_id`←`event_id` · `name`←`event_name` ·
  `area`←`event_borough`/`event_location` · `dates`←`start_date_time`
  and `end_date_time` · **`disruption_flag`←`street_closure_type`** ·
  `expected_scale_band`← **absent, and must be estimated and labeled**.
- Grade: **B in a city with an official permit feed; D everywhere else**
  until retrieval reaches it. There is no honest middle here: either the
  city publishes or we are guessing.
- Freshness served: weekly, and daily inside the trip window — the NYC
  dataset's own `rowsUpdatedAt` read 2026-09-15T19:20Z during the spike,
  so it moves daily.
- Coverage: **one city proven.** That is not a shortfall of the spike,
  it is the shape of the fact:
  [CC-04](FACTS.md#f-cc-04--events--festivals-) says "city-dependent
  feeds → ladder", and this is what that costs. Each additional city is
  its own small vetting job against its own portal.
- Cost: free, keyless. Socrata throttles anonymous callers and issues
  free app tokens for higher volume — no payment at any tier we need.
- retention_rights: **store-raw**, with the caveat that no explicit
  licence is attached: the dataset's Socrata metadata returns
  `attribution: "Office of Citywide Event Coordination and Management
  (CECM)"` and `provenance: "official"` and **no `license` field at
  all** (read 2026-09-15). license_class: city-government public record,
  licence unstated; two candidate terms pages were tried
  (`nyc.gov/html/data/terms.html`, `opendata.cityofnewyork.us/faq/`) and
  neither carried usable licence text — recorded as a read attempt that
  failed, not as an absence of restriction. Attribution: credit CECM.
- Retrieval policy — for every city without a feed, which is almost all
  of them:
  - allowed domains + grade: the city or region's own government site,
    including tourism boards that are state bodies (**B**); the venue or
    festival ORGANISER's own site for its own event (**B**, operator);
    the transit authority for event-day service changes (**B**, transit
    authority); established press previewing a major event (**B**);
    ticketing platforms, listings aggregators and blogs (**C**).
  - quote required: **yes** for dates and for any `disruption_flag`. A
    street closure moves a traveler's whole day, so an unquoted one is
    discarded rather than downgraded.
  - freshness window: 7 days, tightening to 24 h inside 48 h of the
    date — event schedules change late, and cancellations are the
    expensive case.
- Spike: `scripts/spikes/crowds-calendar-events-feed.mjs` — run
  2026-09-15. Four candidate shapes probed: Ticketmaster Discovery
  **HTTP 401** (key required, payload therefore unproven); Eventbrite
  public search **HTTP 404** — a 404 and not a 401, so the route is gone
  rather than gated; Wikidata SPARQL **HTTP 200** but its 2026 rows are
  conference talks and gallery openings, so its event coverage is
  incidental; NYC Socrata **HTTP 200**, 200 rows, 3 carrying a real
  street closure (e.g. a Queens block party on 2026-09-19, "Full Street
  Closure").
- Alternatives rejected: **Ticketmaster Discovery API** — not rejected
  on merit but PARKED AS UNPROVEN: a key is free and self-serve, and it
  would cover ticketed concerts and sport well, but it carries only the
  "reason to go" polarity and nothing about street closures. Worth a key
  when V1 needs ticketed events. **PredictHQ** (exactly this product,
  with attendance bands — priced for enterprise, so a V1 blocker on
  cost, not on fit). **Eventbrite** (the public search endpoint no
  longer exists). **Wikidata** (free and CC0, but its event coverage is
  whatever editors happened to add). **Scraping city "what's on" pages**
  (fragile, and usually against the page's own terms).

## seasonal-crowding

- Serves: [CC-05](FACTS.md#f-cc-05--seasonal-crowd-level).
- Source: **Eurostat `tour_occ_nim`** — nights spent at tourist
  accommodation establishments, monthly, free and keyless — as the
  MEASURED input, with the peak/shoulder/off classification computed by
  us from the series. Rung 2: an EU statistical authority. Outside its
  coverage the slot stays what
  [CC-05](FACTS.md#f-cc-05--seasonal-crowd-level) already says it is:
  curated, plus derivation from
  [CC-01](FACTS.md#f-cc-01--public-holidays) /
  [CC-02](FACTS.md#f-cc-02--school-holiday-calendars-) and
  [WX-11](FACTS.md#f-wx-11--climate-normals-by-date-of-year).
- Confirmed keys (spike, live): JSON-stat — `value{}` keyed by flat
  index, `dimension.time.category.index{"2024M10":0, …}`,
  `dimension.geo`, `dimension.unit`, `dimension.nace_r2`,
  `dimension.c_resid`, `size[]`, `updated` (ESTAT stamped
  2026-09-11T23:00+0200 during the spike), `label`.
- Grade: **B for the geographies Eurostat covers** — a national
  statistical series is a measurement, not an opinion; **C where the
  classification is derived from holidays plus climate normals with no
  measured series**; **D where neither exists and only model memory
  remains**, rendered unverified.
- Freshness served: yearly recompute. The classification is a shape, not
  a number, and shapes move slowly.
- Coverage (measured): **6 of 9 probed geographies answered** — HR, IT,
  ES, IS, NO and TR returned series; JP, US and TH returned HTTP 200
  with an empty series, the same "listed but empty" trap seen in the
  holiday indexes. Eurostat is EU + EFTA + candidate countries **by
  construction**, so this is a REGIONAL rung-2 source and the rest of
  the world has no measured input here at all.
- The derivation, stated so it can be argued with: monthly mean nights
  over the last 24 months; a month is **peak** at ≥66% of the year's
  best month, **shoulder** at 33–66%, **off** below 33%. Live results:
  Croatia peaks in August at 26.9M nights against 0.66M in January — a
  **40.9×** swing — while Spain's August-to-January ratio is 3.1×. The
  same words, "peak season", describe two completely different
  realities, which is why the ratio renders alongside the label.
- Cost: free, keyless, no registration.
- retention_rights: **store-raw**. license_class: Eurostat reuse,
  verified 2026-09-15 at
  `ec.europa.eu/eurostat/web/main/help/copyright-notice` — "Reuse of
  statistical data, metadata, publications, and other dissemination
  tools published on this website for commercial or non-commercial
  purposes is authorised provided the source is acknowledged", with
  editorial content under CC-BY-4.0. Attribution: "Source: Eurostat".
- Retrieval policy — for the world outside Eurostat:
  - allowed domains + grade: the destination's national or regional
    tourism STATISTICS office, or its national statistical institute
    (**B**, government body); UN Tourism and other intergovernmental
    statistical publications (**B**); established press reporting
    official visitor numbers and naming the issuing body (**B**); travel
    media "best time to visit" pages (**C** — useful, and an opinion).
  - quote required: **no**, and this is the one slot where a quote is
    the wrong test: the value we want is a SHAPE across twelve months,
    which no single quoted sentence carries. What is required instead is
    that the retrieved value name its issuing body and its period, and
    render as a labeled estimate.
  - freshness window: 1 year.
- Spike: `scripts/spikes/crowds-calendar-seasonal-crowding.mjs` — run
  2026-09-15; the per-country month classifications and peak ratios
  above are its output.
- Alternatives rejected: **the UN Tourism data portal** (the global
  coverage this slot wants, behind subscription and not machine-readable
  at monthly granularity — revisit if a licence is ever bought);
  **Google Trends destination interest** (no official API, and the
  unofficial routes are scraping); **hotel-rate seasonality as a
  crowding proxy** (a real signal, and it belongs to
  [CO-02](FACTS.md#f-co-02--lodging-rates-quote-or-range-) in
  [V1.S1.T8](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  rather than here — a cost source answering a crowd question would put
  one fact in two homes).

## venue-busyness

- Serves: [CC-06](FACTS.md#f-cc-06--venue-busyness-curves-).
- Source: **NONE that is licensed.** This slot ships as a labeled rung-4
  ESTIMATE shaped from inputs we already hold: opening hours
  ([FE-04](FACTS.md#f-fe-04--opening-hours), V1.S1.T4's slot), venue
  type, day of week, and the calendar pressure THIS family supplies —
  [CC-01](FACTS.md#f-cc-01--public-holidays),
  [CC-02](FACTS.md#f-cc-02--school-holiday-calendars-),
  [CC-04](FACTS.md#f-cc-04--events--festivals-) and
  [CC-08](FACTS.md#f-cc-08--cruise-port-call-schedules-).
- Confirmed keys: none — there is no fetch path to confirm. What the
  spike confirmed instead is the ABSENCE, at the primary sources:
  - Google's own Places API data-fields reference (read 2026-09-15)
    contains **no** `popularTimes`, no "popular times", no `busyness`
    and no `liveBusy`; `currentOpeningHours` is present. Popular Times
    is a Google Maps product surface, not an API field.
  - Google Maps Platform Terms (read 2026-09-15) state **"No Scraping.
    Customer will not export, extract, or otherwise scrape Google Maps
    Content for use outside the Services"** — expressly including "copy
    and save business names, addresses, or user reviews" — and **"No
    Caching. Customer will not cache Google Maps Content except as
    expressly permitted under the Maps Service Specific Terms."**
- Grade: **C** — a derived, labeled estimate, and never better while
  this is the source. It renders as an estimate under
  [ENGINE §7](../ENGINE.md#7-render--honest-pixels) and must never
  present as a measurement.
- Freshness served: monthly for the estimate's shape; the calendar
  inputs refresh on their own windows and the estimate recomputes with
  them.
- Coverage: wherever [FE-04](FACTS.md#f-fe-04--opening-hours) covers a
  venue — so the coverage question belongs to T4's slot, not this one.
- Cost: none.
- retention_rights: **ours** — the estimate is our own derivation.
  license_class: internal; attribution flows from whatever inputs feed
  it. **No Google Maps Content is stored, cached or derived from**, and
  that is a design constraint rather than a preference: their terms
  forbid all three, and
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) makes a source
  we may not retain a non-source for the asset layer.
- Retrieval policy — retrieval cannot produce an hourly curve, but it
  can produce the specific claims travelers actually need ("go at
  opening", "closed Mondays in winter", "queues on the first Sunday"):
  - allowed domains + grade: the venue operator's own site, including
    its visit-planning or "best time to visit" page (**B**, operator);
    the museum's or park's governing municipal or national body (**B**,
    government body); established press reporting queue conditions at
    that venue (**B**); review platforms, blogs and forums (**C**).
  - quote required: **yes** — an hourly claim about someone else's venue
    is theirs to make.
  - freshness window: 90 days, tightening to 30 inside the trip window;
    opening-hour regimes change seasonally.
- Spike: `scripts/spikes/crowds-calendar-venue-busyness.mjs` — run
  2026-09-15; returned the field-absence list and both terms clauses
  quoted above.
- Alternatives rejected: **scraping Google Popular Times** (the usual
  answer, and it is forbidden by the No Scraping and No Caching clauses
  of the same platform, quoted above — a terms rejection, not a
  difficulty rejection); **BestTime.app** (a real keyed commercial
  foot-traffic API and the honest upgrade path — NOT vetted here because
  no key exists, so no payload and no grade; recorded so the next bench
  does not re-discover it); **Foursquare and SafeGraph-class movement
  panels** (enterprise pricing and consent questions well beyond V1).

## trending-general

- Serves: [CC-07](FACTS.md#f-cc-07--trending-signal-computed).
- Source: **a computed signal over proxies**, per
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 9 — never an assertion that something is trending. The decisive
  vetting question was not whether each proxy's API works but **whether
  its terms let us KEEP what we derive**, because
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) turns on
  retention. Each proxy was taken to its own licence text.

  | Proxy | Verdict | The clause that decided it |
  |---|---|---|
  | Dated press & blogs (rung 5a) | **IN** — and it is the backbone | no API to license; it IS the retrieval policy below |
  | Review velocity | **IN, conditionally** | our own differencing of snapshots of a venue source [V1.S1.T4](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) licenses; its terms ride T4's entry, not this one |
  | YouTube velocity | **IN, cache-only** | Developer Policies III.E.4 — "an API Client must not store statistics retrieved as Non-Authorized Data for more than 30 days" |
  | Reddit velocity | **OUT** | Data API Terms §3.1 and §6 — commercial use needs "a separate agreement", and on termination we must delete cached content and "any data or models that were derived from" it |
  | Reservation scarcity | **OUT** | no self-serve public reservation API reachable; partner programmes only |

- Confirmed keys: **none for the API proxies — and that is the finding,
  not a gap in the work.** Both keyed APIs were called without
  credentials to prove the requirement rather than assert it: YouTube
  `search.list` returned **HTTP 403** ("Method doesn't allow
  unregistered callers"); `oauth.reddit.com` and the legacy
  `reddit.com/…/new.json` route both returned **HTTP 403**. No key,
  token or secret was used, created or written anywhere — this repo is
  public.
- Grade: **C, and structurally so.** A computed signal over proxies is a
  derived value, and
  [ENGINE §7](../ENGINE.md#7-render--honest-pixels) grades derived
  values C; no amount of proxy quality moves that. The individual press
  citations underneath it are B or C on their own domains, and they are
  what a receipt opens.
- **RENDER: THE LABEL CARRIES THE LAG.** `lag_days` renders with every
  trend claim — "rising, as of last week" — never a bare "trending now",
  per [CC-07](FACTS.md#f-cc-07--trending-signal-computed). Every proxy
  here is behind the world: press is dated, review counts are differenced
  over weeks, and a YouTube window is at most 30 days old by licence. A
  signal that hides its own lag is the one dishonest thing this slot
  could do.
- Freshness served: weekly.
- Coverage: global but COARSE, and unevenly so — press coverage of where
  to eat is dense in a handful of cities and thin everywhere else, so the
  signal must be allowed to say "no signal" rather than manufacture a
  flat one.
- Cost: the licensable set is free. YouTube's default quota is small —
  search is capped at roughly 100 calls/day on the default allocation
  (`developers.google.com/youtube/v3/determine_quota_cost`, read
  2026-09-15) — so it can only ever be a sampled signal over a watchlist,
  never a crawl.
- retention_rights: **derived-only, and cache-only for YouTube** (a
  30-day ceiling, then delete or refresh). license_class: mixed and
  per-proxy; the press half is quotation under the retrieval policy, not
  bulk storage. Attribution: every rendered trend claim cites the
  sources underneath it, which the receipt requirement already forces.
- **WHY REDDIT IS OUT, IN ONE SENTENCE:** its terms let Reddit revoke
  access "for any reason and for any period of time, without notice" and
  then require deletion of the derived models too, so any asset built on
  it would be an asset someone else can delete.
- **PLATFORM MINING STAYS A LATER SOCKET.** Instagram and TikTok are not
  vetted here and no scraper was evaluated. The ground is TERMS OF
  SERVICE, not difficulty — the signal is real and the access is not
  licensable, so a public product cannot rest on it
  ([ROADMAP §Pool](../ROADMAP.md#pool--unversioned-sockets)).
- Retrieval policy — the dated-press proxy IS this policy, so this row is
  load-bearing rather than a formality:
  - allowed domains + grade: established press and recognised food and
    travel media with datelines — a city paper, a national title, a
    magazine of record (**B**, established press); the venue or
    operator's own announcement of an opening or an award (**B**,
    operator); official awards and guides that publish dated lists
    (**B**, where the awarding body is the operator of that award);
    personal blogs, forums, listicles and undated aggregators (**C**).
  - quote required: **yes**, AND THE QUOTE MUST CARRY A DATE. An undated
    "hottest new restaurant" is not a trend signal at any grade, because
    the whole content of the fact is when it was said.
  - freshness window: 90 days for a rising signal — beyond that the claim
    has become a fact about last season — and the observed window plus
    `lag_days` render with the value regardless.
- Spike: `scripts/spikes/crowds-calendar-trending-general.mjs` — run
  2026-09-15; returned both 403s and pulled the YouTube and Reddit
  clauses quoted above verbatim from the providers' own pages.
- Gotcha recorded for whoever runs this next: `developers.google.com`
  serves a LOCALISED policy page when no `Accept-Language` header is
  sent. The first run grepped the English clause against an Italian page
  and reported NOT FOUND — a clean result from a bad probe. The spike now
  pins `?hl=en` and the header.
- Alternatives rejected: **Instagram and TikTok mining** (a Later socket,
  on terms of service — see above); **Google Trends** (no official API,
  and the unofficial routes are scraping); **a paid social-listening
  vendor** (enterprise pricing, and it would move the licence problem
  rather than solve it); **asking the model what is trending** (rung 5b,
  grade D, and precisely the assertion
  [D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 9 replaced with a computation).

## cruise-port-calls

- Serves: [CC-08](FACTS.md#f-cc-08--cruise-port-call-schedules-).
- Source: **the port authority's own published schedule, per port.**
  Rung 2: a port authority is a government body. There is no global
  cruise-call API, and the published form is a FILE rather than a feed.
- Confirmed keys (spike, live — Port of Dubrovnik 2026 XLSX, parsed with
  a 25-line zero-dependency zip reader): 243 sheet rows, of which **56
  are per-ship call rows**, carrying berth, ship name, previous and next
  port, flag state, operator, length, gross tonnage, `Vrijeme od` and
  `Vrijeme do` as Excel date serials, `Razlika (h)` dwell, and
  passengers by capacity. Day rows carry `Broj ticanja` (calls that day)
  and `Ukupno putnika po kapacitetu`.
  Dictionary mapping: `port_id`← one file per port · `date`←
  Godina/Mjesec/Dan · `ships_count`←`Broj ticanja` ·
  `in_port_window`←`Vrijeme od` and `Vrijeme do` (plus `Razlika (h)`) ·
  **`passengers_band`← PRESENT**, as passengers BY CAPACITY — an upper
  bound, and therefore exactly the band
  [CC-08](FACTS.md#f-cc-08--cruise-port-call-schedules-) asks for, never
  a headcount.
- Grade: **B where the port publishes; D where it does not**, until
  retrieval reaches it. A port authority publishing its own arrivals is
  as authoritative as this fact gets.
- Freshness served: weekly, and daily inside the trip window — calls
  shift with weather and mechanical delays.
- Coverage: **per-port, and the gaps are structural.** Measured
  2026-09-15: Dubrovnik publishes a 2026 XLSX (32,891 bytes,
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`)
  plus PDFs for prior years; Kiel publishes a cruise list as a PDF
  (105,766 bytes, `application/pdf`); **Copenhagen Malmö Port publishes
  no machine-readable call list at its cruise route at all** — a major
  cruise port with nothing to parse. So this slot's coverage is the list
  of ports we have onboarded, and every other port renders as a labeled
  gap rather than an implied "no ships".
- Cost: free — these are public documents on public port sites.
- retention_rights: **store-raw**. license_class: public-sector
  information published by a port authority; no explicit reuse licence
  was found on either port's download page (read 2026-09-15), recorded
  as read-and-found-nothing. Attribution: name the port authority on any
  rendered call.
- Retrieval policy — for ports that publish as prose, as a PDF, or not at
  all:
  - allowed domains + grade: the port authority's own site (**B**,
    government body); the municipality or regional government where it
    runs the port (**B**); the cruise line's own itinerary page for its
    own ship (**B**, operator); established local press reporting a
    heavy call day (**B**); cruise-schedule aggregators and enthusiast
    sites (**C** — they are third-party republishers, so they cannot
    carry B under
    [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts)'s classes no
    matter how accurate they are).
  - quote required: **yes** for ship counts and in-port windows — the
    whole use of this fact is shifting a traveler's old-town visit by
    three hours, and an unquoted number would move their day for no
    reason.
  - freshness window: 7 days, tightening to 24 h inside 48 h of the date.
- Spike: `scripts/spikes/crowds-calendar-cruise-port-calls.mjs` — run
  2026-09-15. Found the download links on the Port of Dubrovnik's own
  arrivals page, fetched the 2026 XLSX, unzipped and parsed it, printed
  the real rows quoted above, and probed Kiel and Copenhagen for the
  coverage contrast.
- Alternatives rejected: **CruiseMapper, CruiseTimetables and similar
  aggregators** (they carry the broadest coverage and they are
  third-party republishers — not the operator, not a government body, so
  they cannot reach grade B, and lifting their tables wholesale is taking
  someone else's compilation; useful only as a hint that a port publishes
  at all); **AIS vessel-tracking feeds** (they show where a ship IS,
  which is the mid-trip companion's question — V2+ — and not the
  published-schedule question a planner needs weeks ahead);
  **cruise-line itinerary pages as the primary route** (authoritative per
  ship and hopeless per port — the fact is "how many ships call at
  Dubrovnik on Tuesday", which no single line can answer).

## What this file leaves open

Named here so nothing is silently parked
([LAWS §Workflow](../LAWS.md#workflow-non-negotiable)):

1. **The data-licence question on the two holiday compilations.** Their
   code licences are known; the licence of the data they serve is not
   stated by either project. Until that is answered both slots are
   cache-only and outside the asset layer.
2. **A YouTube API key.** Without one the velocity proxy is vetted but
   unproven — the 403 and the terms are proven, the payload is not.
   Raised as a `BLOCKED:` question on this bench's PR.
3. **Per-city and per-port onboarding.** `events-feed` and
   `cruise-port-calls` grow one jurisdiction at a time by construction.
   That is a backlog shape rather than a defect, and it should be sized
   before
   [V1.S7](../ROADMAP.md#v1s7--the-other-four-families-plug-in-proof)
   plugs this family in.
