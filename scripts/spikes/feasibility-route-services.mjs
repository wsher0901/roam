// Spike: route services on driving legs (V1.S1.T4, slot route-services)
// Serves: FE-11. Run: node scripts/spikes/feasibility-route-services.mjs
// FE-11's whole value is the warning "no fuel 180 km after Vik". That number is
// COMPUTED, not fetched: OSM gives the amenity positions, we compute the gap.
// The leg under test is Iceland's south coast — the real case the fact names.
import { overpass } from "./_overpass.mjs";

// Vik -> Hofn along Route 1, the genuinely sparse stretch.
const BBOX = "63.35,-19.10,64.35,-15.10";
const q = `[out:json][timeout:120][bbox:${BBOX}];(
nwr["amenity"="fuel"];
nwr["amenity"="charging_station"];
nwr["highway"="rest_area"];
nwr["highway"="services"];
);out tags center;`;

const els = (await overpass(q)).elements ?? [];
const pt = (e) => ({
  lat: e.lat ?? e.center?.lat,
  lon: e.lon ?? e.center?.lon,
  t: e.tags,
});
const pts = els.map(pt).filter((p) => p.lat && p.lon);
const fuel = pts.filter((p) => p.t.amenity === "fuel");
const ev = pts.filter((p) => p.t.amenity === "charging_station");
const rest = pts.filter(
  (p) => p.t.highway === "rest_area" || p.t.highway === "services",
);
console.log(
  `South-coast Iceland corridor: fuel=${fuel.length} EV=${ev.length} rest=${rest.length}\n`,
);

// Haversine, then the gap along the corridor's east-west axis.
const R = 6371;
const hav = (a, b) => {
  const d = (x) => (x * Math.PI) / 180;
  const dLat = d(b.lat - a.lat),
    dLon = d(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(d(a.lat)) * Math.cos(d(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

console.log("=== fuel_gap_max_km — computed, the FE-11 headline value");
const ordered = [...fuel].sort((a, b) => a.lon - b.lon);
let maxGap = 0,
  at = null;
for (let i = 1; i < ordered.length; i++) {
  const g = hav(ordered[i - 1], ordered[i]);
  if (g > maxGap) {
    maxGap = g;
    at = [ordered[i - 1], ordered[i]];
  }
}
console.log(`  stations ordered W->E: ${ordered.length}`);
console.log(`  fuel_gap_max_km = ${maxGap.toFixed(1)} km`);
if (at) {
  console.log(
    `  between ${at[0].t.name ?? at[0].t.brand ?? "(unnamed)"} @ ${at[0].lat.toFixed(3)},${at[0].lon.toFixed(3)}`,
  );
  console.log(
    `      and ${at[1].t.name ?? at[1].t.brand ?? "(unnamed)"} @ ${at[1].lat.toFixed(3)},${at[1].lon.toFixed(3)}`,
  );
  console.log(
    `  warning_text would read: "no fuel ${Math.round(maxGap)} km after ${at[0].t.name ?? at[0].t.brand ?? "the last station"}"`,
  );
}

console.log("\n=== ev_coverage_class");
const cls =
  ev.length === 0 ? "none" : ev.length < fuel.length / 2 ? "sparse" : "good";
console.log(
  `  ${ev.length} charging stations vs ${fuel.length} fuel -> ev_coverage_class=${cls}`,
);
const socket = ev.filter((p) =>
  Object.keys(p.t).some((k) => k.startsWith("socket:")),
);
console.log(`  with socket:* detail: ${socket.length}/${ev.length}`);

console.log("\n=== tolls");
console.log("  toll roads are OSM 'toll=yes' on ways; PRICE is not in OSM ->");
console.log(
  "  tolls.est_band is retrieval (operator/authority site), not a fetch.",
);
