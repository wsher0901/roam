---
type: history
slug: session-hooks
shipped: 2026-07-09
pr: 53
---

# Session hooks that work on every machine

## What shipped

Every
session now opens synced and briefed on any OS (cross-platform Node
hooks replace the Windows-only one), a session-end safety net
auto-pushes unfinished lane work so it can never be lost, and
routine git/GitHub commands are pre-approved — reliability work for
the [D-020](../DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
lanes → [PR #53](https://github.com/wsher0901/roam/pull/53)

## Story

The Windows-only cmd.exe hook had been dying silently everywhere else —
cloud sandboxes and non-Windows shells started blind, with no pull and
no briefing. Cross-platform Node hooks replaced it: session-start
anchors to the repo root, fast-forwards main only when the tree is
clean, and injects the briefing; session-end auto-pushes unpushed lane
work so nothing can be lost; routine git/GitHub commands were
pre-approved.
