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
