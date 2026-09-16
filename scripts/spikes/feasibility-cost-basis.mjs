// Spike: cost-estimate bands (V1.S1.T4, slot cost-basis)
// Serves: FE-07. Run: node scripts/spikes/feasibility-cost-basis.mjs
// FE-07 wants RANGES, not quotes (quotes are F-CO's, per D-088). The question
// is whether any OPEN, CACHEABLE source publishes destination price levels.
// This spike is largely a NEGATIVE result, recorded because a named gap is a
// result and a guessed band is a defect.
const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";

async function probe(name, url, note) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "application/json" },
    });
    const body = await r.text();
    console.log(`\n${name}\n  HTTP ${r.status}  ${note}`);
    console.log(`  body: ${body.replace(/\s+/g, " ").slice(0, 240)}`);
    return { ok: r.ok, body };
  } catch (e) {
    console.log(`\n${name}\n  ERR ${e.message}  ${note}`);
    return { ok: false, body: "" };
  }
}

console.log("=== candidates for a destination price level, probed live ===");

// 1. Numbeo — the obvious cost-of-living dataset. Key-gated, and its terms
//    forbid redistribution/storage of the dataset.
await probe(
  "Numbeo API",
  "https://www.numbeo.com/api/city_prices?api_key=demo&query=Rome",
  "(key-gated; ToS forbids redistribution - D-015 disqualifier even if keyed)",
);

// 2. Eurostat price level indices. Open, no key, CC-BY, but EU-only and
//    country-level rather than city-level.
const eu = await probe(
  "Eurostat PLI (prc_ppp_ind)",
  "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/prc_ppp_ind?format=JSON&lang=EN&na_item=PLI_EU27_2020&ppp_cat=A010101",
  "(open, no key, CC-BY 4.0 - EU-only, country-level)",
);
if (eu.ok) {
  try {
    const j = JSON.parse(eu.body);
    const idx = j.dimension?.geo?.category?.index ?? {};
    const labels = j.dimension?.geo?.category?.label ?? {};
    const vals = j.value ?? {};
    const rows = Object.entries(idx)
      .map(([code, i]) => [labels[code] ?? code, vals[i]])
      .filter(([, v]) => v !== undefined && v !== null);
    console.log("  parsed (country -> price level index, EU27=100):");
    for (const [c, v] of rows.slice(0, 8))
      console.log(`    ${String(c).slice(0, 26).padEnd(28)} ${v}`);
    console.log(`  countries carrying a value: ${rows.length}`);
  } catch (e) {
    console.log("  parse failed:", e.message);
  }
}

// 3. World Bank ICP PPP conversion factor. Open, no key, GLOBAL.
const wb = await probe(
  "World Bank PA.NUS.PPP",
  "https://api.worldbank.org/v2/country/ISL;ITA;JPN;THA/indicator/PA.NUS.PPP?format=json&date=2023&per_page=20",
  "(open, no key, CC-BY 4.0 - GLOBAL, country-level PPP conversion factor)",
);
if (wb.ok) {
  try {
    const j = JSON.parse(wb.body);
    console.log(
      "  parsed (country -> PPP conversion factor, LCU per international $):",
    );
    for (const row of j[1] ?? []) {
      console.log(
        `    ${row.country.value.padEnd(16)} ${row.date}  ${row.value}`,
      );
    }
  } catch (e) {
    console.log("  parse failed:", e.message);
  }
}

console.log(`
=== verdict for FE-07
  NO open source publishes FE-07's Dictionary directly. There is no feed for
  meal_band, admission_band, local_transport_band, lodging_band,
  rental_car_band, tourist_city_fees or tipping_norm.
  What IS open and cacheable is a RELATIVE price level - World Bank PPP
  (global, CC-BY) and Eurostat PLI (EU-only, finer). Those ANCHOR the bands;
  they are not the bands.
  So this slot is: CURATED bands for the demo destinations, scaled to other
  destinations by the PPP anchor, with tourist_city_fees and tipping_norm
  RETRIEVED at rung 5a from city-government and operator domains, and
  per-venue admission riding FE-03's operator sites at 5a.`);
