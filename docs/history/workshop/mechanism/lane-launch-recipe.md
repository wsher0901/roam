---
type: history
slug: lane-launch-recipe
shipped: 2026-06-12
pr: 46
---

# Lane launches get a recipe that actually works

## What shipped

([D-019](../../../DECISIONS.md#d-019--2026-06--launch-mechanics-correction-amends-d-017))
· Live testing showed `claude --remote` refuses every
non-interactive shell, so lane launches now go through a visible,
attended console window opened from a launcher kept outside this
public repo → [PR #46](https://github.com/wsher0901/roam/pull/46)

## Story

First live launch of the D-017 protocol hit the TTY guard: claude
--remote refuses every non-interactive invocation — the headless shell
and the ! prefix both failed at the first real attempt. D-019 codified
the route that worked: a batch launcher written outside the public
repo, opened as a visible attended console window on the founder's
screen; the four T3–T6 lanes launched through it.
