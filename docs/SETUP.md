---
type: setup
title: Setup
status: living
---
# Setup — everything the workshop runs on

THE ENTRY CONTRACT
([D-064](record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)):
every entry is a replication spec — WHAT (the thing) · WHERE it is
configured (the exact screen, file, or command) · VALUES (every
non-default choice, exactly) · VERIFY (one probe that proves it
still holds) · SOURCE (the D-number or PR that carries the why).
An entry drops discovery stories, prior readings, and retired
detail — those live in the record, one pointer each. Status lives
on the DASHBOARD, never here. Split by lifetime: once-and-done
(repo-side or cloud) · per-machine · staged. The invocable
procedure for the per-machine column is the machine-setup skill —
say "I'm on a new PC" or "apply the vault lens".

ONE CARVE-OUT ON VALUES, because this repo is PUBLIC: secrets are
recorded by NAME ONLY, never by value — the value lives in
`.env.local` or a repository secret, and the entry names where.
[D-064](record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
states the field that way, and
[LAWS §Safety](LAWS.md#safety-non-negotiable) makes it absolute.

Sources:
[machine-setup](skills/machine-setup.md)
[DASHBOARD](DASHBOARD.md)

## Stack

WHAT · WHERE · VALUES — the decided stack, in `package.json` and
the repo layout:

- Next.js App Router — TypeScript, React 19
- Supabase — Postgres + Auth
- Vercel — hosting, deploys, previews
- Claude API — server-side only; scoring engine isolated in
  `engine/`
- Frontend: Tailwind v4 · shadcn/ui on Base UI ("nova" preset, NOT
  Radix) · Motion · MapLibre GL · dnd-kit · Recharts, via shadcn's
  chart components ([D-085](record/DECISIONS.md#d-085--recharts-is-the-chart-layer))
  · Vercel AI SDK ("AI SDK UI" flavor; NOT the paused RSC/streamUI
  variant) · TanStack Query · Zustand
- Component registries: `components.json` wires `@magicui` ·
  `@aceternity` · `@motion-primitives` · `@skiper`. Wiring is a
  supply line, never an endorsement — what lands obeys the ARRIVAL
  LAW in [DESIGN §The component kit](DESIGN.md#the-component-kit).
  VERIFY: `npx shadcn@latest add @<ns>/<item> --dry-run`.
- Layout: app code in `src/`, engine in `engine/` (hard boundary,
  no app imports), spike scripts in `scripts/spikes/`

Performance doctrine, verbatim from
[D-005](record/DECISIONS.md#d-005--stack-re-trial-upholds-d-001):
"stream-first (UI never blocks on the brain; partial results
render as they resolve), cache-heavy (every fetched fact stored in
Postgres with a freshness window — the dataset asset and the speed
mechanism are the same feature), parallel fan-out across the five
check families, DB region co-located with pooled connections."
Riders: the engine streams and caches from day one; the hard
engine boundary exists so it can later lift into a Python worker.

VERIFY: `npm ls next react tailwindcss` resolves; the engine
boundary is lint-enforced (`npm run lint`).

Sources:
[D-001 — tech stack](record/DECISIONS.md#d-001--tech-stack)
[D-005 — stack re-trial + frontend layer](record/DECISIONS.md#d-005--stack-re-trial-upholds-d-001)
[D-007 — shadcn on Base UI](record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)

## Once and done — repo-side (travels with git)

Everything here is a committed file, so VERIFY is "read the file"
and replication is `git clone`.

- **Claude settings** — `.claude/settings.json`. VALUES: plugins
  context7 · frontend-design · security-guidance ON; playwright
  OFF — deliberately, since the user-scope playwright MCP server
  is the live path and the plugin would duplicate its tools
  ([D-084](record/DECISIONS.md#d-084--the-global-design-stack));
  superpowers OFF. Env: Agent Teams ON; claude.ai MCP servers OFF
  inside Code.
- **Permission rails** — the same file. VALUES denied: force-push,
  hard reset, `rm -rf`, repo delete, admin/foreign-repo merges.
- **Hooks** — `.claude/hooks/`. VALUES: session-start (pull +
  print the board) · user-prompt-submit (close-lock) · session-end
  (push safety net).
- **CI** — `.github/workflows/ci.yml`. VALUES, in order: lint ·
  format · links · ledger · memory · tests · build.
- **Line endings** — `.gitattributes`, LF normalization repo-side.
- **Vault-lens seed** — `.claude/vault-seed/` (`graph.json` ·
  `bookmarks.json`); applied per machine by the machine-setup
  skill.
- **Skill stubs** — `.claude/skills/`, one folder per ritual;
  procedures live vault-readable in [docs/skills/](skills).
- **Reviewer subagent** — `.claude/agents/reviewer.md`, the
  pre-GATE advisory critic. VALUES: `model: opus` · `effort:
  high`; [ship §6](skills/ship.md#6--the-gate) invokes it at every
  gate.

VERIFY (all repo-side at once): `npm run lint && npm run
format:check && npm run check:links && npm run check:ledger && npm
run check:memory` — the same set CI runs.

Sources:
[LAWS §Safety](LAWS.md#safety-non-negotiable)
[skills folder](skills)
[D-044 — the pre-GATE critic](record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live)
· frame: [its spec](record/specs/reviewer-subagent.md)

## Once and done — cloud accounts

- **GitHub repository** — github.com/wsher0901/roam.
  WHERE: Settings → General. VALUES: public, MIT; SQUASH-MERGE
  ONLY (merge-commit and rebase disabled); branch auto-delete on
  merge ON; auto-merge enabled repo-wide (welds and micro-PRs arm
  `gh pr merge --auto --squash --delete-branch`).
  VERIFY: `gh api repos/wsher0901/roam --jq '{squash:.allow_squash_merge, merge:.allow_merge_commit, rebase:.allow_rebase_merge, autodelete:.delete_branch_on_merge, automerge:.allow_auto_merge}'`
  → `true,false,false,true,true`.
  SOURCE: drift found and fixed 07-16 —
  [the maiden-flight report](record/history/workshop/mechanism/maiden-flight-report.md).

- **Branch protection** — WHERE: Settings → Branches → `main`.
  VALUES: requires the CI check named `checks`; red is unmergeable
  by machine.
  VERIFY: `gh api repos/wsher0901/roam/branches/main/protection --jq '.required_status_checks.contexts'`
  → contains `checks`.
  SOURCE: [D-038](record/DECISIONS.md#d-038--ci-is-the-arbiter).

- **Vercel project** — WHERE: the Vercel dashboard, linked to the
  repo (deploys since [V1.S2.T3](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)).
  VALUES: `vercel.json` carries an `ignoreCommand` so docs-only
  pushes skip the build (exit-0-skips), hardened with `|| exit 1`
  so any git failure fails toward BUILD, never toward a deployment
  ERROR. Effect: ritual micro-PRs produce no deploy, no bot
  comment, no email; app PRs keep previews.
  VERIFY: `cat vercel.json` shows the `ignoreCommand` with its
  `|| exit 1` tail; a docs-only PR shows "Canceled by Ignored
  Build Step".
  SOURCE: [vercel-ignore-fix](record/history/workshop/mechanism/vercel-ignore-fix.md)
  (including the known side-effect: a docs-only push whose
  previous SHA sits beyond Vercel's shallow-clone horizon builds
  redundantly ONCE, which resets the horizon and self-heals).

- **claude.ai Project** — WHERE: claude.ai → the Roam Project →
  settings. VALUES: the instructions box carries
  [WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md) VERBATIM (box-is-a-copy;
  re-paste after every master edit). Working mode is CC-DIRECT at
  both seats; Web's one mandatory job is the external review of
  self-authored diffs.
  VERIFY: the box's version line matches the master's newest
  Version-history row.
  SOURCE: [D-046](record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  (surface doctrine) ·
  [LAWS §Workflow](LAWS.md#workflow-non-negotiable)
  (no-solo-approval).

- **Cloud lane-worker routine** — WHERE: claude.ai/code/routines.
  VALUES: trigger GitHub `pull_request.labeled` filtered to label
  `lane:cloud` on wsher0901/roam; the Claude GitHub App INSTALLED
  on the repo (`/web-setup` alone is NOT enough); "Allow
  unrestricted branch pushes" ON (lanes push
  `feat/|fix/|docs/|chore/`, never `claude/`); saved prompt = the
  master in [LANE-WORKER.md](LANE-WORKER.md) VERBATIM
  (box-is-a-copy — re-save after any master edit); model set to
  Opus 5.
  VERIFY: `gh api repos/wsher0901/roam/labels --jq '.[].name'`
  contains `lane:cloud`; the routine's saved prompt matches the
  master. Routine settings themselves are UI-only.
  SOURCE: when it fires —
  [parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder).

- **Routine run cap** — WHERE: the Anthropic account (Max 20x).
  VALUES: 15 runs/day, FLAT across Max tiers (20x buys throughput,
  not routine slots); per-account, not per-routine;
  GitHub-triggered runs count, one-off manual runs do not; past
  15, runs are rejected until the daily reset unless usage credits
  are on. Routine-born sessions appear under the routine's run
  history, not the main sessions list.
  VERIFY: `npm run count:runs` (mechanical read); live counter at
  claude.ai/code/routines or claude.ai/settings/usage.
  SOURCE: [liftoff §2](skills/liftoff.md#2--triage-every-open-item)
  budgets it.

- **Cloud clerk — RETIRED 2026-07-22**, routine deleted. Nothing
  is armed and no ritual reaches for it, so there is nothing here
  to reproduce. The charter text, the spawn preamble, the
  supersession, the verified record and the evidence pointers all
  live in one place:
  [the retired clerk charter](record/retired/clerk-charter.md).

- **Flight Cockpit routine** — WHERE: claude.ai/code/routines, a
  routine named "cockpit". VALUES: saved prompt = the master in
  [COCKPIT-CHARTER.md](COCKPIT-CHARTER.md) VERBATIM
  (box-is-a-copy; re-save after any master edit); NO GitHub
  trigger; API trigger ENABLED; model set to Opus 5. It is the
  FALLBACK birth (rung 3) and the summon workflow's engine — the
  primary birth is `--cloud`, below.
  FOUNDER ACTS, once (~3 min): create the routine → add the API
  trigger and generate the fire token ONCE (`sk-ant-oat01-…`,
  shown once, scoped to this routine only) → password manager
  FIRST → copy the routine id (`trig_…`, shown in the API-trigger
  modal) → store both machine-locally in `.env.local` as
  `COCKPIT_FIRE_TOKEN` · `COCKPIT_ROUTINE_ID` (per-machine, NEVER
  this public repo); regenerate the token if lost; the other seat
  repeats the paste at its next sitting.
  FIRING: `npm run fire:cockpit -- "<flight plan>"` — one
  daily-cap run per fire, INVISIBLE to `npm run count:runs`.
  **THE CAP MODEL, IN ONE SENTENCE, BECAUSE THREE SEATS HAVE
  MISCOUNTED IT:** a GitHub `lane:cloud` LABEL-SPAWN burns a routine
  run and IS counted by `count:runs`; an API `fire:cockpit` (and the
  summon workflow, which calls the same script) burns a routine run
  and is NOT — the script reads GitHub-triggered runs only; and a
  rung-1 `claude --cloud` BIRTH BURNS NO ROUTINE CAP AT ALL, because
  it is not a routine. So the true figure is always
  `count:runs` + every API fire this sitting, added by hand.
  VERIFY: `.env.local` contains both names (`grep -c COCKPIT_
  .env.local` → 2); the routine itself is UI-only.
  SOURCE: [D-046](record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  · [D-047](record/DECISIONS.md#d-047--cloud-born-cockpit)
  · bench: [flight-cockpit](record/specs/flight-cockpit.md).

- **The cockpit's `--cloud` birth — the PRIMARY vehicle.**
  WHERE: any terminal at a seat;
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  runs it and holds the mechanics of record.
  VALUES: `claude --cloud "<birth prompt>"`, where the birth
  prompt = the master in
  [COCKPIT-CHARTER.md](COCKPIT-CHARTER.md) VERBATIM + the standing
  clone-provenance directive + a pointer to the board's flight
  context + a one-line mandate. NO title line. `--cloud` demands a
  real TTY on BOTH ends and refuses every piped route (the harness
  shell · the `!` bang-prefix · redirected `Start-Process`), so
  the automated shape is a hidden window with NO REDIRECTION
  ANYWHERE — no pty wrapper is used or permitted — the prompt
  handed in as a file-read argument, NOTHING captured. The fire is
  BLIND by design, exit status only; the cockpit seats ITSELF on
  the board via its env-derived self-URL. Sessions born this way
  are LIST-NATIVE (they join the phone's Code-tab general list).
  VERIFY: exit 0 from the fire, then the cockpit's own greeting
  push and self-seat repaint on the board — a MISSING push is the
  failure signal.
  SOURCE: [D-047](record/DECISIONS.md#d-047--cloud-born-cockpit)
  · [D-051](record/DECISIONS.md#d-051--self-seat-birth)
  (blind fire) ·
  [cloud-born-cockpit](record/specs/cloud-born-cockpit.md).

- **Cloud environment** — WHERE: claude.ai/code settings →
  Environments. VALUES: the live environment is named **`Default`**
  (not "roam"). Its setup script installs `gh` from the UBUNTU
  ARCHIVE — `apt update || true && apt install -y gh || true` (the
  `|| true` guards keep the image's pre-existing
  `deadsnakes`/`ondrej` PPA failures from failing the script).
  `gh` AUTHENTICATES AUTOMATICALLY through the session's GitHub
  proxy: `GH_TOKEN` is the literal 14-character placeholder
  `proxy-injected` and the proxy substitutes real credentials in
  transit. The path is REST-SHAPED — `gh api` works repo-scoped;
  porcelain riding GraphQL (`gh pr list`) is proxy-blocked, its
  403 pointing to REST. A foreign repo answers a scoped 403 naming
  `add_repo`. The session ALSO receives a session-scoped GitHub
  MCP injection — two API paths, one credential boundary.
  VERIFY (from inside a cloud session): `gh api user` succeeds;
  `gh pr list` 403s pointing to REST.
  SOURCE: [D-049](record/DECISIONS.md#d-049--gh-second-path),
  probe-proven 2026-07-23; the corrected earlier reading is in
  [gh-second-path](record/history/workshop/mechanism/gh-second-path.md).

- **THE SUMMON ONE-LINER** — the command itself, which had no
  written home until 2026-08-06 and was composed at the desk each
  time. From any seat on a clean `main`:

  ```sh
  git checkout -q -b ops-summon-fire main && git commit -q --allow-empty     -m "ops: summon" && git push origin HEAD:ops/summon &&     git checkout -q main && git branch -D ops-summon-fire
  ```

  One empty commit onto the reserved branch. The workflow checks out
  `main` (never the pushed ref's script), fires, then DELETES the
  ref — so one push is exactly one rescue. Measured 2026-08-06:
  **push → a live cockpit in 13.7 seconds**, and unlike liftoff's
  blind fire it returns the session URL to the firing seat in the
  run's step summary. Story:
  [the summon test](record/probes/summon-test.md).

- **Summon workflow** — WHERE: `.github/workflows/summon.yml`
  (rung 4 of the connector ladder, LIVE). VALUES: two triggers — a
  push to the reserved branch `ops/summon` (the self-rescue path;
  pushing is git, not API, so a connector-dead cockpit can still
  do it) and `workflow_dispatch` with one optional `mandate` input
  (present, costless, UNUSED BY PREFERENCE). It runs
  `scripts/fire.mjs` for the cockpit target — the verified
  vehicle, reused as-is, never reimplemented — writes fire status
  and any returned session URL to the run's step summary, then
  DELETES the `ops/summon` ref, so one push is exactly one rescue.
  Its payload is a POINTER, never a plan. A summoned cockpit is
  routine-born, so it is LIST-INVISIBLE — reachable by its board
  link, which is why `--cloud` stays primary.
  FOUNDER ACT, REQUIRED before self-rescue works: add
  `COCKPIT_FIRE_TOKEN` and `COCKPIT_ROUTINE_ID` as REPOSITORY
  SECRETS (Settings → Secrets and variables → Actions) — the same
  values already in `.env.local`, password manager first. Without
  them the workflow reports `missing-secrets` and fails honestly.
  VERIFY: `gh secret list` shows both names (values never
  readable).
  SOURCE: [D-048](record/DECISIONS.md#d-048--cockpit-resilience).

- **The phone bootstrap** — rung 5, for no terminal and no GitHub.
  WHERE: the Claude app → new session on wsher0901/roam → paste
  verbatim. The session clones the repo, so it reads its own
  charter rather than carrying one:

```text
You are the Roam Flight Cockpit. Clone wsher0901/roam, read
docs/COCKPIT-CHARTER.md and adopt its fenced master verbatim,
then read the board's flight context — it is the authoritative
flight plan.
```

  VERIFY: none — UI-only, and whether the mobile app can create a
  session on a repo is UNPROVEN. Test at the next drill; the
  question was raised by
  [cockpit-resilience](record/specs/cockpit-resilience.md), which
  is frozen record now, so the ANSWER lands in that drill's own
  bench and comes back here as a VERIFY line.

- **Models & effort** — WHERE: `/model` and `/effort` per session;
  `.claude/agents/reviewer.md` for the critic; the routines UI for
  the two boxes. VALUES: effort ladder low · medium · high · xhigh
  · max. THE DEFAULT, one pick for everything: **Opus 5 · xhigh**,
  all work included. xhigh is the working ceiling — `max` only by
  explicit founder tag for rare one-shots; ultracode only by
  explicit founder tag for coverage-critical sweeps. Fable 5 is an
  optional SECOND OPINION only, never the seat. Throttle order
  under usage limits: reduce effort BEFORE downgrading the model.
  The critic runs `model: opus` · `effort: high` — the ALIAS, not
  a pin, because the alias resolves to Opus 5 and aliases survive
  deprecations where a pin does not. Both routine boxes are set to
  Opus 5 (a founder act in the routines UI, not a repo file).
  VERIFY: `grep -E 'model|effort' .claude/agents/reviewer.md`;
  `/model` in any session reports the current pick.
  SOURCE: [D-054](record/DECISIONS.md#d-054--the-landing-skill)
  (the Opus 5 · xhigh doctrine, retiring the Opus 4.8 / Sonnet 5
  reliance pair) ·
  [D-055](record/DECISIONS.md#d-055--agent-teams-the-boundary)
  (the alias verified rather than guessed).

- **Agent teams — founder-side config**, so any seat sets it up
  identically. WHERE: `/config`. VALUES: **Default teammate
  model** → **Default (leader's model)** — teammates do NOT
  inherit the lead's `/model` otherwise, and a teammate's model is
  FIXED AT SPAWN, so this setting is the only way they ride the
  lead's pick. Effort needs no setting (teammates inherit the
  lead's automatically). `teammateMode` stays **in-process** (the
  default): split panes need tmux or iTerm2 and are NOT supported
  in Windows Terminal, which both seats run — unavailable by
  construction, not by choice. Permissions need no per-teammate
  setup: teammates start with the LEAD's settings, their prompts
  surface in the lead session, and a teammate can neither approve
  a prompt for the founder nor relay a denied action to a sibling
  — so `.claude/settings.json`'s deny rails cover the team as they
  cover the seat.
  VERIFY: `/config` shows Default teammate model = Default
  (leader's model).
  SOURCE: WHEN to reach for a team —
  [HOME §Agent teams](HOME.md#agent-teams) ·
  [D-055](record/DECISIONS.md#d-055--agent-teams-the-boundary).

- **Hands: solo · subagents · team · lanes** — the founder's
  choose-your-hands rule. VALUES: solo (default) for sequential or
  single-file work · exploratory subagents for parallel READ-ONLY
  research inside one task (no spec needed) · agent team for ONE
  task splittable into file-disjoint subparts benefiting from
  cross-talk, founder present to steer, never long-unattended,
  lead + 2–4 teammates (start 2), delegate-mode lead for pure
  coordination, plan-approval for teammates touching shared or
  hard-to-reverse surfaces, NEVER for ritual/law files and never
  across tasks · parallel lanes for separate tasks on their own
  benches, unattended-capable. LITMUS: many hands on ONE bench
  with the founder watching = team · many benches = lanes ·
  reading only = subagents.
  VERIFY: none — a judgment rule, not a setting.
  SOURCE: [D-045](record/DECISIONS.md#d-045--hands-doctrine)
  · the boundary at [HOME §Agent teams](HOME.md#agent-teams).

- **Supabase** — arrives with
  [V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code);
  see [§Staged](#staged--turns-on-when-its-stage-opens).

THE WHY behind the cockpit's two API paths, what dies when each
one does, and the recovery ladder that follows:
[HOME §The cockpit's API paths & recovery ladder](HOME.md#the-cockpits-api-paths--recovery-ladder).
The rungs themselves (R0–R4b) live in that same HOME section;
[COCKPIT-CHARTER.md](COCKPIT-CHARTER.md) carries only the standing
duty to climb them and the tombstone line.

Sources:
[WEB-INSTRUCTIONS](WEB-INSTRUCTIONS.md)
[COCKPIT-CHARTER](COCKPIT-CHARTER.md)
[LANE-WORKER](LANE-WORKER.md)
[V1.S2 — skeleton](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)

## Per machine (procedure: machine-setup skill)

- **One clone per machine** — WHERE: the seat paths in
  [machine-setup §The law](skills/machine-setup.md#the-law).
  VERIFY: exactly one clone exists on the machine.
- **Git identity** — VALUES: personal name + GitHub noreply email;
  `core.autocrlf=true`; `git config roam.machine "<seat label>"`.
  VERIFY: `git config roam.machine` returns the seat label.
- **CLI tooling** — VALUES: `claude` current (`claude update`);
  `gh` authenticated.
  VERIFY: `claude --version`; `gh auth status`.
- **Obsidian** — VALUES: vault opened at `<clone>\docs`; the vault
  lens applied once per seat.
  VERIFY: `docs/.obsidian/graph.json` matches
  `.claude/vault-seed/graph.json`.
- **VS Code** — VALUES: Settings Sync ON (personal GitHub), Auto
  Save, word wrap. VERIFY: none — UI-only.
- **ccstatusline** — optional status bar. VERIFY: none — optional.
- **Vercel CLI** — VALUES: `npm i -g vercel` + `vercel login`
  (needed for S2+ deploy work). VERIFY: `vercel whoami`.
- **Secrets** — VALUES: machine-local only (`.env`, `.env.local`,
  `settings.local.json`, local MCP config); NEVER this public
  repo. VERIFY: `git check-ignore .env.local` succeeds.
- **The design stack** — VALUES: user scope, four parts — the
  `frontend-design` plugin · the `playwright` + `shadcn` MCP
  servers (context7 already served by its plugin) · the
  `# Design law (global)` section in `~/.claude/CLAUDE.md` · the
  `design-review` agent in `~/.claude/agents/`. Taste itself is
  NOT here: it lives in [DESIGN](DESIGN.md), which overrides the
  global law. WHICH SEATS HAVE RUN IT is not recorded here —
  per-machine status lives in
  [machine-setup step 12](skills/machine-setup.md#one-time-per-machine),
  its one home, and any outstanding seat rides
  [DASHBOARD](DASHBOARD.md) Needs-you until it is done.
  VERIFY: `claude plugin list`; `claude mcp list`; the two
  `~/.claude/` files match their master text in machine-setup.
  SOURCE: [D-084](record/DECISIONS.md#d-084--the-global-design-stack).
- **Remote Control** — VALUES: toggles installed on both machines,
  BACKSTOP only, never the plan — machine-off is the standard away
  posture (the cockpit flies the outing); go-remote remains the
  backstop for a machine that must stay on.
  VERIFY: `/config` → "Enable Remote Control for all sessions" =
  true.
  SOURCE: [D-046](record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online).

Sources:
[machine-setup](skills/machine-setup.md)
[LAWS §Safety](LAWS.md#safety-non-negotiable)

## Staged — turns on when its stage opens

Nothing here is armed. Each line names its stage and what turns on.

- **[V1.S1.T7](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)**
  — Supabase project provisioned; Supabase MCP configured (tokens
  per machine).
- **[V1.S2.T5+](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)**
  — Claude Design ↔ repo design-system sync, plus the optional
  Design MCP server — mechanics in
  [DESIGN-KICKOFF](DESIGN-KICKOFF.md).
  **TWO ITEMS LEFT THIS LINE ON 2026-08-11 AND ARE NOW ARMED**
  ([D-084](record/DECISIONS.md#d-084--the-global-design-stack)):
  "Claude renders and judges its own UI" and the design-critic
  paired with screenshots. They moved EARLY and deliberately, by
  the founder's ruling, and they moved to USER SCOPE — the
  playwright MCP server and the `design-review` agent live on the
  machine, in §Per machine, not in this repo. The playwright
  PLUGIN stays OFF in `.claude/settings.json`: it would duplicate
  the server's tools, so "off" here is a choice rather than a
  pending step.
- **[V1.S3.T1](ROADMAP.md#v1s3--engine-core--two-families-deep)** —
  check-module skill encoded from the settled contract; runtime
  tool architecture settled (a source-type question under the
  reliability law).
- **At first need** — api-ignition (route 1b): the routine's API
  trigger lets the control tower and liftoff ignite cloud lanes by
  endpoint, benches stay draft, and the ready-flip reverts to
  completion-only. Adopt at first need, verify-before-rely.
  SOURCE: [D-043](record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign).
- **RESOLVED, no longer staged** — the summon button is LIVE; its
  recipe and the required founder act are in
  [§cloud accounts](#once-and-done--cloud-accounts). The dispatch
  button shipped with it, but the PUSH trigger (`ops/summon`) is
  the point — self-rescue, not taps.
- **Needs no spec** — built-in exploratory subagents (parallel
  research inside one task), distinct from roadmap [P] lanes,
  which are separate sessions on separate branches.

Sources:
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)
[machine-setup](skills/machine-setup.md)
[parallel-lanes](skills/parallel-lanes.md)
[FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law)
[ROADMAP](ROADMAP.md)
