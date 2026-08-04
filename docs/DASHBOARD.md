---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 20:11 UTC by pickup · from work PC
FLIGHT 3 LANDED BY DESK TAKEOVER — 1 gate adopted here · needs-you 1
· git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **THE MERGE WORD ON
   [#295](https://github.com/wsher0901/roam/pull/295)** — green on
   `a9fa374`, reviewed non-author by the superseded cockpit, so
   only your word is missing. Say it HERE, at this desk; this desk
   runs [ship](skills/ship.md). Withholding it is still a valid
   answer — the flight it was testing is already over. (since
   08-04)
   → [the verdict + the spec](https://github.com/wsher0901/roam/pull/295)
   · four lane findings ride to [IDEAS](IDEAS.md) at the weld

## The baton

CONTROL TOWER — work PC, since 2026-08-04 20:07 UTC (pickup —
DESK TAKEOVER)
Last flight: LANDED 2026-08-04 20:07 UTC BY THIS PICKUP — was
awaiting your word on 1 item (now in Needs you) · 0 lanes fenced,
nothing was flying.

The superseded cockpit
(`session_01AUaEBaTyuYDYfELjrG85mo`) self-retires by
[land](skills/land.md)'s Scenario 2 on its next wake, reading its
supersession off this board and writing none itself. Write 1
landed at `f747b45`
([#298](https://github.com/wsher0901/roam/pull/298), 20:07 UTC);
this line replaces it. Either line satisfies the wake-rule, so the
desk did not wait for that retirement.

⚠️ **THE DOUBLE BIRTH RESOLVED ITSELF, and the record is worth
keeping.** Liftoff fired rung 1 twice — 15:11 and 15:12 UTC —
because the first fire's exit status was not captured and its speed
was misread as a failure. BOTH COCKPITS WERE REAL AND BOTH REACHED
THIS BOARD. They raced to seat: the winner merged its self-seat at
[#283](https://github.com/wsher0901/roam/pull/283), and the twin's
own attempt survives as
[#285](https://github.com/wsher0901/roam/pull/285), opened 15:17:33
and closed unmerged. The board-is-the-arbiter rule was flown for
real, against a genuine two-session race, and it held with no
collision and no lost work. Nothing is owed here; the note stands
because the next double fire will be read against it. THE LOSER'S
BRANCH WAS SWEPT 2026-08-04 on the founder's word, after its one
unique commit (`b8a907a`, a DASHBOARD-only superseded draft) was
verified to survive in the closed PR — which is where to read it.

## In flight

| Who | For | State | Move |
|---|---|---|---|
| bench · [template-date-row](https://github.com/wsher0901/roam/pull/295) | TEMPLATE's `complete, awaiting merge` row gains its `<date>` slot | 🟢 complete · green on `a9fa374` · reviewed · AT THE GATE | your word, then ship welds it from this desk |
| cockpit · [session](https://claude.ai/code/session_01AUaEBaTyuYDYfELjrG85mo) | flight 3's control tower | 🟡 superseded 20:07 UTC · retires on its next wake | nothing — it lands by Scenario 2 and writes no board |

FLIGHT CONTEXT — flight 3 flew its object and the object was the
landing. It tested
[pickup §6](skills/pickup.md#the-desk-takeover--a-live-cockpit-holding-decisions)'s
OTHER entry door — a desk taking the baton from a cockpit that is
LIVE and holding a gate
([D-061](record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
scenario 2, never once flown; flight 2 could not reach it because
its fleet was already at ground). The door fired at 20:07 UTC on
the two facts it keys on — a live cockpit, a gate awaiting the
founder — with the lane finished and nothing to fence.

THE WHOLE ROUTE, MEASURED — label 19:39:53, canary 19:41:26, ack
19:42:37, cargo 19:47:07, CI green 19:47:55, reviewed 19:51,
superseded 20:07. 93 seconds to claim, 71 more to licence, 4m30s of
licensed work on doc-sized cargo. Flight 2 measured the claim leg
at ~27 minutes once and ~2 the next; this is a third point at the
fast end, and the spread stays the open question.

## Working on

- FLIGHT 3 — FLOWN AND LANDED 2026-08-04 by the desk takeover it
  existed to test. What remains of it is one merge word and, at the
  weld, the harvest of its lane's four findings.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)),
one phase per line:

- PHASE 1 — settle & test: the audit is done and flights 1–3 have
  flown. What remains is FLIGHT 4 (the failure drill — connector
  rungs, summon, and the deterministic freeze checkpoint). → its
  line in [IDEAS](IDEAS.md)
- PHASE 2 — the vault: chronicle story lanes + a polish pass;
  opens with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

- D-074 — the mid-work freeze test becomes a DETERMINISTIC DRILL (a
  bench that holds at a checkpoint until acked), and phase 1's
  closing condition moves to flights 3 and 4.
  [#290](https://github.com/wsher0901/roam/pull/290)
- The ack is a commit on origin, never a message — §Canary now
  states a lane's licence in all three places a reader meets the
  handshake; flight 2 lane A.
  [#278](https://github.com/wsher0901/roam/pull/278)
- The cloud seat gains a git-identity step — machine-setup's
  one-time list covers three seats, with a derivation recipe rather
  than a literal value; flight 2 lane B.
  [#279](https://github.com/wsher0901/roam/pull/279)
- HOME's files table gains the close-lock hook row — plus the
  five-finding table audit that came with it; flight 2 lane C.
  [#280](https://github.com/wsher0901/roam/pull/280)
- The session-start sweep's blind spot — the stale-branch sweep
  cannot see a branch carrying no upstream config; logged as an
  inbox line after being reproduced both ways.
  [#277](https://github.com/wsher0901/roam/pull/277)
- Flight 1, the shakedown — the flight machinery flown end to end
  on trivial cargo and logged from inside itself; five of nine
  chain links proved visible from a lane's seat, four not.
  [#268](https://github.com/wsher0901/roam/pull/268)

**Issues**

- ✓ THE DESK TAKEOVER DOOR IS FLOWN. Both of pickup §6's entry
  doors have now carried real traffic: flight 2 took the grounded
  fleet, flight 3 the live cockpit. The two-fact trigger fired off
  origin, write 1 landed at adopt
  ([#298](https://github.com/wsher0901/roam/pull/298)) and this
  repaint replaced it. What the flight did NOT test is the half
  that needs the other seat: whether the cockpit actually reads its
  own tombstone and self-retires. That is observed after the fact,
  by its silence and its unwritten board, not asserted here.
- ⏳ FOUR LANE FINDINGS AWAIT HARVEST AT THE WELD — a lane may not
  write [IDEAS](IDEAS.md) itself. Two are fresh sightings that
  sharpen existing lines (the `npm ci` gap; route 1 eating the
  ready-flip, now a property rather than an incident), one is new
  (`check-memory.mjs` strips code spans with a newline-forbidding
  regex, so a backticked placeholder that WRAPS survives the strip
  and is reported unresolved), and one adds a third redelivery
  sighting. → their block in the lane's memory, on
  [#295](https://github.com/wsher0901/roam/pull/295)
- ⏳ THE MID-WORK WINDOW IS REAL AND UNDER TWO MINUTES — a fired
  cockpit and an unfinished lane overlapped by at most 1m47s, which
  retires flight 2's "closes by construction" without touching
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)'s
  ruling. → its line in [IDEAS](IDEAS.md)
- ⏳ THE BOARD'S `fired <t>` STAMP CANNOT BE THE FIRE TIME — it is
  painted before the weld that precedes the fire, so every measured
  latency has been read off a time that had not happened. → its
  line in [IDEAS](IDEAS.md)
- ⏳ THE WAKE-LOCK'S REJECTED-PUSH RULE IS STILL UNOBSERVED — does a
  fence actually STOP a live worker. Three flights missed it
  because every fence landed on a finished bench; flight 4's
  checkpoint drill is what tests it. → its line in [IDEAS](IDEAS.md)
- ✓ THE MID-WORK FREEZE TEST IS UNRUNNABLE ON DOC-SIZED CARGO —
  ruled rather than retried; it becomes a deterministic drill
  folded into flight 4. →
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
- ✓ THE FLEET PATH IS PROVEN END TO END — flight 2's grounded-fleet
  resume was flown, three benches adopted for zero cap runs, and a
  per-SHA check confirmed the review verdicts covered what merged.
  [#278](https://github.com/wsher0901/roam/pull/278) ·
  [#279](https://github.com/wsher0901/roam/pull/279) ·
  [#280](https://github.com/wsher0901/roam/pull/280)
- ⏳ Flight 2 surfaced ELEVEN new inbox lines, harvested at that
  tail because a lane may not write [IDEAS](IDEAS.md) itself: the
  dispatch-latency window · nothing requiring a PR's comments be
  read · stamps that are checked for shape but never for truth · a
  fleet lane unable to name its own bench · HOME's four further
  table gaps and the coverage gate they argue for · machine-setup's
  two-seat step 2 · and four smaller ones. → their lines in
  [IDEAS](IDEAS.md)
- ⏳ The §Canary word-vs-token match question is DEFERRED by the
  founder — filed, no ruling made. → its line in [IDEAS](IDEAS.md)
- ⏳ FLIGHT 1'S REMAINING FOUR: GitHub cannot record the
  non-author review · a memory's `updated:` stamp carries no
  timezone · the claim Status form differs between its two homes ·
  route 1 consumes the ready-flip. → their lines in
  [IDEAS](IDEAS.md)
- ⏳ The figure law's reach into [HOME](HOME.md) is DEFERRED by
  the founder — filed, no ruling made. → its line in
  [IDEAS](IDEAS.md)
- ⏳ Four joints of the workshop are JUDGMENT ONLY, each carrying an
  inbox line: the links gate is destination-blind · nothing checks
  derivation · board freshness waits for a ritual · nothing enforces
  the review or your word. → their lines in [IDEAS](IDEAS.md)
- ⏳ The baton case table has no case for a GROUND HANDOFF. → its
  line in [IDEAS](IDEAS.md)
- ⏳ `npm run count:runs` fails under the work PC's Git Bash while
  the script run directly succeeds — NOT REPRODUCED again at this
  sitting; the npm wrapper returned a clean count. → its line in
  [IDEAS](IDEAS.md)
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
  the audit's ops chat. It carried the external review of all
  twelve benches, approved THE TEST PROGRAM, reviewed
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  (PASS on `78facd1`), and APPROVED FLIGHT 3 on 2026-08-04. Its
  verify-flight-2 reconciliation gaps are filed as inbox lines
  ([#293](https://github.com/wsher0901/roam/pull/293)). → next:
  nothing owed.

## Next

Your word on [#295](https://github.com/wsher0901/roam/pull/295),
and this desk ships it — or say nothing and it keeps until you do.
