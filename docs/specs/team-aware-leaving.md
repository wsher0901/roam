---
type: spec
id: team-aware-leaving
title: Team-aware leaving rituals — no ritual lets a live team outlive its sitting ([D-056](../DECISIONS.md#d-056--2026-07--team-aware-leaving-rituals--no-ritual-lets-a-live-agent-team-outlive-the-sitting-that-made-it-handoff-shuts-the-team-down-before-parking-anything-and-captures-its-findings-into-the-record-first-land-states-the-cockpit-cannot-lead-a-team-case-once-and-routes-the-ground-seat-to-handoff-pickup-gains-the-ghost-teammate-recovery-note-and-the--block-gains-what-the-team-had-found-closes-d-055s-deferred-gap-upholds-one-home-and-the-park-protocol))
status: open
stage: workshop
branch: docs/team-aware-leaving
pr: 225
opened: 2026-07-24
shipped: —
---

# team-aware-leaving — the rituals learn about live teams

**Links:**
[handoff](../skills/handoff.md) · [land](../skills/land.md) ·
[pickup](../skills/pickup.md) ·
[TEMPLATE](../memory/TEMPLATE.md) ·
[HOME §Agent teams](../HOME.md#agent-teams) ·
[DECISIONS](../DECISIONS.md) · [IDEAS](../IDEAS.md)

## Goal

One theme: NO RITUAL LETS A LIVE AGENT TEAM OUTLIVE THE SITTING
THAT MADE IT.
[D-055](../DECISIONS.md#d-055--2026-07--agent-teams--the-boundary-teams-are-for-exploration-and-review-at-a-ground-seat-lanes-remain-the-authorship-mechanism-two-risks-become-law-single-sitting-only--an-explicit-carve-out-to-d-050s-interrupt-promise--and-a-teammate-authored-diff-is-self-authored-under-no-solo-approval-the-reviewers-model-settled-by-verification-not-guess-the-founder-side-config-recorded-upholds-the-lane-law-no-solo-approval-and-one-home-gives-the-experimental-flag-its-consumer)
made single-sitting-only law and left it unenforced: handoff parks
lanes, land fences them, and neither mentions a team. Because
`/resume` and `/rewind` do not restore in-process teammates, a
team left running is NOT recoverable state — it is abandoned work
whose only trace is a lead that will message teammates who no
longer exist. This bench closes that gap in the three rituals that
touch it, and adds the one field an interrupted team leaves
behind.

THE REAL LOSS IS THE FINDINGS, not the processes. Teammates die
cheaply and are cheap to respawn; what cannot be re-derived is
what they had discovered, because a team's output lives in
transcripts that die with it. So the duty is not "kill the team"
— it is CAPTURE, THEN KILL.

## Out of scope

- Persisting a team across sittings. No mechanism exists and the
  official docs are explicit; this bench does not invent one.
- Any change to lanes, the canary, the wake-lock, or the park
  protocol's lane machinery — teams and lanes stay separate.
- Building or spawning a team.

## Plan

1. **[handoff](../skills/handoff.md) — shutdown BEFORE parking
   anything.** A new step ahead of the lane park: if this session
   leads a live team, ask each teammate BY NAME to shut down;
   report what each returned; capture the team's findings INTO THE
   RECORD (the bench memory when a bench is open, else
   [IDEAS](../IDEAS.md)); only then the normal park and repaint.
   Honesty required in both directions: shutdown is NOT instant
   (teammates finish the current tool call), and a teammate that
   refuses or hangs is reported plainly, never smoothed into a
   clean exit.
2. **[land](../skills/land.md) — state the cockpit case ONCE and
   point.** A cockpit does not lead a team — by POLICY, not
   platform limit: D-055 puts teams at a ground seat and makes
   lanes the cloud's parallelism (corrected mid-bench; the memory
   narrates why the first justification was wrong). Both modes
   say that plainly in one place and route the ground-seat case
   to handoff. Zero duplicated procedure.
3. **[pickup](../skills/pickup.md) — the ghost-teammate note.**
   One paragraph: a resumed session may inherit a lead whose
   teammates are gone; say so and offer fresh teammates rather
   than messaging ghosts. A recovery note, not a ritual step.
4. **[TEMPLATE](../memory/TEMPLATE.md) — the ⏸ block gains one
   line** when a team was live at interrupt time: WHAT THE TEAM
   HAD FOUND, because that is the part git cannot re-derive.
5. **[D-056](../DECISIONS.md#d-056--2026-07--team-aware-leaving-rituals--no-ritual-lets-a-live-agent-team-outlive-the-sitting-that-made-it-handoff-shuts-the-team-down-before-parking-anything-and-captures-its-findings-into-the-record-first-land-states-the-cockpit-cannot-lead-a-team-case-once-and-routes-the-ground-seat-to-handoff-pickup-gains-the-ghost-teammate-recovery-note-and-the--block-gains-what-the-team-had-found-closes-d-055s-deferred-gap-upholds-one-home-and-the-park-protocol)**,
   house style, with the three rejections and their reasons; and
   [IDEAS](../IDEAS.md)' candidate line CLOSED, naming this PR.

## Files touched — nothing outside

[handoff](../skills/handoff.md) · [land](../skills/land.md) ·
[pickup](../skills/pickup.md) ·
[TEMPLATE](../memory/TEMPLATE.md) · [HOME](../HOME.md) (only if
§Agent teams needs the pointer) ·
[DECISIONS](../DECISIONS.md) · [IDEAS](../IDEAS.md) (close the
candidate) · this spec + [the memory](../memory/team-aware-leaving.md)
· [DASHBOARD](../DASHBOARD.md) via the ship tail.
PLUS, beyond the list and disclosed under Deviations:
[liftoff](../skills/liftoff.md) §1 and §7 — without it the
shutdown report has nowhere to land on the liftoff road.

## Done means

- [x] handoff carries the shutdown duty BEFORE the park, with the
      not-instant honesty and the refuses-or-hangs clause.
      (§1.2, between §1 and §1.5; critic-confirmed on position
      and ordering.)
- [x] The findings-capture destination is named explicitly and
      ordered BEFORE teardown — and SCOPED after a critic finding:
      this session's OWN bench memory, else IDEAS, never a lane's
      diary (which the park protocol reserves).
- [x] land states the cockpit case ONCE and points at handoff;
      grep confirms zero duplicated procedure. (Its justification
      was rewritten after the critic showed the stated mechanism
      did not imply the conclusion — the basis is policy.)
- [x] pickup's note is ONE paragraph and reads as recovery, not
      ritual.
- [x] TEMPLATE's ⏸ block carries the team-findings line, marked
      conditional, with the preamble reconciled.
- [x] IDEAS' candidate line is closed, naming this PR.
- [x] `check:links` · `check:ledger` · `check:memory` green.
      (2026-07-24, work PC.)
- [x] Full CI mirror green locally AND the pushed head's Actions
      run green. (Green on `01b46f8` and again on `8742226`;
      the final head is re-verified before the ready-flip and its
      SHA named in the PR summary.)
- [x] [ship §6](../skills/ship.md#6--the-gate) critic runs; the
      report names which model ran it. TWO passes: pass 1 ran on
      this session's pre-edit definition and DECLINED to name its
      model when asked; pass 2, forced with an explicit override,
      opened with "Opus 5 (1M context) · effort high" and found
      three things pass 1 missed. The mandate's premise about
      which model this session would cut was wrong — the memory
      records why.

## Pending

None. No founder act follows this weld.

## Deviations

One ripple beyond the mandate's file list, disclosed at THE GATE:
[liftoff](../skills/liftoff.md) §1 and §7. The critic found that
§1.2 routed refusals and hangs to handoff §6 — which liftoff
SKIPS — so on the liftoff road the report had nowhere to land.
§1.2 now names the destination by road, and liftoff §7 carries
the team clause. Taken because the alternative was shipping the
exact silent loss this bench exists to prevent.

The mandate's premise about the critic's model was wrong and is
corrected on the record: this session STARTED BEFORE
`reviewer.md`'s change, so its agent definition was cut with the
old model. Two passes were run; the memory records both.

## Open questions

None at birth. This bench ships to the gate and does NOT merge.
