---
type: spec
id: agent-teams-brain
title: Agent-teams doctrine — Hands: solo · subagents · team · lanes (D-045)
status: open
stage: workshop
branch: docs/agent-teams-brain
pr: —
opened: 2026-07-17
shipped: —
---

# agent-teams-brain — the Hands doctrine (D-045)

**Links:**
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
(the Models & effort doctrine lives there) ·
[DECISIONS](../DECISIONS.md) ·
[parallel-lanes §Vehicles](../skills/parallel-lanes.md#vehicles) ·
precedent for a lane-written decide:
[D-044](../DECISIONS.md#d-044--2026-07--the-pre-gate-critic-goes-live--ships-gate-opens-by-invoking-the-reviewer-subagent-verdicts-advisory-riding-with-the-summary-turns-on-the-staged-reviewer-upholds-d-038-and-the-reviewer-frame)

## Goal

Write the founder's Hands doctrine (stated verbatim with the
Shakedown phase-2 kickoff, 2026-07-17) into its homes: the
doctrine text into SETUP §Models & effort as a passage titled
"Hands: solo · subagents · team · lanes"; a new D-045 entry in
DECISIONS (this is a lane-written decide — the D-044 precedent);
and ONE pointer line in parallel-lanes §Vehicles. Fully specified
— zero lane decisions; every judgment is already made in this
spec.

## The doctrine (verbatim — copy exactly, reflowed only for line width)

> Solo (default): sequential or single-file work.
> Exploratory subagents: parallel READ-ONLY research inside one
> task; no spec needed (existing sanction).
> Agent team: ONE task splittable into file-disjoint subparts
> benefiting from cross-talk; founder present to steer — never
> long-unattended; lead + 2–4 Sonnet 5 teammates (start 2);
> delegate-mode lead for pure coordination; plan-approval for
> teammates touching shared or hard-to-reverse surfaces; never
> for ritual/law files, never across tasks.
> Parallel lanes: separate tasks, own benches, unattended-capable.
> Litmus: many hands on ONE bench with the founder watching =
> team · many benches = lanes · reading only = subagents.

## Plan (all three edits ripple in ONE commit)

1. `docs/SETUP.md`, inside the "Models & effort" bullet's region
   (directly after that bullet): a sibling bullet "Hands: solo ·
   subagents · team · lanes (doctrine,
   [D-045](link))" carrying the doctrine text above verbatim,
   formatted as the section's house style (indented bullet prose,
   · separators preserved).
2. `docs/DECISIONS.md`: append D-045 following the file's house
   pattern (read the file; D-044 is the model). Heading:
   `## D-045 — 2026-07 — Hands doctrine: solo · subagents · agent
   team · lanes — the litmus is one-bench-many-hands vs
   many-benches vs read-only (upholds D-020 and D-041)` — then
   Decision (the doctrine's essence), Why (one paragraph: choosing
   the vehicle was ad-hoc; the litmus makes it mechanical), and
   Affects listing EXACTLY the surfaces this diff touches:
   SETUP §Models & effort (the Hands passage) · parallel-lanes
   §Vehicles (the pointer line) · this spec/memory. Nothing in
   Affects the diff does not touch; nothing touched that Affects
   omits.
3. `docs/skills/parallel-lanes.md` §Vehicles: ONE pointer line —
   the choose-your-hands doctrine lives at SETUP §Models & effort
   (weave-linked) per D-045 (weave-linked, exact anchor).
4. Anchor discipline ([D-038](../DECISIONS.md#d-038--2026-07--ci-is-the-arbiter--actions-green-required-at-every-gate-local-gate-mirrors-all-six-ci-steps-d-anchors-born-resolving-upholds-d-027)):
   every link to D-045 must use the exact GitHub slug of the
   heading as committed — `npm run check:links` is the net; run it
   before every push.

## Constraints

- Touch ONLY: `docs/SETUP.md` (the §Models & effort region —
  nothing else in the file; the sibling lane owns other regions
  this flight), `docs/DECISIONS.md`, `docs/skills/parallel-lanes.md`
  (§Vehicles only), this spec, and the bench memory.
- Lane law throughout: push every commit; diary at the four
  moments; `BLOCKED:` + @wsher0901 on any blocker, then idle-wait;
  completion = final memory rewrite → Actions green → ready-flip →
  completion comment @wsher0901. NEVER merge; never touch
  DASHBOARD/ROADMAP/IDEAS/history.

## Done means

- [ ] SETUP §Models & effort carries the Hands passage, doctrine
      verbatim, D-045 weave-linked.
- [ ] DECISIONS carries D-045 with Affects matching the diff
      exactly.
- [ ] parallel-lanes §Vehicles carries the one pointer line.
- [ ] All three edits landed as one commit (the ripple rule).
- [ ] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked at the weld by the cockpit.)

## Verification

- grep `Hands: solo` → the SETUP passage.
- grep `D-045` → DECISIONS heading + SETUP link + parallel-lanes
  link, all resolving (check:links green).
- grep `Litmus:` → the doctrine's last clause present verbatim.
