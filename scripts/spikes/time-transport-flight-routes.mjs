// Spike: route existence — what is actually obtainable for free (V1.S1.T5)
// Serves: TT-02 (which airport pairs have scheduled service, typical carriers)
// Run: node scripts/spikes/time-transport-flight-routes.mjs
//
// This spike's job is NOT to prove a source works. It is to measure how
// stale the only free route dataset is, and to confirm that the live
// alternatives are auth-gated — so TT-02's grade is set by evidence.

// ---------------------------------------------------------------------
// 1. OpenFlights routes.dat — the only free bulk route dataset.
// ---------------------------------------------------------------------
const ROUTES =
  "https://raw.githubusercontent.com/jpatokal/openflights/master/data/routes.dat";
const res = await fetch(ROUTES);
if (!res.ok) {
  console.error(`HTTP ${res.status}`);
  process.exit(1);
}
const text = await res.text();
const rows = text
  .trim()
  .split("\n")
  .map((l) => l.split(","));
// airline,airlineID,src,srcID,dst,dstID,codeshare,stops,equipment
console.log(`routes.dat: ${rows.length} rows, ${(text.length / 1e6).toFixed(1)} MB`);
console.log(`columns (positional): airline, airlineID, src, srcID, dst, dstID, codeshare, stops, equipment`);
console.log(`sample row: ${rows[0].join(" | ")}`);

const pairs = new Set(rows.map((r) => `${r[2]}-${r[4]}`));
const carriers = new Set(rows.map((r) => r[0]));
const direct = rows.filter((r) => r[7] === "0");
console.log(
  `distinct directed pairs: ${pairs.size}; distinct carriers: ${carriers.size}; stops=0 rows: ${direct.length}`,
);

// ---------------------------------------------------------------------
// 2. STALENESS — the number that decides this slot's grade.
// ---------------------------------------------------------------------
const gh = await fetch(
  "https://api.github.com/repos/jpatokal/openflights/commits?path=data/routes.dat&per_page=1",
  { headers: { "User-Agent": "roam-spike", Accept: "application/vnd.github+json" } },
);
if (gh.ok) {
  const [c] = await gh.json();
  const when = c?.commit?.committer?.date;
  const ageDays = Math.round((Date.now() - new Date(when)) / 86400000);
  console.log(
    `\nlast commit touching data/routes.dat: ${when} (${ageDays} days / ${(ageDays / 365).toFixed(1)} years ago)`,
  );
  console.log(`  message: ${(c?.commit?.message || "").split("\n")[0]}`);
} else {
  console.log(`\nGitHub commits API: HTTP ${gh.status} (rate limit?) — staleness unmeasured this run`);
}

// Independent staleness evidence: carriers that have ceased operations.
// If they still fly routes in this dataset, the dataset predates their end.
const defunct = {
  AB: "Air Berlin — ceased Oct 2017",
  MON: "Monarch — ceased Oct 2017",
  ZB: "Monarch (IATA) — ceased Oct 2017",
  MT: "Thomas Cook Airlines — ceased Sep 2019",
  BE: "Flybe — ceased Mar 2020 (and again Jan 2023)",
  SN: "Brussels Airlines — still flying (control)",
};
console.log("\ndefunct-carrier presence (each row is a route the world no longer has):");
for (const [code, note] of Object.entries(defunct)) {
  const n = rows.filter((r) => r[0] === code).length;
  console.log(`  ${code.padEnd(4)} ${String(n).padStart(6)} routes — ${note}`);
}

// ---------------------------------------------------------------------
// 3. The live alternatives — confirm they are auth-gated, not free.
// ---------------------------------------------------------------------
console.log("\nlive route/schedule APIs, unauthenticated probe:");
const probes = [
  ["Amadeus Self-Service (airport direct destinations)", "https://test.api.amadeus.com/v1/airport/direct-destinations?departureAirportCode=CDG"],
  ["Aviationstack (routes)", "https://api.aviationstack.com/v1/routes?dep_iata=CDG"],
  ["AeroDataBox (RapidAPI, airport routes)", "https://aerodatabox.p.rapidapi.com/airports/iata/CDG/stats/routes/daily"],
  ["OAG (schedules)", "https://api.oag.com/flight-instances/"],
];
for (const [name, url] of probes) {
  try {
    const r = await fetch(url, { signal: AbortSignal.timeout(20000) });
    const body = (await r.text()).slice(0, 160).replace(/\s+/g, " ");
    console.log(`  ${name}: HTTP ${r.status} — ${body}`);
  } catch (e) {
    console.log(`  ${name}: fetch failed — ${e.message}`);
  }
}

// ---------------------------------------------------------------------
// 4. The rung-5a path — confirm a carrier/airport timetable page is
//    actually reachable and quotable, since that is what the retrieval
//    policy will point the retrieval module at.
// ---------------------------------------------------------------------
console.log("\nrung-5a reachability — airport/carrier own pages (HEAD):");
for (const [name, url] of [
  ["Heathrow (airport operator)", "https://www.heathrow.com/arrivals"],
  ["Aeroports de Paris (operator)", "https://www.parisaeroport.fr/en/passengers/flights"],
  ["Narita (airport operator)", "https://www.narita-airport.jp/en/flight/"],
]) {
  try {
    const r = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": "Mozilla/5.0 (roam spike)" },
      signal: AbortSignal.timeout(20000),
    });
    console.log(`  ${name}: HTTP ${r.status}`);
  } catch (e) {
    console.log(`  ${name}: ${e.message}`);
  }
}
