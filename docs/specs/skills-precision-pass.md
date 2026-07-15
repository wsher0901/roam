---
type: spec
id: skills-precision-pass
title: Skills precision pass — codify decided behavior, zero new behavior
status: in-progress
stage: workshop
branch: docs/skills-precision-pass
opened: 2026-07-15
---
# skills-precision-pass — Skills precision pass

**Links:**
[decide](../skills/decide.md) ·
[handoff](../skills/handoff.md) ·
[liftoff](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[recall](../skills/recall.md) ·
Decisions cited (this pass decides nothing):
[D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)
·
[D-040](../DECISIONS.md#d-040--2026-07--handoff-input-inversion--the-leaving-message-carries-the-webdesign-paste-inline-the-never-skipped-question-is-retired-a-bare-trigger-means-none-amends-the-two-touchpoints-laws-wording-upholds-d-032)
·
[the erratum](../history/workshop/mechanism/cloud-lane-dashboard-erratum.md)

## Goal

Repair seven audited precision defects across the skill corpus so
every skill reads deterministically and stays self-consistent with
already-decided behavior. This pass codifies; it introduces no new
behavior and no new D-number — it cites D-032, D-040, and the
cloud-lane-dashboard erratum.

## Out of scope

- Any behavior change — idle-wait, the eligibility gate, the route
  ladder, and lane vehicles are all reserved for the delegation
  decide, untouched here.
- Structural rewrites of liftoff or parallel-lanes.
- `docs/history/` (immutable), `LAWS`, `HOME`, and any stub other
  than decide's.
- `docs/memory/TEMPLATE.md` — touched ONLY if a Status word is
  missing; all four (parked · airborne · failed · held) are already
  present, so it is not touched.

## Plan

Eight surgical edits, one commit (after this bench):

1. `decide.md` §2 — ripple list names LAWS and HOME.
2. `.claude/skills/decide/SKILL.md` — sharper description
   (roadmap-level + standing-convention triggers; task-local calls
   excluded).
3. `handoff.md` §1.5.3 — the park stamp is "· at handoff ·";
   "rescue-saved" appears only when step 1.5.2 ran.
4. `handoff.md` §1.5 — one line: cloud lanes are never parked
   (D-032 parks LOCAL only).
5. `handoff.md` §3 — fold only the step-2 paste lines about this
   task; the whole paste lands on the board.
6. `handoff.md` §4 Sessions — lead-in sentence: the Sessions table is
   the single home for every lane row (cloud + local), failed/held
   carrying its reason in Your move.
7. Retire the "abort ledger" / "Cloud section" ghost — three
   repointings (parallel-lanes canary · liftoff §5/§6 · recall
   routing table).
8. `liftoff.md` §1 — liftoff skips handoff §6 entirely; liftoff §7 is
   the only close.

Then verify (below) · [ship](../skills/ship.md) to THE GATE — no
merge; founder approval follows external review in the Web chat.

## Done means

- [ ] decide.md §2 ripple names LAWS + HOME.
- [ ] decide/SKILL.md description sharpened.
- [ ] handoff §1.5.3 stamp is conditional on the rescue-save.
- [ ] handoff §1.5 carries the cloud-lanes-never-parked line (D-032
      linked).
- [ ] handoff §3 folds only the task-relevant paste lines.
- [ ] handoff §4 Sessions lead-in codifies the every-lane-row home;
      TEMPLATE untouched (all four Status words present).
- [ ] The ghost is retired in all three skills; `grep "abort
      ledger\|Cloud section" docs/skills/` → zero hits.
- [ ] liftoff §1 says liftoff skips handoff §6; `grep "absorbed by
      step 7"` → zero hits.
- [ ] check:links green + the full CI mirror (lint · format:check ·
      check:links · tests · build) and the pushed commit's Actions
      run green.

## Open questions

none
