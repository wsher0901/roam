// Spike: OurAirports open data — airport registry (V1.S1.T5)
// Serves: TT-01 (airports: IATA, geocode, cities served, multi-airport regions)
// Run: node scripts/spikes/time-transport-airports.mjs
// Free, no key. Data dedicated to the public domain by OurAirports.

const BASE = "https://davidmegginson.github.io/ourairports-data";

function parseCsv(text) {
  // Minimal RFC4180 parser — OurAirports quotes fields containing commas.
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

const t0 = Date.now();
const res = await fetch(`${BASE}/airports.csv`);
if (!res.ok) {
  console.error(`HTTP ${res.status}`);
  process.exit(1);
}
const lastMod = res.headers.get("last-modified");
const text = await res.text();
const airports = parseCsv(text);

console.log(
  `airports.csv: ${(text.length / 1e6).toFixed(1)} MB, ${airports.length} rows in ${Date.now() - t0} ms`,
);
console.log(`Last-Modified: ${lastMod}`);
console.log(`columns: ${Object.keys(airports[0]).join(", ")}`);

const byType = {};
for (const a of airports) byType[a.type] = (byType[a.type] ?? 0) + 1;
console.log(
  `types: ${Object.entries(byType)
    .map(([k, v]) => `${k}=${v}`)
    .join(", ")}`,
);

const withIata = airports.filter((a) => a.iata_code);
const scheduled = airports.filter((a) => a.scheduled_service === "yes");
const both = airports.filter(
  (a) => a.iata_code && a.scheduled_service === "yes",
);
console.log(
  `with IATA code: ${withIata.length}; scheduled_service=yes: ${scheduled.length}; both: ${both.length}`,
);

const countries = new Set(airports.map((a) => a.iso_country).filter(Boolean));
console.log(`distinct iso_country values: ${countries.size}`);

// Dictionary check: IATA, geocode, cities served.
const sample = airports.find((a) => a.iata_code === "HND");
console.log("\nsample row (HND):");
for (const k of [
  "ident",
  "type",
  "name",
  "latitude_deg",
  "longitude_deg",
  "elevation_ft",
  "iso_country",
  "iso_region",
  "municipality",
  "scheduled_service",
  "iata_code",
  "icao_code",
  "gps_code",
])
  console.log(`  ${k}: ${sample[k]}`);

// Multi-airport region test — TT-01 asks for it by name, and it is this
// slot's real weakness. `municipality` is a CITY NAME, not a metro
// grouping: it collides across countries and misses satellite airports.
for (const city of ["London", "Paris", "Tokyo", "New York"]) {
  const hits = both.filter((a) => a.municipality === city);
  console.log(
    `\nmunicipality === "${city}": ${hits.length} — ${
      hits.map((a) => `${a.iata_code}/${a.iso_country}`).join(", ") || "(none)"
    }`,
  );
}

// The IATA METROPOLITAN CODE does exist in the data — but only inside the
// free-text `keywords` column, and only sometimes. That gap is what the
// SOURCES entry has to grade honestly.
console.log(
  "\nmetro code as a first-class row:",
  ["LON", "PAR", "TYO", "NYC"]
    .map(
      (c) =>
        `${c}=${airports.some((a) => a.iata_code === c) ? "PRESENT" : "absent"}`,
    )
    .join(", "),
);
for (const metro of ["LON", "PAR", "TYO", "NYC", "OSA"]) {
  const kw = both.filter((a) =>
    (a.keywords || "").split(/,\s*/).includes(metro),
  );
  console.log(
    `keywords contain "${metro}": ${kw.length} — ${
      kw.map((a) => a.iata_code).join(", ") || "(none)"
    }`,
  );
}
console.log("named misses, verified individually:");
for (const code of ["CDG", "ORY", "BVA", "NRT", "EWR", "LGW"]) {
  const a = airports.find((x) => x.iata_code === code);
  console.log(
    `  ${code}: municipality=${JSON.stringify(a?.municipality)} keywords=${JSON.stringify(a?.keywords)}`,
  );
}

// Companion files that carry the "cities served" join.
console.log("");
for (const f of [
  "countries.csv",
  "regions.csv",
  "airport-frequencies.csv",
  "runways.csv",
]) {
  const r = await fetch(`${BASE}/${f}`, { method: "HEAD" });
  console.log(
    `companion ${f}: HTTP ${r.status}, ${r.headers.get("content-length")} bytes`,
  );
}
