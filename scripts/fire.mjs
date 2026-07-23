#!/usr/bin/env node
// Routine igniter: fires a named routine via its API trigger so
// liftoff can raise the away surface in one command (SETUP §Once and
// done — cloud accounts; liftoff §6, and the summon workflow's
// engine).
// Usage: `node scripts/fire.mjs cockpit [message…]` — wired as
// `npm run fire:cockpit`. The target picks the machine-local secret
// pair in .env.local — COCKPIT_FIRE_TOKEN (the per-routine bearer
// token, sk-ant-oat01-…, generated ONCE in the routine's API-trigger
// UI) and COCKPIT_ROUTINE_ID (the trig_… id — the API-trigger modal
// shows it) — and POSTs the documented routine-fire endpoint. An
// optional message rides along: `npm run fire:cockpit -- "<flight
// plan>"` (it reaches the session as untrusted
// <routine-fire-payload> text).
//
// The map stays a MAP with one entry on purpose: `cockpit` is the
// only routine since the clerk was retired 2026-07-22 (D-046 decided
// it; D-048 superseded its last function), and the unknown-target
// branch below is what makes a stale `fire:clerk` fail honestly
// instead of silently doing nothing.
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

const TARGETS = {
  cockpit: { token: "COCKPIT_FIRE_TOKEN", routineId: "COCKPIT_ROUTINE_ID" },
};

const target = (process.argv[2] ?? "").trim();
if (!(target in TARGETS)) {
  console.error(
    `fire: unknown target "${target}" — usage: node scripts/fire.mjs ` +
      "cockpit [message…] (or npm run fire:cockpit). cockpit is the " +
      "only target: the clerk was retired 2026-07-22 and its routine " +
      "deleted.",
  );
  process.exit(1);
}

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
    if (m) values[m[1]] = m[2].trim().replace(/^["']|["']$/g, "");
  }
  return values;
}

const env = readEnvLocal();
const names = TARGETS[target];
const token = process.env[names.token] ?? env[names.token];
const routineId = process.env[names.routineId] ?? env[names.routineId];

if (!token || !routineId) {
  console.error(
    `fire(${target}): ${names.token} and ${names.routineId} must be set ` +
      "in .env.local (machine-local; recipe: SETUP §Once and done — " +
      "cloud accounts). Fallback: the manual charter paste.",
  );
  process.exit(1);
}

const message = process.argv.slice(3).join(" ").trim();

// After the fetch, failures RETURN a code instead of calling
// process.exit(): an abrupt exit while undici's network handles are
// still unwinding trips libuv's src\win\async.c assert on Windows and
// turns the scripted 1 into a noisy 127 (Shakedown Flight finding,
// 2026-07-19). process.exitCode lets the process drain and end with
// the honest number.
async function fire() {
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
        // a hung connection must still end in an honest nonzero exit
        signal: AbortSignal.timeout(30_000),
      },
    );
    const bodyText = await res.text();
    if (!res.ok) {
      console.error(
        `fire(${target}): the fire endpoint answered ${res.status}. ` +
          (res.status === 429
            ? "Daily routine cap or usage limit reached (Retry-After: " +
              (res.headers.get("retry-after") ?? "?") +
              " s). Use the manual charter paste instead."
            : "Not retrying (no idempotency key — a retry could spawn " +
              "twice). Check the token and routine id, or use the manual " +
              "charter paste.") +
          `\n${bodyText}`,
      );
      return 1;
    }
    let data;
    try {
      data = JSON.parse(bodyText);
    } catch {
      console.error(
        `fire(${target}): 200 but a non-JSON body — the API shape may ` +
          `have shifted; re-verify against the routines-fire docs.\n${bodyText}`,
      );
      return 1;
    }
    if (!data.claude_code_session_url) {
      console.error(
        `fire(${target}): 200 but no claude_code_session_url in the ` +
          "response — the API shape may have shifted; re-verify against " +
          `the routines-fire docs.\n${bodyText}`,
      );
      return 1;
    }
    console.log(`${target} fired · session: ${data.claude_code_session_url}`);
    return 0;
  } catch (err) {
    console.error(
      `fire(${target}): could not reach the fire endpoint (offline, ` +
        `DNS, or timed out after 30 s): ${err.message}. Use the manual ` +
        "charter paste instead.",
    );
    return 1;
  }
}

process.exitCode = await fire();
