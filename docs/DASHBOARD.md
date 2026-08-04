---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 20:59 UTC by cockpit self-seat · from cloud
FLIGHT 4 IS THE FLIGHT PLAN — 1 lane at the checkpoint and HOLDING,
cockpit seated · needs-you 1 (OWED NOW, and it expires) · git
outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **"GROUND THE FLEET" — THE WINDOW IS OPEN AND IT CLOSES
   21:08:52 UTC.** The lane's checkpoint commit landed
   (`d5347ca`, pushed 20:53:52 UTC) and the lane is now alive and
   stopped, polling origin for up to 15 minutes. Those three words,
   in the cockpit's thread, fire [land](skills/land.md) MODE P,
   whose fence is the whole experiment. THE WINDOW IS 15 MINUTES
   WIDE AND IT IS THE FIRST ONE EVER BUILT TO BE ANSWERABLE —
   flights 1–3 measured windows under two minutes, too narrow for a
   human. Saying nothing is also a result: the lane writes THE
   WINDOW CLOSED UNUSED and completes honestly. (since 08-04)
   → [the bench](https://github.com/wsher0901/roam/pull/303) ·
   [what a fence is](skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)

## The baton

COCKPIT — SEATED 2026-08-04 20:59 UTC ·
[flight 4's cockpit](https://claude.ai/code/session_01Umdy6ztSBST1aXNPnQ7And)
Last flight: LANDED 2026-08-04 20:07 UTC via DESK TAKEOVER — flight
3's cockpit was superseded at a desk, retired itself, and its bench
was welded from the ground.

⚠️ **THE PAINT-TO-BIRTH GAP IS MEASURED: AT LEAST 4m14s.** The
board is painted and WELDED BEFORE the fire — that is the ritual's
order — so the `fired 20:51 UTC` stamp this seat replaced was
necessarily earlier than the event it named, and flight 4 was the
chance to measure by how much. THE ONE THING THIS SEAT CAN OBSERVE
ABOUT ITS OWN BIRTH is its clone: `.git/config` was written
**20:55:14 UTC**. Against the 20:51 paint stamp that is a floor of
4m14s. The fire itself — the API call that created this session —
is NOT OBSERVABLE FROM THIS SEAT, so the true gap is that floor
plus however long the clone took to start. The finding stands: a
`fired <t>` stamp is a paint time, never a fire time.

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

THE FLIGHT PLAN — flight 4, one lane and one cockpit.

| Who | For | State | Move |
|---|---|---|---|
| lane · [flight-4-freeze](https://github.com/wsher0901/roam/pull/303) | the drill's own log — and a HOLD at a checkpoint, so a fence meets a live worker | 🟢 AT THE CHECKPOINT, HOLDING · `d5347ca` pushed 20:53:52 · window closes 21:08:52 | hold, then exit on a plain push attempt — rejection or THE WINDOW CLOSED UNUSED |
| [cockpit](https://claude.ai/code/session_01Umdy6ztSBST1aXNPnQ7And) · seated 20:59 UTC | flight 4's control tower | 🟢 seated · duty A WALKED, duty B pushed | hold for "ground the fleet", then [land](skills/land.md) MODE P |

FLIGHT CONTEXT — flight 4 is THE FAILURE DRILL, and every failure
in it is COMMANDED rather than simulated. Nothing is special-cased;
the machinery meets a real fence, not a rehearsed one. Three things
are under test:

1. **THE REJECTED-PUSH RULE** — does a fence actually STOP a live
   worker. Unobserved across three flights because every fence
   landed on a finished bench. The lane is specced to HOLD so this
   fence has someone to meet.
2. **THE CONNECTOR RECOVERY LADDER** — walked one rung down, on
   command, by a cockpit that is otherwise healthy.
3. **THE SUMMON WORKFLOW** — fired after the weld by the desk; its
   routine-born cockpit is the v4 charter box's FIRST LIVE TEST.

**THE COCKPIT'S TWO DRILL DUTIES.** These are the cockpit's
mandate; the birth prompt is only a pointer here, so this board is
where they are law.

- **A · THE LADDER WALK.** BEFORE acking the lane's checkpoint
  push, perform ONE command read with **rung 1 treated as dead** —
  probe, then use the `gh` fallback per
  [HOME's recovery ladder](HOME.md#the-cockpits-api-paths--recovery-ladder)
  — and report the climb (rung tried · result) in the SAME turn.
  COMMANDED DEGRADATION ONLY: revoke nothing, break nothing, and
  treat rung 1 as dead only for that one read.
  ✅ **WALKED 20:57:10–20:57:11 UTC, AND THE gh RUNG CARRIED IT.**
  R1 skipped by command (rung 1 held dead, never called, nothing
  revoked) → R2(b) probed with `gh api user` → `wsher0901`, then
  the command read `gh api repos/wsher0901/roam/pulls/303` returned
  #303 open, head `d5347ca`. One second, no retry, command never
  paused — the ladder's own promise (a single connector flap does
  not demote a cockpit) is now observed rather than argued. ONE
  CONTRADICTION WORTH FILING: this cloud seat's harness prompt
  states flatly that `gh` is unavailable and only the MCP connector
  exists; `/usr/bin/gh` 2.45.0 was present and authenticated
  through the proxy. Had the cockpit believed its prompt over its
  probe, R2(b) would have been skipped and the flight would have
  read a false demotion.
- **B · THE WINDOW CALL.** The moment the lane's checkpoint commit
  lands, push the founder ONE message, exactly: *"THE WINDOW IS
  OPEN — the lane holds until `<t+15m UTC>`. Say 'ground the
  fleet'."* On that word, run [land](skills/land.md) MODE P exactly
  as written. THE LANDING REPORT MUST STATE, AS OBSERVED OR AS
  NOT-OBSERVED, WHETHER THE FENCE MET A LIVE WORKER — that sentence
  is the flight's entire product, and an inferred answer is worth
  less than an honest "not observable from this seat".

**AFTER THE LANDING, THE DESK'S ONE EXTRA DUTY** — recorded here so
it survives this flight's landing and the next pickup. Once the
desk has resumed, welded the bench, and closed the bench's gate, it
hands the founder the summon one-liner (the push that fires
`.github/workflows/summon.yml`) plus one sentence on what to
expect. The routine-born cockpit that arrives is PART OF THE DRILL:
it seats or reports per its charter, HOLDS — auto-land never fires
at birth — and retires on the founder's "land" via MODE R. Its
birth is the v4 routine box's first live test, and the desk notes
that in the harvest.

⚠️ **THE LITERAL ONE-LINER HAS NO WRITTEN HOME.** SETUP and HOME
carry the RECIPE — "push ONE empty commit to the reserved branch
`ops/summon`" — and the workflow confirms the trigger, but no file
carries a command a founder can paste. The desk must compose it
from the recipe and say so plainly rather than pretending to quote
one. Filed as an inbox line at this liftoff.

FLIGHT 4, MEASURED SO FAR — ready-flip 20:47:43, label 20:47:44,
canary 20:49:22, ack 20:50:14. 98 seconds to claim, 52 more to
licence. Flight 3's legs were 93 and 71; flight 2's claim leg ran
~27 minutes once and ~2 the next. This is a fourth point at the
fast end, and the spread — not the mechanism — stays the open
question.

## Working on

- FLIGHT 4 OF THE TEST PROGRAM — THE FAILURE DRILL, lifting off
  2026-08-04. Founder-approved in the Web ops chat, cashing
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)'s
  flight-4 line and the freeze-drill inbox line. THREE THINGS ARE
  UNDER TEST, and all three are failures COMMANDED rather than
  simulated: the wake-lock's REJECTED-PUSH RULE, unobserved across
  three flights because every fence has landed on a finished bench
  — this bench is specced to HOLD at a checkpoint so the fence
  meets a live worker · the connector RECOVERY LADDER, walked one
  rung down by a cockpit told to treat rung 1 as dead · and the
  SUMMON workflow, fired after the weld, whose routine-born cockpit
  is the v4 charter box's first live test. The cargo is real and
  deliberately small: the drill's own log.
- FLIGHT 3 — FLOWN, LANDED AND WELDED 2026-08-04. Nothing remains
  of it.

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
- ⏳ THE WAKE-LOCK'S REJECTED-PUSH RULE IS UNDER TEST RIGHT NOW —
  does a fence actually STOP a live worker. Three flights missed it
  because every fence landed on a finished bench; flight 4's bench
  is specced to HOLD at a checkpoint precisely so the fence has a
  live worker to meet. → its line in [IDEAS](IDEAS.md)
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
  (PASS on `78facd1`), APPROVED FLIGHT 3, and on 2026-08-04
  APPROVED FLIGHT 4 — the failure drill, with its commanded
  failures and its file fence. Its verify-flight-2 reconciliation
  gaps are filed as inbox lines
  ([#293](https://github.com/wsher0901/roam/pull/293)). → next:
  nothing owed.

## Next

THE WINDOW IS OPEN UNTIL 21:08:52 UTC. Say "ground the fleet" in
the cockpit's thread — or say nothing and let the window close
unused, which is also a result.
