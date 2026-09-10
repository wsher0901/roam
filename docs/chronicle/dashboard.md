---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-09-10 · the diet gets teeth; both defects closed · work PC
---

# DASHBOARD — the board

> **CURRENT ENDING (2026-09-10).** The single rendered state
> surface, and the workshop's most carefully DE-authorized file:
> never hand-edited, written only by rituals, and outranked by git
> on any disagreement. The census cell says that much and stops
> there; two later rulings shaped what it may contain — the BOARD
> DIET
> ([D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)),
> which cut it to state and acts and sent the stories to the
> record, and
> [D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed),
> which moved every BATON rendering into one case table. **A third
> ruling on 2026-09-10 gave the diet teeth**
> ([D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
> ruling 4): RECENT keeps five Completed lines, ISSUES keeps only
> lines with no home elsewhere, both PERMANENT — and the second cap
> emptied ISSUES entirely on first application, all 28 items
> resolving to a home, with the single genuine orphan given
> [a probe record](../record/probes/summon-fire.md) BEFORE it was
> removed. The two defects this story once named as live are gone:
> the GATE repaint was added and then folded into the weld by
> ruling 2b, and the duplicated block is cleared by the wholesale
> repaint. What remains true is the oldest thing about this file —
> it is the least authoritative surface in the repo, by design.

## What it is

The board — one page answering "where does everything stand?" for
a founder who has been away. Needs-you first, then the baton, what
is in flight, what is being worked on, what shipped recently,
where the product is, and what is next.

Three properties matter more than its contents:

- **It is RENDERED, never authored.** Rituals repaint it —
  [pickup](../skills/pickup.md),
  [handoff](../skills/handoff.md),
  [liftoff](../skills/liftoff.md),
  [land](../skills/land.md), and
  [ship](../skills/ship.md)'s tail. It is never hand-edited.
- **It is NEVER STALE-TRUSTED.** Git outranks the board. A session
  that finds them disagreeing believes git and says so.
- **It has ONE SPEC**, at
  [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source),
  which every other writer cites instead of restating.

## What raised it

A founder returning after a day away needs the state of the
workshop in one read, and the state lives in a dozen places: open
branches, draft PRs, memory Status lines, roadmap checkboxes, CI
runs. Assembling that by hand each time is the work the board
exists to have already done.

The hazard is intrinsic to the idea. A rendered summary of live
state is WRONG the moment the state moves, and a confident,
well-formatted summary is believed exactly as readily when stale
as when fresh. Every rule above exists to keep the board useful
without letting it become authoritative — which is why it is
grouped with [ATLAS](../ATLAS.md) as deliberately among the least
authoritative files in the repo.

## What changed, in order

- **The early board** — built and rebuilt across
  [#60](https://github.com/wsher0901/roam/pull/60),
  [#62](https://github.com/wsher0901/roam/pull/62),
  [#71](https://github.com/wsher0901/roam/pull/71) and
  [#78](https://github.com/wsher0901/roam/pull/78) as the workshop
  worked out what a state surface owes its reader.
- **[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) —
  state surfaces v2**: a Sessions table with a type column,
  sentence-first Needs-you, verbatim chat titles, welds stamping
  time and writing the ledger — and the ruling that matters most
  for everything after, **handoff §4 IS THE SINGLE BOARD SPEC**.
- **[D-036](../record/DECISIONS.md#d-036--information-routing-one-home-per-class)
  — the routing law** places the board as a RENDER of state that
  is written elsewhere, rather than a place state is stored. The
  roadmap holds task state; the board shows it.
- **The seat-stamp era** —
  [#193](https://github.com/wsher0901/roam/pull/193),
  [D-051](../record/DECISIONS.md#d-051--self-seat-birth) and
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) give
  the board its baton line: which seat holds command, since when,
  and how the last flight ended.
- **2026-07 — THE BOARD DIET**
  ([D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet),
  [#250](https://github.com/wsher0901/roam/pull/250)). The board
  is declared THE STANDING REPORT and put on the same diet as
  every other founder-facing report: **state and acts only**.
  Stories die into the record; position lives ONCE (the bars);
  Needs-you carries the urgency ladder; WORKING ON splits from
  WHERE WE ARE; and the sitting narrative, the essay-length ledger
  rows and the review receipts all leave the file. The governing
  sentence is PUSH FIRST, REPORT SECOND — beyond the founder's own
  acts and genuinely off-origin content, a report may contain
  nothing not already on origin.
- **2026-07 — BATON RENDERINGS SINGLE-HOMED**
  ([D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed),
  [#257](https://github.com/wsher0901/roam/pull/257)). D-067 had
  said each writer paints its own case and the wording is law —
  and then left the wordings in four files. Prose agreement has no
  linter, so they drifted into contradictions no gate could see
  and only a FLIGHT could surface. Every rendering moves into ONE
  CASE TABLE at handoff §4, one row per case, each naming its
  writer; the cause vocabulary is fixed (AUTO-LAND · MANUAL-LAND ·
  DESK TAKEOVER); and the fire-time and MODE P lines are corrected
  in the move.

- **[D-083](../record/DECISIONS.md#d-083--the-external-blocker-rule)
  — the board may carry a banner, and only this one.** The diet
  that cut the board to state and acts admits one addition: an
  external-blocker line above the glance, present only while
  something outside the workshop's control is blocking, and dropped
  the moment it clears.

- **2026-09-10 — THE DIET GETS TEETH, AND TWO SECTIONS STOP GROWING**
  ([#355](https://github.com/wsher0901/roam/pull/355),
  [D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
  ruling 4). Until now the board's diet was a principle; RECENT and
  ISSUES grew monotonically anyway, because nothing said when a line
  should leave. Two PERMANENT caps: **RECENT keeps the last five
  Completed lines**, the ledger holding the full run, and **ISSUES
  carries only lines with NO home elsewhere** — a line already in
  [IDEAS](../IDEAS.md) is the second copy the routing law forbids.
  Applied once, the second cap emptied ISSUES ENTIRELY: all 28 items
  were grepped against their claimed homes and every one resolved —
  the ⏳ items to inbox lines, the ✓ items to the ledger or a story,
  and the two that looked homeless to stories that did in fact carry
  them. **Exactly one item had no home and said so itself** — the
  summon fire's timing table, sitting on the board since 2026-08-05
  under its own warning that verify-before-drop was the only reason
  it was still there. It got
  [a probe record](../record/probes/summon-fire.md) FIRST and moved
  second, which is the order that rule asks for. The board also
  gains a WINDOW slot in its painted line, and — under ruling 2b —
  a new writer: the atomic weld, stamped `ship's weld`.

## Where it stands

Live, on its diet — now enforced rather than merely stated — and
single-homed. **Both defects this story once recorded are closed**,
and they are kept here because how they closed is the point.

**THE GATE HAD NO REPAINTER, AND NOW THE QUESTION IS MOOT.** No
ritual repainted the board when a bench reached THE GATE, so every
bench that got there left the board claiming the founder owed
nothing — three times on 2026-08-05/06 alone. The repair gave
[ship §6](../skills/ship.md#6--the-gate) a DASHBOARD-only micro-PR;
then [D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 2a suspended that micro-PR for the window's duration, judging
the gate report itself sufficient notice with handoff FULL as the
backstop. The board's purest failure mode is still worth naming
because it will recur elsewhere: **not a wrong fact, but a stale
surface reading as a current one**, in the exact section whose whole
job is to be trusted.

**THE DUPLICATED BLOCK IS GONE.** Read from `origin/main` on
2026-08-06, the board rendered `## The baton`, `## In flight` and
`## Working on` TWICE each. It was never a typo — it is evidence
about the mechanism: a file written only by rituals has no author to
notice a doubled repaint, and **nothing in CI checks the board's
SHAPE**, which remains true. The wholesale repaint of 2026-09-10
cleared it, exactly as the repaint model promises — the fix was free
because the model is regenerate-from-source rather than patch.

The board's own ⚠️ paragraph from that day documents a third,
related gap in the seat that paints it: pickup repaints only when
it JUDGES the board stale, and a seat that claims the baton has
already made the board stale by claiming it.

## Sources

Down-links only.

- [DASHBOARD](../DASHBOARD.md) — the board itself.
- [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
  — the single board spec and the baton case table.
- [D-067](../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
  — the report skeleton and the board diet.
- [D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)
  — the renderings' single home.
- [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) —
  state surfaces v2, where handoff §4 became the spec.
- [D-036](../record/DECISIONS.md#d-036--information-routing-one-home-per-class)
  — the routing law that made the board a render.
- [the report-shapes bench](../record/history/workshop/definition/report-shapes.md)
  · [#250](https://github.com/wsher0901/roam/pull/250) ·
  [the flight-seams bench](../record/history/workshop/mechanism/flight-seams.md)
  · [#257](https://github.com/wsher0901/roam/pull/257).
- [HOME §Reading the board](../HOME.md#reading-the-board) — the
  reading keys.
- [IDEAS](../IDEAS.md) — the open gate-repaint line.
