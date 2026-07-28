---
type: history
id: env-clerk-scrub
updated: 2026-07-23 · weld · cloud
shipped: 2026-07-23 21:07
pr: 200
---

# env-clerk-scrub — .env.example carries zero CLERK_ cruft

## Status

shipped — merged [#200](https://github.com/wsher0901/roam/pull/200),
2026-07-23. Lane-authored, so the no-solo-approval law was satisfied
by the cockpit's independent non-author review (PASS on `af53dca4`,
CI green) plus the founder's merge word — no external Web review
required for a lane-authored diff.

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

Nothing parked. The lane ran to its ready PR and stopped; the cockpit
carried it from non-author review through the founder's word to the
weld.

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

**2026-07-23, 21:07 UTC, cloud — cockpit review and weld.** The
cockpit re-derived the state from a fresh clone, read the board as
the authoritative flight plan, and reviewed the diff as an
independent non-author. One thing the lane's own record got slightly
ahead of: it cited Actions run 30042874935 as "the pushed head's"
run, but that run was on `10e7f96` — one memory-doc commit behind the
PR tip `af53dca4`. The cockpit re-verified on the real merge target:
run #599 on `af53dca4`, `completed / success`, with `mergeable_state:
clean`. Verdict PASS, posted to the PR. The founder's word followed;
the cockpit welded from a synced branch.

## Where to look

- Spec: [env-clerk-scrub](../../../specs/env-clerk-scrub.md) — the
  contract, the discrepancy, the Done-means.
- The retirement that already removed the placeholder lines:
  [clerk-retirement](clerk-retirement.md)
  ([#197](https://github.com/wsher0901/roam/pull/197)).
- The file: `.env.example`, the "Routine fires" comment block.
