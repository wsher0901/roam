---
type: spec
id: cockpit-resilience
title: Cockpit resilience — a cockpit that survives, announces, and replaces its own connector loss (D-048)
status: shipped
stage: workshop
branch: feat/cockpit-resilience
pr: 195
opened: 2026-07-22
shipped: 2026-07-22 16:36
---

# cockpit-resilience — surviving, announcing, and replacing a lost GitHub connector

> **SUPERSESSION NOTE — added 2026-07-23.** This spec's premise —
> the MCP connector is the SOLE API path, `gh` unavailable by
> design, redundancy in-session impossible — was OVERTURNED by
> live probe
> ([D-049](../DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely),
> [#207](https://github.com/wsher0901/roam/pull/207)): `gh`
> installs from the Ubuntu archive and authenticates through the
> GitHub proxy, REST-shaped (`gh api`; GraphQL porcelain blocked).
> The LADDER this spec built SURVIVES — resilience still ends
> outside the session — but R2 now carries an automatic gh rung
> and a single flap no longer costs command. The live procedure:
> [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
> Everything below is RECORD of the D-048 decision as made.

**Links:** [DECISIONS](../DECISIONS.md) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff](../skills/liftoff.md) · [IDEAS](../IDEAS.md) ·
precedent: [flight-hardening](flight-hardening.md)
([#193](https://github.com/wsher0901/roam/pull/193), which wrote the
dependency map this bench builds the ladder on) · evidence base: the
first end-to-end chain flight
([#191](https://github.com/wsher0901/roam/pull/191), 2026-07-22)

## Goal

One theme: **a cockpit that survives, announces, and replaces its
own GitHub connector loss.** [#193](https://github.com/wsher0901/roam/pull/193)
wrote down WHAT a connector-dead cockpit can and cannot do. This
bench gives it the ladder to climb back — five rungs, plus the
decide ([D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)) that settles which rescue vehicles are lawful and
which are not.

## Why (the decide's evidence)

The first end-to-end flight lost its cockpit's GitHub connector
mid-flight, stranding merge · label (so: lane spawn) · PR-open ·
CI-read. External research on 2026-07-22 corrected our understanding
of the mechanism:

- Cloud sessions receive a **session-scoped GitHub MCP injection**
  and have **no `gh` CLI BY DESIGN**. The connector is therefore the
  sole API path, and redundancy *inside* the session is impossible —
  this is architecture, not an environment defect. (It also corrects
  [#193](https://github.com/wsher0901/roam/pull/193)'s reason: the
  `cli.github.com` 403 was the SYMPTOM, not the cause.)
- Community reports attribute mid-session connector drops to idle
  timeout and context compression. Our cockpit sat idle on a long
  monitor while its lane worked — a matching profile.
- Official docs: an HTTP/SSE MCP server auto-reconnects with backoff
  up to five attempts, then is marked failed and must be retried
  manually from `/mcp`.

## Out of scope

- Firing the summon workflow, or pushing `ops/summon`, from this
  bench. The first fire is the founder's, after the weld.
- Merge-on-signal — REJECTED by [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047) with reasons, not deferred.
- A scoped GitHub token in the cloud environment — REJECTED for the
  same class of reason.
- Any file outside the FILES TOUCHED list.

## Plan — the five rungs

Written into the cockpit charter master in
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
unless stated otherwise.

**RUNG 0 · PREVENT.** A watching cockpit does not sleep on one long
monitor: it polls on a cadence — fetch origin, re-read the lane's
memory Status, check the PR — and reports only on change. The trade
is stated plainly in the charter: polling costs usage and context,
so the cadence is a dial (minutes, not seconds), and this is a
mitigation, not a guarantee.

**RUNG 1 · DETECT.** Immediately before ANY command act (merge ·
apply a label · open a PR · read CI), run one cheap connector probe
first and report the result in the same turn. Never attempt a
command act on an unverified connector.

**RUNG 2 · REPAIR IN PLACE.**
(a) Retry the failed call once — the client's own backoff may
already have recovered it.
(b) Attempt in-session revival from the shell: `claude mcp list`,
plus whatever reconnect/restart subcommand the installed version
exposes — read `claude mcp --help` FIRST, never guess flags.
Whether a session can revive its own injected connector this way is
UNPROVEN; verify at the next flight and record the answer in
Done-means as PROVEN / DISPROVEN. If it works, this rung is
automatic.
(c) If it cannot self-revive, the cockpit MUST tell the founder
explicitly, as its own turn, in one fixed form — never buried in a
paragraph; it is the whole message.

**RUNG 3 · DEGRADE** (already law,
[#193](https://github.com/wsher0901/roam/pull/193) — cross-reference
the dependency map, do not restate it). While the connector is down
the cockpit continues git-only work: author, commit, push, weld.
Commanding pauses; nothing is lost or redone.

**RUNG 4 · SELF-RESCUE.**
(a) `.github/workflows/summon.yml` — two triggers:
`workflow_dispatch` with one optional string input `mandate`, and
`push` on the reserved branch `ops/summon`. Steps: checkout ·
setup-node · run `scripts/fire.mjs` for the cockpit target with
`COCKPIT_FIRE_TOKEN` and `COCKPIT_ROUTINE_ID` from repository
SECRETS · write the fire status and any returned session URL to
`$GITHUB_STEP_SUMMARY` · then DELETE the `ops/summon` ref, so one
push = exactly one rescue. Never echo the token.
[`scripts/fire.mjs`](../../scripts/fire.mjs) is reused AS-IS — it is
the verified vehicle; the fire is not reimplemented. Concurrency:
group `summon`, `cancel-in-progress: false`. Payload is a POINTER,
never a plan.
(b) The dying cockpit pushes one empty commit to `ops/summon`, then
lands.

**RUNG 4b · SUPERSESSION, made explicit** — so the founder never
commands a dead cockpit by accident. A TOMBSTONE (the superseded
cockpit's final message, alone, nothing after it) · a REFUSAL GUARD
(on any founder message thereafter it re-derives from origin, and if
the board's seat stamp is not its own it replies with the tombstone
line and NOTHING else — rule 7's supersession, made loud) · a
SUCCESSOR DUTY (the new cockpit's first act after deriving state is
a board repaint marking the predecessor landed · superseded with its
session URL, and seating itself — so the board always names exactly
one live cockpit).

**RUNG 5 · LAST-RESORT BIRTH**, no terminal and no GitHub: the phone
bootstrap paste, recorded verbatim in SETUP. The session clones the
repo, so it reads its own charter. Path: Claude app → new session on
wsher0901/roam → paste. VERIFY BEFORE RELYING: whether the mobile
app can create a session on a repo is unproven — test at the next
drill, record here. The `workflow_dispatch` button is documented as
present but UNUSED BY PREFERENCE (the founder does not use the
GitHub app); it costs nothing and is never required.

## Plan — the decide and the corrections

**[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)**, house style, clauses by name: the five-rung resilience
ladder · the summon workflow live with both triggers (SETUP §Staged
resolves) · a summoned cockpit is routine-born and list-invisible,
reachable by push and the board link, so `--cloud`
([D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law))
stays PRIMARY because it is list-native · MERGE-ON-SIGNAL REJECTED
with reasons · a scoped token in the cloud environment rejected for
the same reason · a POINTER clause: D-047's rung-1 mechanics are
corrected by [#193](https://github.com/wsher0901/roam/pull/193), and
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
owns the birth shape.

**Corrections and filings:** [#193](https://github.com/wsher0901/roam/pull/193)'s
cloud-environment reason is corrected — no `gh` in cloud sessions is
BY DESIGN (session-scoped MCP injection), not merely egress-blocked;
the 403 was the symptom. [IDEAS](../IDEAS.md): close the
merge-on-signal and summon-staged lines with their outcomes, and open
ONE watch item — community reports suggest interactive web sessions
lose claude.ai connectors while ROUTINE sessions retain them, which
matches this flight (cockpit dead, lane alive). If it holds, the
rescue vehicle is the sturdier species and the `--cloud`-vs-routine
choice deserves re-decision. One data point plus one filed report —
a hypothesis, not a finding.

## Files touched

`.github/workflows/summon.yml` · `docs/DECISIONS.md` ·
`docs/SETUP.md` · `docs/skills/liftoff.md` (the recovery-ladder line
only) · `docs/IDEAS.md` · `docs/specs/cockpit-resilience.md` ·
`docs/memory/cockpit-resilience.md` · [DASHBOARD](../DASHBOARD.md)
via the ship tail. Nothing outside this list.

## Done-means

- [x] The cockpit charter master carries rungs 0, 1, 2, 4b and the
      cross-reference to rung 3, with rung 2c's warning in its fixed
      wording.
- [x] `.github/workflows/summon.yml` exists with BOTH triggers, runs
      `scripts/fire.mjs` (not a reimplementation), takes both secrets
      from repository secrets, writes status + session URL to
      `$GITHUB_STEP_SUMMARY`, deletes the `ops/summon` ref, echoes no
      token, and sets concurrency `summon` /
      `cancel-in-progress: false`.
- [x] The workflow parses as strict YAML (and passes actionlint if
      available).
- [x] The rung-5 phone bootstrap paste is recorded verbatim in SETUP,
      marked verify-before-rely.
- [x] [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047) is in [DECISIONS](../DECISIONS.md) in house style with
      every named clause, including both rejections WITH their
      reasons.
- [x] SETUP §Staged's summon-button line resolves to live.
- [x] SETUP's cloud-environment reason is corrected to by-design.
- [x] [liftoff](../skills/liftoff.md) gains the recovery-ladder line
      and nothing else.
- [x] [IDEAS](../IDEAS.md): merge-on-signal and summon-staged closed
      with outcomes; the routine-vs-interactive watch item opened as
      a hypothesis.
- [x] Nothing outside the FILES TOUCHED list; the workflow is NOT
      fired and `ops/summon` is NOT pushed from this bench.
- [x] Full CI mirror green locally AND the pushed head's Actions run
      green; ship §6's critic has run — three findings, all fixed on
      this branch (the `ops/summon` delete guard, the D-048 weave
      links, the stale `updated:` trigger word).
- [ ] AT THE NEXT FLIGHT (post-weld, recorded here): rung 2b
      in-session revival — PROVEN / DISPROVEN. Currently: unproven.
- [ ] AT THE NEXT DRILL (post-weld, recorded here): rung 5's mobile
      app can create a session on a repo — PROVEN / DISPROVEN.
      Currently: unproven — carried past the weld deliberately.
