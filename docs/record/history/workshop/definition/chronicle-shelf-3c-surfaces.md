---
type: history
slug: chronicle-shelf-3c-surfaces
shipped: 2026-08-07 19:13 UTC
pr: #334
---

# chronicle-shelf-3c-surfaces — Shelf III slice C — surfaces & manuals

## Status

complete, awaiting merge — 2026-08-06

All 7 stories written, the CI mirror green locally, and the PR
flipped ready. Nothing here needs a decision; it needs a review and
the founder's word. **A lane never merges and never marks the
census — the baton-holder writes the INDEX rows at the weld**, and
this branch leaves `docs/chronicle/INDEX.md` untouched, checkable
with `git diff --name-only origin/main -- docs/chronicle/INDEX.md`.

## What this task is

The 7 unwritten stories of **Shelf III slice C — surfaces &
manuals** — the files a reader actually opens. One of seven benches
flying as a single fleet under
[D-078](../../../../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../../../../record/specs/chronicle-shelf-3c-surfaces.md).

Delivered, all seven `system piece` (so slice D's event variant
applies to none of them): [HOME](../../../../chronicle/home.md) ·
[DASHBOARD](../../../../chronicle/dashboard.md) ·
[IDEAS](../../../../chronicle/ideas.md) · [ATLAS](../../../../chronicle/atlas.md) ·
[recall](../../../../chronicle/recall.md) ·
[WEB-INSTRUCTIONS](../../../../chronicle/web-instructions.md) ·
[SETUP](../../../../chronicle/setup.md).

## Pending issues

