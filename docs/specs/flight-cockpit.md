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

- [x] D-046 appended to DECISIONS in house style, every clause
      recorded by name; anchors born resolving (check:links
      2155/0 with every D-046 link live).
- [x] HOME §Terms carries cockpit (cloud) + control tower
      (ground); the rename leaves ZERO ground-meaning "cockpit"
      in living doctrine (grep-proven at the gate); history/ and
      prior DECISIONS untouched by the diff; every renamed line
      listed in the PR description.
- [x] LAWS carries the no-solo-approval law with the #175
      precedent noted.
- [x] SETUP carries the cockpit charter master (the
      no-solo-approval law verbatim inside it), sibling of the
      clerk's section.
- [x] liftoff's cloud branch fires the cockpit with a
      board-derived flight plan as payload (§6); fire:clerk
      retained as manual fallback (§4 ladder).
- [x] `scripts/fire.mjs` exists (target clerk | cockpit), the
      drain idiom intact; `fire-clerk.mjs` is gone;
      package.json carries fire:cockpit AND fire:clerk;
      `.env.example` carries COCKPIT_FIRE_TOKEN +
      COCKPIT_ROUTINE_ID with the `trig_` note.
- [x] Failure paths repro'd 2026-07-20 for BOTH targets with
      fake credentials from a temp cwd — 401 pre-spawn
      (authentication_error, no session created, zero cap burn),
      honest exit 1 on all five paths (401 ×2 ·
      missing-credentials · unknown target · no target); no
      libuv assert — the drain idiom held. The success path is
      preserved by construction; its live proof is the next
      liftoff fire (the clerk-autospawn clause).
- [x] The surface doctrine lands in HOME + SETUP's loop text;
      the clerk sections carry "retirement staged (D-046)"; RC
      demoted in SETUP §Per machine; the summon button staged.
- [x] Gate-fold amendment (2026-07-20, from #177's external Web
      review): the BATON-HOLDER defined once in LAWS beside the
      baton law (the commanding session; control tower on the
      ground, cockpit in flight); the lane-command actor becomes
      "the baton-holder" in LAWS lane-law 1–2 + the bench-first
      line ("control tower and cockpit included"), parallel-lanes
      (the two lane-law lines · the respawn-ack · the lane's wait
      line), and the memory TEMPLATE's six writer cells.
      Deliberately untouched per the fold: handoff §1.5's
      local-park line (a ground act) · specs/ old-meaning
      "cockpit" (the immutable-record rule).
- [ ] Full CI mirror green; the pushed commit's Actions run
      green. (Ticked at the weld, whenever the founder's merge
      word lands.)

## Deviations

- The rename extends to `docs/memory/TEMPLATE.md` (the Status
  vocabulary's six writer-column mentions) — not one of the
  mandate's four named classes, but living doctrine the
  zero-stragglers verification clause covers; leaving it would
  fail the grep proof.
- `.env.example`'s pre-existing clerk comment ("routine id from
  the routine's URL") corrected to the `trig_` note while adding
  the COCKPIT_ pair — a retroactivity repair: that wording is the
  exact transcription trap that caused the Shakedown Flight's
  fire-1 400.
- [parallel-lanes §Answering a lane](../skills/parallel-lanes.md#answering-a-lane-the-mail-slot):
  the away-machine-off primary repoints from the clerk to the
  cockpit (D-046 clause 1's "inherits the lane mail-slot rules");
  the clerk stays listed as armed fallback until its staged
  retirement — slightly beyond a pure rename, recorded here.
- [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)'s
  Session-column vocabulary gains "during an away flight the
  cockpit's own row reads main · cockpit" — the board spec had to
  say how a cockpit names itself.
- The `.claude/` harness files (the pickup stub description · the
  session-start hook's briefing directive) still say "cockpit" in
  the ground meaning — outside the mandate's files-touched list;
  surfaced at THE GATE as a follow-up candidate.

## Open questions

none — ②a confirmed at the shakedown-audit gate (2026-07-20).
