// Spike: astro-events — NASA GSFC eclipse canon + IAU MDC shower catalogue (V1.S1.T3)
// Serves: SS-09 (astronomical events calendar — eclipses, meteor-shower peaks).
// Run: node scripts/spikes/sky-sea-astro-events.mjs
//
// SS-09's two halves have different sources and different shapes, and this
// spike proves both are real and both are PARSEABLE — which matters, because
// neither is a JSON API:
//
//   A/B. Eclipses — NASA GSFC's Five Millennium Canon decade tables
//        (eclipse.gsfc.nasa.gov), authored at a US government lab. HTML
//        tables, one row per eclipse, with date, greatest-eclipse time, type,
//        Saros series, magnitude, duration and the visibility region.
//   C.   Meteor showers — the IAU Meteor Data Center's established-shower
//        catalogue, a fixed-width pipe-quoted text file. It gives the SOLAR
//        LONGITUDE of maximum, not a date, which is the right thing: solar
//        longitude is year-independent. The date is DERIVED here with the
//        same NOAA solar equations the ephemeris spike validated.
//
// The catalogue holds several published solutions per shower, so the spread
// across solutions is printed rather than hidden — a shower peak is a range
// of published values, and pretending otherwise would be the defect.

const UA = { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" };
const RAD = Math.PI / 180;
const TARGET_YEAR = 2026;

const stripRow = (html) =>
  html
    .replace(/<[^>]+>/g, "|")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\|+/g, "|")
    .replace(/\n/g, "")
    .trim();

async function eclipseTable(url, label, magLabel) {
  const html = await (await fetch(url, { headers: UA })).text();
  const rows = [...html.matchAll(/<tr[\s\S]*?<\/tr>/gi)].map((m) => stripRow(m[0]));
  const parsed = [];
  for (const r of rows) {
    const cells = r.split("|").map((c) => c.trim()).filter(Boolean);
    const m = cells[0]?.match(/^(\d{4}) (\w{3}) (\d{2})$/);
    if (!m) continue;
    parsed.push({
      date: `${m[1]}-${m[2]}-${m[3]}`,
      year: Number(m[1]),
      td: cells[1],
      type: cells[2],
      saros: cells[3],
      magnitude: cells[4],
      duration: cells[5],
      region: cells.slice(6).join(" "),
    });
  }
  console.log(`${label}`);
  console.log(`   GET ${url}`);
  console.log(`   rows parsed: ${parsed.length}   fields: date, TD of greatest eclipse, type, saros, ${magLabel}, duration, visibility region`);
  const inYear = parsed.filter((p) => p.year === TARGET_YEAR);
  console.log(`   events in ${TARGET_YEAR}: ${inYear.length}`);
  for (const p of inYear) {
    console.log(
      `     ${p.date}  ${p.td}  ${p.type.padEnd(10)} saros ${p.saros.padEnd(4)} ${magLabel} ${p.magnitude.padEnd(7)} ${p.duration.padEnd(14)} ${p.region}`,
    );
  }
  console.log("");
  return parsed;
}

console.log("SPIKE astro-events — NASA GSFC eclipse canon + IAU MDC showers\n");

const solar = await eclipseTable(
  "https://eclipse.gsfc.nasa.gov/SEdecade/SEdecade2021.html",
  "A. Solar eclipses, 2021-2030 (NASA GSFC, Espenak)",
  "eclipse magnitude",
);
const lunar = await eclipseTable(
  "https://eclipse.gsfc.nasa.gov/LEdecade/LEdecade2021.html",
  "B. Lunar eclipses, 2021-2030 (NASA GSFC, Espenak)",
  "umbral magnitude",
);

