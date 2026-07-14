---
type: history
slug: hygiene-retro-weave
shipped: 2026-07-09
pr: 57
---

# Repo hygiene: line endings pinned, old docs woven

## What shipped

A `.gitattributes` now normalizes every text file to LF in the
repository (ends the Windows phantom-modified-files trap), the
pre-existing docs corpus carries the same markdown-link density as
new files (266 links added machine-executed, per the new
retroactivity law in [CLAUDE.md](../../../../CLAUDE.md)), and
[HOME.md](../../../HOME.md) sheds the dead cloud-lane machinery superseded
by [D-020](../../../DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
→ [PR #57](https://github.com/wsher0901/roam/pull/57)

## Story

Two layers: .gitattributes pinned LF normalization repo-side (the
honest finding — the index was already clean; the phantom-modified pain
was working-tree autocrlf drift), and the retroactivity law was born
and immediately obeyed — 266 machine-executed links wove the
pre-existing corpus to the same density as new files, while HOME shed
the dead cloud-lane machinery D-020 had retired.
