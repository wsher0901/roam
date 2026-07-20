---
type: spec
id: clerk-autospawn
title: Clerk-autospawn — API-fire the clerk at liftoff
status: shipped
stage: workshop
branch: docs/clerk-autospawn
pr: 164
opened: 2026-07-17
shipped: 2026-07-17 16:22
---

# clerk-autospawn — API-fire the clerk at liftoff

**Links:**
[SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
· [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
· [liftoff](../skills/liftoff.md) ·
[D-043](../DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)
· [cloud-clerk story](../history/workshop/mechanism/cloud-clerk.md)
· sibling bench: [clerk-notify](clerk-notify.md)

## Goal

Execute the staged clerk-autospawn line — first need named by the
founder 2026-07-17: the Shakedown Flight, phase 1. Liftoff's clerk
step goes API-first: `npm run fire:clerk` POSTs the routine-fire
endpoint for a SECOND routine named "clerk" (saved prompt = the
charter master v2 verbatim plus a spawn preamble line; no GitHub
trigger; API trigger enabled) and prints the returned session URL;
the manual charter paste is retained verbatim as fallback. The
API-cap trade is accepted by the founder flying it: one daily-cap
run per fire — and API fires are INVISIBLE to the `count:runs`
label-event proxy, so liftoff §2's budget becomes count:runs plus
fires performed this sitting.

## Out of scope

- api-ignition — the LANE routine's API trigger, a separate staged
  line with its own first need; untouched here.
- clerk-notify — the sibling bench ([spec](clerk-notify.md)); this
  branch is born from its charter-v2 commit so the master stays
  single-homed, and merges after it.
- Creating the routine / generating the token — founder acts,
  post-merge (~3 min), recorded in the SETUP subsection.
- Merging — external Web review precedes the merge word (founder
  instruction with the kickoff paste, 2026-07-17). This bench rides
  to THE GATE and holds.

## The A-checklist (graded at the flight)

Founder-run at the Shakedown Flight, after this PR merges; results
recorded in this bench's memory.

- [x] A1 — `npm run fire:clerk` spawns the clerk; latency
      recorded.
      — graded 2026-07-19 ([shakedown-audit](shakedown-audit.md)):
      fired in ~3 s at the 07-17 liftoff, payload "arm the watch".
      Fire 1 answered 400 invalid_routine_id PRE-spawn (the pasted
      id lacked the `trig_` prefix); corrected in `.env.local`,
      ONE sanctioned retry clean — no session born of the failure
      (audit finding 1).
- [ ] A2 — where the session lands in the UI + phone findability.
      — pending founder attest, asked at the
      [shakedown-audit](shakedown-audit.md) gate.
- [ ] A3 — the session is interactive from the phone's Claude app.
      — pending founder attest, asked at the
      [shakedown-audit](shakedown-audit.md) gate.
- [ ] A4 — the provider's counter ticks +1 (founder glance) and
      the `count:runs` proxy-blindness is confirmed.
      — proxy-blindness CONFIRMED from the 07-17 live record:
      `count:runs` read 2 (the two lane labels) while the day's
      true total was 3 — the API fire's +1 invisible to the proxy,
      exactly as documented. The provider-counter glance: pending
      founder attest — the same glance closes finding 1's
      unburned-run confirm
      ([shakedown-audit](shakedown-audit.md)).
- [ ] A5 — the greeting + auto-armed watch arrive per the spawn
      preamble.
      — pending founder attest, asked at the
      [shakedown-audit](shakedown-audit.md) gate; the armed watch
      itself is evidenced downstream — it announced the phase-2
      landing (N2/N3: [clerk-notify](clerk-notify.md)).

## Plan

1. Bench birth: branch (from clerk-notify's charter-v2 commit) ·
   this spec · memory stub · draft PR (base: clerk-notify, so the
   diff shows only this bench; retargets to main when the sibling
   merges).
2. [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
   — "Clerk routine" subsection: the second routine's recipe
   (saved prompt = charter master v2 + the spawn preamble, box-is-
   a-copy; no GitHub trigger; API trigger enabled), the founder's
   post-merge acts, and the secret path (`.env.local`:
   `CLERK_FIRE_TOKEN` + `CLERK_ROUTINE_ID`; per-machine, never the
   repo; regenerate if lost; the other seat repeats at its next
   sitting).
3. `scripts/fire-clerk.mjs` — NEW, zero-dep, styled on the
   existing scripts: reads the two values from `.env.local`, POSTs
   the routine-fire endpoint (URL + headers verified against live
   docs at build time — see §Endpoint of record), body carries an
   optional message, prints the returned session URL, honest
   nonzero failure. `package.json` gains `fire:clerk`.
4. [liftoff](../skills/liftoff.md) — the clerk step v2: primary =
   fire:clerk (record the returned session URL in the flight-plan
   repaint); fallback = the manual charter paste, retained
   verbatim. §2 gains the budget note: API fires count against the
   daily cap but are invisible to `count:runs` — the sitting's
   budget = count:runs + fires performed this sitting.
5. [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
   — the clerk-autospawn line flips to "in verification", linking
   this bench (the cloud-clerk precedent).
6. `.env.example` — the two placeholders (LAWS §Safety mandates
   the example stays current; a disclosed extension of the paste's
   file list).
7. CI mirror green · ship §6 critic (synchronous fallback lawful)
   · ready-flip → THE GATE. DO NOT MERGE.

## Endpoint of record

Verified 2026-07-17 against the live docs — the endpoint is public
and documented
([routines-fire reference](https://platform.claude.com/docs/en/api/claude-code/routines-fire)
· [API-trigger setup](https://code.claude.com/docs/en/routines#add-an-api-trigger)):

- `POST https://api.anthropic.com/v1/claude_code/routines/{routine_id}/fire`
  — routine_id is the `trig_…` id (the API-trigger modal shows
  it).
- Auth: `Authorization: Bearer <sk-ant-oat01-…>` — the
  per-routine fire token, shown once at generation, scoped to
  this routine only.
- Required headers: `anthropic-version: 2023-06-01` ·
  `anthropic-beta: experimental-cc-routine-2026-04-01` — the beta
  header is EXPERIMENTAL and dated; expect it to move.
- Body (optional): `{"text": "…"}`, ≤65,536 chars, freeform — it
  reaches the routine wrapped as untrusted
  `<routine-fire-payload>` text (how the spawn preamble's watch
  arming can be nudged per fire).
- Response 200: `{type: "routine_fire", claude_code_session_id,
  claude_code_session_url}` — the URL liftoff's flight-plan
  repaint records.
- No idempotency key — the script never auto-retries (a blind
  retry could spawn a second session); 429 = the daily cap or
  usage limit, carrying `Retry-After`.
- Cap semantics confirmed by the docs: API fires COUNT against
  the per-account daily routine allowance (one-off scheduled runs
  do not) — the A4 proxy-blindness note stands.

A1 remains the live fire — verify-before-rely.

## Done means

- [x] SETUP §cloud accounts carries the "Clerk routine"
      subsection: recipe, founder post-merge acts, secret path.
- [x] `scripts/fire-clerk.mjs` exists, zero-dep, with honest
      failure; `package.json` carries `fire:clerk`.
- [x] liftoff's clerk step is API-first with the manual paste
      fallback retained verbatim; §2 carries the budget note.
- [x] SETUP §Staged's clerk-autospawn line reads "in verification"
      and links this bench.
- [x] `.env.example` carries the two placeholders.
- [ ] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked at the weld, whenever the founder's merge word
      lands.)

The A-checklist is deliberately NOT a Done-means item — it grades
at the flight, after the merge.

## Verification

- grep `Clerk routine` → the subsection in `docs/SETUP.md`.
- grep `CLERK_FIRE_TOKEN` → `docs/SETUP.md` + `.env.example` +
  `scripts/fire-clerk.mjs`.
- grep `fire:clerk` → `package.json` + `docs/skills/liftoff.md`.
- grep `INVISIBLE to` → the liftoff §2 budget note + the SETUP
  recipe (the staged line carries the lowercase mention).
- grep `A1|A2|A3|A4|A5` → all five present in this spec.

## Deviations

- `.env.example` rides this PR though absent from the kickoff
  paste's file list — [LAWS §Safety](../LAWS.md#safety-non-negotiable)
  requires the example file to stay current with placeholders.
