// Spike: destination<->activity affordances (V1.S1.T4, slot destination-affordances)
// Serves: FE-02. Run: node scripts/spikes/feasibility-destination-affordances.mjs
// FE-02 is "what is this place known for", across the 15 activity types. No API
// publishes that. What OSM CAN give is a COUNT of supporting infrastructure per
// type, which answers "does it support X" — a weaker, honest claim than
// "famous for X". This spike measures whether the counts discriminate at all.
import { overpass, sleep } from "./_overpass.mjs";

const DESTS = [
  ["Reykjavik", "64.10,-21.98,64.17,-21.78"],
  ["Rome", "41.86,12.42,41.94,12.55"],
  ["Chamonix", "45.88,6.82,45.96,6.93"],
];

const TYPES = [
  ["beach & swimming", '["natural"="beach"];nwr["leisure"="beach_resort"]'],
  ["on-water", '["leisure"="marina"];nwr["sport"~"kayak|surfing|sailing"]'],
  ["hiking & trails", '["route"="hiking"];nwr["information"="guidepost"]'],
  ["snow sports", '["piste:type"];nwr["aerialway"]'],
  ["indoor venues", '["tourism"~"^(museum|gallery)$"]'],
  ["nightlife", '["amenity"~"^(bar|pub|nightclub)$"]'],
  ["dining & food markets", '["amenity"="restaurant"]'],
  ["scenic viewpoints", '["tourism"="viewpoint"]'],
];

const table = {};
for (const [dest, bbox] of DESTS) {
  table[dest] = {};
  const q = `[out:json][timeout:120][bbox:${bbox}];
${TYPES.map(([t, f], i) => `(nwr${f};)->.t${i};`).join("\n")}
${TYPES.map((_, i) => `.t${i} out count;`).join("\n")}`;
  const data = await overpass(q);
  const counts = (data.elements ?? []).filter((e) => e.type === "count");
  TYPES.forEach((_, i) => {
    table[dest][TYPES[i][0]] = Number(counts[i]?.tags?.total ?? 0);
  });
  console.log(`${dest}: ${JSON.stringify(table[dest])}`);
  await sleep(8000);
}

console.log("\n=== affordance matrix (counts of supporting infrastructure)");
const hdr = DESTS.map(([d]) => d.padStart(11)).join("");
console.log("  " + "activity type".padEnd(26) + hdr);
for (const [t] of TYPES) {
  console.log(
    "  " +
      t.padEnd(26) +
      DESTS.map(([d]) => String(table[d][t]).padStart(11)).join(""),
  );
}
console.log("\n=== does it discriminate?");
for (const [t] of TYPES) {
  const vals = DESTS.map(([d]) => table[d][t]);
  const max = Math.max(...vals),
    min = Math.min(...vals);
  const winner = DESTS[vals.indexOf(max)][0];
  console.log(
    `  ${t.padEnd(26)} max=${winner} (${max}) min=${min} -> ${max > 0 && max >= 3 * Math.max(min, 1) ? "DISCRIMINATES" : "weak"}`,
  );
}
console.log(
  "\n  Read: counts answer 'does it SUPPORT x' at rung 1. They do NOT answer",
);
console.log(
  "  'is it FAMOUS for x' — that is the actual FE-02 claim, and it stays",
);
console.log(
  "  curated for demo destinations then retrieval (5a), model memory last.",
);
