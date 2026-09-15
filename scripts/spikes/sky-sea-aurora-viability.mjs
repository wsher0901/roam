// Spike: aurora-viability — computed from IGRF + darkness (V1.S1.T3)
// Serves: SS-06 (aurora viability — latitude x season).
// Run: node scripts/spikes/sky-sea-aurora-viability.mjs
//
// SS-06 is the merit GATE that answers "Iceland in June = midnight sun, no
// aurora" before any forecast is fetched. It is computed, not fetched, from
// two inputs and one curated parameter:
//
//   1. GEOMAGNETIC LATITUDE, from the IAGA/NOAA International Geomagnetic
//      Reference Field (IGRF-14) first-order Gauss coefficients. The
//      coefficients are FETCHED here rather than typed, and the centred
//      dipole pole is derived from them — so the number has a source.
//   2. ASTRONOMICAL DARKNESS, from the same NOAA solar equations the
//      astro-ephemeris spike cross-checked against USNO. A place with no
//      astronomical night cannot show aurora however active the sun is.
//   3. The auroral oval's equatorward boundary as a function of Kp — a
//      CURATED parameter (in-repo constant), not a fetched fact. It is
//      validated below against SWPC's own OVATION nowcast.

const RAD = Math.PI / 180;
const UA = { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" };

// ---------- 1. IGRF-14 coefficients, fetched from IAGA/NOAA ----------
const IGRF_URL = "https://www.ngdc.noaa.gov/IAGA/vmod/coeffs/igrf14coeffs.txt";
const raw = await fetch(IGRF_URL, { headers: UA });
if (!raw.ok) {
  console.error(`IGRF HTTP ${raw.status}`);
  process.exit(1);
}
const text = await raw.text();
const rows = text.split("\n").filter((l) => /^[gh]\s+1\s+[01]\s/.test(l));
const header = text
  .split("\n")
  .find((l) => l.trim().startsWith("g/h n m"))
  .trim()
  .split(/\s+/);
const epochs = header.slice(3, -1).map(Number); // last column is the SV
const lastEpoch = epochs[epochs.length - 1];

const coeff = {};
for (const line of rows) {
  const f = line.trim().split(/\s+/);
  const key = `${f[0]}${f[1]}${f[2]}`; // g10 / g11 / h11
  const values = f.slice(3);
  coeff[key] = {
    at2025: Number(values[values.length - 2]),
    sv: Number(values[values.length - 1]),
  };
}

const TARGET_YEAR = 2026;
const dt = TARGET_YEAR - lastEpoch;
const g10 = coeff.g10.at2025 + coeff.g10.sv * dt;
const g11 = coeff.g11.at2025 + coeff.g11.sv * dt;
const h11 = coeff.h11.at2025 + coeff.h11.sv * dt;

const B0 = Math.sqrt(g10 ** 2 + g11 ** 2 + h11 ** 2);
const poleLat = 90 - Math.acos(-g10 / B0) / RAD;
let poleLon = Math.atan2(h11, g11) / RAD + 180;
if (poleLon > 180) poleLon -= 360;

console.log("SPIKE aurora-viability — computed (rung 3) from IGRF + darkness\n");
console.log("A. Geomagnetic pole, derived from fetched IGRF-14 coefficients");
console.log(`   source: ${IGRF_URL}`);
console.log(`   epochs in file: ${epochs.length} (${epochs[0]} … ${lastEpoch})`);
console.log(
  `   g1_0 ${coeff.g10.at2025} (SV ${coeff.g10.sv}) · g1_1 ${coeff.g11.at2025} (SV ${coeff.g11.sv}) · h1_1 ${coeff.h11.at2025} (SV ${coeff.h11.sv})  [nT, epoch ${lastEpoch}]`,
);
console.log(
  `   extrapolated to ${TARGET_YEAR}.0: g1_0 ${g10.toFixed(1)} · g1_1 ${g11.toFixed(1)} · h1_1 ${h11.toFixed(1)}`,
);
console.log(
  `   => centred-dipole NORTH geomagnetic pole: ${poleLat.toFixed(2)}°N, ${Math.abs(poleLon).toFixed(2)}°${poleLon < 0 ? "W" : "E"}   (dipole moment B0 = ${B0.toFixed(0)} nT)`,
);
console.log("");

const geomagLat = (lat, lon) =>
  Math.asin(
    Math.sin(lat * RAD) * Math.sin(poleLat * RAD) +
      Math.cos(lat * RAD) * Math.cos(poleLat * RAD) * Math.cos((lon - poleLon) * RAD),
  ) / RAD;

// ---------- 2. astronomical darkness (NOAA solar equations, compact) ----------
// The full version, cross-checked against USNO to <=3 min, is in
// scripts/spikes/sky-sea-astro-ephemeris.mjs; this is the declination-only
// slice SS-06 needs.
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
function solarDecl(jd) {
  const t = (jd - 2451545.0) / 36525.0;
  const L0 = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360;
  const M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  const C =
    Math.sin(M * RAD) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * M * RAD) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * M * RAD) * 0.000289;
  const omega = 125.04 - 1934.136 * t;
  const appLong = L0 + C - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  const seconds = 21.448 - t * (46.815 + t * (0.00059 - t * 0.001813));
  const obliq = 23 + (26 + seconds / 60) / 60 + 0.00256 * Math.cos(omega * RAD);
  return Math.asin(Math.sin(obliq * RAD) * Math.sin(appLong * RAD)) / RAD;
}
// Hours with the sun below -18 degrees.
function astroNightHours(lat, dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const decl = solarDecl(julianDay(y, m, d));
  const cosH =
    (Math.cos(108 * RAD) - Math.sin(lat * RAD) * Math.sin(decl * RAD)) /
    (Math.cos(lat * RAD) * Math.cos(decl * RAD));
  if (cosH > 1) return 24; // sun never reaches -18 above the horizon: dark all day
  if (cosH < -1) return 0; // sun never drops below -18: no astronomical night
  const ha = Math.acos(cosH) / RAD;
  return 24 - (2 * ha) / 15;
}