// ---------- C. IAU MDC established showers ----------
// Solar longitude -> calendar date, via the NOAA apparent-longitude series.
const julianDay = (y, m, d) => {
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return (
    Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5
  );
};
function apparentSolarLongitude(jd) {
  const t = (jd - 2451545.0) / 36525.0;
  const L0 = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360;
  const M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  const C =
    Math.sin(M * RAD) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * M * RAD) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * M * RAD) * 0.000289;
  const omega = 125.04 - 1934.136 * t;
  const lam = L0 + C - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  return ((lam % 360) + 360) % 360;
}
function dateForSolarLongitude(losTarget, year) {
  const start = julianDay(year, 1, 1);
  let best = null;
  for (let i = 0; i < 366 * 24; i++) {
    const jd = start + i / 24;
    let diff = apparentSolarLongitude(jd) - losTarget;
    diff = ((((diff + 180) % 360) + 360) % 360) - 180;
    if (best === null || Math.abs(diff) < Math.abs(best.diff)) best = { jd, diff };
  }
  const d = new Date((best.jd - 2440587.5) * 86400000);
  return d.toISOString().slice(0, 16).replace("T", " ") + " UT";
}

const mdcUrl = "https://www.ta3.sk/IAUC22DB/MDC2022/Etc/streamestablisheddata2026.txt";
const mdcRes = await fetch(mdcUrl, { headers: UA });
const mdc = await mdcRes.text();
const headerLine = mdc
  .split("\n")
  .find((l) => l.includes("shower name-designation"));
const dataLines = mdc.split("\n").filter((l) => l.startsWith('"'));

console.log("C. IAU Meteor Data Center — established showers");
console.log(`   GET ${mdcUrl}`);
console.log(`   HTTP ${mdcRes.status}, ${mdc.length} bytes, ${dataLines.length} catalogue records`);
console.log(
  `   last update line: ${mdc.split("\n").find((l) => l.includes("Last update"))?.replace(/^:/, "").trim()}`,
);
console.log(
  `   field names present: ${headerLine.replace(/^:\s*/, "").split(/\s{2,}/).slice(0, 12).join(" | ")} …`,
);

const cell = (line, i) => {
  const parts = line.split("|").map((p) => p.replace(/^"|"$/g, "").trim());
  return parts[i];
};
// Column order per the file's own header: LP, IAUNo, AdNo, Code, s, sub.date,
// name, activity, LoSb, LoSe, LoS, ...
const byCode = new Map();
for (const line of dataLines) {
  const code = cell(line, 3);
  const name = cell(line, 6);
  const activity = cell(line, 7);
  const los = Number(cell(line, 10));
  if (!code || !Number.isFinite(los)) continue;
  if (!byCode.has(code)) byCode.set(code, { code, name, activity, los: [] });
  byCode.get(code).los.push(los);
}
console.log(`   distinct shower codes in the catalogue: ${byCode.size}`);
console.log("");

const WANTED = ["QUA", "LYR", "ETA", "PER", "ORI", "LEO", "GEM", "URS"];
console.log(
  `   ${"code".padEnd(5)} ${"shower".padEnd(26)} ${"solutions".padEnd(10)} ${"LoS median".padEnd(11)} ${"spread".padEnd(9)} derived peak (${TARGET_YEAR})`,
);
for (const code of WANTED) {
  const s = byCode.get(code);
  if (!s) {
    console.log(`   ${code.padEnd(5)} NOT IN THE ESTABLISHED LIST`);
    continue;
  }
  const sorted = [...s.los].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const spread = sorted[sorted.length - 1] - sorted[0];
  console.log(
    `   ${code.padEnd(5)} ${s.name.trim().slice(0, 25).padEnd(26)} ${String(sorted.length).padEnd(10)} ${median.toFixed(2).padEnd(11)} ${spread.toFixed(2).padEnd(9)} ${dateForSolarLongitude(median, TARGET_YEAR)}`,
  );
}

console.log("");
console.log("D. What this settles for SS-09:");
console.log(
  `   - Eclipses: ${solar.length} solar + ${lunar.length} lunar events already published for 2021-2030,`,
);
console.log(
  "     with visibility regions. Known years ahead, so the fact is a CURATED",
);
console.log("     in-repo table refreshed yearly, not a per-request fetch.");
console.log(
  "   - Shower peaks: solar longitude from the IAU catalogue, date DERIVED per",
);
console.log(
  "     year by the same math as SS-01. The spread column is the honest part —",
);
console.log(
  "     the peak is a published range, and the rendered claim must carry it.",
);
