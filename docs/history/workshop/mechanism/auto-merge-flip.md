---
type: history
slug: auto-merge-flip
shipped: 2026-07-14 10:55
pr: 119
---

# auto-merge-flip — enable repo auto-merge so the D-038 self-merge law works as written

## Status

Shipped — merged as
[PR #119](https://github.com/wsher0901/roam/pull/119) on the
founder's pre-granted word (green gate, no external review needed).
Repo auto-merge is enabled and verified by a GET; the merge itself
was the repo's first-ever `gh pr merge --auto`, and it fired on the
weld commit's `checks` green exactly as designed.

## What this task is

Turn on repo-level auto-merge so the amended self-merge law
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027))
works as written: welds and micro-PRs arm `gh pr merge --auto
--squash --delete-branch` and fire on the pushed commit's `checks`
green. Discovered off during the ci-trust ship tail — GitHub rejected
the first `--auto` ("Auto merge is not allowed for this repository"),
and that tail fell back to watch-then-merge.

## Pending issues

none.

## Left / idle

Only the merge — armed as `--auto`, fires on the weld commit's green.
Nothing parked.

## The story

The ci-trust amendment taught the self-merge paths to arm `gh pr
merge --auto`, but the repo had never had auto-merge turned on, so
the very first `--auto` was rejected and that ship tail fell back to
watch-then-merge. This flips `allow_auto_merge` true via `gh api -X
PATCH repos/wsher0901/roam -F allow_auto_merge=true`, verified by a
GET (`allow_auto_merge: true`). One in-scope note surfaced by the
GET: the repo's `delete_branch_on_merge` is off, but every weld
passes `--delete-branch` explicitly, so branches still vanish on
merge — left untouched here (out of this task's one-line scope).
This PR's own merge is armed as the repo's first `--auto`; whether it
fires on the weld commit's green is recorded at ship.

## Where to look

The law it serves:
[D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027).
Target:
[SETUP §Once and done — cloud accounts](../../../SETUP.md#once-and-done--cloud-accounts).
