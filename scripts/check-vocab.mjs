#!/usr/bin/env node
// Vocabulary gate — the Status table must obey its own checker.
//
// TEMPLATE's Status vocabulary is the table every lane copies from. If a
// row is written without a date slot, a lane that copies it VERBATIM
// fails `check:memory` for doing exactly what the table said — the table
// becomes a trap. That happened twice on 2026-08-04 (flight 2's lanes A
// and B, independently), was filed naming TWO rows, and the 2026-09-10
// audit found FIVE. Four were found by reasoning; the fifth, `held`, was
// found only by walking every row mechanically. Hence this file.
//
// It validates the TABLE, not anyone's memory: for each row it fills the
// placeholders with plausible values, writes a throwaway memory carrying
// that Status, and asks check-memory.mjs. A row that goes red fails CI.
// Zero dependencies; CRLF-safe; the probe file is always cleaned up.
import { readFileSync, writeFileSync, unlinkSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const templatePath = resolve(root, "docs/memory/TEMPLATE.md");
const probePath = resolve(root, "docs/memory/zz-vocab-probe.md");

// Rows the checker is not expected to see, with the reason. `shipped` is
// written by ship's weld at the instant the memory MOVES to
// record/history/, so check:memory never reads it.
const EXEMPT = new Map([["shipped", "written as the memory leaves docs/memory/"]]);

const text = readFileSync(templatePath, "utf8").replace(/\r\n/g, "\n");
const rows = text
  .split("\n")
  .filter((l) => /^\| [a-z]/.test(l))
  .map((l) => l.split("|")[1].trim())
  .filter(Boolean);

if (rows.length === 0) {
  console.error("VOCAB docs/memory/TEMPLATE.md: no Status rows found");
  process.exit(1);
}

const fill = (s) =>
  s
    .replace(/<vehicle · date>/g, "local · 2026-01-01")
    .replace(/<date · reason>/g, "2026-01-01 · a reason")
    .replace(/<new vehicle · date>/g, "cloud · 2026-01-01")
    .replace(/<reason · date>/g, "a reason · 2026-01-01")
    .replace(/<vehicle or url>/g, "local")
    .replace(/<new vehicle>/g, "cloud")
    .replace(/<date>/g, "2026-01-01")
    .replace(/<reason>/g, "a reason")
    .replace(/<why>/g, "a reason")
    .replace(/<by>/g, "another-bench")
    .replace(/#N/g, "#123");

const memory = (status) =>
  [
    "---",
    "type: memory",
    "id: zz-vocab-probe",
    "updated: 2026-01-01 · vocab gate · ci",
    "---",
    "",
    "# zz-vocab-probe — the vocabulary gate's probe",
    "",
    "## Status",
    "",
    status,
    "",
    "## What this task is",
    "A throwaway written by check:vocab.",
    "",
    "## Pending issues",
    "none",
    "",
    "## Left / idle",
    "nothing",
    "",
    "## The story",
    "Written and deleted by the vocabulary gate.",
    "",
    "## Where to look",
    "scripts/check-vocab.mjs",
    "",
  ].join("\n");

const failures = [];
let exempt = 0;

try {
  for (const row of rows) {
    const state = row.split("—")[0].split("·")[0].trim();
    if (EXEMPT.has(state)) {
      exempt++;
      continue;
    }
    const status = fill(row);
    writeFileSync(probePath, memory(status), "utf8");
    let ok = false;
    try {
      const out = execFileSync("node", [resolve(root, "scripts/check-memory.mjs")], {
        encoding: "utf8",
        cwd: root,
      });
      ok = /all valid/.test(out);
    } catch {
      ok = false;
    }
    if (!ok) failures.push(row);
  }
} finally {
  if (existsSync(probePath)) unlinkSync(probePath);
}

for (const f of failures) {
  console.error(
    `VOCAB docs/memory/TEMPLATE.md: row "${f}" fails check:memory as written — a lane copying it verbatim goes red for obeying the table`,
  );
}
console.log(
  `${rows.length} Status rows checked (${exempt} exempt) — ${failures.length} would fail CI.`,
);
process.exit(failures.length === 0 ? 0 : 1);
