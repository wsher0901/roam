---
type: history
slug: chronicle-shelf-4-roam
shipped: 2026-08-07 19:18 UTC
pr: #336
---

# chronicle-shelf-4-roam — Shelf IV — Roam

## Status

complete, awaiting merge — 2026-08-06. All 9 Shelf IV stories are
written and pushed; `docs/chronicle/INDEX.md` is untouched by this
branch, verified with `git diff --name-only origin/main...HEAD`. The
calibration this bench owed
([D-078](../../../../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 2) is reported below, and **its answer contradicts the premise
that commissioned it.**

## What this task is

The 9 unwritten stories of **Shelf IV — Roam** — the product itself.
One of seven benches flying as a single fleet under
[D-078](../../../../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../../../../record/specs/chronicle-shelf-4-roam.md).

## Pending issues

None blocking. Three findings are recorded here for the weld rather
than fixed by this lane, because a lane writes story files and its own
memory and nothing else:

1. **The census cell for ENGINE is wrong twice.** It says "ten
   pipeline stages"; the pipeline is NINE (Intake→Learn) and the
   tenth table row is §11 Invariants, a law over every stage rather
   than a stage. It also says the nine open questions are "parked
   until V1.S3 opens"; OPEN-2 (the grade scale) waits on
   [V1.S1.T7](../../../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
   — an EARLIER stage — and four slots name no home at all. Both
   corrections are stated in [the story](../../../../chronicle/engine.md).
2. **[ROADMAP](../../../../ROADMAP.md) holds 34 tasks;
   [D-006](../../../../record/DECISIONS.md#d-006--v1-roadmap-cut) cut 33.** The
   count was written as a literal at the cut and never re-derived. The
   visible candidate for the extra is
   [V1.S3.T7](../../../../ROADMAP.md#v1s3--engine-core--two-families-deep), the
   actuals harvester — the only V1 task line citing a decision and an
   appendix that both postdate the cut — but this lane could not
   confirm it (see the shallow-clone note below) and did not assert
   it.
3. **[FACTS Appendix A](../../../../data/FACTS.md#appendix-a--traveler-parameters-tp-0147--per-d-011--d-012)
   has one row outside its own declared vocabulary.** The legend
   declares four ask tiers (U · L · N · S); TP-24 (free-form notes)
   carries "always-on capture". Sensible for the field, undeclared by
   the legend. Recorded, not edited.

## Left / idle

Nothing. Plan steps 1–3 are complete: 9 stories written to the settled
format, every ending derived at write time, and the cost reported
below.

## The story

2026-08-06 14:40 UTC · bench birth · work PC — born bench-first as
one lane of a seven-lane fleet, on the founder's "one fleet — fire
all seven".

**THE FLEET IS LAWFUL ONLY BECAUSE OF ONE CLAUSE.** Every slice
bench before this one wrote `docs/chronicle/INDEX.md`, and the lane
law forbids siblings sharing a file so that merges cannot collide by
construction. Seven concurrent lanes would have been UNLAWFUL — and
that was found by checking the planned benches for shared files
rather than by discovering it at the first collision.
[D-078](../../../../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 moved that write to the weld, where
[ship §7](../../../../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step already performs it.

**WHAT THIS BENCH INHERITS that the pilot did not have:** a settled
format, an event variant proven by slice D, and a measured figure of
roughly two minutes a story. What it inherits as a WARNING is the
census itself — several cells have been wrong, and one stood stale
for a week and misled two later readers who each stopped at it
without asking whether anything since had closed it. So this bench
derives its endings and lets the derivation win.

**2026-08-06 14:43 UTC · canary, then the wait.** Claimed a Status
reading "bench ready, no worker yet" — unclaimed and non-terminal, so
the claim was lawful. The ack arrived at 14:54:38 as commit `fd44200`.
**A webhook redelivery for the same trigger arrived mid-wait**, at
14:47, carrying the original head SHA. It was not treated as a
licence: §Canary is explicit that a notification, a session message or
a webhook redelivery is never the ack however well-formed, and origin
still held this lane's own claim. Nothing was re-issued — no second
canary, no restart — and the wake-lock's re-read was the whole
response. The licence came from the commit and only from the commit.

**A constraint on method worth recording: this lane's clone is
SHALLOW** — 52 commits, floor 2026-08-04. Git archaeology on the
product docs is therefore impossible from this seat: every product
file shows a single "new file" commit. All lineage in these nine
stories comes from the in-tree record
([DECISIONS](../../../../record/DECISIONS.md),
[history/](../../../../record/history/README.md)) and from the LIVE FILES
themselves, which are direct evidence for a "where it stands" ending
and the strongest available. Where a claim needed git to confirm it —
the 33→34 task drift — the story says so and stops rather than
guessing.

**THE CALIBRATION —
[D-078](../../../../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 2's deliverable. The premise is contradicted.**

Clause 2 excluded Shelf IV from the measured figure because "Shelf
IV's sources are code and specs" rather than the pre-digested benches
that made slice D's gathering cheap. That is true about the KIND of
source and false about the COST, and the reason is structural:

| | Gathering | Writing |
|---|---|---|
| Slice D (measured cold) | ~40% | ~60%, ≈1m50s/story |
| **Shelf IV (this bench)** | **one shared pass, 10m10s total** | **11m15s for 9 = ≈1m15s/story** |

- **Writing: 14:55:52 → 15:07:07 = 11m15s for 9 stories ≈ 1m15s
  each** — FASTER than the ≈1m50s figure the fleet flies on, not
  slower.
- **Gathering: 14:44:28 → 14:54:38 = 10m10s, ONCE, for all nine.**
  Shelf IV's nine items draw on a single small corpus — six living
  files ([FOUNDATION](../../../../FOUNDATION.md) ·
  [ROADMAP](../../../../ROADMAP.md) · [ENGINE](../../../../ENGINE.md) ·
  [FACTS](../../../../data/FACTS.md) · [SOURCES](../../../../data/SOURCES.md) ·
  [DESIGN-KICKOFF](../../../../DESIGN-KICKOFF.md)), 14 product history stories
  averaging ~35 lines, and ~15 decide entries. Per-story derivation
  during writing was a handful of counts.

**Why the premise failed: it reasoned about source TYPE when the
driver is source COUNT AND SHARING.** Slice D's gathering was cheap
because the ledger indexes PR→history file. Shelf IV's was cheap for a
different reason that happens to be stronger — nine items share ONE
corpus, so the marginal gathering cost of story nine was approximately
zero. Different sources, same economics. **The measured figure holds
for Shelf IV, and the exclusion was unnecessary.**

Three honest caveats on that number, because a calibration that hides
its own limits is worth less than no number:

1. **The gathering pass ran concurrently with the mandated ack wait**
   (10m10s of gathering inside an 11m30s wait). Its cost to the flight
   was therefore near zero, but that is an artifact of the handshake
   window, not a property of Shelf IV. A lane acked instantly would
   have paid the 10 minutes.
2. **One lane held all nine stories' context in one session.** Split
   across nine lanes, the shared-corpus saving vanishes entirely —
   which is an argument for the SHELF as the bench unit, and the
   strongest evidence this fleet has produced for
   [D-077](../../../../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)'s
   shape.
3. **No `event` items exist on Shelf IV** — all nine are `product
   piece`. The event variant was correctly not applied, so this bench
   tests nothing about it, and its Done-means box is satisfied
   vacuously rather than by demonstration.

**On the endings.** No census cell for Shelf IV was found STALE in the
way the warning predicted — the dated-cell trap did not fire here.
What was found instead was arithmetic nobody had re-run: two wrong
counts in the ENGINE cell, and a task total that has been quoted from
its birth number for two months. Different failure, same cause — **a
number written as a literal is never re-checked**, which is the
derivation law's whole argument.

## Where to look

- [the spec](../../../../record/specs/chronicle-shelf-4-roam.md) — roster, format,
  and the INDEX prohibition.
- The nine stories: [FOUNDATION](../../../../chronicle/foundation.md) ·
  [ROADMAP](../../../../chronicle/roadmap.md) ·
  [the traveler vocabulary](../../../../chronicle/traveler-vocabulary.md) ·
  [FACTS](../../../../chronicle/facts-inventory.md) ·
  [the telemetry posture](../../../../chronicle/telemetry-posture.md) ·
  [source vetting](../../../../chronicle/source-vetting.md) ·
  [ENGINE](../../../../chronicle/engine.md) ·
  [the app skeleton](../../../../chronicle/app-skeleton.md) ·
  [the Design surface](../../../../chronicle/design-surface.md).
- [the format](../../../../record/history/workshop/definition/chronicle-pilot.md)
  — the pilot that settled it, and its honest caveats.
- [the event bend](../../../../record/history/workshop/definition/chronicle-shelf-1.md)
  — slice D's variant for `event` items, and the cold calibration.
- [D-059](../../../../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings.
- [the census](../../../../chronicle/INDEX.md) — READ-ONLY for this bench; its
  Shelf IV rows are the weld's to mark.
