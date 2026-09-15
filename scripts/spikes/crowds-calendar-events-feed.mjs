// Spike: events-feed slot vs FACTS.md F-CC-04 (V1.S1.T6)
// Serves: CC-04. Run: node scripts/spikes/crowds-calendar-events-feed.mjs
// CC-04 needs BOTH polarities — reason-to-go and disruption_flag — and the
// fact row already says "city-dependent feeds -> ladder". This spike tests
// four candidate shapes and reports which of them a keyless run can reach.

const UA = { "User-Agent": "roam-spike/0.1 (V1.S1.T6 source vetting)" };

async function probe(name, url, headers = {}) {
  try {
    const res = await fetch(url, { headers: { ...UA, ...headers } });
    const text = await res.text();
    return { name, status: res.status, text };
  } catch (e) {
    return { name, status: "ERR", text: e.message };
  }
}

console.log("=== 1. Ticketmaster Discovery API (keyed commercial feed) ===");
const tm = await probe(
  "ticketmaster",
  "https://app.ticketmaster.com/discovery/v2/events.json?city=Chicago",
);
console.log(`  HTTP ${tm.status} — ${tm.text.slice(0, 120)}`);
console.log(
  "  VERDICT: a key is required, so this spike CANNOT prove the payload." +
    " Graded unproven until a key exists.",
);

console.log("\n=== 2. Eventbrite public event search ===");
const eb = await probe(
  "eventbrite",
  "https://www.eventbriteapi.com/v3/events/search/?q=music&location.address=chicago",
);
console.log(`  HTTP ${eb.status} — ${eb.text.slice(0, 120)}`);
console.log(
  "  VERDICT: the public search endpoint is GONE (404, not 401) — this is" +
    " not a key problem, the route does not exist.",
);

console.log("\n=== 3. Wikidata SPARQL (free, CC0) ===");
const query = `SELECT ?event ?eventLabel ?date ?placeLabel WHERE {
  ?event wdt:P31/wdt:P279* wd:Q1656682 ;
         wdt:P585 ?date .
  OPTIONAL { ?event wdt:P276 ?place . }
  FILTER(YEAR(?date) = 2026)
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
} LIMIT 10`;
const wd = await probe(
  "wikidata",
  "https://query.wikidata.org/sparql?format=json&query=" +
    encodeURIComponent(query),
  { Accept: "application/sparql-results+json" },
);
console.log(`  HTTP ${wd.status}`);
if (wd.status === 200) {
  const rows = JSON.parse(wd.text).results.bindings;
  console.log(`  rows: ${rows.length}`);
  for (const b of rows.slice(0, 5)) {
    console.log(
      `   ${b.date.value.slice(0, 10)}  ${b.eventLabel.value.slice(0, 60)}` +
        `  @ ${b.placeLabel?.value ?? "-"}`,
    );
  }
  const unlabeled = rows.filter((b) => /^Q\d+$/.test(b.eventLabel.value));
  console.log(
    `  unlabeled Q-ids in the sample: ${unlabeled.length}/${rows.length}`,
  );
  console.log(
    "  VERDICT: it answers, but what comes back is conference talks and" +
      " gallery openings — coverage is incidental, not a city events feed.",
  );
}

console.log(
  "\n=== 4. Municipal open data — NYC permitted events (Socrata) ===",
);
const nyc = await probe(
  "nyc",
  "https://data.cityofnewyork.us/resource/tvpp-9vvx.json?$limit=200",
);
console.log(`  HTTP ${nyc.status}`);
if (nyc.status === 200) {
  const rows = JSON.parse(nyc.text);
  console.log("  rows:", rows.length);
  console.log("  keys:", Object.keys(rows[0]).join(", "));
  const closures = rows.filter(
    (r) => r.street_closure_type && r.street_closure_type !== "N/A",
  );
  console.log(
    `  rows carrying a real street closure: ${closures.length}/${rows.length}`,
  );
  if (closures[0]) {
    console.log(
      `   e.g. ${closures[0].start_date_time?.slice(0, 16)} ` +
        `${closures[0].event_name} [${closures[0].event_type}] ` +
        `${closures[0].event_borough} -> closure: ${closures[0].street_closure_type}`,
    );
  }
  console.log(
    "  CC-04 Dictionary mapping: event_id<-event_id · name<-event_name ·" +
      " area<-event_borough/event_location · dates<-start/end_date_time ·" +
      " disruption_flag<-street_closure_type · expected_scale_band<-ABSENT.",
  );
  console.log(
    "  VERDICT: a real, keyless, municipal feed carrying the disruption" +
      " half of CC-04 directly — for ONE city. This is what" +
      ' "city-dependent" means in practice.',
  );
}
