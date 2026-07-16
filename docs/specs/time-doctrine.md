---
type: spec
id: time-doctrine
title: Time doctrine — time is derived, never recalled; Models & effort brought to the 2026-07-16 statement
status: shipped
stage: workshop
branch: docs/time-doctrine
pr: 147
opened: 2026-07-16
shipped: 2026-07-16
---
# time-doctrine — time is derived, never recalled

**Links:**
[LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) ·
[ship §7](../skills/ship.md) · [handoff §4](../skills/handoff.md) ·
[SETUP §cloud — Models & effort](../SETUP.md#once-and-done--cloud-accounts)
· [lane law — parallel-lanes](../skills/parallel-lanes.md)

## Goal

Codify the time-derivation rule as part of the derivation law, stamp
the two stamp-writing rituals with it, and bring
[SETUP](../SETUP.md)'s Models & effort doctrine to the founder's
statement of 2026-07-16. Fully specified — zero lane decisions;
every edit below is exact.

## Out of scope

- Any decide — the kickoff carries the founder's statement;
  DECISIONS.md is untouched (files-touched is closed).
- Anything beyond the four files below + this bench's own spec and
  memory.

## Edits (exact)

1. `docs/LAWS.md`, the derivation-law bullet in
   [§Knowledge & tracking](../LAWS.md#knowledge--tracking) — append
   this sentence to the bullet:
   "Time is derived, never recalled: every stamp, date, or time
   written anywhere comes from a clock read at write time — the
   shell clock on a seat, the VM clock on a lane, git metadata when
   reading the past — never typed from memory."
2. `docs/skills/ship.md` — at §7's stamp writes (the frontmatter
   `shipped:` bullet and the ledger-line bullet), and
   `docs/skills/handoff.md` — at §4's Header stamp line: append
   "(stamp values are read from the shell clock, never typed)" —
   once per stamp step, placed so the sentence stays readable.
3. `docs/SETUP.md`, the "Models & effort" bullet in
   [§Once and done — cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
   — replace the bullet's text with the founder's doctrine of
   2026-07-16, verbatim per the fenced block below (fenced at top
   level so the SETUP-relative link checks only where it lands):

```text
- Models & effort (doctrine — the Web paste block's Model + Effort
  line draws from here). Effort ladder: low · medium · high · xhigh
  · max. Reliance pair: Opus 4.8 — cockpit default, all
  judgment/architecture work, at xhigh; Sonnet 5 (June 2026) —
  fully-specified, speed-sensitive, or volume work, at high.
  Brain-critical work: Fable 5 when available; until its return,
  Opus 4.8 · xhigh holds the seat. The plateau: xhigh is the working
  ceiling for judgment work — max only by explicit founder tag for
  rare one-shots; ultracode only by explicit founder tag for
  coverage-critical sweeps. Throttle order under usage limits:
  reduce effort before downgrading the model. Agent Teams: teammates
  are Sonnet 5
  ([parallel-lanes §Vehicles](skills/parallel-lanes.md#vehicles)).
```

Weave: new mentions link to their homes; `npm run check:links`
green.

## Done means

- [x] The LAWS derivation-law bullet carries the time sentence.
- [x] ship §7's two stamp bullets and handoff §4's Header stamp line
      carry the clock parenthetical.
- [x] SETUP §Models & effort matches the 2026-07-16 doctrine
      verbatim (reliance pair · Fable seat · the plateau · throttle
      order · teammates Sonnet 5 · the Web-line source note).
- [x] check:links green; full CI mirror green; the pushed commit's
      Actions run green; ready-flip only on green; completion
      comment @mentions wsher0901.

## Deviations

none — the lane flew the spec exactly (its report and memory record
zero deviations). Boxes ticked by the cockpit at the weld, verified
against the diff; the lane had recorded satisfaction in its memory
and the PR body.

## Open questions

none — fully specified.
