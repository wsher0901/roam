---
type: memory
id: harness-vocab-rename
updated: 2026-07-20 · completion · cloud lane
---
# harness-vocab-rename — the `.claude/` harness files learn the D-046 vocabulary

## Status
complete — work pushed, CI mirror green, awaiting founder review on
[#180](https://github.com/wsher0901/roam/pull/180) · cloud lane ·
2026-07-20 21:45 UTC.

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
Nothing — both edits landed, the zero-stragglers grep is clean, and
the full CI mirror passed. Only the founder's review and the weld
remain, and those are never the lane's.

## The story
The D-046 rename
([#177](https://github.com/wsher0901/roam/pull/177)) deliberately
left `.claude/` untouched — outside the mandate's files-touched
list — and surfaced it at THE GATE as a follow-up candidate; the
board carried it under Needs-you awaiting the founder's word. The
word arrived 2026-07-20 in the cockpit-maiden part-2 fire payload:
founder-authorized, bench-first birth by the cockpit, flown
label-spawned per
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder).

The flight itself (2026-07-20, cloud lane): canary claimed 21:40
UTC, airborne ack ~1 minute later. One redelivered
`pull_request.labeled` webhook arrived citing the stale pre-canary
head SHA; the re-read-Status-first rule
([parallel-lanes §Wake-lock](../skills/parallel-lanes.md#wake-lock--parking))
killed it harmless — the same pattern battle-tested 2026-07-16. The
two edits went exactly as the spec's Plan wrote them: the pickup
stub's description and the hook's briefing directive now name the
baton-holder (control tower on the ground, cockpit in flight);
`node --check` green; the case-insensitive `.claude/` grep for
"cockpit" returns only the two rewritten lines, both new-meaning —
zero stragglers. Branch synced with main (merge — main had moved by
one board repaint); full CI mirror green (lint · format · links ·
ledger · memory · tests · build). No decisions were needed and no
dead ends hit — the spec's Plan was the whole flight.

## Where to look
- the contract: [spec](../specs/harness-vocab-rename.md)
- the two sites: `.claude/skills/pickup/SKILL.md` (frontmatter
  description) · `.claude/hooks/session-start.mjs` (the briefing
  directive string near the file's end)
- provenance: [flight-cockpit](../specs/flight-cockpit.md)
  (Out-of-scope + Deviations) ·
  [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  · [#177](https://github.com/wsher0901/roam/pull/177)
