---
type: spec
id: env-clerk-scrub
title: Scrub the vestigial CLERK_ references from .env.example so nothing points at a retired routine
status: open
stage: workshop
branch: chore/env-clerk-scrub
pr: —
opened: 2026-07-23
shipped: —
---

# env-clerk-scrub — .env.example carries zero CLERK_ cruft

**Links:**
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
the retirement:
[clerk-retirement](../history/workshop/mechanism/clerk-retirement.md)
([#197](https://github.com/wsher0901/roam/pull/197)) ·
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)

## Goal

`.env.example` must carry ZERO `CLERK_` references. The clerk is
retired ([#197](https://github.com/wsher0901/roam/pull/197)) and
`scripts/fire.mjs` is cockpit-only, so any `CLERK_` text tells a
future seat about variables nothing reads. Remove it; keep the
`COCKPIT_` pair and the useful `trig_`-prefix guidance.

## The discrepancy the baton-holder found (read before editing)

The founder's mandate said `.env.example` "still carries the two
`CLERK_` placeholder lines." It does NOT — those assignment lines
(`CLERK_FIRE_TOKEN=your-fire-token` /
`CLERK_ROUTINE_ID=trig_your-routine-id`) were already removed by
[#197](https://github.com/wsher0901/roam/pull/197). What remains is
COMMENT PROSE (two sentences) that still names `CLERK_FIRE_TOKEN /
CLERK_ROUTINE_ID` while telling a seat they are dead and may be
deleted from `.env.local`.

So the payload is the founder's INTENT, not their literal words:
remove the two `CLERK_`-mentioning comment sentences, not
placeholder lines that no longer exist. The end state is identical
to what they asked for — a `.env.example` with no `CLERK_` anywhere.

## Out of scope

- Every file except `.env.example`. One file, nothing else.
- The `COCKPIT_FIRE_TOKEN` / `COCKPIT_ROUTINE_ID` pair — KEPT.
- The `trig_`-prefix / `invalid_routine_id` guidance in the comment
  — KEPT (it is live and useful for the cockpit routine).
- Any seat's `.env.local` — a founder act, not this bench's.

## Plan

In `.env.example`, in the "Routine fires" comment block, remove the
two sentences that name the clerk:

> The cockpit is the only routine: the clerk was retired 2026-07-22
> and its CLERK_ pair dropped from this file. If a seat's .env.local
> still carries CLERK_FIRE_TOKEN / CLERK_ROUTINE_ID, they are dead
> and may be deleted at that seat's next sitting.

Leave the rest of the block intact (the `fire:cockpit` header, the
generate-once and `trig_`-prefix guidance) and the `COCKPIT_` pair
below it. If a short closing clause reads better, `The cockpit is
the only routine.` may stay — but with NO `CLERK_` token.

## Done means

- [ ] `grep -c CLERK .env.example` returns 0.
- [ ] The `COCKPIT_FIRE_TOKEN` and `COCKPIT_ROUTINE_ID` lines are
      unchanged and present.
- [ ] The `trig_`-prefix / `invalid_routine_id` guidance survives.
- [ ] No file other than `.env.example` is touched.
- [ ] Full CI mirror green locally AND the pushed head's Actions run
      green.

## Deviations

<filled by /ship: anything done differently than planned — or "none">

## Open questions

None. The discrepancy above is resolved by taking the founder's
intent (zero `CLERK_` in `.env.example`); the end state matches the
mandate exactly.
