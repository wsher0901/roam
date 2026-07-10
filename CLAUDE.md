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
- Never work directly on main. Every task starts from freshly pulled
  main on a branch named feat/<short-name>, fix/<short-name>,
  docs/<short-name>, or chore/<short-name>, carrying its roadmap ID
  when it has one (e.g. feat/v1.s3.t1-check-contract).
- Commit small and often ("feat: V1.S3.T1 add check contract");
  push after each commit; one pull request per task.
- NEVER merge a PR without my explicit approval. When a task is ready:
  run tests + linter, open the PR, summarize the change in plain
  language (include the Vercel preview link once previews exist), then
  ask me. Only after I approve: squash-merge, delete the branch, pull
  main, update docs/HANDOFF.md. (/ship does this.) Sole exception: a
  PR containing only docs/HANDOFF.md updates and/or docs/IDEAS.md
  additions (via /handoff or /ship) is opened and squash-merged
  immediately without asking (D-002, D-008).
- If I say anything like "done for today", "heading out", "wrapping
  up", or "bye": run the full /handoff procedure immediately without
  being asked.
- If I forget any of this, do it anyway without being asked.
- Before saying "done": run tests + linter and fix failures.
- When a task's work is complete, run /ship yourself — never declare
  a task done in conversation without it.
- Pacing law: finish before start — open lanes and pending blocks
  outrank new tasks. Recommendations needing my attention are capped
  at two ("Now:" + one parallel slot); beyond that, say the plate is
  full. Work needing no overview from me (fully specified, no
  decisions) may be proposed or run as extra lanes at your
  discretion. If I explicitly ask for "more", present the full
  ordered menu. Stopping is a valid next step.
- The moment I voice a new idea outside the current task's scope,
  append it as one dated line to docs/IDEAS.md without being asked.
  IDEAS.md additions ride whatever PR carries them, or the handoff
  micro-PR.

## Parallel lanes (v2 — native; D-020, supersedes D-016..D-019 mechanics)
- Lanes run as background agents (dispatched from `claude agents`) or
  `claude -w` worktree sessions — every lane opens a draft PR at
  birth and pushes every commit, so no work exists only in one place.
- Lanes never share a file (source vetting writes
  docs/data/SOURCES-<family>.md, consolidated at V1.S1.T7).
- Agent Teams (env flag in .claude/settings.json) may be used or
  proposed for research/review tasks: lead Fable/Opus, teammates
  Sonnet, max 4 teammates.
- Cloud sessions: only via claude.ai/code, only after a push-first
  canary; never end a session before its work is on origin.
- When lanes finish, pre-review their PRs against FOUNDATION, the
  roadmap line, and the reliability law before surfacing issues to me.

## Project knowledge & tracking
- Before any task: read docs/FOUNDATION.md principles and the active
  Stage (Vn.Sm) in docs/ROADMAP.md. Every PR must map to a roadmap
  task (Vn.Sm.Tk) or a GitHub issue ("Closes #N").
- Specs: a task that needs discussion gets a spec at
  docs/specs/<id>-<short-name>.md, born from the discussion that
  opens the task; the spec is the first commit on the task's branch,
  and the ROADMAP line links to it. Fully-specified simple tasks need
  no spec.
- Decisions are recorded with /decide into docs/DECISIONS.md — never
  leave a decision only in conversation.
- Weave rule: in any docs/ file, every mention of a roadmap ID,
  D-number, fact/param ID (F-*, TP-*), or sibling doc is written as a
  standard markdown link (GitHub-compatible; use heading anchors for
  D-numbers), never plain text.
- Record everything: any deviation from a task as written goes in its
  PR summary; any concern, gotcha, or open question goes in HANDOFF's
  Blockers at handoff; any decision gets a D-number. Nothing
  important may live only in conversation.
- New ideas go to the docs/IDEAS.md inbox, not into scope, until
  triaged.
- Claude Design is a no-write surface: only extracted values (design
  tokens, constants) enter the repo, via a paste block under the
  lane's roadmap ID — never its markup or export bundles.
- docs/HANDOFF.md has a single writer: the cockpit session the
  founder is actively driving (via /handoff or /ship). Parallel and
  background lanes never write it — they speak through their draft
  PRs.
- docs/ is also an Obsidian vault: docs/.obsidian/ must stay
  gitignored.
- Work tracking lives in GitHub Issues + the project board; do not
  create parallel todo files.
- Operating manual & cockpit: docs/HOME.md — tool routing, the daily
  loop, the information hierarchy, how state syncs. Git outranks
  notes; ask the claim question before starting any task.
- Retroactivity law: when a new documentation practice is adopted
  (linking, frontmatter, logs), apply it to all pre-existing files
  as a one-time machine-executed backfill in the same PR — old files
  are never second-class.
- Derived values (counts, totals, statuses) are never written as
  literals in templates, commands, or generated docs — compute them
  from their source at render time. If a number can be counted,
  count it.

## Safety rules (non-negotiable)
- This repo is PUBLIC. NEVER include secrets, API keys, tokens,
  passwords, or personal data anywhere: not in code, docs, examples,
  or commit messages. Keys live in `.env` (gitignored); keep
  `.env.example` updated with placeholder values only.
- No destructive commands (rm -rf, force-push, db drops) without
  asking.
- Unsure? Stop and ask.

## Self-improvement
- When I correct you, update this CLAUDE.md so the mistake never
  repeats.

## Tech stack (decided — D-001 + D-005)
- Next.js App Router (TypeScript, React 19) + Supabase (Postgres +
  Auth) + Vercel hosting.
- Frontend layer: Tailwind v4 + shadcn/ui (Base UI primitives, not
  Radix — D-007), Motion (Framer Motion), MapLibre GL maps, dnd-kit
  drag-and-drop, Vercel AI SDK ("AI SDK UI" flavor), TanStack Query +
  Zustand.
- Planning brain: Claude API, server-side only, streamed.
- Engine (checks + scoring) isolated as its own tested module
  (Python-extraction escape hatch for future ML tuning).
- Performance doctrine (stream-first, cache-heavy, parallel fan-out,
  co-located pooled DB): full text in docs/FOUNDATION.md.

## Equipment & stage-gated tooling
- Reference manual: .claude/skills/equipment-plan/SKILL.md (MCPs,
  plugins, planned subagents, per-stage tooling). Never stockpile —
  add tools only when their stage opens.
