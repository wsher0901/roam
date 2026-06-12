// Spike: Open-Meteo historical (ERA5 reanalysis) -> climate normals (V1.S1.T2)
// Serves: WX-11 (climate normals by date-of-year), input to WX-12.
// Run: node scripts/spikes/weather-climatology.mjs
// Free tier for non-commercial, no key. Data CC-BY 4.0.

const LAT = 64.1466; // Reykjavik
const LON = -21.9426;
const YEARS = 10; // 2016-2025
const MONTH = "10"; // October normals as the test window

const daily = [
  "temperature_2m_max",
  "temperature_2m_min",
  "precipitation_sum",
  "wind_speed_10m_max",
  "sunshine_duration",
].join(",");

const url =
  `https://archive-api.open-meteo.com/v1/archive?latitude=${LAT}&longitude=${LON}` +
  `&start_date=2016-01-01&end_date=2025-12-31&daily=${daily}&timezone=auto`;

const res = await fetch(url);
if (!res.ok) {
  console.error(`HTTP ${res.status}`);
  process.exit(1);
}
const data = await res.json();
const t = data.daily.time;
console.log("daily keys returned:", Object.keys(data.daily).join(", "));
console.log("days of history returned:", t.length);

// Aggregate the test month across years -> normals
const idx = t
  .map((d, i) => (d.slice(5, 7) === MONTH ? i : -1))
  .filter((i) => i >= 0);
const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
const pick = (key) =>
  idx.map((i) => data.daily[key][i]).filter((v) => v != null);

const rainDays = pick("precipitation_sum").filter((v) => v >= 1).length / YEARS;
console.log(`\nOctober normals (Reykjavik, ${YEARS}y ERA5):`);
console.log(
  "  mean daily max temp:",
  mean(pick("temperature_2m_max")).toFixed(1),
  "degC",
);
console.log(
  "  mean daily min temp:",
  mean(pick("temperature_2m_min")).toFixed(1),
  "degC",
);
console.log("  rain days (>=1mm) per October:", rainDays.toFixed(1));
console.log(
  "  mean daily max wind:",
  mean(pick("wind_speed_10m_max")).toFixed(1),
  "km/h",
);
console.log(
  "  mean sunshine h/day:",
  (mean(pick("sunshine_duration")) / 3600).toFixed(1),
);
