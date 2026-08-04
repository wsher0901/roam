---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 13:22 UTC by cockpit gate-repaint · from the cloud
FLIGHT 1 IS AT THE GATE AGAIN — repaired + reviewed, cockpit live ·
needs-you 2 · git outranks this board. How to read
it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 THE WORD ON FLIGHT 1'S WELD — the repair lane fixed all
   eight brief items, CI is green on head `01a26c6`, and the
   cockpit's SECOND non-author review is posted with no changes
   requested. The probe now reads WEAKER than before by design:
   two "observed" facts became "not observable from this seat" and
   the canary line went ✅ → ⚠️, with a dated line making the
   change auditable. Say "merge" to the cockpit. (since 08-04)
   → [the lane's PR](https://github.com/wsher0901/roam/pull/268) ·
   [the probe](https://github.com/wsher0901/roam/blob/docs/flight-1-probe/docs/record/probes/flight-1-shakedown.md)

2. 🔴 TRIAGE THE FALSE ACK — a message reached the repair lane
   carrying a well-formed ack token that named the cockpit's real
   session URL, about twenty seconds BEFORE any ack existed. The
   lane refused it on three checks: origin had no ack commit, its
   own watcher was still running with a 0-byte output file, and
   the real ack arrived later with DIFFERENT text. The cockpit
   corroborated its side — it wrote one ack, in the vehicle form,
   and sent the lane no message at all. Neither seat can observe
   what produced it and neither will guess. THE RULE IT ARGUES
   FOR: the ack is a COMMIT ON ORIGIN, NOT A MESSAGE — a lane
   that trusts a message can be licensed to work by anything able
   to write to its session. That is a
   [§Canary](skills/parallel-lanes.md#canary-handshake-both-sides)
   change plus an [IDEAS](IDEAS.md) line, and a lane may write
   neither. Say "log it". (since 08-04)
   → [the lane's account](https://github.com/wsher0901/roam/blob/docs/flight-1-probe/docs/memory/flight-1-probe.md)

## The baton

COCKPIT — live since 2026-08-03 · 21:44 UTC (liftoff) ·
https://claude.ai/code/session_01CJJytMtvnRgx22itJzaxPb ·
awaiting your word on 1 item
Last flight: none — flight 1 is the first this floor has flown.

## In flight

| Who | For | State | Move |
|---|---|---|---|
| cockpit | commands flight 1 from the cloud | 🟢 live since 08-03 21:44 UTC, seated | holds the gate; welds on your word, then lands |
| lane · [flight-1-probe](https://github.com/wsher0901/roam/pull/268) | repairing the shakedown log's own epistemic faults | 🟢 complete 13:19 UTC, 8/8 repaired | reviewed non-author, CI green; nothing left for the lane |

Flight context: THE RESPAWN IS THE FOUNDER'S "lane" RULING on the
held weld — the pre-gate critic found the log inferring its own
ready-flip and contradicting itself on the route-1 ordering, and a
FRESH lane repairs that rather than the cockpit, so authorship stays
off the reviewer and the non-author review survives. The first
lane's seat was
[its cloud session](https://claude.ai/code/session_01NcE9UvzhybxinCqre5LvE2),
now superseded. Cap: this is fire 1 of today against 15 routine
runs/day; the remaining count is NOT readable from this seat —
`npm run count:runs` needs the `gh` CLI, which the cloud has not
got, so it is stated as unknown rather than guessed. The cockpit's
AUTO-LAND duty ends the flight unprompted.

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
  opened — flight 1 has flown, and its log is being repaired by a
  second lane before the weld.
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
  twelve benches, and approved THE TEST PROGRAM whose flight 1 is
  this shakedown. → next: nothing owed; it opens again at the
  lane's gate, which the cockpit carries.

## Next

Your word on the weld, and your triage of the false ack. On the
word the cockpit welds and then lands; the landing report arrives
on its own.
