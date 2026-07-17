---
type: history
slug: check-memory
shipped: 2026-07-17 23:39
pr: 171
---

# check-memory — the memory-format CI gate

## Status

shipped — 2026-07-17 23:39, [#171](https://github.com/wsher0901/roam/pull/171).
Airborne-acked by the cockpit at 17:04 (label→canary 189 s), flown
to completion unattended, cleared by the external Web review, and
welded at the next cockpit sitting with both weld-deferred doc
mentions landing in the weld commit.

## What this task is

The 2026-07-16 IDEAS line becomes machinery: `scripts/check-memory.mjs`
validating every task memory in `docs/memory/` against
[TEMPLATE](../../../memory/TEMPLATE.md)'s locked format, wired into package.json,
ci.yml (after check:ledger), and ship §1's mirror list. The exact
validation contract lived in [the spec](../../../specs/check-memory.md) —
zero lane decisions.

## Pending issues

none at ship. The two weld-deferred doc mentions declared in the
spec's Deviations (cockpit acts, not lane work) landed in the weld
commit: SETUP's CI line gained the check:memory mention (SETUP was
sibling-lane-owned this flight), and
[LAWS §Workflow](../../../LAWS.md#workflow-non-negotiable)'s
CI-mirror parenthetical gained its ledger-sibling mention (a law
file, left to the cockpit).

## Left / idle

Nothing — all six Done-means deliverables landed. The last box
("the pushed commit's Actions run green") was ticked at the weld:
the lane's final push ran green on Actions before the merge word.

## The story

Born 2026-07-17 as payload B of the Shakedown Flight phase 2 — the
first fully-unattended liftoff. The sibling lane (agent-teams-brain,
[#170](https://github.com/wsher0901/roam/pull/170)) is file-disjoint
by construction, so no merge can collide.

The cloud lane's first act was the canary claim: a clean bench
("bench ready, no worker yet") stamped "claimed by cloud" and pushed —
proving the worker can push (not a zombie) and owns the bench. The
cockpit acked it airborne 189 s later (label→canary), then departed
after spawn verification — the founder's phase-2 posture: watch the
ignition, leave the flight to run. The lane read the airborne Status
it owns and worked the fully-specified spec to completion; split-brain
was structurally impossible anyway (sole label-triggered lane,
file-disjoint sibling, a fresh heartbeat guarding the bench under the
liveness rule).

The script mirrors `scripts/check-ledger.mjs` in shape and voice:
zero-dep, CRLF-normalized, one honest failure line per file. Four
checks per memory — frontmatter fence + type/id/updated, the six
headings present and in TEMPLATE order, a dated `## Status` body (the
latest date reported), and no `<placeholder>` surviving after backtick
spans are stripped. README.md and TEMPLATE.md are out of scope (the
placeholder rule would otherwise trip on TEMPLATE's own angle-bracket
fields). A vacuous pass on zero files prints honestly. The negative
self-test (a broken scratch copy, never committed) caught all four
failure modes on one line and exited 1.

## Where to look

- Spec (the full contract): [check-memory](../../../specs/check-memory.md)
- The format it enforces: [TEMPLATE](../../../memory/TEMPLATE.md)
- Style model: `scripts/check-ledger.mjs`
- The gate: `scripts/check-memory.mjs`, wired in package.json,
  `.github/workflows/ci.yml`, and [ship §1](../../../skills/ship.md#1--preflight)
- Lane law: [parallel-lanes](../../../skills/parallel-lanes.md)
- Sibling lane: [#170](https://github.com/wsher0901/roam/pull/170)
