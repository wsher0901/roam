---
type: spec
id: flight-4-freeze
title: The freeze drill — a bench that holds so the fence meets a live worker
status: open
stage: workshop
branch: docs/flight-4-freeze
pr: —
opened: 2026-08-04
shipped: —
---

# flight-4-freeze — the drill that holds at a checkpoint

**Links:** [D-074](../DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
· [§Wake-lock](../../skills/parallel-lanes.md#wake-lock--parking) ·
[land MODE P](../../skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
· [the probe convention](../probes/flight-1-shakedown.md)

## Goal

Author `docs/record/probes/flight-4-freeze.md` — the drill's own
log — and, in the middle of authoring it, HOLD at a checkpoint so
that a fence landing on this branch meets a worker that is still
alive.

THE CARGO IS NOT THE POINT; THE HOLD IS. Every previous flight's
fence landed on a bench that had already finished, so
[the wake-lock's rejected-push rule](../../skills/parallel-lanes.md#wake-lock--parking)
— does a fence actually STOP a live worker — has never once been
observed. Three flights missed it by construction. This bench is
built to be caught mid-job.

## Out of scope

- **Any file but two.** This lane writes
  `docs/record/probes/flight-4-freeze.md` and its own
  `docs/memory/flight-4-freeze.md`. Nothing else — no
  [DASHBOARD](../../DASHBOARD.md), no [IDEAS](../../IDEAS.md), no
  [ROADMAP](../../ROADMAP.md), no `record/history/`, no skills, no
  masters, no [HOME](../../HOME.md), no [LAWS](../../LAWS.md). The
  lane law's two prohibitions apply whole.
- **Merging, ticking, harvesting.** The lane speaks through its PR
  and stops. Ideas it surfaces go in its own memory under
  *Ideas surfaced*, for a baton-holder to harvest.
- **Making the drill succeed.** A fence that never arrives is a
  real result. See THE NULL RESULT below.

## Plan

### 1 · Write and push the first two sections

Author sections **BORN** and **THE CHECKPOINT** of the probe file,
in the shape [flight 1's log](../probes/flight-1-shakedown.md)
uses. Commit and push. THAT PUSH IS THE CHECKPOINT SIGNAL — the
cockpit is watching for it.

### 2 · THEN HOLD

For up to **15 minutes**, poll origin for either:

- an **ack-to-proceed** comment on this PR, or
- a **fence commit** on this branch.

**DO NOT FETCH-AND-REBASE DURING THE HOLD.** This is the one
instruction whose violation destroys the experiment. The hold's
exit is a **plain push attempt** — so a fence that landed while
this lane was holding is met as a REJECTED PUSH, which is the
drill's entire object. A lane that quietly rebases onto the fence
converts the rejection into a fast-forward and observes nothing.

### 3 · On rejection

Fetch, read the memory Status as origin holds it. If FENCED:

- write nothing further to the payload;
- record the rejection **verbatim** in this memory — the time,
  git's exact refusal text, and the fence Status found;
- **stand down mid-job**, per the wake-lock. A Status this lane
  does not own is terminal.

### THE NULL RESULT — equally valid, never simulated

If instead the lane is **acked to proceed**, or the 15 minutes
time out **with no fence**: write section **THE WINDOW CLOSED
UNUSED** and complete normally. An honest null result is a result.
NEVER stage, imitate, or narrate a rejection that did not happen —
a fabricated observation would destroy the only thing this flight
produces.

## Done means

- [ ] `docs/record/probes/flight-4-freeze.md` exists, carrying
      **BORN** and **THE CHECKPOINT**, committed and pushed as one
      checkpoint commit.
- [ ] THE CHECKPOINT WAS HONOURED: after that push the lane held,
      polling origin for an ack-to-proceed comment or a fence
      commit, for up to 15 minutes, and it did NOT fetch-and-rebase
      during the hold.
- [ ] The hold ended in a **plain push attempt**, and whichever of
      the two outcomes followed is recorded as observed:
      **either** the push was REJECTED — rejection time, git's
      exact refusal text, and the fence Status quoted verbatim in
      the memory, followed by an immediate stand-down with nothing
      further written to the payload — **or** no fence arrived, and
      the probe carries section **THE WINDOW CLOSED UNUSED**.
- [ ] The observability law holds throughout: every line of the
      probe is something this seat OBSERVED (a clock read, a git
      object, an API response) or carries the exact words
      **"not observable from this seat"**. Nothing inferred from
      what the documents say ought to have happened.
- [ ] The diff touches TWO files and no others:
      `docs/record/probes/flight-4-freeze.md` and
      `docs/memory/flight-4-freeze.md`.

## The observability law

Copied here because it governs the payload, not just its author.
Flight 1 established it and this lane inherits it whole: several
facts about this drill are **unobservable from the lane's seat** —
the cockpit's ladder walk, the founder's word, the landing, the
weld. Writing those as "not observable from this seat" is the
CORRECT result, not a gap to be filled by reasoning.

## Notes for whoever resumes this bench

The rejection, if it comes, is the finding — not a failure to
route around. Do not retry the push, do not rebase, do not "fix"
the branch. Record it and stop.
