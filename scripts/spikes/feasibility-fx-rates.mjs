// Spike: currency exchange rates (V1.S1.T4, slot fx-rates)
// Serves: FE-14. Run: node scripts/spikes/feasibility-fx-rates.mjs
// FE-14 wants daily MID-MARKET rates with an as_of_date. The authoritative
// publisher is the ECB reference-rate feed: a central bank, published once a
// working day around 16:00 CET, free, no key, no ToS gate. Everything else in
// this space is a reseller of it.

const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";

// --- 1. ECB reference rates, straight from the source (rung 1) -------------
const ECB = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
const xml = await (await fetch(ECB, { headers: { "User-Agent": UA } })).text();

const day = /<Cube time=['"]([\d-]+)['"]>/.exec(xml)?.[1];
const rates = { EUR: 1 };
for (const m of xml.matchAll(/<Cube currency=['"](\w{3})['"] rate=['"]([\d.]+)['"]/g)) {
  rates[m[1]] = Number(m[2]);
}
console.log("=== ECB eurofxref-daily.xml");
console.log("  as_of_date (from the feed, not the clock):", day);
console.log("  quote currencies:", Object.keys(rates).length);
console.log("  all:", Object.keys(rates).sort().join(" "));

// --- 2. FE-14 Dictionary: base_ccy, quote_ccy, rate, as_of_date ------------
// Every pair the demo needs is a cross-rate through EUR. Mid-market by
// construction — the ECB publishes no bid/ask, which is exactly what FE-14 wants.
const cross = (from, to) => rates[to] / rates[from];
console.log("\n=== FE-14 Dictionary rows, computed as cross-rates through EUR");
const PAIRS = [["USD", "ISK"], ["USD", "JPY"], ["USD", "EUR"], ["GBP", "THB"], ["KRW", "EUR"]];
for (const [b, q] of PAIRS) {
  const ok = rates[b] !== undefined && rates[q] !== undefined;
  console.log(
    `  base_ccy=${b} quote_ccy=${q} rate=${ok ? cross(b, q).toFixed(6) : "UNAVAILABLE"} as_of_date=${day}`,
  );
}

// --- 3. The coverage gap, measured rather than assumed ---------------------
// The ECB list is ~30 currencies. Destinations outside it cannot be served at
// rung 1 by this feed. Name them instead of pretending.
const DEMO_CCY = ["ISK", "JPY", "EUR", "USD", "THB", "GBP", "KRW", "VND", "MAD", "EGP", "PEN", "TZS"];
const missing = DEMO_CCY.filter((c) => rates[c] === undefined);
console.log("\n=== coverage check against a spread of destination currencies");
console.log("  covered   :", DEMO_CCY.filter((c) => rates[c] !== undefined).join(" "));
console.log("  NOT in ECB:", missing.join(" ") || "none");

// --- 4. Fallback for the tail: frankfurter.app (open-source ECB mirror) ----
console.log("\n=== frankfurter.app — open-source, no key, serves the same ECB data");
const f = await (await fetch("https://api.frankfurter.app/latest?from=EUR", {
  headers: { "User-Agent": UA },
})).json();
console.log("  date:", f.date, "| base:", f.base, "| currencies:", Object.keys(f.rates).length);
const sameSet =
  Object.keys(f.rates).sort().join() === Object.keys(rates).filter((c) => c !== "EUR").sort().join();
console.log("  identical currency set to the ECB feed:", sameSet);
console.log("  spot-check EUR->JPY   ECB:", rates.JPY, " frankfurter:", f.rates.JPY);

// --- 5. Historical series — bitemporal storage per D-015 -------------------
const h = await (await fetch("https://api.frankfurter.app/2026-01-02..2026-01-10?from=EUR&to=USD", {
  headers: { "User-Agent": UA },
})).json();
console.log("\n=== historical series (the D-015 revision series, for free)");
console.log("  range:", h.start_date, "->", h.end_date, "| days:", Object.keys(h.rates ?? {}).length);
console.log("  sample:", JSON.stringify(Object.entries(h.rates ?? {}).slice(0, 3)));

// --- 6. The one that was proposed and no longer works ---------------------
console.log("\n=== exchangerate.host (proposed candidate) — re-vetted live");
const x = await fetch("https://api.exchangerate.host/latest?base=EUR", { headers: { "User-Agent": UA } });
console.log("  HTTP", x.status, "->", (await x.text()).replace(/\s+/g, " ").slice(0, 140));
