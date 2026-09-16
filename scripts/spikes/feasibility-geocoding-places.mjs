// Spike: destination registry (V1.S1.T4, slot geocoding-places)
// Serves: FE-01. Run: node scripts/spikes/feasibility-geocoding-places.mjs
// Three sources, all open and cacheable:
//   Nominatim (OSM/ODbL)      -> geocode, country, region
//   Open-Meteo Elevation      -> elevation_m (Copernicus DEM, CC-BY)
//   Wikidata Query Service    -> currency, languages, driving side, plug types (CC0)
// Nominatim usage policy: <=1 req/s, identifying User-Agent, no bulk geocoding.

const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const CITIES = [
  { q: "Reykjavik, Iceland", iso: "IS" },
  { q: "Kyoto, Japan", iso: "JP" },
  { q: "Rome, Italy", iso: "IT" },
];

// FE-01 Dictionary, in order.
const DICT = [
  "geocode",
  "country",
  "region",
  "tz",
  "elevation_m",
  "currency_code",
  "payment_norm",
  "languages",
  "english_friendliness_class",
  "driving_side",
  "idp_required",
  "tap_water_class",
  "plug_type",
];

async function nominatim(q) {
  const url =
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}` +
    `&format=jsonv2&limit=1&addressdetails=1&extratags=1`;
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) throw new Error(`nominatim HTTP ${r.status}`);
  return (await r.json())[0];
}

async function elevation(lat, lon) {
  const r = await fetch(
    `https://api.open-meteo.com/v1/elevation?latitude=${lat}&longitude=${lon}`,
    { headers: { "User-Agent": UA } },
  );
  if (!r.ok) throw new Error(`elevation HTTP ${r.status}`);
  return (await r.json()).elevation?.[0];
}

// One SPARQL call answers the country half of the Dictionary for every ISO code.
async function wikidata(isoCodes) {
  const values = isoCodes.map((c) => `"${c}"`).join(" ");
  const query = `
SELECT ?iso ?currency ?sideLabel
       (GROUP_CONCAT(DISTINCT ?langLabel; separator="|") AS ?langs)
       (GROUP_CONCAT(DISTINCT ?plugLabel; separator="|") AS ?plugs) WHERE {
  VALUES ?iso { ${values} }
  ?c wdt:P297 ?iso .
  OPTIONAL { ?c wdt:P38 ?cur . ?cur wdt:P498 ?currency . }
  OPTIONAL { ?c wdt:P1622 ?side . }
  OPTIONAL { ?c wdt:P37 ?lang . }
  OPTIONAL { ?c wdt:P2853 ?plug . }
  SERVICE wikibase:label {
    bd:serviceParam wikibase:language "en" .
    ?side rdfs:label ?sideLabel . ?lang rdfs:label ?langLabel .
    ?plug rdfs:label ?plugLabel .
  }
} GROUP BY ?iso ?currency ?sideLabel`;
  const r = await fetch(
    `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(query)}`,
    {
      headers: { "User-Agent": UA, Accept: "application/sparql-results+json" },
    },
  );
  if (!r.ok) throw new Error(`wikidata HTTP ${r.status}`);
  const out = {};
  for (const b of (await r.json()).results.bindings) {
    out[b.iso.value] = {
      currency_code: b.currency?.value,
      driving_side: b.sideLabel?.value,
      languages: b.langs?.value ? b.langs.value.split("|") : [],
      plug_type: b.plugs?.value ? b.plugs.value.split("|") : [],
    };
  }
  return out;
}

const wd = await wikidata(CITIES.map((c) => c.iso));
const covered = new Set();

for (const city of CITIES) {
  const n = await nominatim(city.q);
  const elev = await elevation(n.lat, n.lon);
  const w = wd[city.iso] ?? {};
  console.log(`\n=== ${city.q}`);
  console.log("  nominatim keys:", Object.keys(n).join(", "));
  console.log(`  geocode: ${n.lat}, ${n.lon}  (osm ${n.osm_type}/${n.osm_id})`);
  console.log(`  country: ${n.address?.country} (${n.address?.country_code})`);
  console.log(`  region: ${n.address?.state ?? n.address?.region ?? "(none)"}`);
  console.log(`  elevation_m: ${elev}`);
  console.log(`  currency_code: ${w.currency_code}`);
  console.log(`  languages: ${(w.languages ?? []).join(", ")}`);
  console.log(`  driving_side: ${w.driving_side}`);
  console.log(`  plug_type: ${(w.plug_type ?? []).join(", ")}`);
  console.log(`  licence: ${n.licence}`);
  if (n.lat && n.lon) covered.add("geocode");
  if (n.address?.country) covered.add("country");
  if (n.address?.state || n.address?.region) covered.add("region");
  if (elev !== undefined) covered.add("elevation_m");
  if (w.currency_code) covered.add("currency_code");
  if (w.languages?.length) covered.add("languages");
  if (w.driving_side) covered.add("driving_side");
  if (w.plug_type?.length) covered.add("plug_type");
  await sleep(1100); // Nominatim: <= 1 req/s
}

// tz is computed from geocode by math per FACTS (shared with TT-04) - not fetched here.
covered.add("tz");
console.log("\n=== FE-01 Dictionary coverage");
for (const k of DICT) {
  console.log(`  ${covered.has(k) ? "OK  " : "MISS"} ${k}`);
}
const missing = DICT.filter((k) => !covered.has(k));
console.log(
  "\nmissing (no open registry -> retrieval, rung 5a):",
  missing.join(", ") || "none",
);
