#!/usr/bin/env node
// Ledger-integrity gate: proves the docs/history/**/*.md stories and
// the ledger index in docs/history/README.md stay in one-to-one
// bijection, so a dropped or orphaned ledger line goes red instead of
// leaving a silent gap (ship §7's invariant, machine-checked).
//
// The join key is the trailing "· #<pr>" — present on every ledger
// line and in every history file's frontmatter — because the pre-slug
// frozen ledger lines (`<date> · <title> → <quadrant> · #<pr>`) carry
// no slug. Where a ledger line DOES carry a slug (`· <slug> — …`), its
// slug and quadrant must agree with the file's path. Fails, listing
// each case, on: a history file whose PR has no ledger line (the drop);
// a ledger line whose PR has no file (an orphan); a ledger line with no
// trailing #PR; a quadrant that is not one of the four legend doors; a
// quadrant/slug that disagrees with the file; or a duplicate on either
// side. Zero dependencies; line endings are normalized so CRLF working
// trees behave.
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const historyDir = join(root, "docs", "history");
const ledgerPath = join(historyDir, "README.md");

// The four legend doors (history/README.md). A quadrant on a file path
// or a ledger line must be one of these.
const DOORS = new Set([
  "product/definition",
  "product/build",
  "workshop/definition",
  "workshop/mechanism",
]);

const rel = (p) => relative(root, p).replaceAll("\\", "/");
const read = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

const failures = [];

// --- walk the history stories (every .md under docs/history except
// the README index), keyed by their frontmatter PR ---
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name.endsWith(".md") && entry.name !== "README.md")
      out.push(p);
  }
  return out;
}

const filesByPr = new Map();
for (const abs of walk(historyDir)) {
  const parts = relative(historyDir, abs).replaceAll("\\", "/").split("/");
  const stem = parts.pop().replace(/\.md$/, "");
  const quadrant = parts.join("/");
  if (!DOORS.has(quadrant)) {
    failures.push(
      `${rel(abs)}: history file is outside the four legend doors (quadrant "${quadrant}")`,
    );
  }
  const m = /^pr:\s*#?(\d+)\s*$/m.exec(read(abs));
  if (!m) {
    failures.push(
      `${rel(abs)}: history file has no "pr:" frontmatter — cannot bind it to a ledger line`,
    );
    continue;
  }
  const pr = Number(m[1]);
  if (filesByPr.has(pr)) {
    failures.push(
      `${rel(abs)}: duplicate history file for PR #${pr} (also ${filesByPr.get(pr).rel})`,
    );
    continue;
  }
  filesByPr.set(pr, { rel: rel(abs), quadrant, stem });
}

// --- parse the ledger: the "- " list items under "## The ledger" ---
const ledgerText = read(ledgerPath);
let inLedger = false;
let seenHeading = false;
let ledgerCount = 0;
const linesByPr = new Map();
for (const raw of ledgerText.split("\n")) {
  if (/^##\s+/.test(raw)) {
    inLedger = /^##\s+The ledger\s*$/.test(raw);
    if (inLedger) seenHeading = true;
    continue;
  }
  if (!inLedger || !/^- /.test(raw)) continue;
  const line = raw.trimEnd();
  ledgerCount++;
  // Trailing "→ <quadrant> · #<pr>", anchored at end so in-title
  // arrows and #refs (e.g. a title citing "#128") are ignored.
  const tail = /→\s+(\S+)\s+·\s+#(\d+)$/.exec(line);
  if (!tail) {
    failures.push(
      `${rel(ledgerPath)}: ledger line has no trailing "→ <quadrant> · #<pr>": ${line}`,
    );
    continue;
  }
  const quadrant = tail[1];
  const pr = Number(tail[2]);
  if (!DOORS.has(quadrant)) {
    failures.push(
      `${rel(ledgerPath)}: ledger line #${pr} — quadrant "${quadrant}" is not one of the four legend doors`,
    );
  }
  // Optional slug: first "· <slug> — " after the date (modern shape).
  const slugM = /^-\s+\S.*?·\s+([a-z0-9][a-z0-9.-]*)\s+—\s/.exec(line);
  const slug = slugM ? slugM[1] : null;
  if (linesByPr.has(pr)) {
    failures.push(`${rel(ledgerPath)}: duplicate ledger line for PR #${pr}`);
    continue;
  }
  linesByPr.set(pr, { quadrant, slug, line });
}
if (!seenHeading) {
  failures.push(`${rel(ledgerPath)}: no "## The ledger" heading found`);
}

// --- the two-way bijection + consistency ---
for (const [pr, f] of filesByPr) {
  const l = linesByPr.get(pr);
  if (!l) {
    failures.push(
      `${f.rel}: history file for PR #${pr} has NO ledger line — a dropped line (ship §7); prepend it to ${rel(ledgerPath)}`,
    );
    continue;
  }
  if (DOORS.has(l.quadrant) && l.quadrant !== f.quadrant) {
    failures.push(
      `${f.rel}: quadrant mismatch — file lives in "${f.quadrant}" but ledger line #${pr} says "${l.quadrant}"`,
    );
  }
  if (l.slug !== null && l.slug !== f.stem) {
    failures.push(
      `${f.rel}: slug mismatch — file stem "${f.stem}" but ledger line #${pr} slug "${l.slug}"`,
    );
  }
}
for (const [pr, l] of linesByPr) {
  if (!filesByPr.has(pr)) {
    failures.push(
      `${rel(ledgerPath)}: ledger line #${pr} points at no history file — an orphan: ${l.line}`,
    );
  }
}

for (const f of failures) console.error(`LEDGER ${f}`);
if (failures.length === 0) {
  console.log(
    `${filesByPr.size} history files ↔ ${linesByPr.size} ledger lines, in sync.`,
  );
} else {
  console.log(
    `${filesByPr.size} history files, ${ledgerCount} ledger lines — ${failures.length} problem(s).`,
  );
}
process.exit(failures.length === 0 ? 0 : 1);
