// Spike: local transit modes + headways (V1.S1.T5)
// Serves: TT-07 (metro/tram/bus availability per destination, typical headways)
// Run: node scripts/spikes/time-transport-local-transit.mjs
//
// Three questions, three checks:
//   (a) WHICH destinations have a machine-readable schedule at all
//       -> the Mobility Database catalogue (free, no key, CC0 catalogue).
//   (b) WHICH MODES a destination actually has, without downloading a
//       GTFS zip per city -> OpenStreetMap via Overpass (ODbL, live).
//   (c) DOES A FEED ACTUALLY CARRY HEADWAYS -> open one and look. Finding
//       a feed is not the same as proving it answers the question, and
//       TT-07's grade rests on the headways, so (c) is not optional.

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
console.log(
  `data_type: ${Object.entries(byType)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ")}`,
);

const countries = new Set(
  feeds.map((f) => f["location.country_code"]).filter(Boolean),
);
console.log(`distinct country codes with at least one feed: ${countries.size}`);

const withLicense = feeds.filter((f) => f["urls.license"]);
const official = feeds.filter(
  (f) => f.is_official === "True" || f.is_official === "true",
);
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
//
// THE COLUMN YOU SEARCH IS PART OF THE ANSWER. A first pass keyed only on
// `location.municipality` reported ZERO feeds for Tokyo — which is false.
// Tokyo's two official feeds leave `municipality` BLANK and carry the city
// in `location.subdivision_name`, so the filter was reading a blank column
// as an absence. Every city field is searched now, and the match that hit
// is printed, so the method stays auditable.
const CITY_FIELDS = [
  "location.municipality",
  "location.subdivision_name",
  "provider",
  "name",
];
console.log("\nfeed availability for candidate demo cities:");
for (const [city, alt] of [
  ["Tokyo", []],
  ["Paris", []],
  ["London", []],
  ["New York", []],
  ["Seoul", ["서울"]],
  ["Reykjavik", ["Reykjavík"]],
  ["Lisbon", ["Lisboa"]],
]) {
  const needles = [city, ...alt].map((s) => s.toLowerCase());
  const matched = new Map();
  for (const f of feeds) {
    if (f.data_type !== "gtfs") continue;
    for (const field of CITY_FIELDS) {
      if (needles.some((n) => (f[field] || "").toLowerCase().includes(n))) {
        matched.set(f.mdb_source_id, { f, field });
        break;
      }
    }
  }
  const hits = [...matched.values()];
  const lic = new Set(hits.map(({ f }) => f["urls.license"]).filter(Boolean));
  const fields = new Set(hits.map(({ field }) => field));
  console.log(
    `  ${city.padEnd(10)} ${String(hits.length).padStart(3)} gtfs feeds${
      hits.length ? ` (matched on: ${[...fields].join(", ")})` : ""
    }`,
  );
  console.log(
    `             providers: ${
      [...new Set(hits.map(({ f }) => f.provider))].slice(0, 3).join(" / ") ||
      "(none)"
    }; ${hits.length ? `${lic.size} distinct license url(s), ${hits.filter(({ f }) => !f["urls.license"]).length} row(s) with none` : "no feed in the catalogue at all"}`,
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
      headwayTagged.length
        ? ` — e.g. ${headwayTagged.slice(0, 3).join(", ")}`
        : " — headways must come from GTFS, not OSM"
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

// ---------------------------------------------------------------------
// (c) OPEN AN ACTUAL FEED. Locating a feed is not the same as proving it
//     carries headways, and TT-07's grade rests on the headways. This
//     downloads one real GTFS zip and reads its table list without any
//     dependency — the zip central directory, then raw inflate.
// ---------------------------------------------------------------------
import { inflateRawSync } from "node:zlib";

function readZip(buf) {
  // Locate the End Of Central Directory record by scanning backwards.
  let eocd = -1;
  for (let i = buf.length - 22; i >= 0 && i > buf.length - 66000; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("no EOCD — not a zip");
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  const entries = [];
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) break;
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const uncompSize = buf.readUInt32LE(p + 24);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOff = buf.readUInt32LE(p + 42);
    const name = buf.subarray(p + 46, p + 46 + nameLen).toString("utf8");
    entries.push({ name, method, compSize, uncompSize, localOff });
    p += 46 + nameLen + extraLen + commentLen;
  }
  const read = (e) => {
    const nameLen = buf.readUInt16LE(e.localOff + 26);
    const extraLen = buf.readUInt16LE(e.localOff + 28);
    const start = e.localOff + 30 + nameLen + extraLen;
    const raw = buf.subarray(start, start + e.compSize);
    return e.method === 0 ? raw : inflateRawSync(raw);
  };
  return { entries, read };
}

console.log(
  "\nopening a real GTFS feed — Toei (Tokyo Metropolitan Bureau of Transportation):",
);
const TOEI =
  "https://api-public.odpt.org/api/v4/files/Toei/data/ToeiBus-GTFS.zip";
try {
  const zr = await fetch(TOEI, {
    headers: { "User-Agent": "roam-spike" },
    signal: AbortSignal.timeout(180000),
  });
  console.log(`  GET ${TOEI}\n  HTTP ${zr.status}`);
  if (zr.ok) {
    const buf = Buffer.from(await zr.arrayBuffer());
    console.log(`  ${(buf.length / 1e6).toFixed(2)} MB`);
    const { entries, read } = readZip(buf);
    console.log(
      `  tables: ${entries.map((e) => `${e.name} (${(e.uncompSize / 1024).toFixed(0)} KB)`).join(", ")}`,
    );
    // The headway question, answered from the file rather than assumed.
    const freq = entries.find((e) => e.name.endsWith("frequencies.txt"));
    const stopTimes = entries.find((e) => e.name.endsWith("stop_times.txt"));
    console.log(
      `  frequencies.txt present: ${freq ? "YES" : "no"}; stop_times.txt present: ${stopTimes ? "YES" : "no"}`,
    );
    if (freq) {
      const head = read(freq).toString("utf8").split("\n").slice(0, 3);
      console.log(`  frequencies.txt header: ${head[0]}`);
      console.log(`  frequencies.txt row 1 : ${head[1]}`);
    }
    if (stopTimes) {
      const txt = read(stopTimes).toString("utf8");
      const lines = txt.split("\n");
      console.log(`  stop_times.txt: ${lines.length - 1} rows`);
      console.log(`  stop_times.txt header: ${lines[0]}`);
      console.log(`  stop_times.txt row 1 : ${lines[1]}`);
      console.log(
        "  -> departure_time per trip per stop IS present, so headways are\n     COMPUTABLE from this feed. That is what grades TT-07 at B here.",
      );
    }
  }
} catch (e) {
  console.log(`  feed download/parse failed — ${e.message}`);
}
