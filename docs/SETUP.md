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
- Reviewer subagent — `.claude/agents/reviewer.md`, the pre-GATE
  advisory critic; [ship §6](skills/ship.md#6--the-gate) invokes it
  at every gate
  ([D-044](DECISIONS.md#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame)
  · frame: [its spec](specs/reviewer-subagent.md)).

Sources:
[LAWS §Safety](LAWS.md#safety-non-negotiable)
[skills folder](skills/)

## Once and done — cloud accounts

- GitHub — wsher0901/roam, public, MIT; squash-merge ONLY
  (merge-commit and rebase disabled); branch auto-delete on merge.
  Preflight drift found 07-16 (merge-commit + rebase enabled,
  auto-delete off), fixed and enforced via `gh api` the same day.
- GitHub branch protection — main requires the CI check (`checks`);
  red is unmergeable by machine.
- GitHub auto-merge — enabled repo-wide; welds and micro-PRs arm
  `gh pr merge --auto --squash --delete-branch` to fire on `checks`
  green.
- Vercel — project linked to the repo (deploys since V1.S2.T3).
  Docs-only pushes skip the build (`vercel.json` ignoreCommand,
  exit-0-skips per Vercel's ignored build step; verified against
  Vercel docs 07-16; hardened 07-17 with `|| exit 1` so any git
  failure — e.g. exit 128 when `VERCEL_GIT_PREVIOUS_SHA` falls
  outside Vercel's ~10-deep shallow clone — fails toward BUILD,
  never toward a deployment ERROR): ritual micro-PRs produce no
  deploy, no bot comment, no email; app PRs keep previews.
  Documented side-effect of the hardening: a docs-only push whose
  previous SHA sits beyond the clone horizon builds redundantly
  ONCE — that build resets the horizon, so the skip self-heals.
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
  mechanical read: `npm run count:runs`. Routine-born sessions
  appear under the routine's run history at claude.ai/code/routines,
  not the main sessions list.

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

- Cloud clerk (session; verified 2026-07-17, C1–C6 green — the
  PRIMARY machine-off answering surface, the GitHub app demoted to
  backstop, per
  [D-043](DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)'s
  promotion clause) — the founder's away-mode concierge: a
  manually-born claude.ai/code session on wsher0901/roam with a
  narrow read-and-relay charter; cap-free by construction (a plain
  session, not a routine). Birth: claude.ai/code (browser or the
  phone's Claude app) → new session on wsher0901/roam → paste the
  charter master below. Checklist + maiden results: the cloud-clerk
  bench ([spec](specs/cloud-clerk.md)).

Clerk charter (master — the clerk session's opening paste is a copy;
re-paste from here after any edit):

```text
You are the Roam cloud clerk — the founder's away-mode
concierge. You are NOT a worker. Your charter is narrow and
absolute:
1. Repo access is READ-ONLY: clone fresh, read origin, report.
   Never write files, never commit, push, merge, branch, or
   open PRs. Never touch a bench, never hold the baton, never
   spawn or label anything.
2. On "how are the lanes?" or similar: fetch origin, read
   docs/DASHBOARD.md, open PRs, and each lane's memory Status;
   answer plainly — per-lane state, plus anything waiting on
   the founder.
3. On "reply to the lane on #N: <text>": post exactly <text> as
   a PR comment on #N (it posts as the founder), then confirm
   back with the comment link. Post ONLY what the founder
   explicitly dictates in this session.
4. Anything beyond this charter: decline and point to the
   cockpit. When unsure, decline.
5. Re-derive every answer from origin at answer time — never
   from session memory. You may idle indefinitely.
6. Watch duty — on the founder's "arm the watch": watch origin
   and this repo's open PRs for (a) new "BLOCKED:" comments,
   (b) lane completion @mentions or ready-flips, (c) CI red on
   main. On any event: END YOUR TURN with a one-paragraph
   announcement — which lane, what happened, what the founder
   must do — the turn-end IS the notification. Any founder
   message re-arms the watch unless it says "stand down".
   Events during a gap are caught on the next poll — origin
   forgets nothing.
```

- Clerk routine (staged → in verification with
  [clerk-autospawn](specs/clerk-autospawn.md)) — the API-fire
  vehicle for the clerk: a SECOND routine at
  claude.ai/code/routines named "clerk". Saved prompt = the clerk
  charter master above VERBATIM (box-is-a-copy; re-save the
  routine after any master edit) with this spawn preamble as its
  top line:

```text
Spawned at liftoff via API. Greet with a fresh one-line lane
summary, then arm the watch.
```

  No GitHub trigger. API trigger enabled. Founder acts
  (post-merge, ~3 min): create the routine in the UI → add the
  API trigger and generate the fire token ONCE (`sk-ant-oat01-…`,
  shown once, scoped to this routine only) → copy the routine id
  (`trig_…` — the API-trigger modal shows it; the routine's URL
  carries it too) → paste BOTH into the cockpit, which stores
  them machine-locally in `.env.local` (`CLERK_FIRE_TOKEN` ·
  `CLERK_ROUTINE_ID`) — the documented secret path: per-machine,
  never this public repo
  ([LAWS §Safety](LAWS.md#safety-non-negotiable)); regenerate the
  token if lost; the other seat repeats the paste at its next
  sitting. Firing: `npm run fire:clerk`
  (`scripts/fire-clerk.mjs`) — one daily-cap run per fire,
  INVISIBLE to `npm run count:runs` (a label-event proxy);
  [liftoff §2](skills/liftoff.md#2--triage-every-open-item)
  budgets accordingly.

- Models & effort (doctrine — the Web paste block's Model + Effort
  line draws from here). Effort ladder: low · medium · high · xhigh
  · max. Reliance pair: Opus 4.8 — cockpit default, all
  judgment/architecture work, at xhigh; Sonnet 5 (June 2026) —
  fully-specified, speed-sensitive, or volume work, at high.
  Brain-critical work: Fable 5 when available; until its return,
  Opus 4.8 · xhigh holds the seat. The plateau: xhigh is the working
  ceiling for judgment work — max only by explicit founder tag for
  rare one-shots; ultracode only by explicit founder tag for
  coverage-critical sweeps. Throttle order under usage limits:
  reduce effort before downgrading the model. Agent Teams: teammates
  are Sonnet 5
  ([parallel-lanes §Vehicles](skills/parallel-lanes.md#vehicles)).
- Hands: solo · subagents · team · lanes (doctrine,
  [D-045](DECISIONS.md#d-045--2026-07--hands-doctrine-solo--subagents--agent-team--lanes--the-litmus-is-one-bench-many-hands-vs-many-benches-vs-read-only-upholds-d-020-and-d-041)).
  The founder's choose-your-hands rule, verbatim:
  - Solo (default): sequential or single-file work.
  - Exploratory subagents: parallel READ-ONLY research inside one
    task; no spec needed (existing sanction).
  - Agent team: ONE task splittable into file-disjoint subparts
    benefiting from cross-talk; founder present to steer — never
    long-unattended; lead + 2–4 Sonnet 5 teammates (start 2);
    delegate-mode lead for pure coordination; plan-approval for
    teammates touching shared or hard-to-reverse surfaces; never for
    ritual/law files, never across tasks.
  - Parallel lanes: separate tasks, own benches, unattended-capable.
  - Litmus: many hands on ONE bench with the founder watching =
    team · many benches = lanes · reading only = subagents.
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
- V1.S2.T5+ — playwright plugin ON (Claude renders and judges its
  own UI) · design-critic subagent paired with screenshots · Claude
  Design ↔ repo design-system sync, plus the optional Design MCP
  server — mechanics in DESIGN-KICKOFF.
- V1.S3.T1 — check-module skill encoded from the settled contract;
  runtime tool architecture settled (a source-type question under
  the reliability law).
- At first need — api-ignition (route 1b,
  [D-043](DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)):
  the routine's API trigger — cockpit/liftoff ignite cloud lanes
  via endpoint, benches stay draft, the ready-flip reverts to
  completion-only; adopt at first need, verify-before-rely.
- In verification — clerk-notify (founder requirement 2026-07-17;
  bench: [spec + N-checklist](specs/clerk-notify.md)): the clerk's
  standing watch — charter duty 6 — on lane completions,
  `BLOCKED:` comments, and CI red on main, announcing each via a
  turn-end message so the app pushes a notification; first need =
  the Shakedown Flight; verify-before-rely, N1–N6 grade at the
  flight. (C6 datum, clerk maiden: zero app pushes on clerk
  turns — silence is the clerk's default; the announce must be
  explicit. Supersedes the phone-buzz/doorbell question.)
- In verification — clerk-autospawn (bench:
  [spec + A-checklist](specs/clerk-autospawn.md)): liftoff
  API-fires the clerk instead of the manual paste
  (`npm run fire:clerk`; recipe:
  [§cloud accounts](#once-and-done--cloud-accounts)). The API-cap
  trade is accepted by the founder flying it — 1 daily-cap run
  per fire vs the manual paste's 0, invisible to the `count:runs`
  proxy; A1–A5 grade at the flight.
- Built-in exploratory subagents (parallel research inside one
  task) need no spec — distinct from roadmap [P] lanes, which are
  separate sessions on separate branches.

Sources:
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)
[machine-setup](skills/machine-setup.md)
[parallel-lanes](skills/parallel-lanes.md)
[FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law)
[ROADMAP](ROADMAP.md)
