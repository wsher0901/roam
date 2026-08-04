---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 21:16 UTC by land MODE P · from cloud
FLIGHT 4 IS GROUNDED — 1 lane frozen and findable · needs-you 0 ·
git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

Nothing. The fleet is frozen and findable; at any desk,
[pickup](skills/pickup.md) asks and "continue" redeploys it.

## The baton

No live seat — LANDED 2026-08-04 21:16 UTC via MANUAL-LAND · 1 lane
frozen → grounded for local pickup 2026-08-04
([handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
MODE P row). The flight ran 20:55:00 → 21:16 UTC; its cockpit was
`session_01Umdy6ztSBST1aXNPnQ7And` and it is done.

⚠️ **THE `fired` STAMP IS EARLY, AND THE GAP IS NOW MEASURED AT
4m00s.** The board is painted and WELDED BEFORE the fire — the
ritual's order — so the stamp necessarily precedes the event it
names. Stamp painted 20:51:00; TRUE FIRE 20:55:00 UTC, rung 1,
exit 0, returned 20:55:08. The fire is BLIND, so that time exists
nowhere on origin unless the firing seat writes it down — this
line is the firing seat writing it down. Every flight's measured
latency until now has been read off the early stamp. Filed inbox
line; this is its first measurement.

✅ **AND THE COCKPIT'S OWN HALF CLOSES THE LEG: FIRE → USABLE SEAT
IS 14 SECONDS.** The firing seat cannot see this and the fired seat
cannot see the fire, so the leg only exists when both halves are
written down. This seat's earliest observable moment is its clone:
`.git/config` written **20:55:14 UTC**, against the desk's directly
observed fire at 20:55:00. THE METHOD MATTERS MORE THAN THE NUMBER
— this seat first computed 4m14s against the PAINT stamp and called
it a floor for the paint-to-fire gap, which is backwards: a clone
timestamp bounds that gap from ABOVE, never below. The desk's
direct observation corrected it. A seat measuring its own birth can
only ever bound the fire, and a bound pointed the wrong way reads
exactly like a measurement.

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

Nothing flying — FLEET AT GROUND. Flight 4 is landed; one lane is
frozen at its fence and resumes with one word at any desk.

| id | purpose | progress | exact next step | state |
|---|---|---|---|---|
| [flight-4-freeze](https://github.com/wsher0901/roam/pull/303) | the drill's own log — a bench built to hold at a checkpoint so a fence meets a live worker | probe carries BORN · THE CHECKPOINT · THE WINDOW CLOSED UNUSED; Done-means 1, 2, 3, 5 hold; CI green on `d5347ca` | write the probe's last section THE EXIT PUSH from the facts in the fence (that push was ACCEPTED 21:11:37Z), then ship | `held` |

**FLIGHT 4'S ANSWER, AND IT IS A NULL RESULT HONESTLY WON.** THE
FENCE DID NOT MEET A LIVE WORKER. The window ran 20:53:54Z →
21:09:32Z and closed unused: origin's head never moved while the
lane held, the lane recorded that in `40685e4`, and the fence
landed at 21:14 — about five minutes after the close, because the
founder's word reached the cockpit at 21:11. FOR THE FOURTH FLIGHT
THE REJECTED-PUSH RULE IS UNOBSERVED, but for a NEW reason, and the
new reason is the finding: flights 1–3 missed it because the bench
had already FINISHED; flight 4 built a bench that was genuinely
alive and stopped for a full fifteen minutes, and missed it because
THE WORD ARRIVED LATE. The instrument worked. The timing did not.

**WHY THE TIMING DID NOT, stated plainly because it is fixable.**
The lane hit its checkpoint at 20:53:52 and the cockpit was not
fired until 20:55:00 — the window was already running before the
tower existed, and the tower then spent four minutes deriving
state and seating itself, both mandatory. A fifteen-minute window
that starts before its only operator is born is not fifteen
minutes wide in practice. Filed as an inbox line; the likely fix
is ORDERING, not duration.

**ONE THING THIS SEAT CANNOT ANSWER, and it is left open rather
than guessed.** The fence landed while the lane's memory still read
a live Status and its probe's last section was an unwritten stub,
so the lane MAY have been alive to meet it — in which case a
non-fast-forward rejection happened at 21:14 and only that branch
can attest it. THAT WOULD NOT BE THE DRILL'S ANSWER. It would be a
post-window artifact of the landing ritual, and the fence says so
in its own words so no later reader can promote it.

**THE COCKPIT'S OWN PUSH WAS REJECTED, WHICH IS HOW IT LEARNED
ANYTHING.** Its first fence attempt at 21:12:22 came back
non-fast-forward, because the lane's null-result commit had landed
45 seconds earlier — after the cockpit's own fleet snapshot had
read the branch as unmoved. The rejected-push mechanism was
therefore observed working perfectly this flight, just pointing
the other way: lane fences cockpit.

**THE LADDER WALK — drill duty A, WALKED AND IT CARRIED.** Rung 1
held dead by command, `gh api user` probed, and the command read
`gh api repos/wsher0901/roam/pulls/303` returned in one second. A
commanded degradation cost the flight nothing. But the walk also
turned up an UNCOMMANDED failure the ladder does not predict: `gh`
could not merge into main at all (`403 — not permitted for this
session type`) while the MCP connector merged the same PR the same
minute. The paths are not interchangeable in either direction —
filed as an inbox line.

**AFTER THE LANDING, THE DESK'S ONE EXTRA DUTY** — carried forward
from flight 4's plan so it survives this landing. Once the desk has
resumed, welded the bench, and closed its gate, it hands the
founder the summon one-liner (the push that fires
`.github/workflows/summon.yml`) plus one sentence on what to
expect. The routine-born cockpit that arrives is PART OF THE DRILL:
it seats or reports per its charter, HOLDS — auto-land never fires
at birth — and retires on the founder's "land" via MODE R. Its
birth is the v4 routine box's first live test. THE LITERAL
ONE-LINER STILL HAS NO WRITTEN HOME — SETUP and HOME carry only the
recipe, so the desk composes it and says so plainly rather than
pretending to quote one.

FLIGHT 4, MEASURED END TO END — ready-flip 20:47:43, label
20:47:44, canary 20:49:22, ack 20:50:14, checkpoint 20:53:52,
TRUE FIRE 20:55:00, cockpit clone usable 20:55:14, seated 21:00,
window closed 21:09:32, the word 21:11, fence 21:14:04, landed
21:16. 98 seconds to claim, 52 more to licence, **14 seconds from
fire to a usable seat**, and 4m00s between the board's `fired`
paint stamp and the true fire — the first flight to measure either.

## Working on

- FLIGHT 4 OF THE TEST PROGRAM — THE FAILURE DRILL, FLOWN AND
  LANDED 2026-08-04. Its bench is frozen at a fence, one section
  from complete, and awaits a desk. Of the three things under test:
  the RECOVERY LADDER was walked and carried (plus one uncommanded
  failure it does not predict) · the REJECTED-PUSH RULE stayed
  unobserved for a new and fixable reason — the word arrived after
  the window closed · the SUMMON workflow is UNFLOWN, still owed
  after the weld.
- FLIGHT 3 — FLOWN, LANDED AND WELDED 2026-08-04. Nothing remains
  of it.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)),
