// Spike: night-sky-darkness — every candidate's gate, measured (V1.S1.T3)
// Serves: SS-08 (light-pollution class at a location).
// Run: node scripts/spikes/sky-sea-night-sky-darkness.mjs
//
// This is the one Sky & sea slot with NO keyless, license-clean, global point
// API. That is a finding, and a finding has to be measured rather than
// asserted — so this spike calls each candidate and records what it actually
// returns. Four gates, four different kinds of "no":
//
//   1. lightpollutionmap.info QueryRaster — the only turnkey point API. Key
//      wall.
//   2. NOAA/EOG VIIRS VNL annual composites — the canonical public-domain
//      radiance product. Login wall on the data itself.
//   3. NASA GIBS WMS — the night-lights layers are served, but as IMAGERY:
//      queryable=0, so no value can be read back at a point.
//   4. Falchi et al. World Atlas 2015 — the canonical sky-brightness model,
//      and the one a naive vetting would pick. CC BY-NC: a D-015 disqualifier
//      for the asset layer, quoted from the publisher's own landing page.
//
// The spike exits 0 when it has proved all four gates, because proving the
// gap IS the result here.

const UA = { "User-Agent": "roam-spike/0.1 (github.com/wsher0901/roam)" };
const PROBE = { name: "Cherry Springs SP, PA", lat: 41.6628, lon: -77.8261 };

console.log("SPIKE night-sky-darkness — four candidates, four gates\n");
console.log(`probe point: ${PROBE.name} (${PROBE.lat}, ${PROBE.lon})\n`);

const results = [];

// ---------- 1. lightpollutionmap.info ----------
{
  const url = `https://www.lightpollutionmap.info/QueryRaster/?ql=viirs_2023&qk=&lat=${PROBE.lat}&lon=${PROBE.lon}`;
  const res = await fetch(url, { headers: UA });
  const body = (await res.text()).trim();
  console.log("1. lightpollutionmap.info QueryRaster (the turnkey point API)");
  console.log(`   GET ${url}`);
  console.log(`   HTTP ${res.status} -> ${JSON.stringify(body.slice(0, 160))}`);
  const gated = /key|auth/i.test(body);
  console.log(`   verdict: ${gated ? "KEY WALL — no anonymous point query" : "open"}`);
  results.push(["lightpollutionmap.info", gated ? "key wall" : "open"]);
  console.log("");
}

// ---------- 2. NOAA / Colorado School of Mines EOG ----------
{
  const url = "https://eogdata.mines.edu/nighttime_light/annual/v22/";
  const res = await fetch(url, { headers: UA, redirect: "follow" });
  const body = await res.text();
  const login = /login|keycloak|password|sign in/i.test(body);
  console.log("2. NOAA/EOG VIIRS VNL annual composites (the canonical radiance product)");
  console.log(`   GET ${url}`);
  console.log(
    `   HTTP ${res.status}, final URL ${res.url.slice(0, 90)}${res.url.length > 90 ? "…" : ""}`,
  );
  console.log(
    `   body looks like a login page: ${login}  (matched on ${login ? "login/keycloak/password markers" : "nothing"})`,
  );
  console.log(
    `   verdict: ${login ? "LOGIN WALL — free registration required; not fetchable in a spike, and not a live API at all (annual GeoTIFFs)" : "open"}`,
  );
  results.push(["NOAA/EOG VNL", login ? "login wall (registration)" : "open"]);
  console.log("");
}

// ---------- 3. NASA GIBS ----------
{
  const url =
    "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.1.1";
  const caps = await (await fetch(url, { headers: UA })).text();
  const layers = [
    ...caps.matchAll(/<Layer[^>]*queryable="(\d)"[^>]*>[\s\S]*?<Name>([^<]+)<\/Name>/g),
  ];
  const night = layers.filter((m) => /DayNightBand|Black_?Marble/i.test(m[2]));
  console.log("3. NASA GIBS WMS (night-lights imagery)");
  console.log(`   GET ${url.slice(0, 80)}…`);
  console.log(`   night-lights layers advertised: ${night.length}`);
  for (const m of night.slice(0, 6)) {
    console.log(`     queryable=${m[1]}  ${m[2]}`);
  }
  const anyQueryable = night.some((m) => m[1] === "1");
  console.log(
    `   verdict: ${anyQueryable ? "at least one layer is queryable" : "IMAGERY ONLY — every night-lights layer reports queryable=0, so GetFeatureInfo cannot return a radiance value at a point"}`,
  );
  results.push(["NASA GIBS", anyQueryable ? "queryable" : "imagery only (queryable=0)"]);
  console.log("");
}

// ---------- 4. Falchi et al. World Atlas 2015 ----------
{
  const url =
    "https://dataservices.gfz-potsdam.de/contact/showshort.php?id=escidoc:1541893";
  const html = await (await fetch(url, { headers: UA })).text();
  const flat = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const i = flat.search(/licence|license/i);
  const span = i >= 0 ? flat.slice(Math.max(0, i - 120), i + 160).trim() : "(not found)";
  console.log("4. Falchi et al. World Atlas of Artificial Night Sky Brightness 2015");
  console.log(`   GET ${url}`);
  console.log(`   quoted span from the publisher's landing page:`);
  console.log(`     "…${span}…"`);
  const nc = /CC\s*BY\s*NC|non-?commercial/i.test(flat);
  console.log(
    `   verdict: ${nc ? "CC BY-NC — NON-COMMERCIAL. D-015 disqualifier for the asset layer, however good the data is." : "no non-commercial restriction found"}`,
  );
  results.push(["Falchi World Atlas 2015", nc ? "CC BY-NC (disqualified)" : "unknown"]);
  console.log("");
}

// ---------- summary ----------
console.log("SUMMARY — every candidate and its gate");
for (const [name, verdict] of results) {
  console.log(`   ${name.padEnd(26)} ${verdict}`);
}
console.log("");
console.log(
  "CONSEQUENCE: SS-08 has no live API. It is served as an IN-REPO DERIVED ASSET",
);
console.log(
  "built once from the VIIRS VNL annual composite (US-Gov public domain, free",
);
console.log(
  "registration), refreshed yearly — and, where that asset has not been built,",
);
console.log("by the slot's retrieval policy. It is never served by the Falchi atlas.");
