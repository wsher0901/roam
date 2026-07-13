---
type: dashboard
title: Dashboard
status: living
---
# Dashboard — the state surface

Stamp: 2026-07-12 · ship tail · home PC
Glyphs: 🟢 done · 🟡 ongoing · 🔴 issue · ⚪ idle. Repainted only by
rituals (pickup when stale · handoff · liftoff · ship's tail) — never
hand-edited; git outranks this board.

## Needs you

1. 🟡 Paste the approved v4 text into the claude.ai → Roam Project →
   settings box — its master is now
   [WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md); the box is a copy
   ([history](history/web-instructions.md)).
2. 🟡 Run the [machine-setup](skills/machine-setup.md) Verify block
   on each PC — a full pass is unconfirmed on both seats (now
   includes the optional [vault lens](skills/machine-setup.md#vault-lens)
   yes/no).
3. ⚪ [DECISION-POLICY §10](DECISION-POLICY.md#10-open-questions) —
   five open engine questions; parked until
   [V1.S3](ROADMAP.md#v1s3--engine-core--two-families-deep) opens.

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

Legend: green = done · blue = active (work permitted now) · orange =
locked (gated by an unmet dependency) · gray = pending (queued).
Counts recomputed from [ROADMAP](ROADMAP.md) checkboxes at every
ritual repaint.

## In flight

⚪ **[V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
— Design foundations** · no PR yet · 0/3
Exploring Roam's visual language in Claude Design. Only extracted
token values enter the repo, never markup or bundles. Each session
starts by pasting the [DESIGN-KICKOFF](DESIGN-KICKOFF.md) preamble,
then stating the lane.
⚪ option card with confidence badge · ⚪ day timeline beside map ·
⚪ token extraction ("Hand off to Claude Code")
→ memory: — (Design-surface lane; predates the memory layer)

## Threads (non-task)

🟢 Ops — knowledge architecture (Web chat) — COMPLETE: phases 1+2
([recut](history/foundation-roadmap-recut.md)), 3
([engine swap](history/engine-swap.md)), 4
([HOME encyclopedia](history/home-encyclopedia.md)), and 5
([the sweep](history/phase5-sweep.md)) all shipped.
⚪ Setup ladder P8 (Web chat) — the T3–T6 relaunch briefs; next up
now the ops thread is complete.

## Shipped (latest — full record: [history/](history/README.md))

| When | What | PR |
|---|---|---|
| 2026-07-12 | [FOUNDATION v4: principles recut, open family set, lifespan repair](history/foundation-v4.md) | [#85](https://github.com/wsher0901/roam/pull/85) |
| 2026-07-11 | [Vault lens + clean-tree verdict](history/vault-lens.md) | [#82](https://github.com/wsher0901/roam/pull/82) |
| 2026-07-11 | [Web instructions: the rule-carrier](history/web-instructions.md) | [#80](https://github.com/wsher0901/roam/pull/80) |
| 2026-07-11 | [Phase 5 — the sweep: hardening + hygiene](history/phase5-sweep.md) | [#78](https://github.com/wsher0901/roam/pull/78) |
| 2026-07-11 | [HOME v3 — the manual & encyclopedia](history/home-encyclopedia.md) | [#76](https://github.com/wsher0901/roam/pull/76) |
| 2026-07-11 | [The engine swap: architecture v2](history/engine-swap.md) | [#71](https://github.com/wsher0901/roam/pull/71) |
| 2026-07-10 | [Version ladder + lifespan split](history/foundation-roadmap-recut.md) | [#69](https://github.com/wsher0901/roam/pull/69) |
| 2026-07-10 | [Machine-setup skill](history/machine-setup-skill.md) | [#66](https://github.com/wsher0901/roam/pull/66) |
| 2026-07-10 | [Design kickoff rule-carrier](history/design-kickoff.md) | [#64](https://github.com/wsher0901/roam/pull/64) |
| 2026-07-10 | [Live ritual counts, quiet ship-tail](history/ritual-live-counts.md) | [#62](https://github.com/wsher0901/roam/pull/62) |
