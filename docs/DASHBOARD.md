---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Stamp: 2026-07-14 · 11:50 · ship · work PC
V1 5/34 · S1 2/7 · S2 3/5 · sessions: 0 main · 0 parallel ·
needs-you 4
How to read this board →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 Paste the approved v4 text into the claude.ai → Roam Project →
   settings box (since 07-11).
   → master: [WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md) · the box is a
   copy · [history](history/workshop/definition/web-instructions.md)
2. 🟡 Run the machine-setup Verify block on this home PC — the work
   PC passed in full (since 07-13).
   → [machine-setup](skills/machine-setup.md) ·
   [vault lens](skills/machine-setup.md#vault-lens) (applied on both
   seats)
3. ⚪ Nine open engine questions sit parked in the Open register
   until S3 opens (since 07-13).
   → [ENGINE §12](ENGINE.md#12-open-register) ·
   [D-028](DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)
   · [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep)
4. ⚪ Write the reviewer-subagent spec — a small task queued after
   the ops leg (since 07-13).
   → [SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens)

## Sessions

0 main · 0 parallel — operations idle. Both of this sitting's tasks
merged in order: laws-close ([#115](https://github.com/wsher0901/roam/pull/115))
then ci-trust ([#117](https://github.com/wsher0901/roam/pull/117)).
No session is running.

↳ main micro: — (no live main session)

## You are here

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░ → T3–T6 source vetting ⚪ held
(relaunch briefs due from ladder step P8 in the Web chat)
S2 · Skeleton & design · 3/5 ███░░ → T5 Design foundations ⚪ idle
S3–S8 · queued in order · 0/22

## Stage map

```mermaid
flowchart LR
  S1["S1 Data Definition<br/>2/7"]
  S2["S2 Skeleton + design<br/>3/5"]
  S3["S3 Engine core<br/>0/7"]
  S4["S4 Suggest<br/>0/3"]
  S5["S5 Plan<br/>0/3"]
  S6["S6 Edit + revalidate<br/>0/3"]
  S7["S7 Other families<br/>0/3"]
  S8["S8 Demo polish<br/>0/3"]
  S1 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8
  S2 --> S3
  classDef done fill:#2e7d32,stroke:#1b5e20,color:#ffffff
  classDef active fill:#1565c0,stroke:#0d47a1,color:#ffffff
  classDef locked fill:#ef6c00,stroke:#e65100,color:#ffffff
  classDef pending fill:#616161,stroke:#424242,color:#ffffff
  class S1,S2 active
  class S3 locked
  class S4,S5,S6,S7,S8 pending
```

## Claude Web + Design discussion

- **"Ops — Architecture audit & setup"** (Web) — the ops leg is
  fully closed: laws-close (#115), ci-trust (#117), auto-merge-flip
  (#119), and the leg-end restyle sweep (#121) all shipped → next:
  nothing on this thread; the Obsidian pass is a local check.
- **"<setup-ladder / P8 chat's exact title>"** (Web) — T3–T6
  relaunch briefs pending → next: per its own thread.

No Design chats open — founder confirmed at the 2026-07-13 · 23:25
handoff.

## Shipped (latest — full record: [the ledger](history/README.md#the-ledger))

| When | What | PR |
|---|---|---|
| 07-14 11:46 | [Leg-end restyle sweep: D-029 finishes its migration — every living doc carries its links below the prose](history/workshop/definition/restyle-sweep.md) | [#121](https://github.com/wsher0901/roam/pull/121) |
| 07-14 10:55 | [Repo auto-merge enabled so the self-merge law works — the repo's first armed --auto, fired on green](history/workshop/mechanism/auto-merge-flip.md) | [#119](https://github.com/wsher0901/roam/pull/119) |
| 07-14 10:32 | [CI is the arbiter: Actions-green at every gate; the local gate mirrors all six CI steps; anchors born resolving](history/workshop/mechanism/ci-trust.md) | [#117](https://github.com/wsher0901/roam/pull/117) |
| 07-14 10:24 | [Leg close: LAWS carries the routing clause; pickup speaks the founder's shape](history/workshop/definition/laws-close.md) | [#115](https://github.com/wsher0901/roam/pull/115) |
| 07-13 23:14 | [HOME closes the leg's knowledge layer: the routing table, one day in the workshop, the board paragraph recut, a stable Sessions anchor](history/workshop/definition/home-knowledge.md) | [#113](https://github.com/wsher0901/roam/pull/113) |
| 07-13 22:58 | [State surfaces v2: the board learns the founder's names; pickup becomes the sit-down summary; welds stamp time and write the ledger](history/workshop/mechanism/state-surfaces-v2.md) | [#110](https://github.com/wsher0901/roam/pull/110) |
| 2026-07-13 | [History quadrants: four doors; TEMPLATE owns the format + Status vocabulary](history/workshop/definition/history-quadrants.md) | [#108](https://github.com/wsher0901/roam/pull/108) |
| 2026-07-13 | [TELEMETRY folds into FACTS: Appendix C; file retired](history/workshop/definition/telemetry-fold.md) | [#106](https://github.com/wsher0901/roam/pull/106) |
| 2026-07-13 | [Fleet continuity: handoff parks every local lane; liftoff respawns parked benches; wake-lock parks every outcome](history/workshop/mechanism/fleet-continuity.md) | [#104](https://github.com/wsher0901/roam/pull/104) |
| 2026-07-13 | [Stale-branch hygiene: gone-guard on the safety net; welded-elsewhere locals auto-removed](history/workshop/mechanism/stale-branch-hygiene.md) | [#101](https://github.com/wsher0901/roam/pull/101) |
