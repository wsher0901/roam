// Spike: airport access, buffers, immigration wait class (V1.S1.T5)
// Serves: TT-05 (access_modes[], checkin/security/bag-claim buffers,
//                immigration_wait_class)
// Run: node scripts/spikes/time-transport-airport-access.mjs
//
// TT-05 is three different questions wearing one slot, and they do NOT
// share a source. This spike separates them on purpose:
//   access_modes    -> OpenStreetMap (which modes physically reach the
//                      airport). Durations belong to FE-06 routing (T4).
//   buffers         -> the carrier's / airport's own published policy.
//                      No feed exists; this is a retrieval + curation slot.
//   immigration     -> US CBP publishes; nobody else does globally.

const OVERPASS_MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];

async function overpass(q) {
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
          signal: AbortSignal.timeout(120000),
        });
      } catch {
        continue;
      }
      if (r.ok) return r.json();
    }
    await new Promise((s) => setTimeout(s, 10000 * attempt));
  }
  return null;
}

// ---------------------------------------------------------------------
// 1. access_modes — what physically reaches the terminal.
// ---------------------------------------------------------------------
console.log("access modes at the terminal (OpenStreetMap, ODbL):");
const airports = [
  ["LHR London Heathrow", 51.4706, -0.4619],
  ["CDG Paris CDG", 49.0097, 2.5479],
  ["NRT Tokyo Narita", 35.772, 140.3929],
  ["KEF Keflavik", 63.985, -22.6056],
];
for (const [name, lat, lon] of airports) {
  const q = `[out:json][timeout:90];
(
  node["railway"="station"](around:3000,${lat},${lon});
  node["railway"="halt"](around:3000,${lat},${lon});
  node["highway"="bus_stop"](around:2000,${lat},${lon});
  node["amenity"="taxi"](around:2000,${lat},${lon});
  node["amenity"="car_rental"](around:3000,${lat},${lon});
);
out tags;`;
  const j = await overpass(q);
  if (!j) {
    console.log(`  ${name}: Overpass unavailable this run`);
    continue;
  }
  const kinds = {};
  const stations = [];
  for (const el of j.elements) {
    const t = el.tags || {};
    const kind =
      t.railway === "station" || t.railway === "halt"
        ? `rail:${t.station || t.subway === "yes" ? "subway/station" : "rail"}`
        : t.highway === "bus_stop"
          ? "bus_stop"
          : t.amenity === "taxi"
            ? "taxi_rank"
            : t.amenity === "car_rental"
              ? "car_rental"
              : "other";
    kinds[kind] = (kinds[kind] ?? 0) + 1;
    if (t.railway) stations.push(t.name || "(unnamed)");
  }
  console.log(
    `  ${name.padEnd(22)} ${
      Object.entries(kinds)
        .map(([k, v]) => `${k}=${v}`)
        .join(", ") || "(nothing tagged)"
    }`,
  );
  if (stations.length)
    console.log(
      `     rail stations: ${[...new Set(stations)].slice(0, 5).join(" | ")}`,
    );
}

// ---------------------------------------------------------------------
// 2. immigration_wait_class — US CBP is the only publisher found.
// ---------------------------------------------------------------------
console.log("\nimmigration wait: US CBP Airport Wait Times");
const cbp = await fetch("https://awt.cbp.gov/api/airports", {
  headers: { "User-Agent": "roam-spike" },
});
if (cbp.ok) {
  const list = await cbp.json();
  console.log(`  /api/airports: HTTP ${cbp.status}, ${list.length} rows`);
  console.log(`  keys: ${Object.keys(list[0]).join(", ")}`);
  console.log(
    `  sample: ${JSON.stringify(list.find((a) => a.IATA === "JFK") ?? list[0])}`,
  );
  console.log(
    `  distinct IATA codes covered: ${new Set(list.map((a) => a.IATA)).size} — ALL UNITED STATES`,
  );
} else {
  console.log(`  /api/airports: HTTP ${cbp.status}`);
}
// The historical series endpoints exist but are not GET-addressable with
// guessed parameters. Recorded as found, not as working.
for (const p of ["/api/waitTime/csv", "/api/waitTime/excel"]) {
  const r = await fetch(`https://awt.cbp.gov${p}`, {
    headers: { "User-Agent": "roam-spike" },
  });
  const body = await r.text();
  console.log(
    `  ${p}: HTTP ${r.status}, content-type ${r.headers.get("content-type")} — ${
      body.startsWith("<!doctype")
        ? "returns the SPA shell, not data (params undiscovered)"
        : "returns data"
    }`,
  );
}

// ---------------------------------------------------------------------
// 3. Buffers — no feed exists anywhere. Confirm the rung-5a targets are
//    reachable, because that is the whole of this sub-slot's ladder.
// ---------------------------------------------------------------------
console.log(
  "\ncheck-in / bag-drop cutoffs — the rung-5a targets (carrier is authoritative for its own cutoff):",
);
for (const [name, url] of [
  [
    "British Airways (carrier)",
    "https://www.britishairways.com/en-gb/information/at-the-airport/check-in",
  ],
  ["Lufthansa (carrier)", "https://www.lufthansa.com/us/en/check-in-deadlines"],
  ["Japan Airlines (carrier)", "https://www.jal.co.jp/jp/en/inter/checkin/"],
  [
    "Heathrow (airport operator)",
    "https://www.heathrow.com/at-the-airport/check-in",
  ],
]) {
  try {
    const r = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": "Mozilla/5.0 (roam spike)" },
      signal: AbortSignal.timeout(25000),
    });
    console.log(`  ${name.padEnd(30)} HTTP ${r.status}`);
  } catch (e) {
    console.log(`  ${name.padEnd(30)} ${e.message}`);
  }
}
console.log(
  "\nno aggregator publishes check-in/security/bag-claim buffers as a feed —\nsearched: no open dataset found. This sub-slot is CURATED + RUNG 5A.",
);
