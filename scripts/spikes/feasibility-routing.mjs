// Spike: travel times & distances per mode (V1.S1.T4, slot routing)
// Serves: FE-06. Run: node scripts/spikes/feasibility-routing.mjs
// FE-06 wants TYPICAL times for walk / drive / transit, never live traffic.
// Two open engines over OSM (ODbL): OSRM and Valhalla. The matrix call is the
// one the planner actually needs — day sequencing is an all-pairs problem.

const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Four Rome stops, a realistic one-day cluster. [lon, lat]
const STOPS = [
  ["Colosseum", 12.4922, 41.8902],
  ["Pantheon", 12.4768, 41.8986],
  ["Trevi Fountain", 12.4833, 41.9009],
  ["Vatican Museums", 12.4536, 41.9065],
];

async function get(url) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  const body = await r.text();
  if (!r.ok) throw new Error(`HTTP ${r.status} ${url}\n${body.slice(0, 200)}`);
  return JSON.parse(body);
}

console.log("=== OSRM (router.project-osrm.org) — public demo instance");
const coords = STOPS.map(([, lon, lat]) => `${lon},${lat}`).join(";");
for (const profile of ["driving", "walking", "cycling"]) {
  try {
    const d = await get(
      `https://router.project-osrm.org/route/v1/${profile}/${coords}?overview=false&steps=false`,
    );
    const leg = d.routes[0];
    console.log(
      `  ${profile.padEnd(8)} code=${d.code} total=${(leg.distance / 1000).toFixed(2)} km` +
      ` / ${(leg.duration / 60).toFixed(1)} min  legs=${leg.legs.length}`,
    );
  } catch (e) {
    console.log(`  ${profile.padEnd(8)} UNAVAILABLE — ${e.message.split("\n")[0]}`);
  }
  await sleep(1200);
}

console.log("\n=== OSRM /table — the all-pairs matrix the planner needs");
const tbl = await get(
  `https://router.project-osrm.org/table/v1/driving/${coords}?annotations=duration,distance`,
);
console.log("  keys:", Object.keys(tbl).join(", "));
console.log("  durations (min), row=from col=to:");
tbl.durations.forEach((row, i) => {
  console.log(
    `    ${STOPS[i][0].padEnd(16)} ${row.map((v) => (v / 60).toFixed(1).padStart(6)).join("")}`,
  );
});
console.log("  distances (km):");
tbl.distances.forEach((row, i) => {
  console.log(
    `    ${STOPS[i][0].padEnd(16)} ${row.map((v) => (v / 1000).toFixed(2).padStart(6)).join("")}`,
  );
});

console.log("\n=== Valhalla (valhalla1.openstreetmap.de, FOSSGIS) — the walk/transit half");
const status = await get("https://valhalla1.openstreetmap.de/status");
console.log("  version:", status.version, "| actions:", status.available_actions?.join(", "));
console.log("  tileset_last_modified:", new Date(status.tileset_last_modified * 1000).toISOString());

for (const costing of ["auto", "pedestrian", "bicycle"]) {
  const req = {
    locations: STOPS.map(([, lon, lat]) => ({ lon, lat })),
    costing,
    directions_options: { units: "kilometers" },
  };
  try {
    const d = await get(
      `https://valhalla1.openstreetmap.de/route?json=${encodeURIComponent(JSON.stringify(req))}`,
    );
    const s = d.trip.summary;
    console.log(
      `  ${costing.padEnd(11)} ${s.length.toFixed(2)} km / ${(s.time / 60).toFixed(1)} min` +
      `  legs=${d.trip.legs.length}  status=${d.trip.status_message}`,
    );
  } catch (e) {
    console.log(`  ${costing.padEnd(11)} UNAVAILABLE — ${e.message.split("\n")[0]}`);
  }
  await sleep(1500);
}

console.log("\n=== Valhalla /sources_to_targets — matrix with a pedestrian profile");
try {
  const req = {
    sources: STOPS.map(([, lon, lat]) => ({ lon, lat })),
    targets: STOPS.map(([, lon, lat]) => ({ lon, lat })),
    costing: "pedestrian",
    units: "kilometers",
  };
  const d = await get(
    `https://valhalla1.openstreetmap.de/sources_to_targets?json=${encodeURIComponent(JSON.stringify(req))}`,
  );
  const m = d.sources_to_targets;
  console.log("  walk durations (min):");
  m.forEach((row, i) => {
    console.log(
      `    ${STOPS[i][0].padEnd(16)} ${row.map((c) => (c.time / 60).toFixed(1).padStart(6)).join("")}`,
    );
  });
} catch (e) {
  console.log("  UNAVAILABLE —", e.message.split("\n")[0]);
}

console.log("\n=== transit (FE-06's third mode)");
console.log("  Valhalla costing 'multimodal' needs a GTFS-fed tileset; the public");
console.log("  FOSSGIS instance ships none. Probing it so the gap is measured, not assumed:");
try {
  const req = {
    locations: [
      { lon: STOPS[0][1], lat: STOPS[0][2] },
      { lon: STOPS[3][1], lat: STOPS[3][2] },
    ],
    costing: "multimodal",
    date_time: { type: 1, value: "2026-10-15T09:00" },
  };
  const d = await get(
    `https://valhalla1.openstreetmap.de/route?json=${encodeURIComponent(JSON.stringify(req))}`,
  );
  console.log("  multimodal OK:", d.trip.summary.time / 60, "min");
} catch (e) {
  console.log("  multimodal UNAVAILABLE —", e.message.split("\n")[0]);
  console.log("  => transit is NOT served by this slot at rung 1; it is TT-07's");
  console.log("     (local-transit, V1.S1.T5). Recorded as this slot's boundary.");
}
