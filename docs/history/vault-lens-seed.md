---
type: history
slug: vault-lens-seed
shipped: 2026-07-13
pr: 91
---
# vault-lens-seed — Vault-lens seed: Obsidian config travels through git

## Status
Shipped — merged as
[PR #91](https://github.com/wsher0901/roam/pull/91) on the founder's
word after the external review. Seed JSONs + machine-setup rewrite +
stub trigger all landed; every Done-means box verified.

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
none repo-side. One founder action per seat remains by the task's
own nature: say "apply the vault lens" on each PC (the
[machine-setup Verify](../skills/machine-setup.md#verify-after-setup-or-whenever-one-machine-misbehaves)
line points at the phrase).

## Left / idle
Nothing — the weld that landed this file was the last act
(slug-keyed, no ROADMAP tick; spec finalized in place at
[../specs/vault-lens-seed.md](../specs/vault-lens-seed.md)).

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
- PR: [#91](https://github.com/wsher0901/roam/pull/91)
  (squash-merged 2026-07-13)
- seed files: `.claude/vault-seed/graph.json` ·
  `.claude/vault-seed/bookmarks.json`
- procedure:
  [machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
- prior art: [../history/vault-lens.md](../history/vault-lens.md)
  (the hand-recipe version this replaces)
