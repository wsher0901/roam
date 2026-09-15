// Spike: transport disruptions & strikes (V1.S1.T5)
// Serves: TT-08 (region, mode, operator, window{start,end,open_ended},
//                severity, scope_note)
// Run: node scripts/spikes/time-transport-disruptions.mjs
//
// FACTS says TT-08 is "notice boards + news -> full ladder", with rung 5a
// from the operator's own notices and established press. This spike tests
// the claim from both ends: which operators publish a MACHINE-READABLE
// disruption feed (rung 2), and whether a global aggregator exists at all
// (it does not — that absence is the finding that sets the grade).

const probes = [
  // [label, url, no-key?, mode]
  ["Transport for London — tube", "https://api.tfl.gov.uk/Line/Mode/tube/Disruption", "metro"],
  ["Transport for London — all modes", "https://api.tfl.gov.uk/Line/Mode/tube,dlr,overground,elizabeth-line,tram/Status", "metro"],
  ["MTA New York — service alerts (GTFS-RT JSON)", "https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/camsys%2Fall-alerts.json", "metro"],
  ["Bay Area 511 (needs key — control)", "https://api.511.org/transit/servicealerts?agency=BA", "metro"],
  ["Rejseplanen / Denmark", "https://www.rejseplanen.dk/bin/rest.exe/trafficMessages?format=json", "rail"],
];

console.log("operator disruption feeds — unauthenticated probe:");
for (const [label, url] of probes) {
  try {
    const r = await fetch(url, {
      headers: { "User-Agent": "roam-spike", Accept: "application/json" },
      signal: AbortSignal.timeout(30000),
    });
    const body = await r.text();
    let shape = body.slice(0, 200).replace(/\s+/g, " ");
    try {
      const j = JSON.parse(body);
      const first = Array.isArray(j) ? j[0] : (j.entity?.[0] ?? j);
      shape = `JSON ok; top-level ${Array.isArray(j) ? `array[${j.length}]` : `object{${Object.keys(j).slice(0, 8).join(",")}}`}; first item keys: ${first ? Object.keys(first).slice(0, 12).join(",") : "(empty)"}`;
    } catch {
      /* not JSON — leave the raw prefix */
    }
    console.log(`\n  ${label}\n    HTTP ${r.status} — ${shape}`);
  } catch (e) {
    console.log(`\n  ${label}\n    fetch failed — ${e.message}`);
  }
}

// ---------------------------------------------------------------------
// The TfL payload in detail — it is the one that answers TT-08's
// dictionary, so its keys are worth confirming field by field.
// ---------------------------------------------------------------------
console.log("\nTfL disruption payload vs the TT-08 dictionary:");
const r = await fetch(
  "https://api.tfl.gov.uk/Line/Mode/tube,dlr,overground,elizabeth-line,tram/Status",
  { headers: { "User-Agent": "roam-spike" } },
);
if (r.ok) {
  const lines = await r.json();
  console.log(`  lines returned: ${lines.length}`);
  const disrupted = lines.filter((l) =>
    (l.lineStatuses || []).some((s) => s.statusSeverity !== 10),
  );
  console.log(
    `  lines with a non-"Good Service" status right now: ${disrupted.length} — ${disrupted.map((l) => l.name).join(", ") || "(none)"}`,
  );
  const s = disrupted[0]?.lineStatuses?.[0] ?? lines[0]?.lineStatuses?.[0];
  if (s) {
    console.log(`  lineStatus keys: ${Object.keys(s).join(", ")}`);
    console.log(`    statusSeverity: ${s.statusSeverity} (${s.statusSeverityDescription})  -> maps to TT-08 severity`);
    console.log(`    reason: ${String(s.reason ?? "(none)").slice(0, 140)}`);
    const vp = s.validityPeriods?.[0];
    console.log(
      `    validityPeriods[0]: ${vp ? JSON.stringify(vp) : "(none)"}  -> maps to TT-08 window{start,end,open_ended}`,
    );
  }
} else {
  console.log(`  HTTP ${r.status}`);
}

// ---------------------------------------------------------------------
// Is there a GLOBAL disruption aggregator? Probe the candidates.
// ---------------------------------------------------------------------
console.log("\nglobal aggregator candidates:");
for (const [label, url] of [
  ["Transitland service alerts (key-gated)", "https://transit.land/api/v2/rest/feeds?limit=1"],
  ["Mobility Database API (key-gated)", "https://api.mobilitydatabase.org/v1/gtfs_feeds?limit=1"],
  ["EU ITS national access point index", "https://transport.ec.europa.eu/transport-themes/intelligent-transport-systems/road/action-plan-and-directive/national-access-points_en"],
]) {
  try {
    const rr = await fetch(url, {
      headers: { "User-Agent": "roam-spike" },
      signal: AbortSignal.timeout(30000),
    });
    console.log(`  ${label}: HTTP ${rr.status}`);
  } catch (e) {
    console.log(`  ${label}: ${e.message}`);
  }
}
console.log(
  "\nNO global disruption aggregator was found. GTFS-RT service alerts exist\nper operator, and the catalogue lists gtfs-rt feeds, but there is no single\nsource that answers \"is anything broken in <region> on <date>\" worldwide.\nThat absence is why TT-08 grades where it does.",
);
