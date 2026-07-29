---
type: memory
id: charter-v3
updated: 2026-07-29 12:06 · ship · work PC
---
# charter-v3 — a box carries rules, not procedures

## Status

complete, awaiting merge — 2026-07-29, work PC. D-065 is minted,
the ladder lives in [HOME](../HOME.md) under a title naming both
halves, and the charter's fence is v3 — **170 lines → 82, and the
new fence is BYTE-IDENTICAL to the approved text (4,694 bytes in,
4,694 out)**. Every one of the 168 removed lines is accounted for
at a named home; the accounting is below. Full CI mirror green.
Awaiting the external Web review, then the founder's word.

## What this task is

THE BOX-MASTER DIET.
[D-064](../record/DECISIONS.md#d-064--2026-07--the-box-master-class--the-setup-entry-contract--every-external-box-master-is-its-own-top-level-file-on-the-web-instructions-pattern-cockpit-chartermd-and-lane-workermd-extracted-verbatim-setup-compresses-to-a-replication-spec-under-the-entry-contract-what--where--values--verify--source-design-kickoff-joins-the-class-on-paper)
gave box masters their own files but never said what belongs
inside one. The answer: standing rules, invariants and pointers —
procedures live in their repo homes and are derived at need,
values live in [SETUP](../SETUP.md), and provenance labels do not
ride boxes. The cockpit charter is the first file cut to it.
Contract: [the spec](../record/specs/charter-v3.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.
- **A founder act follows:** the charter master changes again, so
  the routine box needs re-saving. It rides the EXISTING board
  Needs-you item (already open for
  [#238](https://github.com/wsher0901/roam/pull/238),
  [#240](https://github.com/wsher0901/roam/pull/240) and
  [#244](https://github.com/wsher0901/roam/pull/244)) — one
  re-save still covers all of them.

## Left / idle

nothing parked.

## The story

Born 2026-07-29 at the work PC, the fourth bench of the sitting.
The principle it writes down was already visible in the three
before it: [#242](https://github.com/wsher0901/roam/pull/242) gave
masters their own files,
[#244](https://github.com/wsher0901/roam/pull/244) proved that a
file gets clearer when narrative leaves and pointers stay — and
the cockpit charter was still carrying a five-rung recovery
procedure inside a box that a session pastes from memory. A box a
session carries should tell it what it MUST do; how to do a thing
is derivable from the clone it already has.

### THE STANDING DUTY ON THE SHRINK — the full accounting

The fence went 170 lines → 82. Every removed line was checked
against a destination BEFORE the cut, and the new fence was then
proved byte-identical to the approved text (4,694 bytes both
ways).

**Relocated in this bench, to
[HOME §The cockpit's API paths & recovery ladder](../HOME.md#the-cockpits-api-paths--recovery-ladder):**
the whole ladder — R0's polling-cadence rationale ("idle sessions
are where connectors are reported to drop; this is a mitigation,
not a guarantee") · R1's probe-before-command rule · R2 (a) the
retry-once/backoff note, (b) the gh rung INCLUDING the trap a
careless cut would lose — `NEVER an env-var echo: permission
classifiers treat GH_TOKEN as a secret and block the echo` — (c)
the `claude mcp list` revival attempt with its honest UNPROVEN
label and its read-`--help`-first warning, (d) the ⚠️ CONNECTOR
DOWN founder script PRESERVED VERBATIM in its own fence · R3's
degrade-to-author rule with the desk/away fork · R4's self-rescue
push · R4b's three duties. THREE OF THESE HAD NO LIVING HOME
before this bench — R0's rationale, R2(b)'s classifier trap and
R2(c)'s revival attempt existed only inside frozen record — so
the move was not tidying, it was rescue.

**Kept in the charter deliberately:** the exact tombstone line.
It is the one thing a superseded session must say while writing
nothing else, so it cannot live behind a link. Both files carry
it, and HOME says why.

**Already had a home; nothing to do:** THE BIRTH-FAILURE SHAPE,
which the mandate flagged as a known orphan. The destination
check says otherwise —
[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
carries it in full, and better than the fence did ("a birth that
dies before Claude starts leaves no URL anywhere and sends no
greeting — the MISSING push IS the signal", with the founder's
three checks in order), while [SETUP](../SETUP.md) carries it as
that entry's VERIFY. It already sits where the mandate would have
put it. The flag was a false alarm and is recorded as one rather
than acted on.

**Dropped by the diet's own rule, value intact elsewhere:** the
literal "15/day cap". v3 says "the daily routine cap — the number
lives in SETUP", and [SETUP](../SETUP.md) carries `15 runs/day`
with its full arithmetic. Clause 3 working as designed.

**Dropped with nothing lost:** the provenance labels — `(D-047)`,
`(D-048, amended by D-049)`, `(D-051)`, `(D-061)`. Clause 4: a
session wanting the reasoning greps the clone it already has.

### Every file touched

- **[COCKPIT-CHARTER](../COCKPIT-CHARTER.md)** — fence to v3,
  header laws unchanged, a v3 version row.
- **[HOME](../HOME.md)** — the section absorbs the ladder and is
  retitled `The cockpit's API paths & recovery ladder`; the
  charter/HOME split is stated at its head; Sources now name the
  charter as the standing-duty half.
- **[DECISIONS](../record/DECISIONS.md)** — D-065 appended.
- **Pointer edits:** [SETUP](../SETUP.md) (the closing pointer to
  the retitled section) · [land](../skills/land.md) (its
  "charter's R4b" citation now splits correctly — rule 8 for the
  line, HOME for the procedure) · [DASHBOARD](../DASHBOARD.md),
  see Deviations.

`charter rule 5` citations in
[parallel-lanes](../skills/parallel-lanes.md) stay valid by
construction: rule 5 keeps its number in v3.

### The critic round (ship §6, pre-flip)

Ten findings, and the first two are the ones worth remembering:
**THE SWEEP MISSED FOUR SITES, AND THIS BENCH HAD ALREADY WRITTEN
DOWN WHY THAT HAPPENS.** Bench 2's lesson, in the ledger three
entries above this one, is that a grep for the WORDS a pointer
uses cannot find a pointer that uses different words — the honest
sweep greps the DESTINATION. This bench greped `charter's R4b`,
`charter master`, `ladder.*COCKPIT-CHARTER` and the old anchor,
and missed every phrasing it had not predicted. Two of the four
were FALSE after the diff, not merely stale:

1. [SETUP](../SETUP.md) still said "the ladder as the cockpit
   itself runs it (R0–R4b) is in COCKPIT-CHARTER.md" — two lines
   BELOW the pointer this bench had just repaired, sending a
   reader to the one file that no longer holds it.
2. [liftoff](../skills/liftoff.md) sent a baton-holder to "the
   charter master" for the recovery procedure — in a ritual read
   while FIRING a cockpit, the worst possible moment to be
   misrouted.

Two more were merely stale: [HOME](../HOME.md) called it "the
charter ladder's R2" inside the file that now owns it, and both
HOME and liftoff cited "(charter R4b)", a label the charter no
longer has. `land.md` had got exactly this split right, so the fix
pattern was in hand and simply was not applied three more times.

All four repaired, and the sweep re-run BY DESTINATION — every
living link into the charter read one by one — comes back clean.

Two bookkeeping repairs: a Done-means box read "DASHBOARD
untouched" while Deviation 1 in the same file recorded that it
was touched (reworded to state the one link), and this memory's
Where-to-look still called the master "at v2, going to v3" after
the fence had gone v3.

WHAT THE CRITIC VERIFIED AND I COULD NOT HAVE ALONE: that the
three rescued pieces really had no living home on main —
R0's rationale, R2(b)'s classifier trap and R2(c)'s revival
attempt now appear in exactly ONE living file (HOME) and
otherwise only inside frozen record. And that the old anchor has
ZERO survivors repo-wide. It could not run git, so the
byte-faithfulness of the fence rests on this bench's own
comparison; the external review holds the founder's copy and can
close that.

## Where to look

- [the spec](../record/specs/charter-v3.md) — the contract.
- [COCKPIT-CHARTER](../COCKPIT-CHARTER.md) — the master, now at
  v3.
- [HOME](../HOME.md) — where the ladder lands, beside the
  dependency map that already explains it.
- the Web ops chat, 2026-07-29 — where v3 was drafted and
  approved.
