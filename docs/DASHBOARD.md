---
type: dashboard
title: Dashboard
status: living
---
# Dashboard — progress at a glance

The stage map below renders on GitHub and in Obsidian; the Live views
section needs the Dataview community plugin (Obsidian → Settings →
Community plugins → Browse → "Dataview" → Install + Enable, once per
machine). For the fused live briefing — lanes, intent, next actions —
run /pickup in Claude Code.

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
Counts are recomputed from [ROADMAP](ROADMAP.md) checkboxes by /ship
at every merge.

## Live views (Obsidian + Dataview)

### Open specs

```dataview
TABLE WITHOUT ID file.link AS Spec, stage AS Stage, status AS Status,
  branch AS Branch, pr AS PR, opened AS Opened
FROM "specs"
WHERE type = "spec" AND file.name != "TEMPLATE" AND status = "open"
SORT opened DESC
```

### Remaining work by stage

```dataview
TASK FROM "ROADMAP"
WHERE !completed
GROUP BY section
```

### Spec history

```dataview
TABLE WITHOUT ID file.link AS Spec, stage AS Stage, status AS Status,
  branch AS Branch, pr AS PR, opened AS Opened
FROM "specs"
WHERE type = "spec" AND file.name != "TEMPLATE"
SORT opened DESC
```

(If Dataview is absent, these three blocks show as plain code blocks
on GitHub — that's expected and fine.)

## Where the rest lives

- [SHIPLOG](SHIPLOG.md) — what shipped, when (newest first)
- [HANDOFF](HANDOFF.md) — channels + intent from the last stand-up
- run /pickup for the fused live briefing

Founder tip: in Obsidian's graph view, use Groups on paths (specs/,
data/) to color the map by knowledge area.
