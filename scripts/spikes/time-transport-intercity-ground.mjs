// Spike: intercity ground — rail / bus / ferry (V1.S1.T5)
// Serves: TT-06 (pair_id, mode, typical_duration_min, vehicle_allowed,
//                frequency_class)
// Run: node scripts/spikes/time-transport-intercity-ground.mjs
//
// TT-06 names ferries specifically ("island itineraries break without
// car-ferry and seasonality awareness"), so this spike tests the two
// fields nothing else carries: vehicle_allowed and frequency/seasonality.
// OpenStreetMap turns out to tag both — unevenly, which is the finding.

const OVERPASS_MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];

async function overpass(q, label) {
  let r;
  for (let attempt = 1; attempt <= 3; attempt++) {
    for (const m of OVERPASS_MIRRORS) {
      try {
        r = await fetch(m, {
          method: "POST",
          body: "data=" + encodeURIComponent(q),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "roam-spike",
          },
          signal: AbortSignal.timeout(180000),
        });
      } catch {
        continue;
      }
      if (r.ok) return r.json();
      console.log(`  ${label}: ${new URL(m).host} HTTP ${r.status}`);
    }
    await new Promise((s) => setTimeout(s, 10000 * attempt));
  }
  return null;
}

// ---------------------------------------------------------------------
// 1. FERRIES — existence, vehicle_allowed, frequency, seasonality.
// ---------------------------------------------------------------------
console.log("ferry routes (OpenStreetMap, ODbL) — TT-06's hardest fields:");
const regions = [
  ["Greek islands (Piraeus)", 37.9475, 23.6339, 60000],
  ["Croatian coast (Split)", 43.5081, 16.4402, 60000],
  ["Scottish islands (Oban)", 56.4128, -5.4728, 60000],
];
for (const [name, lat, lon, radius] of regions) {
  const q = `[out:json][timeout:180];
relation["route"="ferry"](around:${radius},${lat},${lon});
out tags;`;
  const j = await overpass(q, name);
  if (!j) {
    console.log(`  ${name}: Overpass unavailable this run`);
    continue;
  }
  const rels = j.elements;
  const tagged = (k) => rels.filter((e) => e.tags?.[k] !== undefined).length;
  console.log(`\n  ${name}: ${rels.length} ferry route relations`);
  console.log(
    `    tag coverage — motor_vehicle=${tagged("motor_vehicle")}  duration=${tagged("duration")}  interval=${tagged("interval")}  operator=${tagged("operator")}  seasonal=${tagged("seasonal")}  opening_hours=${tagged("opening_hours")}`,
  );
  const withVehicle = rels.filter((e) => e.tags?.motor_vehicle);
  console.log(
    `    vehicle_allowed derivable on ${withVehicle.length}/${rels.length} (${Math.round((100 * withVehicle.length) / (rels.length || 1))}%)`,
  );
  const example = rels.find((e) => e.tags?.duration || e.tags?.motor_vehicle);
  if (example)
    console.log(
      `    example: ${JSON.stringify(
        Object.fromEntries(
          Object.entries(example.tags).filter(([k]) =>
            [
              "name",
              "from",
              "to",
              "operator",
              "duration",
              "interval",
              "motor_vehicle",
              "seasonal",
            ].includes(k),
          ),
        ),
      )}`,
    );
}

// ---------------------------------------------------------------------
// 2. RAIL / COACH — is there a national GTFS feed to get durations from?
//    (The Mobility Database catalogue answers this without a key.)
// ---------------------------------------------------------------------
console.log("\nnational intercity feeds in the Mobility Database catalogue:");
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
const feeds = parseCsv(
  await (
    await fetch(
      "https://storage.googleapis.com/storage/v1/b/mdb-csv/o/sources.csv?alt=media",
      {
        headers: { "User-Agent": "roam-spike" },
      },
    )
  ).text(),
);
const national =
  /rail|railway|bahn|sncf|trenitalia|renfe|jr |national|intercity|ferry|ferries/i;
for (const cc of ["DE", "FR", "IT", "ES", "JP", "GB", "KR", "NO", "GR", "HR"]) {
  const hits = feeds.filter(
    (f) => f["location.country_code"] === cc && f.data_type === "gtfs",
  );
  const rail = hits.filter((f) => national.test(`${f.provider} ${f.name}`));
  console.log(
    `  ${cc}: ${String(hits.length).padStart(4)} gtfs feeds, ${String(rail.length).padStart(3)} look intercity/rail/ferry${
      rail.length
        ? ` — e.g. ${rail
            .slice(0, 2)
            .map((f) => f.provider)
            .join(" / ")}`
        : ""
    }`,
  );
}

// ---------------------------------------------------------------------
// 3. Seasonality — the catalogue carries an explicit flag.
// ---------------------------------------------------------------------
const seasonal = feeds.filter(
  (f) => f.is_seasonal === "True" || f.is_seasonal === "true",
);
console.log(
  `\ncatalogue rows flagged is_seasonal: ${seasonal.length} — TT-06's seasonality field has a machine-readable home for feeds that carry it`,
);
