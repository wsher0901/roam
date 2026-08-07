---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-06 · written · cloud lane
---

# FOUNDATION — the product identity, and the discipline of holding only what cannot expire

> **CURRENT ENDING (2026-08-06).** Standing at v4, six sections and
> 85 lines, holding only sentences a shipped version cannot falsify:
> the Suggest → Plan → Edit spine, an OPEN check-family set (five
> today, not five by definition), the reliability law, the
> quiet-asset dataset, and nine principles. Everything testable was
> moved out to [ROADMAP](../ROADMAP.md) by the lifespan split, and
> the plan-synthesis rules were moved down to
> [ENGINE](../ENGINE.md) by the one-home law — so the file is
> defined as much by what was taken out of it as by what it says.
> Its most-corrected habit was **claiming closure it had not
> earned**: three separate edits opened a set the file had quietly
> shut.

## What it is

The identity file — what Roam is when no version number is attached.
[FOUNDATION](../FOUNDATION.md) answers "what is this product" for a
reader who has never seen the plan, and it is the file every other
product document inherits its scope guards from.

Six sections, and the division is deliberate:

- **What Roam is** — one engine for travel planning, assisting at any
  level of certainty and any level of input; destination is just
  another unknown the engine resolves. Roam STARTS as the pre-trip
  brain, and the boundary moves by roadmap decision, never by drift.
- **The spine** — Suggest → Plan → Edit + revalidate: one loop, three
  exercises of the same engine, no fixed modes. Every change creates
  a new plan version with one-click revert.
- **What Roam checks** — each family is a pluggable check module:
  weather per activity · sky & sea · feasibility · time & transport ·
  crowds & calendar. **Five today, and the set is open.**
- **The reliability law** — never fabricate; every fact is checked; a
  check module ships only when its source is reliable and
  consistently obtainable; anything unverifiable is LABELED
  unverified, never guessed.
- **The dataset — the quiet asset** — every fact fetched or derived
  is stored structured, timestamped, with source and confidence.
- **Principles** — nine of them, including the two that bind hardest:
  the floor input always works (origin + dates is enough), and
  explain everything.