// ---------- 3. the curated oval parameter ----------
// Equatorward boundary of the auroral oval in geomagnetic latitude, as a
// function of Kp. CURATED IN-REPO CONSTANT — the shape (about 2 degrees
// equatorward per Kp step from roughly 66-67 deg at Kp 0) is the standard
// rule of thumb; it is validated against OVATION below, never asserted alone.
const ovalBoundary = (kp) => 66.5 - 2 * kp;

// ---------- 4. verdicts ----------
const SITES = [
  ["Tromso, NO", 69.65, 18.96],
  ["Fairbanks, AK", 64.84, -147.72],
  ["Reykjavik, IS", 64.15, -21.94],
  ["Edinburgh, UK", 55.95, -3.19],
  ["Kyoto, JP", 35.01, 135.77],
  ["Ushuaia, AR", -54.8, -68.3],
];
const DATES = ["2026-06-21", "2026-09-21", "2026-12-21"];

console.log("B. Viability verdict = geomagnetic latitude x astronomical darkness");
console.log(
  `   oval boundary used: Kp 0 -> ${ovalBoundary(0).toFixed(1)}° · Kp 3 -> ${ovalBoundary(3).toFixed(1)}° · Kp 6 -> ${ovalBoundary(6).toFixed(1)}° geomagnetic`,
);
console.log("");
console.log(
  `   ${"site".padEnd(16)} ${"geomag lat".padEnd(11)} ${DATES.map((d) => d.slice(5).padEnd(25)).join("")}`,
);
for (const [name, lat, lon] of SITES) {
  const gm = geomagLat(lat, lon);
  const cells = DATES.map((d) => {
    const night = astroNightHours(lat, d);
    const needKp = Math.max(0, (66.5 - Math.abs(gm)) / 2);
    let verdict;
    if (night < 0.5) verdict = "NO: no astro dark";
    else if (needKp > 9) verdict = "NO: equatorward";
    else if (needKp === 0) verdict = "yes, any Kp";
    else verdict = `yes @Kp>=${needKp.toFixed(1)}`;
    return `${verdict} (${night.toFixed(1)}h)`.padEnd(25);
  });
  console.log(`   ${name.padEnd(16)} ${(gm.toFixed(2) + "°").padEnd(11)} ${cells.join("")}`);
}
console.log("");

