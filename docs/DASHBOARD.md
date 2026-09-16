---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-09-16 · 15:06 UTC by ship's weld · from work PC
THE PRODUCT-FIRST WINDOW IS OPEN — no workshop bench until V1.S1 closes
T3–T6 ARE DOWN — all four merged · needs-you 3 · git outranks this board.
How to read it → [HOME §Reading the board](HOME.md#reading-the-board)

## Needs you

1. 🟡 **THE HOME PC HAS NO DESIGN STACK** — the work PC ran it
   2026-08-11; the second seat is untouched, and nothing in git can
   say so, because the two files it installs live outside the repo.
   Run machine-setup step 12 at the next home-PC sitting — it
   carries the master text of both files, so the seats cannot drift.
   **That step now also carries the `--caps devtools` flag the
   motion-capture duty depends on**, so a home PC set up before
   2026-08-12 would have the agent and not its eyes. (since 08-11)
   → [machine-setup step 12](skills/machine-setup.md#one-time-per-machine)
   · [D-084](record/DECISIONS.md#d-084--the-global-design-stack)

2. 🟡 **THE HOME PC NEEDS THE WORK PC'S USER-SCOPE PERMISSIONS** —
   carry the work PC's user-scope permissions block
   (`~/.claude/settings.json`) by paste when you next sit there.
   **There is no master and there should not be one**: the tracked
   file is the rail inside the repo and it travels with the clone
   ([#362](https://github.com/wsher0901/roam/pull/362)), while user
   scope is personal by design — it applies in every directory, not
   just this one, so it is not the repo's to own. Ruled by the Web
   review, 2026-09-11. (since 09-10)
   → [machine-setup](skills/machine-setup.md#one-time-per-machine)

3. 🟡 **TRADEMARK CHECK — "ROAM AROUND" IS A SHIPPING AI ITINERARY
   PRODUCT.** Clear the name before
   [V1.S8](ROADMAP.md#v1s8--demo-polish)'s public URL. It cannot be
   settled inside the repo and it gets more expensive the later it
   moves, because the name is already in the docs, the repo and the
   deploy. **Before V1.S8**, not now. (since 09-15)
   → [V1.S8.T3](ROADMAP.md#v1s8--demo-polish) (the public URL)

## The baton

CONTROL TOWER — work PC, since 2026-09-10 14:12 UTC (pickup)
([handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
pickup's plain-claim row).
Last flight: LANDED 2026-08-04 21:16 UTC via MANUAL-LAND.

## In flight

**Nothing flying.** The four V1.S1 T3–T6 benches were
respawned on their existing branches 2026-09-15, run as an agent team
with the founder at the desk, reviewed PASS in one batch on the Web
surface, and welded serially: [#358](https://github.com/wsher0901/roam/pull/358) · [#360](https://github.com/wsher0901/roam/pull/360) · [#361](https://github.com/wsher0901/roam/pull/361) · [#359](https://github.com/wsher0901/roam/pull/359).

## Working on

**T3–T6 ARE DONE.** Thirty-nine source slots vetted across four
families, every grade behind a run.
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
now needs only **T8** (cost sources) and then **T7**, which waits on
it — so T8 is the next thing to start, and T7 consolidates five
`SOURCES-<family>.md` files into one. **Closing T7 closes the
product-first window**, which also releases IDEAS §Parked back to
§Open and ends synthesis deferral.

**WHAT THE TEST FLIGHT PROVED** (2026-09-11, four benches, all
merged). The canary handshake was the thing under test, after
2026-09-10 dispatched four lanes and acked none: all three lanes
acked in **4.0s, 2.6s and 2.6s**, because the acks were PRE-STAGED
as a watcher armed BEFORE dispatch. The window is per-lane; ack
capacity is shared. Of 25 critic findings across the four benches,
**eight were in a spec the control tower wrote** rather than in any
lane's work. Full account:
[the ledger](record/history/README.md#the-ledger).

**THE PRODUCT-FIRST WINDOW** stays open.
[D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
closes the workshop to new benches until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes, and expires on its own checkboxes. Product welds defer
synthesis meanwhile (ruling 2c); one catch-up bench walks every
deferred weld at V1.S1 close.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4),
phase 2's by
[D-081](record/DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)),
one phase per line:

- PHASE 1 — settle & test: **CLOSED 2026-08-05.**
- PHASE 2 — the vault: **CLOSED 2026-08-07.**
- PHASE 3 — Roam: **OPEN, and the only thing running.**
  [V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 and T8, then T7; plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed** — the last five; the full chronology is
[the ledger](record/history/README.md#the-ledger).

- **SIXTEEN SLOTS, AND A LICENCE READ THAT CHANGED THE ANSWER** —
  the largest bench: FE-01..16 each claimed once, twenty
  retrieval-policy rows, every grade behind a run. Maps grounding
  came back REJECTED for the asset layer and adopted for
  deep-linking only, on SST §10.3.1 quoted verbatim, with
  `place_id` the one survivor. Routing graded **A on Valhalla,
  not OSRM** — the public demo returns the car profile for every
  mode, reproduced by review. Nine critic findings, all its own;
  the substantive one downgraded nine licence claims the bench
  had never actually read.
  [#359](https://github.com/wsher0901/roam/pull/359)
- **TREND STOPS BEING AN ASSERTION AND BECOMES A LICENCE QUESTION**
  — eight slots, twelve retrieval-policy rows, and the trend
  proxies priced against their own terms:
  [D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 9 made F-CC-07 computed, so the founder ruled
  `youtube: defer` (key at V1.S7.T3) and `reddit: drop` (terms
  revocable without notice that compel deleting derived models).
  Venue-busyness graded C on a spike that returned ABSENCE, and
  said so. The holidays B grade rested on a cross-check the bench
  had described and never run — running it also showed the
  intended test was the wrong test.
  [#361](https://github.com/wsher0901/roam/pull/361)
- **THE MOST DATA-GATED FAMILY, GRADED AT WHAT IT CAN ACTUALLY DO**
  — eight slots behind eight live runs, and the file opens with
  what the family CANNOT do so the limits are met before the
  grades. TT-02/TT-03 stay labeled C and C/D: every schedule API
  401'd and the one free route dataset still flies Air Berlin.
  The founder ruled `no for V1` on a paid feed —
  [D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)
  ruling 8's flight-quote source returns schedule and price
  together, so T8 decides it. The critic round caught an absence read as a case:
  "Tokyo has ZERO GTFS feeds" when Tokyo has two.
  [#360](https://github.com/wsher0901/roam/pull/360)
- **SKY & SEA HAS ITS SOURCES, AND ITS ONE HONEST HOLE** — seven
  slots behind seven live spike runs, SS-01..10 each claimed once.
  Sun and moon computed and graded **A** (worst delta vs USNO three
  minutes), tides **B** on NOAA, aurora **A** on SWPC — and
  night-sky-darkness **unserved**, its projected grade marked
  unspiked rather than claimed. The critic round's best finding was
  the lane's own spike refuting its own prose about NOAA coverage.
  [#358](https://github.com/wsher0901/roam/pull/358)
- **THE SEPTEMBER RE-TAILORING** —
  [D-088](record/DECISIONS.md#d-088--product-the-september-re-tailoring--retrieval-the-optimizer-cost-trend-state)'s
  eighteen rulings re-cut the June definitions against what a model
  can now do: the ladder's rung 5 splits into RETRIEVED-WITH-
  PROVENANCE (5a, graded B or C by domain, and it enters Judge) and
  REMEMBERED (5b, grade D); cost becomes a sixth check family inside
  V1; the optimizer is named with OPEN-10 holding its solver class;
  the brain goes stateless over a versioned state store; and the
  receipt becomes the demo. V1 35 → 39 tasks, FACTS 54 → 59 facts.
  The critic caught the one that would have gutted it — §11's
  boundary clause still said "rung 5" while the paragraph beside it
  declared the boundary unchanged.
  [#367](https://github.com/wsher0901/roam/pull/367)
**Issues** — none with a home nowhere else.

Every line this section used to carry now lives at its own home —
the inbox, a probe record, a story, or the ledger — and a second
copy here is what the routing law forbids
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 4). The one item that had NO home, the summon fire's timing
table, gained one before it moved:
[record/probes/summon-fire.md](record/probes/summon-fire.md).

## Where we are (Roam)

V1 — The demo · 9/39 █████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 6/8 ██████░░
S2 · Skeleton & design · 3/5 ███░░
S3–S8 · queued in order · 0/26

T3–T6 ticked four boxes in four welds, 5/39 → 9/39. S1 is 6/8:
T8 and T7 remain, in that order.

## Web + Design

- (Web) "GitHub workflow protocol and web instructions setup" — the
  ops chat. It ran the full-pass validation behind
  [#362](https://github.com/wsher0901/roam/pull/362), the BATCHED
  REVIEW of the test flight's four PRs, and then
  [#367](https://github.com/wsher0901/roam/pull/367) — PASS on the
  work, two `BLOCKED:` answers (Q1 FREEZE, Q2 NARROW), then PASS
  re-issued per sha on the repaired head. Next: the T3–T6 batch when
  those benches fly.
- (Design) no chat open; [DESIGN](DESIGN.md) holds the direction and
  the reserved slots — colour tokens and three reference images
  still TBD, still the founder's.

## Next

**[V1.S1.T8](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
— cost sources — then T7.** T8 vets flight-quote APIs, lodging rate
options and ground/activity ranges, and it is where the paid-schedule
question ruled at #360 gets decided, since a licensed flight-quote
source returns schedule and price together. T7 then consolidates five
`SOURCES-<family>.md` files and ratifies the grade scale — and
closing it closes the window.
