---
type: skill-procedure
title: Machine setup
status: living
---
# Machine setup

## The law

- Exactly ONE roam clone per machine. Known seats:
  - work PC: C:\Users\WonseukHer\MyFile\Github\roam
  - home PC: C:\Users\wonse\MyFile\Coding\roam

  If any other clone exists on a machine (e.g. a leftover
  C:\dev\roam), delete it and point Obsidian at the survivor.

- Secrets and MCP tokens live in machine-local config (.env,
  settings.local.json, local MCP config) — never in this public repo
  ([LAWS' safety law](../LAWS.md#safety-non-negotiable)).

## One-time per machine

1. Git identity: personal name + GitHub noreply email (repo-local on
   the work PC, where the company identity is global; global
   elsewhere). core.autocrlf=true is fine — .gitattributes
   normalizes repo-side either way.
2. git config roam.machine "work PC" (or "home PC") — this is the
   seat label the ritual stamps use ([DASHBOARD](../DASHBOARD.md)
   header, memory updated: lines).
3. claude update — the workflow assumes a current CLI (hooks,
   background agents, Agent Teams).
4. gh auth status → gh auth login if needed.
5. Obsidian: open the vault at <clone>\docs (no community plugins
   required).
6. VS Code: Settings Sync ON (personal GitHub), Auto Save, word wrap.
7. Optional but recommended: npx ccstatusline@latest — persistent
   status bar (model, branch/worktree, context %, weekly usage).
8. MCPs only when their stage calls for them (see
   [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens));
   tokens stay local.
9. Vercel CLI when S2+ work touches deploys: npm i -g vercel, then
   vercel login.

## Vault lens

Per machine, once — say "apply the vault lens" in any cockpit
session. The procedure that phrase runs:
1. Ensure docs/.obsidian/ exists (create it if missing — Obsidian
   adopts it on next launch).
2. Copy .claude/vault-seed/graph.json and
   .claude/vault-seed/bookmarks.json into docs/.obsidian/,
   overwriting those two files ONLY — nothing else in .obsidian/ is
   touched.
3. Remove the retired Dataview plugin if present: delete
   docs/.obsidian/plugins/dataview/ and its entry in
   docs/.obsidian/community-plugins.json.
4. Confirm to the founder: "vault lens applied — restart Obsidian
   to load it."

The lens itself: color groups — history gray · data blue · skills
green · memory+specs yellow · everything ungrouped (the core docs)
keeps the accent color; default graph filter `-path:history` (clear
it in Graph view whenever you want the archive visible); Bookmarks —
[DASHBOARD](../DASHBOARD.md) · [HOME](../HOME.md) ·
[ROADMAP](../ROADMAP.md) · [LAWS](../LAWS.md), the front door on
every seat.

Known behavior, harmless: Obsidian on Windows may realign markdown
tables and leave zero-content CRLF working-tree changes; git
normalizes them at commit and they never enter history.

Live docs/.obsidian/ stays gitignored; the seed travels in
`.claude/vault-seed/`, so every machine — including a future third —
gets the same lens from origin.

## Verify (after setup, or whenever one machine misbehaves)

- node --version → Node 20+ (stack and hooks require it)
- git --version · gh auth status → authenticated
- claude --version → current
- git config roam.machine → returns this seat's label
- From the repo root: node .claude/hooks/session-start.mjs → prints
  the sync line + [DASHBOARD](../DASHBOARD.md) contents
- Vault lens applied (if not: say "apply the vault lens")

## Every sitting

Nothing. The hooks own sync and briefing — open claude in the repo
and talk.

## Notes

- The repo needs no Python; a conda "(base)" prompt is harmless.
- Machine-specific traps discovered in the field land first in the
  current task's memory (task-local) or
  [DASHBOARD](../DASHBOARD.md)'s Needs-you (founder-facing);
  permanent ones get promoted here via a normal PR
  ([LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking)).
- PowerShell mangles em dashes (and some non-ASCII) on command
  lines — pass long text to commands via files, never inline.
