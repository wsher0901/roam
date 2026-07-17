#!/usr/bin/env node
// Memory-format gate: proves every task memory in docs/memory/ still
// obeys the locked format (docs/memory/TEMPLATE.md), so a memory that
// drifts — a dropped section, a placeholder left unresolved, a Status
// with no date — goes red instead of rotting silently. The memory is
// the handshake surface the lane law reads on every wake; a malformed
// one mis-attributes a seat or hides a claim, so the format is
// machine-checked the same way the ledger's bijection is (ship §1's
// mirror, beside check:ledger).
//
// Scope: every docs/memory/*.md EXCEPT README.md and TEMPLATE.md.
// Zero files in scope is an honest, vacuous pass. Per file it checks:
//   1. FRONTMATTER — a `---` fence closed by a second `---`, carrying
//      `type: memory`, a non-empty `id:`, and a non-empty `updated:`.
//   2. HEADINGS — the six TEMPLATE sections, each at `## ` level, all
//      present and in TEMPLATE order.
//   3. STATUS DATE — the `## Status` body carries at least one
//      YYYY-MM-DD stamp; the latest such date is reported.
//   4. PLACEHOLDERS — after stripping backtick spans, no unresolved
//      TEMPLATE-style `<placeholder>` remains anywhere in the file.
// One honest line per failing file names every failed rule; exit 1 if
// any file fails. Zero dependencies; line endings are normalized so
// CRLF working trees behave.
import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const memoryDir = join(root, "docs", "memory");

// The six locked sections, in TEMPLATE order.
const HEADINGS = [
  "Status",
  "What this task is",
  "Pending issues",
  "Left / idle",
  "The story",
  "Where to look",
];

// A date stamp anywhere in the Status body (ISO dates sort as strings).
const DATE = /\d{4}-\d{2}-\d{2}/g;
// An unresolved TEMPLATE-style placeholder, after backtick spans go.
const PLACEHOLDER = /<[a-z][^<>\n]{0,60}>/i;

const rel = (p) => relative(root, p).replaceAll("\\", "/");
const read = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

// --- gather the memory files in scope ---
const files = readdirSync(memoryDir, { withFileTypes: true })
  .filter(
    (e) =>
      e.isFile() &&
      e.name.endsWith(".md") &&
      e.name !== "README.md" &&
      e.name !== "TEMPLATE.md",
  )
  .map((e) => join(memoryDir, e.name))
  .sort();

if (files.length === 0) {
  console.log("0 memory files — nothing to validate.");
  process.exit(0);
}

const failures = []; // { file, problems: [...] }
const passes = []; // { file, date }

for (const abs of files) {
  const text = read(abs);
  const lines = text.split("\n");
  const problems = [];

  // 1. FRONTMATTER — opens with `---`, closed by a second `---`.
  if (lines[0] !== "---") {
    problems.push("no opening `---` frontmatter fence");
  } else {
    let close = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === "---") {
        close = i;
        break;
      }
    }
    if (close === -1) {
      problems.push("frontmatter `---` fence is never closed");
    } else {
      const fm = lines.slice(1, close);
      if (!fm.some((l) => /^type:\s*memory\s*$/.test(l))) {
        problems.push("frontmatter missing `type: memory`");
      }
      if (!fm.some((l) => /^id:\s*\S/.test(l))) {
        problems.push("frontmatter missing a non-empty `id:`");
      }
      if (!fm.some((l) => /^updated:\s*\S/.test(l))) {
        problems.push("frontmatter missing a non-empty `updated:`");
      }
    }
  }

  // 2. HEADINGS — all six present at `## ` level, in TEMPLATE order.
  const headingLine = {}; // heading -> line index
  for (const h of HEADINGS) {
    const re = new RegExp(
      `^##\\s+${h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`,
    );
    const idx = lines.findIndex((l) => re.test(l));
    if (idx === -1) {
      problems.push(`missing heading '## ${h}'`);
    } else {
      headingLine[h] = idx;
    }
  }
  // Order check among the headings that ARE present.
  const present = HEADINGS.filter((h) => h in headingLine);
  for (let i = 1; i < present.length; i++) {
    if (headingLine[present[i]] < headingLine[present[i - 1]]) {
      problems.push(
        `heading '## ${present[i]}' is out of TEMPLATE order (before '## ${present[i - 1]}')`,
      );
    }
  }

  // 3. STATUS DATE — the `## Status` body carries a YYYY-MM-DD stamp.
  let latestDate = null;
  if ("Status" in headingLine) {
    const start = headingLine.Status + 1;
    let end = lines.length;
    for (let i = start; i < lines.length; i++) {
      if (/^##\s+/.test(lines[i])) {
        end = i;
        break;
      }
    }
    const body = lines.slice(start, end).join("\n");
    const dates = body.match(DATE);
    if (!dates) {
      problems.push("Status carries no date");
    } else {
      latestDate = dates.sort().at(-1);
    }
  }

  // 4. PLACEHOLDERS — none survive after backtick spans are stripped.
  const stripped = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`\n]*`/g, " ");
  const ph = PLACEHOLDER.exec(stripped);
  if (ph) {
    problems.push(`unresolved placeholder '${ph[0]}'`);
  }

  if (problems.length) failures.push({ file: rel(abs), problems });
  else passes.push({ file: rel(abs), date: latestDate });
}

for (const f of failures) {
  console.error(`MEMORY ${f.file}: ${f.problems.join("; ")}`);
}

if (failures.length === 0) {
  console.log(`${passes.length} memory files checked — all valid`);
  for (const p of passes) {
    console.log(`  ${p.file} — Status ${p.date}`);
  }
} else {
  console.log(
    `${files.length} memory files, ${failures.length} invalid — ${passes.length} valid.`,
  );
}
process.exit(failures.length === 0 ? 0 : 1);
