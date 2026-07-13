---
type: memory
id: vault-lens-seed
updated: 2026-07-13 · task birth · home PC
---
# vault-lens-seed — Vault-lens seed: Obsidian config travels through git

## Status
Bench born and claimed by the cockpit (home PC seat). Spec + this
stub are the first commits; the draft PR goes up immediately after.
No work landed yet.

## What this task is
Workshop tooling, fully specified in the Web chat (slug
vault-lens-seed), task-local — no D-number. The
[vault lens](../history/vault-lens.md) shipped as a hand recipe
(groups + bookmarks clicked together per machine); this task makes
it a one-phrase apply: two seed JSONs (graph config, bookmarks)
travel in `.claude/vault-seed/`, and
[machine-setup](../skills/machine-setup.md) §Vault lens becomes the
copy procedure behind "apply the vault lens" — copy the two files
into the gitignored live `docs/.obsidian/`, touch nothing else
there, drop the retired Dataview plugin if present. Live
`docs/.obsidian/` stays gitignored; only the seed is versioned.

## Pending issues
none

## Left / idle
Everything: the two seed JSONs, the machine-setup §Vault lens
rewrite + Verify line, the stub description extension, then
verification and ship to THE GATE (no merge — the founder's
approval follows external review).

## The story
Born from the vault-lens-seed Web-chat workshop. Claim check found
zero open branches and zero open PRs — the cockpit takes the lane
directly. Task-local decisions so far: hex → Obsidian decimal rgb
conversions computed as gray #808080 → 8421504 · blue #4A9EFF →
4890367 · green #4CAF50 → 5025616 · yellow #FFD54F → 16766287.
The brief also promotes this session's field find into
[machine-setup](../skills/machine-setup.md) as documented known
behavior: Obsidian on Windows may realign markdown tables and leave
zero-content CRLF working-tree changes — git normalizes them at
commit; they never enter history.

## Where to look
- spec: [../specs/vault-lens-seed.md](../specs/vault-lens-seed.md)
- the vault-lens-seed workshop chat (Web) — where the edits were cut
- prior art: [../history/vault-lens.md](../history/vault-lens.md)
  (the hand-recipe version this replaces)
- target files: `.claude/vault-seed/graph.json` ·
  `.claude/vault-seed/bookmarks.json` ·
  [machine-setup](../skills/machine-setup.md) ·
  `.claude/skills/machine-setup/SKILL.md`
- PR: opens as draft at birth (number lands here at first rewrite)
