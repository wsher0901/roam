---
type: memory
id: atlas-clean
updated: 2026-08-03 13:55 · payload complete · work PC
---
# atlas-clean — the no-scroll law, and the two missing chains

## Status

complete, awaiting merge — 2026-08-03, work PC.
[D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law) is
minted, [ATLAS](../ATLAS.md)'s header carries THE RENDERING LAW,
all seven existing diagrams are rewrapped under it, and the two
missing chains are drawn — diagram 1's intake band and the new §8,
a sitting. THE WIDTH PROOF RETURNS ZERO VIOLATIONS across 8 blocks
and 140 labels; ALL EIGHT MERMAID BLOCKS PARSE against the real
grammar. Full CI mirror green.

## What this task is

[ATLAS](../ATLAS.md)'s node labels carried sentences, so its
diagrams rendered wider than a screen and the page could not be
read as a shape. This bench writes the fix down as a law in
ATLAS's own header — top-down only, and a node label is a NAME
never a sentence — brings all seven existing diagrams under it,
and closes two coverage gaps. Contract:
[the spec](../record/specs/atlas-clean.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked.

## The story

Opened 2026-08-03 at the work PC on the founder's approved mandate
from the 2026-07-31 Web ops chat. Drawing the enforcement mesh one
bench earlier is what made the width problem undeniable: §7's
judgment-only box was a single label of 340 characters, written by
this workshop days ago.

### The cap is a law, not a tidy-up

The mandate could have been read as "wrap the long ones". It was
written instead as a rule in the header, because the page had
already drifted into this state once and a convention nobody can
cite loses to the next author's convenience. The rule names the
category error directly — a diagram carries STRUCTURE, prose
carries SENTENCES — so the next bench that adds a box knows where
its explanation goes without having to rediscover why.

### The measurement was mechanical from the first minute

A scanner was written before any edit, and every pass ran against
it rather than against the eye. THE BASELINE: **51 violations** —
49 labels over the 45-character cap, plus 2 blocks on `flowchart
LR`. THE FINAL RUN: **8 blocks · 140 labels scanned · 0
violations**. It reads every quoted string inside every fenced
mermaid block (node labels, edge labels and subgraph titles
alike — edge labels widen a render exactly as node labels do,
and diagrams 3 and 5 held the two worst of them), splits on
`<br/>`, and checks both the two-line ceiling and the 45-char cap,
plus the first line of every block for TD orientation. The
standing-lint idea in [IDEAS](../IDEAS.md) is this scanner, moved
into CI.

### Verify-before-drop: 43 receipts, and one real catch

Every sentence lifted out of a node was checked against the home
it was being handed to, BEFORE the node was cut. Most were already
home:

- **§1** — "independent" (THE GATE) → no-solo-approval, cited;
  ALSO written into §1's prose. "merges unasked / the one
  carve-out" → [HOME §Micro-PRs](../HOME.md#micro-prs), which says
  "squash-merges immediately without asking".
- **§3** — the cockpit's "holds the baton; advises on gates,
  executes rulings" → [HOME §The baton](../HOME.md#the-baton) plus
  the charter's rule "YOUR STANDING JOB: ADVISE" · AUTO-LAND's
  "never at birth, never on a timer, never silent" → land
  Scenario 1's FOUR GUARDS, verbatim · DESK TAKEOVER's "writes
  COCKPIT SUPERSEDED, self-retires on next wake" → pickup §6
  write-1 and land Scenario 2's tombstone wake-rule · MODE P's
  "Status held" and "the fleet-at-ground table" → land MODE P and
  handoff §4 · "old sessions never revived" → §3's OWN prose
  ("sessions are cattle, branches are the work") and land's
  "Old sessions are NEVER revived".
- **§4** — "by the baton-holder / on origin" → parallel-lanes
  §Bench-first birth · "ready-flip then the lane:cloud label" →
  §Cloud spawn's route ladder · "middots,
  character-for-character" → §Canary, which carries the token
  form exactly · "no file shared with a sibling" → the lane law's
  duty 4 · "on a phone-reachable vehicle" and "re-read own Status
  first" → §Wake-lock & parking · "a lane never merges" → §4's own
  prose plus diagram 5's `never` edge.
- **§5** — "same role, a cloud seat" → HOME §The baton · "at a
  ground seat" → HOME §Agent teams · "of self-authored diffs" →
  no-solo-approval · "via paste block" → LAWS §Knowledge &
  tracking · "nothing else" → drawn by the `never` edge itself.
- **§6** — "wholesale" and "stamped" →
  [HOME §The board](../HOME.md#the-board) · "ticked only by ship"
  → LAWS §Knowledge & tracking, and drawn in §2 · "one state from
  the locked vocabulary" → TEMPLATE's Status vocabulary.
- **§7** — "loaded into every session" → LAWS' own header · "a
  stub cannot drift from its procedure" →
  [HOME §Skills](../HOME.md#skills) · the critic's "round pushed
  to the memory before the gate" → ship §6, which is where that
  duty is written.

FOUR SENTENCES HAD NO HOME AND WERE WRITTEN INTO PROSE, which is
the whole reason the rule exists:

1. **§7's three other judgment joints.** The prose paragraph named
   only THE TERMINUS; the links-gate, derivation and
   board-freshness joints lived ONLY inside that 340-character
   label. Cutting the label without noticing would have deleted
   three honest gaps from the page that exists to be honest about
   them. §7's prose now enumerates all four.
2. **§7's three hooks and CI's seven checks** — the hook boxes are
   now bare names, so a paragraph states each hook's job and sends
   the checks to [ship §1](../skills/ship.md#1--preflight) as
   their one home.
3. **§7's deny list and the `ops/summon` mechanism** — the
   apart-from-the-cascade paragraph already carried "ambient rails
   evaluated at every tool call" and "self-rescue when connectors
   are dead", but not the VALUES or the branch name; both are
   verified against [SETUP](../SETUP.md) and now sit in that
   paragraph.
4. **§5's weld and carve-out clause** — "merges on the founder's
   word, sole carve-out ritual micro-PRs" and "then the
   baton-holder welds" had no citation in §5's Boxes line, so §5's
   prose gained one sentence carrying both.

### The two new chains

Diagram 1's INTAKE BAND is a subgraph upstream of the bench:
voiced idea or defect → one dated IDEAS line (edge: "the entry
contract") → decide, the triage → a ROADMAP line (edge: "nothing
is scope until triaged") → freshly pulled main → the bench. The
single-inbox law is one of the most-cited rules in the workshop
and appeared in no picture until now.

Diagram 8, A SITTING, draws the container the other seven happen
inside: the session-start hook → pickup → the work loop (one node,
pointing at diagram 1) → handoff FULL → the close report and the
close-lock → the closed session, read-only and not dead → the next
sitting, closing the ring. QUIET rides as a dashed side node,
because ship's tail repaints the board and does NOT close the
sitting. Liftoff and land are deliberately absent — they are not
GROUND endings, and §3 already owns the chooser; the prose says so
rather than leaving a reader to wonder.

### The sweep

Destination-grep for `seven diagrams`. Both LIVING assertions —
ATLAS's header and HOME's files-table row — are flipped to eight.
FIVE SURVIVORS STAND, every one correct as written:
`record/history/workshop/definition/atlas-census.md` and
`record/history/README.md`'s ledger line (FROZEN history — true at
#259's ship), `record/specs/atlas-census.md` ×2 (a SHIPPED spec's
Done-means — the frozen contract of that bench),
`record/specs/atlas-clean.md` (this bench's own spec, quoting the
search string), and D-072's own Affects line, which says "all
seven diagrams rewrapped" and is a true statement about what this
bench did. No `In full:` line quotes the phrase, so the
[D-068](../record/DECISIONS.md#d-068--the-short-anchor-law)
carve-out was not needed.

### The parse proof

The [atlas-census](../record/history/workshop/definition/atlas-census.md)
method, reused: `mermaid` under `jsdom`, `mermaid.parse()` per
block. ALL EIGHT PARSE. Two frictions worth recording for the next
run — the proof script must live INSIDE the repo (an ESM import
resolves `node_modules` from the script's own directory, so a
scratchpad copy cannot find `jsdom`), and on Node 24
`globalThis.navigator` is getter-only, so it takes
`Object.defineProperty` rather than assignment. Both packages went
in with `--no-save` and the tree was restored with `npm ci`;
`git status` confirms the manifest untouched.

### Deviation — a second IDEAS line

The mandate named one IDEAS line (the width gate). A second was
added, and it is flagged rather than buried: HOME's files table
has NO ROW for `.claude/hooks/user-prompt-submit.mjs`, though the
hook exists on disk and enforces the close-lock, and both its
siblings have rows. It was found while verifying where the hook
boxes' duties live. Adding the row is out of this bench's stated
file scope (HOME gets ONE row: the ATLAS count), and leaving the
gap only in a memory bound for `history/` would silently park it —
so it went to the one inbox.

## Where to look

- [the spec](../record/specs/atlas-clean.md) — the contract.
- [D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law) —
  the law and its rejected alternatives.
- [ATLAS](../ATLAS.md) — the header law, §1's intake band, §8.
- [the atlas-census bench](../record/history/workshop/definition/atlas-census.md)
  — the predecessor, and the parse-proof method's origin.
