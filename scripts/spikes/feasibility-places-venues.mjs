// Spike: venue / POI records (V1.S1.T4, slot places-venues)
// Serves: FE-03. Run: node scripts/spikes/feasibility-places-venues.mjs
// FE-03 Dictionary is small — name, geocode, category mapped to the 15 activity
// types. The real question is whether OSM's tag vocabulary MAPS cleanly onto
// those 15 types, and how many POIs fall outside the mapping.
import { overpass, cover } from "./_overpass.mjs";

// The mapping under test: OSM tag -> Roam activity type (FACTS taxonomy of 15).
const MAP = [
  ["indoor venues",       '["tourism"~"^(museum|gallery)$"]'],
  ["indoor venues",       '["shop"="mall"]'],
  ["city walking",        '["tourism"="attraction"]'],
  ["city walking",        '["historic"]'],
  ["scenic viewpoints",   '["tourism"="viewpoint"]'],
  ["dining & food mkts",  '["amenity"~"^(restaurant|cafe|fast_food)$"]'],
  ["dining & food mkts",  '["amenity"="marketplace"]'],
  ["nightlife",           '["amenity"~"^(bar|pub|nightclub)$"]'],
  ["beach & swimming",    '["natural"="beach"]'],
  ["hiking & trails",     '["route"="hiking"]'],
  ["theme parks",         '["tourism"="theme_park"]'],
];

const BBOX = "41.88,12.46,41.92,12.52"; // Rome centre
const q = `[out:json][timeout:90][bbox:${BBOX}];(
${MAP.map(([, f]) => `nwr${f};`).join("\n")}
);out tags center;`;

const data = await overpass(q);
const els = data.elements ?? [];
console.log(`Rome centre bbox ${BBOX} — ${els.length} elements returned`);
console.log(`generator: ${data.generator} | osm base: ${data.osm3s?.timestamp_osm_base}`);

console.log("\n=== FE-03 Dictionary coverage (name / geocode / category)");
cover(els, "name", (e) => e.tags?.name);
cover(els, "geocode (lat/lon or center)", (e) => (e.lat && e.lon) || e.center);
cover(els, "category (any mapped tag)", (e) =>
  e.tags && (e.tags.tourism || e.tags.amenity || e.tags.shop || e.tags.historic ||
             e.tags.natural || e.tags.route),
);
cover(els, "wikidata cross-ref", (e) => e.tags?.wikidata);

console.log("\n=== counts per Roam activity type (the mapping under test)");
const byType = {};
for (const e of els) {
  const t = e.tags ?? {};
  let type = null;
  if (t.tourism === "museum" || t.tourism === "gallery" || t.shop === "mall") type = "indoor venues";
  else if (t.tourism === "theme_park") type = "theme parks";
  else if (t.tourism === "viewpoint") type = "scenic viewpoints";
  else if (t.amenity === "marketplace" || /^(restaurant|cafe|fast_food)$/.test(t.amenity ?? "")) type = "dining & food markets";
  else if (/^(bar|pub|nightclub)$/.test(t.amenity ?? "")) type = "nightlife";
  else if (t.natural === "beach") type = "beach & swimming";
  else if (t.route === "hiking") type = "hiking & trails";
  else if (t.tourism === "attraction" || t.historic) type = "city walking & sightseeing";
  byType[type ?? "UNMAPPED"] = (byType[type ?? "UNMAPPED"] ?? 0) + 1;
}
for (const [k, v] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${k.padEnd(28)} ${String(v).padStart(5)}`);
}
const unmapped = byType.UNMAPPED ?? 0;
console.log(`\nunmapped share: ${((unmapped / els.length) * 100).toFixed(1)}%`);
console.log("sample record:", JSON.stringify(
  (() => { const e = els.find((x) => x.tags?.name && x.tags?.tourism === "museum") ?? els[0];
           return { name: e.tags?.name, lat: e.lat ?? e.center?.lat, lon: e.lon ?? e.center?.lon,
                    tags: Object.keys(e.tags ?? {}).slice(0, 12) }; })(),
));
