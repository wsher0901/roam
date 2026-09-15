// Spike: trending-general slot vs FACTS.md F-CC-07 (V1.S1.T6)
// Serves: CC-07. Run: node scripts/spikes/crowds-calendar-trending-general.mjs
//
// D-088 ruling 9 made CC-07 a COMPUTED signal from proxies. The question a
// spike can answer is not "does the API work" — it is "may we KEEP what we
// derive from it", because D-015 disqualifies a caching-prohibited source
// from the asset layer. So this script does two things and no more:
//   1. proves the access requirement with a keyless call (403, not a guess);
//   2. pulls the LICENCE CLAUSES from each provider's own terms page and
//      prints the sentences verbatim, so the grade rests on the text.
// NO KEY IS USED OR NEEDED. Nothing here is a secret.

// Accept-Language matters: developers.google.com serves a localised page
// without it, and a grep for an English clause then "finds nothing" on a
// page that says it plainly in Italian.
const UA = {
  "User-Agent": "roam-spike/0.1 (V1.S1.T6 source vetting)",
  "Accept-Language": "en-US,en;q=0.9",
};

async function status(url) {
  try {
    const r = await fetch(url, { headers: UA });
    const t = await r.text();
    return `HTTP ${r.status} — ${t.slice(0, 160).replace(/\s+/g, " ")}`;
  } catch (e) {
    return `ERR ${e.message}`;
  }
}

function plain(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");
}

async function clauses(url, needles) {
  const r = await fetch(url, { headers: UA });
  if (!r.ok) return { status: r.status, hits: [] };
  const text = plain(await r.text());
  const hits = [];
  for (const n of needles) {
    const i = text.toLowerCase().indexOf(n.toLowerCase());
    hits.push(
      i < 0
        ? `  [${n}] NOT FOUND on this page`
        : `  [${n}] "${text.slice(i, i + 330).trim()}…"`,
    );
  }
  return { status: r.status, hits };
}

console.log("=== PROXY 1 — YouTube velocity (YouTube Data API v3) ===");
console.log(
  "  keyless search.list:",
  await status(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=tokyo+restaurant&maxResults=1",
  ),
);
const yt = await clauses(
  "https://developers.google.com/youtube/terms/developer-policies?hl=en",
  [
    "must not store statistics retrieved as Non-Authorized Data",
    "no longer than 30 calendar days",
    "delete or refresh the stored data",
  ],
);
console.log(`  developer policies page: HTTP ${yt.status}`);
yt.hits.forEach((h) => console.log(h));

console.log("\n=== PROXY 2 — Reddit velocity (Reddit Data API) ===");
console.log(
  "  keyless oauth.reddit.com:",
  await status("https://oauth.reddit.com/r/JapanTravel/new?limit=1"),
);
console.log(
  "  legacy public .json route:",
  await status("https://www.reddit.com/r/JapanTravel/new.json?limit=1"),
);
const rd = await clauses("https://www.redditinc.com/policies/data-api-terms", [
  "for commercial purposes",
  "derive revenues from the use or provision of the Data APIs",
  "delete any cached or stored User Content",
  "data or models that were derived from User Content",
]);
console.log(`  Data API Terms page: HTTP ${rd.status}`);
rd.hits.forEach((h) => console.log(h));

console.log("\n=== PROXY 3 — reservation scarcity ===");
console.log(
  "  OpenTable developer portal:",
  await status("https://www.opentable.com/apis"),
);
console.log(
  "  VERDICT: no self-serve public reservation API was reachable. Partner" +
    " programmes exist; a public product cannot assume admission to one.",
);

console.log("\n=== PROXY 4 — review velocity ===");
console.log(
  "  NOT VETTED HERE BY DESIGN. Review counts come from the venue source" +
    " V1.S1.T4 owns (places-venues / venue-reputation), and velocity is our" +
    " own differencing of snapshots we already licensed. Vetting it here" +
    " would vet a sibling's slot. Its licence rides T4's entry.",
);

console.log("\n=== PROXY 5 — dated press and blogs (rung 5a) ===");
console.log(
  "  No API to vet: this proxy IS the retrieval policy. The date is part of" +
    " the fact, and the policy row in the SOURCES entry is its whole spec.",
);
