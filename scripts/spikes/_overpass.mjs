// Shared Overpass helper for the V1.S1.T4 spikes. Zero dependencies.
// The public instance allows 2 concurrent slots per IP and answers 429 with
// "rate_limited" when they are taken — a production constraint, not a quirk.
export const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";
export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Four instances, rotated on failure. MIRRORS DO NOT AGREE ON CURRENCY -
// the opening-hours spike read OSM base timestamps up to four months apart
// across them - so anything that consumes a mirror must read
// osm3s.timestamp_osm_base rather than assume it is current.
const MIRRORS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.osm.ch/api/interpreter",
];

export async function overpass(query, { attempts = 8 } = {}) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    const ep = MIRRORS[i % MIRRORS.length];
    try {
      const r = await fetch(ep, {
        method: "POST",
        headers: { "User-Agent": UA, "Content-Type": "text/plain" },
        body: query,
      });
      const body = await r.text();
      if (r.ok && !body.trimStart().startsWith("<")) return JSON.parse(body);
      const wait = 8000 * (i + 1);
      console.log(
        `  (HTTP ${r.status} from ${new URL(ep).host} — waiting ${wait / 1000}s)`,
      );
      await sleep(wait);
    } catch (e) {
      lastErr = e;
      await sleep(10000);
    }
  }
  throw lastErr ?? new Error("overpass: exhausted retries");
}

// Percentage of elements carrying a tag, printed as the honest coverage number.
export function cover(els, label, pred) {
  const n = els.filter(pred).length;
  const pct = els.length ? ((n / els.length) * 100).toFixed(1) : "0.0";
  console.log(
    `  ${label.padEnd(26)} ${String(n).padStart(5)}/${els.length}  ${pct.padStart(5)}%`,
  );
  return n;
}
