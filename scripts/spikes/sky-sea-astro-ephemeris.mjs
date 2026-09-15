// Spike: astro-ephemeris — sun/moon geometry is MATH, not a feed (V1.S1.T3)
// Serves: SS-01 (sun ephemeris), SS-02 (golden/blue hour), SS-03 (moon ephemeris).
// Run: node scripts/spikes/sky-sea-astro-ephemeris.mjs
//
// The claim this spike tests: rung 3 (computed from physics/math) answers
// SS-01..03 globally and exactly, so no vendor API is needed. It computes the
// values here with the published NOAA solar equations and a Meeus low-precision
// lunar model, then CROSS-CHECKS them against the US Naval Observatory API
// (aa.usno.navy.mil) — a government body, and the authoritative oracle for
// exactly these quantities.
//
// USNO oneday returns civil twilight but NOT astronomical, so the
// astronomical-twilight column is math-only and is reported as such.

const RAD = Math.PI / 180;

const SITES = [
  { name: "Reykjavik, IS", lat: 64.1466, lon: -21.9426, date: "2026-10-01" },
  { name: "Kyoto, JP", lat: 35.0116, lon: 135.7681, date: "2026-04-05" },
  { name: "Sydney, AU", lat: -33.8688, lon: 151.2093, date: "2026-12-21" },
];

// ---------- NOAA solar equations (NOAA Solar Calculator, US-Gov public domain) ----------
const julianDay = (y, m, d) => {
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return (
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    d +
    B -
    1524.5
  );
};

function solarGeometry(jd) {
  const t = (jd - 2451545.0) / 36525.0; // julian century
  const L0 = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360;
  const M = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  const e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  const C =
    Math.sin(M * RAD) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(2 * M * RAD) * (0.019993 - 0.000101 * t) +
    Math.sin(3 * M * RAD) * 0.000289;
  const trueLong = L0 + C;
  const omega = 125.04 - 1934.136 * t;
  const appLong = trueLong - 0.00569 - 0.00478 * Math.sin(omega * RAD);
  const seconds = 21.448 - t * (46.815 + t * (0.00059 - t * 0.001813));
  const e0 = 23 + (26 + seconds / 60) / 60;
  const obliq = e0 + 0.00256 * Math.cos(omega * RAD);
  const decl = Math.asin(Math.sin(obliq * RAD) * Math.sin(appLong * RAD)) / RAD;
  const y = Math.tan((obliq / 2) * RAD) ** 2;
  const eqTime =
    (4 *
      (y * Math.sin(2 * L0 * RAD) -
        2 * e * Math.sin(M * RAD) +
        4 * e * y * Math.sin(M * RAD) * Math.cos(2 * L0 * RAD) -
        0.5 * y * y * Math.sin(4 * L0 * RAD) -
        1.25 * e * e * Math.sin(2 * M * RAD))) /
    RAD;
  return { decl, eqTime };
}

// Hour angle (deg) for a given solar zenith; null when the event never happens.
function hourAngle(latDeg, declDeg, zenithDeg) {
  const cosH =
    (Math.cos(zenithDeg * RAD) -
      Math.sin(latDeg * RAD) * Math.sin(declDeg * RAD)) /
    (Math.cos(latDeg * RAD) * Math.cos(declDeg * RAD));
  if (cosH > 1 || cosH < -1) return null; // never rises / never sets
  return Math.acos(cosH) / RAD;
}

const hhmm = (minutesUTC) => {
  // Round to whole minutes FIRST, then split — rounding after the split
  // prints "18:60" at the boundary.
  const m = ((Math.round(minutesUTC) % 1440) + 1440) % 1440;
  const h = Math.floor(m / 60);
  return `${String(h).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
};

// All times returned in MINUTES AFTER 00:00 UTC.
function sunEvents(lat, lon, y, mo, d) {
  const jd = julianDay(y, mo, d);
  const { decl, eqTime } = solarGeometry(jd);
  const noon = 720 - 4 * lon - eqTime; // solar noon, minutes UTC
  const ev = (zenith) => {
    const ha = hourAngle(lat, decl, zenith);
    if (ha === null) return [null, null];
    return [noon - 4 * ha, noon + 4 * ha];
  };
  const [rise, set] = ev(90.833); // refraction + solar radius
  const [civA, civB] = ev(96);
  const [astA, astB] = ev(108);
  return {
    decl,
    noon,
    rise,
    set,
    civilBegin: civA,
    civilEnd: civB,
    astroBegin: astA,
    astroEnd: astB,
    dayLengthMin: rise === null ? null : set - rise,
  };
}

// ---------- Moon: Meeus low-precision phase + illuminated fraction ----------
function moonIllumination(jd) {
  const t = (jd - 2451545.0) / 36525.0;
  const D = 297.8501921 + 445267.1114034 * t - 0.0018819 * t * t;
  const M = 357.5291092 + 35999.0502909 * t - 0.0001536 * t * t;
  const Mp = 134.9633964 + 477198.8675055 * t + 0.0087414 * t * t;
  // Phase angle (Meeus, Astronomical Algorithms ch. 48)
  const i =
    180 -
    D -
    6.289 * Math.sin(Mp * RAD) +
    2.1 * Math.sin(M * RAD) -
    1.274 * Math.sin((2 * D - Mp) * RAD) -
    0.658 * Math.sin(2 * D * RAD) -
    0.214 * Math.sin(2 * Mp * RAD) -
    0.11 * Math.sin(D * RAD);
  const fraction = (1 + Math.cos(i * RAD)) / 2;
  const elongation = ((D % 360) + 360) % 360;
  return { fraction, waxing: elongation < 180, elongation };
}

function phaseName(k, waxing) {
  if (k < 0.02) return "New Moon";
  if (k > 0.98) return "Full Moon";
  if (Math.abs(k - 0.5) < 0.06) return waxing ? "First Quarter" : "Last Quarter";
  if (k < 0.5) return waxing ? "Waxing Crescent" : "Waning Crescent";
  return waxing ? "Waxing Gibbous" : "Waning Gibbous";
}

// ---------- USNO oracle ----------
async function usno(lat, lon, date) {
  const url = `https://aa.usno.navy.mil/api/rstt/oneday?date=${date}&coords=${lat},${lon}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" },
  });
  if (!res.ok) throw new Error(`USNO HTTP ${res.status}`);
  return (await res.json()).properties.data;
}

