---
type: spec
id: harness-vocab-rename
title: Harness vocab rename — `.claude/` learns the D-046 vocabulary
status: shipped
stage: workshop
branch: chore/harness-vocab-rename
pr: 180
opened: 2026-07-20
shipped: 2026-07-20 22:01
---

# harness-vocab-rename — the `.claude/` harness files learn the D-046 vocabulary

**Links:**
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
· [flight-cockpit](flight-cockpit.md) (provenance: its Out-of-scope
+ Deviations surfaced this follow-up) ·
[pickup](../skills/pickup.md) ·
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)

## Goal

The
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
rename (cockpit = the control tower online; the commanding session
generically = the BATON-HOLDER) deliberately left the `.claude/`
harness files untouched — outside the mandate's files-touched list,
surfaced at the [flight-cockpit](flight-cockpit.md) gate as a
follow-up candidate. Founder-authorized 2026-07-20 (the
cockpit-maiden part-2 fire payload). This chore finishes the rename:
the two ground-meaning "cockpit" lines in `.claude/` learn the
post-D-046 vocabulary, so the harness speaks the language of the
law.

## Out of scope

- docs/ living doctrine — renamed at
  [#177](https://github.com/wsher0901/roam/pull/177); not touched
  here.
- [history/](../history/README.md), shipped specs, prior
  [DECISIONS](../DECISIONS.md) entries — immutable records, never
  renamed.
- Any BEHAVIOR change to the hook or the skill stub — wording only;
  the briefing directive's trigger logic, audience, and the hook's
  control flow stay exactly as they are.

## Plan

The whole known surface (grep-proven at birth, 2026-07-20 — the
only two `.claude/` mentions of "cockpit", both in the old ground
meaning):

1. `.claude/skills/pickup/SKILL.md` — the frontmatter description
   reads "cockpit sessions run this unprompted". Becomes:
   "Sit-down briefing; the baton-holder's session (control tower or
   cockpit) runs this unprompted on the founder's first message;
   dispatched lanes skip it."
2. `.claude/hooks/session-start.mjs` — the briefing directive
   string (near the file's end) says "if this is a cockpit session
   (the founder is driving it directly, not a dispatched lane or
   background agent)". Becomes: "if this is the baton-holder's
   session (the founder is commanding it — control tower on the
   ground, cockpit in flight — not a dispatched lane or background
   agent)". The surrounding sentences stay as written; the string
   concatenation idiom stays; `node --check` must pass.
3. Zero-stragglers proof: a case-insensitive grep for "cockpit"
   across `.claude/` returns only the two rewritten lines — both
   now new-meaning; no ground-meaning "cockpit" survives in the
   harness.

## Done means

- [x] The pickup stub's description names the baton-holder (control
      tower or cockpit) as the briefing's actor; dispatched lanes
      still skip.
- [x] The session-start hook's directive says the same, meaning
      preserved, `node --check .claude/hooks/session-start.mjs`
      green.
- [x] The zero-stragglers grep, stated in the PR summary with its
      output.
- [x] Full CI mirror green; the pushed commit's Actions run green.
