---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 19:14 UTC by ship's tail · from work PC
FLIGHT 2 SHIPPED AND PHASE 1 RESCOPED — two flights left to fly ·
needs-you 0 · git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

Nothing. The floor is clean and origin carries main and nothing
else.

## The baton

CONTROL TOWER — work PC, since 2026-08-04 16:27 UTC (pickup)
Last flight: LANDED 2026-08-04 16:02 UTC via MANUAL-LAND — its
three fenced lanes were adopted at this desk and are now welded.

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

Nothing flying. The floor is clean — no lanes, no benches, no open
PRs.

## Working on

- THE TEST PROGRAM — flights 1 and 2 flown and shipped; TWO FLIGHTS
  REMAIN and phase 1 closes on them
  ([D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)).
  Neither is scope yet; both wait as inbox lines until triaged.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4)),
one phase per line:

- PHASE 1 — settle & test: the audit is done and flights 1 and 2
  have shipped. It closes on FLIGHT 3 (desk takeover of a live
  cockpit holding a decision) and FLIGHT 4 (the failure drill —
  connector rungs, summon, and the deterministic freeze
  checkpoint). → their lines in [IDEAS](IDEAS.md)
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
  the audit's ops chat; it carried the external review of all
  twelve benches, and approved THE TEST PROGRAM whose flight 2 has
  now shipped. → next: nothing owed.

## Next

Open flight 3 — the desk takeover of a live cockpit holding a
decision — when you next have a sitting for it; it is the cheaper
of the two remaining flights and the one whose machinery has never
been run at all. Say the word and it gets a spec. Nothing expires
and nothing is urgent.
