// Spike: NWS api.weather.gov active alerts (V1.S1.T2)
// Serves: WX-09 (severe weather alerts) — US rung-2 source; global gaps
// labeled per the D-010 ladder. Run: node scripts/spikes/weather-alerts.mjs
// Free, public domain (US Gov). User-Agent header mandatory.

const HEADERS = {
  "User-Agent": "(roam spike script, github.com/wsher0901/roam)",
  Accept: "application/geo+json",
};

// Try a point first; fall back to a whole state so the spike always
// has at least one alert to confirm payload keys against.
const point = "25.7617,-80.1918"; // Miami
let res = await fetch(`https://api.weather.gov/alerts/active?point=${point}`, {
  headers: HEADERS,
});
let data = await res.json();
let scope = `point ${point}`;
if (!data.features?.length) {
  res = await fetch("https://api.weather.gov/alerts/active?area=FL", {
    headers: HEADERS,
  });
  data = await res.json();
  scope = "area FL";
}
if (!res.ok) {
  console.error(`HTTP ${res.status}`);
  process.exit(1);
}

console.log(`scope: ${scope}; active alerts: ${data.features?.length ?? 0}`);
const a = data.features?.[0]?.properties;
if (a) {
  console.log("first alert payload keys:", Object.keys(a).join(", "));
  console.log("\nsample:");
  for (const k of [
    "event",
    "severity",
    "urgency",
    "onset",
    "expires",
    "areaDesc",
  ]) {
    console.log(`  ${k}: ${String(a[k]).slice(0, 80)}`);
  }
} else {
  console.log(
    "no active alerts anywhere in fallback scope (rare) — rerun later",
  );
}
