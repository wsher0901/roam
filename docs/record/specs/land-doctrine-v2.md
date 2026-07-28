---
type: spec
id: land-doctrine-v2
title: The landing doctrine recut to the founder's three-scenario model (D-061)
status: open
stage: workshop
branch: docs/land-doctrine-v2
pr: —
opened: 2026-07-28
shipped: —
---

# land-doctrine-v2 — three scenarios, one ritual

**Links:**
[land](../../skills/land.md) ·
[D-054](../DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair)
(the skill this recuts) · source: the founder's three-scenario
model, Web ops chat 2026-07-28.

## Goal

[D-054](../DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair)
gave landing two modes routed by the fleet, and both wait for the
founder to say "land". The founder's 2026-07-28 model says a
flight actually ends in THREE situations, and only one of them
starts with the founder speaking. This bench mints D-061 and
ripples it: the cockpit gains a stated STANDING JOB (advise on
fleet status and on each gate reaching decision; execute the
founder's rulings from the phone), an AUTO-LAND trigger it fires
itself, a DESK TAKEOVER path when the founder returns to a seat
while the cockpit still holds undecided gates, and the founder's
FREEZE stays exactly what it is today.

## Out of scope

- **Changing MODE P's mechanics.** The fence, the board transfer,
  and resume-at-any-desk are unchanged — scenario 3 is today's
  behaviour with a name.
- **Changing who may merge what**, beyond stating the cockpit's
  standing job: lane-authored diffs on cockpit review plus the
  founder's word; cockpit-authored diffs always through external
  Web review first. That is
  [no-solo-approval](../../LAWS.md#workflow-non-negotiable)
  restated for the seat, not amended.
- **Flying anything.** No cockpit is born on this bench; the
  first-story shakedown flight is its own act and tests this
  doctrine live.
- **Ticking any [ROADMAP](../../ROADMAP.md) box** — workshop
  bench.

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. Mint D-061 — the standing job, the three scenarios, the
   tombstone wake-rule — anchors born resolving.
3. Ripple in the same bench's commits:
   [land](../../skills/land.md) gains a trigger table (three
   scenarios + manual retire) ·
   [pickup §6](../../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
   gains the decisions-pending takeover and the supersession
   write · [liftoff](../../skills/liftoff.md) and the cockpit
   charter master in [SETUP](../../SETUP.md) gain the standing
   job, the auto-land clause, and the tombstone wake-rule ·
   [HOME §Terms](../../HOME.md#terms) gains the two lands and
   supersession, brief · [ATLAS](../../ATLAS.md) diagram 3
   re-rendered per its own maintenance duty.
4. Sweep [LAWS](../../LAWS.md) and [HOME](../../HOME.md) for
   MODE R/P statements the recut outdates; weave D-061 into every
   file touched.
5. [IDEAS](../../IDEAS.md): close the parked superseded-seat line
   citing the decide.
6. Verification loop, full CI mirror, Actions green, ship §6
   critic; ship to THE GATE. Tower-authored — external Web review
   precedes the founder's word.

## Done means

- [x] D-061 exists carrying all four clauses (standing job · three
      scenarios · the tombstone wake-rule), anchors resolving, no
      clause weaker or stronger than the founder's words.
- [x] [land](../../skills/land.md) opens with a trigger table
      naming all three scenarios plus manual retire, and each
      routes to a procedure that exists.
- [x] AUTO-LAND is written with all four of its guards: same-turn
      both-true, never at birth, never on a timer, never silent —
      and the accepted cost (one re-liftoff) stated in the report.
- [x] [pickup §6](../../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
      carries the takeover: adopt the decision queue with each
      gate's advice, write COCKPIT SUPERSEDED with the takeover
      stamp, proceed.
- [x] The cockpit charter master carries the standing job, the
      auto-land clause, and the tombstone wake-rule; the wake-rule
      reads board-first.
- [x] [ATLAS](../../ATLAS.md) diagram 3 shows the three exits and
      every box still maps to owning prose.
- [x] No MODE R/P statement anywhere in living docs contradicts
      the recut.
- [x] The [IDEAS](../../IDEAS.md) superseded-seat line is closed
      citing D-061 TO THE EXTENT the decide actually covers it,
      and the closure claims no more than that.
- [x] Files touched: nothing outside the mandate's list.
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

Three, all disclosed at the gate:

1. **LAWS was AMENDED, not merely swept.** The plan called for a
   sweep of MODE R/P statements; the ship §6 critic found that
   the statement the recut actually overturns is the SUPERSESSION
   clause in
   [LAWS §Parallel lanes & cloud](../../LAWS.md#parallel-lanes--cloud)
   — "push, write nothing", which D-061 rejects by name. LAWS
   outranks a skill, so leaving it would have made the wake-rule
   unenforceable. The clause now carries one carve-out.
2. **A carve-out was added that the mandate did not name:** a
   superseded cockpit's landing WRITES NO BOARD. Without it, the
   trigger-2 routing had a superseded cockpit repainting main's
   bookkeeping concurrently with the desk that holds the baton,
   and MODE R's cleared Sessions row would have erased the
   takeover stamp.
3. **The IDEAS line is marked PARTLY CLOSED, not closed.** The
   mandate said clause 3 closes it; reading the line showed its
   case is a superseded GROUND tower leading a TEAM, and a
   cockpit never leads one, so the team-findings gap survives.
   The closure cites D-061 for the road it does close and names
   what remains. SUPERSEDED WITHIN THIS BENCH: the external
   review directed the generalization, D-062 landed, and the
   line is now CLOSED in full — see Open questions.

## Open questions

none — the one that stood at the first flip (whether to generalize
the tombstone wake-rule to ANY superseded seat) WAS TAKEN on this
same bench, at the external review's direction: it is
[D-062](../DECISIONS.md#d-062--2026-07--the-wake-rule-generalized--any-superseded-seat-exits-by-its-own-closing-ritual-never-bare-a-cockpit-by-the-landing-ritual-a-ground-control-tower-by-capture-then-close-with-team-findings-captured-first-no-superseded-seat-writes-a-board-because-the-baton-has-already-moved-closes-d-056s-deferred-road-in-full-upholds-d-056-and-d-061),
which closes the [IDEAS](../../IDEAS.md) line in full.
