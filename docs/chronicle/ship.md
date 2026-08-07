---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# ship — the closing ritual

> **CURRENT ENDING (2026-08-06).** The eight-step close that is the
> only way a task becomes done: preflight against a synced main →
> spec gate → weave lint → final memory → flip the PR → THE GATE,
> where the critic runs and the founder's word is the only key →
> the atomic weld → a QUIET handoff tail. It began as one of four
> slash commands in the repo's first PR and became the ritual that
> every other surface defers to, because it is where the ROADMAP is
> ticked, memory becomes history, the ledger gains its line, and —
> since 2026-08-05 — the chronicle is kept current. **It advanced
> three times in two days** and is still advancing: the weld now
> performs SYNTHESIS, its settle-or-advance test was rewritten after
> the critic found the test contradicted itself, and the SETTLED
> branch that test exists to make reachable **has still never
> fired** across three welds. One live defect stands against it, and
> it is not in the weld: **§6 renders THE GATE report into the
> conversation and touches no board**, so for the whole window in
> which the founder owes the one act that unblocks a bench, the
> board says nothing is owed.

## What it is

The ritual that closes a task, and the only thing licensed to say a
task is done. Its living text is
[ship](../skills/ship.md), eight numbered steps run by the
baton-holder — never by a lane, which speaks through its PR and is
shipped by the seat holding the baton.

The eight steps, in one line each:

1. **Preflight** — merge current `origin/main` into the branch
   (never rebase), then the full CI mirror. This step is the ONE
   HOME of the verification commands; the laws point here rather
   than repeat them.
2. **Spec gate** — every Done-means box verified honestly; an
   untickable box stops the ship.
3. **Weave-lint** — every ID, D-number and sibling doc a link.
4. **Final memory rewrite** — the fourth diary moment, to
   publication quality.
5. **Flip the PR** — draft to ready, summary in plain language,
   deviations named.
6. **THE GATE** — the critic runs, its verdict is written to origin,
   then the gate report renders and the ritual STOPS. Nothing merges
   without the founder's explicit word.
7. **The atomic weld** — one bookkeeping commit: ROADMAP tick,
   memory → `record/history/`, spec finalized, ledger line, and the
   chronicle synthesis.
8. **Tail** — a QUIET [handoff](../skills/handoff.md) repaint and
   the shipped report.

Two properties do most of the work. **The weld is ATOMIC** — state
and payload merge in one commit, so there is no window where the
ROADMAP disagrees with what main contains. And **CI is the
arbiter**: local green never suffices, so the gate may only be
announced on the pushed commit's Actions run going green.

## What raised it

