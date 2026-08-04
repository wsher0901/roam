---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-08-04 · 16:50 UTC by ship's tail · from work PC
FLIGHT 2 IS SHIPPED — all three lanes welded, floor clean ·
needs-you 2 · git outranks this board. How to read it →
[HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **RESCHEDULE THE MID-WORK FREEZE TEST, or retire it.** It is
   now unproven for the THIRD time and the reason is measured, not
   guessed: lane C ran 4m48s from licence to done, and the founder's
   word arrived 17 minutes after that. Every fence landed on a
   finished bench, so the wake-lock's rejected-push rule — does a
   fence actually STOP a live worker — remains the one designed
   behaviour this workshop has never observed. It needs a lane whose
   cargo runs for tens of minutes, or a bench specced to HOLD at a
   checkpoint until acked. Your call whether that earns its own
   flight. (since 08-04)
   → [parallel-lanes §Wake-lock](skills/parallel-lanes.md#wake-lock--parking)
   · [land MODE P](skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
2. ⚪ **LOOK AT ONE STRAY BRANCH, THEN IT CAN GO.**
   `chore/cockpit-seat-repaint` carries one unique commit
   (`b8a907a`), the twin cockpit's losing self-seat board draft
   behind the closed
   [#285](https://github.com/wsher0901/roam/pull/285). The
   resurrection rule forbids deleting a branch with unique commits,
   so it waits here. Its content is a superseded board repaint and
   nothing else. (since 08-04)

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
because the next double fire will be read against it.

## In flight

Nothing flying. The floor is clean — no lanes, no benches, no open
PRs.

## Working on

- FLIGHT 2 OF THE TEST PROGRAM — FLOWN, GROUNDED AND SHIPPED
  2026-08-04. The fleet path was exercised end to end for the first
  time and its cargo is welded; one property it went to test is
  still unproven, and Needs-you 1 asks whether that earns another
  flight.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order)),
one phase per line:

- PHASE 1 — settle & test: the audit is done; flights 1 and 2 have
  both shipped. What remains of this phase is the single ruling in
  Needs-you 1.
- PHASE 2 — the vault: chronicle story lanes + a polish pass;
  opens with your scope ruling (all 66, or the load-bearing dozen).
- PHASE 3 — Roam: T3–T6 relaunched from scratch, plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed**

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

- 🔴 THE MID-WORK FREEZE TEST IS UNRUNNABLE ON DOC-SIZED CARGO, now
  measured twice. Attempt 1: A and B finished at 15:04–15:05, before
  the cockpit was fired at 15:11 — the fire comes after the lanes by
  construction. Attempt 2, with the respawned lane C and a cockpit
  already seated and watching: acked 15:38:20, complete 15:43:08 —
  FOUR MINUTES FORTY-EIGHT SECONDS, of which the cockpit spent about
  two on its ack and its push. The failure is not promptness and
  cannot be fixed by more of it. → Needs-you 1
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

Rule Needs-you 1 — whether the mid-work freeze test earns its own
flight, on a lane long enough to actually be interrupted, or gets
retired as unrunnable. That is the last thing standing between
phase 1 and phase 2's scope question. Nothing expires and nothing
is urgent.
