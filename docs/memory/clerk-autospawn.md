---
type: memory
id: clerk-autospawn
updated: 2026-07-17 · bench birth · work PC
---

# clerk-autospawn — API-fire the clerk at liftoff

## Status

bench ready — claimed by the cockpit in-session (2026-07-17, work
PC); the cockpit builds this bench directly, no lane dispatch.

## What this task is

Execute the staged clerk-autospawn line
([SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)):
a second routine named "clerk" (charter master v2 + spawn
preamble, API trigger only), `scripts/fire-clerk.mjs` +
`npm run fire:clerk`, and liftoff's clerk step gone API-first with
the manual paste as fallback plus the §2 cap-blindness budget
note. The API-cap trade (1 run per fire, invisible to
`count:runs`) is accepted by the founder flying it. Contract:
[the spec](../specs/clerk-autospawn.md). Runs to THE GATE only —
DO NOT MERGE; external Web review precedes the merge word.

## Pending issues

- The routine-fire endpoint must be verified against live docs at
  build time before the script is written — verification evidence
  lands here.
- Founder post-merge acts (~3 min): create the routine in the UI,
  generate the fire token ONCE, copy the routine id from its URL,
  paste both into the cockpit for `.env.local` storage.
- The A-checklist (A1–A5) grades at the Shakedown Flight, after
  this PR merges.

## Left / idle

All edits — the bench was just born; spec + this stub are the
first commits.

## The story

Born 2026-07-17 from the founder's Shakedown Flight phase-1 paste
("two benches, one paste — the watch and the ignition"), branched
deliberately from sibling
[clerk-notify](../specs/clerk-notify.md)'s charter-v2 commit
rather than main, so the routine's saved-prompt box copies a
single-homed master (the draft PR bases on the sibling branch and
retargets to main when it merges — merge order: notify, then
autospawn).

## Where to look

- Spec: [clerk-autospawn](../specs/clerk-autospawn.md)
- Routine recipe + secret path (lands this branch):
  [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
- Fire step: [liftoff §4](../skills/liftoff.md#4--spawn) · budget
  note: [liftoff §2](../skills/liftoff.md#2--triage-every-open-item)
- Predecessor story:
  [cloud-clerk](../history/workshop/mechanism/cloud-clerk.md)
