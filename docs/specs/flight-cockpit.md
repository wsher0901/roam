---
type: spec
id: flight-cockpit
title: Flight Cockpit — the cockpit is the control tower online (D-046)
status: open
stage: workshop
branch: docs/flight-cockpit
opened: 2026-07-20
---

# flight-cockpit — the cockpit is the control tower online

**Links:** [DECISIONS](../DECISIONS.md) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[HOME §Terms](../HOME.md#terms) · precedent:
[shakedown-audit](shakedown-audit.md) (the attestation-haze
evidence; the external-review practice this bench turns into law)

## Goal

One decide (D-046), its doctrine, and the wiring: the cockpit
becomes the control tower online — a cloud command session with
FULL authorship; the no-solo-approval rule becomes law; liftoff's
cloud branch auto-fires the cockpit briefed from the board; the
CC-direct surface doctrine lands (Web = external reviewer +
optional thinking room); the clerk's retirement is staged on the
cockpit maiden; Remote Control demotes to backstop; and the
vocabulary renames — cockpit = cloud, control tower = ground.
Founder-mandated 2026-07-20, kickoff verbatim; ②a (backstop, not
retirement) confirmed at the shakedown-audit gate.

## Out of scope

- Executing the clerk retirement — staged here, executed at the
  cockpit maiden drill's closeout; until then the clerk stays
  armed. This bench only annotates the clerk's SETUP sections
  "retirement staged (D-046)".
- Building the summon button (the workflow_dispatch GitHub Action)
  — recorded in SETUP §Staged, adopt at first need.
- Creating the cockpit routine, generating its token, or writing
  `.env.local` — founder manual acts, post-weld (no CLI surface
  exists); listed in the PR summary at THE GATE.
- Rewriting [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) — the Web
  Project box's role narrows under the surface doctrine, but its
  master text is not in the mandate's files-touched list; any
  follow-up rides its own bench.
- Renaming "cockpit" in `.claude/` harness files (the pickup stub
  description · the session-start hook's briefing directive) —
  outside the mandate's files-touched list; surfaced at THE GATE
  as a follow-up candidate.
- Merging — this bench is tower-authored, so the very law it
  ships routes it through external Web review before the
  founder's word. Rides to THE GATE and holds.

## Plan

1. DECIDE — append D-046 to [DECISIONS](../DECISIONS.md), house
   style; body records every clause by name.
2. VOCABULARY — [HOME §Terms](../HOME.md#terms) gains cockpit
   (cloud) + control tower (ground); rename LIVING doctrine only —
   every ground-meaning "cockpit" becomes "control tower" in LAWS,
   HOME, SETUP, docs/skills/, and memory/TEMPLATE (the Status
   vocabulary is living doctrine — the zero-stragglers
   verification demands it); docs/history/, shipped specs, and
   prior DECISIONS entries stay AS WRITTEN. Every renamed line
   listed in the PR description.
3. LAW — [LAWS](../LAWS.md) gains no-solo-approval: no diff merges
   on its author's own approval; lane-authored diffs take any
   non-author session's review + the founder's word from anywhere;
   self-authored diffs take external Web review first. Cites
   [#175](https://github.com/wsher0901/roam/pull/175) as
   precedent.
4. COCKPIT CHARTER MASTER — new
   [SETUP](../SETUP.md#once-and-done--cloud-accounts) section,
   sibling of the clerk's: identity, bounded flight lifetime,
   decision-shaped turn-end reports doubling as the app push,
   mail-slot inheritance, file-disjointness, cap arithmetic,
   throttle order, and the no-solo-approval law verbatim.
5. LIFTOFF — [liftoff](../skills/liftoff.md)'s cloud branch
   becomes the cockpit fire: compose the flight plan FROM THE
   BOARD (in flight · owed · needs the founder's word), fire the
   cockpit routine with it as the payload; one cap-run per
   outing, accepted; fire:clerk stays the manual fallback until
   retirement.
6. FIRE VEHICLE — `scripts/fire-clerk.mjs` → `scripts/fire.mjs`
   taking a target (clerk | cockpit) selecting CLERK_/COCKPIT_
   env pairs; the `process.exitCode` drain idiom kept exactly;
   package.json gains `fire:cockpit`, keeps `fire:clerk`;
   `.env.example` gains the two COCKPIT_ placeholders with the
   `trig_` note.
7. SURFACE DOCTRINE — HOME's manual passages + SETUP's loop text
   (the claude.ai bullet · Models & effort's Web references):
   CC-direct is the standard working mode at both seats; the
   paste-block relay retires as a requirement, remains a tool;
   Web's one mandatory job is the external review of
   self-authored diffs.
8. CLERK RETIREMENT — staged, recorded in D-046 and the charter
   section, executed at the drill's closeout; this bench only
   annotates the clerk's SETUP sections "retirement staged
   (D-046)".
9. REMOTE CONTROL — [SETUP §Per machine](../SETUP.md#per-machine-procedure-machine-setup-skill)
   records RC demoted to backstop: toggles stay installed on both
   machines, never the plan; machine-off is the standard away
   posture (founder's ②a, confirmed 2026-07-20).
10. STAGED — [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens)
    gains the summon button: a workflow_dispatch GitHub Action
    holding the fire call, token in Actions secrets; two taps in
    the GitHub mobile app summon a cockpit with no desk. Adopt at
    first need, verify-before-rely. Not built here.

## Done means

- [ ] D-046 appended to DECISIONS in house style, every clause
      recorded by name; anchors born resolving.
- [ ] HOME §Terms carries cockpit (cloud) + control tower
      (ground); the rename leaves ZERO ground-meaning "cockpit"
      in living doctrine (grep-proven); history/ and prior
      DECISIONS untouched by the diff; every renamed line listed
      in the PR description.
- [ ] LAWS carries the no-solo-approval law with the #175
      precedent noted.
- [ ] SETUP carries the cockpit charter master (the
      no-solo-approval law verbatim inside it), sibling of the
      clerk's section.
- [ ] liftoff's cloud branch fires the cockpit with a
      board-derived flight plan as payload; fire:clerk retained
      as manual fallback.
- [ ] `scripts/fire.mjs` exists (target clerk | cockpit), the
      drain idiom intact; `fire-clerk.mjs` is gone;
      package.json carries fire:cockpit AND fire:clerk;
      `.env.example` carries COCKPIT_FIRE_TOKEN +
      COCKPIT_ROUTINE_ID with the `trig_` note.
- [ ] Failure paths repro'd for BOTH targets with fake
      credentials from a temp cwd — 401 pre-spawn, zero cap
      burn, honest exit 1.
- [ ] The surface doctrine lands in HOME + SETUP's loop text;
      the clerk sections carry "retirement staged (D-046)"; RC
      demoted in SETUP §Per machine; the summon button staged.
- [ ] Full CI mirror green; the pushed commit's Actions run
      green. (Ticked at the weld, whenever the founder's merge
      word lands.)

## Deviations

none yet.

## Open questions

none — ②a confirmed at the shakedown-audit gate (2026-07-20).
