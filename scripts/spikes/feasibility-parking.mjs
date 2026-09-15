// Spike: parking (V1.S1.T4, slot parking)
// Serves: FE-10. Run: node scripts/spikes/feasibility-parking.mjs
// The fact that earns this slot its keep is restricted_driving_zone — the
// Florence/Rome ZTL fine. OSM models those as boundary=low_emission_zone and
// the Italian-specific zone:traffic:* tagging. This spike proves both.
import { overpass, cover } from "./_overpass.mjs";

const BBOX = "41.87,12.44,41.92,12.52"; // Rome centre, ZTL country
const q = `[out:json][timeout:90][bbox:${BBOX}];(
nwr["amenity"="parking"];
nwr["boundary"="low_emission_zone"];
nwr["boundary"="traffic_zone"];
);out tags center;`;

const els = (await overpass(q)).elements ?? [];
const parking = els.filter((e) => e.tags?.amenity === "parking");
const zones = els.filter((e) => e.tags?.boundary);
console.log(
  `Rome centre: ${parking.length} parking features, ${zones.length} restricted zones\n`,
);

console.log("=== FE-10 Dictionary vs OSM tags (parking features)");
cover(parking, "availability_class <- parking", (e) => e.tags?.parking);
cover(parking, "cost_band <- fee", (e) => e.tags?.fee);
cover(parking, "cost_band <- charge", (e) => e.tags?.charge);
cover(parking, "restrictions_note <- access", (e) => e.tags?.access);
cover(parking, "restrictions_note <- maxstay", (e) => e.tags?.maxstay);
cover(parking, "capacity", (e) => e.tags?.capacity);
cover(parking, "name", (e) => e.tags?.name);
console.log(
  "  distance_to_entrance_m : COMPUTED by us from geocode + venue geocode",
);

console.log("\n=== restricted_driving_zone — the ZTL/LEZ fact");
for (const z of zones.slice(0, 8)) {
  console.log(
    `  ${(z.tags.name ?? "(unnamed)").slice(0, 44).padEnd(46)}` +
      ` boundary=${z.tags.boundary}` +
      ` type=${z.tags["low_emission_zone"] ?? z.tags["traffic_zone"] ?? z.tags["zone:traffic"] ?? "—"}`,
  );
}
const kinds = {};
for (const z of zones)
  kinds[z.tags.boundary] = (kinds[z.tags.boundary] ?? 0) + 1;
console.log("  zone kinds:", JSON.stringify(kinds));
console.log(
  zones.length
    ? "\n  => ZTL/LEZ IS present in OSM for Rome; the fine-prevention fact is fetchable."
    : "\n  => no zones returned in this bbox — widen or fall to retrieval (city council site).",
);
