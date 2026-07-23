---
type: ideas
title: Ideas Inbox
status: living
---
# Ideas Inbox
Unsorted ideas land here. Nothing in this file is scope until it is
triaged into [ROADMAP](ROADMAP.md) via decide.

- 2026-06-11 (Claude Code, after [V1.S2.T2](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)): add `paths-ignore:
  docs/**` to the CI workflow so docs-only PRs (e.g. handoff
  micro-PRs) skip the full lint/test/build + preview deploy — weigh
  against losing the CI gate on docs-only changes before adopting.
- 2026-06-12 (Web, [V1.S1.T1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) amendment review): reachability globe —
  visualize how far the traveler's max-travel-hours reaches on a
  globe/map; open question: heuristic distance rings vs true
  flight-time isochrones.
- 2026-06-12 (Web, [V1.S1.T1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) amendment review): multi-origin trips and
  group preference merging — friends converging from different
  cities; merging several travelers' inputs into one plan.
- 2026-06-12 (Web, [V1.S1.T1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) amendment review): dataset licensing /
  export — the world-facts asset (revision series, forecast-vs-actual
  calibration pairs, coverage maps) as a licensable product someday;
  stays possible only because of the license-segmented storage law
  ([D-015](DECISIONS.md#d-015--2026-06--data-asset-law-bitemporal-append-only-license-segmented)).
- 2026-07-14 (Claude Code, [ci-trust](history/workshop/mechanism/ci-trust.md) weld): anchor-generating
  helper for D-links — a small step or script that emits the exact
  GitHub heading slug for a new D-number, so the heading and every
  link to it are born matching; kills the recurring first-push
  anchor stumble at its source (the pattern behind
  [D-038](DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).
- 2026-07-14 (Claude Code, ci-trust weld) — caveat on the
  paths-ignore idea above: with
  [D-038](DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)
  branch protection now requiring the `checks` context on main,
  ignoring `docs/**` in CI would leave that required check
  unreported and block every docs-only merge; adopt only with a
  matching protection carve-out.
- 2026-07-16 (Claude Code, [lane-liveness](specs/lane-liveness.md)): diagnose how two
  workers were dispatched to one id in the
  [ledger-integrity](history/workshop/mechanism/ledger-integrity.md)
  incident — liveness makes the collision harmless but not the
  double-dispatch; check auto-dispatch + a manual paste, or a prior
  session, spawning twice. — RESOLUTION EVIDENCE (2026-07-16,
  maiden-flight-report): a live webhook redelivery was observed at
  21:57 (a `pull_request.labeled` event citing a stale head SHA)
  and the wake-lock held; the morning orphan is classified
  manual-born; redelivery is the most plausible incident mechanism.
  — CLOSED 2026-07-19 on the founder's word at the
  [shakedown-audit](specs/shakedown-audit.md) gate: redelivery is
  the accepted mechanism (evidence above); the wake-lock remains
  the standing guard.
- 2026-07-16 (Web, full-pass audit): a check:board CI gate —
  machine-verify the [DASHBOARD](DASHBOARD.md) glance-line numbers
  against [ROADMAP](ROADMAP.md) checkbox counts at every PR; weigh
  against the board's deliberate least-authoritative status (git
  outranks it by design).
- 2026-07-16 (Claude Code, maiden-flight-report): PreToolUse
  permission-guard hooks — enforce the deny rails as hooks that
  block dangerous tool calls before they run, not only as settings
  permissions.
- 2026-07-16 (Claude Code, maiden-flight-report): name Agent View
  in [parallel-lanes §Vehicles](skills/parallel-lanes.md#vehicles),
  and prefer supervisor-backed background sessions for local lanes
  over bare detached spawns.
- 2026-07-16 (Claude Code, maiden-flight-report): cloud-session
  hygiene — unrecognized sessions at claude.ai/code archived on
  sight.
- 2026-07-16 (Claude Code, maiden-flight-report): a check:memory CI
  lint — validate memory files against
  [TEMPLATE](memory/TEMPLATE.md)'s locked format (Status first,
  four sections, vocabulary words).
- 2026-07-16 (Claude Code, maiden-flight-report; rewritten
  2026-07-17): Slack/Telegram doorbell mirror for lane @mentions —
  SUPERSEDED by clerk-notify
  ([spec](specs/clerk-notify.md)): the clerk's turn-end
  announcements are the doorbell, and the phone-buzz attestation
  closed as superseded (founder, 2026-07-17;
  [D-043](DECISIONS.md#d-043--2026-07--cloud-ignition--away-command-redesign--route-ladder-v2-ready-flip-then-label-is-the-recipe-of-record-api-ignition-and-the-cloud-clerk-staged-the-claude-app-the-single-away-surface-amends-d-041-upholds-the-lane-law-and-the-wake-lock)).
- 2026-07-17 (Claude Code, clerk-notify bench): DEFECT — the
  reviewer agent-type fails to register in-session (the Agent tool
  reports 'reviewer' not found); second recurrence 2026-07-17,
  graduated to defect per the
  [#159](https://github.com/wsher0901/roam/pull/159) rule; the
  synchronous general-purpose fallback carries ship §6
  ([ship-wiring story](history/workshop/mechanism/ship-wiring.md));
  diagnose post-flight.
- 2026-07-16 (Claude Code, maiden-flight-report): a separate bot
  identity for lane speech (optional) — lane comments currently
  post as the founder's own account, which blurs who is talking on
  a PR.
- 2026-07-16 (Claude Code, maiden-flight-report): home-seat
  missing-local-main anomaly — pickup found no local main branch on
  the home PC (healed 07-16 by rebuilding from origin, cause
  unknown); watch for recurrence.
- 2026-07-19 (Claude Code,
  [shakedown-audit](specs/shakedown-audit.md) finding 6): detached
  background verification is not verification — the resurrection
  spot-check ran as a detached background task, lost its exit code,
  and its main-only answer aged into a false all-clear four minutes
  later; proposal: [ship](skills/ship.md)'s verification norms gain
  "verification commands run foreground; results quoted from
  captured output" — founder decides at triage, not this bench.
- 2026-07-22 (Claude Code, liftoff): DEFECT — `npm run count:runs`
  fails at the work PC's Git Bash with the generic "could not read
  GitHub" message while `node scripts/count-routine-runs.mjs` run
  directly succeeds on the same seat, same second; `gh` is
  authenticated and the same `gh api` call works by hand, so the
  cause is the npm wrapper's environment (PATH mangling under Git
  Bash leaves `execFileSync("gh", …)` unable to resolve the
  executable), not GitHub. Cost: the script's honest failure sends
  [liftoff §2](skills/liftoff.md#2--triage-every-open-item) to ask
  the founder for a number the seat could have derived. Proposals to
  weigh: resolve `gh` via `process.env.ComSpec`/`shell: true` on
  win32, or print the underlying error instead of swallowing it in
  the catch.
- 2026-07-22 (Claude Code, liftoff — the first cockpit birth flown
  from the documented recipe): the rung-1 mechanics in
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  and [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)
  do not reproduce AS WRITTEN — "a hidden console hosting a winpty
  pty (Start-Process, output captured to file)" fails at the capture
  step, twice, for the same reason: `winpty` itself refuses whenever
  either of its own ends is redirected — `stdin is not a tty` when
  Start-Process redirects the streams, `stdout is not a tty` when the
  redirection happens inside the console (`> file 2>&1`), and this
  Git-for-Windows build exposes no non-tty escape flag (`winpty
  --help` lists only `--mouse`, `--showkey`, `--version`). What
  actually birthed the cockpit at 2026-07-22, exit 0, link returned:
  a hidden console with NO redirection anywhere — `Start-Process
  powershell -WindowStyle Hidden -NoExit -File <launcher>`, the
  launcher calling `claude --cloud "<prompt read from a file>"` — and
  the output recovered afterwards by ATTACHING to that console
  (`FreeConsole`/`AttachConsole(pid)` + `ReadConsoleOutputCharacterW`
  over `CONOUT$`) instead of capturing a stream. The insight worth
  keeping: a hidden console already gives `claude` a real TTY on both
  ends, so winpty is not needed at all — it was the probe's scaffold,
  and carrying it into the recipe added the one component that cannot
  coexist with capture. Proposal for triage: rewrite rung 1's
  mechanics to the console-attach shape and keep the working launcher
  as a script (`scripts/`) so the next liftoff does not re-derive it;
  the `-NoExit` console must be killed after the read, and the prompt
  must reach `claude` as a file-read argument, never a pipe.
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): rung 1 now
  documents the console-attach shape, winpty is gone from both homes,
  and the file-read argument plus the kill-after-read are written in.
  The launcher-as-a-script half stays OPEN — no machinery was built
  on that bench by mandate.
- 2026-07-22 (Claude Code, cockpit-outing closeout): HEADLINE —
  the airborne-ack token disagrees across its two homes:
  [TEMPLATE](memory/TEMPLATE.md) line 40 writes
  `airborne — <url · date>` (em-dash) while
  [parallel-lanes §Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
  lines 66/120 write `airborne · <url> · <date>` (middot). Proven
  live on [#191](https://github.com/wsher0901/roam/pull/191): the
  lane's watcher missed the em-dash ack, read the window as timed
  out, staged a stand-down, and only the wake-lock's rejected-push
  backstop saved the flight.
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): §Canary now
  owns the one canonical form and TEMPLATE copies it exactly.
- 2026-07-22 (Claude Code, cockpit-outing closeout): the lane
  watcher matched its OWN claim text ("awaiting the airborne
  ack") as if it were the ack — the recipe needs an anchored,
  machine-checkable match (a line-start pattern on the Status
  line), not a substring search.
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): the anchored
  start-of-Status-line match is stated in §Canary and in the
  lane-worker charter master, both naming the self-match trap.
- 2026-07-22 (Claude Code, cockpit-outing closeout): DEFECT —
  cockpit GitHub API flap with NO fallback: merge and PR-open are
  API-only in the cloud environment (no `gh` there, and the
  session's own `GITHUB_TOKEN` 401s), so one flap demotes a
  cockpit from commander to author — exactly what happened on
  [#191](https://github.com/wsher0901/roam/pull/191). Proposed
  fix: a merge-on-signal GitHub Action using the runner's own
  token (no new secret); interim recovery rung: land, then birth a
  fresh cockpit or hand the baton back to the control tower.
  — PARTLY CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): the
  git-only/API-only dependency map and the four-step recovery rung
  are now written into
  [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts).
  STAYS OPEN: the merge-on-signal Action itself — the permanent
  fix, deliberately kept off that bench, needs its own.
  — CLOSED 2026-07-22 by
  [#195](https://github.com/wsher0901/roam/pull/195), outcome
  REJECTED-AND-REPLACED: merge-on-signal is turned down by
  [D-048](DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — it restores only merge while a connector-dead cockpit still
  cannot spawn lanes or open benches, and since every session
  pushes as the founder a push-triggered MERGE cannot tell the
  baton-holder from a lane or a redelivered webhook, breaking
  no-solo-approval structurally. What ships instead is the
  five-rung ladder ending in a push-triggered SUMMON, which passes
  the same test because a stray spawn is recoverable noise, not a
  law breach.
- 2026-07-22 (Claude Code, cockpit-resilience bench): the summon
  button, staged since
  [D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  clause 8 and carried in
  [SETUP §Staged](SETUP.md#staged--turns-on-when-its-stage-opens)
  as "adopt at first need". — CLOSED 2026-07-22 by
  [#195](https://github.com/wsher0901/roam/pull/195), outcome
  SHIPPED LIVE as `.github/workflows/summon.yml`, with the staging
  line resolved. The button shipped, but the reason it shipped is
  the PUSH trigger (`ops/summon`) — self-rescue by a
  connector-dead cockpit, not taps in an app the founder does not
  use.
- 2026-07-22 (Claude Code, cockpit-resilience bench): WATCH ITEM,
  a hypothesis and not a finding — community reports suggest
  INTERACTIVE web sessions lose their claude.ai connectors while
  ROUTINE sessions retain them. That matches
  [#191](https://github.com/wsher0901/roam/pull/191) exactly: the
  interactive cockpit went connector-dead while its routine-born
  lane kept working. If it holds, the rescue vehicle is the
  STURDIER SPECIES, and the `--cloud`-vs-routine choice settled by
  [D-047](DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
  (list-native beats sturdy) deserves re-decision. Evidence so
  far: ONE data point plus one filed report. Watch across the next
  flights; do not act on it yet.
- 2026-07-22 (Claude Code, cockpit-outing closeout): the roam
  cloud environment's setup script fails exit 100 — the `gh`
  install plus the image's pre-existing `deadsnakes`/`ondrej` PPAs
  are egress-blocked (403). Prune the PPAs; see
  [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts).
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): SETUP now
  says the environment has no `gh` and cannot get it, the script
  must not attempt it, and the PPAs want pruning. The founder's
  script edit remains a manual act on the board.
- 2026-07-22 (Claude Code, cockpit-outing closeout): the cockpit's
  birth prompt arrived TRUNCATED mid-sentence, and it recovered
  only because [liftoff](skills/liftoff.md) had already welded the
  flight plan to the board. Proposed law: the
  [DASHBOARD](DASHBOARD.md) is the authoritative flight plan and
  the birth prompt is a pointer to it, never the carrier.
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): adopted, in
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  and the cockpit charter master — the board governs a truncated or
  contradicting birth prompt.
- 2026-07-22 (Claude Code, cockpit-outing closeout): a stray
  `.local/state/gh/device-id` was written into the repo root at
  rung-1 birth — wants a `.gitignore` line.
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): `.local/` is
  ignored.
- 2026-07-22 (Claude Code, cockpit-outing closeout): the daily-cap
  arithmetic is blind to API fires AND to trigger redeliveries —
  today's "15 of 15 remaining" was wrong twice over. Fold both
  blind spots into whatever counts runs for
  [liftoff §2](skills/liftoff.md#2--triage-every-open-item).
- 2026-07-22 (Claude Code, cockpit-outing closeout): non-author
  review purity — on bench-first flights the baton-holder always
  authors the memory stub and the airborne ack, so its review is
  never STRICTLY non-author; the payload is lane-authored, which
  is what the no-solo-approval law actually targets.
  [LAWS](LAWS.md) wants one clarifying sentence.
  — CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): the sentence
  is in [LAWS §Workflow](LAWS.md#workflow-non-negotiable) —
  "non-author" means the payload diff, and a baton-holder may never
  review a payload it wrote itself.
- 2026-07-22 (Claude Code, cockpit-outing closeout): four smaller
  ones — session naming at birth (`[COCKPIT]`/`[LANE]` prefixes so
  the phone's session list reads itself) · a notification taxonomy
  that separates lane pings from cockpit decisions · self-authored
  gates should carry the external review verdict onto the record
  automatically · the docs say "roam environment" while the live
  one is named "Default".
  — PARTLY CLOSED 2026-07-22 by
  [#193](https://github.com/wsher0901/roam/pull/193): the cockpit
  title line `[COCKPIT] roam — <date>` is in liftoff's birth
  prompt, marked VERIFY-BEFORE-RELY (confirm at the next birth
  whether the platform takes it; drop it if not) with the
  session-list doctrine beside it, and the environment is renamed
  `Default` in SETUP. STAYS OPEN: the notification taxonomy, the
  `[LANE]` half (no lane was born on that bench to test it), and
  self-authored gates carrying the review verdict onto the record.
- 2026-07-23 (Claude Code, clerk-retirement bench): the clerk
  retirement, staged since
  [D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  and carried in [SETUP](SETUP.md) as "executes at the cockpit
  maiden drill's closeout — until then the clerk stays armed". The
  founder deleted the routine on 2026-07-22, ahead of that
  closeout, which inverted the risk: the repo went on advertising a
  fallback rung and a notification channel that could no longer
  fire. Filed and closed in one entry — it was never an open
  question, only an execution the repo had not caught up with.
  — CLOSED 2026-07-23 by
  [#197](https://github.com/wsher0901/roam/pull/197), outcome
  EXECUTED, no new D-number:
  [D-046](DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  decided the retirement and
  [D-048](DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  superseded its last function, so this bench executed a standing
  decision (reasoning in
  [the spec](specs/clerk-retirement.md), so no future seat hunts
  for a missing decide).
  [liftoff](skills/liftoff.md)'s ladder now bottoms out at the
  [D-048](DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  phone bootstrap; `fire.mjs` takes `cockpit` only and a
  stale `clerk` fails honestly; SETUP's clerk sections are
  tombstoned, not deleted — C1–C6, N2/N3, A1/A4 stay on the
  record. One catch beyond the mandate's file list, flagged at the
  gate: [parallel-lanes §Mail slot](skills/parallel-lanes.md)
  still armed the clerk as BOTH the away-surface fallback and the
  notification watcher — the second the more dangerous, since a
  fallback that cannot fire fails loudly while a notification
  channel that cannot fire fails silently. Annotated the same way,
  with the channel pointed at the cockpit's turn-end (charter rule
  5) where it actually lives.
- 2026-07-23 (Claude Code, cloud-birth probe on the branch-only
  `ops/probe-cloud`, never merged): can a GitHub Action birth a
  LIST-NATIVE cockpit by running `claude --cloud` itself under a
  real pty — so even an emergency cockpit lands in the phone's
  general session list — instead of the routine fire that
  `summon.yml` uses
  ([D-048](DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)),
  which yields a list-INVISIBLE session? RESULT, three gates deep:
  (1) the pty (`script -qec '…' /dev/null`) DEFEATS the TTY refusal
  that killed every piped `--cloud` route — the runner's terminal
  is real, so the refusal recorded across the flight-hardening work
  is NOT a wall for a pty; (2) a fresh-install CLI then blocks on
  FIRST-RUN ONBOARDING (the theme picker) before it parses
  `--cloud`, cleared by pre-seeding `~/.claude.json`
  (`hasCompletedOnboarding` + `lastOnboardingVersion` — the theme
  step is part of onboarding) plus the per-project
  `hasTrustDialogAccepted` for the workspace-trust gate; keys
  verified against a real install (2.1.218), never guessed; (3)
  `--cloud` then runs FULLY HEADLESS, reaches the real cloud-birth,
  and fails `Error: Unable to get organization UUID` (exit 1) — a
  bare `setup-token` (`CLAUDE_CODE_OAUTH_TOKEN`) does not carry the
  account's org identity, which a logged-in `~/.claude.json` caches
  under `oauthAccount.organizationUuid`. That is WHY the routine
  fire works where this does not: the routine runs inside Anthropic
  infra with org context already established server-side, while the
  `--cloud` CLI resolves it client-side from local auth state a
  token alone does not populate. — DECISION (founder, 2026-07-23):
  KEEP the proven routine fire as the rescue engine; do NOT seed
  account identity into CI for an uncertain payoff. UNTRIED next
  step if ever revisited: inject `oauthAccount` (accountUuid ·
  organizationUuid · email) as masked repository secrets and retry
  — it may be the last gate or reveal another (org-scoped auth the
  setup-token may not carry). Bears on the interactive-vs-routine
  connector hypothesis above and on
  [D-047](DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)'s
  list-native-beats-sturdy choice: if a list-native rescue is ever
  wanted, this is the path and the org-UUID gate is its remaining
  wall.
- 2026-07-23 (Claude Code, liftoff — first cockpit birth flown from
  a BACKGROUND job, the env-clerk-scrub outing): two flight
  findings.
  (1) The VERIFY-BEFORE-RELY title line in
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  is DISPROVEN. The birth prompt opened with the title line
  `[COCKPIT] roam — 2026-07-23`, but the platform IGNORED it and
  auto-titled the session "Roam flight cockpit system
  initialization" from the charter content. Per §6's own
  instruction — "confirm at the next birth, record the answer here,
  and drop the line if it does nothing" — the title line should be
  DROPPED from the birth prompt: it does nothing. The session-list
  doctrine stands (the session is list-native and the founder finds
  it in the phone's general list), but the title is
  platform-generated, not prompt-supplied. Wants a
  [liftoff §6](skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  edit (a reviewed PR, not this micro).
  (2) POSITIVE — rung 1 (the hidden-console `--cloud` birth) flew
  CLEANLY from a background job. `Start-Process powershell
  -WindowStyle Hidden` gave `claude` a real TTY, `claude --cloud`
  returned exit 0 with the session link, and the launcher recovered
  the URL by reading its OWN console screen buffer
  (`ReadConsoleOutputCharacterW` over `CONOUT$`) — a simpler
  self-read variant of the recipe of record's cross-process
  `AttachConsole`. Confirms rung 1 works unattended; the self-read
  launcher is worth keeping as a script if a future liftoff wants
  it. Session born: `session_01XazSQ9TdZBwLEiEGEXYu6a`.
