---
type: history
slug: context-engine-v2
shipped: 2026-06-10
pr: 2
---

# Context engine v2

## What shipped

Sessions auto-pull and print
the handoff note the moment they open, and the note gains its fixed
structure — every session starts informed and ends documented →
[PR #2](https://github.com/wsher0901/roam/pull/2)

## Story

Five upgrades so every session starts informed and ends documented: a
session-start hook auto-pulling and printing the note (via cmd.exe then
— the Windows-only shim that #53 later replaced), the note's fixed
structure, a propagating decide, and the rest of the context engine's
second draft.
