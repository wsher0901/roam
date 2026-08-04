---
type: memory
id: canary-ack-commit
updated: 2026-08-04 15:05 UTC · completion · cloud
---
# canary-ack-commit — a lane reads its licence from the branch

## Status
complete, awaiting merge — 2026-08-04

The payload is written, pushed, and green: `docs/skills/parallel-lanes.md`
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
now states that a lane's licence to work is an ack COMMIT ON ORIGIN
and never a message, in all three places a reader of that section
meets the handshake. Every Done-means line in
[the spec](../record/specs/canary-ack-commit.md) is met, including
the negative one: the deferred word-versus-token question comes out
UNRULED. The lane has not merged and will not — that is the
founder's word after an external review.

## What this task is
One rule into
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides):
a lane's licence to work is an ack COMMIT ON ORIGIN, never a message
delivered to its session. Flight 1 met the failure live — a
well-formed ack token arrived by message twenty seconds before any
ack commit existed — and the lane refused it only because it
happened to check origin. The contract never told it to.

Scope edges and the full mandate:
[the spec](../record/specs/canary-ack-commit.md). The two files this
lane may touch are named there and are not negotiable — flight 2
flies three lanes at once, and disjointness is what keeps them from
colliding.

## Pending issues
Nothing blocking. The word-versus-token match question was held
rather than solved, as instructed, and is verifiably untouched — see
the last line of the story.

IDEAS SURFACED — four, for the baton-holder to harvest at its next
ritual; a lane may not write [IDEAS](../IDEAS.md) itself. Written
one per line so each closes on its own, per the entry contract:

- ⏳ A CLOUD LANE CANNOT TELL WHICH BENCH IS ITS OWN FROM THE
  CONTRACT — the lane-worker prompt says "that PR" but a fleet
  labels several at once, and neither the prompt nor the checked-out
  branch names one; the trigger's identity is in the environment
  (`CCR_TRIGGER_PR_NUMBER`, agreeing with `CCR_TRIGGER_HEAD_SHA` and
  `CLAUDE_CODE_BASE_REF`), which no document mentions, so without it
  a fleet lane guesses and races its siblings. (2026-08-04, flight 2
  lane A) → [LANE-WORKER](../LANE-WORKER.md)
- ⏳ THE `pull_request.labeled` REDELIVERY IS NOT RARE — flight 2's
  lane A met one within four minutes of its first firing, carrying a
  two-commit-stale head SHA; the wake-lock absorbed it exactly as
  designed, which is the point worth recording: the backstop is
  load-bearing, not theoretical. (2026-08-04, flight 2 lane A) →
  [§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking)
- ⏳ A LANE'S PROOF THAT IT OBEYED §CANARY LIVES ONLY IN ITS PROSE —
  this lane polled origin and matched the anchored token, and the
  only evidence of that is this file saying so; nothing mechanical
  distinguishes a lane that checked the branch from one that trusted
  a message, which is the same shape as the gap the payload closes.
  (2026-08-04, flight 2 lane A) →
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
- ⏳ `check:memory` READS ANY ANGLE-BRACKETED TEXT AS AN UNRESOLVED
  PLACEHOLDER, so a memory cannot quote an email address, a git
  identity, or an XML-ish token in its natural form; the rule is
  right to be blunt but the failure message does not say that a
  legitimate quotation is what tripped it. (2026-08-04, flight 2
  lane A) → `scripts/check-memory.mjs`
- ⏳ TWO OF THE TEMPLATE'S STATUS ROWS CARRY NO DATE SLOT WHILE THE
  CHECKER DEMANDS A DATE — `complete, awaiting merge` and
  `bench ready` are written in the vocabulary table without the
  `— <date>` its neighbours have, but `check:memory` requires a date
  in the Status body, so writing the row verbatim goes red. Copied
  the state from the table and hit it. (2026-08-04, flight 2 lane A)
  → [TEMPLATE](TEMPLATE.md)

## Left / idle
Nothing. The payload is complete and pushed; what remains is not the
lane's: the external review, the founder's word, the weld, and the
closing of this repair's [IDEAS](../IDEAS.md) line at the ground.

## The story
2026-08-04 14:28 UTC · bench birth · work PC — the founder set
flight 2's scope: three cloud lanes carrying flight 1's own repairs
back into the machinery, so that the fleet path gets flown while
real cargo moves. This bench is lane A.

The cargo was chosen because it is the sharpest thing flight 1
learned and the only one that is a safety hole rather than an
inconvenience: if a message can start a lane working, then anything
able to write to a lane's session can start it working. The lane
that met it survived on a habit, not on a rule.

2026-08-04 14:58 UTC · canary claim · cloud — the lane woke on the
label and posted this claim as its first act. Two frictions to
report before any payload work, per the fleet law's "friction is a
finding" clause:

