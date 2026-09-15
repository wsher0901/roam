// Spike: timezone offset + jet-lag shift (V1.S1.T5)
// Serves: TT-04 (origin<->destination offset, shift magnitude, DST-aware)
// Run: node scripts/spikes/time-transport-tz.mjs
//
// TT-04 is typed "computed" — rung 3. This spike proves the computation
// is available with ZERO external dependency and ZERO network call for
// the arithmetic itself: the IANA tz database ships inside Node's ICU.
// The only network call is lat/lon -> IANA zone name, and that comes
// from the Open-Meteo endpoint already vetted for the weather family.

// ---------------------------------------------------------------------
// 1. The tz database, in-process.
// ---------------------------------------------------------------------
console.log(`node: ${process.version}`);
console.log(`bundled tzdata version: ${process.versions.tz ?? "(not exposed)"}`);
console.log(`ICU: ${process.versions.icu ?? "(none)"}`);
const zones = Intl.supportedValuesOf("timeZone");
console.log(`Intl.supportedValuesOf("timeZone"): ${zones.length} zones`);
console.log(`  sample: ${zones.slice(0, 4).join(", ")} … ${zones.slice(-3).join(", ")}`);

// ---------------------------------------------------------------------
// 2. Offset computation — the TT-04 value, DST-correct by construction.
// ---------------------------------------------------------------------
function offsetMinutes(zone, date) {
  // Compare the same instant formatted in the zone against UTC.
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: zone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const p = Object.fromEntries(
    dtf.formatToParts(date).map(({ type, value }) => [type, value]),
  );
  const asUTC = Date.UTC(
    +p.year,
    +p.month - 1,
    +p.day,
    +p.hour % 24,
    +p.minute,
    +p.second,
  );
  return Math.round((asUTC - date.getTime()) / 60000);
}
const fmt = (m) =>
  `${m < 0 ? "-" : "+"}${String(Math.floor(Math.abs(m) / 60)).padStart(2, "0")}:${String(Math.abs(m) % 60).padStart(2, "0")}`;

// A DST transition, both sides — the case a naive static table gets wrong.
console.log("\nDST correctness (Europe/London, 2026 spring transition):");
for (const iso of ["2026-03-28T12:00:00Z", "2026-03-30T12:00:00Z"]) {
  const d = new Date(iso);
  console.log(`  ${iso} -> ${fmt(offsetMinutes("Europe/London", d))}`);
}

// Half-hour and three-quarter-hour zones — the other naive-table failure.
console.log("\nnon-integer offsets:");
for (const z of ["Asia/Kolkata", "Asia/Kathmandu", "Australia/Eucla", "Pacific/Chatham"]) {
  console.log(`  ${z.padEnd(20)} ${fmt(offsetMinutes(z, new Date()))}`);
}

// ---------------------------------------------------------------------
// 3. Jet-lag shift — what TT-04 actually feeds (TP-09 first-day pacing).
// ---------------------------------------------------------------------
console.log("\njet-lag shift magnitude (origin -> destination, at trip date):");
const tripDate = new Date("2026-10-15T12:00:00Z");
for (const [o, d] of [
  ["America/New_York", "Asia/Tokyo"],
  ["Europe/London", "America/Los_Angeles"],
  ["Asia/Seoul", "Europe/Paris"],
  ["Australia/Sydney", "Asia/Kolkata"],
]) {
  const shift = (offsetMinutes(d, tripDate) - offsetMinutes(o, tripDate)) / 60;
  const dir = shift > 0 ? "eastward" : "westward";
  console.log(
    `  ${o.padEnd(20)} -> ${d.padEnd(20)} ${fmt(offsetMinutes(o, tripDate))} -> ${fmt(offsetMinutes(d, tripDate))} = ${shift > 0 ? "+" : ""}${shift} h ${dir}`,
  );
}

// ---------------------------------------------------------------------
// 4. lat/lon -> IANA zone. The one network dependency, and it is the
//    SAME endpoint the weather family already vetted (Open-Meteo, CC-BY).
// ---------------------------------------------------------------------
console.log("\nlat/lon -> IANA zone (Open-Meteo timezone=auto):");
for (const [name, lat, lon] of [
  ["Tokyo", 35.6762, 139.6503],
  ["Kathmandu", 27.7172, 85.324],
  ["Reykjavik", 64.1466, -21.9426],
  ["Adelaide", -34.9285, 138.6007],
]) {
  const u = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&timezone=auto&forecast_days=1&hourly=temperature_2m`;
  const r = await fetch(u);
  const j = await r.json();
  const localOffset = offsetMinutes(j.timezone, new Date());
  console.log(
    `  ${name.padEnd(12)} ${j.timezone} (abbr ${j.timezone_abbreviation}) api_offset=${fmt(j.utc_offset_seconds / 60)} icu_offset=${fmt(localOffset)} agree=${j.utc_offset_seconds / 60 === localOffset}`,
  );
}
