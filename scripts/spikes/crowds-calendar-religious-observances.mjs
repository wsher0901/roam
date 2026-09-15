// Spike: religious-observances slot vs FACTS.md F-CC-03 (V1.S1.T6)
// Serves: CC-03. Run: node scripts/spikes/crowds-calendar-religious-observances.mjs
// CC-03 splits in two and this spike proves the split:
//   DATES are deterministic — computed (rung 3) or converted by a
//   calendar service — and are what this script returns.
//   EFFECTS (what shuts, when dining changes) are NOT in any of these
//   payloads; they are curated. The absence below is the evidence.

const YEAR = 2026;

// --- Rung 3: Easter, computed here, no network at all ---------------
// Meeus/Jones/Butcher, Gregorian.
function gregorianEaster(y) {
  const a = y % 19,
    b = Math.floor(y / 100),
    c = y % 100;
  const d = Math.floor(b / 4),
    e = b % 4,
    f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3),
    h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4),
    k = c % 4,
    l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(Date.UTC(y, month - 1, day));
}
// Meeus, Julian Easter -> Gregorian date (Orthodox).
function julianEaster(y) {
  const a = y % 4,
    b = y % 7,
    c = y % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = Math.floor((d + e + 114) / 31);
  const day = ((d + e + 114) % 31) + 1;
  // Julian -> Gregorian offset for 1900..2099 is 13 days.
  const jd = new Date(Date.UTC(y, month - 1, day));
  jd.setUTCDate(jd.getUTCDate() + 13);
  return jd;
}
const iso = (d) => d.toISOString().slice(0, 10);
const ge = gregorianEaster(YEAR);
const je = julianEaster(YEAR);
console.log("=== Rung 3: computed, zero network ===");
console.log("  Western Easter Sunday:", iso(ge));
console.log("  Orthodox Easter Sunday:", iso(je));
const ash = new Date(ge);
ash.setUTCDate(ash.getUTCDate() - 46);
const goodFri = new Date(ge);
goodFri.setUTCDate(goodFri.getUTCDate() - 2);
console.log("  Ash Wednesday:", iso(ash), "| Good Friday:", iso(goodFri));
console.log(
  "  (Holy Week window:",
  iso(new Date(ge.getTime() - 6 * 864e5)),
  "->",
  iso(ge) + ")",
);

// --- Hebcal: Jewish calendar --------------------------------------
console.log("\n=== Hebcal (www.hebcal.com, free, keyless) ===");
const hb = await (
  await fetch(
    `https://www.hebcal.com/hebcal?v=1&cfg=json&maj=on&min=off&mod=off` +
      `&nx=off&year=${YEAR}&month=x&ss=off&mf=off&c=off&s=off`,
  )
).json();
console.log("  version:", hb.version, "| items:", hb.items.length);
console.log("  item keys:", Object.keys(hb.items[0]).join(", "));
for (const it of hb.items.slice(0, 6)) {
  console.log(`   ${it.date}  ${it.title}  (${it.hdate})`);
}
// Test the KEYS, not the prose: a memo reading "continues for 25 hours"
// is a sentence about a fast, not a structured effect the engine can read.
const EFFECT_KEYS = [
  "effects",
  "closures",
  "business_impact",
  "opening_hours",
  "shutdown_window",
];
const hbKeys = new Set(hb.items.flatMap((i) => Object.keys(i)));
console.log(
  "  structured EFFECT fields in payload?",
  EFFECT_KEYS.filter((k) => hbKeys.has(k)).join(", ") ||
    "NONE — dates, names and prose memos only",
);

// --- Aladhan: Hijri calendar --------------------------------------
console.log("\n=== Aladhan (api.aladhan.com, free, keyless) ===");
const days = [];
for (const m of [2, 3]) {
  const r = await (
    await fetch(`https://api.aladhan.com/v1/gToHCalendar/${m}/${YEAR}`)
  ).json();
  days.push(...r.data);
}
const ramadan = days.filter((d) => d.hijri.month.number === 9);
console.log("  method:", days[0].hijri.method);
console.log(
  `  Ramadan ${ramadan[0]?.hijri.year} in ${YEAR}:`,
  ramadan[0]?.gregorian.date,
  "->",
  ramadan[ramadan.length - 1]?.gregorian.date,
  `(${ramadan.length} days observed in the probed window)`,
);
console.log(
  "  CAVEAT the payload itself carries: the calendar is calculated" +
    " (method above); local observance can shift +/- 1 day on moon sighting.",
);
const alKeys = new Set([
  ...Object.keys(days[0]),
  ...Object.keys(days[0].hijri),
]);
console.log(
  "  structured EFFECT fields in payload?",
  EFFECT_KEYS.filter((k) => alKeys.has(k)).join(", ") ||
    "NONE — date conversion and holiday names only",
);
console.log(
  "\nVERDICT: no probed source carries EFFECTS. Dates are rung 3;" +
    " effects are curated, or retrieved at rung 5a, and never inferred" +
    " from a date.",
);
