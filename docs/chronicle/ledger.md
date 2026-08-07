---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The ledger and its integrity gate

> **CURRENT ENDING (2026-08-06).** A CI-guarded one-to-one bijection
> between the shipped stories and their index, keyed on the trailing
> `· #<pr>`: a dropped line or an orphaned one turns the build red
> instead of leaving a silent gap. **Derived at write time:
> `npm run check:ledger` reports 125 history files ↔ 125 ledger
> lines, in sync.** The join key is the PR NUMBER rather than the
> slug, and that choice is the whole reason the gate could be
> retrofitted to an archive that already existed — the oldest ledger
> lines predate slugs entirely, so a slug-keyed gate would have had
> to rewrite the frozen record to run at all. **The limit to state
> honestly: the gate proves the PAIRING, never the PROSE.** A ledger
> line whose narrative is wrong is, to this checker, perfectly
> green.

## What it is

Two halves, and — as with the workshop's other gates — only the pair
is worth anything.

**The ledger** — the `## The ledger` section of
[`docs/record/history/README.md`](../record/history/README.md#the-ledger):
the full chronology across all four quadrant doors, newest first,
one line prepended by every weld. Each line carries the date (and,
from [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2)
onward, the time), a slug, a prose summary of what shipped, and a
trailing `→ <quadrant> · #<pr>`. Frozen pre-[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2)
lines carry date only and no slug.

**The gate** —
[`scripts/check-ledger.mjs`](../../scripts/check-ledger.mjs), 162
lines and zero dependencies. It walks every `.md` under
`docs/record/history/` except the README, reads each file's `pr:`
frontmatter, parses the ledger's list items, and proves the two
sets are in bijection. It fails, listing each case, on: a history
file whose PR has no ledger line (**the drop**); a ledger line whose
PR has no file (**an orphan**); a line with no trailing `#PR`; a
quadrant that is not one of the four legend doors; a quadrant or
slug that disagrees with the file's own path; or a duplicate on
either side.

**The join key is the trailing `· #<pr>`**, and the script's own
header says why: the pre-slug frozen lines carry no slug, so the PR
number is the only identifier both sides have always had. Where a
line DOES carry a slug, the slug and quadrant must AGREE with the
file — so the modern shape is checked more strictly than the old
one, without the old one needing to be rewritten.

## What raised it

A silent gap is the failure mode that a chronology cannot survive
and cannot detect.

The weld is one commit doing several things at once — tick the
ROADMAP box, move the memory into its quadrant, finalize the spec,
prepend the ledger line. Any of those steps can be missed by a
tired seat, but four of them fail LOUDLY: an untouched checkbox is
visible on the board, a memory left in `docs/memory/` shows up in
the next session's sweep, a spec without its shipped stamp reads
wrong. **The missing ledger line is the one that fails silently.**
Nothing downstream reads it, nothing breaks, and the story is still
there on disk — the only casualty is that the chronology no longer
lists it, and the way you find that out is by needing the line and
not finding it, months later.

The mirror case is an orphan: a line pointing at a file that was
moved or renamed without it. Same silence, opposite direction.

## What changed, in order

- **[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) —
  the ledger becomes a DUTY** (landed in
  [#110](https://github.com/wsher0901/roam/pull/110), 2026-07-13).
  State surfaces v2 rules that ship's weld stamps `shipped: <date
  HH:MM>` and appends one ledger line. The entry's stated reason for
  the time stamp is small and concrete: date-only frontmatter hid
  same-day chronology. It also refuses to backfill times into frozen
  stories, on the grounds that doing so invents data — which is why
  the ledger has two line shapes to this day, and why the gate had
  to be written to accept both.
- **[#140](https://github.com/wsher0901/roam/pull/140) (2026-07-16)
  — the duty becomes a GATE.** `check:ledger` is born, proving the
  bijection by `#PR`, together with a
  [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)
  weld-staging line so the line is written as part of the atomic
  commit rather than after it. The ledger line for this bench states
  its own purpose exactly: "so a dropped or orphaned ledger line
  turns the build red instead of leaving a silent gap."
- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  walker's root moves.** When the frozen surfaces gather under
  `docs/record/`, the gate follows: its `historyDir` becomes
  `docs/record/history`, named explicitly in the decide's Affects
  list alongside the other machinery the move touched.

**One census correction, stated because the rule is derive rather
than copy.** The census span cell for this item reads
"[D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) →
#138/#139 → #140 →
[D-057](../record/DECISIONS.md#d-057--the-record-shelf)". Checked
against the record at write time, **the ledger holds no line for
#139 at all, and #138's line is `cap-confirm`** — the Max routine
cap firmed to confirmed fact, which has nothing to do with this
item. A PR with no ledger line is not an anomaly here: micro-PRs
merge without producing a history file by design, so they never earn
one. The spine above therefore cites what the record actually
carries — [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2),
[#140](https://github.com/wsher0901/roam/pull/140) and
[D-057](../record/DECISIONS.md#d-057--the-record-shelf) — and drops
the two numbers it cannot confirm.

## Where it stands

Live and green: **125 history files ↔ 125 ledger lines, in sync**,
derived by running the gate on this branch's tip rather than read
off a cell.

The design property worth naming is that this gate is
**retrofittable**, and that it stayed so on purpose. It was written
years-of-commits after the archive it checks, over a corpus with two
incompatible line shapes, and it runs green over both because it
keys on the one field every line has ever carried. The stricter
checks — slug agreement, quadrant agreement — apply only where the
data supports them. That is the general shape of a gate that can be
added to a living system: **check the invariant everything shares,
and check the richer invariant only where it exists.**

**The limit, stated plainly.** The bijection proves that every
shipped story has exactly one line and every line has exactly one
story, that the quadrants agree, and that no duplicates exist. It
proves NOTHING about what a line says. A ledger line that
misdescribes its own PR, cites the wrong decide, or claims an
outcome the bench did not reach passes green — the prose is
defended by the weld's author and by review, exactly as with the
narrative layer it indexes. The gate keeps the chronology
COMPLETE; it does not keep it TRUE.

## Sources

Down-links only.

- [the ledger and the four doors](../record/history/README.md) — the
  quadrant legend and the chronology itself.
- [`scripts/check-ledger.mjs`](../../scripts/check-ledger.mjs) — the
  gate, whose header states the join-key reasoning and enumerates
  every failure case.
- [D-035](../record/DECISIONS.md#d-035--state-surfaces-v2) — welds
  stamp time and write the ledger; the refusal to backfill times.
- [D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  record shelf move, which relocated the walker's root.
- [the ledger-integrity bench](../record/history/workshop/mechanism/ledger-integrity.md)
  — [#140](https://github.com/wsher0901/roam/pull/140), the gate's
  own bench.
- [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) — the
  weld that prepends the line, staged in the atomic commit.
- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) — the
  derivation law this story's count obeys.
