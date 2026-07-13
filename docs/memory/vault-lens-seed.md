---
type: memory
id: vault-lens-seed
updated: 2026-07-13 · ship (pre-gate) · home PC
---
# vault-lens-seed — Vault-lens seed: Obsidian config travels through git

## Status
Complete, awaiting merge. Seed JSONs + machine-setup rewrite + stub
trigger all landed; every Done-means box verified; PR
[#91](https://github.com/wsher0901/roam/pull/91) flipped ready. THE
GATE is special here by the founder's instruction: approval follows
EXTERNAL REVIEW — do not merge on a casual yes.

## What this task is
Workshop tooling, fully specified in the Web chat (slug
vault-lens-seed), task-local — no D-number. The
[vault lens](../history/vault-lens.md) shipped as a hand recipe;
now it is a one-phrase apply: two seed JSONs (graph config,
bookmarks) travel in `.claude/vault-seed/`, and
[machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
is the copy procedure behind "apply the vault lens" — copy the two
files into the gitignored live `docs/.obsidian/`, touch nothing
else there, drop the retired Dataview plugin if present. Live
`docs/.obsidian/` stays gitignored; only the seed is versioned, so
every machine — including a future third — gets the same lens from
origin.

## Pending issues
Founder approval pending external review of PR
[#91](https://github.com/wsher0901/roam/pull/91). Nothing else.

## Left / idle
Only the post-approval weld: workshop task, so no ROADMAP tick —
memory → history/ (slug-keyed) + spec finalize, then squash-merge
and branch delete. After the merge, "apply the vault lens" is live
on any seat (both PCs still owe a run — the Verify line now points
at the phrase).

## The story
Born from the vault-lens-seed Web-chat workshop; the cockpit took
the lane directly (claim check: nothing open). Task-local calls:
hex → Obsidian decimal rgb computed as gray #808080 → 8421504 ·
blue #4A9EFF → 4890367 · green #4CAF50 → 5025616 · yellow #FFD54F →
16766287; graph.json uses Obsidian's stock force values and keeps
color-groups expanded; bookmarks carry `ctime: 0` (Obsidian accepts
it and stamps real times on first edit). The brief also promoted
this session's field find into the skill as documented known
behavior: Obsidian on Windows may realign markdown tables and leave
zero-content CRLF working-tree changes — git normalizes them at
commit; they never enter history. A nice touch observed mid-task:
the harness reloaded the stub's new description the moment it was
edited, so the "apply the vault lens" trigger was live in this very
session before the PR even merged. Verification all green: both
JSONs parse, the phrase present in procedure (×2) and stub (×1),
1122 internal links / 0 broken, lint clean, 3/3 tests, nothing
under docs/.obsidian/ staged, and ship's new main-sync preflight
ran clean (already up to date).

## Where to look
- spec: [../specs/vault-lens-seed.md](../specs/vault-lens-seed.md)
- PR: [#91](https://github.com/wsher0901/roam/pull/91) (ready,
  awaiting founder approval after external review)
- seed files: `.claude/vault-seed/graph.json` ·
  `.claude/vault-seed/bookmarks.json`
- procedure:
  [machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
- prior art: [../history/vault-lens.md](../history/vault-lens.md)
  (the hand-recipe version this replaces)
