// Spike: reservation / timed-entry / permit flags (V1.S1.T4, slot reservation-flags)
// Serves: FE-08. Run: node scripts/spikes/feasibility-reservation-flags.mjs
//
// FE-08 is the fact that stops a traveller arriving at the Uffizi without a
// timed ticket, or at Half Dome without a permit. OSM has a `reservation` tag.
// The question is whether it is present often enough to gate on - measured
// across the venues where booking actually decides the day.
import { overpass, cover } from "./_overpass.mjs";

const AREAS = [
  ["Rome", "41.88,12.44,41.93,12.52"],
  ["Florence", "43.76,11.24,43.79,11.27"],
];

const rows = [];
for (const [name, bbox] of AREAS) {
  const q = `[out:json][timeout:120][bbox:${bbox}];(
nwr["tourism"~"^(museum|gallery|attraction)$"];
nwr["amenity"="restaurant"];
);out tags center;`;
  const els = (await overpass(q)).elements ?? [];
  console.log(`\n=== ${name}: ${els.length} bookable-class venues`);
  cover(els, "reservation=*", (e) => e.tags?.reservation);
  cover(els, "fee=*", (e) => e.tags?.fee);
  cover(els, "charge=*", (e) => e.tags?.charge);
  cover(els, "website (the retrieval seed)", (e) => e.tags?.website ?? e.tags?.["contact:website"]);
  cover(els, "opening_hours", (e) => e.tags?.opening_hours);

  const withRes = els.filter((e) => e.tags?.reservation);
  const values = {};
  for (const e of withRes) values[e.tags.reservation] = (values[e.tags.reservation] ?? 0) + 1;
  console.log("  reservation values seen:", JSON.stringify(values));
  for (const e of withRes.slice(0, 5)) {
    console.log(`    ${(e.tags.name ?? "(unnamed)").slice(0, 34).padEnd(36)} reservation=${e.tags.reservation}`);
  }
  rows.push({ name, total: els.length, res: withRes.length,
              site: els.filter((e) => e.tags?.website ?? e.tags?.["contact:website"]).length });
}

const t = rows.reduce((a, r) => a + r.total, 0);
const res = rows.reduce((a, r) => a + r.res, 0);
const site = rows.reduce((a, r) => a + r.site, 0);

console.log(`
=== verdict for FE-08
  reservation tag present on ${res}/${t} = ${((res / t) * 100).toFixed(1)}% of bookable-class venues.
  operator website present on ${site}/${t} = ${((site / t) * 100).toFixed(1)}%.

  The OSM tag is far too sparse to gate on, and it does not model FE-08's
  Dictionary at all: there is no typical_lead_time_days and no sellout_speed
  anywhere in the OSM schema, and PERMITS (Inca Trail, Half Dome) are issued by
  authorities that publish no feed.
  So this slot is RETRIEVAL-FIRST at rung 5a, seeded by the operator website
  that OSM DOES carry, plus a curated table for the demo destinations'
  headline venues. The OSM tag is used only as corroboration, never as the
  answer, and its absence is never read as "no reservation needed" - that
  inference is the exact defect the fact exists to prevent.`);
