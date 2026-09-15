// Spike: seasonal closures & operating seasons (V1.S1.T4, slot seasonal-closures)
// Serves: FE-05. Run: node scripts/spikes/feasibility-seasonal-closures.mjs
// "Closed Nov-Apr" is expressible in OSM's opening_hours syntax as a month
// range, and mountain passes carry access:conditional. This spike asks how
// often either is actually PRESENT where seasonality decides the trip.
import { overpass, cover } from "./_overpass.mjs";

// Iceland — the country where seasonal operation genuinely gates a plan
// (F-roads, highland huts, seasonal attractions).
const BBOX = "63.30,-24.60,66.60,-13.50";
const q = `[out:json][timeout:180][bbox:${BBOX}];(
nwr["tourism"~"^(attraction|museum|information|alpine_hut|wilderness_hut)$"];
way["highway"]["access:conditional"];
way["highway"]["seasonal"];
);out tags center;`;

const els = (await overpass(q)).elements ?? [];
const MONTHS = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/;
console.log(`Iceland: ${els.length} features\n`);

console.log("=== FE-05 signal availability");
const withOH = els.filter((e) => e.tags?.opening_hours);
cover(els, "opening_hours present", (e) => e.tags?.opening_hours);
cover(els, "  ...with month range", (e) => MONTHS.test(e.tags?.opening_hours ?? ""));
cover(els, "access:conditional", (e) => e.tags?.["access:conditional"]);
cover(els, "seasonal=*", (e) => e.tags?.seasonal);

console.log("\n=== real month-range values found (the fact, verbatim from OSM)");
const seasonal = els.filter((e) => MONTHS.test(e.tags?.opening_hours ?? ""));
for (const e of seasonal.slice(0, 12)) {
  console.log(`  ${(e.tags.name ?? "(unnamed)").slice(0, 34).padEnd(36)} ${e.tags.opening_hours}`);
}
console.log("\n=== access:conditional values (the pass-closure fact)");
const cond = els.filter((e) => e.tags?.["access:conditional"]);
for (const e of cond.slice(0, 10)) {
  console.log(`  ${(e.tags.name ?? e.tags.ref ?? "(unnamed way)").slice(0, 34).padEnd(36)} ${e.tags["access:conditional"]}`);
}
console.log(`\n  month-range features: ${seasonal.length} / ${withOH.length} tagged / ${els.length} total`);
console.log("  => the signal EXISTS and is machine-readable where tagged, but the");
console.log("     denominator is the story: most seasonal operators are untagged,");
console.log("     so this slot leans on retrieval (operator + park authority) at 5a.");
