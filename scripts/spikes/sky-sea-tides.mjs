// Spike: tides — NOAA CO-OPS covers US waters; the world is a labelled gap (V1.S1.T3)
// Serves: SS-04 (tide tables), SS-10 (tidal range class, derived).
// Run: node scripts/spikes/sky-sea-tides.mjs
//
// Two things this spike has to prove, not assert:
//   1. NOAA CO-OPS returns real high/low predictions with a usable key set,
//      and SS-10's spring/neap class is derivable from that series alone.
//   2. THE GLOBAL GAP IS REAL. The same station registry is queried for
//      non-US coastlines and the nearest station is reported with its
//      distance, so "patchy elsewhere" is a measured number rather than a
//      claim. A station 5,000 km away is not coverage.
//
// No key, no auth. NOAA asks for an `application` parameter identifying the
// caller, which is supplied below.

const APP = "roam-spike-v1s1t3";
const UA = { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" };

const SITES = [
  { name: "Bar Harbor, ME (US)", lat: 44.3876, lon: -68.2039, us: true },
  { name: "San Francisco, CA (US)", lat: 37.8063, lon: -122.4659, us: true },
  { name: "Mont-Saint-Michel, FR", lat: 48.636, lon: -1.5115, us: false },
  { name: "Sydney, AU", lat: -33.8523, lon: 151.2108, us: false },
  { name: "Jeju, KR", lat: 33.5141, lon: 126.5297, us: false },
];

const R_EARTH_KM = 6371;
const haversine = (a, b) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R_EARTH_KM * Math.asin(Math.sqrt(h));
};

// ---------- 1. the station registry ----------
const stationsUrl =
  "https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=tidepredictions";
const sres = await fetch(stationsUrl, { headers: UA });
if (!sres.ok) {
  console.error(`stations HTTP ${sres.status}`);
  process.exit(1);
}
const sjson = await sres.json();
const stations = sjson.stations.map((s) => ({
  id: s.id,
  name: s.name,
  state: s.state,
  lat: s.lat,
  lon: s.lng,
}));
console.log("SPIKE tides — NOAA CO-OPS (api.tidesandcurrents.noaa.gov)\n");
console.log(
  `station registry: ${sjson.count} tide-prediction stations; keys per station: ${Object.keys(
    sjson.stations[0],
  )
    .slice(0, 12)
    .join(", ")}, …`,
);
console.log("");

// ---------- 2. nearest station per site — the coverage measurement ----------
console.log("NEAREST TIDE-PREDICTION STATION PER SITE");
const nearestBySite = new Map();
for (const site of SITES) {
  let best = null;
  for (const st of stations) {
    const d = haversine(site, st);
    if (!best || d < best.d) best = { st, d };
  }
  nearestBySite.set(site.name, best);
  console.log(
    `  ${site.name.padEnd(26)} ${best.st.id} ${(best.st.name + (best.st.state ? `, ${best.st.state}` : "")).padEnd(30)} ${best.d.toFixed(0)} km away`,
  );
}
console.log("");

// ---------- 3. hi/lo predictions where a station is actually near ----------
const BEGIN = "20261001";
const END = "20261008";

async function predictions(stationId) {
  const url =
    "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?" +
    new URLSearchParams({
      product: "predictions",
      application: APP,
      begin_date: BEGIN,
      end_date: END,
      datum: "MLLW",
      station: stationId,
      time_zone: "lst_ldt",
      units: "metric",
      interval: "hilo",
      format: "json",
    });
  const res = await fetch(url, { headers: UA });
  const body = await res.json();
  return { ok: res.ok && !body.error, body };
}

// SS-10: spring vs neap from the hi/lo series alone.
function rangeClass(preds) {
  const byDay = new Map();
  for (const p of preds) {
    const day = p.t.slice(0, 10);
    if (!byDay.has(day)) byDay.set(day, []);
    byDay.get(day).push(Number(p.v));
  }
  const daily = [...byDay.entries()].map(([day, vs]) => ({
    day,
    range: Math.max(...vs) - Math.min(...vs),
  }));
  const maxR = Math.max(...daily.map((d) => d.range));
  const minR = Math.min(...daily.map((d) => d.range));
  return daily.map((d) => ({
    ...d,
    // Classify inside the window: within 15% of the window max = spring-like.
    klass:
      d.range >= maxR - 0.15 * (maxR - minR)
        ? "spring"
        : d.range <= minR + 0.15 * (maxR - minR)
          ? "neap"
          : "mid",
  }));
}

for (const site of SITES) {
  const best = nearestBySite.get(site.name);
  if (best.d > 50) {
    console.log(
      `${site.name}: NO STATION WITHIN 50 km — nearest is ${best.d.toFixed(0)} km. SS-04 UNRESOLVED here.`,
    );
    console.log("");
    continue;
  }
  const { ok, body } = await predictions(best.st.id);
  if (!ok) {
    console.log(
      `${site.name}: station ${best.st.id} -> ${JSON.stringify(body).slice(0, 160)}`,
    );
    console.log("");
    continue;
  }
  const preds = body.predictions;
  console.log(
    `${site.name} — station ${best.st.id} (${best.st.name}), ${BEGIN}→${END}, datum MLLW, metric`,
  );
  console.log(
    `  payload keys per prediction: ${Object.keys(preds[0]).join(", ")}  (t=time, v=height, type=H|L)`,
  );
  console.log(`  ${preds.length} hi/lo events returned. First four:`);
  for (const p of preds.slice(0, 4)) {
    console.log(`    ${p.t}  ${p.type}  ${Number(p.v).toFixed(3)} m`);
  }
  const cls = rangeClass(preds);
  console.log("  SS-10 daily range class (derived from this series alone):");
  for (const d of cls) {
    const n = preds.filter((p) => p.t.slice(0, 10) === d.day).length;
    console.log(
      `    ${d.day}  range ${d.range.toFixed(2)} m  → ${d.klass}${n < 4 ? `   [only ${n} events in this calendar day]` : ""}`,
    );
  }
  console.log(
    "  NOTE for the engine: bucketing by CALENDAR day understates the range on",
  );
  console.log(
    "  days holding fewer than four events; SS-10's implementation must bucket by",
  );
  console.log(
    "  TIDAL day (~24h50m) instead. Visible above wherever the flag prints.",
  );
  console.log("");
}

// ---------- 4. what a non-US request actually does ----------
console.log("THE GAP, STATED EXACTLY:");
console.log(
  `  NOAA CO-OPS is a US agency and its ${sjson.count} tide-prediction stations are`,
);
const nonUsStates = new Set(
  stations.map((s) => s.state).filter((s) => s && s.length === 2),
);
console.log(
  `  US states/territories only (${nonUsStates.size} two-letter state codes present).`,
);
console.log(
  "  For the three non-US sites above the nearest station is an ocean away;",
);
console.log(
  "  SS-04 therefore does NOT resolve outside US waters from this source, and",
);
console.log(
  "  SS-10 inherits that gap because it is derived from SS-04's series.",
);
