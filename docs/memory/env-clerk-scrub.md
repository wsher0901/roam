---
type: memory
id: env-clerk-scrub
updated: 2026-07-23 · lane complete · cloud
---

# env-clerk-scrub — .env.example carries zero CLERK_ cruft

## Status

work complete, PR ready — 2026-07-23 · cloud lane. The payload is
pushed to [#200](https://github.com/wsher0901/roam/pull/200):
`.env.example` now carries zero `CLERK_` references. Full CI mirror
green locally (lint · format · links · ledger · memory · tests ·
build); the pushed head's Actions run (30042874935) is confirmed
green. The PR was born non-draft, so no ready-flip was needed;
completion comment posted. Awaiting the cockpit's non-author review
+ the founder's merge word — "done" is founder-approved and merged,
not this lane's call.

## What this task is

`.env.example` must carry zero `CLERK_` references. The clerk is
retired ([#197](https://github.com/wsher0901/roam/pull/197)) and
`scripts/fire.mjs` is cockpit-only, so any `CLERK_` text is a note
about variables nothing reads.

The discrepancy the baton-holder flagged: the founder's mandate said
`.env.example` "still carries the two CLERK_ placeholder lines," but
those assignment lines were already removed by
[#197](https://github.com/wsher0901/roam/pull/197). What survived was
COMMENT PROSE naming `CLERK_FIRE_TOKEN / CLERK_ROUTINE_ID`. The
payload was the founder's intent — scrub those comment sentences —
not placeholder lines that no longer existed. End state matches the
ask: no `CLERK_` anywhere in the file.

## Pending issues

None.

## Left / idle

Nothing left for the lane. The remaining steps are not the lane's:
cockpit non-author review, then the founder's merge word. The lane
never merges, never touches main.

## The story

**2026-07-23, 16:27, work PC — lane birth at liftoff.** The founder
is leaving, commanding from the phone; the keyboard goes down at
close. This is the payload lane of a full liftoff run-through: one
theme, one file. Born bench-first from 594b7fe (current main),
verified fresh; the cloud lane does the edit, the cockpit reviews it
as a non-author, and the founder gives the merge word from the
phone — the lane-authored path that needs no external Web review.

The baton-holder checked the file before writing the spec rather
than trusting the mandate's wording, and found the placeholder
lines already gone (#197). Recorded so the lane did not hunt for
lines that do not exist.

**2026-07-23, 20:31 UTC, cloud — canary, ack, payload.** The cloud
lane woke on `chore/env-clerk-scrub`, ran the canary claim (Status →
"claimed by cloud"), pushed, and waited on the anchored `airborne ·`
match. The baton-holder's ack landed at 20:35-ish; the lane synced
the ack commit and executed the one-file scrub. In the "Routine
fires" block the two clerk sentences ("the clerk was retired
2026-07-22 and its CLERK_ pair dropped…" / "If a seat's .env.local
still carries CLERK_FIRE_TOKEN / CLERK_ROUTINE_ID…") were removed,
collapsed to a clean closer — `The cockpit is the only routine.` —
with no `CLERK_` token. The `trig_`-prefix / `invalid_routine_id`
guidance and the `COCKPIT_` pair were left untouched. `grep -c CLERK
.env.example` → 0; only `.env.example` changed. Full CI mirror ran
green locally and the pushed head's Actions run is green.

## Where to look

- Spec: [env-clerk-scrub](../specs/env-clerk-scrub.md) — the
  contract, the discrepancy, the Done-means.
- The retirement that already removed the placeholder lines:
  [clerk-retirement](../history/workshop/mechanism/clerk-retirement.md)
  ([#197](https://github.com/wsher0901/roam/pull/197)).
- The file: `.env.example`, the "Routine fires" comment block.
