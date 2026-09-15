// Spike: area profiles (V1.S1.T4, slot area-profiles)
// Serves: FE-12. Run: node scripts/spikes/feasibility-area-profiles.mjs
// FE-12 is half fetchable and half not, and the split is the point: OSM gives
// the GEOMETRY of a neighbourhood (area_id, name, centroid/polygon) for free.
// It does not give vibe_tags, price_band or centrality — those are judgements.
import { overpass, cover } from "./_overpass.mjs";

const BBOX = "41.85,12.42,41.95,12.56"; // Rome
const q = `[out:json][timeout:90][bbox:${BBOX}];(
nwr["place"~"^(suburb|neighbourhood|quarter)$"];
rel["boundary"="administrative"]["admin_level"~"^(9|10)$"];
);out tags center;`;

const els = (await overpass(q)).elements ?? [];
console.log(`Rome: ${els.length} area features\n`);

console.log("=== FE-12 Dictionary vs OSM");
cover(els, "area_id <- osm type/id", (e) => e.type && e.id);
cover(els, "name", (e) => e.tags?.name);
cover(els, "centroid <- center", (e) => e.center ?? (e.lat && e.lon));
cover(els, "wikidata cross-ref", (e) => e.tags?.wikidata);
console.log(
  "  vibe_tags[]           : NOT MODELLED -> curated (demo) / retrieval 5a",
);
console.log("  price_band (1-4)      : NOT MODELLED -> curated / retrieval 5a");
console.log(
  "  centrality            : COMPUTED from centroid vs city centroid",
);
console.log(
  "  transit_access_class  : COMPUTED from TT-07 stops within radius",
);
console.log(
  "  best_for[]            : COMPUTED from FE-03 POI mix inside the polygon",
);

console.log(
  "\n=== named areas returned (the registry half, which IS fetchable)",
);
const named = els.filter((e) => e.tags?.name);
for (const e of named.slice(0, 15)) {
  const c = e.center ?? { lat: e.lat, lon: e.lon };
  console.log(
    `  ${String(e.type + "/" + e.id).padEnd(16)} ${(e.tags.name ?? "").slice(0, 28).padEnd(30)}` +
      ` ${c.lat?.toFixed(4)},${c.lon?.toFixed(4)}  place=${e.tags.place ?? "-"} admin=${e.tags.admin_level ?? "-"}`,
  );
}
console.log(`\n  total named areas: ${named.length}`);
console.log(
  "  => area_id / name / centroid are rung 1. The CHARACTER half is not,",
);
console.log(
  "     and is curated for demo destinations then retrieval (5a) elsewhere.",
);
