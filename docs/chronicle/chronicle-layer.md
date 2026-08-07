---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The chronicle layer — living stories above the record

> **CURRENT ENDING (2026-08-06).** The layer as shipped is the
> design, settled on the founder's confirmation 2026-07-28, and it
> has since ADVANCED four times without its rules changing: the
> first stories exist, the ending rule is performed by a ritual
> instead of remembered, a cold bench measured what a story costs,
> and the census's remaining rows were re-ruled against that number.
> **Derived at write time from `origin/main`: `docs/chronicle/`
> holds 11 stories plus its INDEX, against 66 census rows — so 55
> remain proposals.** That agrees with the census cell rather than
> contradicting it, which is worth saying since the instruction here
> is always to derive. **What the cell cannot know is that seven
> slice benches are in flight AS THIS IS WRITTEN — this story's own
> bench among them — which would close the census entirely if all
> seven weld.** The live limit: the ending rule's whole value rests
> on [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)
> firing at the right moment, and its SETTLED branch had still not
> fired after three welds.

## What it is

A living layer ABOVE the frozen record, governed by six rulings
recorded in
[D-059](../record/DECISIONS.md#d-059--the-chronicle-layer):

1. **UNIT — one living story per ITEM**: an event, a system piece
   (skill, command, instruction, architecture, workflow), or a Roam
   piece. Each story tells the item · the events that raised it ·
   the changes in order · what it ended up as.
2. **THE ENDING RULE** — settled in ANY format means the story is
   written; a later fix to the same item is INCORPORATED into the
   existing story and its ending rewritten at that weld, never a
   second story. Retirement is a settlement like any other.
3. **STRUCTURE** — `docs/chronicle/`, one file per story, with
   [INDEX.md](INDEX.md) shelving them across four shelves: the away
   surface · the lane system · the information system · Roam.
4. **IMMUTABILITY BENEATH** — `record/` stays untouched; stories
   link DOWN into it as footnotes.
5. **DOWN-LINKS ONLY** — a story never cites another story's prose;
   cross-references ride decide anchors and ledger lines.
6. **SUPERSEDES** the three-chapter shape queued in
   [IDEAS](../IDEAS.md) on 2026-07-23.

To that, the pilot added the format's one load-bearing choice: **the
ending goes FIRST, in a blockquote.** Ruling 2 only works if a later
weld can find the rewrite point without reading the story.

## What raised it

One sentence from the decide carries it: **the record is complete
and tells no thread.**

git holds every diff, [history/](../record/history/README.md) every
shipped narrative, [DECISIONS](../record/DECISIONS.md) every choice.
Between them nothing is missing. But a reader who asks "what is the
cockpit, and how did it come to work this way?" must reassemble the
answer out of a dozen frozen files — and must do it AGAIN next time,
because the reassembly is thrown away each time it is performed.

The design's cleverness is in the UNIT. One story per item, not per
chapter, is what makes the rewrite duty tractable: **an item can
SETTLE; a chapter never does.** The rejected three-chapter shape
would have fired a whole-chapter rewrite at every weld. And the
ending rule is what lets a living layer sit on a frozen one without
ever touching it: because every story names its CURRENT ending in
one findable place, a later weld has exactly one spot to rewrite.

The two prohibitions protect that property. Stories citing each
other's prose would COUPLE their rewrites and destroy
one-place-to-rewrite; decide anchors and ledger lines are stable
where story prose is not.

## What changed, in order

- **[#233](https://github.com/wsher0901/roam/pull/233) (2026-07-27)
  — the layer is decided, and NO story is written.** The bench
  births [INDEX.md](INDEX.md) as a DRAFT CENSUS for the founder's
  veto — the proposed story per item, each with span, a
  one-sentence ending, and a confidence — and deliberately writes
  nothing else, because a story written before its item is
  confirmed is work a veto would discard. It was also the
  workshop's first agent-team use: three read-only teammates, one
  shelf each, the lead reading the Roam shelf. Endings the record
  could not derive were marked "founder input owed" rather than
  guessed — nine of them.
- **[#236](https://github.com/wsher0901/roam/pull/236) (2026-07-28)
  — the nine owed endings are answered**, three of them recording
  UNCERTAINTY as the settled state because that is what the answer
  was. The layer itself settled at the same moment and took its own
  Shelf III row, restamping the census 65 → 66.
- **[D-076](../record/DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
  · [#318](https://github.com/wsher0901/roam/pull/318) (2026-08-05)
  — the pilot: the first three stories ever written.** Offered "all
  66 or the load-bearing dozen", the founder took neither and
  ordered a PILOT OF THREE, chosen to be UNLIKE each other rather
  than important — one absorbing brand-new evidence, one whose
  census ending was FALSE, one carrying a live unresolved defect —
  so the format met its hard cases before scale was chosen. Its
  most durable output is its honesty about its own measurement: the
  ~2–3 minutes per story was labelled a FLOOR, measured by a
  session already saturated in all three subjects, with the
  confound named and the falsifier stated.
- **[#320](https://github.com/wsher0901/roam/pull/320) (2026-08-05)
  — the ending rule stops depending on a seat's memory.** Ruling 2
  assigned the incorporate-at-the-weld duty and
  [HOME](../HOME.md#where-information-goes) named THE WELD as the
  chronicle's writer — but [ship](../skills/ship.md) carried no such
  step, so **the duty was assigned by a table and performed by
  nobody.** The pilot had just shown the cost of that: a census row
  reading "no recorded run" for a ritual that had run four times.
  §7's atomic weld now names the items it changed and lands each in
  one of three cases, sitting IN the atomic commit rather than the
  tail — because a story whose ending lags its own ledger line is
  precisely the staleness the layer exists to end.
- **[D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
  · [#322](https://github.com/wsher0901/roam/pull/322) (2026-08-05)
  — the first shelf bench, flown cold, and the calibration
  overturned the pilot's headline.** Measured cold, WRITING
  dominates GATHERING roughly 60/40 — the reverse of the pilot's
  inference. The same ruling inverted the settle-weld design using
  the pilot's own finding: the seat that just settled an item has
  already gathered what its story needs, so it is the cheapest seat
  that will ever exist for that story, and deferring the write does
  not save the cost — it pays it twice. That bench also wrote the
  first two EVENT stories and bent the format for them: `## What it
  is` becomes `## What it was`, the spine becomes `## What happened,
  in order`, and each earns `## What it found`, because an audit's
  product IS its findings and a chronology buries them.
- **[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
  (2026-08-05) — the 55 re-ruled on the cold number, and the clause
  nobody had noticed.** 46 stories fly as six slice benches at the
  measured figure; Shelf IV (9) does not inherit it and takes its
  own calibration, because the measuring lane refused to scale its
  number onto sources it had not worked. **Clause 3 is the one that
  makes the fleet exist:** every slice bench so far had written
  `docs/chronicle/INDEX.md`, and the lane law forbids siblings
  sharing a file so merges cannot collide by construction — so
  seven concurrent lanes would have been UNLAWFUL. Moving the INDEX
  write to the weld, where §7's synthesis step already performs it,
  costs nothing and makes concurrency legal. It was found by
  checking the planned benches for shared files, not by hitting the
  first collision.
- **[#324](https://github.com/wsher0901/roam/pull/324) (2026-08-06)
  — the synthesis step gains a one-read test**, after its
  settled-vs-advanced question was found to give opposite verdicts
  on the uncertain case and to count unticked Done-means boxes as
  owed work — which, since unticked boxes are the norm, would have
  answered ADVANCED for every item and made the settled branch
  unreachable.

## Where it stands

Settled in its RULES, and moving fast in its COVERAGE.

**Derived at write time from `origin/main`: 11 stories plus the
INDEX in `docs/chronicle/`, against 66 census rows — 55 proposals.**
The census cell for this row says the same ("Eleven of 66 written;
55 remain proposals"), so here the derivation CONFIRMS the cell
rather than correcting it. It is still derived: a cell that happens
to be right is indistinguishable, from the outside, from one that
has gone stale, and the only way to tell is to recompute.

**What the cell could not know.** It was written 2026-08-05, before
[D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)'s
fleet fired. As this story is written, SEVEN SLICE BENCHES ARE IN
FLIGHT CONCURRENTLY — and this story is being written by one of
them, about the layer it belongs to. If all seven weld, the census
closes but for Shelf IV's own calibration. That is a fact about
right now, not a prediction, and a later reader should re-derive it
rather than trust this paragraph's tense.

**This bench is also clause 3's live proof.** Seven lanes are
lawful only because none of them writes the INDEX; the rule reached
this lane as a ⚠ block in its own airborne ack, repeated there
because it is the single thing seven concurrent lanes can get
wrong. The corresponding cost is real and worth recording: the
baton-holder now owes seven INDEX updates at seven welds, and the
census rows for these stories stay "proposals" until each weld marks
them written.

**The live limit.** The layer's central property — one findable
place to rewrite — is only as good as the ritual that performs the
rewrite, and that ritual is young. Its step has been repaired three
times in as many benches, and by
[#324](https://github.com/wsher0901/roam/pull/324)'s own account
**the SETTLED branch had still not fired after three welds.** A
branch that has never executed is not evidence of correctness; it is
an untested path in the one mechanism the ending rule depends on.
The other limit is quieter: the ending rule fires at WELDS, so an
item that settles somewhere other than a weld — in a conversation,
in a founder ruling recorded elsewhere — has no moment that
obliges anyone to rewrite its story.

## Sources

Down-links only — this story cites decides, ledger lines, the
census and the rituals, never another story's prose.

- [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) — the
  six rulings, the why, and the rejected alternatives that explain
  the unit and the two prohibitions.
- [D-076](../record/DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
  — the pilot, and why a format is tested on trivial cargo.
- [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
  — shelf benches, calibration first, and the settling weld writes.
- [D-078](../record/DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
  — the 55 re-ruled, Shelf IV's exemption, and clause 3.
- [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the three-phase order this layer's work is phase 2 of.
- [the census](INDEX.md) — the 66 rows, their spans and confidences.
- [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) — the
  synthesis step that performs the ending rule.
- [HOME §Where information goes](../HOME.md#where-information-goes)
  — the routing row naming the weld as the chronicle's writer.
- [the chronicle-layer bench](../record/history/workshop/definition/chronicle-layer.md)
  · [the answering bench](../record/history/workshop/definition/chronicle-answers.md)
  · [the pilot](../record/history/workshop/definition/chronicle-pilot.md)
  · [the first shelf bench](../record/history/workshop/definition/chronicle-shelf-1.md)
  — [#233](https://github.com/wsher0901/roam/pull/233),
  [#236](https://github.com/wsher0901/roam/pull/236),
  [#318](https://github.com/wsher0901/roam/pull/318) and
  [#322](https://github.com/wsher0901/roam/pull/322) as flown.
- [parallel-lanes §The lane law](../skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)
  — the no-shared-file clause clause 3 answers.
