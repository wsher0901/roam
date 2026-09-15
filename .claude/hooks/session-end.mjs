#!/usr/bin/env node
// SessionEnd hook: safety net. A session may never strand work on one
// machine. On a lane branch: commit any WIP as an explicit wip commit
// and push (setting upstream if needed). On main: do nothing — main is
// PR-only and never receives auto-commits. Always exits 0; if the
// network is down, work stays committed locally and the next push
// carries it.
//
// TRACKED CHANGES ONLY (`git add -u`). An untracked path is NAMED in the
// commit message and left in the working tree — never staged. A safety net
// exists to stop work being stranded, not to decide unreviewed that a stray
// file belongs in the repo; `git add -A` did the latter, and on 2026-09-10
// it swept an unwired script and a doc edit into main's history behind a
// message that said only "wip". Naming the file preserves the safety-net
// purpose — the next seat reads the commit and knows exactly what is still
// sitting on the other machine.
import { execSync, execFileSync } from "node:child_process";

function sh(cmd) {
  try {
    return execSync(cmd, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch {
    return null;
  }
}

// For commands carrying a variable (e.g. a branch name): argument
// array + no shell, so metacharacters in ref names can't inject.
function shFile(cmd, args) {
  try {
    return execFileSync(cmd, args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    }).trim();
  } catch {
    return null;
  }
}

const root = sh("git rev-parse --show-toplevel");
if (!root) process.exit(0);
process.chdir(root);

const branch = sh("git rev-parse --abbrev-ref HEAD");
if (!branch || branch === "HEAD" || branch === "main") process.exit(0);

// Read the untracked list BEFORE staging, so the message names what the
// hook deliberately declined to carry.
const untracked = (sh("git ls-files --others --exclude-standard") || "")
  .split("\n")
  .map((f) => f.trim())
  .filter(Boolean);

if (sh("git status --porcelain")) {
  sh("git add -u");
  // Only untracked files changed — nothing is staged, so there is nothing
  // to commit. Say so rather than committing an empty tree.
  if (sh("git diff --cached --name-only")) {
    const body = untracked.length
      ? `\n\nUNTRACKED — left in the working tree, deliberately not committed:\n` +
        untracked.map((f) => `  ${f}`).join("\n") +
        `\n\nThey are still on this machine only. Add them on purpose, or delete them.`
      : "";
    shFile("git", ["commit", "-m", `wip: auto-save on session end (hook)${body}`]);
  }
}

if (untracked.length) {
  console.log(
    `[hook] session end: ${untracked.length} untracked path(s) NOT committed — ${untracked.join(", ")}`
  );
}

const hasUpstream = sh("git rev-parse --abbrev-ref @{upstream}");
// Gone-guard: tracking was configured but the remote branch no
// longer exists — it was welded elsewhere. Never resurrect it.
const trackingConfigured = shFile("git", [
  "config",
  `branch.${branch}.merge`,
]);
if (trackingConfigured && hasUpstream === null) {
  console.log(
    `[hook] session end: ${branch} was welded elsewhere (upstream gone) — push skipped.`
  );
  process.exit(0);
}
const pushed =
  hasUpstream !== null
    ? sh("git push --quiet")
    : shFile("git", ["push", "--quiet", "-u", "origin", branch]);
console.log(
  pushed !== null
    ? `[hook] session end: ${branch} pushed to origin.`
    : `[hook] session end: push failed (offline?) — work is committed locally on ${branch}.`
);
process.exit(0);
