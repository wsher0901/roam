// Spike: public-holidays slot vs FACTS.md F-CC-01 (V1.S1.T6)
// Serves: CC-01. Run: node scripts/spikes/crowds-calendar-public-holidays.mjs
// Two candidates, both free and keyless:
//   Nager.Date      — breadth (global country list)
//   OpenHolidays API — depth (regional/subdivision scope, multilingual)
// What this proves: country breadth, the payload keys each returns, and
// whether subnational scope (the thing CC-01 needs for "region") exists.

const YEAR = 2026;
// Probe set: one per continent + two federal states where regional
// holidays actually differ, so "national only" cannot hide.
const PROBE = ["HR", "JP", "US", "BR", "ZA", "IN", "DE", "ES", "AU", "MA"];

async function json(url) {
  const res = await fetch(url);
  if (!res.ok) return { __status: res.status };
  return res.json();
}

console.log("=== Nager.Date (date.nager.at/api/v3) ===");
const nagerCountries = await json(
  "https://date.nager.at/api/v3/AvailableCountries",
);
console.log("countries available:", nagerCountries.length);
const nagerCodes = new Set(nagerCountries.map((c) => c.countryCode));
for (const cc of PROBE) {
  if (!nagerCodes.has(cc)) {
    console.log(`  ${cc}: NOT COVERED`);
    continue;
  }
  const hs = await json(
    `https://date.nager.at/api/v3/PublicHolidays/${YEAR}/${cc}`,
  );
  if (hs.__status) {
    console.log(`  ${cc}: HTTP ${hs.__status}`);
    continue;
  }
  const regional = hs.filter((h) => h.counties && h.counties.length);
  console.log(
    `  ${cc}: ${hs.length} holidays, ${regional.length} with county scope` +
      ` | e.g. ${hs[0].date} ${hs[0].name}`,
  );
}
// Absence is a finding: name the notable countries the index omits.
const NOTABLE = ["IN", "CN", "ID", "NG", "PK", "BD", "EG", "TH", "VN", "PH"];
console.log(
  "  notable countries ABSENT from the Nager index:",
  NOTABLE.filter((c) => !nagerCodes.has(c)).join(",") || "none",
);
console.log(
  "Nager keys:",
  Object.keys(
    (await json(`https://date.nager.at/api/v3/PublicHolidays/${YEAR}/DE`))[0],
  ).join(", "),
);

console.log("\n=== OpenHolidays API (openholidaysapi.org) ===");
const ohCountries = await json(
  "https://openholidaysapi.org/Countries?languageIsoCode=EN",
);
console.log(
  "countries available:",
  ohCountries.length,
  "->",
  ohCountries.map((c) => c.isoCode).join(","),
);
const ohCodes = new Set(ohCountries.map((c) => c.isoCode));
for (const cc of PROBE) {
  if (!ohCodes.has(cc)) {
    console.log(`  ${cc}: NOT COVERED`);
    continue;
  }
  const hs = await json(
    `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${cc}` +
      `&languageIsoCode=EN&validFrom=${YEAR}-01-01&validTo=${YEAR}-12-31`,
  );
  if (hs.__status) {
    console.log(`  ${cc}: HTTP ${hs.__status}`);
    continue;
  }
  const regional = hs.filter((h) => h.nationwide === false);
  console.log(
    `  ${cc}: ${hs.length} holidays, ${regional.length} regional-only` +
      (hs.length
        ? ` | e.g. ${hs[0].startDate} ${hs[0].name[0].text}`
        : " | LISTED BUT EMPTY — country in the index, no data returned"),
  );
}
const ohSample = await json(
  `https://openholidaysapi.org/PublicHolidays?countryIsoCode=ES` +
    `&languageIsoCode=EN&validFrom=${YEAR}-01-01&validTo=${YEAR}-12-31`,
);
console.log("OpenHolidays keys:", Object.keys(ohSample[0]).join(", "));
const withSubdiv = ohSample.find((h) => h.subdivisions);
console.log(
  "regional example:",
  withSubdiv
    ? `${withSubdiv.startDate} ${withSubdiv.name[0].text} -> ` +
        withSubdiv.subdivisions.map((s) => s.code).join(",")
    : "none returned",
);
