---
type: setup
title: Setup
status: living
---
# Setup — everything the workshop runs on

Pure listing, no explanations. What exists and where it's
configured, split by lifetime: once-and-done (repo-side or cloud) ·
per-machine · staged for a future stage. Status lives on the
DASHBOARD, never here. The invocable procedure for the per-machine
column is the machine-setup skill — say "I'm on a new PC" or "apply
the vault lens".

Sources:
[machine-setup](skills/machine-setup.md)
[DASHBOARD](DASHBOARD.md)

## Stack

- Next.js App Router — TypeScript, React 19
- Supabase — Postgres + Auth
- Vercel — hosting, deploys, previews
- Claude API — server-side only; scoring engine isolated in engine/
- Frontend: Tailwind v4 · shadcn/ui on Base UI ("nova" preset, not
  Radix) · Motion · MapLibre GL · dnd-kit · Vercel AI SDK ("AI SDK
  UI" flavor; not the paused RSC/streamUI variant) · TanStack Query ·
  Zustand
- Performance doctrine, verbatim from D-005: "stream-first (UI never
  blocks on the brain; partial results render as they resolve),
  cache-heavy (every fetched fact stored in Postgres with a
  freshness window — the dataset asset and the speed mechanism are
  the same feature), parallel fan-out across the five check
  families, DB region co-located with pooled connections." Riders:
  the engine streams and caches from day one; hard engine boundary
  so it can later lift into a Python worker.

Sources:
[D-001 — tech stack](DECISIONS.md#d-001--2026-06--tech-stack)
[D-005 — stack re-trial + frontend layer](DECISIONS.md#d-005--2026-06--stack-re-trial-vs-foundation-v1-d-001-upheld--frontend-layer)
[D-007 — shadcn on Base UI](DECISIONS.md#d-007--2026-06--shadcnui-builds-on-base-ui-not-radix)

## Once and done — repo-side (travels with git)

- .claude/settings.json — plugins: context7 · frontend-design ·
  security-guidance ON; playwright OFF (staged); superpowers OFF.
  Env: Agent Teams ON; claude.ai MCP servers OFF inside Code.
- Permission rails in the same file — denied: force-push, hard
  reset, rm -rf, repo delete, admin/foreign-repo merges.
- Hooks — session-start (pull + print the board) ·
  user-prompt-submit (close-lock) · session-end (push safety net).
- CI — .github/workflows/ci.yml: lint · tests · link check.
- .gitattributes — LF normalization repo-side.
- Vault-lens seed — .claude/vault-seed/ (graph.json ·
  bookmarks.json).
- Skill stubs — .claude/skills/ (one folder per ritual); procedures
  live vault-readable in docs/skills/.

Sources:
[LAWS §Safety](LAWS.md#safety-non-negotiable)
[skills folder](skills/)

## Once and done — cloud accounts

- GitHub — wsher0901/roam, public, MIT; squash-merge; branch
  auto-delete on merge.
- GitHub branch protection — main requires the CI check (`checks`);
  red is unmergeable by machine.
- Vercel — project linked to the repo (deploys since V1.S2.T3).
- claude.ai — the Roam Project; its settings box carries
  WEB-INSTRUCTIONS verbatim.
- Supabase — arrives with V1.S1.T7 (see §Staged).

Sources:
[WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md)
[V1.S2 — skeleton](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)

## Per machine (procedure: machine-setup skill)

- One clone per machine — work PC and home PC paths in
  machine-setup §The law.
- Git identity + noreply email; core.autocrlf=true;
  git config roam.machine "<seat label>".
- claude CLI current (claude update); gh auth login.
- Obsidian — vault at <clone>\docs; vault lens applied once.
- VS Code — Settings Sync ON (personal GitHub), Auto Save, word
  wrap.
- ccstatusline — optional status bar.
- Vercel CLI — npm i -g vercel + vercel login (S2+ deploy work).
- MCP tokens — machine-local only (.env, settings.local.json, local
  MCP config); never in this public repo.

Sources:
[machine-setup](skills/machine-setup.md)
[LAWS §Safety](LAWS.md#safety-non-negotiable)

## Staged — turns on when its stage opens

- V1.S1.T7 — Supabase project provisioned; Supabase MCP configured
  (tokens per machine).
- V1.S2.T2+ — reviewer subagent: read-only diff critic wired into
  ship, judging each diff against FOUNDATION, the task's roadmap
  line, the reliability law, and the no-secrets rule.
- V1.S2.T5+ — playwright plugin ON (Claude renders and judges its
  own UI) · design-critic subagent paired with screenshots · Claude
  Design ↔ repo design-system sync, plus the optional Design MCP
  server — mechanics in DESIGN-KICKOFF.
- V1.S3.T1 — check-module skill encoded from the settled contract;
  runtime tool architecture settled (a source-type question under
  the reliability law).
- Built-in exploratory subagents (parallel research inside one
  task) need no spec — distinct from roadmap [P] lanes, which are
  separate sessions on separate branches.

Sources:
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)
[machine-setup](skills/machine-setup.md)
[parallel-lanes](skills/parallel-lanes.md)
[FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law)
[ROADMAP](ROADMAP.md)
