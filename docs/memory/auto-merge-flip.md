---
type: memory
id: auto-merge-flip
updated: 2026-07-14 · birth · work PC
---

# auto-merge-flip — enable repo auto-merge so the D-038 self-merge law works as written

## Status

bench ready, no worker yet — birthed 2026-07-14 by work PC. The
cockpit runs this in-seat and ships it this session; no spec (fully
specified — steps live in the PR description).

## What this task is

Turn on repo-level auto-merge so the amended self-merge law works as
written: welds and micro-PRs arm `gh pr merge --auto --squash
--delete-branch` and fire on the pushed commit's `checks` green.
Discovered off during the ci-trust ship tail — GitHub rejected the
first `--auto` ("Auto merge is not allowed for this repository"), and
the tail fell back to watch-then-merge. This flips `allow_auto_merge`
true via `gh api`, verifies with a GET, and records the setting in
[SETUP §Once and done — cloud accounts](../SETUP.md#once-and-done--cloud-accounts).

## Pending issues

none.

## Left / idle

Enable via gh api → verify GET → SETUP line → full CI mirror + gate →
founder word → merge. Nothing parked.

## The story

(Written at ship — including whether this PR's own `--auto` merge,
the repo's first ever armed, fired on green as designed.)

## Where to look

The law it serves:
[D-038](../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027).
Target:
[SETUP §Once and done — cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
