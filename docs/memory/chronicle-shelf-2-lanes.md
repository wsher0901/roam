---
type: memory
id: chronicle-shelf-2-lanes
updated: 2026-08-06 16:31 UTC · completion · cloud lane
---

# chronicle-shelf-2-lanes — Shelf II — the lane system

## Status

complete, awaiting merge — 2026-08-06

All 11 stories written to
[the spec](../record/specs/chronicle-shelf-2-lanes.md)'s format,
the three `event` items on slice D's bend, every ending derived at
write time, `docs/chronicle/INDEX.md` untouched, the full CI mirror
green locally. The ready-flip follows the pushed head's Actions run
going green.

## What this task is

The 11 unwritten stories of **Shelf II — the lane system** —
parallel work and its machinery. One of seven benches flying as a
single fleet under
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../record/specs/chronicle-shelf-2-lanes.md).

## Pending issues

None owed by this bench. Two findings are surfaced for the
baton-holder rather than acted on here, because a lane never writes
the inbox:

- **IDEA — a lane that stands down should have to SAY SO.** The
  lane law's clause 2 requires a terminating lane to push what
  exists; nothing requires it to record what stopped it. Twice
  observed now from two directions: a fenced worker on 2026-08-04
  whose refusal left no server-side trace, and this bench's own two
  predecessors on 2026-08-06 — one stood down loudly, one simply
  stopped, and from origin the two are indistinguishable. Written
  into the ending of
  [the lane law story](../chronicle/lane-law.md).
- **IDEA — the canary window is timed against the wrong actor.**
  The ~10-minute cloud window is generous for a worker and tight
  for a human composing an ack in prose; the fix that worked on the
  third attempt was pre-staging the ack, which is procedure, not
  mechanism. Recorded in
  [the cloud-spawn story](../chronicle/cloud-spawn.md).

## Left / idle

Nothing. Every Done-means box is satisfiable from the branch:

- 11 story files in `docs/chronicle/`, one per roster item.
- The three `event` items (`delegation-maiden-flight`,
  `shakedown-phase-2`, `batch-1-lane-launch`) carry `What it was` ·
  `What happened, in order` · `What it found`.
- No story cites another story's prose; sources are down-links
  only.
- `git diff --name-only origin/main...HEAD` shows no INDEX.

## The story

2026-08-06 14:40 UTC · bench birth · work PC — born bench-first as
one lane of a seven-lane fleet, on the founder's "one fleet — fire
all seven". Two workers were licensed on this bench and neither
wrote a line; the record of both deaths, and the respawn that
followed, is in the commits above this one.

**16:13:39 · the canary, on a respawned bench.** The Status read
`bench ready, no worker yet — RESPAWNED`, which is non-terminal and
belongs to no worker, so the claim was lawful. The ack landed at
16:14:16 — 37 seconds — because it was PRE-STAGED this time rather
than composed after the canary arrived. Matched by anchored prefix
on the Status line as read back from ORIGIN, never from the
session: the claim prose written seconds earlier contains the word
"airborne", so a substring search would have found this lane's own
writing.

**THE ONE CONSTRAINT THAT SHAPED EVERY DERIVATION: this clone is
SHALLOW.** `git rev-list --count HEAD` returns 54 and the earliest
visible commit is 2026-08-04, so `git log` cannot reach anything
older — every file predating that date shows as "new" at its
earliest visible commit. So no ending on this shelf is derived from
git history; all eleven are derived from the record files
themselves (DECISIONS, `record/history/`, the ledger, the living
skills, ROADMAP, IDEAS). Recorded because a later reader
re-deriving these endings from a FULL clone will have a stronger
instrument than this bench had, and should use it.

