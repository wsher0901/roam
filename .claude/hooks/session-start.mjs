#!/usr/bin/env node
// SessionStart hook: sync main + inject the dashboard into context.
// Cross-platform (Windows, macOS, Linux, cloud). Must NEVER block or
// fail a session: every step degrades gracefully and we always exit 0.
import { execSync } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

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

// Anchor to the repo root so worktrees and odd CWDs behave.
const root = sh("git rev-parse --show-toplevel");
if (!root) {
  console.log("[hook] not inside a git repo — skipping start hook.");
  process.exit(0);
}
process.chdir(root);

const branch = sh("git rev-parse --abbrev-ref HEAD") ?? "unknown";
const dirty = sh("git status --porcelain");

// Only fast-forward main, and only when the tree is clean —
// never yank the rug out from under a lane branch or WIP.
if (branch === "main" && !dirty) {
  const pulled = sh("git pull --ff-only --quiet");
  console.log(
    pulled !== null
      ? "[hook] main synced with origin."
      : "[hook] pull failed (offline or diverged) — using local state."
  );
} else {
  console.log(
    `[hook] on ${branch}${dirty ? " with uncommitted changes" : ""} — pull skipped.`
  );
}

// Inject the dashboard (the state surface).
const dashboard = join(root, "docs", "DASHBOARD.md");
if (existsSync(dashboard)) {
  console.log("\n===== docs/DASHBOARD.md =====");
  console.log(readFileSync(dashboard, "utf8"));
} else {
  console.log("[hook] docs/DASHBOARD.md not found.");
}

// Briefing directive for the session that just started.
console.log(
  "\n[hook] Briefing directive: if this is a cockpit session (the founder" +
    " is driving it directly, not a dispatched lane or background agent)," +
    " render the /pickup briefing before answering the founder's first" +
    " message — do not wait to be asked. Dispatched lanes and background" +
    " agents skip the briefing and proceed with their kickoff task."
);
process.exit(0);
