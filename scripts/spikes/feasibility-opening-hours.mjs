// Spike: opening hours (V1.S1.T4, slot opening-hours)
// Serves: FE-04. Run: node scripts/spikes/feasibility-opening-hours.mjs
// The question this spike exists to answer is NOT "does OSM have an
// opening_hours tag" (it does) but "on what fraction of the venues we would
// actually place, in which countries" — because FE-04 is a HARD GATE and a
// gate that is silent 60% of the time is not a gate.
// Source: Overpass API over OpenStreetMap (ODbL).

const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";
const EP = "https://overpass-api.de/api/interpreter";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// bbox: S,W,N,E — a ~city-centre box, comparable size across cities.
const CITIES = [
  ["Reykjavik, IS", "64.12,-21.98,64.16,-21.87"],
  ["Rome, IT", "41.88,12.46,41.92,12.52"],
  ["Kyoto, JP", "34.99,135.74,35.03,135.79"],
  ["Paris, FR", "48.85,2.32,48.88,2.37"],
  ["Bangkok, TH", "13.72,100.50,13.76,100.55"],
];

// The tags that stand in for the 15 activity types where hours actually gate.
const CATS = [
  ["museum/gallery", '["tourism"~"^(museum|gallery)$"]'],
  ["restaurant/cafe", '["amenity"~"^(restaurant|cafe)$"]'],
  ["attraction", '["tourism"="attraction"]'],
  ["bar/nightclub", '["amenity"~"^(bar|pub|nightclub)$"]'],
];

// The public Overpass instance rate-limits hard (HTTP 429, "rate_limited").
// That is a FINDING, not an inconvenience: production needs a self-hosted
// instance or an offline OSM extract. Here we back off and rotate mirrors.
const MIRRORS = [EP, "https://overpass.kumi.systems/api/interpreter"];

async function overpass(q) {
  let lastErr;
  for (let attempt = 0; attempt < 6; attempt++) {
    const ep = MIRRORS[attempt % MIRRORS.length];
    try {
      const r = await fetch(ep, {
        method: "POST",
        headers: { "User-Agent": UA, "Content-Type": "text/plain" },
        body: q,
      });
      if (r.status === 429 || r.status === 504) {
        const wait = 15000 * (attempt + 1);
        console.log(`  (HTTP ${r.status} from ${new URL(ep).host} — backing off ${wait / 1000}s)`);
        await sleep(wait);
        continue;
      }
      if (!r.ok) throw new Error(`overpass HTTP ${r.status}`);
      const body = await r.text();
      if (body.trimStart().startsWith("<")) {
        const wait = 15000 * (attempt + 1);
        console.log(`  (non-JSON from ${new URL(ep).host} — backing off ${wait / 1000}s)`);
        await sleep(wait);
        continue;
      }
      return JSON.parse(body);
    } catch (e) {
      lastErr = e;
      await sleep(10000);
    }
  }
  throw lastErr ?? new Error("overpass: exhausted retries");
}

const rows = [];
for (const [city, bbox] of CITIES) {
  for (const [cat, filter] of CATS) {
    const q = `[out:json][timeout:60][bbox:${bbox}];(nwr${filter};);out tags;`;
    const data = await overpass(q);
    const els = data.elements ?? [];
    const withHours = els.filter((e) => e.tags?.opening_hours);
    const withSeason = els.filter((e) =>
      /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/.test(
        e.tags?.opening_hours ?? "",
      ),
    );
    const named = els.filter((e) => e.tags?.name);
    rows.push({ city, cat, total: els.length, named: named.length,
                hours: withHours.length, seasonal: withSeason.length });
    const pct = els.length ? ((withHours.length / els.length) * 100).toFixed(0) : "—";
    console.log(
      `${city.padEnd(14)} ${cat.padEnd(16)} n=${String(els.length).padStart(4)}` +
      `  named=${String(named.length).padStart(4)}` +
      `  opening_hours=${String(withHours.length).padStart(4)} (${pct}%)` +
      `  seasonal-syntax=${withSeason.length}`,
    );
    if (withHours.length) {
      console.log(`      sample: ${JSON.stringify(withHours[0].tags.opening_hours)}`);
    }
    await sleep(6000); // be a good Overpass citizen
  }
}

console.log("\n=== FE-04 coverage roll-up (this is the grade)");
const byCity = {};
for (const r of rows) {
  byCity[r.city] ??= { total: 0, hours: 0 };
  byCity[r.city].total += r.total;
  byCity[r.city].hours += r.hours;
}
for (const [c, v] of Object.entries(byCity)) {
  console.log(`  ${c.padEnd(14)} ${v.hours}/${v.total} = ${((v.hours / v.total) * 100).toFixed(1)}%`);
}
const t = rows.reduce((a, r) => a + r.total, 0);
const h = rows.reduce((a, r) => a + r.hours, 0);
const s = rows.reduce((a, r) => a + r.seasonal, 0);
console.log(`  ALL            ${h}/${t} = ${((h / t) * 100).toFixed(1)}%`);
console.log(`  of which carry month-range (seasonal) syntax: ${s}`);
console.log("\nRead: OSM answers WHERE it is tagged and is silent otherwise.");
console.log("Silence is not 'closed' and not 'open' — it is the retrieval trigger.");
