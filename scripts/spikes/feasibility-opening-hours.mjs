// Spike: opening hours (V1.S1.T4, slot opening-hours)
// Serves: FE-04. Run: node scripts/spikes/feasibility-opening-hours.mjs
//
// The question this spike exists to answer is NOT "does OSM have an
// opening_hours tag" (it does) but "on what fraction of the venues we would
// actually place, in which countries" - because FE-04 is a HARD GATE, and a
// gate that is silent most of the time is not a gate.
//
// Source: Overpass API over OpenStreetMap (ODbL).
// One query per city, partitioned locally: the public Overpass instance
// allows two concurrent slots per IP, so twenty small queries cost far more
// wall-clock than five larger ones.
import { overpass, sleep } from "./_overpass.mjs";

// bbox: S,W,N,E - a comparable city-centre box across five countries.
const CITIES = [
  ["Reykjavik, IS", "64.12,-21.98,64.16,-21.87"],
  ["Rome, IT", "41.88,12.46,41.92,12.52"],
  ["Kyoto, JP", "34.99,135.74,35.03,135.79"],
  ["Paris, FR", "48.85,2.32,48.88,2.37"],
  ["Bangkok, TH", "13.72,100.50,13.76,100.55"],
];

// The categories where hours actually gate a placement.
const CATS = [
  ["museum/gallery", (t) => /^(museum|gallery)$/.test(t.tourism ?? "")],
  ["restaurant/cafe", (t) => /^(restaurant|cafe)$/.test(t.amenity ?? "")],
  ["attraction", (t) => t.tourism === "attraction"],
  ["bar/nightclub", (t) => /^(bar|pub|nightclub)$/.test(t.amenity ?? "")],
];

const MONTHS = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/;
const rows = [];

for (const [city, bbox] of CITIES) {
  const q = `[out:json][timeout:120][bbox:${bbox}];(
nwr["tourism"~"^(museum|gallery|attraction)$"];
nwr["amenity"~"^(restaurant|cafe|bar|pub|nightclub)$"];
);out tags center;`;
  const data = await overpass(q);
  const els = data.elements ?? [];
  console.log(
    `\n${city}  (osm base ${data.osm3s?.timestamp_osm_base ?? "?"}) - ${els.length} elements`,
  );

  for (const [cat, pred] of CATS) {
    const sub = els.filter((e) => pred(e.tags ?? {}));
    const withHours = sub.filter((e) => e.tags?.opening_hours);
    const seasonal = sub.filter((e) =>
      MONTHS.test(e.tags?.opening_hours ?? ""),
    );
    const named = sub.filter((e) => e.tags?.name);
    rows.push({
      city,
      cat,
      total: sub.length,
      named: named.length,
      hours: withHours.length,
      seasonal: seasonal.length,
    });
    const pct = sub.length
      ? ((withHours.length / sub.length) * 100).toFixed(0)
      : "-";
    console.log(
      `  ${cat.padEnd(16)} n=${String(sub.length).padStart(4)}` +
        `  named=${String(named.length).padStart(4)}` +
        `  opening_hours=${String(withHours.length).padStart(4)} (${String(pct).padStart(3)}%)` +
        `  month-range=${seasonal.length}`,
    );
    if (withHours.length) {
      console.log(
        `      sample: ${JSON.stringify(withHours[0].tags.opening_hours)}`,
      );
    }
  }
  await sleep(6000); // be a good Overpass citizen
}

console.log("\n=== FE-04 coverage roll-up (this is the grade)");
const byCity = {};
for (const r of rows) {
  byCity[r.city] ??= { total: 0, hours: 0 };
  byCity[r.city].total += r.total;
  byCity[r.city].hours += r.hours;
}
for (const [c, v] of Object.entries(byCity)) {
  const pct = v.total ? ((v.hours / v.total) * 100).toFixed(1) : "0.0";
  console.log(
    `  ${c.padEnd(15)} ${String(v.hours).padStart(5)}/${String(v.total).padEnd(5)} = ${pct}%`,
  );
}
const t = rows.reduce((a, r) => a + r.total, 0);
const h = rows.reduce((a, r) => a + r.hours, 0);
const s = rows.reduce((a, r) => a + r.seasonal, 0);
console.log(
  `  ${"ALL".padEnd(15)} ${String(h).padStart(5)}/${String(t).padEnd(5)} = ${((h / t) * 100).toFixed(1)}%`,
);
console.log(`  of which carry month-range (seasonal) syntax: ${s}`);

console.log("\n=== by category, across all five cities");
const byCat = {};
for (const r of rows) {
  byCat[r.cat] ??= { total: 0, hours: 0 };
  byCat[r.cat].total += r.total;
  byCat[r.cat].hours += r.hours;
}
for (const [c, v] of Object.entries(byCat)) {
  console.log(
    `  ${c.padEnd(16)} ${((v.hours / v.total) * 100).toFixed(1)}%  (${v.hours}/${v.total})`,
  );
}

console.log(`
Read: OSM answers WHERE it is tagged and is silent otherwise, and the
silence is not "closed" and not "open" - it is the retrieval trigger.
A hard gate cannot run on the tagged fraction alone.`);
