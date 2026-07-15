---
type: memory
id: cap-confirm
updated: 2026-07-15 · birth · work PC
---
# cap-confirm — Confirm the Max routine cap

## Status
airborne — bench born on `docs/cap-confirm`, draft PR next. Work
underway: firm the two placeholder hedges around the Max routine cap
into confirmed fact.

## What this task is
A currency touch, not a decision. The Max routine cap is verified —
15 runs/day, flat across Max tiers per Anthropic's routines docs — so
the two docs that still hedge ("record the LIVE number", "verify the
live number") get firmed into stated fact. Codifies the budget already
written into
[D-041](../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009);
no new decide. Two edits, one commit:
[SETUP §cloud](../SETUP.md) Cloud-lane-worker entry and
[liftoff §2](../skills/liftoff.md). Out of scope: any change to the
15/day number itself, the delegation mechanics, product code.

## Pending issues
The factual claim (15/day, flat across tiers) rides on the founder's
external review — the founder approves at THE GATE after that review,
not on my word.

## Left / idle
Nothing parked.

## The story
Born this session from the kickoff. The delegation architecture
([D-041](../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009))
wrote the daily routine budget as a documented-but-unverified number,
hedged in two places pending a live check. That check is done; this
task retires the hedges. The firmed text adds the grain the hedges
lacked: per-account not per-routine, GitHub-triggered runs count while
one-off manual runs do not, rejection past 15 until the daily reset
unless usage credits are on, and the live counter location.

## Where to look
Edits: [SETUP.md](../SETUP.md) Cloud-lane-worker entry ·
[skills/liftoff.md §2](../skills/liftoff.md). Source decision:
[D-041](../DECISIONS.md#d-041--2026-07--delegation-architecture--the-away-mode-chooser-go-remote-tether-idle-wait-label-spawned-cloud-amends-d-032s-wake-lock-and-the-dispatch-law-upholds-the-baton-law-and-d-009).
Live counter: claude.ai/code/routines or claude.ai/settings/usage.
