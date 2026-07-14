---
type: history
slug: stage-map-dashboard
shipped: 2026-07-10
pr: 60
---

# Progress gets a face: the stage-map dashboard

## What shipped

A
living [DASHBOARD](../../../DASHBOARD.md) renders all eight V1 stages as a
colored Mermaid map with live done/total counts (on GitHub and in
Obsidian), Dataview views list open specs and remaining work, and
/ship now repaints the map at every merge so it can never disagree
with [ROADMAP](../../../ROADMAP.md) →
[PR #60](https://github.com/wsher0901/roam/pull/60)

## Story

Ladder step P5, the visual layer: a colored Mermaid stage map with live
done/total counts rendering on GitHub and in Obsidian, plus three
Dataview live views (open specs, remaining work by stage, spec history)
for the vault. ship's bookkeeping learned to repaint the map at every
merge so it could never disagree with ROADMAP. The engine swap (D-024)
later rebuilt this page as the workshop's sole state surface.
