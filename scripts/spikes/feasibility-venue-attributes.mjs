// Spike: venue attributes (V1.S1.T4, slot venue-attributes)
// Serves: FE-09. Run: node scripts/spikes/feasibility-venue-attributes.mjs
// FE-09's Dictionary asks for six planning attributes. OSM carries some of them
// as tags and simply does not model the others. This spike measures which is
// which, because "fetched + estimated" is only honest if we know the split.
import { overpass, cover } from "./_overpass.mjs";

const BBOX = "41.88,12.46,41.92,12.52"; // Rome centre
const q = `[out:json][timeout:90][bbox:${BBOX}];(
nwr["tourism"~"^(museum|gallery|attraction)$"];
nwr["amenity"~"^(restaurant|cafe|bar|pub|nightclub)$"];
);out tags center;`;

const els = (await overpass(q)).elements ?? [];
console.log(`${els.length} venues in Rome centre\n`);

console.log("=== FE-09 Dictionary vs OSM tags");
cover(els, "indoor_outdoor <- indoor", (e) => e.tags?.indoor);
cover(els, "indoor_outdoor <- outdoor_seating", (e) => e.tags?.outdoor_seating);
cover(els, "indoor_outdoor <- building", (e) => e.tags?.building);
cover(els, "min_age_note <- min_age", (e) => e.tags?.min_age);
cover(els, "pet_friendly <- dog", (e) => e.tags?.dog);
cover(els, "family_fit <- kids_area", (e) => e.tags?.["kids_area"] ?? e.tags?.playground);
cover(els, "audience_suitability", (e) => e.tags?.adult ?? e.tags?.min_age);
cover(els, "typical_visit_minutes", (e) => e.tags?.["duration"]);
console.log("  (for reference, not FE-09:)");
cover(els, "wheelchair", (e) => e.tags?.wheelchair);
cover(els, "website", (e) => e.tags?.website ?? e.tags?.["contact:website"]);

console.log("\n=== verdict per Dictionary field");
console.log("  indoor_outdoor        : PARTIAL from tags, else INFERRED from category");
console.log("  typical_visit_minutes : NOT MODELLED in OSM -> estimated per category, labeled");
console.log("  family_fit            : NOT MODELLED -> estimated");
console.log("  min_age_note          : sparse tag -> retrieval (operator site) then estimated");
console.log("  audience_suitability  : NOT MODELLED -> estimated from category + min_age");
console.log("  pet_friendly          : sparse 'dog' tag -> unknown is a legal value per FACTS");
