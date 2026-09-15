---
type: sources
title: Source registry — Sky & sea
status: living
---
# Source registry — Sky & sea (V1.S1.T3)

One entry per Sky & sea source slot
([FACTS assignment map](FACTS.md#t2t6-assignment-map)), in the format
[SOURCES.md](SOURCES.md) already ships for Weather. This file is
TEMPORARY BY DESIGN:
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
consolidates the per-family files into [SOURCES.md](SOURCES.md) and
deletes them.

**THE GRADE SCALE IS NOT HERE.** Its one canonical home is
[ENGINE §7](../ENGINE.md#7-render--honest-pixels), and this file
points at it rather than restating it.

**Every entry carries a RETRIEVAL POLICY** — allowed domains and
their grade, whether a quote is required, and the freshness window —
defined in
[FACTS § How to read this file](FACTS.md#how-to-read-this-file) and
required of this bench by
[D-088](../record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
ruling 3. A slot whose facts cannot reach rung 5a writes `n/a` AND
SAYS WHY. **Grade B is defined by DOMAIN CLASS**
([ENGINE §3](../ENGINE.md#3-acquire--get-the-facts): the operator
itself, a government body, a transit authority, established press) —
a policy row applies that definition and may never promote a domain
outside those classes.

**Every grade below is backed by a live run.** Seven spike scripts
under `scripts/spikes/sky-sea-*.mjs`, all run 2026-09-15; each entry
names its script, the command, and what the real response returned.
Every licence was read at the source's own terms page on the date
stated.

## Sky & sea slots (V1.S1.T3)

### astro-ephemeris
- Serves: [SS-01](FACTS.md#f-ss-01--sun-ephemeris) (sun ephemeris),
  [SS-02](FACTS.md#f-ss-02--golden--blue-hour-windows) (golden/blue
  hour, derived from SS-01),
  [SS-03](FACTS.md#f-ss-03--moon-ephemeris) (moon ephemeris).
- Source: **COMPUTED — no vendor, no feed.** Rung 3
  ([ENGINE §3](../ENGINE.md#3-acquire--get-the-facts)): the NOAA
  Solar Calculator equations for solar declination, equation of time
  and hour angle; Meeus (*Astronomical Algorithms*, ch. 48) for lunar
  phase angle and illuminated fraction. The MATH SOURCE IS THE
  SOURCE, and it is proved by cross-check rather than asserted: the
  spike computes every value and compares it against the **US Naval
  Observatory** API (aa.usno.navy.mil), a government body and the
  authoritative oracle for exactly these quantities.
- Confirmed keys (spike): USNO returns `sundata` (Rise, Set, Upper
  Transit, Begin/End Civil Twilight), `moondata` (Upper/Lower
  Transit, rise/set or a continuously-above-horizon phenomenon),
  `fracillum`, `curphase`, `closestphase`, `tz`, `isdst`,
  `day_of_week`. Our computed side produces sunrise, sunset, solar
  noon, civil twilight, **astronomical twilight** and day length,
  plus moon illuminated fraction and phase name.
- Grade: **A.** Global by construction, exact, license-clean (we own
  the computation), and no network dependency at request time.
  Measured fidelity: worst sun-event delta **3 minutes** across
  Reykjavik 64°N, Kyoto 35°N and Sydney 34°S; moon illumination
  matched USNO **to the percent at all three sites**.
- Freshness served: immutable — the value is a pure function of date
  and location, so it is computed on demand and cached forever.
- Coverage: global and exact, including the polar cases. The spike's
  Reykjavik run returns astronomical twilight where USNO's `oneday`
  service returns none, because that service does not carry the
  quantity — **the computed path covers MORE than the oracle does**,
  which is the second reason not to make the oracle the source.
- Cost: none. No key, no quota, no request.
- retention_rights: **ours** — we compute it. license_class: repo
  licence. Attribution: none owed for the computation. USNO is a
  spike-time oracle only and never a production fetch; its API docs
  page (aa.usno.navy.mil/data/api, read 2026-09-15) carries **no
  data-use statement**, which is recorded as read-and-not-found
  rather than assumed — and which costs nothing, because no USNO
  value is stored.
- Retrieval policy: **`n/a`**, and the reason is that retrieval could
  only be worse. SS-01..03 are answered exactly at rung 3 for every
  point on Earth; a retrieved sunrise time carries a url and a span
  but no more accuracy than the equation that generated it, and it
  adds a failure mode the math does not have. There is no rung-5a
  path to police because there is nothing a page could add.
- Spike: `scripts/spikes/sky-sea-astro-ephemeris.mjs` —
  `node scripts/spikes/sky-sea-astro-ephemeris.mjs`, run 2026-09-15.
  Returned: three sites × five compared sun events, deltas
  −1/+3/+1/−1/+3 min (Reykjavik), +1/0/0/+1/−1 (Kyoto), 0/0/0/0/−1
  (Sydney); moon 73% vs USNO 73%, 89% vs 89%, 90% vs 90%; phase names
  matched on all three.
- Alternatives rejected: **SunCalc** (MIT, tiny, widely used — but a
  dependency for arithmetic we can hold in one file, and it carries
  no twilight-angle configurability we need); **astronomy-engine**
  (MIT, higher precision, no deps — kept as the NAMED UPGRADE if
  V1.S3 ever needs sub-minute rise/set or rigorous eclipse
  circumstances; rejected for V1 only because 3-minute fidelity
  already exceeds what a plan renders); **calling USNO per request**
  (a government dependency, a network round-trip and a rate limit
  for a value we can compute offline — and it does not return
  astronomical twilight); **Open-Meteo's daily `sunrise`/`sunset`**
  (free and correct, but it makes a sun angle depend on a weather
  vendor's uptime).

### tides
- Serves: [SS-04](FACTS.md#f-ss-04--tide-tables-) (tide tables),
  [SS-10](FACTS.md#f-ss-10--tidal-range-class) (tidal range class,
  derived from SS-04).
- Source: **NOAA CO-OPS Tides & Currents**
  (api.tidesandcurrents.noaa.gov) — `mdapi` for the station registry,
  `datagetter` for predictions. Rung 2: a national authoritative
  source, **US waters and territories only**.
- Confirmed keys (spike): predictions return `t` (local time),
  `v` (height), `type` (`H`/`L`) per event; station metadata returns
  `id`, `name`, `state`, `lat`, `lng`, `type`, `reference_id`,
  `timemeridian`, `timezonecorr`, `tidepredoffsets`, `affiliations`,
  `portscode`. Datum and units are request parameters (spiked at
  `MLLW` / metric — [D-013](../record/DECISIONS.md#d-013--canonical-units-si-storage) friendly).
- Grade: **B** — authoritative where covered, and covered means the
  US. The gap elsewhere is not softened: see Coverage.
- Freshness served: weekly per trip window. Harmonic predictions are
  deterministic, so the only reason to refetch is a moved trip
  window, not a stale value.
- Coverage: **MEASURED, not estimated.** 3,499 tide-prediction
  stations across 30 US state/territory codes. The spike ran a
  nearest-station search for five sites: Bar Harbor ME **1 km**, San
  Francisco **0 km**, and then Mont-Saint-Michel FR **4,847 km**,
  Sydney AU **2,479 km**, Jeju KR **2,567 km**. **SS-04 does not
  resolve outside US waters from this source**, and SS-10 inherits
  the gap because it is derived from SS-04's own series. A station an
  ocean away is not coverage, and the engine must render absence
  rather than the nearest number.
- Cost: free. No key. NOAA asks for an `application` parameter
  identifying the caller; the spike sends `roam-spike-v1s1t3`.
- retention_rights: **store-raw**. license_class: **US-Gov public
  domain** — verified 2026-09-15 at
  tidesandcurrents.noaa.gov/disclaimers.html, which states that "the
  information on government servers are in the public domain, unless
  specifically annotated otherwise, and may be used freely by the
  public", subject to not presenting modified content as official
  government material. Attribution: courtesy credit ("Source: NOAA
  CO-OPS").
- **Retrieval policy — SPLIT, because the two facts this slot serves
  differ.** This is not an entry-level shorthand.
  - **[SS-04](FACTS.md#f-ss-04--tide-tables-) — tide tables:**
    - allowed domains + grade: the national hydrographic office or
      tidal authority for the country in question — SHOM, UKHO/NTSLF,
      JMA, KHOA, BOM and their peers (**B**, government body); the
      **port or harbour authority publishing its own tide table**
      (**B**, the operator itself); established press quoting an
      official tide table AND naming the issuing authority (**B**);
      any other domain (**C**). **Tide-prediction aggregator sites
      and apps are C and never B** — they redistribute someone
      else's harmonics and are not the issuing authority, so they
      fail every one of
      [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts)'s classes.
    - quote required: **yes**. A tide time without its height and
      **its datum** is not a usable value, and a value with no
      verifiable span at the fetched url is discarded rather than
      downgraded — a mis-datumed low tide is worse than no low tide,
      because it reads as certainty.
    - freshness window: **7 days** within the trip window; **30 days**
      outside it. Predictions are deterministic, so the window exists
      to catch a changed or withdrawn table, not a changed value.
  - **[SS-10](FACTS.md#f-ss-10--tidal-range-class) — tidal range
    class: `n/a`**, and the reason is structural. SS-10 is computed
    from SS-04's series; no page anywhere states "Thursday is a
    spring low at this beach" in a form we would trust more than the
    arithmetic. It therefore resolves **exactly where SS-04 resolves
    and is absent everywhere else** — it can never be retrieved into
    existence over a gap in its own input.
- Spike: `scripts/spikes/sky-sea-tides.mjs` —
  `node scripts/spikes/sky-sea-tides.mjs`, run 2026-09-15. Returned:
  registry of 3,499 stations; 31 hi/lo events per US site over
  2026-10-01→08; Bar Harbor first events 02:19 H 3.313 m, 08:22 L
  0.184 m; SF 04:24 H 1.346 m, 22:04 L −0.057 m; SS-10 classes
  derived per day (Bar Harbor 3.74 m spring → 2.91 m neap).
- **Finding the spike forced, recorded because the engine must not
  repeat it:** bucketing hi/lo events by CALENDAR day understates the
  range on days holding fewer than four events — SF's 2026-10-03 read
  0.68 m and classed "neap" on three events, against ~1.7 m on its
  neighbours. **SS-10 must bucket by TIDAL day (~24 h 50 m).** The
  spike now prints the event count so the artefact is visible rather
  than inferred.
- Alternatives rejected: **WorldTides API** (global coverage, but
  commercial per-call pricing and redistribution terms — revisit when
  non-US tide fidelity is a demo requirement, as its own mini-spike);
  **Stormglass** (aggregator, commercial tiers, and it is not an
  issuing authority — it would be a **C** domain even under the
  retrieval policy above); **FES2014 / TPXO global harmonic models**
  (the genuinely global answer, and the right long-term fix — but
  they are research datasets with registration and non-commercial or
  attribution-restricted terms that must be read per model before
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) can clear
  them; NOT vetted here and NOT assumed clean); **Admiralty EasyTide**
  (UKHO, authoritative for UK waters — a rung-2 candidate for a
  future UK gap-fill, unspiked).

### aurora-forecast
- Serves: [SS-05](FACTS.md#f-ss-05--aurora-activity-forecast)
  (Kp / geomagnetic activity, 3-day forecast + 27-day outlook).
- Source: **NOAA Space Weather Prediction Center**
  (services.swpc.noaa.gov). Rung 1: the planetary K-index is a
  **global** index by construction, so one source covers every
  destination. Three products spiked: the 3-day planetary K-index
  forecast (JSON), the 27-day outlook (text), and the OVATION aurora
  nowcast grid (JSON).
- Confirmed keys (spike): Kp forecast rows carry `time_tag`, `kp`,
  `observed`, `noaa_scale` — and `observed` takes exactly three
  values, **`observed` / `estimated` / `predicted`**, walked from the
  live payload rather than guessed, because an engine that treats
  `estimated` as a forecast will mis-date its own advice. The 27-day
  text product carries date, 10.7 cm radio flux, planetary A index
  and largest Kp per row. OVATION carries `Observation Time`,
  `Forecast Time`, `Data Format`, `coordinates`, `type`.
- Grade: **A.** Authoritative, global, public domain, no key, and the
  fact itself is planetary rather than local.
- Freshness served: 6 h in-window (the 3-day product updates far more
  often); daily otherwise. OVATION carries its own ~30-minute
  forecast time and is a nowcast, never a trip-planning value.
- Coverage: global — Kp is a planetary index. OVATION's grid is
  global at 1° resolution (65,160 cells).
- Cost: free, no key, no published quota.
- retention_rights: **store-raw**. license_class: **US-Gov public
  domain** — SWPC's own footer links to weather.gov/disclaimer as its
  terms page, read 2026-09-15: NWS web pages "are in the public
  domain, unless specifically noted otherwise, and may be used
  without charge for any lawful purpose" provided we do not claim
  copyright, imply endorsement, or present modified content as
  official. Attribution: courtesy credit ("Source: NOAA SWPC"); the
  NWS **name and visual identifier are trademarked** and are not used.
- Retrieval policy: **`n/a`**, and the reason is coverage rather than
  convenience. SS-05 is answered at rung 1 by a global-by-construction
  index, so no rung-5a path exists to police. If SWPC is ever
  unavailable the fallback is another **rung-1 issuer of the same
  index** — GFZ Potsdam issues the official Kp — and not a retrieved
  page; that candidate is **named but unspiked** here and takes its
  own mini-spike before it is relied on.
- Spike: `scripts/spikes/sky-sea-aurora-forecast.mjs` —
  `node scripts/spikes/sky-sea-aurora-forecast.mjs`, run 2026-09-15.
  Returned: 81 Kp rows (62 observed, 2 estimated, 17 predicted),
  forecast peak Kp 4.67 at 2026-09-16T21:00 carrying `noaa_scale`
  `G1`; 27 outlook rows issued 2026 Sep 14 0117 UTC, largest Kp 5 in
  the window; OVATION grid of 65,160 points, 21,118 with non-zero
  probability, Tromsø 46%, Reykjavik 41%, Edinburgh 3%, Kyoto 0%.
- Alternatives rejected: **commercial aurora-alert apps and APIs**
  (they resell this index; cost without fidelity, and a **C** domain
  under any retrieval policy); **scraping SWPC's HTML dashboards**
  (the JSON products exist, so scraping would be choosing the
  fragile path); **regional aurora services** (Met Office, Icelandic
  Met Office and peers publish local aurora outlooks — they are
  **B**-class government bodies and are worth vetting for a future
  local-forecast fact, but SS-05 asks for the planetary index and
  they do not issue it).

### aurora-viability
- Serves: [SS-06](FACTS.md#f-ss-06--aurora-viability-latitude--season)
  (whether aurora is plausible at all for a place and date range).
- Source: **COMPUTED + CURATED — no fetch at request time.** Three
  inputs: (1) **geomagnetic latitude**, from the IAGA/NOAA
  International Geomagnetic Reference Field, IGRF-14 — the spike
  FETCHES the published Gauss coefficients and DERIVES the centred
  dipole pole from them, so the number has a source rather than a
  memory; (2) **astronomical darkness**, from the same solar
  equations astro-ephemeris cross-checked against USNO; (3) the
  auroral oval's equatorward boundary as a function of Kp, a
  **curated in-repo constant**.
- Confirmed keys (spike): the IGRF coefficient file exposes 26 epochs
  (1900…2025) plus a secular-variation column; rows `g 1 0`,
  `g 1 1`, `h 1 1` give g₁⁰ −29350.0 (SV 12.6), g₁¹ −1410.3 (SV 10.0),
  h₁¹ 4545.5 (SV −21.5) nT at epoch 2025.0.
- Grade: **SPLIT, and the split is the honest part.**
  - **B** for the darkness gate — "Iceland in June: no aurora,
    midnight sun" is exact, computed from authoritative inputs, and
    is the verdict that actually protects a traveller from a wasted
    trip.
  - **C** for the Kp-threshold verdict ("Edinburgh needs Kp ≥ 4.2") —
    it is a **curated** approximation
    ([ENGINE §7](../ENGINE.md#7-render--honest-pixels): estimated /
    derived / curated renders as a labelled estimate), because the
    oval boundary is a rule of thumb and not a measured constant.
    It is not graded A or B, and the renderer must not let it look
    like one.
- Freshness served: yearly. The dipole pole moves slowly (the spike
  applies the published secular variation to the target epoch); the
  seasonal darkness term is a pure function of date.
- Coverage: global and exact for both computed terms, both
  hemispheres — the spike's Ushuaia row exercises the southern case.
- Cost: none at request time; one yearly fetch of a public text file.
- retention_rights: **store-raw** for the coefficients; the verdict
  is **ours** (derived). license_class: **US-Gov public domain** —
  verified 2026-09-15 at NCEI's IGRF product page, which states the
  IGRF model "is in the public domain and not licensed or under
  copyright" and "may be used freely by the public", with the
  17 U.S.C. 403 notice duty on derived copyrighted works.
  Attribution: credit IAGA / NOAA NCEI for IGRF-14.
- Retrieval policy: **`n/a`**, and the reason is that the fact has no
  page. No authority publishes "is aurora viable at 58°N in
  September" as a claim; what authorities publish are the field model
  and the index, both of which we already consume at better rungs.
  Retrieval would have to find someone's ARTICLE ABOUT viability and
  quote it, which would replace two exact computations with one
  person's summary. **Since the slot cannot reach rung 5a, it also
  has no rung 5b** — there is nothing to remember, only something to
  compute.
- Spike: `scripts/spikes/sky-sea-aurora-viability.mjs` —
  `node scripts/spikes/sky-sea-aurora-viability.mjs`, run 2026-09-15.
  Returned: centred-dipole north geomagnetic pole **80.83°N,
  72.80°W** (B₀ 29,717 nT) at epoch 2026.0 — matching the published
  IGRF pole position, which is the check that the derivation is
  right; geomagnetic latitudes Tromsø 67.50°, Reykjavik 68.80°,
  Fairbanks 65.67°, Edinburgh 58.11°, Kyoto 26.86°, Ushuaia −45.65°;
  the June-solstice row returns "NO: no astro dark" for every
  northern site, which is the [FACTS](FACTS.md) example reproduced
  from first principles.
- **Validation, and its limit, recorded because the limit matters
  more than the pass:** the gate was checked against SWPC's own
  OVATION nowcast. Among the sites on the **nightside** at that
  instant, the lowest probability inside the oval was **46%** and the
  highest outside it **4%** — the gate holds. It was checked that way
  because a naive rank comparison FAILS and would have been a false
  alarm: OVATION is magnetic-local-time dependent, so Fairbanks —
  inside the oval by latitude — read 3% purely because it was on the
  dayside. **OVATION validates the gate's SHAPE and can never
  validate a season-scale verdict**, and SS-05 remains what answers a
  given night.
- Alternatives rejected: **using OVATION as the viability source**
  (it is a 30-minute nowcast; SS-06's freshness is yearly, and the
  MLT dependence above makes a single frame actively misleading as a
  seasonal gate); **NOAA's geomag-web calculator API** (the obvious
  way to get magnetic inclination per point — **now key-gated**:
  spiked 2026-09-15 and returned HTTP 400, "Either the key parameter
  is missing or it is wrong", so the coefficient file is used
  instead and the dipole computed locally); **a hard-coded pole
  position** (it moves, and typing a constant from memory is exactly
  what the derivation law forbids).

### nature-timing
- Serves: [SS-07](FACTS.md#f-ss-07--seasonal-nature-timing-)
  (bloom / foliage / wildlife-viewing windows).
- Source: **SPLIT BY WHAT IS ACTUALLY COVERED, which is much less
  than the fact asks for.**
  - **US spring leaf-out and bloom: rung 2.** The **USA National
    Phenology Network** Spring Index (SI-x) served as WMS rasters
    from geoserver.usanpn.org, point-queried with `GetFeatureInfo`.
    Both the current-year NCEP-driven forecast and the 30-year normal
    are available, as a day-of-year.
  - **Everything else: rung 5a retrieval**, under the policy below —
    non-US blooms, **fall foliage anywhere**, and **wildlife
    migration anywhere**. This is not a shortfall to be papered over:
    see Coverage.
- Confirmed keys (spike): `GetFeatureInfo` with
  `info_format=application/json` returns a GeoJSON FeatureCollection
  whose single feature carries `LEAF_OUT_DAY` or `BLOOM_DAY` as a
  day-of-year float; layers confirmed live are
  `si-x:average_leaf_ncep`, `si-x:average_bloom_ncep`,
  `si-x:30yr_avg_six_leaf`, `si-x:30yr_avg_six_bloom`.
- Grade:
  - **B** where SI-x covers — authoritative national programme, real
    fetch, clean licence, with a fidelity caveat that matters: the
    Spring Index is a **climatological model of first leaf and first
    bloom**, not an observation of a particular species at a
    particular garden.
  - Outside that, the retrieval policy decides: **B** from an
    authoritative domain, **C** elsewhere, and **D** if it falls to
    rung 5b model memory and is rendered unverified.
- Freshness served: weekly in season; yearly out of season.
- Coverage: **MEASURED. 12 of 12 US point queries returned a value;
  0 of 8 non-US queries did** (Kyoto and Amsterdam returned zero
  features on every layer). The service's own layer list was then
  walked mechanically — 129 distinct layer names — for the rest of
  the fact: **spring index 66 layers, growing degree days 32 layers,
  fall foliage NONE, wildlife migration NONE, cherry blossom by name
  NONE.** The absence is the result. Two of SS-07's three named
  subjects have no feed on the one national phenology service that
  exists.
- Cost: free, no key, no published quota.
- retention_rights: **store-raw**. license_class: **CC BY 4.0** —
  verified 2026-09-15 in the USA-NPN Data Use Policy at
  usanpn.org/terms, which states the data are "openly and universally
  available to all users, under a Creative Commons – Attribution 4.0
  International (CC BY 4.0) license, enabling users to share and
  adapt the data **for any purpose**". The same page carries a
  For-Profit Company Policy stating that no special restrictions
  apply to for-profit use — so this clears
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) explicitly
  rather than by inference. Attribution: for raster data accessed via
  their services, "Data were provided by the USA National Phenology
  Network."
- **Retrieval policy** — SS-07 is the only fact this slot serves, so
  this row is the per-fact row and not an entry-level shorthand.
  - allowed domains + grade: the **managing land authority's own
    site** — a national or state park service, national forest,
    prefectural park authority, botanic garden or nature reserve
    operator (**B**: a government body, or the operator itself, for
    the place it manages); a **national meteorological or
    agricultural agency** publishing a bloom or foliage forecast
    (**B**: government body); **established press** reporting a named
    authority's forecast and naming it (**B**); a university or
    research-group phenology programme (**C** — good science is not a
    domain class: a research group is neither the operator of the
    place nor a government body under
    [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts), and grading
    it B would be exactly the promotion the rule forbids. USA-NPN is
    B, but as a **government-hosted national programme** and at rung
    2, not by this exception); **tourism boards and regional
    promotion sites** (**C** — they have an interest in the answer);
    commercial foliage-map and bloom-tracker sites (**C**); any other
    domain (**C**).
  - quote required: **yes**. A bloom, foliage or migration window is
    a dated claim about one specific place, and a remembered peak
    week is precisely this fact's failure mode. No span at the
    fetched url ⇒ discard, never downgrade.
  - freshness window: **7 days in season** — a bloom front moves
    faster than a weekly cache — and **1 year out of season**.
- Spike: `scripts/spikes/sky-sea-nature-timing.mjs` —
  `node scripts/spikes/sky-sea-nature-timing.mjs`, run 2026-09-15.
  Returned: Washington DC `BLOOM_DAY` 91.0 (current-year NCEP
  forecast, ≈ 2026-04-01) against a 30-year normal of 100.5
  (≈ 2026-04-11); Great Smoky Mountains 88.0 vs 104.2; Sonoran Desert
  41.0 vs 49.9; Kyoto and Amsterdam zero features on all four layers;
  and the layer walk above.
- Alternatives rejected: **eBird / Cornell Lab APIs** (real migration
  observations, but key-gated with terms restricting redistribution —
  must be read in full before
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) can clear
  them; not vetted here and not assumed clean); **Japan's private
  cherry-blossom forecasters** (Weathernews, Japan Meteorological
  Corporation — the authoritative Japanese answer since JMA stopped
  issuing the forecast, but commercial and ToS-gated; they are the
  named gap for a Japan demo, and a **B**-class press report of their
  forecast is the lawful retrieval route meanwhile); **commercial
  fall-foliage prediction maps** (proprietary models, no licence to
  reuse, and a **C** domain under the policy above); **inventing a
  curated global bloom table** (it would be model memory wearing a
  table's clothes — rung 5b dressed as rung 1, which is the single
  worst thing this bench could ship).

### night-sky-darkness
- Serves: [SS-08](FACTS.md#f-ss-08--night-sky-darkness)
  (light-pollution class at a location).
- Source: **NONE TODAY — and that is the finding.** There is no
  keyless, licence-clean, global point API for light pollution. The
  intended path is an **in-repo derived asset**, built once from the
  **VIIRS VNL annual composite** (NOAA / Colorado School of Mines
  Earth Observation Group) and refreshed yearly; until that asset is
  built, the slot is served **only** by the retrieval policy below.
- Confirmed keys (spike): none — no candidate returned a value. What
  the spike returned instead is four measured gates, each a different
  kind of "no":
  1. **lightpollutionmap.info QueryRaster** (the only turnkey point
     API) — HTTP 200 with the body "Invalid or missing
     authentication. Please request a key for API use." **Key wall.**
  2. **NOAA/EOG VIIRS VNL** — the data directory redirects to
     `eogauth.mines.edu/realms/eog/protocol/openid-connect/auth`.
     **Login wall**, free registration; and annual GeoTIFFs are not a
     live API in any case.
  3. **NASA GIBS WMS** — 14 night-lights layers advertised, **every
     one `queryable="0"`**, so `GetFeatureInfo` cannot return a
     radiance value at a point. **Imagery only.**
  4. **Falchi et al. World Atlas 2015** — the canonical
     sky-brightness model and the one a hurried vetting would pick.
     Its publisher's own landing page states: "13 November 2019:
     change of the licence to **CC BY NC 4.0** (after end of embargo
     period)". **Non-commercial: a
     [D-015](../record/DECISIONS.md#d-015--data-asset-law)
     disqualifier**, however good the data is. It is named here so
     that nobody re-adopts it later on the strength of its
     reputation.
- Grade: **B once the VIIRS-derived asset exists** — satellite-derived,
  yearly, public domain, global. **Today the slot is UNSERVED**, and
  any SS-08 claim rendered before that asset is built comes from the
  retrieval policy at **B** or **C**, or from rung 5b at **D**. It is
  recorded as unserved rather than as B-in-waiting, because
  [V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  must see the true state.
- Freshness served: yearly (the asset), yearly (the policy).
- Coverage: global once built — VIIRS is a global product. Nothing is
  claimed for today.
- Cost: free; a free registration for the annual download, and the
  processing cost of building the asset once a year.
- retention_rights: **store-raw** for VIIRS VNL. license_class:
  **US-Gov public domain** for the VIIRS product; **CC BY-NC 4.0 —
  DISQUALIFIED** for Falchi, verified 2026-09-15 at the GFZ Data
  Services landing page quoted above. Attribution: credit NOAA/NCEI
  and the Earth Observation Group for VIIRS.
- **Retrieval policy — this is the slot's live path today, not a
  backstop.** SS-08 is the only fact served, so this is its per-fact
  row.
  - allowed domains + grade: **DarkSky International's own
    certification pages**, for the single fact of whether a place
    holds an International Dark Sky Place designation (**B** — as
    THE OPERATOR of that certification programme, authoritative
    about its own designation and **about nothing else**; any
    sky-brightness number it publishes is **C**. This narrow reading
    is stated rather than assumed, because a broader one would
    promote an NGO outside
    [ENGINE §3](../ENGINE.md#3-acquire--get-the-facts)'s classes);
    the **managing land authority's own site** for a park's stated
    sky quality (**B**: government body or operator); **NOAA, NASA
    and national mapping agencies** publishing radiance or
    sky-brightness products (**B**: government body); **established
    press** (**B**); light-pollution map sites, astronomy clubs,
    observatories' outreach pages and blogs (**C**); any other domain
    (**C**).
  - quote required: **yes**. A Bortle class or an SQM reading is a
    number somebody measured at a place, and it is quotable or it is
    not a measurement.
  - freshness window: **1 year**. Light pollution changes on a yearly
    scale and a certification is reviewed annually.
- Spike: `scripts/spikes/sky-sea-night-sky-darkness.mjs` —
  `node scripts/spikes/sky-sea-night-sky-darkness.mjs`, run
  2026-09-15, probe point Cherry Springs State Park PA. Returned the
  four gates above verbatim, including the quoted licence span from
  the Falchi landing page.
- Alternatives rejected: all four candidates above, each for the
  reason measured. Also rejected: **the David Lorenz light-pollution
  atlas** (freely offered tiles, widely used — but no licence
  statement we could read, and an unstated licence is not a clean
  one); **NASA Black Marble via LAADS/Earthdata** (public domain and
  the right data, but token-gated and still a raster pipeline rather
  than a point API — it is the **named alternative** to EOG for
  building the same in-repo asset).

### astro-events
- Serves: [SS-09](FACTS.md#f-ss-09--astronomical-events-calendar)
  (meteor-shower peaks; solar and lunar eclipses with visibility
  paths).
- Source: **CURATED IN-REPO TABLE**, built from two published
  authorities and refreshed yearly — the events are known years
  ahead, so this is deliberately not a per-request fetch.
  - **Eclipses:** NASA GSFC's Five Millennium Canon decade tables
    (eclipse.gsfc.nasa.gov), authored by Fred Espenak at the GSFC
    Planetary Systems Laboratory. Rung 2: a government body's
    published catalogue.
  - **Meteor showers:** the **IAU Meteor Data Center** established-shower
    catalogue. It publishes the **solar longitude of maximum**, not a
    date — which is the correct shape, because solar longitude is
    year-independent. The calendar date is **derived** per year with
    the same solar equations astro-ephemeris validated.
- Confirmed keys (spike): eclipse rows parse to date, TD of greatest
  eclipse, type, Saros series, magnitude (eclipse magnitude for
  solar, umbral magnitude for lunar), duration, and the geographic
  visibility region. The MDC file is pipe-quoted fixed width with
  `LP`, `IAUNo`, `AdNo`, `Code`, `s`, `sub.date`,
  `shower name-designation`, `activity`, `LoSb`, `LoSe`, `LoS`, `Ra`,
  `De`, … (654 columns documented in its own header).
- Grade:
  - **A** for eclipses — a published canon, exact, global, computed
    centuries ahead, and public domain.
  - **B** for shower peaks — authoritative catalogue with a real
    fidelity caveat: the MDC holds **several published solutions per
    shower**, so a peak is a range and not a point. The entry keeps
    the spread rather than averaging it away.
- Freshness served: yearly. Nothing here changes inside a trip
  window.
- Coverage: global. Eclipse rows carry their own visibility regions,
  which is what makes "an eclipse over the trip dates" a placeable
  merit event rather than a trivium.
- Cost: free, no key.
- retention_rights: **store-raw** (both are small published tables).
  license_class: **NASA content is generally not subject to
  copyright in the United States**, verified 2026-09-15 at NASA's
  Images and Media Usage Guidelines — with the caveat stated on that
  same page that the **NASA insignia, logotype and identifiers are
  NOT in the public domain** and are not used. For the MDC:
  **no explicit licence is stated**, and that is recorded as read
  rather than assumed — its references page (read 2026-09-15) states
  a **citation duty** instead, naming Jenniskens et al. 2020, Jopek &
  Kaňuchová 2017, and Jopek & Kaňuchová 2014. Nothing prohibits
  caching, so
  [D-015](../record/DECISIONS.md#d-015--data-asset-law) is not
  triggered — but an absent grant is a real risk and is logged here
  rather than smoothed over. Attribution: credit Fred Espenak / NASA
  GSFC for eclipse predictions; cite the three MDC papers for shower
  data.
- Retrieval policy: **`n/a`**, and the reason is that the fact is
  already answered exhaustively and years in advance. Every eclipse
  through 2030 is in the canon with its visibility region; every
  established shower is in the catalogue with its solar longitude.
  Local circumstances a decade table does not carry — the minute of
  totality in one specific town — are **computable from the same
  canon**, not retrievable from a better page. There is no rung-5a
  path because there is no gap for it to fill.
- Spike: `scripts/spikes/sky-sea-astro-events.mjs` —
  `node scripts/spikes/sky-sea-astro-events.mjs`, run 2026-09-15.
  Returned: 22 solar and 22 lunar eclipses parsed for 2021–2030; the
  two 2026 solar events (17 Feb annular, Saros 121, magnitude 0.963,
  Antarctica; **12 Aug total, Saros 126, magnitude 1.039, 02m18s,
  Arctic/Greenland/Iceland/Spain**) and the two lunar (3 Mar total,
  28 Aug partial); the MDC file at 426,132 bytes, 593 catalogue
  records, 113 distinct shower codes, last updated 2026 Sep 11. Peak
  dates derived for 2026: Quadrantids 01-03, Lyrids 04-22, eta
  Aquariids 05-07, Perseids 08-12, Orionids 10-22, Leonids 11-18,
  Geminids 12-13, Ursids 12-22 — with published spreads from 0.50°
  (Quadrantids, Lyrids) to **12.60° for the eta Aquariids**, which is
  roughly twelve days and is exactly why the spread must render.
- Alternatives rejected: **the IMO shower calendar** (the practical
  observer's reference and a good cross-check, but published as a
  yearly PDF — the MDC's machine-readable catalogue is the better
  ingest, and IMO stays the named human cross-check); **computing
  eclipses ourselves via an ephemeris library** (astronomy-engine
  can do it; rejected because NASA's canon is already exact,
  already carries visibility regions, and re-deriving it would be
  work with no accuracy to gain); **commercial astronomy-event APIs**
  (key-gated resale of these same public catalogues).

## What this file does not cover
Nothing. All seven slots in
[the assignment map](FACTS.md#t2t6-assignment-map)'s
[V1.S1.T3](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
line — astro-ephemeris, tides, aurora-forecast, aurora-viability,
nature-timing, night-sky-darkness, astro-events — have an entry
above, and all ten facts
[SS-01](FACTS.md#f-ss-01--sun-ephemeris)–[SS-10](FACTS.md#f-ss-10--tidal-range-class)
are served by one of them.

**The three named gaps, carried forward for
[V1.S1.T7](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
rather than buried:**
1. **Tides outside US waters** — no vetted global source; the
   licence-clean candidates are research harmonic models that have
   not been read.
2. **Fall foliage and wildlife migration, everywhere; blooms outside
   the US** — no feed exists; retrieval policy only.
3. **Night-sky darkness, everywhere, today** — the asset that would
   serve it has not been built, and the one canonical dataset is
   non-commercial and disqualified.