Not a failure — a founding assumption. [PR
#1](https://github.com/wsher0901/roam/pull/1) shipped the workflow
kit: the standing instructions plus four slash commands, ship among
them, before there was anything to ship. The rule it encoded from
the first day is the one that survives unchanged today — never merge
without approval.

Everything since has been the same question asked at higher
resolution: **what must be true, mechanically, before "done" is an
honest word?** Each answer became a step, and the steps accumulated
in the order the workshop discovered it could get them wrong.

## What changed, in order

- **[#1](https://github.com/wsher0901/roam/pull/1) — born as one of
  four rituals.** A slash command beside pickup, handoff and decide,
  carrying the never-merge-without-approval rule.
- **[#56](https://github.com/wsher0901/roam/pull/56) — ritual engine
  v2.** All four rituals rewritten to locked designs; ship gains its
  spec gate and link hygiene, and appends to the newly born shiplog.
  Two eras later the engine swap
  ([D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills))
  turned the commands into skills and that log into `history/`.
- **[#62](https://github.com/wsher0901/roam/pull/62) — the tail goes
  QUIET.** Ship's tail starts running handoff in QUIET mode, and the
  derivation law enters the constitution in the same PR: if a number
  can be counted, count it. This is why the tail repaints the board
  without asking a leaving question.
- **[D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live)
  ([#159](https://github.com/wsher0901/roam/pull/159)) — the critic
  goes live.** The reviewer subagent existed and nothing summoned
  it; §6 gains its invocation as THE GATE's first act. The verdict
  is ADVISORY by the founder's explicit call — a finding never halts
  ship by itself. **Placement was a decision, not a detail**: the
  critic landed INSIDE §6 rather than as a new numbered section,
  because renumbering would have broken every `ship §6`/`§7` anchor
  woven from the agent file, HOME and shipped histories. The maiden
  run flew on that PR itself, and its finding — a background agent's
  printed output never reaches the control tower, so the verdict
  must be SENT — graduated into the procedure before the weld.
- **[#140](https://github.com/wsher0901/roam/pull/140) — the weld
  gets a net.** A CI gate enforces the history ↔ ledger bijection,
  and §7 gains its stage-everything line, so the exact ledger drop
  that hit an earlier bench cannot recur silently.
- **[#147](https://github.com/wsher0901/roam/pull/147) — the stamps
  come from a clock.** The time-derivation law lands, and §7's stamp
  writes gain their clock parenthetical: every date and time in the
  weld is read at write time, never typed from memory.
- **[D-052](../record/DECISIONS.md#d-052--response-doctrine) and the
  report shapes ([#250](https://github.com/wsher0901/roam/pull/250))
  — the reports become templates.** Six rituals had grown six
  layouts for the same three questions. THE GATE report and the
  SHIPPED report become fenced skeletons with one job each — "ready,
  and the word" and "confirmation, what you owe, what is next" —
  under **PUSH FIRST, REPORT SECOND**. That rule is why §6 writes
  the critic round to origin before reporting a finding COUNT: a
  verdict that lives only in the session is one the founder cannot
  re-read and the external review cannot check.
- **[D-057](../record/DECISIONS.md#d-057--the-record-shelf) — the
  weld's destination moves.** `docs/history` becomes
  `docs/record/history` and specs follow; memory stays living at
  root. Ship's §7 paths move with them.
- **2026-08-05,
  [#320](https://github.com/wsher0901/roam/pull/320) — SYNTHESIS,
  and the rule finally gets a performer.**
  [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer)'s
  ending rule said a later fix is incorporated into an item's story
  at that weld — **and nothing performed it**, so it was a
  convention a seat had to remember unprompted. The proof it wasn't
  working was already on the shelf: a census row read "no recorded
  run" for a ritual that had run four times, and sat stale a week
  because no weld was obliged to touch it. §7 gains the step, with a
  three-case match run ONCE PER ITEM — a weld touching three items
  owes three synthesis acts.
- **2026-08-05,
  [#322](https://github.com/wsher0901/roam/pull/322) and
  [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
  ruling 2 — case 2 SPLITS, and the debt form nearly dies.** The
  synthesis bench had specced a recorded DEBT for an item settled
  without a story, reasoning that writing at the weld turns every
  weld into a story-writing bench. **The founder's reading inverted
  it using the bench's own finding**: story cost is dominated by
  source-gathering, and the seat that just settled an item has
  already gathered what its story needs — so it is the cheapest seat
  that will ever exist, and deferring PAYS THE COST TWICE. Case 2
  now splits on settled-vs-advanced, and a settling weld WRITES THE
  STORY in that same commit. The debt form survives for exactly one
  thing: the pre-ruling backlog the shelf benches clear.
- **2026-08-06,
  [#324](https://github.com/wsher0901/roam/pull/324) — the test is
  rewritten because it contradicted itself.** The critic caught the
  settled/advanced test asking "is any work KNOWN to be owed — No →
  SETTLED" and then saying "when you cannot tell, treat it as
  ADVANCED" — **opposite verdicts on the uncertain case**. It also
  counted an unticked Done-means box as owed work, when unticked
  boxes are the NORM here: shipped specs routinely carry them and
  the CI box is unticked by convention, so that reading would have
  answered ADVANCED for almost every item and **made the SETTLED
  branch unreachable**. The repair folds the default into the
  question — *yes, OR you cannot tell → ADVANCED; only a checked NO
  → SETTLED* — and names unticked boxes as NOT an input. That weld
  was also the step's first multi-case exercise: four items in three
  states, case 1 firing three times at about the promised cost of
  one bullet and one ending each.

## Where it stands

**The weld is in good health and the gate is not.**

Synthesis has run three times and done what it promised. Case 1
(incorporate into an existing story) fired for the first time on
2026-08-06, three times over, cheaply — the format was built so a
new event is one spine bullet and one rewritten ending, and that is
what it cost. Line counts in that weld were DERIVED at the weld
rather than carried from the story's prose, which is exactly how the
ending avoided repeating the stale figure it replaced.

**But the SETTLED branch has still never fired.** Across three
welds, every item touched was ADVANCED. That branch is the one
[D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
ruling 2 created and the one the repaired test exists to make
reachable, and it remains untested. Whether the repair works is
therefore still a claim about a code path nobody has walked.

**The live defect is §6's silence toward the board.** The gate
report renders into the CONVERSATION and stops; the board is next
touched by §8's tail, which runs only AFTER the merge. The window
between them is precisely when the founder owes the one act that
unblocks the bench — and it is precisely then that
[DASHBOARD](../DASHBOARD.md) reads Needs-you: nothing. This happened
**three times on 2026-08-05/06 alone**. It is open in
[IDEAS](../IDEAS.md), unruled, with a cheap fix already named: give
§6 a DASHBOARD-only micro-PR, the same carve-out the tail already
uses. The diagnosis filed with it is more general than ship —
**rituals repaint on entry and exit, and the middle of a long
sitting belongs to no ritual.**

Two smaller gaps stand behind it. [ATLAS](../ATLAS.md)'s file-flow
figure notes "Ship appears three times for exactly that reason" and
does not know ship now writes a FOURTH surface, `docs/chronicle/`.
And the critic's own findings have repeatedly caught a
**case-analysis class** of error in ship's own steps — cases
exhaustive over the situations the author had in mind, with the hole
in the one not enumerated — five instances, the fifth committed
inside the bench convened to fix the fourth.

**This story's ending contradicts nothing in the census cell** — that
cell is current, unusually so, because the synthesis step obliges
the ritual to maintain its own row. It is the one item in this slice
whose cell was kept honest by the mechanism the item itself
provides.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [ship](../skills/ship.md) — the ritual's living text.
- [D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live)
  · the critic ·
  [D-052](../record/DECISIONS.md#d-052--response-doctrine) · the
  report shapes ·
  [D-057](../record/DECISIONS.md#d-057--the-record-shelf) · the
  destination ·
  [D-059](../record/DECISIONS.md#d-059--the-chronicle-layer) · the
  ending rule ·
  [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
  · the settling weld ·
  [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) · the
  arbiter.
- [the critic's wiring bench](../record/history/workshop/mechanism/ship-wiring.md)
  — placement, and the message-relay finding.
- [the synthesis bench](../record/history/workshop/mechanism/ship-synthesis.md)
  — the step, and the debt-form reading the founder overturned.
- [the findings bench](../record/history/workshop/mechanism/lane-findings.md)
  — the one-read test, and the four-item weld table.
- [the ledger gate](../record/history/workshop/mechanism/ledger-integrity.md)
  · [the clock doctrine](../record/history/workshop/definition/time-doctrine.md)
  · [the report skeleton](../record/history/workshop/definition/report-shapes.md)
  · [the workflow kit](../record/history/workshop/mechanism/workflow-kit.md)
  · [the QUIET tail](../record/history/workshop/mechanism/ritual-live-counts.md).
- [IDEAS](../IDEAS.md) — the open §6 board-silence line.
