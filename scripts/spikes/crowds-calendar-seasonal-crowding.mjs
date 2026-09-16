// Spike: seasonal-crowding slot vs FACTS.md F-CC-05 (V1.S1.T6)
// Serves: CC-05. Run: node scripts/spikes/crowds-calendar-seasonal-crowding.mjs
// CC-05 is "curated + derived". This spike asks whether a MEASURED input
// exists to derive from, instead of curating "Venice in August" by hand:
// Eurostat tour_occ_nim — nights spent at tourist accommodation, monthly.
// It also measures the coverage boundary, which is the whole question.

const BASE =
  "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/tour_occ_nim";
const PROBE = ["HR", "IT", "ES", "IS", "NO", "TR", "JP", "US", "TH"];

async function nights(geo) {
  const url =
    `${BASE}?format=JSON&geo=${geo}&unit=NR&c_resid=TOTAL` +
    `&nace_r2=I551-I553&lang=EN&lastTimePeriod=24`;
  const res = await fetch(url);
  if (!res.ok) return { __status: res.status, __body: await res.text() };
  return res.json();
}

// peak / shoulder / off from the monthly series itself, not from an opinion:
// peak    = month mean >= 66% of the year's best month
// shoulder= 33%..66%
// off     = < 33%
function classify(byMonth) {
  const max = Math.max(...Object.values(byMonth));
  const out = {};
  for (const [m, v] of Object.entries(byMonth)) {
    const r = v / max;
    out[m] = r >= 0.66 ? "peak" : r >= 0.33 ? "shoulder" : "off";
  }
  return out;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log("=== Eurostat tour_occ_nim (free, keyless) ===");
let covered = 0;
for (const geo of PROBE) {
  const d = await nights(geo);
  if (d.__status) {
    console.log(`  ${geo}: HTTP ${d.__status} — NOT COVERED`);
    continue;
  }
  const times = d.dimension.time.category.index; // {"2024M10":0,...}
  const sums = {};
  const counts = {};
  for (const [label, idx] of Object.entries(times)) {
    const v = d.value[String(idx)];
    if (v == null) continue;
    const m = Number(label.slice(-2));
    sums[m] = (sums[m] ?? 0) + v;
    counts[m] = (counts[m] ?? 0) + 1;
  }
  const mean = {};
  for (const m of Object.keys(sums)) mean[m] = sums[m] / counts[m];
  if (!Object.keys(mean).length) {
    console.log(`  ${geo}: 200 but EMPTY series — listed, no data`);
    continue;
  }
  covered++;
  const cls = classify(mean);
  const render = Object.keys(mean)
    .sort((a, b) => a - b)
    .map((m) => `${MONTHS[m - 1]}:${cls[m][0]}`)
    .join(" ");
  const best = Object.entries(mean).sort((a, b) => b[1] - a[1])[0];
  const worst = Object.entries(mean).sort((a, b) => a[1] - b[1])[0];
  console.log(
    `  ${geo}: ${render}\n       peak ${MONTHS[best[0] - 1]} ` +
      `${(best[1] / 1e6).toFixed(1)}M nights vs ${MONTHS[worst[0] - 1]} ` +
      `${(worst[1] / 1e6).toFixed(2)}M — ratio ${(best[1] / worst[1]).toFixed(1)}x`,
  );
  console.log(`       updated by ESTAT: ${d.updated}`);
}
console.log(
  `\nCOVERAGE: ${covered}/${PROBE.length} probed geographies answered.` +
    " Eurostat is EU + EFTA + candidate countries BY CONSTRUCTION — it is a" +
    " rung-2 REGIONAL source, and outside Europe this slot has no measured" +
    " input at all from here.",
);
