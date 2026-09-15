// Spike: nature-timing — USA-NPN covers US spring; the rest is retrieval (V1.S1.T3)
// Serves: SS-07 (seasonal nature timing — blooms, foliage, wildlife windows).
// Run: node scripts/spikes/sky-sea-nature-timing.mjs
//
// SS-07 is the family's weakest ground and this spike is written to show
// exactly where the ground ends rather than to make it look solid. Three
// measurements:
//
//   1. WHAT RESOLVES. The USA National Phenology Network publishes the
//      Spring Index (SI-x) as WMS rasters — first leaf and first bloom as a
//      day-of-year, forecast for the current year and as a 30-year normal.
//      A GetFeatureInfo point query returns a real number, so US SPRING
//      TIMING IS A RUNG-2 FETCH, not a guess.
//   2. WHERE IT STOPS. The same query is run outside the US grid and the
//      empty result is printed, so "US-only" is measured.
//   3. WHAT HAS NO LAYER AT ALL. The service's own layer list is walked for
//      foliage and wildlife-migration coverage. Absence here is the reason
//      those halves of SS-07 are rung-5a RETRIEVAL facts with a policy,
//      rather than facts with a feed.

const UA = { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" };
const WMS = "https://geoserver.usanpn.org/geoserver/wms";

const LAYERS = [
  ["si-x:average_leaf_ncep", "LEAF_OUT_DAY", "current-year first-leaf forecast (NCEP)"],
  ["si-x:average_bloom_ncep", "BLOOM_DAY", "current-year first-bloom forecast (NCEP)"],
  ["si-x:30yr_avg_six_leaf", "LEAF_OUT_DAY", "30-year normal, first leaf"],
  ["si-x:30yr_avg_six_bloom", "BLOOM_DAY", "30-year normal, first bloom"],
];

const SITES = [
  ["Washington DC (cherry)", 38.8895, -77.0353, true],
  ["Great Smoky Mtns, TN", 35.6532, -83.507, true],
  ["Sonoran Desert, AZ", 32.2504, -111.1665, true],
  ["Kyoto, JP", 35.0116, 135.7681, false],
  ["Amsterdam, NL", 52.3676, 4.9041, false],
];

async function pointQuery(layer, lat, lon) {
  const d = 0.05;
  const params = new URLSearchParams({
    service: "WMS",
    version: "1.1.1",
    request: "GetFeatureInfo",
    layers: layer,
    query_layers: layer,
    bbox: [lon - d, lat - d, lon + d, lat + d].join(","),
    width: "101",
    height: "101",
    x: "50",
    y: "50",
    srs: "EPSG:4326",
    info_format: "application/json",
  });
  const res = await fetch(`${WMS}?${params}`, { headers: UA });
  const body = await res.text();
  if (!body.trim().startsWith("{")) return { error: body.slice(0, 120) };
  return JSON.parse(body);
}

const doyToDate = (doy, year) => {
  const d = new Date(Date.UTC(year, 0, 1));
  d.setUTCDate(d.getUTCDate() + Math.round(doy) - 1);
  return d.toISOString().slice(0, 10);
};

console.log("SPIKE nature-timing — USA-NPN SI-x (geoserver.usanpn.org)\n");

// ---------- 1 + 2: what resolves, and where it stops ----------
console.log("A. Spring Index point queries — GetFeatureInfo, info_format=application/json");
const YEAR = new Date().getUTCFullYear();
let usHits = 0;
let nonUsHits = 0;
for (const [name, lat, lon, isUS] of SITES) {
  console.log(`\n   ${name}  (${lat}, ${lon})  ${isUS ? "[US]" : "[NON-US]"}`);
  for (const [layer, prop, label] of LAYERS) {
    const r = await pointQuery(layer, lat, lon);
    if (r.error) {
      console.log(`     ${layer.padEnd(26)} ERROR ${r.error}`);
      continue;
    }
    const f = r.features?.[0];
    const v = f?.properties?.[prop];
    if (v === undefined || v === null) {
      console.log(
        `     ${layer.padEnd(26)} no value   (${r.features?.length ?? 0} features) — ${label}`,
      );
    } else {
      if (isUS) usHits++;
      else nonUsHits++;
      console.log(
        `     ${layer.padEnd(26)} ${prop}=${Number(v).toFixed(1)}  ≈ ${doyToDate(v, YEAR)}  — ${label}`,
      );
    }
  }
}
console.log("");
console.log(
  `   values returned: ${usHits} of ${SITES.filter((s) => s[3]).length * LAYERS.length} US queries, ${nonUsHits} of ${SITES.filter((s) => !s[3]).length * LAYERS.length} non-US queries.`,
);

// ---------- 3: what has no layer at all ----------
console.log("\nB. Walking the service's own layer list for the rest of SS-07");
const caps = await (
  await fetch(`${WMS}?service=WMS&version=1.1.1&request=GetCapabilities`, {
    headers: UA,
  })
).text();
const names = [...new Set([...caps.matchAll(/<Name>([^<]+)<\/Name>/g)].map((m) => m[1]))];
const probe = {
  "spring index (leaf/bloom)": /si-x:/i,
  "growing degree days": /gdd:/i,
  "fall foliage": /foliage|leaf_?color|autumn|fall_/i,
  "wildlife migration": /migrat|bird|whale|monarch|salmon/i,
  "cherry blossom (named)": /cherry|sakura|prunus/i,
};
console.log(`   ${names.length} distinct layer names advertised.`);
for (const [what, re] of Object.entries(probe)) {
  const hits = names.filter((n) => re.test(n));
  console.log(
    `     ${what.padEnd(26)} ${hits.length ? `${hits.length} layer(s): ${hits.slice(0, 3).join(", ")}${hits.length > 3 ? " …" : ""}` : "NONE — no feed exists here"}`,
  );
}

console.log("\nC. What this settles for SS-07:");
console.log(
  "   - US spring leaf-out and bloom timing: rung 2, a real fetch, CC BY 4.0.",
);
console.log(
  "   - Everywhere else, and fall foliage and wildlife migration EVERYWHERE:",
);
console.log(
  "     no feed on this service. Those are rung-5a retrieval facts and need a",
);
console.log(
  "     retrieval policy naming the park authority / operator domains that may",
);
console.log("     answer them — not a pretend feed.");
