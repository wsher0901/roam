---
type: memory
id: harness-vocab-rename
updated: 2026-07-20 · birth · cockpit
---
# harness-vocab-rename — the `.claude/` harness files learn the D-046 vocabulary

## Status
bench ready, no worker yet — birthed 2026-07-20 by the cockpit
(maiden part 2; label-spawn to follow).

## What this task is
Finish the
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
rename inside the `.claude/` harness: the pickup stub's description
and the session-start hook's briefing directive still say "cockpit"
in the old ground meaning; both learn the baton-holder vocabulary
(control tower on the ground, cockpit in flight). Wording only — no
behavior change. The contract is the
[spec](../specs/harness-vocab-rename.md).

## Pending issues
none

## Left / idle
Everything — the bench is freshly birthed; the two edits and the
zero-stragglers grep remain.

## The story
The D-046 rename
([#177](https://github.com/wsher0901/roam/pull/177)) deliberately
left `.claude/` untouched — outside the mandate's files-touched
list — and surfaced it at THE GATE as a follow-up candidate; the
board carried it under Needs-you awaiting the founder's word. The
word arrived 2026-07-20 in the cockpit-maiden part-2 fire payload:
founder-authorized, bench-first birth by the cockpit, to be flown
label-spawned per
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder).

## Where to look
- the contract: [spec](../specs/harness-vocab-rename.md)
- the two sites: `.claude/skills/pickup/SKILL.md` (frontmatter
  description) · `.claude/hooks/session-start.mjs` (the briefing
  directive string near the file's end)
- provenance: [flight-cockpit](../specs/flight-cockpit.md)
  (Out-of-scope + Deviations) ·
  [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  · [#177](https://github.com/wsher0901/roam/pull/177)
