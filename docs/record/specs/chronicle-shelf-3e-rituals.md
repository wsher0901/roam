---
type: spec
id: chronicle-shelf-3e-rituals
title: Shelf III slice E — the task-loop rituals — the chronicle stories
status: open
stage: workshop
branch: docs/chronicle-shelf-3e-rituals
pr: —
opened: 2026-08-06
shipped: —
---

# chronicle-shelf-3e-rituals — Shelf III slice E — the task-loop rituals

**Links:** [D-078](../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
· [D-059](../DECISIONS.md#d-059--the-chronicle-layer) ·
[the census](../../chronicle/INDEX.md) ·
[the format](../history/workshop/definition/chronicle-pilot.md) ·
[the event bend](../history/workshop/definition/chronicle-shelf-1.md)

## Goal

Write the **4 unwritten stories** of Shelf III slice E — the task-loop rituals — the rituals that run a sitting.

One of seven benches flying as a single fleet under
[D-078](../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

⚠ **THIS SLICE WAS RULED TO GO LAST AND IS FLYING CONCURRENTLY.**
[D-078](../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 1 put slice E last of the six, because its four items are
touched constantly and were worth writing once the format stopped
moving. The founder's "one fleet — fire all seven" supersedes
that ordering. IT IS DEFENSIBLE NOW AND WAS NOT WHEN D-078 WAS
CUT: the format has since been exercised by the pilot, bent and
documented for events by slice D, and put through three
incorporations by ship §7's synthesis step. THE RISK IS REAL
THOUGH — these four items are the ones most likely to change
next, so this slice is the most likely to need incorporation
soonest. That is a cost, not a defect.

## The roster

1. **ship — the closing ritual (lead-added)** — `system piece`
2. **pickup — the sit-down briefing (lead-added)** — `system piece`
3. **the pacing law (lead-added)** — `system piece`
4. **the micro-PR carve-out (lead-added)** — `system piece`

## THE ONE RULE THAT MAKES THIS FLEET LAWFUL

**DO NOT WRITE `docs/chronicle/INDEX.md`. Not one cell.**

Six sibling lanes are flying beside this one, and the lane law
forbids siblings sharing a file so that merges cannot collide BY
CONSTRUCTION. The INDEX is the only file every slice would otherwise
touch, so
[D-078](../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 moved that write to the WELD, where
[ship §7](../../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step already performs it. **The baton-holder marks your
rows written. You write story files and your own memory, and nothing
else.**

## Out of scope

- **The INDEX** (above), [DASHBOARD](../../DASHBOARD.md),
  [IDEAS](../../IDEAS.md), [ROADMAP](../../ROADMAP.md), `record/`,
  `history/`, and any sibling slice's stories. The lane law's two
  prohibitions apply whole.
- **Merging, ticking, harvesting.** Speak through the PR and stop.
  Ideas go in your own memory under *Ideas surfaced*.

## Plan

### 1 · Write the stories, to the settled format

One file per story in `docs/chronicle/`, named for its item:

```text
frontmatter: type: chronicle-story · shelf · status: living · updated
# <item> — <one line saying what it is>
> **CURRENT ENDING (<date>).** <one blockquoted paragraph>
## What it is
## What raised it
## What changed, in order        ← the spine, ONE BULLET PER EVENT
## Where it stands               ← or a named variant
## Sources                       ← DOWN-LINKS ONLY
```

**THE ENDING GOES FIRST, IN A BLOCKQUOTE**, because
[D-059](../DECISIONS.md#d-059--the-chronicle-layer)'s ending rule
only works if a later weld can find the rewrite point without
reading the story.

**FOR AN `event` ITEM, slice D's bend applies and is not optional:**
`## What it is` becomes `## What it was`, the spine becomes
`## What happened, in order`, and it earns a `## What it found` —
because a flight's or an audit's product IS its findings, and a
chronology buries them. A system piece's ending is a current state;
an event's is a closed verdict plus that verdict's shelf life.

**DOWN-LINKS ONLY**
([D-059](../DECISIONS.md#d-059--the-chronicle-layer) ruling 5): a
story never cites another story's prose. Cite decide anchors,
skills, probes, the ledger.

### 2 · Derive every ending AT WRITE TIME

From the record, never from the census cell. **The census cells are
dated and several have been wrong** — one stood stale for a week and
misled two later readers, each of whom stopped at it without asking
whether anything later had closed it. If your derivation contradicts
the cell, THE DERIVATION WINS and your story says so in words.

### 3 · Measure

Per story: sources opened, wall-clock, what made it hard. Report
GATHERING and WRITING separately.

## Done means

- [ ] 4 story files exist in `docs/chronicle/`, one per roster
      item, in the format above.
- [ ] Every `event` item uses the event variant.
- [ ] Every ending is DERIVED at write time; any contradiction with
      a census cell is stated in the story.
- [ ] No story cites another story's prose.
- [ ] **`docs/chronicle/INDEX.md` IS UNTOUCHED BY THIS BRANCH** —
      checkable with `git diff --name-only`.
- [ ] The memory reports the cost split.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Notes for whoever flies this bench

You are one of seven. Coldness is not required here — the
calibration is done — but INDEPENDENCE is: derive the endings
yourself rather than trusting the cells, because that is where the
last three errors lived.
