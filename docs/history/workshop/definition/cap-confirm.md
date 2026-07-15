---
type: history
slug: cap-confirm
shipped: 2026-07-15 15:35
pr: 138
---
# cap-confirm — Confirm the Max routine cap

## Status
Shipped — merged as
[PR #138](https://github.com/wsher0901/roam/pull/138) on the founder's
word, after their external review of the factual claim (15/day, flat
across Max tiers). Every gate on the way out waited on the pushed
commit's Actions run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
A currency touch, not a decision. The Max routine cap is verified —
15 runs/day, flat across Max tiers per Anthropic's routines docs — so
the two docs that still hedged toward a live counter get firmed into
stated fact. Codifies the budget already written into
[D-041](../../../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009);
no new decide. Two doc edits, one commit:
[SETUP §cloud](../../../SETUP.md) Cloud-lane-worker entry and
[liftoff §2](../../../skills/liftoff.md). Out of scope: any change to
the 15/day number itself, the delegation mechanics, product code.

## Pending issues
None. The factual claim rode on the founder's external review; that
review is done and the go-ahead given at THE GATE.

## Left / idle
Nothing parked.

## The story
Born this session from the kickoff. The delegation architecture
([D-041](../../../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009))
wrote the daily routine budget as a documented-but-unverified number,
hedged in two places pending a live check. That check is done; this
task retires the hedges. The firmed text adds the grain the hedges
lacked: per-account not per-routine, GitHub-triggered runs count while
one-off manual runs do not, rejection past 15 until the daily reset
unless usage credits are on, and the live-counter location. The
liftoff line also states that GitHub-triggered spawns count against the
budget and the sorted tail truncates at the remaining daily allowance.
One wrinkle: the bench memory first quoted the old hedge phrases
verbatim, which tripped the "no hedge survives" sweep on itself; the
quote was paraphrased so the corpus sweep stays clean.

## Where to look
Edits: [SETUP.md](../../../SETUP.md) Cloud-lane-worker entry ·
[skills/liftoff.md §2](../../../skills/liftoff.md). Source decision:
[D-041](../../../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009).
PR: [#138](https://github.com/wsher0901/roam/pull/138). Live counter:
claude.ai/code/routines or claude.ai/settings/usage.
