---
type: memory
id: flight-hardening
updated: 2026-07-22 · birth · work PC
---

# flight-hardening — correct every instruction the first end-to-end flight proved wrong

## Status

bench ready, no worker yet — birthed 2026-07-22 by the control
tower (work PC). Authored at this seat; the payload is
tower-authored, so external Web review precedes the founder's word
at the gate (no-solo-approval,
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable)).

## What this task is

The first end-to-end flight of the assembled chain flew on
2026-07-22 and welded as
[#191](https://github.com/wsher0901/roam/pull/191). Every step of
it that nearly failed failed against a WRITTEN instruction rather
than a missing one: the repo, as it stands, tells a future seat to
do things that cannot work. This bench corrects those
instructions in place, from lived evidence — nine items, one
theme, listed in [the spec](../specs/flight-hardening.md).

Nothing here is new machinery. The permanent fix for the
API-flap class — a merge-on-signal GitHub Action that would turn
merge into a git act — is deliberately NOT in this bench; it is
staged for its own.

## Pending issues

none yet — the mandate is fully specified and the file list is
closed. The one live uncertainty is item 8: whether the birth
platform actually takes a title line from the prompt is unproven,
so it ships marked verify-before-rely, to be confirmed or dropped
at the next cockpit birth.

## Left / idle

nothing parked. The bench is birthed and the work has not started.

## The story

Born bench-first at the control tower on the founder's mandate,
2026-07-22, from a fresh main tip
(`2c50cec`) with origin heads = `main` only — the STEP 0 gate the
mandate required, passed and recorded before the branch existed.

The evidence base is the flight itself plus its closeout filings
([#190](https://github.com/wsher0901/roam/pull/190) recorded the
rung-1 birth mechanics that actually flew;
[#192](https://github.com/wsher0901/roam/pull/192) filed the
outing's findings to [IDEAS](../IDEAS.md)). This bench is the
repair pass over those findings.

The loudest of them, and the one that shaped item 1: the airborne
handshake token disagrees across its two homes. TEMPLATE's state
table wrote it with an em-dash while §Canary's contract used a
middot. In flight the cockpit acked in the em-dash form, the
lane's watcher — polling for the middot — never saw it, read the
window as timed out, and staged a clean stand-down. What saved the
flight was not the token but the wake-lock: the stand-down push
was REJECTED because origin had moved, the lane re-read its
Status, found the real ack, dropped the stand-down, and did the
work. A backstop caught what a contract should never have let
happen. Worse, before the token even mattered, the watcher had
matched its OWN claim text — "awaiting the baton-holder's airborne
ack" contains the word it was hunting — which is why item 1 makes
the match anchored to the start of the Status line rather than a
substring search.

## Where to look

- The contract: [the spec](../specs/flight-hardening.md) — goal,
  out of scope, the nine plan items, Done-means.
- The ack token's two homes:
  [TEMPLATE](../memory/TEMPLATE.md)'s Status-vocabulary table and
  [parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides).
- The impossible recipe:
  [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  rung 1, and the shape that actually flew, recorded in
  [IDEAS](../IDEAS.md) at the
  [#190](https://github.com/wsher0901/roam/pull/190) filing.
- The charters and the cloud environment note:
  [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
- The flight this all comes from:
  [lane-worker-baton](../history/workshop/mechanism/lane-worker-baton.md)
  ([#191](https://github.com/wsher0901/roam/pull/191)).
