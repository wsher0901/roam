---
type: memory
id: ci-trust
updated: 2026-07-14 · birth · work PC
---
# ci-trust — CI is the arbiter: Actions-green at every gate; the local gate mirrors all six CI steps; anchors born resolving

## Status

bench ready, no worker yet — birthed 2026-07-14 by work PC. The
cockpit runs this in-seat (no lane spawn); the content commit and
ship follow in this same session.

## What this task is

CI becomes the single arbiter of "green." THE GATE, every lane's
ready-flip, and LAWS' "done" all require the pushed commit's GitHub
Actions run to be green — local green never suffices. The preflight
gate becomes the full CI mirror (lint · format:check · check:links ·
tests · build), and decide runs check:links before an entry's first
push so a D-number heading and every link to it are born resolving.
Born from the CI-trust diagnosis: seven red Actions runs reached the
founder before any report did, because nothing local ever looked at
Actions.

## Pending issues

One founder decision, asked this session: enable GitHub branch
protection so main requires the CI check? The answer routes the
protection op and the decide entry's Decision and Affects lines.

## Left / idle

The decide entry + the six named edits + verification + ship to THE
GATE — all in this session. Nothing parked.

## The story

(Written as the work lands — see the final rewrite at ship.)

## Where to look

Spec: [ci-trust](../specs/ci-trust.md) · targets:
[ship](../skills/ship.md) · [decide](../skills/decide.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[LAWS §Workflow](../LAWS.md#workflow-non-negotiable) ·
[SETUP](../SETUP.md). The diagnosis and the run-log pattern
(fail→pass anchor stumbles across recent PRs) live in this session's
scrollback.
