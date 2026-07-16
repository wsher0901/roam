---
type: history
slug: full-pass-fixes
shipped: 2026-07-16 12:46
pr: 144
---
# full-pass-fixes — close the July full-pass audit's findings

## Status
Shipped — merged as
[PR #144](https://github.com/wsher0901/roam/pull/144) on the founder's
word (approval granted at external review, conditional on green; the
route-1 amendment landed first). Every gate on the way out waited on
the pushed commit's Actions run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
The July full-pass audit's findings, closed in one pass — no decide
(every edit codifies an already-standing convention; precedent:
[skills-precision-pass](skills-precision-pass.md),
[#128](https://github.com/wsher0901/roam/pull/128)): external-item
clearing at [handoff §4](../../../skills/handoff.md), the routine
saved-prompt master in [SETUP](../../../SETUP.md), a mechanical cap
read (`count:runs`) consumed by
[liftoff §2](../../../skills/liftoff.md), collision hardening
(rejected-push wake + lane:cloud label idempotency), the reply-ack
window constant, the maiden-flight verify checklist, the Models &
effort doctrine, and README + Web currency. Out of scope: any
decide, the maiden flight itself, product code. Spec:
[full-pass-fixes](../../../specs/full-pass-fixes.md).

## Pending issues
none.

## Left / idle
Nothing parked. The maiden flight itself stays queued on the board
(its verify checklist now lives in
[parallel-lanes §Cloud spawn](../../../skills/parallel-lanes.md#cloud-spawn--route-ladder)).

## Founder confirmations carried in the kickoff
For the ship-tail repaint (the founder's word is the source, per the
external-item clearing rule this task adds to handoff §4): the D-041
one-time UI setup is COMPLETE (routine · GitHub App · RC toggles ·
lane:cloud label) — Needs-you #5 drops. Needs-you #1 stays, reworded
to "paste the current master once".

## The story
Born 2026-07-16 from the Web full-pass audit; worked by the cockpit
directly. Seven of the eight items landed as specified. The eighth —
the `--branch <n>` typo in WEB-INSTRUCTIONS — was already current on
main (`--branch <name>`, grep-proven): recorded as a stale finding
rather than "fixed", so the verified state stays honest.

One real bug surfaced by verification: the new counter's first run
failed with an empty-looking error despite a healthy `gh`. Root
cause: Node's `execFileSync` caps stdout at 1 MB by default and a
100-PR page overflows it (ENOBUFS); the debug detour that found it —
`e.stderr ?? e.message` hides the message because an empty stderr
string is not nullish — is itself worth remembering. Fixed with an
explicit 64 MB `maxBuffer`; the counter then printed the expected
"0 GitHub-triggered runs today · 15 remaining". A lint warning
(unused `catch (err)` binding) was fixed with a bare `catch`.

Placement calls, task-local: the saved-prompt master sits directly
under the Cloud-lane-worker entry in
[SETUP §cloud](../../../SETUP.md#once-and-done--cloud-accounts) with
the title line the kickoff gave; that entry's old "saved prompt as
in the route ladder" phrasing inverted to point at the master below
(the route ladder describes when it fires, not the prompt text).
The reply-ack window landed as a second "sibling constant" line in
[parallel-lanes §Canary](../../../skills/parallel-lanes.md#canary-handshake-both-sides),
mirroring the staleness window's form. At external review the
route-1 saved-prompt paraphrase was inverted to a pointer at the
SETUP master (one home per class — the route ladder says when it
fires, never what it says).

## Where to look
Spec: [full-pass-fixes](../../../specs/full-pass-fixes.md). The
counter: `scripts/count-routine-runs.mjs` (+ `count:runs` in
package.json). Edited: [handoff §4](../../../skills/handoff.md) ·
[SETUP §cloud](../../../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff §2](../../../skills/liftoff.md) ·
[parallel-lanes](../../../skills/parallel-lanes.md) (§Wake-lock ·
§Cloud spawn · §Canary) · README.md · [IDEAS](../../../IDEAS.md)
tail. PR: [#144](https://github.com/wsher0901/roam/pull/144).
