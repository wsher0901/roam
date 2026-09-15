#!/usr/bin/env node
// Two gates for the docs corpus, in one CI step (the weave defends itself).
//
// PASS 1 — LINK INTEGRITY: every internal link resolves to a real file and a
// real heading. It proves a destination EXISTS; it cannot prove the
// destination is the RIGHT one. That blind spot is real, and is named in
// ATLAS's dashed box rather than papered over here.
//
// PASS 2 — THE WEAVE GATE: every D-number in the living corpus is a link.
//
// Pass 1's own description follows.
// Walks every .md under docs/ plus the root stubs, resolves every
// internal link (path + #anchor) against real files and real heading
// slugs (GitHub slugger rules, duplicate-heading aware), and exits
// nonzero listing every failure. External URLs and the literal "…"
// placeholders (specs/TEMPLATE.md) are ignored. Zero dependencies;
// line endings are normalized so CRLF working trees behave.
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name.endsWith(".md")) out.push(p);
  }
  return out;
}

const files = [
  ...walk(join(root, "docs")),
  ...["CLAUDE.md", "AGENTS.md", "README.md"]
    .map((f) => join(root, f))
    .filter((f) => existsSync(f)),
];

function read(p) {
  return readFileSync(p, "utf8").replace(/\r\n/g, "\n");
}

function stripCodeFences(text) {
  return text.replace(/^```[\s\S]*?^```/gm, "");
}

// GitHub's heading slugger: lowercase; drop everything that is not a
// letter, number, space, hyphen, or underscore; spaces become
// hyphens; repeated headings get -1, -2, … suffixes.
function slugsOf(mdPath) {
  const seen = new Map();
  const slugs = new Set();
  for (const line of stripCodeFences(read(mdPath)).split("\n")) {
    const m = /^#{1,6}\s+(.*)/.exec(line);
    if (!m) continue;
    const heading = m[1].trim().replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
    let slug = heading
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s_-]/gu, "")
      .replace(/\s/g, "-");
    const n = seen.get(slug) ?? 0;
    seen.set(slug, n + 1);
    if (n > 0) slug = `${slug}-${n}`;
    slugs.add(slug);
  }
  return slugs;
}

const slugCache = new Map();
function slugsCached(p) {
  if (!slugCache.has(p)) slugCache.set(p, slugsOf(p));
  return slugCache.get(p);
}

let checked = 0;
const failures = [];
for (const abs of files) {
  const rel = abs.slice(root.length + 1).replaceAll("\\", "/");
  const text = stripCodeFences(read(abs));
  // Link text may nest one bracket pair (e.g. a backticked `[TAG]`);
  // a text-blind `[^\]]*` silently skips such links entirely
  // (found by the record-shelf bench's critic, 2026-07-27).
  const linkRe = /!?\[(?:[^[\]]|\[[^\]]*\])*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    const target = m[1];
    if (/^(https?:|mailto:)/i.test(target)) continue;
    if (target.includes("…")) continue; // template placeholders
    checked++;
    const [pathPart, anchor] = target.split("#");
    const targetAbs =
      pathPart === ""
        ? abs
        : resolve(dirname(abs), decodeURIComponent(pathPart));
    if (!existsSync(targetAbs)) {
      failures.push(`${rel}: (${target}) — file not found`);
      continue;
    }
    if (anchor === undefined) continue;
    if (statSync(targetAbs).isDirectory()) {
      failures.push(`${rel}: (${target}) — anchor on a directory`);
      continue;
    }
    if (!targetAbs.toLowerCase().endsWith(".md")) continue;
    if (!slugsCached(targetAbs).has(anchor.toLowerCase())) {
      failures.push(`${rel}: (${target}) — no such heading`);
    }
  }
}

// ── PASS 2: the weave gate ────────────────────────────────────────────────
// LAWS §Knowledge & tracking: "every mention of a roadmap ID, D-number,
// fact/param ID, or sibling doc is a markdown link, never plain text."
// D-numbers are the half of that rule a machine can check without judgment,
// so that half becomes a gate instead of a habit. Before this existed a
// plain-text D-number passed CI green — proved by probe on 2026-09-10.
//
// SCOPE is the LIVING corpus only: a doc a reader is sent to today. The
// record is deliberately outside it — record/history/, chronicle/,
// record/specs/ and DECISIONS.md are frozen narratives, and back-filling
// links into a shipped story would rewrite the past to satisfy a present
// convention. DECISIONS is also where every anchor POINTS; a file citing its
// own neighbours by heading needs no weave.
const LIVING_ROOTS = [
  // the living singletons
  "docs/LAWS.md",
  "docs/HOME.md",
  "docs/ROADMAP.md",
  "docs/ENGINE.md",
  "docs/FOUNDATION.md",
  "docs/DESIGN.md",
  "docs/SETUP.md",
  "docs/DASHBOARD.md",
  "docs/IDEAS.md",
  // the four box masters (D-064)
  "docs/WEB-INSTRUCTIONS.md",
  "docs/COCKPIT-CHARTER.md",
  "docs/LANE-WORKER.md",
  "docs/DESIGN-KICKOFF.md",
  // and the two living trees
  "docs/data",
  "docs/skills",
];

const livingFiles = LIVING_ROOTS.flatMap((r) => {
  const abs = join(root, r);
  if (!existsSync(abs)) return [];
  return statSync(abs).isDirectory() ? walk(abs) : [abs];
});

// EXEMPT, each for its own reason:
//   a markdown link     — that is the rule being satisfied
//   a heading           — an entry title, or a doc quoting one
//   a fenced code block — literal text, not prose
//   an inline code span — also literal, and a link cannot live inside one:
//     ship §7 writes the exact string `synthesis: deferred — D-086` into a
//     commit message and a frontmatter field. Linking it would corrupt the
//     value the weld actually writes.
const blanks = (m) => " ".repeat(m.length);
const inlineCodeRe = /`[^`]*`/g;
const anyLinkRe = /!?\[(?:[^[\]]|\[[^\]]*\])*\]\([^)\s]+(?:\s+"[^"]*")?\)/g;
const dNumberRe = /D-\d{3,}/g;

const unwoven = [];
for (const abs of livingFiles) {
  const rel = abs.slice(root.length + 1).replaceAll("\\", "/");
  let fenced = false;
  read(abs)
    .split("\n")
    .forEach((line, i) => {
      if (/^\s*(```|~~~)/.test(line)) {
        fenced = !fenced;
        return;
      }
      if (fenced) return;
      if (/^\s*#{1,6}\s/.test(line)) return;
      const masked = line
        .replace(inlineCodeRe, blanks)
        .replace(anyLinkRe, blanks);
      let m;
      dNumberRe.lastIndex = 0;
      while ((m = dNumberRe.exec(masked)) !== null) {
        unwoven.push(
          `${rel}:${i + 1}: ${m[0]} is not a link — ${line.trim().slice(0, 72)}`,
        );
      }
    });
}

for (const f of failures) console.error(`BROKEN ${f}`);
for (const f of unwoven) console.error(`UNWOVEN ${f}`);
console.log(
  `${checked} internal links checked across ${files.length} md files — ${failures.length} broken.`,
);
console.log(
  `D-numbers checked across ${livingFiles.length} living docs — ${unwoven.length} bare.`,
);
process.exit(failures.length === 0 && unwoven.length === 0 ? 0 : 1);
