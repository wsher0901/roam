// Spike: aurora-forecast — NOAA SWPC (V1.S1.T3)
// Serves: SS-05 (aurora activity forecast — Kp, 3-day + 27-day outlook).
// Run: node scripts/spikes/sky-sea-aurora-forecast.mjs
//
// SWPC is the US government's space-weather authority and publishes its
// products as open JSON/text with no key and no quota. Three products are
// spiked here because SS-05 asks for two horizons and the engine needs a
// nowcast to sanity-check both:
//   - 3-day planetary K-index forecast (the "which night" answer)
//   - 27-day outlook (the "is this trip week any good" answer)
//   - OVATION aurora nowcast grid (a 30-minute probability per lon/lat)

const UA = { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" };
const get = async (url, kind = "json") => {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return kind === "json" ? res.json() : res.text();
};

console.log("SPIKE aurora-forecast — NOAA SWPC (services.swpc.noaa.gov)\n");

// ---------- 1. 3-day planetary K-index forecast ----------
const kp = await get(
  "https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json",
);
console.log("A. 3-day planetary K-index forecast");
console.log(`   rows: ${kp.length}   keys: ${Object.keys(kp[0]).join(", ")}`);
const observed = kp.filter((r) => r.observed === "observed");
const predicted = kp.filter((r) => r.observed === "predicted");
const estimated = kp.filter((r) => r.observed === "estimated");
console.log(
  `   observed ${observed.length} · estimated ${estimated.length} · predicted ${predicted.length}`,
);
console.log(
  `   'observed' field values seen: ${[...new Set(kp.map((r) => r.observed))].join(", ")}`,
);
const future = predicted.slice(0, 8);
console.log("   next predicted 3-hour blocks:");
for (const r of future) {
  console.log(
    `     ${r.time_tag}  Kp ${String(r.kp).padEnd(5)} noaa_scale ${r.noaa_scale ?? "null"}`,
  );
}
const peak = predicted.reduce((a, b) => (Number(b.kp) > Number(a.kp) ? b : a));
console.log(
  `   forecast peak Kp in window: ${peak.kp} at ${peak.time_tag} (scale ${peak.noaa_scale ?? "null"})`,
);
console.log("");

// ---------- 2. 27-day outlook ----------
const outlook = await get(
  "https://services.swpc.noaa.gov/text/27-day-outlook.txt",
  "text",
);
const lines = outlook.split("\n");
const issued = lines.find((l) => l.startsWith(":Issued:"));
const dataLines = lines.filter((l) => /^\d{4}\s+\w{3}\s+\d{2}/.test(l.trim()));
console.log("B. 27-day space-weather outlook (text product)");
console.log(`   ${issued?.trim()}`);
console.log(`   data rows: ${dataLines.length}`);
console.log(
  "   columns: date | 10.7cm radio flux | planetary A index | largest Kp",
);
for (const l of dataLines.slice(0, 5)) console.log(`     ${l.trim()}`);
const maxKp27 = Math.max(
  ...dataLines.map((l) => Number(l.trim().split(/\s+/).pop())),
);
console.log(`   largest Kp anywhere in the 27-day window: ${maxKp27}`);
console.log("");

// ---------- 3. OVATION aurora nowcast grid ----------
const ov = await get(
  "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json",
);
console.log("C. OVATION aurora nowcast grid");
console.log(`   top-level keys: ${Object.keys(ov).join(", ")}`);
console.log(
  `   Observation Time ${ov["Observation Time"]} · Forecast Time ${ov["Forecast Time"]}`,
);
console.log(
  `   grid points: ${ov.coordinates.length}  format: ${ov["Data Format"]}`,
);

// The grid is [lon 0..359, lat -90..90, aurora probability %].
const grid = new Map();
for (const [lon, lat, p] of ov.coordinates) grid.set(`${lon}|${lat}`, p);
const probeAt = (lat, lon) => {
  const la = Math.round(lat);
  const lo = ((Math.round(lon) % 360) + 360) % 360;
  return grid.get(`${lo}|${la}`);
};
const PROBES = [
  ["Tromso, NO", 69.65, 18.96],
  ["Fairbanks, AK", 64.84, -147.72],
  ["Reykjavik, IS", 64.15, -21.94],
  ["Edinburgh, UK", 55.95, -3.19],
  ["Kyoto, JP", 35.01, 135.77],
  ["Ushuaia, AR", -54.8, -68.3],
];
console.log("   aurora probability (%) at sample points, this nowcast:");
for (const [name, lat, lon] of PROBES) {
  console.log(
    `     ${name.padEnd(16)} ${String(probeAt(lat, lon)).padStart(3)} %`,
  );
}
const nonZero = ov.coordinates.filter((c) => c[2] > 0).length;
console.log(
  `   grid cells with non-zero probability right now: ${nonZero} of ${ov.coordinates.length}`,
);
