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
  session, spawning twice.