**ONE CENSUS CELL IS NOW FALSE, and the derivation won.** The
agent-teams cell ends "one road stays uncovered and filed". That
road — the superseded seat that ran no ritual, so a superseded
tower leading a team lost its findings — was closed in two recorded
steps
([D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
then
[D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)),
and its inbox line carries the closed marker. The story says so in
words. Nothing was careless about the cell; the closure simply
happened after it.

**FOUR OTHER CELLS WERE EXTENDED RATHER THAN CONTRADICTED**, each
with the evidence named in the story: the lane law's
self-termination hole (twice observed, unruled); the cloud ladder's
real fragility being TIMING at both ends of the handshake, the
baton-holder's end demonstrated on the day of writing; the
reviewer's coverage bounded by what a ledger line actually proves
(15 of the 20 newest entries narrate a critic round, 37 of all 125
— but a line is written when a round FINDS, so silence is not
absence); and the maiden flight's "the label produced nothing"
re-read in the light of the 2026-08-04 dispatch-latency correction,
which its thirteen-minute watch could not have distinguished.

**THE BATCH-1 STORY GAINED A FINDING NOBODY HAD FILED:** the
double-dispatch pointer dangles PERMANENTLY by construction. The
diagnostic was compacted out of the inbox; two surfaces still cite
it, and neither may be edited — a decision entry (append-only) and
a frozen history (immutable). Verified at write time: the inbox
contains no such entry, and both citations still stand. The only
possible repair is a story saying where it went, which is now
written.

**One correction made mid-flight:** the D-067 citation was first
written from its full title and would have resolved to nothing —
the short-anchor law renamed it, so the heading was read before the
link was trusted. Every other decision anchor on this branch was
checked the same way, against the actual headings.

**THE COST SPLIT, as the spec asks — reported separately and
derived from commit stamps, not recalled.** GATHERING: 16:14:16 →
16:17:13 up front (~3 minutes across the shared sources), plus
about 3 further minutes interleaved for the three `event` items,
whose material lives in per-flight histories rather than the shared
decision spine. WRITING: 16:17:13 → 16:28:11, eleven stories in
~11 minutes. All-in from licence to last story: ~14 minutes, about
**76 seconds per story** — under the fleet's measured ~2-minute
figure, and the reason is structural rather than clever: eleven
stories on ONE shelf share one gathering pass, and Shelf II's
sources are unusually concentrated (one decision spine, one skill
page, one ledger). A shelf whose items were spread across the
corpus would not amortize the same way, so this number should not
be read as a fleet-wide rate. About 28 distinct files were opened.

WHAT MADE IT HARD, in order: the shallow clone (above); anchor
drift after the short-anchor law, which makes any decision citation
written from memory a coin-flip; and the discipline of NOT trusting
census cells that are mostly right — three of the five cells that
needed work read as correct until the underlying record was opened.

## Where to look

- [the spec](../record/specs/chronicle-shelf-2-lanes.md) — roster,
  format, and the INDEX prohibition.
- The 11 stories: [lane-law](../chronicle/lane-law.md) ·
  [lane-liveness](../chronicle/lane-liveness.md) ·
  [fleet-continuity](../chronicle/fleet-continuity.md) ·
  [cloud-spawn](../chronicle/cloud-spawn.md) ·
  [lane-vehicles](../chronicle/lane-vehicles.md) ·
  [hands-doctrine](../chronicle/hands-doctrine.md) ·
  [agent-teams](../chronicle/agent-teams.md) ·
  [reviewer-subagent](../chronicle/reviewer-subagent.md) ·
  [delegation-maiden-flight](../chronicle/delegation-maiden-flight.md)
  · [shakedown-phase-2](../chronicle/shakedown-phase-2.md) ·
  [batch-1-lane-launch](../chronicle/batch-1-lane-launch.md).
- [the format](../record/history/workshop/definition/chronicle-pilot.md)
  — the pilot that settled it ·
  [the event bend](../record/history/workshop/definition/chronicle-shelf-1.md)
  — slice D's variant and the cold calibration.
- [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings ·
  [D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
  — the fleet ruling and the INDEX-at-the-weld clause.
- [the census](../chronicle/INDEX.md) — READ-ONLY for this bench;
  the baton-holder marks these 11 rows at the weld.
