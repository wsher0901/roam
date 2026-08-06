---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The corpus writing laws — readability-first, links below

> **CURRENT ENDING (2026-08-06).** Two laws govern every living
> markdown file: READABILITY-FIRST — each is written for the
> founder's reading first, bounded only by material cost to Claude's
> parsing, of which none was identified — and LINKS-BELOW, which
> keeps markdown links out of sentences and gathers them under the
> text as a `Sources:` block in a literal format. Frozen records are
> exempt beyond link repairs, and migration ran by RATCHET rather
> than big-bang: the law bound all new text at once, each living
> file was restyled when the ops leg reached it, and
> [#121](https://github.com/wsher0901/roam/pull/121)'s leg-end sweep
> caught the remainder. **The census cell for this item is
> ACCURATE** — complete and standing, with its three exceptions
> exactly where it says they are.

## What it is

A house style with a stated bias: when the founder's reading comfort
and the model's convenience disagree, the founder wins.

That bias is not assumed, it is argued. The law's own justification
records that no material parsing cost to Claude was identified — so
the trade it describes is, in practice, a trade against nothing. The
founder reads these files daily; mid-sentence link anchors tax that
reading and buy nothing back.

The links-below law is the operative half, and it is unusually
literal about format:

```
Sources:
[label](target)
[label](target)
```

One reference per line, no separators, no trailing periods. A style
rule specified to that resolution is a style rule that can be
checked rather than debated.

## What raised it

The founder flagged inline links twice.

That is the same trigger shape that produced
[the routing law](../record/DECISIONS.md#d-036--information-routing-one-home-per-class)
— a thing raised once is a preference, and a thing raised twice is a
missing rule. The workshop has treated the second mention as the
signal consistently enough that it is fair to call it a habit.

## What changed, in order

- **[D-029](../record/DECISIONS.md#d-029--corpus-writing-laws) — the
  two laws are stated, with their exceptions and their migration
  plan.** Readability-first and links-below; frozen records exempt
  (link repairs only, per the retroactivity law's frozen class) with
  NEW DECISIONS entries bound by the law; and migration by ratchet.
  The sanctioned inline exceptions are named at mint: table cells ·
  trailing `->` refs on ROADMAP task lines · the CLAUDE.md import
  stub · trailing same-sentence refs where a Sources block would be
  heavier than the single link.
- **The alternative that was rejected, and why it matters.** A
  big-bang restyle PR was considered and refused for front-loading
  risk with zero functional gain. The ratchet was chosen instead —
  bind new text now, restyle each file as the leg reaches it, sweep
  the remainder at leg end. The PR carrying the entry demonstrated
  the format in [SETUP.md](../SETUP.md) rather than merely
  describing it.
- **[#121](https://github.com/wsher0901/roam/pull/121) — the leg-end
  sweep, and two more exceptions earned in contact with real
  files.** Every living doc gets its links below the prose. The
  sweep discovered that two file classes could not take the law as
  written, and both were granted named exemptions rather than
  fudged: **(a) LAWS is COMMAND-CLASS** — its functional pointer
  links stay inline, because a command that sends you hunting for
  its target is a worse command; **(b) HOME's Terms entries are
  GLOSSARY-CLASS** — definition lines keep their inline links,
  because a glossary row IS its reference.

## Where it stands

Complete and standing, and quiet since — which for a style law is
the success condition rather than a warning sign.

Its interesting property is how the exception list was built. Four
exceptions were reasoned out at mint, in the abstract; two more were
discovered by running the sweep and finding files where the rule
produced a worse document. Both kinds are on record with their
reasons, and neither was handled by quietly leaving files alone. **A
style law with six named exceptions and no silent ones is stronger
than a style law with two exceptions and a set of files everyone
knows to skip.**

This is the one item in this slice whose census cell needed no
correction. It reads "complete and standing, exceptions on record
(LAWS command-class, Terms glossary-class, tables inline)", and the
derivation confirms every clause: the classes are named in
[the sweep's own record](../record/history/workshop/definition/restyle-sweep.md)
under exactly those words, and nothing since has amended D-029.

Worth noting for a later weld: the law binds LIVING files, and the
chronicle layer is a living surface born after it. These stories
follow it — prose above, a Sources block below — which is why the
format section of the story spec ends where it does.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [D-029](../record/DECISIONS.md#d-029--corpus-writing-laws) — the
  two laws, the four minted exceptions, and the ratchet.
- [restyle-sweep](../record/history/workshop/definition/restyle-sweep.md)
  — the leg-end sweep, and the two exceptions it earned.
- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) — the
  weave rule the links-below law operates beside.
- [SETUP](../SETUP.md) — the file that demonstrated the format in
  the minting PR.
- Span cited by the census:
  [#121](https://github.com/wsher0901/roam/pull/121).
