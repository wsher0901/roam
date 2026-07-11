#!/usr/bin/env node
// UserPromptSubmit hook: the close-lock. FULL handoff and liftoff end
// by writing .claude/session-closed as their LAST act; a session that
// sees the flag has been released and must reject further driving.
// Exit 2 blocks the prompt (stderr carries the reason). Every other
// path exits 0 silently — a live session is never slowed or failed.
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

const root = sh("git rev-parse --show-toplevel");
if (!root) process.exit(0);

const flag = join(root, ".claude", "session-closed");
if (!existsSync(flag)) process.exit(0);

let content = "";
try {
  content = readFileSync(flag, "utf8").trim();
} catch {
  // unreadable flag still means closed
}
console.error(
  `${content ? content + " " : ""}— this session is closed. Open a fresh \`claude\` to continue.`
);
process.exit(2);
