---
type: memory
id: check-memory
updated: 2026-07-17 · canary claim · cloud
---

# check-memory — the memory-format CI gate

## Status

airborne — cloud routine · 2026-07-17 17:04 (cockpit ack;
label→canary 189 s). The lane works; the founder departs after
spawn verification — Shakedown phase 2, unattended flight.

## What this task is

The 2026-07-16 IDEAS line becomes machinery:
`scripts/check-memory.mjs` validating every task memory against
[TEMPLATE](TEMPLATE.md)'s locked format, wired into package.json,
ci.yml (after check:ledger), and ship §1's mirror list. The exact
validation contract — every judgment pre-made — lives in
[the spec](../specs/check-memory.md); zero lane decisions.

## Pending issues

none at birth. (Two doc mentions are declared weld-deferred in
the spec's Deviations — cockpit acts, not lane work.)

## Left / idle

All deliverables — no worker has claimed the bench yet.

## The story

Born 2026-07-17 as payload B of the Shakedown Flight phase 2 —
the first fully-unattended liftoff. Sibling lane (file-disjoint
by construction): agent-teams-brain on `docs/agent-teams-brain`;
the one file both payloads originally named (docs/SETUP.md) was
resolved at construction — A owns it, this lane's one-line mention
rides its weld.

## Where to look

- Spec (the full contract): [check-memory](../specs/check-memory.md)
- The format it enforces: [TEMPLATE](TEMPLATE.md)
- Style model: `scripts/check-ledger.mjs`
- Lane law: [parallel-lanes](../skills/parallel-lanes.md)
