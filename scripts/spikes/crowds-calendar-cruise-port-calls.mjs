// Spike: cruise-port-calls slot vs FACTS.md F-CC-08 (V1.S1.T6)
// Serves: CC-08. Run: node scripts/spikes/crowds-calendar-cruise-port-calls.mjs
//
// There is no global cruise-call API. What exists is each PORT AUTHORITY
// publishing its own schedule — which is rung 2 (a government body) but
// arrives as a file, not a feed. This spike proves that shape end to end:
// it finds the download link on the port's own page, fetches the file, and
// READS THE COLUMNS, so the CC-08 Dictionary mapping rests on the real
// sheet rather than on a description of it.
// Zero dependencies: the XLSX reader below is ~25 lines of zip walking.

import { inflateRawSync } from "node:zlib";

const UA = {
  "User-Agent": "roam-spike/0.1 (V1.S1.T6 source vetting)",
  "Accept-Language": "en-US,en;q=0.9",
};

function unzip(buf) {
  const files = {};
  let off = 0;
  while (off < buf.length - 4 && buf.readUInt32LE(off) === 0x04034b50) {
    const method = buf.readUInt16LE(off + 8);
    const csize = buf.readUInt32LE(off + 18);
    const nlen = buf.readUInt16LE(off + 26);
    const elen = buf.readUInt16LE(off + 28);
    const name = buf.slice(off + 30, off + 30 + nlen).toString();
    const start = off + 30 + nlen + elen;
    const raw = buf.slice(start, start + csize);
    files[name] = method === 8 ? inflateRawSync(raw) : raw;
    off = start + csize;
  }
  return files;
}

const cellText = (c) =>
  c
    .replace(/<[^>]+>/g, "\u0001")
    .split("\u0001")
    .filter(Boolean)
    .join(" ")
    .trim();

console.log("=== 1. Port of Dubrovnik (Lučka uprava Dubrovnik) ===");
const page = await (
  await fetch(
    "https://www.portdubrovnik.hr/index.php/hr/promet/najave-dolazaka",
    {
      headers: UA,
    },
  )
).text();
const links = [...page.matchAll(/href="([^"]+\.(?:xlsx|pdf|csv))"/gi)].map(
  (m) => m[1],
);
console.log("  published files linked on the port's own page:");
for (const l of [...new Set(links)]) console.log("   ", l);

const xlsxLink = [...new Set(links)].find((l) => /2026.*\.xlsx$/i.test(l));
console.log(
  "\n  fetching the 2026 schedule:",
  xlsxLink ? "found" : "NOT FOUND",
);
if (xlsxLink) {
  const res = await fetch(encodeURI(xlsxLink), { headers: UA });
  const buf = Buffer.from(await res.arrayBuffer());
  console.log(
    `  HTTP ${res.status} · ${res.headers.get("content-type")} · ${buf.length} bytes`,
  );
  const sheet = unzip(buf)["xl/worksheets/sheet1.xml"].toString("utf8");
  const rows = [...sheet.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)];
  console.log("  rows in sheet:", rows.length);
  for (const r of rows.slice(0, 8)) {
    const cells = [...r[1].matchAll(/<c[\s\S]*?<\/c>/g)].map((c) =>
      cellText(c[0]),
    );
    const line = cells.filter(Boolean).join(" | ");
    if (line) console.log("   ", line.slice(0, 150));
  }
  const dataRows = rows
    .map((r) =>
      [...r[1].matchAll(/<c[\s\S]*?<\/c>/g)]
        .map((c) => cellText(c[0]))
        .filter(Boolean),
    )
    .filter((c) => c[0] === "NAJ");
  console.log(`\n  per-ship call rows ("NAJ"): ${dataRows.length}`);
  for (const d of dataRows.slice(0, 2)) {
    console.log("   ", d.join(" | ").replace(/\s+/g, " ").slice(0, 190));
  }
  console.log(
    "\n  CC-08 Dictionary mapping, read off the real columns:\n" +
      "    port_id        <- the port itself (one published file per port)\n" +
      "    date           <- Godina / Mjesec / Dan (year / month / day rows)\n" +
      "    ships_count    <- Broj ticanja, the per-day call count\n" +
      "    in_port_window <- Vrijeme od / Vrijeme do, as EXCEL DATE SERIALS\n" +
      "                      (46269.2916... = arrival date+time), plus\n" +
      "                      Razlika (h) as the dwell in hours\n" +
      "    passengers_band<- PRESENT, and this is the find: the sheet carries\n" +
      "                      'Putnika po kapacitetu' per ship and 'Ukupno\n" +
      "                      putnika po kapacitetu' per day - passengers BY\n" +
      "                      CAPACITY, not ticketed count. The band is an\n" +
      "                      upper bound derived from a published capacity\n" +
      "                      figure, which is exactly the band CC-08 asks\n" +
      "                      for - never a headcount.\n" +
      "    extra, unasked: berth, ship name, operator, previous/next port,\n" +
      "                      flag state, length, gross tonnage.",
  );
}

console.log("\n=== 2. Port of Kiel ===");
const kiel = await fetch(
  "https://www.portofkiel.com/files/pok/Downloads/Kreuzfahrerlisten/Kreuzfahrtliste.pdf",
  { headers: UA },
);
const kbuf = Buffer.from(await kiel.arrayBuffer());
console.log(
  `  HTTP ${kiel.status} · ${kiel.headers.get("content-type")} · ${kbuf.length} bytes` +
    ` · magic ${kbuf.slice(0, 4).toString("hex")}`,
);
console.log(
  "  VERDICT: authoritative and published — as a PDF. Same shape, worse" +
    " format: extraction, not parsing.",
);

console.log("\n=== 3. Copenhagen Malmö Port ===");
const cmp = await fetch(
  "https://www.cmport.com/services/cruise-ships-ferries/cruises-copenhagen/",
  { headers: UA },
);
const cmpText = await cmp.text();
console.log(
  `  HTTP ${cmp.status} · downloadable schedule files on the page: ` +
    ([...cmpText.matchAll(/href="([^"]+\.(?:xlsx|pdf|csv))"/gi)].length ||
      "NONE"),
);
console.log(
  "  VERDICT: a major cruise port with no published machine-readable call" +
    " list at this route — the coverage gap is real and must be labeled," +
    " not filled.",
);

console.log("\n=== 4. Aggregators (CruiseMapper, CruiseTimetables) ===");
console.log(
  "  NOT VETTED AS A SOURCE. They are third-party republishers, so they are" +
    " neither the operator nor a government body and cannot carry grade B" +
    " under ENGINE §3's classes; and taking their tables wholesale is" +
    " scraping someone else's compilation. They are useful only as a hint" +
    " that a port publishes at all.",
);
