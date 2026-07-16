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
- GitHub auto-merge — enabled repo-wide; welds and micro-PRs arm
  `gh pr merge --auto --squash --delete-branch` to fire on `checks`
  green.
- Vercel — project linked to the repo (deploys since V1.S2.T3).
- claude.ai — the Roam Project; its settings box carries
  WEB-INSTRUCTIONS verbatim.
- Cloud lane worker (routine) — created at claude.ai/code/routines;
  trigger GitHub `pull_request.labeled` filtered to label `lane:cloud`
  on wsher0901/roam; the Claude GitHub App installed on the repo
  (`/web-setup` alone is NOT enough); "Allow unrestricted branch
  pushes" ON (lanes push feat/|fix/|docs/|chore/, never claude/);
  saved prompt — the master block below; when it fires:
  [parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder).
  Plan: Max 20x — routine cap is 15 runs/day (confirmed via Anthropic's
  routines docs; the cap is flat across Max tiers — 20x buys
  throughput, not routine slots). Per-account, not per-routine;
  GitHub-triggered runs count, one-off manual runs do not; past 15,
  runs are rejected until the daily reset unless usage credits are on.
  Live counter: claude.ai/code/routines or claude.ai/settings/usage;
  mechanical read: `npm run count:runs`.

Saved prompt (master — the routine box is a copy; re-save from here
after any edit):

```text
You are a Roam cloud lane. The trigger is a pull request labeled
lane:cloud.
1. Check out the head branch of that PR (it already exists on
   origin — never work on main).
2. Read docs/memory/<id>.md on that branch — <id> is the task id
   in the branch name — then read docs/LAWS.md and
   docs/skills/parallel-lanes.md, and follow the lane law exactly.
3. Your FIRST act is the canary claim (parallel-lanes §Canary):
   one trivial commit setting the memory Status to "claimed by
   cloud — <date>", pushed. If that push is rejected, or the
   Status is a claim you do not own, or it is terminal (parked ·
   failed · held · shipped · superseded): pull, re-read, push
   nothing further, and terminate — another worker owns this
   bench. Otherwise WAIT for the cockpit's airborne ack per
   §Canary before real work.
4. Do the task in the PR's memory file and spec. Push every
   commit to the PR's branch. On ANY rejected push: pull, re-read
   your memory Status first, and obey it (the wake-lock).
5. Speak only through the PR: for any blocker, post a comment
   starting "BLOCKED:" and @mention wsher0901, then idle-wait for
   the reply.
6. On completion: final memory rewrite (the fourth diary moment),
   push, confirm the pushed commit's Actions run is green, flip
   the PR ready, and post a completion comment @mentioning
   wsher0901.
7. Never merge, never touch main, never edit
   DASHBOARD/ROADMAP/IDEAS/history. "Done" means founder-approved
   and merged — not your call.
```

- Models & effort (doctrine — the Web paste block's Model + Effort
  line draws from here). Effort ladder: low · medium · high · xhigh
  · max. Default: Opus 4.8 at xhigh. Fable 5 at xhigh is reserved
  for architecture- and brain-critical work. Agent Teams: lead
  Fable/Opus, at most 4 Sonnet teammates
  ([parallel-lanes §Vehicles](skills/parallel-lanes.md#vehicles)).
  Throttle order under usage limits: reduce effort before
  downgrading the model.
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
