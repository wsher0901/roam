---
type: spec
id: gh-second-path
title: gh second path — the cockpit gains a second API path through the GitHub proxy (D-049)
status: open
stage: workshop
branch: docs/gh-second-path
pr: 207
opened: 2026-07-23
shipped: —
---

# gh-second-path — a connector flap stops costing command

**Links:**
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff](../skills/liftoff.md) ·
[cockpit-resilience](cockpit-resilience.md) ·
[flight-hardening](flight-hardening.md) ·
[D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
·
[D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)

## Goal

Give the cockpit a second API path — and stop a connector flap
from costing command. The official docs contradict our shipped
premise on two points: `gh` IS installable in cloud sessions (the
Ubuntu archive is allowlisted; the earlier exit-100 failure used
the egress-blocked `cli.github.com` repo), and it authenticates
AUTOMATICALLY through the GitHub proxy via a proxy-injected
placeholder token. Verify-before-rely: a live probe GATES the
mandate — adopt on evidence, never on docs alone. The founder has
confirmed the cloud environment's setup script now carries
`apt update || true && apt install -y gh || true`.

What stays true either way: the raw `GITHUB_TOKEN` is a
placeholder — a script reading it directly still 401s; only
gh-through-proxy works.

## Out of scope

- Running the mandate on a failed probe — any non-PASS shape:
  STOP, record verbatim, hold for the founder.
- Rewriting any record file. The two overturned spec claims
  ([cockpit-resilience](cockpit-resilience.md) ·
  [flight-hardening](flight-hardening.md)) get dated supersession
  notes only.
- Any file outside the named list (see §Files touched).
- The probe session writing the repo: probe only — no commits, no
  pushes, no PRs.

## The probe (the gate — zero cap; a `--cloud` session is not a routine run)

Birth a probe session by rung 1 with the five-command prompt
(verbatim in [the memory](../memory/gh-second-path.md)):
(1) `gh --version` — did the setup script install it? ·
(2) `echo $GH_TOKEN` — expect the literal placeholder ·
(3) `gh api user` — does the proxy substitute real credentials? ·
(4) `gh pr list --repo wsher0901/roam` ·
(5) `gh api repos/anthropics/claude-code` — expect 403, the
proxy's attached-repo scoping; confirming the boundary is part of
the probe.

PASS = (1) installed · (3) and (4) authenticated · (5) scoped-403.
The first birth after the setup-script change runs setup fresh
(slower, then cached). Every output lands VERBATIM in the memory.
Cleanup: the probe session URL reported for founder archive; any
`claude/*` branch it left is a tripwire.

**Resolution, 2026-07-23:** the probe flew NON-PASS on (4) — a
GraphQL-allowlist 403, not an auth failure — and the STOP held:
the mandate did not run. The founder then WITNESSED the REST read
in a fresh interactive cloud session (`command -v gh` →
`/usr/bin/gh`, the cached setup-script install; `GH_TOKEN` set at
length 14 — the classifier lawfully refused the echo, and 14 is
the `proxy-injected` fingerprint; `gh api
repos/wsher0901/roam/pulls --jq '.[0].number'` → `207`) and
ordered the mandate run with four folds: REST-shaped wording
throughout · gh probes are API reads, never env-var echoes · the
toolset-bluff finding to memory + IDEAS · the three vehicle
findings ride first-class. This paragraph is that contract
amendment; the memory narrates it.

## Plan (mandate — probe green only)

1. **DECIDE — D-049**, house style. The Why carries the honest
   three-revision history: egress-blocked
   ([#193](https://github.com/wsher0901/roam/pull/193)'s reading)
   → "by design, MCP sole path"
   ([D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)'s
   premise, sourced from a community report) → installable +
   proxy-authenticated (the official docs, proven by this probe).
   Corrects the API-dependency map and amends
   [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)'s
   ladder. Records what stays true: the raw token is a
   placeholder; only gh-through-proxy works.
2. **SETUP — the API-dependency map rewritten**: merge · label ·
   PR-open · CI-read each now have TWO paths (the MCP connector,
   gh-through-proxy). Dated supersession notes on the two spec
   claims this overturns.
3. **CHARTER (the SETUP master)** — the connector ladder's R2
   gains an automatic rung between (a) and (c): on MCP failure,
   retry the same act via `gh`; if `gh` succeeds, command
   CONTINUES — report the flap and carry on. The founder-facing
   CONNECTOR DOWN message and the self-rescue drop one rung
   deeper. BOX RE-SAVE rides the manual acts.
4. **SELF-ID adoption** (same bench, same theme — the cockpit's
   own machinery): successor-duty and board seating use the
   documented self-URL —
   `https://claude.ai/code/${CLAUDE_CODE_REMOTE_SESSION_ID/#cse_/session_}`
   — replacing console-buffer scraping wherever a session states
   its OWN url. Note the automatic Claude-Session git trailer
   (CLI v2.1.179+) in SETUP as the free audit link.
5. **liftoff §7** — one line: `/tasks` at the tower lists cloud
   sessions; `t` teleports into one.

## Files touched — nothing outside

[DECISIONS](../DECISIONS.md) · [SETUP](../SETUP.md) ·
[liftoff](../skills/liftoff.md) ·
[cockpit-resilience](cockpit-resilience.md) +
[flight-hardening](flight-hardening.md) (supersession notes only)
· [IDEAS](../IDEAS.md) (added by the founder's post-probe fold:
the four findings ride first-class) · this spec +
[the memory](../memory/gh-second-path.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.

## Done means

- [x] Probe outputs recorded VERBATIM in the memory; PASS shape
      confirmed (or STOP — the mandate never ran). (The STOP DID
      hold on the NON-PASS shape; the founder's witnessed 4b +
      folds opened the gate — see §Resolution.)
- [x] D-049 in DECISIONS, house style, the three-revision Why,
      the placeholder-token truth recorded.
- [x] SETUP's API-dependency map: two paths per act (MCP
      connector · gh-through-proxy, REST-shaped).
- [x] Dated supersession notes on
      [cockpit-resilience](cockpit-resilience.md) and
      [flight-hardening](flight-hardening.md) — note only, no
      rewrite.
- [x] The R2 gh rung present in the charter master; the CONNECTOR
      DOWN message and self-rescue one rung deeper.
- [x] Self-ID: the documented self-URL replaces console-buffer
      scraping for a session stating its OWN url; the
      Claude-Session trailer noted in SETUP.
- [x] liftoff §7 carries the `/tasks` + teleport line.
- [x] Grep: no LIVING doc still claims the MCP connector is the
      SOLE API path (record + supersession notes excepted) — run
      2026-07-23 on the finished tree; every hit adjudicated.
- [x] `check:links` · `check:ledger` · `check:memory` green.
      (2026-07-23, home PC, on the completion tree.)
- [ ] Full CI mirror green locally AND the pushed head's Actions
      run green. (Local mirror green 2026-07-23; the final head's
      run is watched at the gate — ticks at the weld, the
      [shakedown-audit](shakedown-audit.md) precedent.)
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to
      the founder verbatim. (Runs at the gate announcement; ticks
      at the weld.)

## Pending

**Manual acts after the weld (founder):** re-save the cockpit
routine box from the updated charter master · archive the probe
session. **The queued next bench**, unchanged:
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) v5
(named by [#204](https://github.com/wsher0901/roam/pull/204)).

## Deviations

- The probe's (4) came back a GraphQL-allowlist 403 rather than
  the expected authenticated success; STOP held, and the gate
  reopened only on the founder's witnessed 4b + the four folds
  (§Resolution). The map and R2 are worded REST-shaped as folded.
- [IDEAS](../IDEAS.md) joined the file list on the founder's
  fold — the four probe findings ride first-class.
- One verbatim-clause exception: probe (3)'s `gh api user` reply
  is recorded by its `login` and public numeric `id` fields with
  the rest of the profile body elided —
  [LAWS §Safety](../LAWS.md#safety-non-negotiable)
  outranks the verbatim clause in a public repo.
- FOUR probe sessions exist to archive, not one — the 4b
  follow-up burned three births on channel failures (the memory
  and [IDEAS](../IDEAS.md) carry the specimens).

## Open questions

None at birth — the probe is the open question, and it gates
everything.
