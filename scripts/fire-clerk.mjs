#!/usr/bin/env node
// Clerk igniter: fires the "clerk" routine via its API trigger so
// liftoff can raise the away surface in one command (SETUP §Once and
// done — cloud accounts, Clerk routine; liftoff §4). Reads the
// machine-local secrets from .env.local — CLERK_FIRE_TOKEN (the
// per-routine bearer token, sk-ant-oat01-…, generated ONCE in the
// routine's API-trigger UI) and CLERK_ROUTINE_ID (the trig_… id) —
// and POSTs the documented routine-fire endpoint. An optional message
// may ride along: `npm run fire:clerk -- "arm the watch"` (it reaches
// the clerk as untrusted <routine-fire-payload> text).
//
// Endpoint + headers verified against the live docs 2026-07-17
// (platform.claude.com/docs/en/api/claude-code/routines-fire). The
// beta header is EXPERIMENTAL and dated — a 400 naming it means
// re-verify against that page before editing anything else.
//
// Every fire consumes one daily-cap routine run (the same per-account
// cap the lane routine draws on) and is INVISIBLE to
// `npm run count:runs`, the label-event proxy — liftoff §2 budgets
// count:runs + fires performed this sitting. Retries are NOT
// automatic: the endpoint has no idempotency key, so a blind retry
// could spawn a second session. On any failure this script exits
// nonzero and says why; the manual charter paste (SETUP) is the
// fallback.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function readEnvLocal() {
  let text;
  try {
    text = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
  } catch {
    return {};
  }
  const values = {};
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) values[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return values;
}

const env = readEnvLocal();
const token = process.env.CLERK_FIRE_TOKEN ?? env.CLERK_FIRE_TOKEN;
const routineId = process.env.CLERK_ROUTINE_ID ?? env.CLERK_ROUTINE_ID;

if (!token || !routineId) {
  console.error(
    "fire-clerk: CLERK_FIRE_TOKEN and CLERK_ROUTINE_ID must be set in " +
      ".env.local (machine-local; recipe: SETUP §Once and done — cloud " +
      "accounts, Clerk routine). Fallback: the manual charter paste.",
  );
  process.exit(1);
}

const message = process.argv.slice(2).join(" ").trim();

try {
  const res = await fetch(
    `https://api.anthropic.com/v1/claude_code/routines/${routineId}/fire`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "experimental-cc-routine-2026-04-01",
        "content-type": "application/json",
      },
      body: JSON.stringify(message ? { text: message } : {}),
    },
  );
  const bodyText = await res.text();
  if (!res.ok) {
    console.error(
      `fire-clerk: the fire endpoint answered ${res.status}. ` +
        (res.status === 429
          ? "Daily routine cap or usage limit reached (Retry-After: " +
            (res.headers.get("retry-after") ?? "?") +
            " s). Use the manual charter paste instead."
          : "Not retrying (no idempotency key — a retry could spawn " +
            "twice). Check the token and routine id, or use the manual " +
            "charter paste.") +
        `\n${bodyText}`,
    );
    process.exit(1);
  }
  const data = JSON.parse(bodyText);
  if (!data.claude_code_session_url) {
    console.error(
      "fire-clerk: 200 but no claude_code_session_url in the response — " +
        "the API shape may have shifted; re-verify against the " +
        `routines-fire docs.\n${bodyText}`,
    );
    process.exit(1);
  }
  console.log(`clerk fired · session: ${data.claude_code_session_url}`);
} catch (err) {
  console.error(
    "fire-clerk: could not reach the fire endpoint (offline or DNS): " +
      `${err.message}. Use the manual charter paste instead.`,
  );
  process.exit(1);
}
