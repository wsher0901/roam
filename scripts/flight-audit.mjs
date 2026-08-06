#!/usr/bin/env node
// The flight reflection audit — machine-checkable, re-runnable, and
// deliberately NOT a CI gate. It answers one question about each cloud
// flight: did the workshop actually LEARN from it, or only fly it?
//
// Three checks per flight:
//   A  a RECORD exists — the probe, the history entries, or both.
//   B  every CHRONICLE story that carries the flight reads WRITTEN in
//      the census, and the story itself names the flight.
//   C  every FINDING the flight produced traces to a CLOSED line or an
//      open line carrying a STANDING clause. Anything else is an
//      ORPHAN — a lesson the flight paid for and nobody kept.
//
// The zero-orphan count at the end is the proof the audit exists for.
//
// TWO MATCHING RULES, both learned the hard way and both instances of
// THE ENUMERATION LAW (docs/LAWS.md §Knowledge & tracking):
//   * an inbox item is matched against WHITESPACE-NORMALIZED text,
//     because its key phrases WRAP across lines and a raw-text match
//     silently misses them;
//   * a census row is a PIPE-TABLE line carrying the story's link
//     target. Matching the bare filename also matches a longer one;
//     matching the link target alone also catches PROSE down-links,
//     which are not rows. A substring of a rendering is not a case.
//
// Not wired into CI on purpose: this audits a JUDGEMENT (was the
// lesson kept?), and a gate that goes red on an honest "still open"
// would teach the wrong reflex. Run it by hand: `npm run audit:flights`.
// Zero dependencies; line endings normalized so CRLF trees behave.
import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8").replace(/\r\n/g, "\n");
const has = (p) => existsSync(join(root, p));

// The four flights, with their record anchors DERIVED from the ledger
// and the probe shelf rather than recalled. A flight with no anchor
// here is not a passing flight — it is an unaudited one.
const FLIGHTS = [
  {
    n: 1,
    name: "the shakedown (2026-08-03)",
    records: ["docs/record/probes/flight-1-shakedown.md"],
    chronicle: ["docs/chronicle/canary-handshake.md"],
  },
  {
    n: 2,
    name: "the three-bench fleet (2026-08-04)",
    records: [
      "docs/record/history/workshop/mechanism/canary-ack-commit.md",
      "docs/record/history/workshop/mechanism/cloud-git-identity.md",
      "docs/record/history/workshop/definition/home-hook-row.md",
    ],
    chronicle: ["docs/chronicle/land.md"],
  },
  {
    n: 3,
    name: "the desk takeover (2026-08-04)",
    records: ["docs/record/history/workshop/definition/template-date-row.md"],
    chronicle: ["docs/chronicle/land.md"],
  },
  {
    n: 4,
    name: "the failure drill / the freeze (2026-08-04 → 05)",
    records: [
      "docs/record/probes/flight-4-freeze.md",
      "docs/record/history/workshop/mechanism/flight-4-freeze.md",
    ],
    chronicle: ["docs/chronicle/wake-lock.md", "docs/chronicle/land.md"],
  },
];

const ideas = read("docs/IDEAS.md");
const section = (from, to) =>
  ideas.slice(ideas.indexOf(from), to ? ideas.indexOf(to) : undefined);

// One item = one bullet and everything indented under it, flattened.
const items = (text) =>
  text
    .split(/\n(?=- (?:⏳|🟢|⚪) )/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter((p) => p.startsWith("- "));

const openItems = items(section("## Open", "## Closed"));
const closedItems = items(section("## Closed"));
const index = read("docs/chronicle/INDEX.md").split("\n");

const failures = [];
let allOpen = 0;
let allOrphans = [];

for (const f of FLIGHTS) {
  const tag = new RegExp(`flight ${f.n}\\b`, "i");
  console.log(`\nFLIGHT ${f.n} — ${f.name}`);

  const missing = f.records.filter((p) => !has(p));
  console.log(
    `  A record      ${missing.length === 0 ? "PASS" : "FAIL"}  (${f.records.length} anchor${f.records.length === 1 ? "" : "s"})`,
  );
  if (missing.length)
    failures.push(`flight ${f.n}: no record at ${missing.join(", ")}`);

  for (const c of f.chronicle) {
    const name = basename(c);
    const target = new RegExp(`\\]\\(${name.replace(/\./g, "\\.")}\\)`);
    const rows = index.filter(
      (l) => l.trimStart().startsWith("|") && target.test(l),
    );
    const written = rows.length === 1 && rows[0].includes("WRITTEN");
    const carries = has(c) && tag.test(read(c));
    const ok = written && carries;
    console.log(
      `  B ${name.padEnd(22)}${ok ? "PASS" : "FAIL"}  (rows=${rows.length} · WRITTEN=${written} · story names the flight=${carries})`,
    );
    if (!ok)
      failures.push(
        `flight ${f.n}: ${name} rows=${rows.length} written=${written} names-flight=${carries}`,
      );
  }

  const mineOpen = openItems.filter((i) => tag.test(i));
  const mineClosed = closedItems.filter((i) => tag.test(i));
  const orphans = mineOpen.filter((i) => !i.includes("**STANDING:**"));
  console.log(
    `  C findings    ${orphans.length === 0 ? "PASS" : "FAIL"}  (${mineOpen.length} open · ${mineClosed.length} closed · ${orphans.length} orphan)`,
  );
  allOrphans = allOrphans.concat(orphans);
}

// The zero-orphan grep — the proof this audit exists to produce.
const flightBorn = openItems.filter((i) => /flight [1-4]\b/i.test(i));
allOpen = flightBorn.length;
const unannotated = flightBorn.filter((i) => !i.includes("**STANDING:**"));
console.log(
  `\nZERO-ORPHAN GREP: ${allOpen} flight-born OPEN lines, ${unannotated.length} without a STANDING clause`,
);
for (const o of unannotated) console.error(`  ORPHAN ${o.slice(0, 110)}`);
for (const x of failures) console.error(`  FAIL ${x}`);
console.log(`CHECK FAILURES: ${failures.length}`);
process.exit(failures.length === 0 && unannotated.length === 0 ? 0 : 1);
