---
type: spec
id: full-pass-fixes
title: Full-pass fixes — close the July full-pass audit's findings
status: shipped
stage: workshop
branch: chore/full-pass-fixes
pr: 144
opened: 2026-07-16
shipped: 2026-07-16
---
# full-pass-fixes — close the July full-pass audit's findings

**Links:**
[handoff §4](../skills/handoff.md) ·
[SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff §2](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) ·
[IDEAS](../IDEAS.md) · precedent:
[skills-precision-pass](../history/workshop/mechanism/skills-precision-pass.md)

## Goal

Close the July full-pass audit's findings: external-item clearing
(handoff §4), the routine-prompt master (SETUP), a mechanical cap
read (`count:runs` + liftoff §2), collision hardening (rejected-push
wake + label idempotency), the reply-ack window constant, the maiden
flight verify list, a Models & effort doctrine, and README + Web
typo currency. No decide: every edit codifies an already-standing
convention or implements an existing law (precedent:
[#128](https://github.com/wsher0901/roam/pull/128), skills precision
pass). Task-local calls route to this task's memory.

## Out of scope

- Any decide.
- The maiden flight itself (this ships its checklist, not the
  flight).
- Product code.

## Plan

1. [handoff §4](../skills/handoff.md) Needs-you bullet — external
   items (UI setup, account config) clear on the founder's word at
   any ritual; the repaint drops them then.
2. [SETUP §cloud](../SETUP.md#once-and-done--cloud-accounts) — the
   routine's saved prompt lands as a fenced master (the routine box
   is a copy); a "Models & effort" doctrine list (ladder, defaults,
   throttle order).
3. `scripts/count-routine-runs.mjs` (new, read-only, zero-dep) +
   `count:runs` in package.json — count today's lane:cloud label
   events via `gh api`; print consumed + remaining of 15.
4. [liftoff §2](../skills/liftoff.md) — budget truncation derives
   the consumed count via `npm run count:runs`; on script failure,
   ask the founder — never guess (derivation law).
5. [parallel-lanes](../skills/parallel-lanes.md) — §Wake-lock: a
   rejected push is a wake; §Cloud spawn route 1: label idempotency
   guard; §Canary: reply-ack window (~15 min) sibling constant;
   §Cloud spawn: "Maiden flight — verify" checklist incl. the
   dormant-baton case.
6. [WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) — fenced master:
   `--branch <n>` → `--branch <name>` (audit finding; verify against
   the file — may already be current).
7. README.md — "Status: pre-build." → in-build status line.
8. [IDEAS](../IDEAS.md) — one dated line: a check:board CI gate,
   weighed against the board's deliberate least-authoritative
   status.

## Founder confirmations carried (for the tail repaint)

- The D-041 one-time UI setup is COMPLETE (routine · GitHub App ·
  RC toggles · lane:cloud label) — Needs-you #5 drops at the
  repaint.
- Needs-you #1 stays until the founder re-pastes the Web box
  post-merge; reworded to "paste the current master once".

## Done means

- [x] handoff §4 carries the external-item clearing sentence.
- [x] SETUP carries the saved-prompt master (fenced) and the
      "Models & effort" doctrine.
- [x] `scripts/count-routine-runs.mjs` exists; `npm run count:runs`
      prints "<N> GitHub-triggered runs today · <15−N> remaining" or
      fails nonzero with a plain message (both acceptable at
      verify).
- [x] liftoff §2 derives the budget via `count:runs`; never-guess
      fallback present.
- [x] parallel-lanes: rejected-push wake in §Wake-lock · label
      idempotency in §Cloud spawn route 1 · reply-ack window in
      §Canary · "Maiden flight — verify" checklist with the
      dormant-baton item.
- [x] WEB-INSTRUCTIONS fenced master says `--branch <name>` (grep).
- [x] README carries the in-build status; "pre-build" absent.
- [x] IDEAS carries the check:board line.
- [x] Full CI mirror green (lint · format:check · check:links ·
      check:ledger · tests · build); the pushed commit's Actions run
      green.

## Deviations

- Item 6 needed no edit: WEB-INSTRUCTIONS already reads
  `--branch <name>` on main — the audit finding was stale; grep
  proves the verified state.
- The counter needed an explicit `maxBuffer` (64 MB) on its
  `gh api` call — a 100-PR page overflows Node's 1 MB default
  (ENOBUFS); found when the first run failed despite a healthy gh.
- SETUP's live-counter line gained "mechanical read:
  `npm run count:runs`" so the new script is discoverable from the
  cap's home (same-section weave, not a new finding).
- At external review: parallel-lanes route 1's saved-prompt
  paraphrase inverted to a pointer at the SETUP master (one home per
  class — the route ladder says when it fires, never what it says).

## Open questions

none.
