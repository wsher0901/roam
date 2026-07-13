#!/usr/bin/env node
// SessionEnd hook: safety net. A session may never strand work on one
// machine. On a lane branch: commit any WIP as an explicit wip commit
// and push (setting upstream if needed). On main: do nothing — main is
// PR-only and never receives auto-commits. Always exits 0; if the
// network is down, work stays committed locally and the next push
// carries it.
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

if (sh("git status --porcelain")) {
  sh("git add -A");
  sh('git commit -m "wip: auto-save on session end (hook)"');
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
