// Spike: flight schedule blocks (V1.S1.T5)
// Serves: TT-03 (typical departure/arrival bands + durations per route,
//                red-eye identification)
// Run: node scripts/spikes/time-transport-flight-schedules.mjs
//
// TT-03 is the family's hardest slot and this spike exists to prove that,
// not to hide it. Three things get established:
//   1. every schedule API that could answer it is auth-gated;
//   2. the cheapest LICENSED tier that includes schedules has a price,
//      and the price is read off the vendor's own page, not recalled;
//   3. the free tiers that do exist are non-commercial, which is a
//      D-015 disqualifier for the asset layer regardless of coverage.

console.log("1. schedule APIs, unauthenticated:");
for (const [label, url] of [
  [
    "Aviationstack /flightsFuture",
    "https://api.aviationstack.com/v1/flightsFuture?iataCode=CDG&type=departure&date=2026-11-01",
  ],
  [
    "Aviationstack /timetable",
    "https://api.aviationstack.com/v1/timetable?iataCode=CDG&type=departure",
  ],
  [
    "AeroDataBox schedules (RapidAPI)",
    "https://aerodatabox.p.rapidapi.com/flights/airports/iata/CDG/2026-11-01T08:00/2026-11-01T20:00",
  ],
  [
    "FlightAware AeroAPI",
    "https://aeroapi.flightaware.com/aeroapi/airports/KJFK/flights/scheduled_departures",
  ],
  [
    "OpenSky states (ADS-B, observed not scheduled)",
    "https://opensky-network.org/api/states/all?lamin=48.8&lomin=2.2&lamax=49.1&lomax=2.7",
  ],
]) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "roam-spike" },
      signal: AbortSignal.timeout(30000),
    });
    const b = (await r.text()).slice(0, 200).replace(/\s+/g, " ");
    console.log(`  ${label}\n    HTTP ${r.status} — ${b}`);
  } catch (e) {
    console.log(`  ${label}\n    fetch failed — ${e.message}`);
  }
}

// ---------------------------------------------------------------------
// 2. The price of the cheapest tier that INCLUDES schedules, read from
//    the vendor's own pricing page at run time rather than recalled.
// ---------------------------------------------------------------------
console.log("\n2. aviationstack pricing, read from the vendor page now:");
const strip = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");
try {
  const p = await fetch("https://aviationstack.com/product", {
    headers: { "User-Agent": "Mozilla/5.0 (roam spike)" },
    signal: AbortSignal.timeout(30000),
  });
  const t = strip(await p.text());
  const plans = t.match(/Free[\s\S]{0,400}?Basic[\s\S]{0,600}?Professional/);
  console.log(`  HTTP ${p.status}`);
  if (plans) console.log(`  ${plans[0].slice(0, 900)}`);
  for (const term of [
    "Flight Schedules",
    "Airline Routes",
    "Non-Commercial Use",
    "Commercial Use",
  ]) {
    const i = t.indexOf(term);
    console.log(`  mentions "${term}": ${i >= 0 ? "yes" : "NO"}`);
  }
} catch (e) {
  console.log(`  pricing page unreachable — ${e.message}`);
}

// ---------------------------------------------------------------------
// 3. Licence check on the free tiers — D-015 gate.
// ---------------------------------------------------------------------
console.log("\n3. free-tier licence terms:");
for (const [label, url, needles] of [
  [
    "OpenSky Network terms",
    "https://opensky-network.org/about/terms-of-use",
    ["non-commercial", "research", "redistribut", "commercial"],
  ],
  [
    "Aviationstack terms",
    "https://aviationstack.com/terms",
    ["non-commercial", "cache", "caching", "store", "redistribut"],
  ],
]) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (roam spike)" },
      signal: AbortSignal.timeout(30000),
    });
    const t = strip(await r.text());
    console.log(`\n  ${label}: HTTP ${r.status}, ${t.length} chars of text`);
    for (const n of needles) {
      const re = new RegExp(`[^.]{0,180}${n}[^.]{0,180}\\.`, "i");
      const m = t.match(re);
      console.log(
        `    "${n}": ${m ? m[0].trim().slice(0, 300) : "(not found)"}`,
      );
    }
  } catch (e) {
    console.log(`\n  ${label}: ${e.message}`);
  }
}

// ---------------------------------------------------------------------
// 4. The rung-5a target — a carrier's own timetable page. Confirm what
//    an automated fetch actually gets, because that shapes the policy.
// ---------------------------------------------------------------------
console.log("\n4. rung-5a targets — carrier / airport own timetable pages:");
for (const [label, url] of [
  ["Heathrow departures (operator)", "https://www.heathrow.com/departures"],
  ["Narita timetable (operator)", "https://www.narita-airport.jp/en/flight/"],
  ["Schiphol departures (operator)", "https://www.schiphol.nl/en/departures/"],
  [
    "Lufthansa timetable (carrier)",
    "https://www.lufthansa.com/us/en/flight-timetable",
  ],
]) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (roam spike)" },
      signal: AbortSignal.timeout(30000),
    });
    console.log(
      `  ${label.padEnd(34)} HTTP ${r.status} (${r.headers.get("content-type")})`,
    );
  } catch (e) {
    console.log(`  ${label.padEnd(34)} ${e.message}`);
  }
}
