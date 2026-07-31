---
type: memory
id: laws-home-groom
updated: 2026-07-31 13:48 · ship · work PC
---

# laws-home-groom — the register recut and the manual groom

## Status

complete, awaiting merge — 2026-07-31, work PC.
[D-069](../record/DECISIONS.md#d-069--the-law-register-and-the-manual-groom)
is minted, LAWS' two long sections render as a register, three
laws are written down for the first time, the touchpoints read
three, "dispatch" is gone, and HOME's two day sections are one.
Full CI mirror green.

## What this task is

[LAWS](../LAWS.md) loads into every session through the root
`CLAUDE.md` import, so its length is a tax paid on every sitting
and its shape is what a session actually obeys. It had drifted
from a REGISTER into prose. The recut restores the shape — NAME →
one to three plain sentences → a pointer — and writes down three
laws the workshop had learned but never recorded. Contract:
[the spec](../record/specs/laws-home-groom.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked.

## The story

Born 2026-07-31 at the work PC — the seventh bench of the workshop
diet, and the first to turn the question on the file every session
reads.

### The three laws were already being obeyed

None of them is new behaviour. Each was learned expensively and
then stored only in a story, which is exactly how a workshop
repeats itself:

- **THE VERIFICATION LAW** was born twice — verify-before-drop at
  [the SETUP recut](../record/history/workshop/definition/setup-recut.md),
  which rescued the clerk charter and the org-UUID probe from
  deletion, and verify-before-classify at
  [the IDEAS contract](../record/history/workshop/definition/ideas-contract.md),
  where checking the record against each entry's own note changed
  FIVE verdicts.
- **THE SWEEP LAW** was paid for four times. The sharpest two:
  [#250](https://github.com/wsher0901/roam/pull/250), where my
  re-sweep reported CLEAN because it was still the wrong grep, and
  [#253](https://github.com/wsher0901/roam/pull/253), where an
  underscore inside `workflow_dispatch` truncated the pattern and
  hid 40 citations. Hence the clause that matters most: THE PROOF
  OF A SWEEP IS A RE-RUN RETURNING ZERO.
- **THE BOX-MASTER LINE** existed as
  [D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  and
  [D-065](../record/DECISIONS.md#d-065--the-box-master-diet)
  but never as a law, so the rule a session most needs to know —
  the box is a COPY and the re-save rides Needs-you, because a
  master change that never reaches its box fails SILENTLY — was
  two hops away from the file every session reads.

### The third touchpoint is a correction, not an addition

The review word has been law since
[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online),
and the founder has said it at every gate for weeks — while the
file naming the founder's duties still said there were two. A
touchpoint list that omits a real duty is worse than no list.

### THE VERIFICATION LAW, APPLIED TO ITS OWN BIRTH

The recut's own standing duty: nothing unrecorded may be dropped.
Every candidate for compression was checked against its claimed
home BEFORE the sentence went, one by one:

| what the recut wanted to drop | verified home | verdict |
|---|---|---|
| the seven lane duties, enumerated | [parallel-lanes](../skills/parallel-lanes.md) carries all seven, verbatim in substance | COMPRESSED to prose naming every one; the two absolute prohibitions (never writes main · self-terminate after pushing) stay explicit |
| ready-flip + weld mechanics | [ship](../skills/ship.md) §5 and §7 | COMPRESSED to one sentence |
| the verification command list | [ship §1](../skills/ship.md#1--preflight) — WHICH DID NOT CARRY IT | ADDED TO SHIP FIRST, then the fence died. The content had a home before the copy went, never after |
| the micro-PR definition | [HOME §Micro-PRs](../HOME.md#micro-prs) | kept in headline form + pointer |
| the payload-diff rule | NOWHERE ELSE IN THE REPO | KEPT AS A SENTENCE — the law forbids dropping it |
| branch prefixes (feat/fix/docs/chore) | NOWHERE ELSE | KEPT |
| the teammate rule | [HOME §Agent teams](../HOME.md#agent-teams) (b), which itself names LAWS as the home | kept, folded into the self-authored clause |
| supersession, canary constants | [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized) · [parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides) | kept as sentences + pointers |

Two of those checks changed the plan. The verification list had NO
home — ship named the steps but never the commands — so ship
gained the literal block first. And the payload-diff rule, which
reads like a footnote, turned out to exist in exactly one place in
the repo, so it stayed.

Net: §Workflow 731 → 711 words, §Parallel lanes 495 → 462. The
file as a whole GREW, 2,136 → 2,318 words, because three laws
landed. That is the honest number: the recut compressed what it
touched, and the bench added more than it removed.

### The sweep, and one accident

Three anchors died — LAWS' `#the-two-touchpoints`, HOME's
`#one-day-in-the-workshop` and `#the-daily-loop`. The
destination-grep found six citing files; three are frozen and took
POINTER-ONLY repairs, proven mechanically (every changed line in
those three contains one of the three anchor names, zero
exceptions):
[home-knowledge](../record/history/workshop/definition/home-knowledge.md)
·
[handoff-inline-context history](../record/history/workshop/mechanism/handoff-inline-context.md)
· [its spec](../record/specs/handoff-inline-context.md). NO HIT
LANDED INSIDE A MASTER FENCE — all three fences were checked
directly and are clean. The prose forms were swept too ("the two
touchpoints", "the daily loop"), which `check:links` cannot see;
both re-runs return zero.

THE ACCIDENT, recorded because it nearly shipped: compressing
§Reading the board, I anchored the cut on the sentence "The
board's shape is defined once, in handoff §4" — which occurs
TWICE in HOME, and my index found the earlier one. The splice
duplicated ~80 lines including a whole §Skills section. A heading
census against `HEAD` caught it (two headings appearing twice),
and the span was excised. The lesson is the sweep law's, one level
up: an anchor string chosen for a cut must be checked for
uniqueness first, exactly as a grep pattern must be re-run to
zero.

## Where to look

- [the spec](../record/specs/laws-home-groom.md) — the contract.
- [LAWS](../LAWS.md) — the register.
- [D-069](../record/DECISIONS.md#d-069--the-law-register-and-the-manual-groom).
- the Web ops chat, 2026-07-31 — where the founder approved it.
