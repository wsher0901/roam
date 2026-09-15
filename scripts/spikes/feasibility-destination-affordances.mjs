// Spike: destination<->activity affordances (V1.S1.T4, slot destination-affordances)
// Serves: FE-02. Run: node scripts/spikes/feasibility-destination-affordances.mjs
//
// FE-02 is "what is this place known for", across the 15 activity types. No API
// publishes that. What OSM CAN give is a COUNT of supporting infrastructure per
// type, which answers "does this place SUPPORT x" - a weaker and honest claim.
// This spike measures whether the counts discriminate between destinations at
// all, because a signal that fires everywhere is not a signal.
//
// One small query per (destination x type). The combined-count form was tried
// first and repeatedly timed out on dense cities: eight sub-queries plus
// `out count` over central Rome is more than the public instances will serve.
import { overpass, sleep } from "./_overpass.mjs";

const DESTS = [
  ["Reykjavik", "64.10,-21.98,64.17,-21.78"],
  ["Rome", "41.87,12.44,41.93,12.53"],
  ["Chamonix", "45.88,6.82,45.96,6.93"],
];

// The tag families that stand in for each activity type.
const TYPES = [
  [
    "beach & swimming",
    ['nwr["natural"="beach"];', 'nwr["leisure"="beach_resort"];'],
  ],
  [
    "on-water",
    ['nwr["leisure"="marina"];', 'nwr["sport"~"kayak|surfing|sailing"];'],
  ],
  [
    "hiking & trails",
    ['nwr["route"="hiking"];', 'nwr["information"="guidepost"];'],
  ],
  ["snow sports", ['nwr["piste:type"];', 'nwr["aerialway"];']],
  ["indoor venues", ['nwr["tourism"~"^(museum|gallery)$"];']],
  ["nightlife", ['nwr["amenity"~"^(bar|pub|nightclub)$"];']],
  ["scenic viewpoints", ['nwr["tourism"="viewpoint"];']],
];

const table = {};

for (const [dest, bbox] of DESTS) {
  table[dest] = {};
  for (const [type, filters] of TYPES) {
    const q = `[out:json][timeout:60][bbox:${bbox}];(\n${filters.join("\n")}\n);out count;`;
    const data = await overpass(q);
    const c = (data.elements ?? []).find((e) => e.type === "count");
    table[dest][type] = Number(c?.tags?.total ?? 0);
    await sleep(2500);
  }
  console.log(`${dest}: ${JSON.stringify(table[dest])}`);
}

console.log("\n=== affordance matrix (counts of supporting infrastructure)");
console.log(
  "  " +
    "activity type".padEnd(24) +
    DESTS.map(([d]) => d.padStart(11)).join(""),
);
for (const [t] of TYPES) {
  console.log(
    "  " +
      t.padEnd(24) +
      DESTS.map(([d]) => String(table[d][t]).padStart(11)).join(""),
  );
}

console.log("\n=== does it discriminate?");
let strong = 0;
for (const [t] of TYPES) {
  const vals = DESTS.map(([d]) => table[d][t]);
  const max = Math.max(...vals);
  const min = Math.min(...vals);
  const winner = DESTS[vals.indexOf(max)][0];
  const ok = max >= 3 * Math.max(min, 1);
  if (ok) strong++;
  console.log(
    `  ${t.padEnd(24)} max=${winner} (${max})  min=${min}  -> ${ok ? "DISCRIMINATES" : "weak"}`,
  );
}
console.log(
  `\n  ${strong}/${TYPES.length} types discriminate at a 3x threshold.`,
);

console.log(`
  Read: counts answer "does this place SUPPORT x" at rung 1, and they do it
  well enough to rule a destination OUT. They do NOT answer "is it FAMOUS for
  x", which is the actual FE-02 claim - a city with 200 restaurants is not
  thereby a food destination. So FE-02 stays CURATED for demo destinations,
  then RETRIEVED at rung 5a, with model memory (5b) last and labeled
  unverified; the counts serve as a cheap negative filter underneath.`);
