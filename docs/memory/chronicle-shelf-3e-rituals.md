---
type: memory
id: chronicle-shelf-3e-rituals
updated: 2026-08-06 15:02 UTC · complete · cloud lane
---

# chronicle-shelf-3e-rituals — Shelf III slice E — the task-loop rituals

## Status

complete, awaiting merge — 2026-08-06

All 4 stories written and pushed; the full CI mirror is green
locally and the branch carries current main (no sync needed).
`docs/chronicle/INDEX.md` is untouched, as
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 requires — the weld marks the rows.

## What this task is

The 4 unwritten stories of **Shelf III slice E — the task-loop rituals** — the rituals that run a sitting. One of seven
benches flying as a single fleet under
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../record/specs/chronicle-shelf-3e-rituals.md).

## Pending issues

**None blocking the merge.** Two findings below are NOT this
bench's to rule and are stated for whoever welds it: the lapsed
Parallel-ready menu, and the writer list that omits
[land](../skills/land.md). Both are main-side surfaces a lane may
not touch.

**One operational finding needs the baton-holder's eyes and is the
most important thing in this file: the ack arrived after the canary
window closed, and this lane had begun a lawful stand-down.** See
the flight log below.

## Left / idle

Nothing. Plan steps 1–3 are done — 4 stories, the endings derived,
and the cost split reported below.

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
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 moved that write to the weld, where
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step already performs it.

**WHAT THIS BENCH INHERITS that the pilot did not have:** a settled
format, an event variant proven by slice D, and a measured figure of
roughly two minutes a story. What it inherits as a WARNING is the
census itself — several cells have been wrong, and one stood stale
for a week and misled two later readers who each stopped at it
without asking whether anything since had closed it. So this bench
derives its endings and lets the derivation win.

2026-08-06 15:02 UTC · COMPLETE · cloud lane — 4 stories written,
the endings derived, three of them contradicting or outrunning their
census cells.

### THE CANARY WINDOW WAS EXCEEDED, AND THIS LANE HAD ALREADY BEGUN
### TO STAND DOWN

**This is the finding that matters most, because it nearly cost the
bench.** The timestamps are git's, not recalled:

| Act | Time (UTC) | Commit |
|---|---|---|
| bench birth | 14:39:38 | `dd26090` |
| canary claim | 14:42:23 | `7093cf2` |
| lane's window closes (~10 min, cloud) | ~14:52 | — |
| **airborne ack** | **14:54:21** | `db21958` |

**The ack landed 11m58s after the canary** —
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
sets the window at ~10 minutes for cloud, so the licence arrived
about two minutes after this lane was obliged to give up. It had
given up: the stand-down was written — Status `failed — no airborne
ack within the canary window` — and was seconds from being committed
and pushed when the container restarted and discarded the
uncommitted edit. **The restart is the only reason this bench is not
sitting on origin marked `failed` right now**, and `failed` is
TERMINAL, so the next reader would have judged a healthy,
fully-licensed bench reclaimable.

