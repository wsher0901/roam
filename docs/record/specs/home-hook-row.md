---
type: spec
id: home-hook-row
title: HOME's files table gains the third hook row
status: shipped
stage: workshop
branch: docs/home-hook-row
opened: 2026-08-04
shipped: 2026-08-04
pr: 280
---

# home-hook-row — the hook that enforces the close-lock gets a row

**Links:** [HOME](../../HOME.md) (the file this bench edits) ·
[§The files](../../HOME.md#the-files--what-each-one-is-for) (the
table) · source: the mesh redraw, and its
[IDEAS line](../../IDEAS.md).

LANE C of FLIGHT 2 — see [§The fleet law](#the-fleet-law-for-flight-2)
below. This bench is real cargo; the flight around it is the test.

## Goal

[HOME](../../HOME.md)'s files table is the manual for what every
file in this repo is FOR. It carries a row for
`.claude/hooks/session-start.mjs` and one for
`.claude/hooks/session-end.mjs`. It carries no row for
`.claude/hooks/user-prompt-submit.mjs` — which exists, is wired, and
enforces the close-lock: after a FULL handoff or liftoff writes
`.claude/session-closed` as its last act, this hook is what makes
the closed session read-only conversational rather than simply
dead.

Two of three siblings documented is the shape of a gap that hides:
a reader scanning the table concludes the hook layer is two hooks
deep. The missing row is small, and it is exactly the kind of miss
[the links gate cannot see](../../IDEAS.md) — an absence, not a
broken pointer.

## Out of scope

- Any change to the hook itself, or to the close-lock doctrine it
  enforces. This bench documents what exists; it does not alter
  behaviour.
- Any other row of the table, and any other section of
  [HOME](../../HOME.md). If the audit turns up FURTHER missing rows,
  they are recorded in this bench's memory as findings and left for
  triage — this lane adds one row.
- Every other file in the repo. → [§The fleet law](#the-fleet-law-for-flight-2)

## The fleet law for flight 2

Flight 2 flies THREE cloud lanes at once. Its purpose is to exercise
the fleet path — concurrent lanes, [land](../../skills/land.md) MODE
P fencing them, and the grounded-fleet resume at the founder's next
sit-down — which has been designed and audit-repaired but never
flown. The fleet holds only if no two lanes can collide:

- **This lane touches EXACTLY TWO FILES**: `docs/HOME.md` and its
  own bench memory `docs/memory/home-hook-row.md`. Nothing else, on
  any branch, for any reason.
- **It never writes main's surfaces** — no
  [DASHBOARD](../../DASHBOARD.md), no [IDEAS](../../IDEAS.md), no
  [ROADMAP](../../ROADMAP.md), no `record/history/`, no
  [DECISIONS](../DECISIONS.md), no merge. The lane law's two
  absolute prohibitions
  ([LAWS §Parallel lanes](../../LAWS.md#parallel-lanes--cloud))
  bind here exactly as written.
- **It never touches a sibling's file.** Lane A holds
  `docs/skills/parallel-lanes.md`; lane B holds
  `docs/skills/machine-setup.md`.
- **The IDEAS line this repair closes is closed at the GROUND**,
  after the weld, by the founder's seat — never by this lane.
- **The rituals are NOT special-cased for the test.** Any friction
  produced by running one exactly as written is a FINDING, recorded
  in this bench's memory rather than smoothed over.

## Plan

1. Wake on this pre-birthed bench, post the canary, wait for the ack
   with §Canary's matcher exactly as written.
2. READ THE HOOK BEFORE DESCRIBING IT —
   `.claude/hooks/user-prompt-submit.mjs`, in full. The row states
   what the file actually does at the head this lane is looking at,
   never what its name suggests or what a sibling doc claims for it.
   Reading a file this lane may not edit is fine; the fleet law
   bounds what it WRITES.
3. Add one row to
   [§The files](../../HOME.md#the-files--what-each-one-is-for), in
   the table's existing four-column shape and voice, placed with its
   two siblings rather than appended at the end.
4. AUDIT THE WHOLE TABLE ONCE while it is open: every other
   `.claude/` file and hook that exists on disk but has no row is
   recorded in the memory as a finding for triage. This lane adds
   ONE row and reports the rest.
5. Run the verification loop, keep the diary at the four memory
   moments, push every commit, flip ready with a plain summary. The
   lane never merges.

## Done means

- [ ] [§The files](../../HOME.md#the-files--what-each-one-is-for)
      carries a row for `.claude/hooks/user-prompt-submit.mjs`.
- [ ] The row's description comes from READING the hook, and names
      the close-lock as what it enforces.
- [ ] The row sits beside its two sibling hook rows, matching the
      table's column shape and voice exactly.
- [ ] The table was audited once end to end, and any further
      undocumented file is listed in this bench's memory — with the
      honest answer "none found" written if that is the result.
- [ ] No behaviour changed: the hook file itself is untouched.
- [ ] `git diff` for this branch touches exactly `docs/HOME.md` and
      `docs/memory/home-hook-row.md`.
- [ ] `npm run check:links` passes and Actions is green on the
      PUSHED head.
- [ ] The PR is flipped ready with a plain summary; the lane has NOT
      merged it.
