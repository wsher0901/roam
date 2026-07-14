---
type: memory
id: state-surfaces-v2
updated: 2026-07-13 · ship (completion rewrite) · home PC
---
# state-surfaces-v2 — State surfaces v2: the board learns the founder's names; pickup becomes the sit-down summary; welds stamp time and write the ledger

## Status
Complete, awaiting merge — every Done-means box verified green on
2026-07-13; PR
[#110](https://github.com/wsher0901/roam/pull/110) flipped ready.
By brief, the merge waits for founder approval AFTER external
review; on approval the tail repaints the board per the NEW
[handoff §4](../skills/handoff.md) — its first act under the new
law.

## What this task is
One writer per surface: [handoff](../skills/handoff.md) §4 became
the board's single spec — the approved v2c shape (Sessions table
with a type column · sentence-first Needs-you with receipts below ·
verbatim chat titles · datetime Shipped · legends re-homed to
[HOME §Reading the board](../HOME.md#reading-the-board)) — and
[pickup](../skills/pickup.md) §5 stopped mirroring the board,
rendering a since-you-left delta summary instead.
[ship](../skills/ship.md)'s weld now stamps shipped: <date HH:MM>
and prepends one line to
[the ledger](../history/README.md#the-ledger);
[liftoff](../skills/liftoff.md) §6 renders the flight plan through
the Sessions table. This PR edits SPECS only; DASHBOARD.md is
untouched in the diff. Recorded as
[D-035](../DECISIONS.md#d-035--2026-07--state-surfaces-v2--sessions-table-with-a-type-column-sentence-first-needs-you-verbatim-chat-titles-welds-stamp-time-and-write-the-ledger-handoff-4-is-the-single-board-spec-amends-d-024s-surface-extends-d-029).

## Pending issues
The tail rider needs this ops chat's VERBATIM title (and the titles
of any other open Web/Design chats) for the board's new Claude Web
+ Design discussion section — asked at THE GATE alongside the merge
word.

## Left / idle
The weld (founder approval → bookkeeping commit → squash-merge),
then the tail rider: the first repaint per the new handoff §4 —
Sessions table (main = the current cockpit work, no parallels
today), Claude Web + Design discussion seeded from the current
Threads content with this ops chat's verbatim title, Shipped's top
row carrying the first datetime stamp.

## The story
Born from the Web-chat ops leg. The founder's morning-after
scenario drives it: one glance must answer how many sessions, what
state, needs-me vs waiting. Two writer-specs (handoff §4 + pickup
§5's mirror) were a revert risk — today's own sitting proved the
chronology gap, three same-day welds indistinguishable by date-only
frontmatter. The payloads were verified byte-exact against
independently re-transcribed references; the ledger was seeded by
derivation (a script read every history/** frontmatter — shipped
date, H1 title, quadrant from path, PR — and emitted 51 lines,
newest first, ties in reverse-PR order), not hand-typed. One
formatting call worth noting: the seeded ledger lines carry a "- "
list prefix so GitHub and Obsidian render one line per entry —
bare lines would merge into a paragraph; the weld's future prepends
follow the same shape.

## Where to look
Spec: [state-surfaces-v2](../specs/state-surfaces-v2.md) ·
decision:
[D-035](../DECISIONS.md#d-035--2026-07--state-surfaces-v2--sessions-table-with-a-type-column-sentence-first-needs-you-verbatim-chat-titles-welds-stamp-time-and-write-the-ledger-handoff-4-is-the-single-board-spec-amends-d-024s-surface-extends-d-029)
· PR [#110](https://github.com/wsher0901/roam/pull/110) · board
spec: [handoff §4](../skills/handoff.md) · ledger:
[history/README §The ledger](../history/README.md#the-ledger) ·
legend: [HOME §Reading the board](../HOME.md#reading-the-board).