**The cause is structural, not a slip, and it will repeat.** Seven
lanes were fired as one fleet and one baton-holder acks them
serially. The window is measured per-lane from each canary, but the
acks are drained from a single queue — so the LAST lane's wait is
roughly the whole fleet's ack time, while its budget is the same ~10
minutes the constant gives a solo flight. This bench's PR is
[#335](https://github.com/wsher0901/roam/pull/335), sixth of the
seven created. **Any fleet larger than the window divided by the
per-ack cost will strand its tail**, and the lanes it strands will
be the ones that did nothing wrong.

Worth noting precisely because the record already knows the adjacent
failure: [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
documents an em-dash near-miss and a message-shaped false ack, both
about the ack's FORM. This is the first recorded instance of the
ack's TIMING failing, and the anchored match worked perfectly — the
token was exact and was read from origin, it was simply late.

**Not ruled here.** Whether the constant rises, whether it scales
with fleet size, or whether the baton-holder acks before firing the
next lane is a
[decide](../skills/decide.md)-level call on a shared constant, and a
lane may not take it.

A second, smaller note from the same episode: a redelivered
`pull_request.labeled` webhook arrived mid-wait citing head SHA
`dd26090`, one commit stale. The wake-lock handled it exactly as
designed — Status re-read from origin, the lane's own claim
recognised, no re-canary, no second worker. That path continues to
work.

### THE COST SPLIT (plan step 3)

Reported separately as the spec demands, and the figures are wall
clock:

- **GATHERING — ~4 minutes for all four stories (~1 min/story),
  and it cost ZERO marginal wall-clock**, because it ran entirely
  inside the mandated canary wait. A lane must wait anyway; reading
  sources is the one thing it can lawfully do while waiting, since
  no commit is involved.
- **WRITING — 4m35s for all four (14:55:17 → 14:59:52), ≈1m09s per
  story.**
- **ALL-IN ≈2m10s per story**, against
  [D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)'s
  ≈1m50s. Close, and slightly over.
- **The split inverts slice D's.** Measured cold, slice D found
  writing dominating gathering roughly 60/40. Here gathering and
  writing were near parity in raw minutes — but the honest reading
  is that **this slice's gathering was unusually cheap**, and
  [D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
  predicted exactly why: source-sharing INSIDE a slice is real and
  large. Ship and pickup are siblings in four of the same benches
  ([the workflow kit](../record/history/workshop/mechanism/workflow-kit.md),
  [the ritual engine](../record/history/workshop/mechanism/ritual-engine-v2.md),
  [live counts](../record/history/workshop/mechanism/ritual-live-counts.md),
  [the report skeleton](../record/history/workshop/definition/report-shapes.md))
  and share
  [D-052](../record/DECISIONS.md#d-052--response-doctrine)
  wholesale; the pacing law and the micro-PR carve-out are two
  decisions each. **Do not scale this number to a slice whose items
  do not share sources** — the same caveat slice D's lane attached
  to its own figure, and the reason Shelf IV takes its own
  calibration.

### WHAT THE DERIVATION FOUND, and it beat the cells three times

The spec ordered endings derived at write time with the derivation
winning. It won three times:

1. **The pacing law's amendment has lapsed.**
   [D-016](../record/DECISIONS.md#d-016--parallel-ready-menu) rules
   that every briefing and completion ALWAYS appends a
   "Parallel-ready:" list. **That string appears nowhere in the
   living system** — not in `docs/skills/`, [LAWS](../LAWS.md),
   [HOME](../HOME.md), [SETUP](../SETUP.md),
   [ROADMAP](../ROADMAP.md), [ATLAS](../ATLAS.md) or
   [DASHBOARD](../DASHBOARD.md); it survives only in
   [DECISIONS](../record/DECISIONS.md), one frozen history file, and
   census spans. Proven by a re-run returning zero, per the sweep
   law. The rituals render the CAP and not the MENU. Nothing
   repealed it — the report-shape rewrite simply drew six new
   templates without it.
2. **The micro-PR writer list omits [land](../skills/land.md).**
   Both homes — [LAWS](../LAWS.md#workflow-non-negotiable) and
   [HOME §Micro-PRs](../HOME.md#micro-prs) — enumerate handoff,
   liftoff, ship's tail and pickup's stale-repaint. Land ships a
   board micro-PR in BOTH modes and says so three times in its own
   text. Nothing is broken (land's are board-only and
   ritual-written, so every safety condition holds); two
   enumerations simply claim to be exhaustive and are not.
3. **Pickup's repaint-if-stale is an open defect, not a feature.**
   The cell lists it flatly among the steps. The board itself
   carries the erratum: on 2026-08-06 a seat judged the board fresh
   because the git state matched, which was true of the fleet and
   false of the baton, and the board read "No live seat" for a whole
   sitting.

Findings 1 and 2 are recorded in their stories and nowhere else a
lane may write. **Both are inbox-shaped** — a lane may not touch
[IDEAS](../IDEAS.md), so they ride the PR and this memory to the
baton-holder.

### ENDING CLASSIFICATION, honestly

None of the four items is SETTLED in
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s
sense, and the stories say so rather than implying closure. Ship and
pickup each carry named, open, filed defects; the pacing law carries
an unruled lapse; the micro-PR carve-out carries a stale writer
list. That is a real state of affairs, not hedging — these four
items are, as
[the slice note](../record/specs/chronicle-shelf-1.md) predicted,
the ones touched most constantly, and this slice was ruled to go
LAST for exactly that reason before the founder's "one fleet" fired
it concurrently.

## Where to look

- [the spec](../record/specs/chronicle-shelf-3e-rituals.md) — roster, format,
  and the INDEX prohibition.
- [the format](../record/history/workshop/definition/chronicle-pilot.md)
  — the pilot that settled it, and its honest caveats.
- [the event bend](../record/history/workshop/definition/chronicle-shelf-1.md)
  — slice D's variant for `event` items, and the cold calibration.
- [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings.
- [the census](../chronicle/INDEX.md) — READ-ONLY for this bench.
