---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 19:52 UTC by the cockpit's self-seat · from
the cloud
FLIGHT 3 IS AIRBORNE — 1 lane AT THE GATE, reviewed · needs-you 1 ·
git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **THE MERGE WORD ON
   [#295](https://github.com/wsher0901/roam/pull/295)** — flight
   3's sole lane is complete, green on its pushed head `a9fa374`,
   and REVIEWED by this cockpit as a non-author, so
   no-solo-approval is satisfied and only your word is missing.
   The word goes in the Web ops chat or here; the cockpit performs
   the weld. **BY FLIGHT 3'S OWN DESIGN YOU MAY LEAVE THIS
   UNANSWERED** — the unanswered gate is the experiment, and the
   desk takeover is what it is waiting for. Answering it ends the
   test early; that is your call, not a mistake either way.
   (since 08-04)
   → [the review verdict + the spec](https://github.com/wsher0901/roam/pull/295)
   (both live on the lane's branch until the weld)

## The baton

COCKPIT SUPERSEDED — desk takeover 2026-08-04 · 20:07 UTC · work PC
· https://claude.ai/code/session_01AUaEBaTyuYDYfELjrG85mo
Last flight: LANDED 2026-08-04 16:02 UTC via MANUAL-LAND — flight
2's three fenced lanes were adopted at the desk and welded.

The founder sat down at the work PC while flight 3's cockpit was
LIVE and holding the gate on
[#295](https://github.com/wsher0901/roam/pull/295). Two commanding
seats cannot both hold the baton, so the desk took it and adopted
the decision queue
([pickup §6](skills/pickup.md#the-desk-takeover--a-live-cockpit-holding-decisions)).
This line is write 1 — landed at adopt, so the cockpit can
recognise its own supersession by reading this board and
self-retire by [land](skills/land.md)'s Scenario 2. That
retirement writes NO board; this sitting's repaint replaces this
line with the takeover claim.

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

THE FLIGHT PLAN — flight 3, one lane and one cockpit.

| Who | For | State | Move |
|---|---|---|---|
| cockpit · [session](https://claude.ai/code/session_01AUaEBaTyuYDYfELjrG85mo) | the control tower online for flight 3 | 🟢 live since 19:47 UTC · seated 19:52 | hold the gate, advise, and merge only on your word |
| lane · [template-date-row](https://github.com/wsher0901/roam/pull/295) | TEMPLATE's `complete, awaiting merge` row gains its `<date>` slot | 🟢 complete · green on `a9fa374` · reviewed · AT THE GATE | nothing — its work is done and it expects no merge |

The lane is finished and the gate is open. One word is owed, and
flight 3's design says you may decline to give it.

FLIGHT CONTEXT — flight 3 is a TEST FLIGHT and its cargo is real.
WHAT IS UNDER TEST is
[pickup §6](skills/pickup.md#6--fleet-resume-on-the-founders-answer)'s
OTHER entry door: THE DESK TAKEOVER of a cockpit that is LIVE and
holding a gate, designed at
[D-061](record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
scenario 2 and never once flown. Flight 2 could not reach it — its
fleet was already at ground when the founder sat down, which is the
grounded-fleet case, not this one.

THE COCKPIT'S FIRST THREE DUTIES ARE DONE: it seated itself here,
the lane finished, and it reviewed that lane as a NON-AUTHOR (the
payload commit is the lane's; this cockpit wrote none of it). The
gate is now open and carried to the founder's phone with its
advice. IT NEVER MERGES ON ITS OWN ADVICE. If a desk takes this
board while the cockpit still holds that gate, the cockpit is
superseded and self-retires by [land](skills/land.md)'s Scenario 2
— reading its own supersession off this board is the mechanism, and
observing that is the flight. THE FLIGHT IS NOW PARKED ON EXACTLY
THAT: everything before the takeover has happened.

THE WHOLE ROUTE, MEASURED — label 19:39:53, canary 19:41:26, ack
19:42:37, cargo pushed 19:47:07, CI green 19:47:55, reviewed 19:51.
93 seconds to claim, 71 more to licence, and 4m30s of licensed work
on doc-sized cargo. Flight 2 measured the claim leg at ~27 minutes
once and ~2 minutes the next, so this is a third data point at the
fast end; the spread remains the open question, not the mechanism.

## Working on

- FLIGHT 3 OF THE TEST PROGRAM — THE DESK TAKEOVER, lifting off
  2026-08-04. Founder-approved in the Web ops chat, cashing the
  flight-3 line
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
  opened. WHAT IS UNDER TEST is
  [pickup §6](skills/pickup.md#6--fleet-resume-on-the-founders-answer)'s
  OTHER entry door — a desk taking the baton from a cockpit that is
  LIVE and holding a gate, designed at
  [D-061](record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  scenario 2 and never once flown. Flight 2 could not reach it
  because its fleet was already at ground when the founder sat
  down. The cargo is real but deliberately small, so that any
  failure is the machinery's.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)),
one phase per line:

- PHASE 1 — settle & test: the audit is done and flights 1 and 2
  have shipped. FLIGHT 3 IS FLYING NOW; what then remains is
  FLIGHT 4 (the failure drill — connector rungs, summon, and the
  deterministic freeze checkpoint). → its line in [IDEAS](IDEAS.md)
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

- ⏳ THE MID-WORK WINDOW OPENED FOR THE FIRST TIME, AND IT IS UNDER
  TWO MINUTES WIDE. Flight 2 concluded that the window closes
  before the cockpit opens BY CONSTRUCTION; flight 3 keeps the
  conclusion and retires the "by construction" half. Liftoff welds
  the board BEFORE it fires, that weld merged 19:45:20 UTC
  (`aca3e7f`), and the lane's cargo landed 19:47:07 — so a fired
  cockpit and an unfinished lane overlapped by AT MOST 1m47s. The
  overlap is real, so the ordering is not structural; it is merely
  fast. It is still far too narrow for a founder to answer a
  phone, so
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)'s
  ruling stands untouched — the freeze test needs a bench that
  HOLDS at a checkpoint, not a faster cockpit. This cockpit's own
  first derivation was 19:47:16, nine seconds after the cargo, so
  it cannot testify to the window from the inside; the two commit
  stamps are what establish it. → its line in [IDEAS](IDEAS.md)
- ⏳ THE BOARD'S `fired <t>` STAMP CANNOT BE THE FIRE TIME. This
  board was painted 19:43 UTC and its baton line read
  `COCKPIT — fired 2026-08-04 19:43 UTC`, but liftoff welds the
  board before it fires and that weld merged at 19:45:20 — so the
  stamp named a time at least 2m20s BEFORE the event it claims to
  record. Harmless in effect and wrong by construction: it is a
  time written at paint time for an act that has not happened yet,
  which the derivation law forbids. Every reader of a flight's
  latency has been measuring from it. → its line in
  [IDEAS](IDEAS.md)
- ✓ THE MID-WORK FREEZE TEST IS UNRUNNABLE ON DOC-SIZED CARGO —
  measured twice (A and B finished before the cockpit was even
  fired; lane C ran 4m48s against a window needing a human to
  answer a phone), and RULED rather than retried: it becomes a
  deterministic drill, a bench specced to hold at a checkpoint
  until acked, folded into flight 4. The failure was structural,
  so a fourth attempt of the same shape would have failed the same
  way. →
  [D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)
- ⏳ THE WAKE-LOCK'S REJECTED-PUSH RULE IS STILL UNOBSERVED — does a
  fence actually STOP a live worker. Three flights have failed to
  see it because every fence landed on a finished bench. It is the
  single largest untested claim left in the machinery, and flight
  4's checkpoint drill is now the thing that tests it. → its line
  in [IDEAS](IDEAS.md)
- ✓ THE FLEET PATH IS PROVEN END TO END. Flight 2's last untested
  link — the grounded-fleet resume at pickup — was flown at this
  sitting: the two-fact trigger fired, the ask rendered, the
  founder answered `local` three times, and all three benches were
  adopted for ZERO cap runs and welded. Every link of the path has
  now carried real cargo.
  [#278](https://github.com/wsher0901/roam/pull/278) ·
  [#279](https://github.com/wsher0901/roam/pull/279) ·
  [#280](https://github.com/wsher0901/roam/pull/280)
- ✓ THE PER-SHA GATE CHECK, run at the founder's instruction before
  the merges: for each bench the reviewed head was diffed to the
  current head, and the delta was exactly three classes — the fence
  Status, the desk's adoption bookkeeping, and the main sync — with
  every payload and spec blob byte-identical to what the cockpit
  reviewed, and main itself having moved only DASHBOARD in between.
  The review verdicts covered what actually merged.
- ⏳ Flight 2 surfaced ELEVEN new inbox lines, harvested at this
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

ONE WORD, AND YOU MAY WITHHOLD IT. The gate on
[#295](https://github.com/wsher0901/roam/pull/295) is open,
reviewed, and green; the merge word welds it and the cockpit does
the rest. Withholding it is the flight-3 experiment, and the desk
takeover is what the withheld gate is waiting for — so the honest
next move is either your word here, or your sitting down at a desk
and running [pickup](skills/pickup.md) while this cockpit is still
live. Nothing else is owed, and a flight going quiet is not a
flight to check on.
