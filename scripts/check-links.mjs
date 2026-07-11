#!/usr/bin/env node
// Link-integrity gate for the docs corpus (the weave defends itself).
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
  const linkRe = /!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
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

for (const f of failures) console.error(`BROKEN ${f}`);
console.log(
  `${checked} internal links checked across ${files.length} md files — ${failures.length} broken.`,
);
process.exit(failures.length === 0 ? 0 : 1);
