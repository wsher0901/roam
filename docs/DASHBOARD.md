---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 20:33 UTC by ship's tail · from work PC
FLIGHT 3 COMPLETE — welded, harvested, both seats reported · clean
floor · needs-you 0 · git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

Nothing.

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

Nothing — clean floor. Flight 3's cockpit
(`session_01AUaEBaTyuYDYfELjrG85mo`) HAS RETIRED: it woke, read its
supersession here, landed by [land](skills/land.md)'s Scenario 2,
wrote no board, and reported two findings on its way out. Safe to
archive.

FLIGHT 3, MEASURED END TO END — label 19:39:53, canary 19:41:26,
ack 19:42:37, cargo 19:47:07, CI green 19:47:55, reviewed 19:51,
superseded 20:07, welded 20:22. 93 seconds to claim, 71 more to
licence, 4m30s of licensed work on doc-sized cargo. Flight 2
measured the claim leg at ~27 minutes once and ~2 the next; this is
a third point at the fast end, and the spread stays the open
question.

## Working on

- FLIGHT 3 — FLOWN, LANDED AND WELDED 2026-08-04. Nothing remains
  of it; phase 1 now stands on flight 4 alone.

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

- TEMPLATE's `complete, awaiting merge` row gains its `<date>` slot
  — the vocabulary table stopped contradicting its own checker;
  flight 3's sole cargo, flown by a cloud lane and welded from the
  desk that superseded its cockpit.
  [#295](https://github.com/wsher0901/roam/pull/295)
- THE DESK TAKEOVER — flight 3's real cargo: a desk took the baton
  from a LIVE cockpit holding an open gate, the second of pickup
  §6's two doors and the last one never flown.
  [#298](https://github.com/wsher0901/roam/pull/298) ·
  [#299](https://github.com/wsher0901/roam/pull/299)
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

- ✓ THE DESK TAKEOVER DOOR IS FLOWN, AND NOW FROM BOTH SEATS. Both
  of pickup §6's entry doors have carried real traffic: flight 2
  took the grounded fleet, flight 3 the live cockpit. The half this
  board could not assert at the takeover — whether the cockpit
  actually reads its own tombstone and self-retires — IS NOW
  OBSERVED: the superseded seat woke, read its supersession off
  this board, retired by [land](skills/land.md)'s Scenario 2, and
  wrote no board. It also returned two findings while doing it,
  which is a stronger result than silence would have been.
- ⏳ **MASTER ITEM QUEUED** — THE TOMBSTONE LINE LIES UNDER DESK
  TAKEOVER. The charter's rule 8 makes a retiring seat announce a
  replacement cockpit that a desk takeover never summons; the
  retiring seat refused to speak it, correctly. The fix is a
  charter edit, so it carries the box-master duty: **v5** plus a
  **box re-save**, and the re-save takes a Needs-you line the
  moment that edit merges — not before, since there is nothing yet
  to re-save. → its line in [IDEAS](IDEAS.md)
- ⏳ A SUPERSEDED SEAT HAS NO CHANNEL BUT SPEECH — it may write no
  board, so a finding it holds at retirement reaches you only in
  its final message, and the tombstone is fixed text. Unruled: may
  that message carry ONE off-origin block? → its line in
  [IDEAS](IDEAS.md)
- ✓ THE LANE'S FOUR FINDINGS ARE HARVESTED — one new line
  (`check-memory.mjs` strips code spans with a newline-forbidding
  regex, so a backticked placeholder that WRAPS is reported
  unresolved) and three upserts onto existing lines: the `npm ci`
  gap now has four independent seats, route 1 eating the ready-flip
  is a property rather than an incident, and the redelivery line
  carries a third sighting plus the limit all three share — every
  one landed on a WAITING lane, never a mid-push one. → their lines
  in [IDEAS](IDEAS.md)
- ⏳ RUNG 1'S BIRTH PROMPT ARRIVES UTF-8-MANGLED ON WINDOWS,
  crossing the `--cloud` argument. The charter's garbled-prompt
  clause absorbed it, so it cost this flight nothing — but that
  clause protects only what the board already says, and the
  one-line mandate is what a corrupted prompt silently drops. → its
  line in [IDEAS](IDEAS.md)
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

Phase 1 stands on FLIGHT 4 alone — the failure drill: connector
rungs, summon, and the deterministic freeze checkpoint that finally
tests whether a fence stops a live worker.
