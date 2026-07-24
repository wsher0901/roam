#!/usr/bin/env node
// UserPromptSubmit hook: the close-lock, softened (session-lifecycle
// bench). FULL handoff and liftoff end by writing
// .claude/session-closed as their LAST act — that record is
// unchanged. What softened is the wall: a closed session is
// READ-ONLY CONVERSATIONAL (closed ≠ dead), so the prompt passes
// stamped with the closed-session doctrine (exit 0, stdout becomes
// context) instead of being rejected. Every other path exits 0
// silently — a live session is never slowed or failed.
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
console.log(
  `[close-lock] ${content || "This session was closed by a ritual"} — ` +
    "CLOSED SESSION, read-only conversational (closed ≠ dead): answer " +
    "by FRESH derivation from origin (state, explanations, pointers), " +
    "name the current baton-holder from the board, and REFUSE every " +
    "write, command act, and ritual — no commits, no pushes, no " +
    "merges, no board edits, no dispatch. A superseded cockpit " +
    "answers only with its tombstone (charter R4b). To work, open a " +
    "fresh `claude` session.",
);
process.exit(0);
