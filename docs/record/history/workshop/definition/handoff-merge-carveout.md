---
type: history
slug: handoff-merge-carveout
shipped: 2026-06-11
pr: 5
---

# Handoff notes get a merge carve-out

## What shipped

([D-002](../../../DECISIONS.md#d-002--2026-06--handoff-note-merge-policy))
· Main stays PR-only for everything, with one narrow exception:
handoff micro-PRs self-merge immediately, so end-of-session notes
never strand → [PR #5](https://github.com/wsher0901/roam/pull/5)

## Story

D-002 resolved the conflict between main's PR-only rule and the leaving
ritual: one narrow carve-out, the self-merging note micro-PR, guarded
to stop if anything else changed. The carve-out class has been recut
twice since — IDEAS additions joined via D-008, and D-023 redefined it
around DASHBOARD/IDEAS when the note file retired.
