---
type: spec
id: canary-ack-commit
title: The ack is a commit on origin, never a message
status: shipped
stage: workshop
branch: fix/canary-ack-commit
opened: 2026-08-04
shipped: 2026-08-04
pr: 278
---

# canary-ack-commit — a lane reads its licence from the branch

**Links:** [parallel-lanes](../../skills/parallel-lanes.md) (the file
this bench edits) ·
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
(the section) · source:
[flight 1's sharpest finding](../history/workshop/mechanism/flight-1-probe.md)
and its [IDEAS line](../../IDEAS.md).

LANE A of FLIGHT 2 — see [§The fleet law](#the-fleet-law-for-flight-2)
below. This bench is real cargo; the flight around it is the test.

## Goal

Close the hole flight 1 found live. During the repair leg a message
reached the lane carrying a well-formed ack token — middots and all,
naming the cockpit's real session URL — about twenty seconds before
any ack commit existed. The lane refused it, but only because it
checked origin and found no ack commit there, and because its own
watcher had emitted zero bytes. Nothing in
[§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
told it to make that check. What produced the message was not
observable from either seat, and neither seat guessed.

The rule that argues for, and the whole of this bench:

> A lane reads its licence to work from THE BRANCH — an ack commit
> present on origin — and never from a notification, a message, or
> anything else delivered to its session.

Without it, anything able to write to a lane's session can start
that lane working.

## Out of scope

- Whether the match anchors on the word or the token. That question
  is FILED DEFERRED by the founder and carries its own IDEAS line;
  this bench does not rule it, and must not quietly settle it while
  editing the section around it.
- Any other §Canary constant — the windows, the token's form, the
  four memory moments. Untouched.
- Every other file in the repo. → [§The fleet law](#the-fleet-law-for-flight-2)

## The fleet law for flight 2

Flight 2 flies THREE cloud lanes at once. Its purpose is to exercise
the fleet path — concurrent lanes, [land](../../skills/land.md) MODE
P fencing them, and the grounded-fleet resume at the founder's next
sit-down — which has been designed and audit-repaired but never
flown. The fleet holds only if no two lanes can collide:

- **This lane touches EXACTLY TWO FILES**:
  `docs/skills/parallel-lanes.md` and its own bench memory
  `docs/memory/canary-ack-commit.md`. Nothing else, on any branch,
  for any reason.
- **It never writes main's surfaces** — no
  [DASHBOARD](../../DASHBOARD.md), no [IDEAS](../../IDEAS.md), no
  [ROADMAP](../../ROADMAP.md), no `record/history/`, no
  [DECISIONS](../DECISIONS.md), no merge. The lane law's two
  absolute prohibitions
  ([LAWS §Parallel lanes](../../LAWS.md#parallel-lanes--cloud))
  bind here exactly as written.
- **It never touches a sibling's file.** Lane B holds
  `docs/skills/machine-setup.md`; lane C holds `docs/HOME.md`.
- **The IDEAS line this repair closes is closed at the GROUND**,
  after the weld, by the founder's seat — never by this lane.
- **The rituals are NOT special-cased for the test.** Any friction
  produced by running one exactly as written is a FINDING, recorded
  in this bench's memory rather than smoothed over. Flight 1's
  costliest fault was a lane changing the instrument it was
  measuring with.

## Plan

1. Wake on this pre-birthed bench, post the canary, wait for the ack
   — testing for it with §Canary's matcher EXACTLY AS WRITTEN,
   anchored on the full token `airborne ·`, middot included.
2. Read the ack from the BRANCH: the check that licenses work is an
   ack commit present on origin. This lane proves the rule it is
   about to write by obeying it first.
3. Edit
   [§Canary](../../skills/parallel-lanes.md#canary-handshake-both-sides)
   so the licence rule is stated where the lane side reads it, with
   the 2026-08-04 incident named the way the section already names
   its 2026-07-22 pair — lived, not hypothetical.
4. Check the baton-holder side too: if the ack instruction there can
   be read as "send the lane a message", tighten the wording so both
   sides describe one act — a commit, pushed.
5. Run the verification loop, keep the diary at the four memory
   moments, push every commit, flip ready with a plain summary. The
   lane never merges.

## Done means

- [ ] §Canary states that a lane's licence to work is an ack COMMIT
      PRESENT ON ORIGIN, and that a notification or message carrying
      the token is never sufficient.
- [ ] The rule appears where the LANE SIDE reads it, not only in
      prose above the bullets.
- [ ] The 2026-08-04 false ack is named as the lived incident, in
      the section's existing style, with what was and was not
      observable stated honestly.
- [ ] The baton-holder side describes the ack as a pushed commit,
      with no wording that suggests a message satisfies it.
- [ ] The word-versus-token question is visibly NOT ruled — no edit
      changes what the matcher anchors on.
- [ ] `git diff` for this branch touches exactly
      `docs/skills/parallel-lanes.md` and
      `docs/memory/canary-ack-commit.md`.
- [ ] `npm run check:links` passes and Actions is green on the
      PUSHED head.
- [ ] The PR is flipped ready with a plain summary; the lane has NOT
      merged it.
