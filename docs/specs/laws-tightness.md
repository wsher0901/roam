---
type: spec
id: laws-tightness
title: LAWS tightness — Option C: command + whys, expel procedure grain
status: in-progress
stage: workshop
branch: docs/laws-tightness
opened: 2026-07-15
---
# laws-tightness — LAWS tightness (Option C)

**Links:**
[LAWS](../LAWS.md) ·
[handoff §1.5](../skills/handoff.md#15--park-the-local-lanes-full-only) ·
[ship](../skills/ship.md) ·
Decisions applied (this pass decides nothing):
[D-027 — LAWS keeps command + one-line whys](../DECISIONS.md#d-027--2026-07--laws-polish--glossed-lane-law-provenance-re-homed-to-consolidations-ship-syncs-with-main-before-the-weld)
·
[D-036 — one-home routing](../DECISIONS.md#d-036--2026-07--information-routing--one-home-per-class-append-vs-upsert-home-carries-the-table-sessions-anchor-stabilized)

## Goal

Apply Option C to LAWS: keep the command and its one-line why (D-027
upheld), expel procedure grain that belongs in a skill, and fix the
stale decide trigger. No new decision — this applies existing law
(one-home routing, retroactivity) to LAWS itself. Four surgical edits.

## Out of scope

- The dispatch law, the eligibility gate, the cloud-launch line, and
  the canary timeout constants — all reserved for the delegation
  decide.
- Any gloss removal — the one-line whys stay (D-027).
- Everything else — no restructuring.

## Plan

Four surgical edits, one commit (after this bench):

1. [LAWS](../LAWS.md) §Parallel lanes & cloud, park-protocol bullet —
   rewritten to the law + its boundary; the wip-commit mechanics
   leave for [handoff §1.5](../skills/handoff.md#15--park-the-local-lanes-full-only).
2. [LAWS](../LAWS.md) §Workflow, decide bullet — trigger widened to
   match the current stub (roadmap-level + standing-convention;
   task-local implementation calls excluded).
3. [LAWS](../LAWS.md) §Workflow, merge bullet — "(+ preview link once
   previews exist)" → "(+ preview link)".
4. [ship §5](../skills/ship.md) — same retirement of the stale
   "once previews exist" conditional (retroactivity rider).

Then verify (below) · [ship](../skills/ship.md) to THE GATE — no
merge; founder approval follows external review in the Web chat.

## Done means

- [ ] LAWS park-protocol bullet rewritten; wip-commit mechanics gone
      from LAWS, the law + boundary + a handoff §1.5 link kept.
- [ ] LAWS decide bullet trigger widened + task-local tail.
- [ ] LAWS merge bullet: "(+ preview link)".
- [ ] ship §5: "preview link" (no conditional).
- [ ] Greps: "wip commit" in LAWS → 0; "add, cut, reorder" in LAWS →
      0; "once previews exist" across docs (bar history/) → 0;
      "convention change" in LAWS → present.
- [ ] check:links green (proves the handoff §1.5 anchor) + the full
      CI mirror (lint · format:check · check:links · tests · build)
      and the pushed commit's Actions run green.

## Open questions

none
