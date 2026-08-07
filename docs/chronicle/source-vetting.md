---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# Source vetting and SOURCES — one family proved the reliability law, and four are waiting their turn

> **CURRENT ENDING (2026-08-06).** One family of five is vetted
> end-to-end. [SOURCES](../data/SOURCES.md) holds **6 filled weather
> slots** — Open-Meteo Forecast and Historical at **Grade A** under
> CC-BY 4.0, NWS alerts, and the derived slots — each with confirmed
> payload keys, a run spike script, freshness, coverage, cost,
> `retention_rights` and `license_class`. The remaining **37 slots
> across four families are empty**, and their tasks
> ([V1.S1.T3–T6](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code))
> are not merely unstarted but **relaunch-from-scratch**: the
> original parallel attempt died with its vehicle, no work was
> salvaged, and the founder ruled on 2026-07-28 that they are
> re-planned as new work. They are further **PAUSED** by
> [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
> until phase 2 closes, and carry four audit riders — each marked
> *verify licenses at spike* — from the external product
> re-evaluation. The grade scale they will all be judged against is
> itself **provisional until T7 ratifies it**.

## What it is

The vetting discipline that turns
[FOUNDATION](../FOUNDATION.md)'s reliability law from a promise into a
checkable procedure, and [SOURCES](../data/SOURCES.md), the registry
it writes into.

One entry per source SLOT — the join names declared in
[FACTS](../data/FACTS.md) — and each entry must record:

- **Serves** — the exact fact IDs the slot supplies;
- **Source** — the named API, and which rung of the
  [D-010](../record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
  ladder it sits on;
- **Confirmed keys** — the payload fields actually observed in a spike
  fetch, not the ones the documentation advertises;
- **Grade · freshness · coverage · cost**;
- **`retention_rights` and `license_class`** — with attribution
  duties, and a verification date;
- **Spike** — the path of the script that was run, and when.

The spike requirement is what makes vetting different from research.
A slot is not vetted because a source looks suitable; it is vetted
because a script fetched the payload and the keys were present. The
weather entries record exactly that — "all present, zero missing",
Reykjavik, 2026-06-12 — and the climatology entry goes further,
recording the sanity of the values it computed (10-year October
normals: mean max 6.8 °C, 18 rain days).

## What raised it

The reliability law makes a per-module shipping condition — a check
ships only when its source is reliable and consistently obtainable —
and [D-015](../record/DECISIONS.md#d-015--data-asset-law) adds a
second, harder one: **licence and retention are PRIMARY selection
criteria**, because a caching-prohibited source disqualifies a slot
from the asset layer entirely. A source can be accurate, free, global,
and still unusable.

That makes source selection a gate rather than a preference, and gates
need records. Hence a registry with licence classes and verification
dates rather than a list of API names.

## What changed, in order

- **[#37](https://github.com/wsher0901/roam/pull/37) — SOURCES is
  born; weather goes through end-to-end.** The first family through
  the reliability law completely: all six weather slots graded,
  licensed and spike-tested. The headline verdict is Open-Meteo at
  **Grade A under CC-BY 4.0** — storage, revision series and
  derivatives allowed with attribution, which is precisely what the
  bitemporal asset layer needs. The rejections are as informative as
  the choice, and every one turns on licence rather than quality:
  **OpenWeatherMap** was rejected because its free-tier data is
  CC BY-SA — share-alike contamination risk for the asset layer under
  D-015; **Meteostat** because CC BY-NC forbids the commercial use the
  product is for; **MET Norway** was NOT rejected but kept as a rung-1
  backup if Open-Meteo degrades. Cost was resolved rather than
  deferred: the free tier covers the demo, and commercial use is a
  fixed-price switch on the same API with no code change.
- **The batch-1 arc — four lanes fired, and the work destroyed.**
  T3–T6 were launched as parallel cloud lanes and did not come back.
  The record holds two artifacts and no more: the vehicle post-mortem
  ([D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2)) — bundle-seeded
  sandboxes could not push, and **T3 and T5's work was destroyed** —
  and the fix-routing triage
  ([D-018](../record/DECISIONS.md#d-018--fix-routing-triage-after-lane-review)),
  with [D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  covering the launch mechanics that were corrected along the way.
  **T4 and T6 were never even recorded as failed.** That is the whole
  of the evidence; nothing further about why those four lanes died is
  derivable, and nothing has been invented to fill the gap.
- **[#87](https://github.com/wsher0901/roam/pull/87) — the plan is
  reshaped so the failure cannot repeat structurally**
  ([D-026](../record/DECISIONS.md#d-026--roadmap-recut) aligning to
  [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2)). T3–T6 stop
  sharing an output file: each writes its own
  `SOURCES-<family>.md`, with T7 consolidating the four into SOURCES
  and deleting them. The lane law's no-shared-file clause reached into
  the product plan and changed what four tasks deliver.
- **The founder's ruling, 2026-07-28 — RELAUNCH FROM SCRATCH.** No
  salvage, no partial adoption: T3–T6 are re-planned as new work. The
  unticked ROADMAP boxes already told that truth, so nothing was
  ticked or un-ticked to record it — the honest state was already on
  the board. Four **audit riders** ride along from the external
  product re-evaluation, each marked *verify licenses at spike*:
  - **T3 · Sky & sea** —
    [tides](../data/FACTS.md#f-ss-04--tide-tables-) pre-accept B
    grade: US and major ports verified, everywhere else labeled.
  - **T4 · Feasibility** — Google-class sources may serve display-time
    rungs but **never enter the asset layer**, which would collide
    with the licence-segmented storage law; the asset layer builds on
    Overture Maps / Foursquare OS Places / OSM plus first-party data,
    and demo destinations are chosen by data coverage rather than by
    wish.
  - **T5 · Time & transport** — V1 scopes to
    [route existence](../data/FACTS.md#f-tt-02--route-existence-)
    plus typical block times at rung 3–4, labeled as such;
    [schedule-level flight data](../data/FACTS.md#f-tt-03--flight-schedule-blocks-)
    moves to V3-with-budget, and backward-chained departure logistics
    needs no schedule API at all.
  - **T6 · Crowds & calendar** —
    [venue busyness](../data/FACTS.md#f-cc-06--venue-busyness-curves-)
    lands as C-grade curated curves (venue-type × day × season), built
    the way the
    [activity sensitivity profiles](../data/FACTS.md#f-wx-13--activity-weather-sensitivity-profiles-15-types)
    are built — and therefore ours.
- **[D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the tasks are PAUSED, not merely queued.** The founder's
  sequencing became a decision because a paused stage routes to a
  decide rather than to conversation: phase 1 settle-and-test, phase 2
  the vault, phase 3 Roam — with T3–T6 and
  [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  held until phase 2 closes.

## Where it stands

Derived at this story's write time:

| Family | Slots | Filled | Task | State |
| --- | --- | --- | --- | --- |
| Weather | 6 | **6** | [T2](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code) | ticked |
| Sky & sea | 7 | 0 | T3 | relaunch · paused |
| Feasibility | 14 | 0 | T4 | relaunch · paused |
| Time & transport | 8 | 0 | T5 | relaunch · paused |
| Crowds & calendar | 8 | 0 | T6 | relaunch · paused |
| **Total** | **43** | **6** | — | — |

SOURCES itself names the remaining four families under a "Pending
slots" heading — the file is honest about its own incompleteness
rather than merely short.

Three things are worth naming about where this leaves the product.

**The one vetted family is the easy one, and that is by design rather
than luck.** Weather sits almost entirely on rung 1 — numerical models
are global by construction — which is exactly why
[D-006](../record/DECISIONS.md#d-006--v1-roadmap-cut) put Weather and
Sky & sea first: the cleanest consistently-reliable sources ride the
whole spine before the hard families are attempted. The corollary is
uncomfortable and true: **the reliability law has been proven against
its most favourable case.** The families that will test it — the ones
where 12 of 22 coverage-risky facts live — are the four that have not
been vetted.

**The riders have already reshaped V1's promises.** T5's rider moves
schedule-level flight data to V3-with-budget, which narrows what
"time & transport" can mean in the demo before a single source is
looked at. That is the reliability law working as intended — scope
yielding to what can be honestly obtained — but it is a product
change made in an audit note, and it is worth reading as such.

**The grading scale is provisional.** SOURCES says so itself, and
[ENGINE's open register](../ENGINE.md#12-open-register) carries it as
OPEN-2: the grade scale is provisional until ratified in T7. So the
one family that IS vetted is graded on a scale that has not been
finally agreed — Grade A means what the file currently says it means.

The open edge is simply the size of the remainder: 37 slots, four
families, all of them the hard ones, gated behind a phase that has not
closed, to be executed as new work by lanes that will have to spike
every licence themselves.

## Sources

Down-links only.

- [SOURCES](../data/SOURCES.md) — the registry; the filled-slot counts
  above are derived from it at write time.
- [FACTS · T2–T6 assignment map](../data/FACTS.md#t2t6-assignment-map)
  — the 43 slots and the per-entry recording rule.
- [D-010](../record/DECISIONS.md#d-010--global-coverage-via-graded-fallback-ladders)
  — the six-rung ladder that vetting walks top-down.
- [D-015](../record/DECISIONS.md#d-015--data-asset-law) — licence and
  retention as primary selection criteria; caching-prohibited sources
  disqualified.
- [D-018](../record/DECISIONS.md#d-018--fix-routing-triage-after-lane-review)
  · [D-019](../record/DECISIONS.md#d-019--launch-mechanics-correction)
  · [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) — the
  batch-1 arc: the triage, the launch correction, and the post-mortem
  that records the destroyed work.
- [D-026](../record/DECISIONS.md#d-026--roadmap-recut) — per-family
  `SOURCES-<family>.md` outputs so four lanes never share a file.
- [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the pause, and the phase that must close first.
- [the v1.s1.t2 story](../record/history/product/definition/v1.s1.t2.md)
  — [#37](https://github.com/wsher0901/roam/pull/37): weather vetted
  end-to-end.
- [the answering bench](../record/history/workshop/definition/chronicle-answers.md)
  — the relaunch brief in full, the four audit riders, and the limits
  of what the record knows about the failure.
- [ENGINE §12](../ENGINE.md#12-open-register) — OPEN-2, the
  provisional grade scale.
