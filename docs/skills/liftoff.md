---
type: skill-procedure
title: Liftoff
status: living
---
# Liftoff — hand the workshop to the cloud

Trigger: any take-it-to-the-cloud phrasing — "take it to the cloud",
"liftoff", "keep working while I'm out". From that phrase on, ZERO
founder approval is needed mid-ritual: the founder is leaving.
Cockpit only. Closes the session.

## 1 · FULL handoff first
Run [handoff](handoff.md) FULL — origin must be whole (work pushed,
memories rewritten, board repainted, micro-PR merged) before
anything spawns. Its final session-close is absorbed by step 7; do
not end the session yet.

## 2 · Triage every open item
The current task, every running local lane, every queued [P] task —
each through the eligibility gate:

- fully specified (no founder decisions pending)
- zero secrets/.env exposure
- network needs fit the cloud environment
- no local-only tooling
- files-disjoint from every other flying lane

A running local lane that passes: diary (memory note) → park (push,
stand down locally) → respawn on the SAME branch in cloud.

## 3 · Bench-first birth
Every triaged item not yet birthed gets the full birth
([parallel-lanes](parallel-lanes.md)) — held items need a memory to
hold their status too: branch · spec if discussed · memory stub ·
draft PR · verified on origin.

## 4 · Spawn
Dispatch each eligible lane cloud-side via the
[route ladder](parallel-lanes.md#cloud-spawn--route-ladder).

## 5 · Handshake-verify each
- Canary arrives → write "airborne · <url>" into its memory.
- Fail or timeout → write "cloud spawn failed <date> — <reason> →
  run locally" into its memory + the abort ledger.
- Ineligible → write "held: needs local — <reason>" into its memory
  + the ledger.

Nothing is ever silently parked
([dispatch law](../LAWS.md#workflow-non-negotiable)).

## 6 · Ledger handoff
Repaint [DASHBOARD](../DASHBOARD.md) — the Cloud section IS the
flight plan: every airborne lane with its url, every abort and hold
with its reason. Ship the micro-PR (board + any IDEAS harvest).

## 7 · Close
Report "N airborne, M grounded — safe to walk away." Then, as the
ritual's LAST act, write `.claude/session-closed` with content
"Closed at liftoff · ledger #<N> · <date> · <seat>" — the
close-lock. End the session.