What the file deliberately does NOT hold is the point of its current
shape: no stage plans, no per-version scope, no completion criteria,
and — since
[D-021](../record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
— no plan-synthesis rules.

## What raised it

The blueprint session, and the need for a definition on paper before
a single task branch existed. The founder is a solo builder without a
CS background, so a product that lived only in conversation would have
been unbuildable and unreviewable; the first real artifact of the
project is this file, not code.

The three later rewrites were each raised by a different kind of
honesty problem, and none of them by new features:

1. **Duplication.** The same rules were written in two files, so the
   two could drift.
2. **Expiry.** Sentences that a shipped version could prove wrong were
   sitting in a file whose whole claim was timelessness.
3. **False closure.** The file kept saying "five families", "the
   in-app list", "adding a check never rewrites what exists" — each a
   sentence that shut a door the product wanted open.

## What changed, in order

- **[#7](https://github.com/wsher0901/roam/pull/7) — the product is
  defined on paper**
  ([D-003](../record/DECISIONS.md#d-003--roam-v1-scope) ·
  [D-004](../record/DECISIONS.md#d-004--planning-notation-and-rolling-wave-depth)).
  FOUNDATION becomes the full product definition: the spine, the five
  pluggable check families, the reliability law, the refusals, and the
  quiet-asset dataset. D-003 fixes V1 as one no-modes engine over five
  families, pre-trip only, estimates not live prices, web only —
  explicitly reversing an earlier instinct to cut transport, which was
  re-included as REASONING rather than transactions. D-004 makes
  `Vn.Sm.Tk` the one planning vocabulary, ending the
  v1/MVP/demo/milestone synonym confusion.
- **[#69](https://github.com/wsher0901/roam/pull/69) — the lifespan
  split, and the file loses two things**
  ([D-021](../record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
  ·
  [D-022](../record/DECISIONS.md#d-022--version-ladder-and-lifespan-split)).
  D-021 moves the plan-synthesis rules (preferences-as-defaults,
  constraint priority, warn-don't-block, composition-aware placement,
  staged synthesis, near-peer alternatives, trade-off locking) OUT of
  FOUNDATION and makes [ENGINE](../ENGINE.md) their canonical home —
  the mirror already existed word-for-word, so canonicalizing removed
  a duplication rather than creating a new file. D-022 then draws the
  dividing line the file still lives by: **a sentence a shipped
  version can falsify belongs in [ROADMAP](../ROADMAP.md); a timeless
  sentence stays here.** FOUNDATION shrank to six sections. One
  judgment call from that bench is worth keeping: "never at V1's
  expense" had to become "never at the product's expense", because
  the no-version-numbers gate would not let an identity sentence name
  a version — the rule caught its own author.
- **[#85](https://github.com/wsher0901/roam/pull/85) — v4, four
  honesty repairs**
  ([D-025](../record/DECISIONS.md#d-025--foundation-v4-principles-recut)).
  The lifespan clause stops duplicating a ROADMAP refusal and becomes
  "Roam STARTS as the pre-trip brain — the boundary moves by roadmap
  decision, never by drift". The family header drops "the five
  families": five today, the set is OPEN, and any condition found
  load-bearing enters as a new family by decision. The plug-in
  principle admits its own blast radius — adding a check never
  rewrites what exists, **but every new check re-tunes the rankings,
  by design**. The in-app list opens ("maps, timelines, plans, and
  whatever the product comes to show"). And personalization becomes
  layered — stated > inferred > cohort prior > default — with the new
  cohort layer carried down into
  [ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler), plus the
  guard that category patterns are priors, never pigeonholes, and
  demographic stereotypes never drive. That bench also recorded a
  small trap it set for itself: its own spec quoted an old anchor as a
  literal string, which would have broken its "zero repo-wide
  occurrences" Done-means — reworded rather than granted an exception.

## Where it stands

Current, and current in the strong sense: the file on the branch
today IS the evidence, not a note about it. Six sections, 85 lines,
nine principles, five named check families under an explicitly open
set.

Three properties are worth naming because they are why the file has
needed so few edits since v4.

**It is defined by subtraction.** Two of its three rewrites REMOVED
content — the synthesis rules to ENGINE, the falsifiable sentences to
ROADMAP. A file that only accumulates cannot stay timeless, because
timelessness is a property of what you refuse to write down.

**Its openings are load-bearing, not hedges.** "Five today, the set is
open" is what lets a sixth family arrive as a decision rather than a
contradiction; the same is true of the in-app list and the plug-in
principle's admission that rankings move. The v4 recut is best read as
a single lesson applied four times: **a definition that overstates its
own closure will be falsified by the first ordinary success.**

**Its refusals live elsewhere on purpose.** What Roam will not do in
V1 — booking, payments, live fare scraping, mid-trip, social, mobile —
is in [ROADMAP §V1](../ROADMAP.md#v1--the-demo--active), because each
of those lifts by roadmap edit. Putting them here would have made
every future unlock a change to the product's identity.

The open edge is one the file cannot close by itself: it asserts an
identity that only shipped software can test. The reliability law, the
floor-input promise and the "explain everything" principle are
currently claims about a product whose engine is still on paper —
[V1.S3](../ROADMAP.md#v1s3--engine-core--two-families-deep) is where
they first meet code, and the honest reading is that FOUNDATION is
settled as a DEFINITION and unproven as a DESCRIPTION.

## Sources

Down-links only — this story cites the record and the living files
beneath it, never another story's prose.

- [FOUNDATION](../FOUNDATION.md) — the file itself, the direct
  evidence for the ending above.
- [D-003](../record/DECISIONS.md#d-003--roam-v1-scope) — V1 scope: the
  spine, the five families, the refusals, and the transport reversal.
- [D-004](../record/DECISIONS.md#d-004--planning-notation-and-rolling-wave-depth)
  — the `Vn.Sm.Tk` notation and rolling-wave depth.
- [D-021](../record/DECISIONS.md#d-021--plan-synthesis-principles-re-home)
  — the plan-synthesis rules re-home to ENGINE.
- [D-022](../record/DECISIONS.md#d-022--version-ladder-and-lifespan-split)
  — the lifespan split that defines what may live here.
- [D-025](../record/DECISIONS.md#d-025--foundation-v4-principles-recut)
  — the v4 recut, all four repairs plus the cohort layer.
- [the foundation-v1 story](../record/history/product/definition/foundation-v1.md)
  — [#7](https://github.com/wsher0901/roam/pull/7), the definition
  landing.
- [the foundation-roadmap-recut story](../record/history/product/definition/foundation-roadmap-recut.md)
  — [#69](https://github.com/wsher0901/roam/pull/69), the split and
  the "never at V1's expense" judgment call.
- [the foundation-v4 story](../record/history/product/definition/foundation-v4.md)
  — [#85](https://github.com/wsher0901/roam/pull/85), the recut and
  its self-inflicted anchor wrinkle.
- [ENGINE §2](../ENGINE.md#2-intake--resolve-the-traveler) — where the
  layered personalization order is carried into the pipeline.
