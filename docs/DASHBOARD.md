---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-05 · 13:29 UTC by ship's tail · from work PC
Clean floor — flight 4 is welded, phase 1's last item is the summon
test · needs-you 1 · git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. ⚪ **FIRE THE SUMMON TEST** — flight 4's third item under test,
   and the last thing phase 1 owes. It is a PUSH that trips
   `.github/workflows/summon.yml`; the cockpit it births is the v4
   routine box's first live test — that seat seats or reports per
   its charter, HOLDS (auto-land never fires at birth), and retires
   on your "land" via MODE R. Say the word at this desk and I
   compose the one-liner. WHENEVER YOU LIKE — nothing is blocked on
   it. (since 08-04)
   → [the flight-4 log](record/probes/flight-4-freeze.md) ·
   [SETUP §cloud accounts](SETUP.md#once-and-done--cloud-accounts)

   ⚠️ THE LITERAL ONE-LINER STILL HAS NO WRITTEN HOME —
   [SETUP](SETUP.md) and [HOME](HOME.md) carry the recipe, not the
   command. It gets composed at the desk and said so plainly, never
   quoted as if a home existed.

## The baton

CONTROL TOWER — work PC, since 2026-08-05 13:24 UTC (pickup)
([handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
pickup's plain-claim row).
Last flight: LANDED 2026-08-04 21:16 UTC via MANUAL-LAND.

⚠️ **THIS LINE WAS OWED SINCE THE SITTING OPENED AND IS BEING PAID
LATE.** The claim was made at pickup and the board still read
"No live seat" through the whole bench, because
[pickup §4](skills/pickup.md#4--repaint-if-stale) repaints only when
it judges the board stale and this seat judged it fresh on the
strength of the git state matching — which was true of the FLEET and
false of the BATON. A seat that claims the baton has already made
the board stale by claiming it. Filed as an inbox line; this
paragraph is the repair.

## In flight

Nothing flying, and no fleet at ground — flight 4's one lane was
adopted at this desk and welded. The floor is clean.

## Working on

- FLIGHT 4 OF THE TEST PROGRAM — THE FAILURE DRILL, FLOWN, LANDED
  AND WELDED. Of the three things it put under test: the RECOVERY
  LADDER was walked and carried (plus one uncommanded failure it
  does not predict) · the REJECTED-PUSH RULE got its answer, and it
  is a NULL RESULT — the window closed unused because the word
  arrived ~90 seconds late, not because the instrument failed · the
  SUMMON workflow is still UNFLOWN, and is now the only thing
  standing between here and the end of phase 1.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)),
one phase per line:

- PHASE 1 — settle & test: the audit is done, flights 1–4 have
  flown, and flight 4 is welded. ONE ITEM REMAINS: the summon test.
  → its line in Needs you
- PHASE 2 — the vault: chronicle story lanes + a polish pass; opens
  with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

- FLIGHT 4'S FREEZE DRILL — a bench specced to be caught mid-job,
  which held for its full fifteen minutes and produced an honest
  null result; the fence then met the still-live lane six minutes
  later and was refused, recorded and quarantined as a post-window
  artifact. Adopted at this desk for ZERO cap runs through
  [pickup](skills/pickup.md)'s local-adopt door.
  [#303](https://github.com/wsher0901/roam/pull/303)
- FLIGHT 4's COCKPIT SEATED ITSELF and measured the two legs no
  single seat can see alone — 4m00s from the board's `fired` paint
  stamp to the true fire, and 14 seconds from that fire to a usable
  clone. [#306](https://github.com/wsher0901/roam/pull/306)
- TEMPLATE's `complete, awaiting merge` row gains its date slot —
  the vocabulary table stopped contradicting its own checker;
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

**Issues**

- ✓ **THE REJECTED-PUSH RULE HAS ITS ANSWER AFTER FOUR FLIGHTS, AND
  THE ANSWER IS A NULL RESULT.** Flights 1–3 could not test it —
  every fence landed on a bench that had already finished. Flight 4
  built one that was genuinely alive and stopped for fifteen
  minutes; the window still closed unused, because the word arrived
  ~90 seconds late. The instrument worked and the clock beat it. The
  drill is re-flyable as built; only the ordering needs fixing. →
  [the drill's log](record/probes/flight-4-freeze.md)
- ✓ AND THE RULE WAS OBSERVED ANYWAY, TWICE, OUTSIDE THE WINDOW —
  the cockpit's fence push was refused by the lane's commit, and the
  lane's completion push was refused by the cockpit's fence. Both
  seats were live; each learned the other existed BY BEING REFUSED.
  Quarantined as post-window artifacts of the landing at every
  mention, never promoted to the drill's finding. →
  [the drill's log](record/probes/flight-4-freeze.md)
- ⏳ **A REJECTED PUSH IS INVISIBLE TO EVERY SEAT BUT THE ONE
  REFUSED** — it leaves no server-side trace, so the only evidence
  the wake-lock ever fired is what the stopped worker says before it
  dies. Flight 4's finding survives only because its lane wrote a PR
  comment after the cockpit had landed; its final commit died
  unpushed. The lane law says "self-terminates after pushing what
  exists" and never "say what stopped you". This is the flight's
  most doctrinal finding. → its line in [IDEAS](IDEAS.md)
- ⏳ THE BATON LINE WENT UNPAINTED FOR A WHOLE SITTING — pickup §4
  repaints only when it judges the board stale, and a seat that has
  just claimed the baton has already made the board stale by
  claiming it. → its line in [IDEAS](IDEAS.md)
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
- ⏳ A FIFTEEN-MINUTE WINDOW THAT OPENS BEFORE THE COCKPIT IS BORN
  IS NOT FIFTEEN MINUTES WIDE — the lane hit its checkpoint 68
  seconds BEFORE the cockpit was fired, and the cockpit needed four
  more to derive and seat. The lane's half confirms it from the
  other side: every mechanical link held. Likely fix is ordering,
  not duration. → its line in [IDEAS](IDEAS.md)
- ⏳ RUNG 1'S BIRTH PROMPT ARRIVES UTF-8-MANGLED ON WINDOWS,
  crossing the `--cloud` argument. The charter's garbled-prompt
  clause absorbed it, so it cost that flight nothing — but that
  clause protects only what the board already says, and the
  one-line mandate is what a corrupted prompt silently drops. → its
  line in [IDEAS](IDEAS.md)
- ⏳ THE BOARD'S `fired <t>` STAMP CANNOT BE THE FIRE TIME — it is
  painted before the weld that precedes the fire; measured once at
  4m00s. → its line in [IDEAS](IDEAS.md)
- ⏳ THE TWO API PATHS ARE NOT INTERCHANGEABLE, IN EITHER
  DIRECTION — `gh` cannot merge into main from a cloud seat (403,
  session type) though the MCP connector can; and that seat's own
  harness prompt declared `gh` absent while `/usr/bin/gh` answered
  a probe. [HOME's ladder](HOME.md#the-cockpits-api-paths--recovery-ladder)
  says either path carries any API-only act. → its line in
  [IDEAS](IDEAS.md)
- ⏳ GITHUB'S EVENTS FEED IS NOT A COMPLETE PUSH LOG — flight 4's
  checkpoint push has no `PushEvent` while its same-branch
  neighbours do. Corroborating instrument only; git objects are
  primary. → its line in [IDEAS](IDEAS.md)
- ⏳ TWO SEATS TIMING THE SAME WINDOW DERIVE TWO DIFFERENT CLOSES —
  40 seconds apart on flight 4, both correct under the derivation
  law, because each counted from its own event. → its line in
  [IDEAS](IDEAS.md)
- ⏳ THE SELF-SEAT BATON WORDING IS LAW AND FLIGHT 4 MISSED IT —
  the case table fixes the wording and the charter's rule 1 does not
  link the table. → its line in [IDEAS](IDEAS.md)
- ✓ THE DESK TAKEOVER DOOR IS FLOWN, AND NOW FROM BOTH SEATS. Both
  of pickup §6's entry doors have carried real traffic: flight 2
  took the grounded fleet, flight 3 the live cockpit, and the
  superseded cockpit was observed reading its own tombstone and
  self-retiring.
- ✓ THE FLEET PATH IS PROVEN END TO END — flight 2's grounded-fleet
  resume was flown, three benches adopted for zero cap runs, and
  flight 4's single lane was adopted the same way.
  [#278](https://github.com/wsher0901/roam/pull/278) ·
  [#279](https://github.com/wsher0901/roam/pull/279) ·
  [#280](https://github.com/wsher0901/roam/pull/280) ·
  [#303](https://github.com/wsher0901/roam/pull/303)
- ⏳ Flight 2 surfaced ELEVEN new inbox lines, harvested at that
  tail because a lane may not write [IDEAS](IDEAS.md) itself: the
  dispatch-latency window · nothing requiring a PR's comments be
  read · stamps that are checked for shape but never for truth · a
  fleet lane unable to name its own bench · HOME's four further
  table gaps and the coverage gate they argue for · machine-setup's
  two-seat step 2 · and four smaller ones. → their lines in
  [IDEAS](IDEAS.md)
- ⏳ The §Canary word-vs-token match question is DEFERRED by the
  founder — filed, no ruling made. A second §Canary line joined it
  from flight 4: the ack token's middle field is written two
  different ways in the same section. → their lines in
  [IDEAS](IDEAS.md)
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
  the script run directly succeeds — NOT REPRODUCED at the last two
  sittings; the npm wrapper returned a clean count both times. →
  its line in [IDEAS](IDEAS.md)
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
  (PASS on `78facd1`), APPROVED FLIGHT 3, APPROVED FLIGHT 4 — the
  failure drill, with its commanded failures and its file fence —
  and on 2026-08-05 returned **PASS on `be2c49d`** for the drill's
  own bench, the load-bearing approval there because the payload
  section was desk-authored. Its verify-flight-2 reconciliation
  gaps are filed as inbox lines
  ([#293](https://github.com/wsher0901/roam/pull/293)). → next:
  nothing owed.

## Next

The summon test — the last item phase 1 owes. Say the word at this
desk and the one-liner gets composed; the cockpit it births holds
until you say "land".
