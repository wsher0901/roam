---
type: history
slug: 
shipped: 2026-08-06 16:22
pr: 333
---

# chronicle-shelf-3b-doctrine — Shelf III slice B — laws & doctrine

## Status

complete, awaiting merge — 2026-08-06

All 7 stories written, the verification loop green, `INDEX.md`
untouched. This lane authored the payload, so the diff takes an
independent non-author review before the founder's word.

## What this task is

The 7 unwritten stories of **Shelf III slice B — laws & doctrine** — the standing rules and the machinery that records them. One of seven
benches flying as a single fleet under
[D-078](../../../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number).

The contract, the roster, and the one rule that makes the fleet
lawful — **do not write the INDEX** —
[the spec](../../../specs/chronicle-shelf-3b-doctrine.md).

## Pending issues

None blocking. One item belongs to the workshop rather than to this
bench and is listed under Left / idle so it cannot go missing: the
census cells this bench found stale are NOT repaired here, because a
lane may not write `INDEX.md`. The weld marks the rows.

## Left / idle

Nothing on this bench. Belonging to the weld rather than here:
**five of this slice's seven census cells are stale** (enumerated
below), and the rows are the baton-holder's to mark under
[ship §7](../../../../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step.

## The story

2026-08-06 14:40 UTC · bench birth · work PC — born bench-first as
one lane of a seven-lane fleet, on the founder's "one fleet — fire
all seven".

**THE FLEET IS LAWFUL ONLY BECAUSE OF ONE CLAUSE.** Every slice
bench before this one wrote `docs/chronicle/INDEX.md`, and the lane
law forbids siblings sharing a file so that merges cannot collide by
construction. Seven concurrent lanes would have been UNLAWFUL — and
that was found by checking the planned benches for shared files
rather than by discovering it at the first collision.
[D-078](../../../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)
clause 3 moved that write to the weld, where
[ship §7](../../../../skills/ship.md#7--on-approval--the-atomic-weld)'s
synthesis step already performs it.

**WHAT THIS BENCH INHERITS that the pilot did not have:** a settled
format, an event variant proven by slice D, and a measured figure of
roughly two minutes a story. What it inherits as a WARNING is the
census itself — several cells have been wrong, and one stood stale
for a week and misled two later readers who each stopped at it
without asking whether anything since had closed it. So this bench
derives its endings and lets the derivation win.

2026-08-06 14:42 UTC · canary claim · cloud lane — claimed the bench
and pushed the canary; the push was accepted, so no sibling owned
this bench.

2026-08-06 14:55 UTC · **THE ACK CAME LATE, AND THIS LANE ALMOST
REPEATED THE 2026-07-22 FAILURE INSTEAD OF WAITING** · cloud lane —
the ack landed at ~14:54, about two minutes past the nominal
~10-minute window
([§Canary](../../../../skills/parallel-lanes.md#canary-handshake-both-sides)),
and the stand-down was already drafted.

What prevented it was the rule that the LICENCE IS A COMMIT ON
ORIGIN — and, read the other way, that a TIMEOUT IS ALSO ONLY TRUE
ON ORIGIN. This lane's watcher hit its cutoff and reported the
window closed; the correct response to that report was not to act on
it but to go and look, and origin held commit `41935fc` with a
Status line beginning exactly `airborne · `. **The stand-down was
discarded unpushed.**

The distinction from the flight that lost its handshake on
2026-07-22 is worth keeping: THAT failure was a bad MATCH — a
watcher matching its own claim prose, then missing an em-dash ack.
This lane used the anchored test §Canary mandates and checked the
stronger fact underneath it, that no ack commit of any form existed
yet. So the anchored match worked correctly and still would have
produced the wrong ACTION, because the fault was never in the token
— it was in trusting a locally-computed deadline as if it were a
fact about the world. A near-miss, not a finding, and recorded
because the record's own account of the wake-lock notes that a lane
which stands down silently leaves no trace of why.

2026-08-06 15:02 UTC · **THE SEVEN STORIES, AND FIVE STALE CELLS** ·
cloud lane — written to the settled format, endings derived from the
record at write time and never from the cells. All seven roster
items are `system piece`, so slice D's event variant does not apply
on this bench — a Done-means line answered vacuously rather than
left ambiguous.

**THE CENSUS AUDIT — 5 OF 7 CELLS STALE, 2 ACCURATE.** Each story
states its own contradiction in words, per the spec:

- **LAWS · STALE.** Span ends at
  [D-053](../../../DECISIONS.md#d-053--guardrail-audit). LAWS has
  since been recut to a REGISTER, minted three laws
  ([D-069](../../../DECISIONS.md#d-069--the-law-register-and-the-manual-groom)),
  had its touchpoints corrected from two to three, and gained
  clauses from
  [D-062](../../../DECISIONS.md#d-062--the-wake-rule-generalized),
  [D-064](../../../DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)
  and
  [D-066](../../../DECISIONS.md#d-066--the-ideas-entry-contract).
- **DECISIONS and decide · STALE.** Span ends at
  [D-057](../../../DECISIONS.md#d-057--the-record-shelf);
  [D-068](../../../DECISIONS.md#d-068--the-short-anchor-law) has
  since changed the entry FORMAT ITSELF and retrofitted D-001–D-067.
- **the routing law · STALE.** Span ends at #144 (2026-07-16); the
  table has since grown ATLAS, `chronicle/`, IDEAS §Closed and
  box-master rows.
- **the retroactivity law · STALE.** The cell calls #204 "the
  practice's last full run"; D-068's sixty-seven-entry retrofit is
  later and larger, and sanctioned by this very law. The SWEEP LAW
  is missing from the cell entirely.
- **the corpus writing laws · ACCURATE.** Verified against
  [restyle-sweep](restyle-sweep.md).
- **the derivation law · ACCURATE.** Two clauses, matching LAWS at
  HEAD.
- **the response doctrine · STALE, and the worst of the seven.** The
  cell cites
  [D-052](../../../DECISIONS.md#d-052--response-doctrine) alone —
  five clauses — and calls the item "settled". At HEAD it has EIGHT:
  [D-063](../../../DECISIONS.md#d-063--response-doctrine-v2-and-web-instructions-v6)
  took it to v2 and
  [D-067](../../../DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
  added rule 8. **Every sentence in the cell is still true; the word
  "settled" is what is false** — which is the more dangerous failure,
  because a reader checking it for errors finds none.

**A CROSS-CUTTING FINDING THE SLICE ONLY REVEALS TOGETHER.** Three
of these seven items have been enforced AGAINST EACH OTHER, and the
sharpest case is that D-053's single concrete improvement — promoting
the verification loop into LAWS as a copy-runnable block — was
removed sixteen entries later by D-069, on the grounds that the
routing law forbids the second copy and the copy had ALREADY BEGUN
TO DRIFT. Both decisions were right on their own terms. Writing
these seven as one slice is what made the pair visible; neither
entry mentions the other.

**THE COST SPLIT, WITH ITS CONFOUND NAMED.** GATHERING ≈ 6 minutes
for all seven items together (~50s/story); WRITING ≈ 7 minutes
(~1m/story); verification and two link repairs ≈ 3 minutes. Total
≈ 16 minutes, roughly 2m15s per story end to end.

**This number must not be read as a clean confirmation of
[D-078](../../../DECISIONS.md#d-078--the-55-re-ruled-on-the-cold-number)'s
≈1m50s figure, for two reasons.** First, ALL GATHERING HAPPENED
DURING THE FORCED CANARY WAIT — dead time this bench would have
spent idle either way — so it cost nothing on the critical path and
a bench without that wait would measure differently. Second, the
source-sharing D-078 predicted was extreme here: these seven items
share DECISIONS, LAWS, HOME and the ledger almost entirely, so the
per-story gathering cost is close to meaningless in isolation. The
writing/gathering ratio came out ≈54/46, in the same direction as
D-078's measured 60/40 and not a contradiction of it.

## Where to look

- [the spec](../../../specs/chronicle-shelf-3b-doctrine.md) — roster, format,
  and the INDEX prohibition.
- [the format](chronicle-pilot.md)
  — the pilot that settled it, and its honest caveats.
- [the event bend](chronicle-shelf-1.md)
  — slice D's variant for `event` items, and the cold calibration.
- [D-059](../../../DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings.
- [§Canary](../../../../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the window and the licence rule the late ack tested.
- [the census](../../../../chronicle/INDEX.md) — READ-ONLY for this bench;
  five of its seven cells for this slice are stale as recorded above.
