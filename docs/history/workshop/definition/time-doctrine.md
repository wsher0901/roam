---
type: history
slug: time-doctrine
shipped: 2026-07-16 17:59
pr: 147
---
# time-doctrine — time is derived, never recalled

## Status
Shipped — merged as
[PR #147](https://github.com/wsher0901/roam/pull/147) on the
founder's word. Flown end-to-end by a LOCAL lane (worktree +
background session, Sonnet 5) as leg B of the delegation maiden
flight; the cockpit welded on approval. Every gate waited on the
pushed commit's Actions run going green
([D-038](../../../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)).

## What this task is
Three exact, fully-specified edits
([spec](../../../specs/time-doctrine.md)): the time-derivation
sentence appended to the derivation-law bullet in
[LAWS §Knowledge & tracking](../../../LAWS.md#knowledge--tracking);
the clock parenthetical at [ship §7](../../../skills/ship.md)'s
stamp writes and [handoff §4](../../../skills/handoff.md)'s Header
stamp; and [SETUP](../../../SETUP.md)'s Models & effort bullet
replaced with the founder's 2026-07-16 doctrine. Zero lane
decisions. Out of scope: any decide, anything beyond the four files
+ this bench.

## Pending issues
none — all Done-means boxes satisfied and the founder's merge word
given.

## Left / idle
Nothing on the lane's side; the weld closed the loop.

## The story
Born as leg B of the delegation maiden flight: the local control
lane (worktree + background session, Sonnet 5) flying alongside the
cloud leg — local lanes must not move the routine-run cap, and this
lane was the evidence (count:runs read 1 before and after its
spawn).

Canary claim pushed 2026-07-16 17:18 (Status → "claimed by local
worktree lane"); the cockpit's airborne ack landed within the first
15s poll, timestamped 2026-07-16 17:19 by work PC cockpit — well
inside the ~3 minute window. Pulled the ack commit, ran `npm ci`
fresh in the worktree (625 packages, clean), then applied the
spec's three edits verbatim as three separate commits:
1. `docs/LAWS.md` — appended the time-derivation sentence to the
   derivation-law bullet in §Knowledge & tracking.
2. `docs/skills/ship.md` §7 — appended "(stamp values are read from
   the shell clock, never typed)" to the frontmatter `shipped:`
   bullet (the git-mv/history-frontmatter bullet, trailing after the
   existing workshop-PR parenthetical) and to the ledger-line
   bullet. `docs/skills/handoff.md` §4 — same parenthetical inserted
   right after "(date · time · ritual · seat)" on the Header stamp
   line, ahead of the glance-line clause.
3. `docs/SETUP.md` §Once and done — cloud accounts — replaced the
   Models & effort bullet with the spec's fenced doctrine text
   verbatim (reliance pair · Fable 5 seat · the xhigh plateau ·
   throttle order · Sonnet 5 teammates).
Wrap width held at the surrounding ~70-72 cols in every edit; no
placement judgment calls beyond where a parenthetical reads best
within the existing sentence (spec left "readable" as the only
constraint).

Full CI mirror run in-worktree, all green: lint, format:check,
check:links (1758 links / 127 files, 0 broken), check:ledger (68↔68
in sync), test (2 files / 3 tests passed), build (Next.js 16.2.9,
compiled + typechecked + static pages generated clean). The pushed
commit's Actions run confirmed green before the ready-flip. PR #147
flipped ready, body updated with a plain-language summary
(maiden-flight context kept), and a "Lane complete:" completion
comment posted @mentioning wsher0901.

No blockers, no deviations from the spec, no decisions needed —
exactly as scoped. As flight evidence, this lane demonstrated the
whole lane law unassisted on a local vehicle: bench-first birth by
the cockpit, canary handshake, push-every-commit, diary at the four
moments, PR speech, Actions-green ready-flip — seat-invariant
artifacts throughout.

## Where to look
Spec: [time-doctrine](../../../specs/time-doctrine.md). Lane law:
[parallel-lanes](../../../skills/parallel-lanes.md) (§Canary ·
§Wake-lock · §Vehicles). Doctrine home:
[SETUP §cloud](../../../SETUP.md#once-and-done--cloud-accounts).
Edits landed in:
[LAWS §Knowledge & tracking](../../../LAWS.md#knowledge--tracking),
[ship §7](../../../skills/ship.md),
[handoff §4](../../../skills/handoff.md). PR:
[#147](https://github.com/wsher0901/roam/pull/147).