**THE ACK ARRIVED PAST ITS OWN WINDOW, AND A COMPLIANT LANE WOULD
HAVE BEEN DEAD.** Canary 14:42, ack commit 14:55 — about 13
minutes, where
[§Canary](../../../../skills/parallel-lanes.md#canary-handshake-both-sides)
fixes the cloud window at ~10 and instructs the lane to
self-terminate when it closes. This lane did exactly that: at 14:53
it wrote a stand-down memory and tried to push. THE PUSH WAS
REJECTED, which is the wake-lock's trigger — pull, re-read Status,
obey it — and the re-read found the ack. **The wake-lock saved this
flight, for the second recorded time**; the first was 2026-07-22,
[#191](https://github.com/wsher0901/roam/pull/191).

Worth a ruling the lane cannot make: the window is stated per-lane
but spent per-FLEET. One baton-holder acking seven benches serially
has to do it inside a budget sized for one, so the seven-lane fleet
is the first configuration where the constant is plausibly too
tight — and this is a MEASUREMENT of that, not a complaint about
this seat. Filed here rather than in [IDEAS](../../../../IDEAS.md), which a
lane never writes.

## Left / idle

Nothing. Plan steps 1–3 are done and the Done-means boxes are
answered:

- 7 story files in `docs/chronicle/`, one per roster item, in the
  settled format. ✓
- Event variant: not applicable — all seven are `system piece`. ✓
- Every ending DERIVED at write time; the six contradictions are
  stated in the stories themselves. ✓
- No story cites another story's prose — down-links only. ✓
- `docs/chronicle/INDEX.md` untouched by this branch. ✓
- The cost split is reported below. ✓
- Verification loop green locally; the PUSHED head's Actions run is
  the arbiter and is confirmed before the flip. ✓

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

2026-08-06 14:42–14:55 UTC · claim, near-death, licence · cloud
lane — canary up at 14:42; no ack; stand-down written and pushed at
14:53; the push bounced; the wake-lock's re-read found the ack and
the flight resumed. The wait was spent on read-only gathering, so
nothing was lost to the delay.

**THE REDELIVERED WEBHOOK WAS NOT MISTAKEN FOR THE ACK.** The
trigger re-fired mid-wait, correctly naming this PR and head SHA.
§Canary's licence rule — lived on
[#268](https://github.com/wsher0901/roam/pull/268), where a message
carrying a perfect token nearly started an unlicensed lane — says
the licence is a COMMIT ON ORIGIN and nothing else, so the
redelivery was read as a trigger echo and origin was re-read
instead. The anchored test earned its keep too: this file's own
prose contained the word "airborne" throughout the wait, so a
substring search would have self-licensed the lane at 14:42.

**SIX OF SEVEN CENSUS CELLS WERE STALE**, found by deriving before
writing rather than at the first contradiction. Each story states
its own contradiction in words:

| item | the cell | the record |
| --- | --- | --- |
| WEB-INSTRUCTIONS | "v5 lives as the repo master" | v6 — [#240](https://github.com/wsher0901/roam/pull/240), [D-063](../../../../record/DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6) |
| IDEAS | closed entries "deleted" | [D-066](../../../../record/DECISIONS.md#d-066--the-ideas-entry-contract) amended it — they COMPRESS AND STAY |
| ATLAS | six diagrams, "settled" | eight SVG figures — [D-071](../../../../record/DECISIONS.md#d-071--atlas-gains-the-enforcement-mesh) · [D-072](../../../../record/DECISIONS.md#d-072--the-atlas-no-scroll-law) · [D-073](../../../../record/DECISIONS.md#d-073--atlas-becomes-designed-figures) |
| DASHBOARD | the rendered state surface | + the board diet ([D-067](../../../../record/DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)) and single-homed renderings ([D-070](../../../../record/DECISIONS.md#d-070--baton-renderings-single-homed)) |
| HOME | pre-groom role list | the LAWS register split ([D-069](../../../../record/DECISIONS.md#d-069--the-law-register-and-the-manual-groom)) + the connector ladder ([D-065](../../../../record/DECISIONS.md#d-065--the-box-master-diet)) |
| SETUP | "the single inventory" | the entry contract ([D-064](../../../../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)) + the named VALUES home ([D-065](../../../../record/DECISIONS.md#d-065--the-box-master-diet)) |
| recall | shipped and standing | **true** — the one cell that survived |

The pattern is worth more than any single correction: not one cell
was WRONG WHEN WRITTEN. All six were dated attestations, accurate
on 2026-07-27/28, read later as current statements. That is the
same failure the bench was warned about, and it recurred at a rate
of six in seven.

**IDEAS' cell is the one to look at hardest**, because it is not
stale but CONTRADICTED: it states a rule that a later decision
repealed. A reader following it would have deleted closed entries
that the current contract requires be kept.

2026-08-06 14:57–15:06 UTC · the payload · cloud lane — seven
stories written, links green at every commit, then the full
verification loop.

**COST SPLIT, and it does not cleanly answer the spec's step 3.**
GATHERING ~13 minutes · WRITING ~7 minutes · VERIFICATION ~4
minutes (including an `npm ci`, since `lint` and `format:check`
both failed on missing packages in a fresh cloud container before
dependencies were installed — an environment fact, not a repo
defect). That reads 65/35 gathering-to-writing and appears to
OVERTURN slice D's cold calibration of roughly 60/40 the other way
— **and it should not be counted as evidence.** This bench's
gathering ran INSIDE THE FORCED ACK WAIT, so it cost no wall-clock
that was otherwise available; a bench licensed on time would have
recorded a different split entirely. The honest figure this bench
can offer is the WRITING one: about a minute a story with the
sources already open, against the ~2 minutes/story the bench
inherited.

**WHAT MADE IT HARD** was not the writing. It was that the endings
could not be taken from anywhere — six of seven had to be
reconstructed from
[DECISIONS](../../../../record/DECISIONS.md) and the live files, and the
only way to know which cells were wrong was to check all of them.
Sources opened: the seven live files, ~20 decision entries, the
version history of one box master, the ledger frontmatter of 14
history files, and the census — read once, then set aside.

## Ideas surfaced

- **The board carries a duplicated block.**
  [DASHBOARD](../../../../DASHBOARD.md) on `origin/main` renders
  `## The baton`, `## In flight` and `## Working on` TWICE each —
  the second baton copy carrying the ⚠️ paid-late paragraph. This
  branch is byte-identical to main there, so it is pre-existing and
  not this fleet's doing. Left untouched: a lane never writes the
  board. Recorded inside
  [the DASHBOARD story](../../../../chronicle/dashboard.md) as evidence
  about the mechanism — a file written only by rituals has no
  author to notice a doubled repaint, and nothing in CI checks the
  board's shape.
- **The canary window may be sized wrong for a fleet.** Stated
  per-lane, spent per-baton-holder; see Pending issues.

## Where to look

- [the spec](../../../../record/specs/chronicle-shelf-3c-surfaces.md) — roster, format,
  and the INDEX prohibition.
- [the format](../../../../record/history/workshop/definition/chronicle-pilot.md)
  — the pilot that settled it, and its honest caveats.
- [the event bend](../../../../record/history/workshop/definition/chronicle-shelf-1.md)
  — slice D's variant for `event` items, and the cold calibration.
- [D-059](../../../../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings.
- [the census](../../../../chronicle/INDEX.md) — READ-ONLY for this bench.
