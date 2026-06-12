// Spike: Open-Meteo forecast API vs FACTS.md Dictionaries (V1.S1.T2)
// Serves: WX-01..08, WX-10 (snow), WX-14. Run: node scripts/spikes/weather-forecast.mjs
// Free tier, no key. Data CC-BY 4.0 (attribution required).

const LAT = 64.1466; // Reykjavik — mid/high latitude, snow-plausible
const LON = -21.9426;

const hourly = [
  "temperature_2m", // WX-01
  "apparent_temperature", // WX-01 feels-like
  "precipitation_probability", // WX-02
  "precipitation", // WX-03 amount
  "rain",
  "snowfall", // WX-03 type / WX-10
  "snow_depth", // WX-10
  "weather_code", // WX-14 (WMO code; also rain/snow/sleet form)
  "wind_speed_10m", // WX-04
  "wind_gusts_10m", // WX-04
  "cloud_cover", // WX-05
  "visibility", // WX-06
  "relative_humidity_2m", // WX-07
  "uv_index", // WX-08
].join(",");

const url =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  `&hourly=${hourly}&daily=uv_index_max&forecast_days=7&timezone=auto`;

const res = await fetch(url);
if (!res.ok) {
  console.error(`HTTP ${res.status}`);
  process.exit(1);
}
const data = await res.json();

const expected = hourly.split(",");
const got = Object.keys(data.hourly ?? {});
console.log("location:", data.latitude, data.longitude, data.timezone);
console.log("hourly keys returned:", got.join(", "));
const missing = expected.filter((k) => !got.includes(k));
console.log(
  "missing vs Dictionary:",
  missing.length ? missing.join(", ") : "none",
);
console.log("daily keys returned:", Object.keys(data.daily ?? {}).join(", "));

const i = 12; // sample mid-window hour
console.log("\nsample @", data.hourly.time[i]);
for (const k of expected) {
  console.log(`  ${k}: ${data.hourly[k]?.[i]} ${data.hourly_units?.[k] ?? ""}`);
}
console.log("forecast horizon (days available):", data.hourly.time.length / 24);
