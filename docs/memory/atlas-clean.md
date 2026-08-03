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

### Verify-before-drop, clause by clause — and one real catch

Every sentence lifted out of a node was checked against the home
it was being handed to, BEFORE the node was cut. THE COUNT: 49
labels were over the cap, and 29 of them carried a clause that had
to be re-homed rather than merely folded; the rest wrapped with
nothing lost. Diagram 2 appears nowhere below because its single
over-cap label lost nothing at all. Every clause and its home:

- **§1** — "independent" (THE GATE) →
  [no-solo-approval](../LAWS.md#workflow-non-negotiable), cited;
  ALSO written into §1's prose. "merges unasked / the one
  carve-out" → [HOME §Micro-PRs](../HOME.md#micro-prs), which says
  "squash-merges immediately without asking".
- **§3** — the cockpit's "advises on gates, executes rulings" →
  [the charter](../COCKPIT-CHARTER.md)'s "YOUR STANDING JOB:
  ADVISE", which is its only home, with "holds the baton" at
  [HOME §The baton](../HOME.md#the-baton) · AUTO-LAND's "never at
  birth, never on a timer, never silent" →
  [land Scenario 1](../skills/land.md#scenario-1--auto-land-the-cockpit-fires-it)'s
  FOUR GUARDS, verbatim · DESK TAKEOVER's "writes COCKPIT
  SUPERSEDED, self-retires on next wake" →
  [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  write-1 and
  [land Scenario 2](../skills/land.md#scenario-2--desk-takeover-the-desk-fires-it)'s
  tombstone wake-rule · MODE P's "Status held" and "the
  fleet-at-ground table" →
  [land MODE P](../skills/land.md#mode-p--pause-and-transfer-the-founder-is-going-local)
  and
  [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
  · "old sessions never revived" → §3's OWN prose ("sessions are
  cattle, branches are the work") and
  [land](../skills/land.md#mode-r--retire-the-flights-natural-end)'s
  "Old sessions are NEVER revived".
- **§4** — "by the baton-holder / on origin" →
  [parallel-lanes §Bench-first birth](../skills/parallel-lanes.md#bench-first-birth-baton-holder-procedure)
  · "ready-flip then the lane:cloud label" →
  [§Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)'s
  route ladder · "middots, character-for-character" →
  [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides),
  which carries the token form exactly · "no file shared with a
  sibling" →
  [the lane law](../skills/parallel-lanes.md#the-lane-law-seat-blind--identical-local-or-cloud)'s
  duty 4 · "on a phone-reachable vehicle" and "re-read own Status
  first" →
  [§Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
  · "a lane never merges" → §4's own prose plus diagram 5's
  `never` edge.
- **§5** — "same role, a cloud seat" →
  [HOME §The baton](../HOME.md#the-baton) · "at a ground seat" →
  [HOME §Agent teams](../HOME.md#agent-teams) · "of self-authored
  diffs" → [no-solo-approval](../LAWS.md#workflow-non-negotiable)
  · "via paste block" →
  [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) ·
  "nothing else" → drawn by the `never` edge itself.
- **§6** — "wholesale" and "stamped" →
  [HOME §The board](../HOME.md#the-board) · "ticked only by ship"
  → [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking),
  and drawn in §2 · "one state from the locked vocabulary" →
  [TEMPLATE's Status vocabulary](TEMPLATE.md#status-vocabulary).
- **§7** — "loaded into every session" →
  [LAWS](../LAWS.md)' own header · "a stub cannot drift from its
  procedure" → [HOME §Skills](../HOME.md#skills) · the critic's
  "round pushed to the memory before the gate" →
  [ship §6](../skills/ship.md#6--the-gate), which is where that
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
THE RE-RUN RETURNS SEVEN HITS AND ZERO STALE ONES. Two are this
very paragraph describing the sweep, which is the self-reference
any honest sweep receipt creates and is named here rather than
grepped around. The other five are correct as written:
[the atlas-census history](../record/history/workshop/definition/atlas-census.md)
(FROZEN — true at [#259](https://github.com/wsher0901/roam/pull/259)'s
ship), [its spec](../record/specs/atlas-census.md) ×2 (a SHIPPED
spec's Done-means, that bench's frozen contract),
[this bench's own spec](../record/specs/atlas-clean.md) (quoting
the search string), and
[D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law)'s
Affects line, which says "all seven diagrams rewrapped" and is a
true statement about what this bench did. A SECOND grep for
`carries seven` and `SEVEN MERMAID` caught one more frozen line —
[the ledger](../record/history/README.md)'s atlas-census entry,
which says "a seventh diagram"; it is untouched for the same
reason. No `In full:` line quotes any of these phrases, so the
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

### Deviations, three

**The roadmap-manual citation.** The mandate and the spec both said
diagram 1's Boxes line should cite "ROADMAP §How-to-read". No such
heading exists: [ROADMAP](../ROADMAP.md)'s own header points at
[HOME §Roadmap manual](../HOME.md#roadmap-manual), which is where
the notation actually lives. The Boxes line cites the real home and
the spec's wording was corrected to match — a citation to a
heading that does not exist would have shipped past
`check:links` only because nothing links what is not written.

**The cap applies to EDGE labels too.** The law says "a node label";
the scanner enforces it on node labels, edge labels and subgraph
titles alike, because an edge label widens a render exactly as a
node label does — and diagrams 3 and 5 held two of the widest
strings on the page inside edges. Stated here so the future lint
is built to the same reading.

**A second IDEAS line.**

The mandate named one IDEAS line (the width gate). A second was
added, and it is flagged rather than buried: HOME's files table
has NO ROW for `.claude/hooks/user-prompt-submit.mjs`, though the
hook exists on disk and enforces the close-lock, and both its
siblings have rows. It was found while verifying where the hook
boxes' duties live. Adding the row is out of this bench's stated
file scope (HOME gets ONE row: the ATLAS count), and leaving the
gap only in a memory bound for `history/` would silently park it —
so it went to the one inbox.

### The critic's round

ELEVEN FINDINGS, none of them doctrine loss — the critic opened
every home the receipts above name and confirmed each clause is
genuinely there, which is the check that mattered most on this
bench. It also re-measured all eight blocks by hand and confirmed
the law holds against itself. REPAIRED, all of them:

1. **The IDEAS width-gate line says ≤48 while the law says 45** — a
   lint built to that line would pass 46–48 and defeat the law it
   exists to protect. The founder's number is kept verbatim (it is
   their inbox line) with the conflict written INTO the line, so
   triage cannot miss it. Surfaced at the gate too.
2. **That line's tail was plain text** where every sibling links
   its destination — a weave-rule miss, and invisible to
   `check:links`, which is joint 1 of the very gap list this bench
   rewrote. Now linked.
3. **The spec's Done-means was entirely unticked** while the memory
   declared the payload complete. Ticked.
4. **The receipts cited ~20 destinations in plain prose.** Every
   one held when checked by hand, but a receipt nobody can click
   is a receipt no gate can revalidate. All woven.
5. **§1's new lead overstated the law** — it read as though every
   idea must pass through IDEAS before decide, where
   [LAWS](../LAWS.md#workflow-non-negotiable) says only "nothing is
   scope until triaged", and [decide](../skills/decide.md) runs
   unasked on a founder's statement with no inbox line in between.
   ATLAS originates nothing; the sentence now matches its home.
6. **The sweep receipt claimed five survivors including the
   ledger**, which that grep does not return — the ledger line came
   from the second pattern. Both greps are now reported separately.
7. **"43 receipts" was not re-derivable** from the clauses listed.
   Replaced with the two numbers that are: 49 over-cap labels, 29
   carrying a clause needing a home.
8. **D-072's Affects omitted §1** from the list of sections that
   gained prose. Added.
9. **IDEAS' newest-first order** was broken by the two new lines.
   Reordered.
10. **A receipt named HOME §The baton first** for "advises on
    gates, executes rulings" — the charter is that clause's only
    home. Corrected.
11. **A §4 label called itself "the exact ack token"** while
    dropping the angle brackets the canonical form carries (mermaid
    cannot hold them). The false claim of exactness is gone; the
    exact form stays where it belongs, in
    [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides).

## Where to look

- [the spec](../record/specs/atlas-clean.md) — the contract.
- [D-072](../record/DECISIONS.md#d-072--the-atlas-no-scroll-law) —
  the law and its rejected alternatives.
- [ATLAS](../ATLAS.md) — the header law, §1's intake band, §8.
- [the atlas-census bench](../record/history/workshop/definition/atlas-census.md)
  — the predecessor, and the parse-proof method's origin.
