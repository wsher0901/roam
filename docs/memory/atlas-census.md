---
type: memory
id: atlas-census
updated: 2026-07-31 16:51 · ship · work PC
---

# atlas-census — the delivery chain, drawn

## Status

complete, awaiting merge — 2026-07-31, work PC.
[D-071](../record/DECISIONS.md#d-071--atlas-gains-the-enforcement-mesh)
is minted, [ATLAS](../ATLAS.md) carries seven diagrams, and the
new §7 renders the enforcement chain with its honest gaps. ALL
SEVEN MERMAID BLOCKS PARSE against the real grammar (below).
Full CI mirror green. The critic returned eight findings, three
notable, and two of them corrected the DRAWING ITSELF (below).

## What this task is

ATLAS drew six things the workshop DOES and nothing about how any
of it is ENFORCED. Diagram 7 draws the delivery chain from
`CLAUDE.md`'s ambient import to the founder's word, and names the
three joints that are judgment only. Contract:
[the spec](../record/specs/atlas-census.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked.

## The story

Born 2026-07-31 at the work PC.

The enforcement layer is the one part of this workshop that lives
almost entirely OUTSIDE the doc tree — `.claude/`, `.github/`, a
settings file — which makes it the part a session is least able to
discover by reading. Every piece was recorded where it belongs. No
page had ever drawn them as ONE CHAIN, so their interlocks were
invisible.

### The census corrected the census

The standing duty was the verification law pointed at a drawing:
EVERY CLAIM CHECKED AGAINST THE ACTUAL WIRING BEFORE IT IS DRAWN.
Two claims in the mandate did not survive that check, and the
wiring won both times:

- **"CI on every push" IS NOT TRUE.**
  `.github/workflows/ci.yml` fires on `push` to **main** and on
  `pull_request` — so a branch would be uncovered until its PR
  existed. What actually closes that hole is the BENCH-FIRST LAW,
  which gives every task a draft PR in its first minute. THE TWO
  LAWS INTERLOCK, and nothing in the repo said so; the diagram now
  does, in the paragraph beneath it. This is the census's own
  justification — the shape is what was missing, not the pieces.
- **CI runs SEVEN checks, not six.** The mandate's list omitted
  `format:check`. Drawn as it runs: lint · format:check ·
  check:links · check:ledger · check:memory · test · build.

### The critic corrected the drawing twice, and both were real

**THE CASCADE MISSTATED WHEN TWO LAYERS FIRE.** I had drawn
CI → summon → denies as one linear chain. Neither belongs there:
THE DENIES are ambient permission rails evaluated at EVERY TOOL
CALL in every session, and THE SUMMON WORKFLOW is out-of-band — a
cockpit's self-rescue when its connectors are dead, never a step
in delivering a law to an act. Both are now drawn APART from the
cascade and labelled as such. The §7 lead sentence ("every layer
below is a DELIVERY stage") is exactly what made the sequential
reading wrong, and this is the one layer a session cannot
discover by reading.

**A FOURTH GAP SAT AT THE TERMINUS, DRAWN AS IF GATED.** Nothing
mechanical enforces that the external review happened or that the
word was given: the five ritual stubs' merge allowance is
unconditional once a ritual is running, and the deny list blocks
only the `--admin` and `--repo` bypasses. The most load-bearing
node in the whole diagram — "THE FOUNDER'S WORD — the sole merge
authority" — is judgment, and the first draft did not say so. It
does now.

### The gaps are the point as much as the chain

A picture of enforcement invites the belief that everything is
enforced, which is the more expensive error. Each gap in the
dashed box is a real miss this workshop has already paid for:

- **The links gate is destination-blind** — it proves an anchor
  EXISTS, never that it is the RIGHT one. A Needs-you arrow rode a
  real-but-wrong SETUP heading through every green gate at
  [#250](https://github.com/wsher0901/roam/pull/250).
- **Nothing checks the derivation law** — the same bench shipped a
  bar rendering 33 segments for 34 tasks.
- **Board freshness is only ever repaired at a ritual** — between
  rituals the board is stale by design, which is why git outranks
  it.

**AND THE CITATION FOR THEIR PATH FORWARD WAS FALSE.** I pointed
the note at the HARNESS V2 line in [IDEAS](../IDEAS.md), having
verified only that the line EXISTS — which is what the spec asked
for, and not enough. The critic read it: HARNESS V2 names six
hook-event items, and not one is a link-destination check, a
derivation check, or a staleness check. THE SENTENCE ASSERTED
COVERAGE THAT DID NOT EXIST — verify-before-classify, failed on
the exact bench whose subject is honest gaps.

The repair is the one the laws require: a gap named in a diagram
and absent from the inbox is SILENTLY PARKED, so each gap got its
own IDEAS line, per the entry contract, closing per-idea. That is
outside the mandate's file list and is disclosed as a deviation —
the alternative was deleting the honest note, which was the whole
point of drawing it.

### The mermaid was PARSED, not eyeballed

The spec asked for the block to be confirmed rendering. A
structural check (every referenced node declared, no unescaped
brackets) passed first, but that proves shape and not grammar. So
the real parser was run: `mermaid` under `jsdom`, `mermaid.parse()`
on each of the seven blocks — ALL SEVEN PARSE, including §7's
`classDef … stroke-dasharray`, which was the one construct with no
precedent anywhere else on the page. Two dead ends on the way:
`@mermaid-js/parser` handles only the newer langium diagram types
and rejects `flowchart` outright, and `mermaid` alone dies on
`DOMPurify.addHook` without a DOM. Both packages were installed
with `--no-save` and the tree restored with `npm ci` afterwards —
NOTHING WAS ADDED TO THE MANIFEST for a one-time check.

### Every file touched

- **[ATLAS](../ATLAS.md)** — §7 added; the header six → seven; the
  stamp refreshed from the shell clock; diagram 1's Boxes line
  re-homes the verification loop at
  [ship §1](../skills/ship.md#1--preflight) with LAWS kept beside
  it as the law's home; diagrams 3 and 6 gain the baton
  case-table citation.
- **[HOME](../HOME.md)** — the files-table ATLAS row, six →
  seven. One row.
- **[DECISIONS](../record/DECISIONS.md)** — D-071 appended.

### The sweep

Destination-grep for "six diagrams" across the tree. Every
survivor is FROZEN RECORD and correct as written — the
[D-058](../record/DECISIONS.md#d-058--atlas-the-system-spine)
entry's `In full:` line, the atlas bench's
[story](../record/history/workshop/definition/atlas.md) and
[spec](../record/specs/atlas.md) — each recording what was true
when written. NO LIVING FILE says six. NOTHING NEEDED REPOINTING
and no frozen file was touched: the change is additive, and no
anchor was renamed.

## Where to look

- [the spec](../record/specs/atlas-census.md) — the contract.
- [ATLAS §7](../ATLAS.md) — the mesh.
- [D-071](../record/DECISIONS.md#d-071--atlas-gains-the-enforcement-mesh).
- the Web ops chat, 2026-07-31 — where the census was approved.
