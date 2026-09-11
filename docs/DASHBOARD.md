---
type: dashboard
title: Dashboard
status: living
---

# Dashboard — the state surface

Painted 2026-09-11 · 14:34 UTC by ship's weld · from work PC
THE PRODUCT-FIRST WINDOW IS OPEN AGAIN — it was suspended for ONE
bench, [#362](https://github.com/wsher0901/roam/pull/362), and
RESUMED AT ITS MERGE
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window),
amendment line). No workshop bench until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes.
THE TEST FLIGHT IS LANDING — four product benches: two welded, two
in repair after the external review · needs-you 2 ·
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

**THE TEST FLIGHT — four product benches, born bench-first from
`a893524` and run as an agent team with the founder at the desk.**
The batched external Web review
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 3, extended to this flight) passed two and returned repairs
on two.

- [#363](https://github.com/wsher0901/roam/pull/363)
  design-reference-note — **MERGED.**
- [#364](https://github.com/wsher0901/roam/pull/364) sources-restamp
  — **MERGED.**
- [#365](https://github.com/wsher0901/roam/pull/365) holding-page —
  **REPAIR**: the self-referential `--font-sans` token that put the
  whole screen in the browser's default serif, the leftover
  create-next-app assets, and the font-swap loading state ruled
  HANDLED rather than absent.
- [#366](https://github.com/wsher0901/roam/pull/366) pre-s3-rulings
  — **REPAIR**: both `BLOCKED:` questions answered, T2 gated on T1
  AND [V1.S2.T4](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
  and the path accepted with a clause saying why it adds one edge
  rather than a stage coupling.

The four V1.S1 benches
[#358](https://github.com/wsher0901/roam/pull/358)–[#361](https://github.com/wsher0901/roam/pull/361)
still sit at birth, untouched and claimable.

## Working on

**THE TEST FLIGHT'S TWO REPAIRS** — [#365](https://github.com/wsher0901/roam/pull/365)
and [#366](https://github.com/wsher0901/roam/pull/366), both on the
external review's instruction. Each takes one tower commit, then the
review word again on its new head.

**WHAT THE FLIGHT WAS FOR.** It was the dress rehearsal for
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 — the point was the vehicle, not the payload. The canary
handshake was the thing being tested, after 2026-09-10 dispatched
four lanes and acked none: all three lanes acked in **4.0s, 2.6s and
2.6s**, inside a ten-minute window, because the acks were pre-staged
as a watcher armed BEFORE dispatch. The window is per-lane; ack
capacity is shared.

**THE PRODUCT-FIRST WINDOW.**
[D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
closes the workshop to new benches until
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes, puts the ceremony on a diet, batches the review, and splits
the inbox so §Open holds product work only. It expires on
[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)'s
own checkboxes — nothing has to remember to end it. It was suspended
once, for [#362](https://github.com/wsher0901/roam/pull/362), and
resumed at that bench's merge.

The standing order
([D-060](record/DECISIONS.md#d-060--the-three-phase-standing-order),
phase 1's closing condition amended by
[D-074](record/DECISIONS.md#d-074--phase-1-closes-on-flights-3-and-4),
phase 2's by
[D-081](record/DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)),
one phase per line:

- PHASE 1 — settle & test: **CLOSED 2026-08-05.**
- PHASE 2 — the vault: **CLOSED 2026-08-07.** The
  connections-and-content polish pass was carved out as its own
  bench, `vault-connections`, which gates nothing.
- PHASE 3 — Roam: **OPEN, and now the only thing running.**
  [V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 relaunch from scratch, then T7; plus
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  design foundations.

## Recent

**Completed** — the last five; the full chronology is
[the ledger](record/history/README.md#the-ledger).

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
  fix. The merge gate's real answer written down (the server refuses
  four things and can require no approval while one account owns
  every seat, so the founder's word rests on the record, not the
  platform); the permission friction fixed at its four causes and
  the rails mirrored across both shells; `git add -A` out of the
  session-end hook; a weave gate that fails a bare D-number. Two
  gaps parked rather than claimed closed.
  [#362](https://github.com/wsher0901/roam/pull/362)
- **SIXTEEN ADVISORIES TO ZERO** — Next 16.3.4 closes a critical
  middleware bypass; a monthly grouped dependabot lane replaces the
  bench. One gap named rather than closed: majors still need a
  manual sweep. [#356](https://github.com/wsher0901/roam/pull/356)
- **THE WORKSHOP GETS A DEADLINE** —
  [D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
  opens the product-first
  window: no workshop bench until V1.S1 closes, a ceremony diet, a
  permanent board diet, and an inbox split. Its deferral classifier
  was wrong twice before it shipped, both caught by review.
  [#355](https://github.com/wsher0901/roam/pull/355)
**Issues** — none with a home nowhere else.

Every line this section used to carry now lives at its own home —
the inbox, a probe record, a story, or the ledger — and a second
copy here is what the routing law forbids
([D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 4). The one item that had NO home, the summon fire's timing
table, gained one before it moved:
[record/probes/summon-fire.md](record/probes/summon-fire.md).

## Where we are (Roam)

V1 — The demo · 5/34 █████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
S1 · Data Definition · 2/7 ██░░░░░
S2 · Skeleton & design · 3/5 ███░░
S3–S8 · queued in order · 0/22

Unchanged by this weld: the test flight's benches are slug-keyed, so
none of them ticks a roadmap box. Ticks are ship's alone.

## Web + Design

- (Web) "GitHub workflow protocol and web instructions setup" — the
  ops chat. It ran the FULL-PASS VALIDATION that turned
  [#362](https://github.com/wsher0901/roam/pull/362) from audit into
  fix-everything, and reviewed that bench PASS on an independent
  clone and install. Next: the batched T3–T6 review under
  [D-086](record/DECISIONS.md#d-086--workshop-the-product-first-window)
  ruling 3.
- (Design) no chat open; [DESIGN](DESIGN.md) holds the direction and
  the reserved slots.

## Next

**THE TWO REPAIRS, THEN THE REVIEW WORD AGAIN.**
[#365](https://github.com/wsher0901/roam/pull/365) and
[#366](https://github.com/wsher0901/roam/pull/366) each take one
tower commit; a new head voids that PR's verdict, so each goes back
to the Web surface for "review" on its new sha. Merge words stay
per-PR.

Then **[V1.S1](ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6 for real** — four benches already sit at birth as
[#358](https://github.com/wsher0901/roam/pull/358)–[#361](https://github.com/wsher0901/roam/pull/361),
and the flight just proved the vehicle that will fly them.
