---
type: spec
id: response-doctrine
title: Response doctrine + WEB-INSTRUCTIONS v5 — one standard for how every surface speaks to the founder (D-052)
status: open
stage: workshop
branch: docs/response-doctrine
pr: —
opened: 2026-07-24
shipped: —
---

# response-doctrine — minimum reading time to decision

**Links:**
[HOME](../HOME.md) · [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
· [liftoff](../skills/liftoff.md) · [handoff](../skills/handoff.md)
· [pickup](../skills/pickup.md) ·
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) ·
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
(the CC-direct doctrine v5 finally reflects) ·
[D-050](../DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)
(pickup's ⏸ lead stays above everything)

## Goal

One theme: how every surface speaks to the founder — one standard,
one home, every report shape aligned, and the Web master rewritten
to match. The founder's stated goal, verbatim: minimum reading
time to decision, explicit steps over abstractions, purpose-shaped
explanation.

## Out of scope

- The chronicle layer (queued after v5, its own chat).
- Any change to the review procedure's substance — v5 restates the
  no-solo-approval flow as it stands; nothing new is decided about
  reviews.
- The board spec (handoff §4) — the board's shape is untouched;
  the doctrine governs REPORTS and BRIEFS.

## Plan

1. **THE DOCTRINE — one home**: [HOME](../HOME.md) gains
   §Response doctrine, five clauses: (a) answer first ·
   (b) explicit steps — every prompt handed to the founder carries
   WHERE · WHAT · WHY · (c) purpose-shaped explanation, last and
   concise · (d) state derived live · (e) glyph verdicts, every 🔴
   naming the fix and where. Every ritual and charter REFERENCES
   it — one home, no copies.
2. **FOUNDER'S COMMAND CARD**: [HOME](../HOME.md) gains §Command
   card — the platform commands, one line each (what · when):
   `/tasks` + `t` · `claude --teleport` + `/teleport` · `/mcp` ·
   `/compact` + `/context` · `/schedule` · `/remote-env` ·
   `claude --cloud "<prompt>"` · Esc · `/model` `/effort`
   `/rename`. [liftoff §7](../skills/liftoff.md#7--close) and the
   charter's R2 POINT at the card instead of re-listing.
3. **COCKPIT REPORT TEMPLATE** — the charter's rule 5 rewritten:
   every turn-end report opens with the FLEET TABLE (per lane:
   id · purpose · 🟢/🟡/🔴 · waiting-on), then NEEDS YOUR WORD
   (the exact word and where to type it), then OPTIONS + REC,
   context last. Every 🔴 names its fix and where. One message
   carries everything a decision needs. BOX RE-SAVE rides the
   manual acts.
4. **LIFTOFF · HANDOFF · PICKUP status templates** aligned to the
   founder's shape: WORKING ON · WHAT HAPPENED (context →
   narrative → issue → resolution) · SUPPLEMENTAL (parallel Web or
   Design work, if any) · PARALLEL/RECENT FLIGHTS with 🟢
   all-good / ⏸ resume-needed per item. Pickup's ⏸ INTERRUPTED
   lead
   ([D-050](../DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval))
   stays above everything. The close reports and briefs are
   REWRITTEN to the template, not merely annotated.
5. **WEB-INSTRUCTIONS v5** — the full master rewrite, describing
   the system AS IT IS TONIGHT: the Web surface's role (external
   reviewer under no-solo-approval + thinking room; never a
   writer) · the surfaces map (control tower · cockpit · lanes ·
   Web · Design) · CC-direct — the paste-block-loop language DIES
   · the review procedure (independent fetch, gates re-run,
   verdict with the on-the-record word-paste) · the response
   doctrine restated compactly · the live-status rule · the
   prompt-delivery rule (where · what · why) · the brief format
   aligned to item 4 · the WEB HANDOFF block modernized. The
   master-copy pattern line KEPT (edit here via PR, re-paste into
   the claude.ai box — the box is a copy).
6. **DECIDE — D-052**, house style, the founder's stated goal
   verbatim in the Why.

## Files touched — nothing outside

[HOME](../HOME.md) · [SETUP](../SETUP.md) (charter rule 5 + the
R2 pointer) · [liftoff](../skills/liftoff.md) ·
[handoff](../skills/handoff.md) · [pickup](../skills/pickup.md) ·
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) ·
[DECISIONS](../DECISIONS.md) · this spec +
[the memory](../memory/response-doctrine.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.

## Done means

- [ ] §Response doctrine and §Command card exist in HOME; every
      ritual and the charter REFERENCES (never copies) them
      (grep).
- [ ] The fleet table in the charter's rule 5; every 🔴 names its
      fix and where.
- [ ] The four-part status template in all three rituals; pickup's
      ⏸ lead stays above everything.
- [ ] "paste block" absent from WEB-INSTRUCTIONS as a live
      mechanism (historical mentions in record excepted); v5
      carries the surfaces map, CC-direct, the review procedure,
      the doctrine, the live-status and prompt-delivery rules, the
      aligned brief, the modernized WEB HANDOFF, and the
      master-copy pattern line.
- [ ] D-052 in DECISIONS, house style, the founder's goal
      verbatim.
- [ ] `check:links` · `check:ledger` · `check:memory` green.
- [ ] Full CI mirror green locally AND the pushed head's Actions
      run green.
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to
      the founder verbatim.

## Pending

**Manual acts after the weld, once, covering both benches
(founder):** (1) re-save the cockpit routine box from the final
charter master; (2) copy the new WEB-INSTRUCTIONS master into the
claude.ai Roam Project's instructions box (settings → project
instructions — the box is a copy). **The queue after:** THE
CHRONICLE LAYER (its own chat).

## Deviations

<filled by /ship: anything done differently than planned — or "none">

## Open questions

None at birth. This bench ships to the gate and does NOT merge.
