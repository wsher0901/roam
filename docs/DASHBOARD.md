---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-03 · 21:53 UTC by cockpit gate-repaint · from the cloud
FLIGHT 1 IS AT THE GATE — lane complete + reviewed, cockpit live ·
needs-you 3 · git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 THE WORD ON FLIGHT 1'S GATE — the lane is complete, CI green
   on its head, and the cockpit's NON-AUTHOR REVIEW is posted with
   no changes requested. Only your word is missing; on it the
   cockpit runs [ship](skills/ship.md) and welds. Say it to the
   cockpit. (since 08-03)
   → [the lane's PR](https://github.com/wsher0901/roam/pull/268) ·
   [its memory](https://github.com/wsher0901/roam/blob/docs/flight-1-probe/docs/memory/flight-1-probe.md)

2. 🟡 HARVEST FLIGHT 1'S FINDINGS INTO [IDEAS](IDEAS.md) — five
   surfaced and none is triaged; they are recorded but not yet
   inbox lines, and [IDEAS](IDEAS.md) is entered only on your
   word. Three are the lane's (a memory `updated:` stamp carries
   no timezone · the claim Status form differs between its two
   homes · route 1 consumes the ready-flip, so completion has a
   no-op step). Two are the cockpit's, met while flying: THE CLOUD
   SEAT HAS NO GIT-IDENTITY STEP — [machine-setup](skills/machine-setup.md)
   covers work PC and home PC only, and a push with the real email
   is rejected outright · GITHUB CANNOT RECORD THE NON-AUTHOR
   REVIEW — every seat authenticates as one account, so `APPROVE`
   is refused as self-approval on every lane PR. Say "log them"
   at any ritual. (since 08-03)
   → [the probe](https://github.com/wsher0901/roam/blob/docs/flight-1-probe/docs/record/probes/flight-1-shakedown.md)
   · [the review](https://github.com/wsher0901/roam/pull/268#pullrequestreview-4848856075)

3. ⚪ RULE WHETHER THE FIGURE LAW REACHES HOME — [ATLAS](ATLAS.md)
   is now eight designed SVG figures under
   [D-073](record/DECISIONS.md#d-073--atlas-becomes-designed-figures),
   but [HOME](HOME.md) keeps its own small mermaid chooser diagram,
   deliberately untouched. Whether it converts is a decide-level
   ruling. Say the word at any ritual, whenever suits. (since 08-03)
   → [the bench's story](record/history/workshop/definition/atlas-figures.md)

## The baton

COCKPIT — live since 2026-08-03 · 21:44 UTC (liftoff) ·
https://claude.ai/code/session_01CJJytMtvnRgx22itJzaxPb ·
awaiting your word on 3 items
Last flight: none — flight 1 is the first this floor has flown.

## In flight

| Who | For | State | Move |
|---|---|---|---|
| cockpit | commands flight 1 from the cloud | 🟢 live since 21:44 UTC, seated | holds the gate; welds on your word, then lands |
| lane · [flight-1-probe](https://github.com/wsher0901/roam/pull/268) | the shakedown's own log, written from inside the flight | 🟡 complete 21:49 UTC, awaiting your word | reviewed non-author, CI green; nothing left for the lane |

Flight context: the lane's seat is
[its cloud session](https://claude.ai/code/session_01NcE9UvzhybxinCqre5LvE2).
FLIGHT 1 OF THE TEST PROGRAM — the machinery is the subject and the
cargo is deliberately trivial, so any failure observed is a failure
of the machinery. The cockpit carries the lane's gate to the phone;
its own AUTO-LAND duty ends the flight unprompted.

## Working on

- THE WORKSHOP DOCS & INSTRUCTIONS AUDIT — COMPLETE, end to end:
  the governing docs, all ten skills, the machinery, and ATLAS —
  which now renders as designed figures rather than mermaid.
  Twelve benches, [D-063](record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)
  through [D-073](record/DECISIONS.md#d-073--atlas-becomes-designed-figures).

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order)),
one phase per line:

- PHASE 1 — settle & test: the audit is done; THE TEST PROGRAM has
  opened — flight 1, the shakedown, has flown and stands at the
  gate.
- PHASE 2 — the vault: chronicle story lanes + a polish pass;
  opens with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

- Atlas becomes designed figures — eight hand-drawn SVG swimlanes
  where the lane is the owner; mermaid retired.
  [#265](https://github.com/wsher0901/roam/pull/265)
- The Atlas no-scroll law — ATLAS stops scrolling sideways; all
  seven diagrams rewrapped, plus the intake band and a sitting.
  [#263](https://github.com/wsher0901/roam/pull/263)
- Atlas gains the enforcement mesh — the delivery chain from
  ambient law to your word, drawn once, with four honest gaps.
  [#259](https://github.com/wsher0901/roam/pull/259)

**Issues**

- ⏳ Four joints of the workshop are JUDGMENT ONLY, now drawn and
  each carrying an inbox line: the links gate is
  destination-blind · nothing checks derivation · board freshness
  waits for a ritual · nothing enforces the review or your word.
  → their lines in [IDEAS](IDEAS.md)
- ⏳ The baton case table has no case for a GROUND HANDOFF — this
  board's own line was written without one. → its line in
  [IDEAS](IDEAS.md)
- ⏳ `npm run count:runs` fails under the work PC's Git Bash while
  the script run directly succeeds. → its line in
  [IDEAS](IDEAS.md)
- ⏳ HOME's files table has no row for the user-prompt-submit
  hook, though it exists and enforces the close-lock. → its line
  in [IDEAS](IDEAS.md)
- ⏳ The figure audit that proved all eight ATLAS figures lives
  only as prose in the bench's story — no script, no CI gate, so
  the result is reproducible only by re-authoring it. → its line
  in [IDEAS](IDEAS.md)

## Where we are (Roam)

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░ (T3–T6 paused → phase 3)
S2 · Skeleton & design · 3/5 ███░░ (T5 paused → phase 3)
S3–S8 · queued in order · 0/22

## Web + Design

- (Web) "GitHub workflow protocol and web instructions setup" —
  the audit's ops chat; it carried the external review of all
  twelve benches, and approved THE TEST PROGRAM whose flight 1 is
  this shakedown. → next: nothing owed; it opens again at the
  lane's gate, which the cockpit carries.

## Next

Your word on flight 1's gate. Nothing else moves until it comes —
on it the cockpit welds and then lands, and the landing report
arrives on its own.