one phase per line:

- PHASE 1 — settle & test: the audit is done and flights 1–4 have
  flown. What remains of flight 4 is the WELD (its bench is frozen,
  one section from complete) and the SUMMON test, still unflown.
  → its line in [IDEAS](IDEAS.md)
- PHASE 2 — the vault: chronicle story lanes + a polish pass;
  opens with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

- FLIGHT 4's COCKPIT SEATED ITSELF and measured the two legs no
  single seat can see alone — 4m00s from the board's `fired` paint
  stamp to the true fire, and 14 seconds from that fire to a usable
  clone. [#306](https://github.com/wsher0901/roam/pull/306)
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
- ✓ THE REJECTED-PUSH RULE IS STILL UNOBSERVED AFTER FOUR
  FLIGHTS — BUT THE REASON CHANGED, AND THAT IS THE RESULT.
  Flights 1–3 could not test it because every fence landed on a
  FINISHED bench. Flight 4 fixed exactly that: the bench was alive
  and stopped for a full fifteen minutes. The window still closed
  unused, because the founder's word arrived about two minutes
  late — the instrument worked and the clock beat it. The drill is
  reusable as built; only the ordering needs fixing. → the flight
  context above, and
  [the drill's log](https://github.com/wsher0901/roam/pull/303)
- ⏳ A FIFTEEN-MINUTE WINDOW THAT OPENS BEFORE THE COCKPIT IS BORN
  IS NOT FIFTEEN MINUTES WIDE — the lane hit its checkpoint 68
  seconds BEFORE the cockpit was fired, and the cockpit needed four
  more to derive and seat. Likely fix is ordering, not duration.
  → its line in [IDEAS](IDEAS.md)
- ⏳ THE TWO API PATHS ARE NOT INTERCHANGEABLE, IN EITHER
  DIRECTION — `gh` cannot merge into main from a cloud seat (403,
  session type) though the MCP connector can; and this seat's own
  harness prompt declared `gh` absent while `/usr/bin/gh` answered
  a probe. [HOME's ladder](HOME.md#the-cockpits-api-paths--recovery-ladder)
  says either path carries any API-only act. → its line in
  [IDEAS](IDEAS.md)
- ⏳ THE SELF-SEAT BATON WORDING IS LAW AND THIS FLIGHT MISSED IT —
  the case table fixes `COCKPIT — live since <t> (liftoff) · <url>`
  and the cockpit painted `SEATED` instead; the charter's rule 1
  does not link the table. Already overwritten by this landing.
  → its line in [IDEAS](IDEAS.md)
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

At any desk, [pickup](skills/pickup.md) asks and "continue"
redeploys the fleet: resume flight-4-freeze, write its last section
from the fence, weld it, then fire the summon test.
