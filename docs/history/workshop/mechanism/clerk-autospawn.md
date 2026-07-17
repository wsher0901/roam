---
type: history
slug: clerk-autospawn
shipped: 2026-07-17 16:22
pr: 164
---

# clerk-autospawn — API-fire the clerk at liftoff

## Status

Shipped — merged as
[#164](https://github.com/wsher0901/roam/pull/164), after external
Web review per the Shakedown Flight rule, second in the stack
behind sibling [#163](https://github.com/wsher0901/roam/pull/163).
The A-checklist (A1–A5) grades at the flight; the founder's
~3-minute routine-creation act comes first.

## What this task is

Execute the staged clerk-autospawn line
([SETUP §Staged](../../../SETUP.md#staged--turns-on-when-its-stage-opens)):
a second routine named "clerk" (charter master v2 + spawn
preamble, API trigger only), `scripts/fire-clerk.mjs` +
`npm run fire:clerk`, and liftoff's clerk step gone API-first with
the manual paste as fallback plus the §2 cap-blindness budget
note. The API-cap trade (1 run per fire, invisible to
`count:runs`) is accepted by the founder flying it. Contract:
[the spec](../../../specs/clerk-autospawn.md). Runs to THE GATE only —
DO NOT MERGE; external Web review precedes the merge word.

## Pending issues

- Founder post-merge acts (~3 min): create the "clerk" routine
  (saved prompt = charter master v2 + the spawn preamble), add
  the API trigger, generate the fire token ONCE, and paste token
  + `trig_…` id into the cockpit for `.env.local` storage — the
  other seat repeats at its next sitting.
- The A-checklist (A1–A5) grades at the Shakedown Flight, after
  this PR merges. Watch A1 for the beta header: it is
  experimental and dated (`experimental-cc-routine-2026-04-01`) —
  a 400 naming it means the header moved; re-verify the docs, do
  not guess.

## Left / idle

nothing on this bench — the flight grades the A-checklist
post-merge; the routine itself is founder-born post-merge.

## The story

Born 2026-07-17 from the founder's Shakedown Flight phase-1 paste
("two benches, one paste — the watch and the ignition"), branched
deliberately from sibling
[clerk-notify](../../../specs/clerk-notify.md)'s charter-v2 commit
rather than main, so the routine's saved-prompt box copies a
single-homed master (the draft PR bases on the sibling branch and
retargets to main when it merges — merge order: notify, then
autospawn).

The endpoint verification (the paste's "verify against live docs
at build time" clause) ran as a background researcher against the
official docs while the benches were built, and came back better
than hoped: the routine-fire endpoint is fully public —
`POST api.anthropic.com/v1/claude_code/routines/{trig_id}/fire`,
per-routine bearer token, dated experimental beta header, optional
freeform `text` body delivered as untrusted
`<routine-fire-payload>`, response carrying the session URL. Full
facts + doc links: the spec's
[§Endpoint of record](../../../specs/clerk-autospawn.md#endpoint-of-record).
Two script-shaping consequences: NO automatic retry (the endpoint
has no idempotency key — a blind retry could spawn a second
cap-burning session; failures exit nonzero and point to the manual
paste), and the cap finding is now doc-confirmed (API fires count
against the daily allowance; one-off scheduled runs do not). One
small correction to the kickoff paste, recorded: the id the
endpoint wants is the `trig_…` API-trigger id — the modal shows
it (the routine URL carries it too); SETUP's recipe says so.

Deviation, declared in the spec: `.env.example` rides this PR
though absent from the paste's file list —
[LAWS §Safety](../../../LAWS.md#safety-non-negotiable) requires the
example file to stay current with placeholders.

## Where to look

- Spec: [clerk-autospawn](../../../specs/clerk-autospawn.md)
- Routine recipe + secret path (lands this branch):
  [SETUP §cloud accounts](../../../SETUP.md#once-and-done--cloud-accounts)
- Fire step: [liftoff §4](../../../skills/liftoff.md#4--spawn) · budget
  note: [liftoff §2](../../../skills/liftoff.md#2--triage-every-open-item)
- Predecessor story:
  [cloud-clerk](../../../history/workshop/mechanism/cloud-clerk.md)
