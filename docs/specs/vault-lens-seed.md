---
type: spec
id: vault-lens-seed
title: Vault-lens seed — Obsidian config travels through git
status: shipped
stage: workshop
branch: chore/vault-lens-seed
pr: 91
opened: 2026-07-13
shipped: 2026-07-13
---
# vault-lens-seed — Vault-lens seed: Obsidian config travels through git
**Links:** [machine-setup](../skills/machine-setup.md) ·
[vault-lens history](../history/workshop/mechanism/vault-lens.md) · Terms:
[vault lens](../HOME.md#terms)

## Goal
The vault lens becomes a one-phrase apply instead of a hand recipe —
seed config committed to the repo (`.claude/vault-seed/`),
[machine-setup](../skills/machine-setup.md) copies it into the
gitignored live `docs/.obsidian/` on demand.

## Out of scope
- Committing anything under `docs/.obsidian/` (stays gitignored).
- `.gitattributes` changes (a later normalization would create a
  giant one-time diff).
- Chasing Obsidian autoformat/CRLF settings (documented as known
  behavior instead).
- Any other `.obsidian` file beyond the two seeded.

## Plan
1. Bench birth: branch chore/vault-lens-seed → spec + memory stub →
   draft PR.
2. Task-local edits (no D-number — workshop tooling, no
   roadmap-level change):
   - CREATE `.claude/vault-seed/graph.json` — the four color groups
     (history gray · data blue · skills green · memory+specs
     yellow), default filter `-path:history`, sane graph defaults;
   - CREATE `.claude/vault-seed/bookmarks.json` — DASHBOARD · HOME ·
     ROADMAP · LAWS, vault-relative paths;
   - [machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
     becomes the copy procedure behind the phrase "apply the vault
     lens"; the Verify line follows;
   - the machine-setup skill stub's description also fires on that
     phrase.
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no
   merge; founder approval follows external review.

## Done means
- [x] Both seed JSONs parse and match Obsidian's schema
- [x] [machine-setup §Vault lens](../skills/machine-setup.md#vault-lens)
      is the new procedure
- [x] The stub fires on "apply the vault lens"
- [x] `node scripts/check-links.mjs` passes
- [x] Lint + tests green

## Deviations
none

## Open questions
none
