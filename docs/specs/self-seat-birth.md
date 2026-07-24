---
type: spec
id: self-seat-birth
title: Self-seat birth — liftoff fires --cloud blind; the cockpit seats itself (D-051)
status: open
stage: workshop
branch: docs/self-seat-birth
pr: —
opened: 2026-07-24
shipped: —
---

# self-seat-birth — the fragilest component is deleted, not maintained

**Links:**
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
· [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[D-049](../DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely)
(the self-URL mechanism) ·
[D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
(whose rung-1 mechanics this amends) ·
[cloud-born-cockpit](cloud-born-cockpit.md) ·
[flight-hardening](flight-hardening.md)

## Goal

Liftoff's rung 1 fires `claude --cloud` BLIND — no output
capture, no console attach, no `CONOUT$` read; exit status only.
The cockpit seats ITSELF on the board as its first act, using its
env-derived self-URL
([D-049](../DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely))
— the same mechanism successor-duty already uses. The launcher's
fragilest component is DELETED, not maintained.

Why: the console-attach capture exists solely to hand the tower a
session URL for the board weld; D-049 gave every session
self-knowledge, and the charter already seats successors by it.
Capturing a TUI's console buffer is the component most likely to
break silently on any platform UI change. Evidence: the
2026-07-23 flight's launcher worked, but the title-line
experiment on the same flight proved platform behavior shifts
under us.

## Out of scope

- A live test flight. The first REAL flight after this weld is
  the live test of self-seating — deliberately deferred to it on
  the founder's word tonight (on the record here and in the
  memory).
- Any change to rungs 2–4, the routine fire, or the summon
  workflow.
- IDEAS grooming (the launcher-as-a-script suggestions age out at
  a future harvest under D-050's compaction rule).

## Plan

1. **liftoff §6, rung 1 rewritten** — the hidden window fires
   `claude --cloud` with the composed birth prompt and captures
   NOTHING; exit status only. The flight-plan board weld still
   happens BEFORE the fire (unchanged), but its Sessions row now
   reads "cockpit · fired <time> · self-seat pending". liftoff §7's
   close line says the same — liftoff no longer reports a session
   URL; the cockpit's greeting push and its self-seat repaint
   carry it. SETUP's inventory copy of the automated shape aligns.
2. **The charter's SELF-SEAT duty (rule 1)**, placed with the
   first-act derivation: after deriving state, if the board's
   Sessions row reads "self-seat pending" (or carries no live
   cockpit), repaint it seating YOURSELF — the env-derived URL,
   the D-049 line — as a pickup-class micro-PR (DASHBOARD-only
   carve-out). A FOREIGN live cockpit seat-stamp instead → rule 7
   governs: you are the stray — push nothing, tombstone, stop.
3. **The failure shape, in both homes** (liftoff §6 + the
   charter): a birth that dies before Claude starts leaves no URL
   anywhere and sends no greeting — the MISSING push IS the
   signal. Founder's checks, in order: `/tasks` at any terminal ·
   the claude.ai/code list (list-native even when the clone
   failed) · retry the fire. The board's "self-seat pending" row
   goes stale honestly rather than carrying a scraped URL that
   may be wrong.
4. **DECIDE — D-051**, house style: blind fire + self-seat; the
   console-attach launcher RETIRED (disproof and retirement
   dated); the trade named; amends
   [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)'s
   rung-1 mechanics as corrected by
   [#193](https://github.com/wsher0901/roam/pull/193); upholds
   [D-049](../DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely)
   and board-governs.
5. **Supersession-note extension** where a record names
   console-attach as the STANDING shape:
   [cloud-born-cockpit](cloud-born-cockpit.md)'s note calls
   attach-and-read "the shape of record", and
   [flight-hardening](flight-hardening.md)'s note says its other
   corrections (the console-attach rung among them) "stand" —
   each gains one dated sentence. Note only, no rewrite.

## Files touched — nothing outside

[liftoff](../skills/liftoff.md) · [SETUP](../SETUP.md) ·
[DECISIONS](../DECISIONS.md) ·
[cloud-born-cockpit](cloud-born-cockpit.md) +
[flight-hardening](flight-hardening.md) (note extensions, step 5)
· this spec + [the memory](../memory/self-seat-birth.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.

## Done means

- [ ] `CONOUT` and `console` absent from liftoff §6's rung 1
      (records excepted); the blind-fire shape written; §7's
      close line carries "self-seat pending", no URL.
- [ ] SETUP's inventory copy of the automated shape aligns with
      rung 1 (no attach, no capture).
- [ ] The self-seat duty in the charter's rule 1 with the rule-7
      foreign-stamp collision case.
- [ ] The failure shape present in BOTH homes (missing push =
      the signal; /tasks · list · retry; the stale row honest).
- [ ] D-051 in DECISIONS, house style, the trade and the
      retirement dated.
- [ ] The two record notes extended by one dated sentence each —
      note only.
- [ ] `check:links` · `check:ledger` · `check:memory` green.
- [ ] Full CI mirror green locally AND the pushed head's Actions
      run green.
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to
      the founder verbatim.

## Pending

**Manual act after the weld (founder):** re-save the cockpit
routine box from the updated charter master. **The live test:**
the first real flight after this weld tests self-seating —
deferred there by the founder's word. **The queue:** the
response-doctrine bench (D-052) opens once this welds — its STEP
0 gates on this bench.

## Deviations

<filled by /ship: anything done differently than planned — or "none">

## Open questions

None at birth. This bench ships to the gate and does NOT merge.