const toMin = (s) => {
  const [h, m] = s.split(":").map(Number);
  return h * 60 + m;
};

// ---------- Run ----------
console.log(
  "SPIKE astro-ephemeris — computed (rung 3) cross-checked against USNO",
);
console.log("ALL TIMES UTC (USNO queried at tz=0 so the columns compare).\n");
let worstDelta = 0;
const seenKeys = new Set();

for (const s of SITES) {
  const [y, mo, d] = s.date.split("-").map(Number);
  const sun = sunEvents(s.lat, s.lon, y, mo, d);
  const moon = moonIllumination(julianDay(y, mo, d) + 0.5); // midday UT
  const ref = await usno(s.lat, s.lon, s.date);
  Object.keys(ref).forEach((k) => seenKeys.add(k));

  const refSun = Object.fromEntries(ref.sundata.map((r) => [r.phen, r.time]));
  const rows = [
    ["Rise", sun.rise, refSun["Rise"]],
    ["Set", sun.set, refSun["Set"]],
    ["Upper Transit", sun.noon, refSun["Upper Transit"]],
    ["Begin Civil Twilight", sun.civilBegin, refSun["Begin Civil Twilight"]],
    ["End Civil Twilight", sun.civilEnd, refSun["End Civil Twilight"]],
  ];

  console.log(`${s.name}  ${s.date}  (lat ${s.lat}, lon ${s.lon}, USNO tz=${ref.tz})`);
  console.log(`  ${"event".padEnd(22)} ${"computed".padEnd(9)} USNO     delta`);
  for (const [label, mine, theirs] of rows) {
    if (mine === null) {
      console.log(`  ${label.padEnd(22)} ${"—".padEnd(9)} ${theirs ?? "—"}`);
      continue;
    }
    const mineStr = hhmm(mine);
    if (!theirs) {
      console.log(`  ${label.padEnd(22)} ${mineStr.padEnd(9)} (not returned)`);
      continue;
    }
    let delta = toMin(mineStr) - toMin(theirs);
    if (delta > 720) delta -= 1440;
    if (delta < -720) delta += 1440;
    worstDelta = Math.max(worstDelta, Math.abs(delta));
    console.log(
      `  ${label.padEnd(22)} ${mineStr.padEnd(9)} ${theirs.padEnd(8)} ${delta >= 0 ? "+" : ""}${delta} min`,
    );
  }
  console.log(
    `  ${"Astro twilight (math)".padEnd(22)} ${
      sun.astroBegin === null
        ? "none — no astronomical darkness"
        : `${hhmm(sun.astroBegin)}-${hhmm(sun.astroEnd)}`
    }   [USNO oneday does not return it]`,
  );
  if (sun.rise !== null) {
    console.log(
      `  ${"Golden hour (SS-02)".padEnd(22)} ${hhmm(sun.set - 45)}-${hhmm(sun.set + 15)}   derived from Set`,
    );
    console.log(
      `  ${"Day length (SS-01)".padEnd(22)} ${(sun.dayLengthMin / 60).toFixed(2)} h`,
    );
  }
  console.log(
    `  ${"Moon illum (SS-03)".padEnd(22)} ${(moon.fraction * 100).toFixed(0)}%       USNO ${ref.fracillum}   phase "${phaseName(
      moon.fraction,
      moon.waxing,
    )}" vs USNO "${ref.curphase}"`,
  );
  console.log("");
}

console.log("USNO payload keys confirmed:", [...seenKeys].sort().join(", "));
console.log("worst sun-event delta vs USNO across all sites:", worstDelta, "min");
