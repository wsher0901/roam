---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-09-11 · 17:37 UTC by ship's weld · from work PC
THE PRODUCT-FIRST WINDOW IS OPEN AGAIN — it was suspended for ONE
bench, [#362](https://github.com/wsher0901/roam/pull/362), and
RESUMED AT ITS MERGE
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window),
amendment line). No workshop bench until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes.
THE TEST FLIGHT IS DOWN — all four product benches welded and
merged · needs-you 2 ·
git outranks this board.
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

## The baton

CONTROL TOWER — work PC, since 2026-09-10 14:12 UTC (pickup)
([handoff §4's case table](skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
pickup's plain-claim row).
Last flight: LANDED 2026-08-04 21:16 UTC via MANUAL-LAND.

## In flight

**Nothing flying. The test flight is complete** — four product
benches born bench-first from `a893524`, run as an agent team with
the founder at the desk, batch-reviewed on the Web, and all four
merged: [#363](https://github.com/wsher0901/roam/pull/363) ·
[#364](https://github.com/wsher0901/roam/pull/364) ·
[#365](https://github.com/wsher0901/roam/pull/365) ·
[#366](https://github.com/wsher0901/roam/pull/366).

The four V1.S1 benches
[#358](https://github.com/wsher0901/roam/pull/358)–[#361](https://github.com/wsher0901/roam/pull/361)
still sit at birth, untouched and claimable.

## Working on

**NOTHING OPEN.**
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 are next and the founder decides when they start.

**WHAT THE FLIGHT PROVED.** It was the dress rehearsal for T3–T6 and
the point was the vehicle, not the payload. The canary handshake was
the thing under test, after 2026-09-10 dispatched four lanes and
acked none: all three lanes acked in **4.0s, 2.6s and 2.6s** inside
a ten-minute window, because the acks were PRE-STAGED as a watcher
armed BEFORE dispatch. The window is per-lane; ack capacity is
shared. Every lane pushed every commit, none wrote main, and none
shared a file with a sibling.

**AND THE REVIEWS EARNED THEIR PLACE.** The design-review gate found
a bug three authenticated fetches could not: the whole screen
rendering in Times New Roman from a token pointing at itself, on
main as much as on the bench. A bench critic found that a
"one state" claim counted the COMPONENT while the law governs the
SCREEN. Of 25 critic findings across four benches, **eight were in a
spec the control tower wrote rather than in any lane's work** —
including a Done-means box that pre-wrote its own conclusion, so a
lane that disagreed would have failed it.

**THE PRODUCT-FIRST WINDOW** stays open.
[D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
closes the workshop to new benches until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes, and expires on its own checkboxes.

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
  T3–T6, then T7; plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed** — the last five; the full chronology is
[the ledger](record/history/README.md#the-ledger).

- **WHAT THE MODEL MAY AND MAY NOT PRODUCE** —
  [D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
  makes the model boundary an ENGINE §11 invariant, adds demo
  guardrails as V1.S8.T4 with nothing public before them, gates the
  fact cache on the migrations, and grows the eval set — closing
  OPEN-9 in place with its number kept.
  [#366](https://github.com/wsher0901/roam/pull/366)
- **THE FIRST THING AT THE PUBLIC URL THAT IS OURS** — the
  create-next-app template is gone; eight lines render Roam and one
  sentence. The design-review gate then found what three
  authenticated fetches could not: a token pointing at itself put
  the whole screen in Times New Roman, on main as well. Fixed, six
  template assets deleted, and the states law answered honestly at
  two states rather than one.
  [#365](https://github.com/wsher0901/roam/pull/365)
- **A GRADE RESTING ON A FETCH NOBODY RE-RAN** — three weather
  spikes re-run after ninety-one days and four stamps refreshed with
  today's OBSERVED values (14 keys, 3,653 days, 3 active alerts
  where June saw 2). No grade or coverage claim moved. The critic
  caught that the licence stamp alone had no re-runnable artifact;
  the page's own sentences are now pasted verbatim, and the spec was
  widened because a bench meeting the old contract would still have
  shipped the hole.
  [#364](https://github.com/wsher0901/roam/pull/364)
- **THE NOTE THAT DESCRIBED A FOLDER THAT NO LONGER EXISTED** —
  [DESIGN §Reference images](DESIGN.md#reference-images) said the
  two rejected taste probes sat beside the picked one, "linked from
  that folder's index". All three files had been deleted on
  2026-09-10; the paragraph now says so, and the old line's one true
  idea — that no reference slot ever pointed at the losers — becomes
  the reason the deletion was safe.
  [#363](https://github.com/wsher0901/roam/pull/363)
- **DOES THE MACHINERY DO WHAT IT SAYS?** — the audit that became a
  fix. The merge gate's real answer written down, the permission
  friction fixed at its four causes, and a weave gate that fails a
  bare D-number. Two gaps parked rather than claimed closed.
  [#362](https://github.com/wsher0901/roam/pull/362)

**Issues** — none with a home nowhere else.

Every line this section used to carry now lives at its own home —
the inbox, a probe record, a story, or the ledger — and a second
copy here is what the routing law forbids
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 4). The one item that had NO home, the summon fire's timing
table, gained one before it moved:
[record/probes/summon-fire.md](record/probes/summon-fire.md).

## Where we are (Roam)

V1 — The demo · 5/35 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░
S2 · Skeleton & design · 3/5 ███░░
S3–S8 · queued in order · 0/23

The V1 total moved 34 → 35:
[D-087](record/DECISIONS.md#d-087--product-the-model-boundary-and-three-plan-corrections)
added V1.S8.T4, demo guardrails.
No box was ticked by this flight — all four benches were slug-keyed,
and ticks are ship's alone.

## Web + Design

- (Web) "GitHub workflow protocol and web instructions setup" — the
  ops chat. It ran the full-pass validation behind
  [#362](https://github.com/wsher0901/roam/pull/362), then the
  BATCHED REVIEW of this flight's four PRs
  ([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
  ruling 3, extended to it): two PASS, two repaired and re-issued
  per sha. Next: the T3–T6 batch when those benches fly.
- (Design) no chat open; [DESIGN](DESIGN.md) holds the direction and
  the reserved slots — colour tokens and three reference images
  still TBD, still the founder's.

## Next

**[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 — the founder's call when.** Four benches already sit at birth
as [#358](https://github.com/wsher0901/roam/pull/358)–[#361](https://github.com/wsher0901/roam/pull/361),
and the test flight just proved the vehicle that will fly them.
Closing T3–T7 also closes the product-first window.