- THE LANE WOKE WITHOUT KNOWING WHICH BENCH IT OWNED. Three PRs
  carry `lane:cloud` at once — flight 2's whole point — and the
  kickoff prompt says "that PR" as though one were distinguishable.
  Nothing in the prompt, the branch checked out (a
  `claude/…` session branch, not a lane branch), or the PR bodies
  names it. The answer turned out to be in the ENVIRONMENT:
  `CCR_TRIGGER_PR_NUMBER=278`, with `CCR_TRIGGER_HEAD_SHA` and
  `CLAUDE_CODE_BASE_REF=refs/pull/278/head` agreeing. That is a
  reliable identifier the contract never mentions, and without it a
  fleet lane must guess and race its siblings for a bench. Worth a
  line in the lane-worker master.
- THE CLOUD SEAT'S GIT IDENTITY WAS THE DEFAULT ON ARRIVAL —
  user.name `Claude`, user.email the anthropic no-reply address —
  exactly as lane B's bench predicts; this lane set it from main's
  existing convention before committing. Independent confirmation
  of lane B's cargo, observed rather than inferred. (Writing that
  address in angle brackets fails `check:memory`, which reads
  `<…>` as an unresolved placeholder — a fourth small friction,
  and the checker is right to be blunt about it.)

2026-08-04 15:00 UTC · licensed · cloud — THE ACK ARRIVED AS THE
RULE SAYS IT SHOULD, and this lane proved the rule by obeying it
before writing it. The licence was not read from anything delivered
to the session: a poller fetched `origin/fix/canary-ack-commit`
every 30 s and read the Status line out of the file AS ORIGIN HELD
IT, tested with
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)'s
matcher exactly as written — `airborne ·`, anchored at the start of
the line, middot included. It matched at 14:59:30 UTC on commit
`27dde18`, authored by the founder's GitHub identity. Nothing
resembling flight 1's false ack arrived this time; had one, the
check would have been unmoved, because it never looked at messages
at all.

A THIRD FRICTION, and the one this bench most wanted to meet: A
SECOND `pull_request.labeled` FIRING REACHED THIS SESSION at 14:59
UTC, carrying the BIRTH head SHA `ae7d826` — already two commits
stale. That is the redelivery
[§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
records from 2026-07-16, met live a second time. It cost nothing:
[§Wake-lock](../skills/parallel-lanes.md#wake-lock--parking)'s
re-read-Status-first rule ran on the wake, found this lane's own
non-terminal Status on origin, and the firing died harmless. Worth
noting that the redelivery's own payload is exactly the kind of
message the new rule refuses to treat as licence — it named a head
SHA, not an ack, but it arrived with the authority of the trigger.

2026-08-04 15:02 UTC · the payload decision · cloud — the edit is
THREE TOUCHES rather than one paragraph, because the Done-means asks
for the rule where the LANE reads it and not only in prose above the
bullets:

- A new `THE LICENCE IS A COMMIT ON ORIGIN` paragraph, third in the
  section's existing run of capitalised lead-ins after `THE ACK
  TOKEN` and `THE MATCH IS ANCHORED`. It names the 2026-08-04
  incident the way the section already names its 2026-07-22 pair —
  dated, PR-linked, lived — and states honestly what neither seat
  could observe: what produced the false message.
- The LANE-SIDE bullet gains the operative sentence: what it waits
  for is a COMMIT — fetch the branch and read the Status as origin
  holds it, never from a message arriving in the session, and never
  from the working copy alone.
- The BATON-HOLDER bullet's bare "Push." becomes "Push — AND THE
  PUSH IS THE ACK", closing the reading in which telling the lane by
  some other channel would do.

THE DEFERRED QUESTION CAME OUT UNRULED, and that was checked rather
than merely intended: the diff touches no line of the `THE MATCH IS
ANCHORED` paragraph, so what the matcher anchors on is exactly what
it was.

2026-08-04 15:05 UTC · completion · cloud — the fourth diary moment,
written before the ready-flip as the diary rule requires. The
verification loop ran in full and in order
([ship §1](../skills/ship.md#1--preflight)): `check:links` 4551
links across 228 files, 0 broken · `check:ledger` 115 ↔ 115 ·
`check:memory` valid · `lint` + `format:check` clean · `test` 3
passing · `build` green. `git merge origin/main` was already up to
date, so no sync commit was needed. The branch's whole diff against
its birth commit touches EXACTLY the two files the fleet law names,
checked with `git diff --name-only` rather than asserted.

One note the founder should have when reading this bench next to
its siblings: the ready-flip is not this lane's signal. Route 1
spawns a cloud lane by flipping the PR ready and THEN labelling, so
#278 arrived already ready and the lane had nothing to flip —
flight 1's "route 1 consumes the ready-flip" finding, met again and
unchanged. What completion actually means here is this Status line
plus the completion comment on the PR.

## Where to look
- [the spec](../record/specs/canary-ack-commit.md) — the mandate,
  the fleet law, and Done-means.
- [flight 1's story](../record/history/workshop/mechanism/flight-1-probe.md)
  — the false ack, and what neither seat could observe about it.
- [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the section under edit.
- [IDEAS](../IDEAS.md) — the line this repair closes, closed at the
  ground after the weld and never by this lane.

## Status vocabulary
See [TEMPLATE](TEMPLATE.md).