// ---------- 5. validation against SWPC OVATION ----------
const ov = await (
  await fetch("https://services.swpc.noaa.gov/json/ovation_aurora_latest.json", {
    headers: UA,
  })
).json();
const grid = new Map();
for (const [lo, la, p] of ov.coordinates) grid.set(`${lo}|${la}`, p);
const probeAt = (lat, lon) =>
  grid.get(`${((Math.round(lon) % 360) + 360) % 360}|${Math.round(lat)}`);

console.log("C. Validation against SWPC OVATION — and what it can and cannot settle");
console.log(`   OVATION forecast time ${ov["Forecast Time"]}`);
const utHour =
  Number(ov["Forecast Time"].slice(11, 13)) +
  Number(ov["Forecast Time"].slice(14, 16)) / 60;
// Local solar time as a PROXY for magnetic local time — good enough to show
// which sites are on the nightside at this instant, and labelled as a proxy.
const localSolar = (lon) => (((utHour + lon / 15) % 24) + 24) % 24;
const OVAL_AT_KP3 = ovalBoundary(3);
const ranked = SITES.map(([name, lat, lon]) => ({
  name,
  gm: Math.abs(geomagLat(lat, lon)),
  ov: probeAt(lat, lon),
  lst: localSolar(lon),
})).sort((a, b) => b.gm - a.gm);
console.log(
  `   ${"site".padEnd(16)} |geomag lat|  inside oval@Kp3  local solar hr  OVATION %`,
);
for (const r of ranked) {
  console.log(
    `   ${r.name.padEnd(16)} ${r.gm.toFixed(2).padStart(10)}  ${(r.gm >= OVAL_AT_KP3 ? "yes" : "no").padStart(14)}  ${r.lst.toFixed(1).padStart(13)}  ${String(r.ov).padStart(8)}`,
  );
}
const nightside = ranked.filter((r) => r.lst >= 18 || r.lst < 6);
const insideNight = nightside.filter((r) => r.gm >= OVAL_AT_KP3);
const outsideNight = nightside.filter((r) => r.gm < OVAL_AT_KP3);
console.log("");
console.log(
  `   Nightside sites at this instant (local solar hour >=18 or <6): ${nightside.map((r) => r.name).join(", ") || "none"}`,
);
if (insideNight.length && outsideNight.length) {
  const minIn = Math.min(...insideNight.map((r) => r.ov));
  const maxOut = Math.max(...outsideNight.map((r) => r.ov));
  console.log(
    `   lowest OVATION % among nightside sites INSIDE the oval: ${minIn}; highest among nightside sites OUTSIDE it: ${maxOut} -> gate ${minIn > maxOut ? "HOLDS" : "FAILS"} on this sample.`,
  );
} else {
  console.log(
    "   not enough nightside sites on both sides of the boundary to test the gate at this instant.",
  );
}
console.log("");
console.log("   WHAT THIS DOES NOT SETTLE, and the reason it cannot:");
console.log(
  "   OVATION is magnetic-local-time dependent — the oval hugs the midnight",
);
console.log(
  "   meridian — so a dayside site inside the oval by latitude still reads low.",
);
console.log(
  "   Fairbanks above is exactly that case. OVATION therefore validates the",
);
console.log(
  "   GATE'S SHAPE and never a season-scale verdict; SS-06 stays computed, and",
);
console.log("   SS-05's forecast is what answers a given night.");
