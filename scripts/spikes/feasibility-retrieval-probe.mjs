// Spike: the rung-5a retrieval path (V1.S1.T4)
// Serves: FE-15 (money-saving-tips) and FE-16 (conduct-norms) - the two slots
// D-088 created as RETRIEVAL facts, plus the retrieval tail of FE-05/07/08.
// Run: node scripts/spikes/feasibility-retrieval-probe.mjs
//
// These slots have no feed to vet, so the thing to prove is the PATH: that an
// allowed authoritative domain is fetchable, and that a verifiable span can be
// extracted and stored as {url, quoted span, fetched_at, domain grade} - the
// rung-5a provenance record D-088 ruling 1 requires.
const UA = "RoamSpike/0.1 (+https://github.com/wsher0901/roam)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Each target names its domain CLASS, which is what fixes the grade under
// ENGINE section 3 - operator / government / transit authority / press = B.
const TARGETS = [
  {
    fact: "FE-16 conduct-norms",
    domainClass: "operator (the basilica's own site)",
    grade: "B",
    url: "https://www.vatican.va/various/basiliche/san_pietro/index_it.htm",
    needles: [/abbigliament\w*/i, /dress/i, /spalle/i, /decoros\w*/i],
  },
  {
    fact: "FE-16 conduct-norms",
    domainClass: "government tourism body",
    grade: "B",
    url: "https://www.japan.travel/en/practical-coronavirus-information/",
    needles: [/etiquett\w*/i, /shoes/i, /custom\w*/i, /manner\w*/i],
  },
  {
    fact: "FE-15 money-saving-tips",
    domainClass: "operator (city transport authority)",
    grade: "B",
    url: "https://www.atac.roma.it/en/tickets/tourist-tickets",
    needles: [/\b(24|48|72)\s*hours?\b/i, /€\s?\d/, /ticket/i],
  },
  {
    fact: "FE-15 money-saving-tips",
    domainClass: "operator (city pass issuer)",
    grade: "B",
    url: "https://www.parisjetaime.com/eng/article/paris-museum-pass-a338",
    needles: [/museum pass/i, /\b\d+\s?€/, /free/i],
  },
];

function strip(html) {
  let t = html.replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  t = t.replace(/<[^>]+>/g, " ");
  const ents = { "&nbsp;": " ", "&amp;": "&", "&#39;": "'", "&quot;": '"', "&euro;": "€", "&lt;": "<", "&gt;": ">" };
  for (const [k, v] of Object.entries(ents)) t = t.split(k).join(v);
  return t.replace(/\s+/g, " ").trim();
}

let reachable = 0;
let quotable = 0;

for (const t of TARGETS) {
  const fetched_at = new Date().toISOString();
  console.log(`\n=== ${t.fact}  [${t.domainClass}] -> grade ${t.grade}`);
  console.log(`  url: ${t.url}`);
  try {
    const r = await fetch(t.url, { headers: { "User-Agent": UA, Accept: "text/html" }, redirect: "follow" });
    console.log(`  HTTP ${r.status}  final: ${r.url}`);
    if (!r.ok) {
      console.log("  => NOT REACHABLE - the policy must list a second allowed domain");
      continue;
    }
    reachable++;
    const text = strip(await r.text());
    console.log(`  extracted text: ${text.length} chars`);
    let found = false;
    for (const needle of t.needles) {
      const m = needle.exec(text);
      if (!m) continue;
      found = true;
      const span = text.slice(Math.max(0, m.index - 110), m.index + 150).trim();
      console.log(`  QUOTED SPAN (needle ${needle}):`);
      console.log(`    "...${span}..."`);
      break;
    }
    if (found) {
      quotable++;
      console.log("  provenance record that would be stored:");
      console.log(
        `    ${JSON.stringify({ url: r.url, fetched_at, domain_grade: t.grade, quote_required: true })}`,
      );
    } else {
      console.log("  no verifiable span found on the page ->");
      console.log("  per the policy (quote required = yes) the value is DISCARDED, not downgraded.");
    }
  } catch (e) {
    console.log(`  ERR ${e.message}`);
  }
  await sleep(1500);
}

console.log(`
=== result
  reachable: ${reachable}/${TARGETS.length}   quotable: ${quotable}/${TARGETS.length}
  The path works where the operator publishes in HTML, and fails closed where
  it does not - which is the behaviour FE-15/FE-16 need, because a coupon or a
  dress code invented from model memory is exactly the defect the reliability
  law exists to prevent.
  What this spike does NOT establish: that the model will CHOOSE the allowed
  domain. That is the retrieval module's job (V1.S3.T8), and the policy row is
  its input.`);
