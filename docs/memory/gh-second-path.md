---
type: memory
id: gh-second-path
updated: 2026-07-23 21:52 · birth · home PC
---

# gh-second-path — a second API path through the GitHub proxy

## Status

bench ready — 2026-07-23 21:52 · control tower · home PC.
Probe-gated: NOTHING in the mandate runs until the five-command
probe passes — verify-before-rely, adopt on evidence. Next act:
birth the probe session by rung 1 and record its outputs verbatim
below.

## What this task is

The official docs contradict the shipped premise twice over: `gh`
IS installable in cloud sessions (Ubuntu archive, allowlisted —
the earlier exit-100 failure used the egress-blocked
`cli.github.com` repo), and it authenticates AUTOMATICALLY through
the GitHub proxy via a proxy-injected placeholder. If the probe
proves it, the cockpit gains a second API path (D-049) and a
connector flap stops costing command. What stays true either way:
the raw token is a placeholder — only gh-through-proxy works.
Contract and mandate: [the spec](../specs/gh-second-path.md).

## Pending issues

- The probe has not yet flown. Any non-PASS shape: STOP, record
  verbatim, hold for the founder — the mandate does not run on a
  failed probe.
- Tower-authored, so [no-solo-approval](../LAWS.md) requires an
  external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

The whole mandate, probe-gated: the probe · D-049 · SETUP's
two-path API map + two supersession notes · the charter's R2 gh
rung · self-ID adoption · liftoff §7's `/tasks` line. Manual acts
after the weld (founder): routine box re-save · probe session
archive.

## The story

**Birth.** STEP 0 held clean: origin heads = `main` only (verified
after fetch --prune), the bench cut from the fresh tip `6b2b20c`,
tree clean. Spec and this stub are the birth commits; the draft PR
follows immediately. The founder confirmed the cloud environment's
setup script now carries `apt update || true && apt install -y gh
|| true`, so the probe's first birth runs setup fresh — slower,
then cached.

## Where to look

- [the spec](../specs/gh-second-path.md) — the contract: probe
  PASS shape, the five mandate items, the file list, Done-means.
- [cockpit-resilience](../specs/cockpit-resilience.md) ·
  [flight-hardening](../specs/flight-hardening.md) — the two
  record claims a green probe overturns (supersession notes only).
- [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — the ladder D-049 amends.
