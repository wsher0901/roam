---
type: memory
id: charter-cockpit-assumption
updated: 2026-08-05 17:25 UTC · external review round 1 · work PC
---

# charter-cockpit-assumption — teaching the charter that a desk exists

## Status

complete, awaiting merge — 2026-08-05

Born bench-first at the desk on the founder's "go", straight off the
🔴 the summon test surfaced. This seat authors the payload itself,
so it is a SELF-AUTHORED DIFF: an external Web review is required
before the founder's word
([no-solo-approval](../LAWS.md#workflow-non-negotiable)), and the
pre-gate critic cannot stand in for it.

## What this task is

The [cockpit charter](../COCKPIT-CHARTER.md) assumes its successor
and its predecessor are always COCKPITS, so it has no case for the
state this workshop is most often in — a live control tower at a
desk. Five findings from two seats are all that one assumption.

One **v5** edit repairs four of them; the fifth is a `summon.yml`
edit that deliberately rides along WITHOUT joining the version bump,
because a one-line YAML fix parked behind a manual box paste is the
silent-failure shape this workshop keeps rediscovering.

The contract, including the overturned not-a-decision note and what
overturned it:
[the spec](../record/specs/charter-cockpit-assumption.md).

## Pending issues

None. The one open judgment call was RESOLVED AGAINST THIS BENCH'S
OWN OPENING POSITION — see the story below. It cut
[D-075](../record/DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case).

## Left / idle

Payload complete — all six plan steps done. What remains is the
closing sequence: the pre-gate critic, the FULL COPY print of the
new charter text for the box paste, and the external Web review that
[no-solo-approval](../LAWS.md#workflow-non-negotiable) requires of a
self-authored diff.

Two things do NOT belong to this bench and must not be quietly
absorbed: the **box re-save** is the founder's act at
claude.ai/code/routines and rides Needs-you after the merge; and the
session-start hook never syncing a cloud seat is a separate,
separately-filed defect in a different file.

## The story

2026-08-05 17:25 UTC · THE EXTERNAL REVIEW, ROUND 1 — ONE FINDING,
AND IT WAS THE SAME MISTAKE A THIRD TIME · work PC — the Web review
returned a single finding, and it is the third instance in this
bench of ONE failure mode: **a case keyed on a string that matches
more board states than intended.**

**THE FINDING, verbatim in substance.** Case (a) matched
`"No live seat"` — which is the OPENING of MODE P's grounded line,
`No live seat — LANDED … via MANUAL-LAND · N lanes frozen → grounded for local pickup …`
([handoff §4's case table](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)).
So a summoned cockpit would have SELF-SEATED over a fleet the board
says is awaiting a desk — and rule 2's full authorship would then
let it resume, redeploy or unfence lanes THE FOUNDER PARKED FOR
LOCAL PICKUP, unbidden. Verified against the case table before the
edit: the rendering does begin with those exact words.

**THE REPAIR** is the clause the review specified, appended to case
(a) verbatim: *"IF THE LINE CARRIES 'grounded for local pickup':
seat yourself, report, and HOLD — the fleet awaits a desk; never
resume, redeploy, or unfence it unbidden."* NOTE THE SHAPE — it does
NOT move the fleet case out of (a). Seating is still correct (no
commander exists), and only the AUTHORITY that follows seating is
fenced. A cruder fix that pushed it into (b) would have left the
board with no live seat at all.

**STILL v5 — no version bump.** The fence has never merged, so the
version is not yet spent; bumping to v6 would imply a box paste that
never happened. The version-history row's description was widened to
cover the clause, since a row that understates its own version is
the box-master failure in miniature.

**THREE TIMES, ONE LESSON, AND IT IS NOW THE BENCH'S REAL OUTPUT.**
The pre-gate critic caught case (a) keying on an ABSENCE (the desk
takeover matched it); the repair keyed on POSITIVE tokens; and the
external review then caught a positive token that is itself a
PREFIX of a longer, different state. Each fix was correct and each
left the same class of hole. What actually generalizes: WHEN A CASE
TABLE FIXES THE WORDING, MATCH THE WHOLE RENDERING AND ENUMERATE
THEM — a substring of a rendering is not a case. Flight 4's lane
learned the same thing about its ack watcher (anchoring on the bare
word "airborne" would have matched its own prose); this is that
finding again, in a different file.

2026-08-05 16:25 UTC · THE CRITIC ROUND · work PC — the pre-gate
critic ([D-044](../record/DECISIONS.md#d-044--the-pre-gate-critic-goes-live))
returned **eleven findings, two of them 🔴**, and BOTH RED ONES WERE
HOLES IN THE FIX ITSELF rather than in the prose around it. All
eleven repaired; none dismissed.

**🔴 ONE — THE WORKFLOW FIX DEPENDED ON THE PASTE IT WAS BUILT TO
OUTRUN.** The whole reason `summon.yml` was kept OUT of the version
bump is that a one-line YAML fix must not wait on a manual box
re-save. The new payload then said "match one of charter rule 1's
THREE cases" — and a summon-fired seat reads the SAVED BOX, which
carries v4's two cases until the founder pastes. So every summon
between merge and paste would have been handed an instruction its
own charter could not satisfy, on the exact path this bench exists
to fix. THE REPAIR: the payload now carries the SAFETY RULE ITSELF —
"if the board names ANY live baton-holder, cockpit or desk, HOLD AND
REPORT" — which is true of every charter version, before and after
the paste. The window is closed on merge, not on paste.

**🔴 TWO — THE THREE CASES WERE NOT EXHAUSTIVE, and the gap was the
desk takeover.** Case (a) keyed on the ABSENCE of a live holder
("names NO live baton-holder of any kind"). But
[handoff §4's case table](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
paints `COCKPIT SUPERSEDED — desk takeover …` as the board's whole
BATON content from the moment a desk adopts the queue until its
repaint — a line naming a DEAD cockpit and no live seat in so many
words. A newborn would have matched (a) and self-seated over a desk
mid-takeover: precisely the failure
[D-075](../record/DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
was minted to prevent, surviving inside its own fix. THE REPAIR:
(a) now keys on the POSITIVE tokens the table actually paints
(`self-seat pending`, `No live seat`), (b) names the takeover line
explicitly, and a catch-all sends anything unmatched to (b) — "IF NO
CASE MATCHES CLEANLY, TREAT IT AS (b) AND ASK", because holding
costs a message and seating costs the baton. THE GENERAL LESSON:
matching on an ABSENCE is fragile where a case table fixes the
wording; match on what the line SAYS.

**The nine others, and what each cost.** D-075's Affects line did
not match the edits (the probe was missing, and three IDEAS lines
closed rather than one) · a plain `D-051` in IDEAS, weave-rule ·
this memory pointed a cold reader at a MASTER ITEM this same PR had
closed, and did not list the probe that now holds those findings ·
HOME's stated reason for duplicating the tombstone — "without
reading anything" — was falsified by the new board-derived middle
line two lines below it, now "without reading anything but the
board", which rule 8 has already put in hand · a diet violation in
rule 8 (a desk-successor clause whose reader is a desk, and a desk
never reads the charter) · the charter's version table had v4 above
v3, an inbox line earmarked for this exact touch and skipped once
before — taken · a HOME anchor pointing at pickup §6 rather than its
desk-takeover subsection, which `check:links` cannot catch because
both resolve · and two overclaims in the probe: "findings 1–4 were
one assumption" (finding 4 is not) and "every claim re-verified"
(the seat's git identity is observable only from inside its
container, now marked as relayed).

**AND ONE PROCESS CATCH.** The critic flagged that the memory Status
still read `claimed` and the Done-means were unticked while the
critic was already running — ship §2 and §4 precede §6. Both were
run late; the sequence is noted here rather than smoothed, because
the founder sees those boxes at the gate.

**Ticking honesty:** one Done-means box is DELIBERATELY UNTICKED —
the FULL COPY print and the board's re-save line both happen OFF
this branch, so ticking it would be a claim the branch cannot
support.

2026-08-05 16:05 UTC · THE SWEEP OVERTURNED THE BENCH'S OWN
NOT-A-DECISION RULING · work PC — this bench opened stating, in its
spec, that no D-number was needed: every charter edit merely made the
file agree with law that already existed, and charter v2 and v4 were
precedent for a version bump following a change made elsewhere. That
reasoning was WRONG, and what corrected it was the sweep law rather
than any second thought.

Grepping THE DESTINATION — the phrases being changed, not the
phrasings expected around them — turned up
[D-051](../record/DECISIONS.md#d-051--self-seat-birth)'s own clause
(2): *"a cockpit finding 'self-seat pending' — or no live cockpit —
on the board repaints it seating itself"*. THE TWO-CASE BLIND SPOT IS
NOT THE CHARTER DRIFTING FROM THE DECISION; IT IS THE DECISION. So
adding a third case amends a standing choice, `decide` runs unasked,
and [D-075](../record/DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
landed with its ripple in one commit.

THE LESSON IS WORTH MORE THAN THE BENCH: a document repair that
contradicts nothing may still be a decision, if the thing it
contradicts turns out to live in a D-number. Reading the prose was
not enough. The spec keeps the overturned note visible rather than
swapping it silently, because the reasoning that failed is the part
a later bench can learn from.

THE SAME SWEEP FOUND THE TOMBSTONE IN TWO PLACES, not one — the
charter and [HOME](../HOME.md)'s R4b, which duplicates it
deliberately so a superseded seat can speak without reading
anything. Both were backfilled in the same commit, per the
retroactivity law; a fix to one would have left the other lying.

2026-08-05 15:50 UTC · bench birth · work PC — born from the summon
test's 🔴, on the founder's "go". THE EXPOSURE IS LIVE, which is why
this jumped the queue ahead of phase 2's scope ruling: rule 1's
self-seat clause fires when the board "names no live cockpit", and a
board reading `CONTROL TOWER — work PC` names none, so a summoned or
`--cloud`-born seat is told to take a working desk's baton. The
2026-08-05 seat refused ONLY because that board carried a warning
hand-written before the fire — a one-off that lives in no ritual, so
the next fire does not get one.

THE FIVE FINDINGS CAME FROM TWO SEATS AND ONE ASSUMPTION, which is
why they are fixed together rather than one per bench: four are
charter text and fold into a single v5 bump with a single re-save,
and the fifth is the workflow that ASSERTS the supersession the
charter then acts on. Splitting them would mean several re-save
windows, and a master change that never reaches its box fails
silently.

## Where to look

- [the charter](../COCKPIT-CHARTER.md) — the file under repair, and
  a fenced box master: edits ride PRs, the box is re-saved after.
- [the spec](../record/specs/charter-cockpit-assumption.md) — the
  contract, the six plan steps, and the not-a-decision note.
- [the summon test's record](../record/probes/summon-test.md) — the
  findings' permanent home, with the fire measurement and the
  attribution of each claim. The IDEAS MASTER ITEM that carried them
  was CLOSED by this bench into that file's outcome ledger.
- [`.github/workflows/summon.yml`](https://github.com/wsher0901/roam/blob/main/.github/workflows/summon.yml)
  — the non-charter half.
- [D-051](../record/DECISIONS.md#d-051--self-seat-birth) — the board
  is the arbiter of whether a live seat exists; the rule the charter
  contradicts.
- [D-064](../record/DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  · [D-065](../record/DECISIONS.md#d-065--the-box-master-diet) — the
  box-master class and its diet.
