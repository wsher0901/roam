#!/usr/bin/env node
// SessionStart hook: sync main + inject the dashboard into context.
// Cross-platform (Windows, macOS, Linux, cloud). Must NEVER block or
// fail a session: every step degrades gracefully and we always exit 0.
import { execSync, execFileSync } from "node:child_process";
import { readFileSync, readdirSync, existsSync, unlinkSync } from "node:fs";
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

// Anchor to the repo root so worktrees and odd CWDs behave.
const root = sh("git rev-parse --show-toplevel");
if (!root) {
  console.log("[hook] not inside a git repo — skipping start hook.");
  process.exit(0);
}
process.chdir(root);

// A new session is always live: clear any close-lock a finished
// ritual left behind (handoff/liftoff write it as their last act).
try {
  unlinkSync(join(root, ".claude", "session-closed"));
} catch {
  // absent (the normal case) or unremovable — proceed either way
}

// Prune stale remote-tracking refs so `git branch -r` tells the
// truth about origin (every launch, any branch; offline degrades
// gracefully like the pull below).
sh("git fetch --prune --quiet");

const branch = sh("git rev-parse --abbrev-ref HEAD") ?? "unknown";
const dirty = sh("git status --porcelain");

// Auto-remove local branches whose upstream is gone (welded
// elsewhere). Lines marked '+' are checked out in another worktree
// (a live local lane) and '*' is this session's branch — both are
// skipped by construction; main is never touched. Deleted tips stay
// reflog-recoverable (~90 days).
const goneLocals = (sh("git branch -vv") ?? "")
  .split("\n")
  .filter((l) => l.startsWith("  ") && l.includes(": gone]"))
  .map((l) => l.trim().split(/\s+/)[0])
  .filter((b) => b && b !== "main");
for (const b of goneLocals) {
  const tip = shFile("git", ["rev-parse", "--short", b]);
  const gone = shFile("git", ["branch", "-D", b]);
  console.log(
    gone !== null
      ? `[hook] removed local branch ${b} (${tip}) — welded elsewhere.`
      : `[hook] could not remove ${b} — leaving it; mention it in the briefing.`
  );
}

// Lane liveness per sibling worktree (D-042; pickup §3 consumes the
// verdict). Commits are the heartbeat: a terminal memory Status
// (parked · failed · held · shipped · superseded) means RECLAIMABLE —
// the wake-lock kills any straggler; otherwise a commit within the
// staleness window means LIVE (hands off), and silence past it means
// RECLAIMABLE. The window's single home is parallel-lanes §Canary
// (~30 min) — keep this constant in step with it.
const STALE_MINUTES = 30;
const TERMINAL_RE = /\b(parked|failed|held|shipped|superseded)\b/i;
const norm = (p) => p.replace(/\\/g, "/").toLowerCase();
const wtBlocks = (sh("git worktree list --porcelain") ?? "")
  .split(/\n\s*\n/)
  .filter(Boolean);
for (const block of wtBlocks) {
  const wtPath = /^worktree (.+)$/m.exec(block)?.[1];
  if (!wtPath || norm(wtPath) === norm(root)) continue; // self
  const wtBranch =
    /^branch refs\/heads\/(.+)$/m.exec(block)?.[1] ?? "(detached)";
  const ct = shFile("git", ["-C", wtPath, "log", "-1", "--format=%ct"]);
  const ageMin = ct
    ? Math.round((Date.now() / 1000 - Number(ct)) / 60)
    : null;
  // The worktree's own memory Status word (a lane carries one task).
  let statusWord = "—";
  try {
    const memDir = join(wtPath, "docs", "memory");
    const mems = readdirSync(memDir).filter(
      (f) => f.endsWith(".md") && f !== "README.md" && f !== "TEMPLATE.md"
    );
    if (mems.length === 1) {
      const body = readFileSync(join(memDir, mems[0]), "utf8");
      const m = /^## Status\s*\r?\n+(.+)$/m.exec(body);
      if (m) statusWord = m[1].trim().split("—")[0].trim();
    }
  } catch {
    // no memory readable — the heartbeat alone decides
  }
  const verdict = TERMINAL_RE.test(statusWord)
    ? "RECLAIMABLE (terminal Status)"
    : ageMin !== null && ageMin <= STALE_MINUTES
      ? "LIVE — hands off"
      : "RECLAIMABLE (silent past the window)";
  console.log(
    `[hook] lane worktree ${wtBranch} · last commit ${
      ageMin === null ? "unknown" : `${ageMin} min ago`
    } · Status: ${statusWord} · verdict: ${verdict} (parallel-lanes §Liveness).`
  );
}

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
  "\n[hook] Briefing directive: if this is the baton-holder's session (the" +
    " founder is commanding it — control tower on the ground, cockpit in" +
    " flight — not a dispatched lane or background agent)," +
    " render the /pickup briefing before answering the founder's first" +
    " message — do not wait to be asked. Dispatched lanes and background" +
    " agents skip the briefing and proceed with their kickoff task."
);
process.exit(0);
