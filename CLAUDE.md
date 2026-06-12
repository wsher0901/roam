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
  containing only docs/HANDOFF.md updates and/or docs/IDEAS.md
  additions (via /handoff or /ship) is opened and squash-merged
  immediately without asking (D-002, D-008).
- If I say anything like "done for today", "heading out", "wrapping up",
  or "bye": run the full /handoff procedure immediately without being asked.
- If I forget any of this, do it anyway without being asked.
- Before saying "done": run tests + linter and fix failures.
- When a task's work is complete, run /ship yourself — do not wait to
  be asked, and never declare a task done in conversation without it.
- Pacing law: finish before start — open lanes and pending blocks
  outrank new tasks. Recommendations needing my attention are capped
  at two ("Now:" + one parallel slot); beyond that, say the plate is
  full. Flexible cap: work that needs no overview from me (fully
  specified, no decisions) may be proposed or run as extra parallel
  lanes at your discretion — you determine what needs overview. If I
  explicitly ask for "more", present the full ordered menu. Never
  answer "what's next" with an unrequested menu. Stopping is a valid
  next step. Every briefing and completion ALSO appends a
  "Parallel-ready:" list (D-016) — all unblocked, unclaimed [P]
  tasks, each with tool label, branch name, and launch command — a
  paste-ready kickoff prompt for a Claude Code cloud session launched
  from Claude Desktop (D-017; git worktree recipe is the offline
  fallback only) — informational, exempt from the cap. If I give an
  explicit launch approval ("launch them" / "launch T4+T6"), launch
  those lanes yourself via `claude --remote` from freshly pulled
  main and report each session URL; that approval doubles as the
  claim answer for the launched lanes (D-017). Follow-ups from lane
  review route automatically per D-018: default = edit in this
  terminal on the lane's existing branch; recommend teleport only
  when the lane's own reasoning is needed; only genuinely new
  independent work becomes a new lane.
- The moment I voice a new idea outside the current task's scope,
  append it as one dated line to docs/IDEAS.md without being asked.
  IDEAS.md additions are exempt from task-diff purity: they ride
  whatever PR carries them, or the handoff micro-PR.

## Project knowledge & tracking
- Before any task: read docs/FOUNDATION.md principles and the active
  Stage (Vn.Sm) in docs/ROADMAP.md. Every PR must map to a roadmap task
  (Vn.Sm.Tk) or a GitHub issue ("Closes #N").
- Decisions are recorded with /decide into docs/DECISIONS.md — never leave
  a decision only in conversation.
- Record everything: any deviation from a task as written goes in its
  PR summary; any concern, gotcha, or open question goes in HANDOFF's
  Blockers/Gotchas at handoff; any decision gets a D-number. Nothing
  important may live only in conversation.
- New ideas go to the docs/IDEAS.md inbox, not into scope, until triaged.
- docs/ is also an Obsidian vault: docs/.obsidian/ must stay gitignored.
- Work tracking lives in GitHub Issues + the project board; do not create
  parallel todo files.
- Operating manual & cockpit: docs/HOME.md — tool routing, the daily
  loop, the information hierarchy, how state syncs. Git outranks
  notes; ask the claim question before starting any task.

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
- Frontend layer: Tailwind v4 + shadcn/ui (Base UI primitives, not
  Radix — D-007), Motion (Framer Motion), MapLibre GL maps, dnd-kit
  drag-and-drop, Vercel AI SDK ("AI SDK UI" flavor — not the paused RSC
  variant), TanStack Query + Zustand.
- Planning brain: Claude API, server-side only, streamed.
- Engine (checks + scoring) isolated as its own tested module
  (Python-extraction escape hatch for future ML tuning).
- Performance doctrine: stream-first (UI never blocks on the brain),
  cache-heavy (every fetched fact stored in Postgres with a freshness
  window — the dataset IS the speed), parallel fan-out across check
  families, DB region co-located + pooled connections.
- Do NOT scaffold the app yet — scaffolding begins when V1.S2.T1 opens
  (V1.S1 is docs + spike-script work only).

## Claude Code equipment (add when the stage opens — never stockpile)
- V1.S1: no extra tooling. Web research + plain Node spike scripts.
- V1.S2: add Supabase MCP (project, migrations, schema) and Vercel MCP
  (deploys, logs, preview URLs). Tokens live per-machine in local MCP
  config — never in this public repo.
- First UI work onward (V1.S2.T5+): add Playwright MCP so Claude Code
  renders, screenshots, and judges its own UI before showing me.
- After V1.S3.T1 settles the check-module contract: encode it as a
  project skill in .claude/skills/check-module/ — V1.S7's three modules
  must follow it exactly.
- Claude Code plugins (.claude/settings.json): context7,
  frontend-design, security-guidance enabled; playwright staged OFF
  until first UI work (V1.S2.T5); superpowers off. Machine-local
  plugins (e.g. Vercel) live in settings.local.json, never here.
- Roam's RUNTIME tool use is a source-type question under the
  reliability law (fuzzy facts may use Claude+web-search as a graded
  source, rendered as derived/unverified); settle the exact runtime
  architecture when V1.S3.T1 opens.
- Subagents (.claude/agents/): none speculatively. Two planned — a
  read-only "reviewer" wired into /ship once code + CI exist
  (V1.S2.T2+): checks each diff against FOUNDATION principles, the
  task's roadmap line, the reliability law, and the no-secrets rule
  before any PR opens; and a "design-critic" at first UI work
  (V1.S2.T5+), paired with Playwright screenshots, judging against the
  design tokens. Write each spec when its stage opens.
- Built-in exploratory subagents (parallel research within one task)
  need no spec — distinct from the roadmap's [P] lanes, which are
  separate sessions on separate branches.
