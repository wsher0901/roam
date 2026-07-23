---
type: memory
id: env-clerk-scrub
updated: 2026-07-23 · lane birth · work PC
---

# env-clerk-scrub — .env.example carries zero CLERK_ cruft

## Status

bench ready — 2026-07-23. Born bench-first by the control tower at
liftoff from the current main tip (594b7fe): branch
`chore/env-clerk-scrub`, spec, this memory, draft PR on origin
before the lane exists. Awaiting the cloud lane's canary claim;
the baton-holder writes the airborne ack once the lane pushes its
claim (parallel-lanes §Canary). This is a LANE-authored diff, so
the cockpit's non-author review plus the founder's word carries it
— no external Web review needed.

## What this task is

`.env.example` must carry zero `CLERK_` references. The clerk is
retired ([#197](https://github.com/wsher0901/roam/pull/197)) and
`scripts/fire.mjs` is cockpit-only, so any `CLERK_` text is a note
about variables nothing reads.

The one thing the lane must not trip on: the founder's mandate said
`.env.example` "still carries the two CLERK_ placeholder lines," but
those assignment lines were already removed by
[#197](https://github.com/wsher0901/roam/pull/197). What survives is
COMMENT PROSE naming `CLERK_FIRE_TOKEN / CLERK_ROUTINE_ID`. The
payload is the founder's intent — scrub those comment sentences —
not placeholder lines that no longer exist. End state is identical
to the ask: no `CLERK_` anywhere in the file.

## Pending issues

None. The discrepancy is documented in
[the spec](../specs/env-clerk-scrub.md) and resolved by taking the
intent.

## Left / idle

The payload edit itself, for the cloud lane: remove the two
`CLERK_`-mentioning comment sentences from the "Routine fires"
block, keep the `COCKPIT_` pair and the `trig_`-prefix guidance,
touch no other file.

## The story

**2026-07-23, 16:27, work PC — lane birth at liftoff.** The founder
is leaving, commanding from the phone; the keyboard goes down at
close. This is the payload lane of a full liftoff run-through: one
theme, one file. Born bench-first from 594b7fe (current main),
verified fresh; the cloud lane will do the edit, the cockpit will
review it as a non-author, and the founder gives the merge word
from the phone — the lane-authored path that needs no external Web
review.

The baton-holder checked the file before writing the spec rather
than trusting the mandate's wording, and found the placeholder
lines already gone (#197). Recording that here so the lane does not
hunt for lines that do not exist.

## Where to look

- Spec: [env-clerk-scrub](../specs/env-clerk-scrub.md) — the
  contract, the discrepancy, the Done-means.
- The retirement that already removed the placeholder lines:
  [clerk-retirement](../history/workshop/mechanism/clerk-retirement.md)
  ([#197](https://github.com/wsher0901/roam/pull/197)).
- The file: `.env.example`, the "Routine fires" comment block.
