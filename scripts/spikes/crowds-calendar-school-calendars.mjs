// Spike: school-calendars slot vs FACTS.md F-CC-02 (V1.S1.T6)
// Serves: CC-02. Run: node scripts/spikes/crowds-calendar-school-calendars.mjs
// CC-02 is flagged "patchy outside a handful of countries". This spike
// WALKS EVERY COUNTRY the OpenHolidays index lists and reports which ones
// actually return school-holiday data, so the patchiness is measured
// rather than asserted.

const YEAR = 2026;

async function json(url) {
  const res = await fetch(url);
  if (!res.ok) return { __status: res.status };
  return res.json();
}

const countries = await json(
  "https://openholidaysapi.org/Countries?languageIsoCode=EN",
);
console.log(`OpenHolidays index: ${countries.length} countries`);

const withData = [];
const empty = [];
for (const c of countries) {
  const hs = await json(
    `https://openholidaysapi.org/SchoolHolidays?countryIsoCode=${c.isoCode}` +
      `&languageIsoCode=EN&validFrom=${YEAR}-01-01&validTo=${YEAR}-12-31`,
  );
  if (hs.__status) {
    empty.push(`${c.isoCode}(HTTP ${hs.__status})`);
    continue;
  }
  if (!hs.length) {
    empty.push(c.isoCode);
    continue;
  }
  const subs = new Set();
  for (const h of hs) for (const s of h.subdivisions ?? []) subs.add(s.code);
  withData.push({
    code: c.isoCode,
    n: hs.length,
    subdivisions: subs.size,
    sample: `${hs[0].startDate}..${hs[0].endDate} ${hs[0].name[0].text}`,
  });
}

console.log(`\nCOUNTRIES WITH 2026 SCHOOL-HOLIDAY DATA: ${withData.length}`);
for (const r of withData) {
  console.log(
    `  ${r.code}: ${r.n} periods, ${r.subdivisions} subdivisions | ${r.sample}`,
  );
}
console.log(
  `\nCOUNTRIES LISTED BUT RETURNING NOTHING: ${empty.length} -> ${empty.join(",")}`,
);

const de = await json(
  `https://openholidaysapi.org/SchoolHolidays?countryIsoCode=DE` +
    `&languageIsoCode=EN&validFrom=${YEAR}-01-01&validTo=${YEAR}-12-31`,
);
console.log("\npayload keys:", Object.keys(de[0]).join(", "));
console.log("subdivision shape:", JSON.stringify(de[0].subdivisions?.[0]));
