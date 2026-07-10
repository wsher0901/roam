---
name: machine-setup
description: Per-machine environment setup and verification for Roam.
  Consult when a session starts on a fresh or unfamiliar machine,
  when git identity or the machine label looks wrong, when hooks or
  tools misbehave on one computer only, or when the founder says
  they're on a new/other PC.
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
  ([CLAUDE.md](../../../CLAUDE.md)'s safety law).

## One-time per machine

1. Git identity: personal name + GitHub noreply email (repo-local on
   the work PC, where the company identity is global; global
   elsewhere). core.autocrlf=true is fine — .gitattributes
   normalizes repo-side either way.
2. git config roam.machine "work PC" (or "home PC") — this stamps
   handoff notes.
3. claude update — the workflow assumes a current CLI (hooks,
   background agents, Agent Teams).
4. gh auth status → gh auth login if needed.
5. Obsidian: open the vault at <clone>\docs; install + enable the
   Dataview community plugin
   ([DASHBOARD](../../../docs/DASHBOARD.md)'s live views need it;
   Bases is core, no install).
6. VS Code: Settings Sync ON (personal GitHub), Auto Save, word wrap.
7. Optional but recommended: npx ccstatusline@latest — persistent
   status bar (model, branch/worktree, context %, weekly usage).
8. MCPs only when their stage calls for them (see the
   [equipment-plan skill](../equipment-plan/SKILL.md)); tokens stay
   local.
9. Vercel CLI when S2+ work touches deploys: npm i -g vercel, then
   vercel login (work PC currently missing it).

## Verify (after setup, or whenever one machine misbehaves)

- node --version → Node 20+ (stack and hooks require it)
- git --version · gh auth status → authenticated
- claude --version → current
- git config roam.machine → returns this seat's label
- From the repo root: node .claude/hooks/session-start.mjs → prints
  the sync line + [HANDOFF](../../../docs/HANDOFF.md) contents
- Obsidian: [DASHBOARD](../../../docs/DASHBOARD.md) live views render
  (Dataview active)

## Every sitting

Nothing. The hooks own sync and briefing — open claude in the repo
and talk.

## Notes

- The repo needs no Python; a conda "(base)" prompt is harmless.
- Machine-specific traps discovered in the field land first in
  [HANDOFF](../../../docs/HANDOFF.md)'s Blockers & gotchas; permanent
  ones get promoted here via a normal PR (the handoff promote rule).
- PowerShell mangles em dashes (and some non-ASCII) on command
  lines — pass long text to commands via files, never inline.
