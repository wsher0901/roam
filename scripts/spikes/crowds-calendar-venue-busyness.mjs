// Spike: venue-busyness slot vs FACTS.md F-CC-06 (V1.S1.T6)
// Serves: CC-06. Run: node scripts/spikes/crowds-calendar-venue-busyness.mjs
//
// CC-06 is flagged "high ToS/coverage risk". The fact row says to check that
// rather than assume it, so this spike checks two things against primary
// pages, live:
//   1. Does the OFFICIAL Places API expose a busyness field at all?
//      (answered by reading Google's own data-fields reference)
//   2. What do the Maps Platform Terms say about taking it anyway?
//      (answered by quoting the No Scraping / No Caching clauses)
// No key, no scraping of any venue: the only pages fetched are Google's own
// documentation and terms, plus one vendor's home page.

const UA = {
  "User-Agent": "roam-spike/0.1 (V1.S1.T6 source vetting)",
  "Accept-Language": "en-US,en;q=0.9",
};

const plain = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");

console.log("=== 1. Is busyness an official Places API field? ===");
const fieldsRes = await fetch(
  "https://developers.google.com/maps/documentation/places/web-service/data-fields?hl=en",
  { headers: UA },
);
const fields = plain(await fieldsRes.text());
console.log(`  data-fields reference: HTTP ${fieldsRes.status}`);
for (const needle of [
  "popularTimes",
  "popular times",
  "busyness",
  "liveBusy",
  "currentOpeningHours",
]) {
  const i = fields.toLowerCase().indexOf(needle.toLowerCase());
  console.log(`   "${needle}": ${i < 0 ? "NOT PRESENT" : "present @" + i}`);
}
console.log(
  "  VERDICT: opening hours are a field; busyness is not. Popular Times is a" +
    " Google Maps PRODUCT SURFACE, not an API field — so there is no" +
    " licensed route to CC-06 through the official API.",
);

console.log("\n=== 2. What the Maps Platform Terms say about taking it ===");
const termsRes = await fetch(
  "https://cloud.google.com/maps-platform/terms?hl=en",
  {
    headers: UA,
  },
);
const terms = plain(await termsRes.text());
console.log(`  terms page: HTTP ${termsRes.status}`);
for (const needle of ["No Scraping", "No Caching"]) {
  const i = terms.indexOf(needle);
  console.log(
    i < 0
      ? `  [${needle}] NOT FOUND`
      : `  [${needle}] "${terms.slice(i, i + 300).trim()}…"`,
  );
}
console.log(
  "  VERDICT: scraping Popular Times is not merely fragile, it is" +
    " prohibited in the terms of the same platform. D-015 settles it: a" +
    " source we may not retain is not an asset-layer source.",
);

console.log("\n=== 3. Commercial busyness vendors ===");
const bt = await fetch("https://besttime.app/", { headers: UA });
const btText = plain(await bt.text());
console.log(`  BestTime.app: HTTP ${bt.status}`);
for (const needle of ["API key", "foot traffic", "pricing", "credits"]) {
  console.log(
    `   mentions "${needle}": ${btText.toLowerCase().includes(needle.toLowerCase())}`,
  );
}
console.log(
  "  VERDICT: a keyed, paid vendor exists. NOT PROVEN HERE — no key, no" +
    " account, so no payload and no grade. Recorded as the upgrade path, not" +
    " as a vetted source.",
);

console.log("\n=== 4. What CC-06 can honestly serve in V1 ===");
console.log(
  "  Rung 4, estimated and labeled: a curve shaped from inputs we already\n" +
    "  license — opening hours (T4's slot), venue type, day of week, and the\n" +
    "  calendar pressure THIS bench supplies (CC-01 holidays, CC-02 school\n" +
    "  breaks, CC-04 events, CC-08 port calls). That is an estimate that\n" +
    "  says so, which the reliability law permits, and it is the only thing\n" +
    "  here that is both licensed and honest.",
);
