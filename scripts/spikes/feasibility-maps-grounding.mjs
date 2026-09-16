// Spike: Google Maps grounding / Places as a registry + affordance source
// (V1.S1.T4, D-088 ruling 17). Bears on FE-01, FE-02, FE-03.
// Run: node scripts/spikes/feasibility-maps-grounding.mjs
//
// This slot's verdict is decided by TERMS, not by payload shape, so the spike
// fetches the governing terms and greps the decisive clauses out of them. It
// is a live run against the primary source, re-runnable, and it prints the
// clause verbatim so the verdict can never drift from its evidence.
//
// It deliberately does NOT call Places or the grounding tool. Calling them
// requires a billed key, and under D-015 the answer does not depend on what
// they return - it depends on what may be KEPT.
const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";

const DOCS = [
  [
    "Google Maps Platform Terms of Service",
    "https://cloud.google.com/maps-platform/terms/",
  ],
  [
    "Google Maps Platform Service Specific Terms",
    "https://cloud.google.com/maps-platform/terms/maps-service-terms",
  ],
];

// The clauses that decide it. Each is looked up by an anchor phrase.
const CLAUSES = [
  ["No Scraping (ToS 3.2.3(a))", "No Scraping", 1150],
  ["No Caching (ToS 3.2.3(b))", "No Caching", 260],
  [
    "No Creating Content (ToS 3.2.3(c))",
    "No Creating Content From Google Maps Content",
    900,
  ],
  [
    "ID caching carve-out (SST)",
    "Customer may cache the Google ID values",
    330,
  ],
  ["Grounding permitted use (SST 10.2)", "10.2 Permitted Use", 1250],
  ["Grounding restrictions (SST 10.3)", "10.3 Additional Restrictions", 700],
];

function strip(html) {
  let t = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  t = t.replace(/<[^>]+>/g, " ");
  for (const [k, v] of Object.entries({
    "&nbsp;": " ",
    "&amp;": "&",
    "&#39;": "'",
    "&quot;": '"',
  })) {
    t = t.split(k).join(v);
  }
  return t.replace(/\s+/g, " ").trim();
}

const corpus = [];
for (const [name, url] of DOCS) {
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  const text = strip(await r.text());
  console.log(
    `fetched: ${name}\n  ${url}\n  HTTP ${r.status}, ${text.length} chars, read ${new Date().toISOString()}`,
  );
  corpus.push([name, text]);
}

console.log(
  "\n================ THE DECIDING CLAUSES, VERBATIM ================",
);
let found = 0;
for (const [label, anchor, span] of CLAUSES) {
  let hit = null;
  for (const [docName, text] of corpus) {
    const i = text.indexOf(anchor);
    if (i !== -1) {
      hit = { docName, excerpt: text.slice(i, i + span) };
      break;
    }
  }
  console.log(`\n--- ${label}`);
  if (!hit) {
    console.log(
      "    NOT FOUND - the terms moved; the verdict must be re-vetted before it is trusted.",
    );
    continue;
  }
  found++;
  console.log(`    [${hit.docName}]`);
  console.log(`    "${hit.excerpt}"`);
}

console.log(`\n================ VERDICT ================`);
console.log(`clauses located: ${found}/${CLAUSES.length}`);
console.log(`
REJECT for the asset layer (FE-01 registry, FE-03 venue records), and
ADOPT-FOR-DEEP-LINKING-ONLY.

The clause that decides it is SST 10.3.1: the customer will not "attempt to
extract or otherwise separate Google Maps Content from the Grounded Output".
Roam's asset layer under D-015 is exactly that extraction - structured,
bitemporal, append-only fact rows lifted out of a response and kept. The
30-day permission in SST 10.2.2 does not rescue it either, because it allows
caching Grounded Output "solely for the purpose of evaluating and optimizing
the performance or display" - a debugging and rendering allowance, not a data
asset - and 30 days is shorter than the revision series D-015 is built to keep.
Plain Places is refused one step earlier, by ToS 3.2.3(a), which names
"places information" and "business names, addresses" among the things that may
not be pre-fetched, indexed or stored outside the Services.

What survives: SST section 3 permits caching Google ID values indefinitely, so
a place_id may be stored as an external cross-reference on an OSM-sourced
venue, for an "open in Google Maps" deep link. That is a link, not a fact, and
it carries no coverage or freshness duty.`);
