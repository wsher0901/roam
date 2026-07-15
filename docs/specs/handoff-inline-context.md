---
type: spec
id: handoff-inline-context
title: Handoff input inversion — the leaving message carries the paste
status: shipped
stage: workshop
branch: docs/handoff-inline-context
pr: 126
opened: 2026-07-15
shipped: 2026-07-15
---
# handoff-inline-context — Handoff input inversion

**Links:**
[handoff](../skills/handoff.md) ·
[LAWS §The two touchpoints](../LAWS.md#the-two-touchpoints) ·
[HOME](../HOME.md) ·
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) ·
[decide](../skills/decide.md) ·
Decisions:
[D-032 — fleet continuity, upheld](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)

## Goal

A FULL handoff never prompts the founder after it is invoked. The
message that triggered the handoff IS the input: any text the founder
puts before the trigger (a leaving phrase or `/handoff`) is their
Web/Design paste, taken verbatim; a bare trigger with nothing before
it means "none". The never-skipped question — the last manual prompt
in the leaving loop — is retired. Zero founder input after invocation.

## Out of scope

- `liftoff.md`, `ship.md`, `pickup.md`, and the `.claude/skills/`
  trigger stubs — untouched.
- Anything under `docs/history/` — immutable.
- The handoff loop's other steps (secure, park, rewrite, repaint,
  ship, close) keep their behavior; only step 2's input mechanism
  inverts, and the wording that referenced the question updates.

## Plan

1. Bench birth: branch docs/handoff-inline-context → this spec +
   memory stub → draft PR (this step).
2. Run [decide](../skills/decide.md): the D-040 entry + its ripple in
   the same commit —
   - [handoff §2](../skills/handoff.md) rewritten wholesale to the
     inline-paste behavior (kept numbered 2 so steps 3–4 resolve; the
     QUIET exclusion line unchanged);
   - [LAWS §The two touchpoints](../LAWS.md#the-two-touchpoints) — the
     "when asked" clause reworded to "carried inline … no question
     asked";
   - [HOME](../HOME.md) — three spots: the manual entry (retitled +
     repointed to the new step-2 anchor), the skipped-ritual
     consequences row, the leaving-ritual walkthrough;
   - [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) footer — the
     "never-skipped question" line becomes "the paste I put before
     /handoff".
3. Verify (below) · [ship](../skills/ship.md) to THE GATE — no merge;
   founder approval follows external review in the Web chat.

## Done means

- [x] handoff step 2 rewritten to the inline-paste behavior.
- [x] LAWS §The two touchpoints clause edited.
- [x] HOME 3 spots + the step-2 anchor updated.
- [x] WEB-INSTRUCTIONS footer edited.
- [x] `grep "never-skipped"` clean across the four live ripple
      surfaces (handoff · LAWS · HOME · WEB-INSTRUCTIONS); the D-040
      record + task artifacts name the retired concept — see
      Deviations.
- [x] `grep "when asked" docs/LAWS.md` → zero hits.
- [x] check:links green (1488 links, 0 broken — proves the HOME
      anchor repoint) + the local CI mirror (lint · format:check ·
      check:links · tests · build) green. Pending: the pushed commit's
      Actions run green.

## Deviations

- **The "never-skipped" grep is not literally zero outside
  `docs/history/`.** The kickoff supplied the D-040 entry text
  verbatim — "the never-skipped question is retired" — so
  DECISIONS.md must contain the phrase to name what it retires; this
  spec and the memory narrate the same retirement. The grep's intent
  — that the *live surfaces* (handoff.md · LAWS · HOME ·
  WEB-INSTRUCTIONS) stop describing a question that no longer exists —
  is fully met: those four files carry zero hits. The surviving hits
  are the decision record + task artifacts naming the retired concept,
  which is correct and unavoidable given the founder-supplied entry
  text.

## Open questions

none
