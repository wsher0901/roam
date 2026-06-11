# Roam — Project Instructions

## What we're building
A travel-planning app that produces tailored trip plans, reasoning about
conditions most apps ignore (weather per activity, moon phase, waves/tides,
seasonal closures, peak vs off-peak crowds, social trends).
Full product definition: docs/FOUNDATION.md. Decision log: docs/DECISIONS.md.

## Who you're working with
- Solo builder WITHOUT a CS background.
- Explain important decisions in plain language before implementing.
- For trade-offs: give 2-3 options with pros/cons and a recommendation.
- Prefer simple, boring, well-documented technology.

## Workflow rules (non-negotiable)
- I work from two computers. ALWAYS `git pull` at session start;
  commit + push before finishing. (/pickup and /handoff do this.)
- Never work directly on main. Every task starts from freshly pulled main
  on a branch named feat/<short-name>, fix/<short-name>, docs/<short-name>,
  or chore/<short-name>.
- Commit small and often with messages like "feat: add weather scoring";
  push after each commit; one pull request per task.
- NEVER merge a PR without my explicit approval. When a task is ready:
  run tests + linter, open the PR, summarize the change in plain language
  (include the Vercel preview link once previews exist), then ask me.
  Only after I approve: squash-merge, delete the branch, pull main,
  update docs/HANDOFF.md. (/ship does this.) Sole exception: a PR
  containing only a docs/HANDOFF.md update (written by /handoff or
  /ship) is opened and squash-merged immediately without asking (D-002).
- If I say anything like "done for today", "heading out", "wrapping up",
  or "bye": run the full /handoff procedure immediately without being asked.
- If I forget any of this, do it anyway without being asked.
- Before saying "done": run tests + linter and fix failures.

## Project knowledge & tracking
- Before any task: read docs/FOUNDATION.md principles and the active
  Stage (Vn.Sm) in docs/ROADMAP.md. Every PR must map to a roadmap task
  (Vn.Sm.Tk) or a GitHub issue ("Closes #N").
- Decisions are recorded with /decide into docs/DECISIONS.md — never leave
  a decision only in conversation.
- New ideas go to the docs/IDEAS.md inbox, not into scope, until triaged.
- docs/ is also an Obsidian vault: docs/.obsidian/ must stay gitignored.
- Work tracking lives in GitHub Issues + the project board; do not create
  parallel todo files.

## Safety rules (non-negotiable)
- This repo is PUBLIC. NEVER include secrets, API keys, tokens, passwords,
  or personal data anywhere: not in code, docs, examples, or commit
  messages. Keys live in `.env` (gitignored); keep `.env.example` updated
  with placeholder values only.
- No destructive commands (rm -rf, force-push, db drops) without asking.
- Unsure? Stop and ask.

## Self-improvement
- When I correct you, update this CLAUDE.md so the mistake never repeats.

## Tech stack (decided — DECISIONS.md D-001 + D-005)
- Next.js App Router (TypeScript, React 19) + Supabase (Postgres + Auth)
  + Vercel hosting.
- Frontend layer: Tailwind v4 + shadcn/ui, Motion (Framer Motion),
  MapLibre GL maps, dnd-kit drag-and-drop, Vercel AI SDK ("AI SDK UI"
  flavor — not the paused RSC variant), TanStack Query + Zustand.
- Planning brain: Claude API, server-side only, streamed.
- Engine (checks + scoring) isolated as its own tested module
  (Python-extraction escape hatch for future ML tuning).
- Performance doctrine: stream-first (UI never blocks on the brain),
  cache-heavy (every fetched fact stored in Postgres with a freshness
  window — the dataset IS the speed), parallel fan-out across check
  families, DB region co-located + pooled connections.
- Do NOT scaffold the app yet — scaffolding begins when V1.S1 opens.
