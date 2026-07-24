---
type: spec
id: landing-skill
title: The landing skill — how a flight ends becomes a first-class ritual ([D-054](../DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair))
status: open
stage: workshop
branch: docs/landing-skill
pr: —
opened: 2026-07-24
shipped: —
---

# landing-skill — one skill, two modes, and the fence

**Links:**
[land](../skills/land.md) · [pickup](../skills/pickup.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[HOME](../HOME.md) · [DECISIONS](../DECISIONS.md) ·
[handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)

## Goal

One theme: HOW A FLIGHT ENDS. Landing is today a three-clause duty
buried in the cockpit charter's rule 6 — improvised every time, and
silent about the case that actually costs the founder: a fleet still
flying when the founder wants to come back to the desk. This bench
makes landing a first-class ritual — ONE skill
([land](../skills/land.md)) with TWO modes routed by the fleet the
cockpit derives at landing time — gives it the FENCE (a commit that
stops a running lane through the wake-lock, so the resume point is
the branch tip by construction), and builds pickup's counterpart so
a grounded fleet is resumable from any seat.

## Out of scope

- Any new interrupt channel for lanes — there is none; the
  wake-lock IS the channel
  ([D-054](../DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair)
  rejects an instant freeze with its reason).
- Auto-redeploy at pickup — spending cap runs is the founder's
  word, never a ritual's default.
- Reviving old lane sessions — no mechanism exists; continuity is
  git's.
- A new transfer file — the board carries the fleet-at-ground
  summary; per-lane depth stays in each memory (one home).
- [LAWS](../LAWS.md) — no law text changes; land consolidates
  duties that already exist and adds mechanics, which live in a
  skill.

## Plan

1. **[docs/skills/land.md](../skills/land.md) — NEW.** First act:
   derive the fleet from origin, route the mode. MODE R · RETIRE
   (final repaint · retired branches verified dead · landing report
   · "Safe to archive me") consolidates rule 6's existing duties —
   no new law. MODE P · PAUSE-AND-TRANSFER: (a) fleet snapshot
   first, derived live; (b) FENCE each live lane — the hold is a
   COMMIT carrying the full ⏸ block, with the mechanism and the
   honesty clause stated in the skill; (c) the cockpit's own bench
   gets the same ⏸ block; (d) the board is THE SINGLE MATERIAL;
   (e) landing report, then stop; (f) session disposal — sessions
   are cattle, branches are the work.
2. **[pickup](../skills/pickup.md) — the fleet-resume counterpart.**
   A grounded fleet renders FLEET RESUME after any ⏸ INTERRUPTED
   lead (which keeps priority), then the ask in its exact words
   with the cap arithmetic derived at ask time; the granular
   alternatives beside it. Redeploy mechanics live in pickup once;
   [parallel-lanes](../skills/parallel-lanes.md) gains ONE pointer
   line.
3. **`.claude/skills/land/SKILL.md` — the stub**, trigger-precise
   per [D-053](../DECISIONS.md#d-053--2026-07--guardrail-audit--the-harness-found-already-at-best-practice-against-anthropics-guidance-two-promotions-ship-the-verification-loop-as-a-copy-runnable-block-in-laws-two-stub-descriptions-sharpened-five-alternatives-rejected-with-reasons-upholds-the-routing-law-and-one-home)'s
   standard, COCKPIT-ONLY, naming the boundary: land ends a FLIGHT,
   handoff leaves a DESK. The handoff stub gains the mirror clause.
4. **Charter rule 6 → a pointer** (three lines: land is the ritual
   · its two modes · its skill), the duties moving to the skill.
5. **[HOME](../HOME.md)** — skills census +1 (ten) · Terms gains
   land · grounded fleet · fence · the Command card gains its
   landing line.
6. **The effort doctrine** — Opus 5 · xhigh becomes the default for
   ALL work including reviews and architecture; Fable 5 an optional
   second opinion; throttle-effort-before-model unchanged.
7. **[D-054](../DECISIONS.md#d-054--2026-07--the-landing-skill--how-a-flight-ends-becomes-a-first-class-ritual-one-skill-with-two-modes-routed-by-fleet-state-retire--pause-and-transfer-the-fence-is-a-commit-so-the-resume-point-is-the-branch-tip-by-construction-wake-lock-mediated-with-its-honesty-clause-the-board-is-the-single-transfer-material-pickup-gains-the-fleet-resume-ask-and-its-cap-arithmetic-sessions-are-cattle-branches-are-the-work-charter-rule-6-becomes-a-pointer-the-effort-doctrine-moves-to-opus-5--xhigh-upholds-the-wake-lock-the-park-protocol-and-one-home-supersedes-the-opus-48-reliance-pair)**,
   house style, with the five rejections and their reasons.

## Files touched — nothing outside

[docs/skills/land.md](../skills/land.md) (new) ·
[docs/skills/pickup.md](../skills/pickup.md) ·
[docs/skills/parallel-lanes.md](../skills/parallel-lanes.md) (one
pointer line) · `.claude/skills/land/SKILL.md` (new) ·
`.claude/skills/handoff/SKILL.md` · [docs/SETUP.md](../SETUP.md) ·
[docs/HOME.md](../HOME.md) · [docs/DECISIONS.md](../DECISIONS.md) ·
this spec + [the memory](../memory/landing-skill.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.

One ripple beyond that list, disclosed rather than smuggled:
HOME's ritual-census heading is renamed (five → the rituals) because
land makes a sixth, and the retroactivity law requires the backfill
in this PR; its one inbound link lives in the shipped
[currency-audit](currency-audit.md) spec and is repaired as a pure
link repair. Both are called out at THE GATE.

## Done means

- [ ] Both modes present in [land](../skills/land.md), with the
      fence mechanism (commit → rejected push → wake-lock →
      terminal Status) and the honesty clause written out.
- [ ] The fleet-table shapes in land and pickup match the
      [response doctrine](../HOME.md#response-doctrine) template.
- [ ] Charter rule 6 is a pointer with ZERO duplicated duties
      (grep: the retire/fence duties appear in land only).
- [ ] The land stub's boundary is explicit; the handoff stub
      mirrors it.
- [ ] The effort-doctrine line updated in exactly ONE home
      ([SETUP §Models & effort](../SETUP.md#once-and-done--cloud-accounts));
      no second copy anywhere.
- [ ] `check:links` · `check:ledger` · `check:memory` green.
- [ ] Full CI mirror green locally AND the pushed head's Actions
      run green.
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to
      the founder verbatim.

## Pending

MANUAL ACT after the weld: re-save the cockpit routine box from the
edited master — rule 6 changed
([SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)).
Founder act at the next flight: set the lane-worker and cockpit
routine configs to Opus 5.

## Deviations

<!-- filled by ship -->

## Open questions

1. `.claude/agents/reviewer.md` pins `model: sonnet` · `effort:
   high`. The new doctrine says Opus 5 · xhigh is the default for
   ALL work INCLUDING REVIEWS — which reads as covering the
   ship-time critic. The file is outside this bench's mandate and
   the change carries a real cost, so it is NOT edited here: the
   founder's call at THE GATE.
