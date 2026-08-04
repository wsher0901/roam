---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 13:35 UTC by ship's tail · from the cloud
FLIGHT 1 HAS SHIPPED — fleet empty, cockpit live · needs-you 1 ·
git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🔴 TRIAGE THE FALSE ACK — the one thing flight 1 raised that
   you have not yet ruled on. A message reached the repair lane
   carrying a well-formed ack token naming the cockpit's real
   session URL, about twenty seconds BEFORE any ack existed. The
   lane refused it on three checks: origin had no ack commit, its
   own watcher was still running with a 0-byte output file, and
   the real ack arrived later with DIFFERENT text. The cockpit
   corroborated its side — one ack, written in the vehicle form,
   and no message sent to the lane at all. Neither seat can
   observe what produced it and neither will guess. THE RULE IT
   ARGUES FOR: the ack is a COMMIT ON ORIGIN, NOT A MESSAGE — a
   lane that trusts a message can be licensed to work by anything
   able to write to its session. That is a
   [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
   change plus an [IDEAS](IDEAS.md) line, and a lane may write
   neither. Say "log it" at any ritual. (since 08-04)
   → [the flight's story](record/history/workshop/mechanism/flight-1-probe.md)

## The baton

COCKPIT — live since 2026-08-03 · 21:44 UTC (liftoff) ·
https://claude.ai/code/session_01CJJytMtvnRgx22itJzaxPb ·
awaiting your word on 1 item
Last flight: none — flight 1 is the first this floor has flown.

## In flight

| Who | For | State | Move |
|---|---|---|---|
| cockpit | commanded flight 1 from the cloud | 🟢 live since 08-03 21:44 UTC, seated | nothing flying; holds only your false-ack ruling |

Flight context: FLIGHT 1 IS DOWN AND MERGED as
[#268](https://github.com/wsher0901/roam/pull/268). It flew twice —
the shakedown, then a repair leg after the pre-gate critic caught
the log inferring its own ready-flip; the founder ruled a FRESH
lane for the repair so authorship stayed off the reviewing seat.
The cockpit's AUTO-LAND is deliberately held: it requires nothing
awaiting the founder, and the false-ack line above awaits you.

## Working on

- THE WORKSHOP DOCS & INSTRUCTIONS AUDIT — COMPLETE, end to end:
  the governing docs, all ten skills, the machinery, and ATLAS —
  which now renders as designed figures rather than mermaid.
  Twelve benches, [D-063](record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)
  through [D-073](record/DECISIONS.md#d-073--atlas-becomes-designed-figures).

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order)),
one phase per line:

- PHASE 1 — settle & test: the audit is done; THE TEST PROGRAM's
  flight 1 has FLOWN AND SHIPPED. The next flight's scope is yours
  to set.
- PHASE 2 — the vault: chronicle story lanes + a polish pass;
  opens with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

- Flight 1, the shakedown — the flight machinery flown end to end
  on trivial cargo and logged from inside itself; five of nine
  chain links proved visible from a lane's seat, four not.
  [#268](https://github.com/wsher0901/roam/pull/268)
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

- ⏳ THE FALSE ACK — flight 1's sharpest finding, still awaiting
  your triage; it argues the ack must be a commit on origin, never
  a message. → Needs-you above
- ⏳ The §Canary word-vs-token match question is DEFERRED by the
  founder — filed, no ruling made. → its line in [IDEAS](IDEAS.md)
- ⏳ FLIGHT 1 SURFACED FIVE, now all inbox lines: no git-identity
  step for the cloud seat · GitHub cannot record the non-author
  review · a memory's `updated:` stamp carries no timezone · the
  claim Status form differs between its two homes · route 1
  consumes the ready-flip. → their lines in [IDEAS](IDEAS.md)
- ⏳ The figure law's reach into [HOME](HOME.md) is DEFERRED by
  the founder — filed, no ruling made. → its line in
  [IDEAS](IDEAS.md)
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
  twelve benches, and approved THE TEST PROGRAM whose flight 1 has
  now shipped. → next: nothing owed.

## Next

Your triage of the false ack — the last thing flight 1 owes you.
On it the cockpit lands and the flight ends; the landing report
arrives on its own.
