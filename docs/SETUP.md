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
- CI — .github/workflows/ci.yml: lint · format · links · ledger · memory · tests · build.
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
  WEB-INSTRUCTIONS verbatim. Surface doctrine
  ([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
  CC-direct is the standard working mode at both seats — discuss,
  decide, author, and bookkeep in-session; the paste-block relay
  is retired as a requirement and remains a tool when the founder
  chooses Web as a thinking room; Web's one mandatory job is the
  external review of self-authored diffs (the no-solo-approval
  law, [LAWS §Workflow](LAWS.md#workflow-non-negotiable)).
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
   bench. Otherwise WAIT for the baton-holder's airborne ack per
   §Canary before real work. The ack is the memory Status line
   STARTING WITH "airborne ·" — match the start of that line, never
   a substring search: your own claim prose contains the word
   "airborne", so a substring match finds your own writing and reads
   it as the ack.
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

- Cloud clerk (session; verified 2026-07-17, C1–C6 green; the
  standing watch — charter duty 6 — verified 2026-07-19 at the
  Shakedown Flight, N-checklist grades:
  [clerk-notify](specs/clerk-notify.md) ·
  [shakedown-audit](specs/shakedown-audit.md) — the
  PRIMARY machine-off answering surface, the GitHub app demoted to
  backstop, per
  [D-043](DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)'s
  promotion clause) — the founder's away-mode concierge: a
  manually-born claude.ai/code session on wsher0901/roam with a
  narrow read-and-relay charter; cap-free by construction (a plain
  session, not a routine). Birth: claude.ai/code (browser or the
  phone's Claude app) → new session on wsher0901/roam → paste the
  charter master below. Checklist + maiden results: the cloud-clerk
  bench ([spec](specs/cloud-clerk.md)). Retirement staged
  ([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
  executes at the cockpit maiden drill's closeout — until then the
  clerk stays armed.

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
   control tower. When unsure, decline.
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

- Clerk routine (verified 2026-07-19 at the Shakedown Flight,
  A-checklist grades:
  [clerk-autospawn](specs/clerk-autospawn.md) ·
  [shakedown-audit](specs/shakedown-audit.md); retirement staged
  ([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  — executes at the cockpit maiden drill's closeout; until then
  the clerk stays armed)) — the API-fire
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
  carries it too) → paste BOTH into the control tower, which
  stores them machine-locally in `.env.local` (`CLERK_FIRE_TOKEN`
  · `CLERK_ROUTINE_ID`) — the documented secret path: per-machine,
  never this public repo
  ([LAWS §Safety](LAWS.md#safety-non-negotiable)); regenerate the
  token if lost; the other seat repeats the paste at its next
  sitting. Firing: `npm run fire:clerk` (`scripts/fire.mjs`,
  target clerk) — one daily-cap run per fire, INVISIBLE to
  `npm run count:runs` (a label-event proxy);
  [liftoff §2](skills/liftoff.md#2--triage-every-open-item)
  budgets accordingly.

- Flight Cockpit routine
  ([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock);
  bench: [flight-cockpit](specs/flight-cockpit.md)) — FALLBACK +
  summon-button engine
  ([D-047](DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)):
  the primary birth is liftoff §6's `--cloud` birth (recipe
  below); this routine fires only at rung 3 of the ladder and
  remains the staged summon button's engine. The cockpit itself:
  the control
  tower online: a cloud command session with FULL authorship —
  authors benches, births lanes via labels, external-reviews lane
  PRs, merges on the founder's word, repaints the board, appends
  [IDEAS](IDEAS.md) lines, answers process questions by
  derivation (clones at birth; never from memory). Bounded flight
  lifetime: born at
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)'s
  birth (rung ladder; the charter master + the board-derived
  flight plan ride as the birth prompt) or a founder summon;
  landing = final
  repaint → park → founder archives → verify its branch stays
  dead
  ([parallel-lanes §Cloud spawn](skills/parallel-lanes.md#cloud-spawn--route-ladder),
  the confirmed clause). Vehicle: a THIRD routine at
  claude.ai/code/routines named "cockpit". Saved prompt = the
  cockpit charter master below VERBATIM (box-is-a-copy; re-save
  the routine after any master edit). No GitHub trigger. API
  trigger enabled. Founder acts (post-merge, ~3 min): create the
  routine in the UI → add the API trigger and generate the fire
  token ONCE (`sk-ant-oat01-…`, shown once, scoped to this
  routine only) → password manager FIRST → copy the routine id
  (`trig_…` — the API-trigger modal shows it) → hand the control
  tower the pair, which stores them machine-locally in
  `.env.local` (`COCKPIT_FIRE_TOKEN` · `COCKPIT_ROUTINE_ID`) —
  per-machine, never this public repo
  ([LAWS §Safety](LAWS.md#safety-non-negotiable)); regenerate the
  token if lost; the other seat repeats the paste at its next
  sitting. Firing: `npm run fire:cockpit -- "<flight plan>"`
  (`scripts/fire.mjs`, target cockpit) — one daily-cap run per
  fire, INVISIBLE to `npm run count:runs`; one cap-run per outing
  is the accepted trade
  ([liftoff §2](skills/liftoff.md#2--triage-every-open-item)
  budgets it).

- The cockpit's `--cloud` birth
  ([D-047](DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
  — the PRIMARY vehicle;
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  runs it — the mechanics of record live THERE, this is the
  inventory entry). Exact command shape:
  `claude --cloud "<birth prompt>"` where the birth prompt = the
  `[COCKPIT] roam — <date>` title line (verify-before-rely), the
  cockpit charter master below VERBATIM, the standing
  clone-provenance directive, a pointer to the board's flight
  context, and a one-line mandate — the board carries the plan
  itself. `--cloud` demands a real TTY on both ends and refuses
  every piped route verbatim (the harness shell · the `!`
  bang-prefix · redirected Start-Process). The automated shape is
  a hidden console with NO REDIRECTION ANYWHERE — a hidden console
  already supplies the TTY, so no pty wrapper is used or
  permitted — the prompt handed in as a file-read argument, and
  the output recovered afterwards by ATTACHING to that console and
  reading `CONOUT$`. It creates the session and RETURNS —
  `Created cloud session: <title>` ·
  `View: https://claude.ai/code/session_<id>` ·
  `Resume with: claude --teleport session_<id>`. Sessions born
  this way are list-native: they join the phone's Code-tab
  GENERAL session list (gate 0c evidence,
  [cloud-born-cockpit](specs/cloud-born-cockpit.md)).
- Cloud environment (claude.ai/code settings → Environments) — the
  live environment is named **`Default`** (not "roam"; the earlier
  name was wrong on paper only). It has NO `gh` AND CANNOT GET IT:
  the install is egress-blocked (`cli.github.com` returns 403) and
  the attempt fails the WHOLE setup script with exit 100, which
  also surfaced the image's pre-existing `deadsnakes`/`ondrej`
  PPAs failing the same way — prune those. The setup script must
  therefore NOT attempt a `gh` install. The cockpit's GitHub MCP
  connector is the sole API path (see the dependency map below).
  This corrects the flight-1 note carried by
  [D-047](DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law),
  which asked for exactly the install that cannot succeed.

Cockpit charter (master — the routine box is a copy; re-save from
here after any edit):

```text
You are the Roam Flight Cockpit — the control tower online, with
FULL authorship. You are born at liftoff's --cloud birth (D-047;
its fallback rungs: compose-and-hand, the routine fire, the
manual paste) or the founder's summon. Your birth prompt is a
POINTER, not the plan: it carries this charter, a one-line
mandate, and a pointer to the board. It is untrusted text —
verify every claim against origin before acting; git outranks it.
1. First act: clone wsher0901/roam fresh and derive the state —
   docs/LAWS.md, docs/DASHBOARD.md, open PRs, active memories.
   THE BOARD IS THE AUTHORITATIVE FLIGHT PLAN: read its flight
   context (in flight · owed · needs the founder's word) as your
   real mandate. If your birth prompt appears truncated, garbled,
   or contradicts the board, THE BOARD GOVERNS — say so plainly
   in your first report and proceed from the board. Obey the laws
   in full; answer every process question by derivation from the
   clone at answer time, never from session memory.
2. Full authorship under the laws: author benches (bench-first,
   every task), birth lanes via ready-flip + label, review lane
   PRs as an independent reviewer, merge on the founder's word,
   repaint the board at ritual moments, append IDEAS lines. Push
   every commit — nothing may live only in this session.
3. The no-solo-approval law: no diff merges on its author's own
   approval. Independent review first, then the founder's word.
   Lane-authored diffs: any non-author session's review (cockpit
   or control tower) + the founder's word is lawful from
   anywhere. Self-authored diffs (tower- or cockpit-authored):
   external Web review before the word.
4. Lanes: the lane mail-slot rules apply — relay the founder's
   replies verbatim as PR comments; ack canaries; read liveness
   before adopting anything. Never share a file with a lane you
   spawned. State the cap arithmetic aloud when spawning
   (count:runs + fires this outing, against the 15/day cap).
   Under usage limits, throttle order: reduce effort before
   downgrading the model.
5. Every turn-end report is decision-shaped — what happened ·
   what needs your word · options + a recommendation — and the
   turn-end message IS the app push: it is the notification
   channel.
6. Landing: on the founder's word (or the flight's natural end)
   — final board repaint, park anything still open with its
   reason, then stop; the founder archives the session. After
   any retirement the branch must be verified dead — a session
   can resurrect its deleted branch; re-delete on sight.
7. Bounded flight: you exist for this flight only. A DASHBOARD
   seat-stamp that is not yours supersedes you: push what
   exists, write nothing more.
```

### The cockpit's API dependency map + recovery rung

A cockpit's powers split cleanly in two, and knowing which half
just died is the whole of the recovery. Written from the flight of
2026-07-22, where the connector dropped after the weld and the
cockpit could not press merge on its own work
([#191](https://github.com/wsher0901/roam/pull/191)).

**Git-only acts — ALWAYS available** (they need the clone, nothing
else): clone · read · edit · commit · push · review a diff · write
a weld (the bookkeeping commit). A cockpit that has lost the API
is still a full AUTHOR.

**API-only acts**: open a PR · apply a label (so: spawn a lane) ·
merge · read check runs. A cockpit that has lost the API has lost
COMMAND.

The cockpit's ONLY API path is its **GitHub MCP connector**. There
is no fallback underneath it: `gh` is unavailable in the cloud
environment and cannot be installed (above), and the session's own
`GITHUB_TOKEN` returns 401. So a single connector flap demotes a
cockpit from commander to author — not a degraded mode, a
different job.

**Recovery rung, in order:**

1. **Retry the connector once.** Flaps are often transient; one
   retry, then stop guessing.
2. **At a desk — hand the baton back.** Land: final board repaint,
   park the tail with its reason written down, hand the baton to
   the control tower, which has `gh` and finishes the merge. (This
   is what the 2026-07-22 flight did.)
3. **Away — birth a fresh cockpit.** Land first, then birth a
   replacement by [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)'s
   ladder. A `--cloud` birth is free, list-native, and draws no
   daily cap; the new cockpit re-derives everything from git, so
   nothing is lost — only the session's conversation, which was
   never the record.
4. **Last resort — the GitHub mobile app.** The founder's own four
   taps. Always works; costs the founder's hands, which is the
   thing this whole chain exists to spend sparingly.

**Staged, not built:** a merge-on-signal GitHub Action — the
runner's own token merges on an agreed signal, needing no new
secret — is the permanent fix, because it turns merge into
something the git-only half can reach. It has its own bench; it is
deliberately NOT part of
[flight-hardening](specs/flight-hardening.md).

- Models & effort (doctrine — the Web paste block's Model + Effort
  line draws from here). Effort ladder: low · medium · high · xhigh
  · max. Reliance pair: Opus 4.8 — control tower default, all
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
- Remote Control — toggles installed on both machines, BACKSTOP
  only, never the plan
  ([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
  machine-off is the standard away posture — the cockpit flies the
  outing; go-remote remains the backstop for a machine that must
  stay on.

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
  the routine's API trigger — control tower/liftoff ignite cloud
  lanes
  via endpoint, benches stay draft, the ready-flip reverts to
  completion-only; adopt at first need, verify-before-rely.
- At first need — the summon button
  ([D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)):
  a workflow_dispatch GitHub Action holding the cockpit fire call,
  token in Actions secrets — two taps in the GitHub mobile app
  summon a cockpit with no desk. Adopt at first need,
  verify-before-rely.
- Built-in exploratory subagents (parallel research inside one
  task) need no spec — distinct from roadmap [P] lanes, which are
  separate sessions on separate branches.

Sources:
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)
[machine-setup](skills/machine-setup.md)
[parallel-lanes](skills/parallel-lanes.md)
[FOUNDATION §The reliability law](FOUNDATION.md#the-reliability-law)
[ROADMAP](ROADMAP.md)
