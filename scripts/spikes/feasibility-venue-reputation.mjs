// Spike: venue reputation (V1.S1.T4, slot venue-reputation)
// Serves: FE-13. Run: node scripts/spikes/feasibility-venue-reputation.mjs
// FE-13 wants two axes: fame_level and momentum. The review platforms that
// would answer it directly (Google, TripAdvisor, Yelp) all forbid storing
// their content. Wikipedia PAGEVIEWS are an open, cacheable proxy: absolute
// volume stands in for fame, the trend stands in for momentum.
// Wikimedia REST API: free, no key, CC0 metrics.
const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const VENUES = [
  ["Colosseum", "Colosseum"],
  ["Pantheon, Rome", "Pantheon,_Rome"],
  ["Trevi Fountain", "Trevi_Fountain"],
  ["Basilica of San Clemente", "Basilica_of_San_Clemente"],
  ["Centrale Montemartini", "Centrale_Montemartini"],
];

const fmt = (d) => d.toISOString().slice(0, 10).replace(/-/g, "");
const end = new Date();
end.setDate(end.getDate() - 2);
const mid = new Date(end);
mid.setDate(mid.getDate() - 90);
const start = new Date(end);
start.setDate(start.getDate() - 180);

console.log(
  `window: ${fmt(start)} -> ${fmt(end)} (recent half from ${fmt(mid)})\n`,
);

const rows = [];
for (const [label, title] of VENUES) {
  const url =
    "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/user/" +
    `${encodeURIComponent(title)}/daily/${fmt(start)}/${fmt(end)}`;
  const r = await fetch(url, { headers: { "User-Agent": UA } });
  if (!r.ok) {
    console.log(`${label}: HTTP ${r.status}`);
    await sleep(500);
    continue;
  }
  const items = (await r.json()).items ?? [];
  const midKey = fmt(mid) + "00";
  const recent = items.filter((i) => i.timestamp >= midKey);
  const older = items.filter((i) => i.timestamp < midKey);
  const rAvg =
    recent.reduce((a, i) => a + i.views, 0) / Math.max(recent.length, 1);
  const oAvg =
    older.reduce((a, i) => a + i.views, 0) / Math.max(older.length, 1);
  rows.push({
    label,
    total: items.reduce((a, i) => a + i.views, 0),
    days: items.length,
    rAvg,
    oAvg,
    ratio: oAvg ? rAvg / oAvg : 0,
  });
  await sleep(400);
}

rows.sort((a, b) => b.total - a.total);

console.log("=== fame_level proxy: 180-day pageview volume");
const max = rows[0]?.total ?? 1;
for (const r of rows) {
  const share = r.total / max;
  const fame =
    share > 0.5
      ? "iconic"
      : share > 0.15
        ? "classic"
        : share > 0.05
          ? "known"
          : share > 0.01
            ? "niche"
            : "hidden";
  console.log(
    `  ${r.label.padEnd(28)} ${String(r.total).padStart(9)} views/${r.days}d  share=${share.toFixed(3)}  -> fame_level=${fame}`,
  );
}

console.log("\n=== momentum proxy: recent-90d mean vs prior-90d mean");
for (const r of rows) {
  const m = r.ratio > 1.15 ? "rising" : r.ratio < 0.85 ? "fading" : "steady";
  console.log(
    `  ${r.label.padEnd(28)} recent=${r.rAvg.toFixed(0).padStart(6)}/d prior=${r.oAvg.toFixed(0).padStart(6)}/d  ratio=${r.ratio.toFixed(2)} -> momentum=${m}`,
  );
}

console.log(`
=== honest reading
  The proxy discriminates FAME well - orders of magnitude separate an icon
  from a neighbourhood church - and momentum POORLY: pageviews are seasonal,
  so a 90/90 split reads a whole city's tourist season as one direction.
  So fame_level = signals (grade C); momentum is NOT served by this proxy
  alone and needs FE-13's other basis (curated, or retrieval at 5a), carrying
  CC-07's lag label per D-088 ruling 9.
  evidence_basis is therefore 'signals' here, never 'curated'.`);
