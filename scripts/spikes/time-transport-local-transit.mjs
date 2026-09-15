// Spike: local transit modes + headways (V1.S1.T5)
// Serves: TT-07 (metro/tram/bus availability per destination, typical headways)
// Run: node scripts/spikes/time-transport-local-transit.mjs
//
// Two questions, two sources:
//   (a) WHICH destinations have a machine-readable schedule at all
//       -> the Mobility Database catalogue (free, no key, CC0 catalogue).
//   (b) WHICH MODES a destination actually has, without downloading a
//       GTFS zip per city -> OpenStreetMap via Overpass (ODbL, live).
// Headways come from the GTFS feed itself once a city is in play; this
// spike proves the feed is FINDABLE and its license is readable, which is
// the part that decides the grade.

function parseCsv(text) {
  const rows = [];
  let row = [],
    field = "",
    q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else q = false;
      } else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c !== "\r") field += c;
  }
  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }
  const head = rows.shift();
  return rows
    .filter((r) => r.length === head.length)
    .map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}

// ---------------------------------------------------------------------
// (a) The Mobility Database catalogue — the GTFS feed registry.
// ---------------------------------------------------------------------
const CATALOG =
  "https://storage.googleapis.com/storage/v1/b/mdb-csv/o/sources.csv?alt=media";
const res = await fetch(CATALOG, { headers: { "User-Agent": "roam-spike" } });
if (!res.ok) {
  console.error(`catalogue HTTP ${res.status}`);
  process.exit(1);
}
const csv = await res.text();
const feeds = parseCsv(csv);
console.log(
  `Mobility Database sources.csv: ${(csv.length / 1e6).toFixed(2)} MB, ${feeds.length} rows`,
);
console.log(`columns: ${Object.keys(feeds[0]).join(", ")}`);

const byType = {};
for (const f of feeds) byType[f.data_type] = (byType[f.data_type] ?? 0) + 1;
console.log(`data_type: ${Object.entries(byType).map(([k, v]) => `${k}=${v}`).join(", ")}`);

const countries = new Set(feeds.map((f) => f["location.country_code"]).filter(Boolean));
console.log(`distinct country codes with at least one feed: ${countries.size}`);

const withLicense = feeds.filter((f) => f["urls.license"]);
const official = feeds.filter((f) => f.is_official === "True" || f.is_official === "true");
const authGated = feeds.filter(
  (f) => f["urls.authentication_type"] && f["urls.authentication_type"] !== "0",
);
console.log(
  `rows carrying a license url: ${withLicense.length} (${Math.round((100 * withLicense.length) / feeds.length)}%)`,
);
console.log(`rows flagged is_official: ${official.length}`);
console.log(
  `rows requiring authentication: ${authGated.length} (${Math.round((100 * authGated.length) / feeds.length)}%) — these need a per-operator key`,
);

// Demo-city coverage, named individually rather than asserted in aggregate.
console.log("\nfeed availability for candidate demo cities:");
for (const city of ["Tokyo", "Paris", "London", "New York", "Seoul", "Reykjavík", "Lisbon"]) {
  const hits = feeds.filter(
    (f) =>
      (f["location.municipality"] || "").toLowerCase().includes(city.toLowerCase()) &&
      f.data_type === "gtfs",
  );
  const lic = new Set(hits.map((f) => f["urls.license"]).filter(Boolean));
  console.log(
    `  ${city.padEnd(12)} ${String(hits.length).padStart(3)} gtfs feeds; providers: ${
      [...new Set(hits.map((f) => f.provider))].slice(0, 3).join(" / ") || "(none)"
    }${lic.size ? `; license urls: ${lic.size}` : "; NO license url"}`,
  );
}

// ---------------------------------------------------------------------
// (b) Mode presence without downloading a feed — OSM via Overpass.
// ---------------------------------------------------------------------
// Public Overpass instances are shared, rate-limited and periodically
// overloaded. Vetting one is not enough — the spike carries a mirror list
// because THE AVAILABILITY IS PART OF THE GRADE.
const OVERPASS_MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];
async function modes(name, lat, lon, radius = 15000) {
  const q = `[out:json][timeout:60];
(
  relation["route"="subway"](around:${radius},${lat},${lon});
  relation["route"="light_rail"](around:${radius},${lat},${lon});
  relation["route"="tram"](around:${radius},${lat},${lon});
  relation["route"="bus"](around:${radius},${lat},${lon});
  relation["route"="ferry"](around:${radius},${lat},${lon});
);
out tags;`;
  let r, used;
  outer: for (let attempt = 1; attempt <= 3; attempt++) {
    for (const mirror of OVERPASS_MIRRORS) {
      try {
        r = await fetch(mirror, {
          method: "POST",
          body: "data=" + encodeURIComponent(q),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "roam-spike",
          },
          signal: AbortSignal.timeout(120000),
        });
      } catch (e) {
        console.log(`  ${name}: ${new URL(mirror).host} ${e.message}`);
        continue;
      }
      used = new URL(mirror).host;
      if (r.ok) break outer;
      console.log(`  ${name}: ${used} HTTP ${r.status}`);
    }
    await new Promise((s) => setTimeout(s, 10000 * attempt));
  }
  if (!r?.ok) return console.log(`  ${name}: all mirrors failed`);
  console.log(`  (served by ${used})`);
  const j = await r.json();
  const count = {};
  const headwayTagged = [];
  for (const el of j.elements) {
    const t = el.tags?.route;
    count[t] = (count[t] ?? 0) + 1;
    if (el.tags?.interval) headwayTagged.push(`${t}:${el.tags.interval}`);
  }
  console.log(
    `  ${name.padEnd(12)} ${j.elements.length} route relations — ${
      Object.entries(count)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => `${k}=${v}`)
        .join(", ") || "(none)"
    }`,
  );
  console.log(
    `               osm "interval" (headway) tagged on ${headwayTagged.length} of them${
      headwayTagged.length ? ` — e.g. ${headwayTagged.slice(0, 3).join(", ")}` : " — headways must come from GTFS, not OSM"
    }`,
  );
}

console.log("\nmode presence via OpenStreetMap (Overpass, ODbL):");
for (const [n, lat, lon] of [
  ["Tokyo", 35.6812, 139.7671],
  ["Lisbon", 38.7223, -9.1393],
  ["Reykjavik", 64.1466, -21.9426],
]) {
  await modes(n, lat, lon);
}
