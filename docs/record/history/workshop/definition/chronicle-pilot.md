---
type: history
slug: chronicle-pilot
shipped: 2026-08-05 18:50
pr: 318
---

# chronicle-pilot — three stories, to size the other sixty-three

## Status

complete, awaiting merge — 2026-08-05

Born bench-first at the desk on the founder's scope ruling, which
opened phase 2. This seat authors the payload, so it is a
SELF-AUTHORED DIFF: an external Web review is required before the
founder's word
([no-solo-approval](../../../../LAWS.md#workflow-non-negotiable)).

## What this task is

The first chronicle stories ever written. `docs/chronicle/` holds
one file today — its census INDEX — and not one story, so the
format, the length and the per-story cost are all unmeasured.

[D-076](../../../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
opened phase 2 with a THREE-STORY PILOT rather than either option
[D-060](../../../DECISIONS.md#d-060--the-three-phase-standing-order)
named, and the three are chosen to be UNLIKE each other rather than
to be the most important: the pilot's product is the FORMAT and the
COST, not the coverage.

The contract, including which hard case each story exists to test:
[the spec](../../../specs/chronicle-pilot.md).

## Pending issues

None blocking. Two things are OWED BY THE WORKSHOP rather than by
this bench and are listed under Left / idle so they cannot go
missing: the ship synthesis-at-weld step, now due, and the re-ruling
of the remaining 63.

## Left / idle

Nothing on this bench — all four plan steps are done. Two things
belong to the workshop rather than to this bench and must not be
absorbed silently:

- **THE SHIP SYNTHESIS-AT-WELD STEP IS NOW DUE.**
  [D-059](../../../DECISIONS.md#d-059--the-chronicle-layer)
  deferred it "to the first story weld" and gave it its own bench,
  touching [ship](../../../../skills/ship.md). This is that weld. Surfaced at
  the gate, not done here.
- **The remaining 63 need their re-ruling**, per
  [D-076](../../../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot).
  The recommendation is below; the ruling is the founder's.

## The story

2026-08-05 18:50 UTC · THE EXTERNAL REVIEW — PASS · work PC — the
Web review returned **PASS on `da252d7`**, recorded here because
[no-solo-approval](../../../../LAWS.md#workflow-non-negotiable) makes it the
load-bearing approval: the payload was written by the desk that ran
ship. Its verdict, point by point: the three stories verified
against THEIR DESIGNED BREAK-POINTS rather than merely read · both
red repairs confirmed — the rejected-push clause precisely scoped,
the redelivery count enumerated with NO TOTAL ASSERTED · the cost
number's confound and the inference labelling verified in this
memory with the falsifier named · the Shelf III arithmetic
re-derived independently · D-076 sound · the frozen record
untouched, which is D-059's ruling 4 · and the doc gates re-run
from outside — 4,968 links zero broken, ledger 121↔121, Actions
green on the tip.

The founder's merge word followed on the same message.

2026-08-05 18:20 UTC · THE CRITIC ROUND — TWO RED, AND BOTH WERE
FALSE CLAIMS IN A STORY'S ENDING · work PC — the pre-gate critic
([D-044](../../../DECISIONS.md#d-044--the-pre-gate-critic-goes-live))
returned **twelve findings, two 🔴**. All repaired; none dismissed.
BOTH REDS WERE IN THE WAKE-LOCK STORY'S FACTUAL CLAIMS, which is the
worst place for them: the ending is the artifact later welds rewrite
and other files cite, so a wrong ending propagates.

**🔴 ONE — THE ENDING OVERGENERALIZED, AND THE STORY'S OWN SPINE
CONTRADICTED IT.** The ending said the wake-lock "was observed
firing for the first time" on 2026-08-04. False: its
redelivered-webhook path has fired harmlessly since 2026-07-16, and
a bullet four screens down said exactly that. What was observed for
the first time is the REJECTED-PUSH CLAUSE. The board and the inbox
both scope the claim narrowly and this story widened it. Repaired by
naming the clause, and by splitting the mechanism's cheap path
(works, always has) from its expensive one (four flights unobserved).

**🔴 TWO — "FOUR REDELIVERED WEBHOOKS" WAS A TYPED COUNT, AND THE
RECORD HOLDS AT LEAST SIX.** Flight 1's log calls its own the SECOND
after 2026-07-16; flight 4's calls itself "at least the third",
counting 2026-07-16, flight 1 and itself while skipping flights 2
and 3; the inbox line attributes TWO to flight 2 alone and numbers
flight 3 "a third". THE SOURCES GENUINELY DISAGREE. The repair is
not a better number — it is to ENUMERATE the named sightings, say
the sources number them differently, and assert no total, because
deriving one means choosing which source to believe. A story about
the mechanism that counts recurrences got its own count wrong by
typing it.

**The ten others.** D-076's `In full:` still said land ran three
times while everything else on the branch said four, and its Affects
omitted the three story files and the memory · the INDEX's
"founder input owed" section still carried the exact land sentence
this bench supersedes, one screen below its own correction, in a
section whose preamble says each item is rewritten at the weld that
changes it · land's AUTO-LAND run had no citable source, so the
story now names the derivation method (`git log -- docs/DASHBOARD.md`
and each revision's paint stamp) since the stamps are invisible at
HEAD · land claimed an untested MODE R path the trigger table cannot
enter by construction · the wake-lock stated the cockpit's own
refusal flat where the probe insists it is that seat's ATTESTATION
and nothing else · three WRITTEN rows' span cells did not match
their own stories · a typed "thirty lines below" that is ~58 · six
unlinked repeat mentions under the weave rule · and the spec's
`pr:` field left blank.

**AND ONE FINDING WORTH MORE THAN ITS COLOUR.** The critic showed
the memory's inference chain failing: the confound says the sources
were gathered BEFORE the clock started, which makes source-gathering
the one quantity the pilot did not measure — and the recommendation
then leaned on "cost is dominated by gathering". The number was
honestly caveated and the conclusion quietly wasn't. Now the claim
is labelled an INFERENCE with its reasoning shown and its falsifier
named (a cold bench writing one story settles it in an afternoon),
and the recommendation says which of its parts rests on measurement
and which on inference. **The shelf arithmetic was re-derived while
fixing it and moved the recommendation**: Shelf III is 32 of the 66
rows, so "one bench per shelf" was wrong on its face.

2026-08-05 18:08 UTC · THREE STORIES WRITTEN — THE FORMAT, THE
NUMBER, AND THE CONFOUND THAT MAKES THE NUMBER SUSPECT · work PC

### The format, as it actually settled

A followable template, and the one real decision in it is the
FIRST section:

```text
frontmatter: type: chronicle-story · shelf · status: living · updated
# <item> — <one line saying what it is>
> CURRENT ENDING (<date>). <one blockquoted paragraph>
## What it is
## What raised it
## What changed, in order        ← the spine, one bullet per event
## Where it stands / What is still open
## Sources                        ← down-links only, ruling 5
```

**THE ENDING GOES FIRST, IN A BLOCKQUOTE, AND THAT IS THE FORMAT'S
LOAD-BEARING CHOICE.**
[D-059](../../../DECISIONS.md#d-059--the-chronicle-layer)'s ending
rule says a later fix is INCORPORATED and the ending rewritten at
that weld — which only works if a later seat can find the ending in
one second without reading the story. Putting it at the top, visually
set apart, makes the rewrite point unmissable. It also answers the
reader's actual question ("what is this and where did it land?")
before any history, which is the whole reason the layer exists.

The `## What changed, in order` spine wants ONE BULLET PER EVENT,
each opening with its decide anchor or PR and then saying what
changed — not a paragraph of narrative. It reads as a spine and it
makes the next incorporation obvious: a new event is a new bullet
plus an ending rewrite.

**ONE CONTRACT CORRECTION, made because the record disagreed with
the spec.** The spec said at birth that land had run THREE times.
Deriving it at write time — from the board's own paint-stamp history
rather than from this seat's memory of the sitting — returned FOUR:
AUTO-LAND 13:53 UTC · MODE P 16:02 · flight 3's superseded cockpit
retiring by Scenario 2 and writing no board · MODE P 21:16. The spec
now carries four and says it was corrected. A pilot whose own
contract miscounted the thing it was measuring is exactly the case
the derivation law exists for, and it was caught by obeying it.

### The three hard cases, and how the format handled them

- **Absorbing new evidence (the wake-lock) — HANDLED WELL.** Flight
  4's observation became one more bullet on the spine plus a rewritten
  ending. No restructuring. This is the case the format is built for.
- **An ending the census got wrong (land) — HANDLED, AND IT TAUGHT
  THE BETTER FRAMING.** The census row read "no recorded run"; the
  ritual has since run four times. The temptation was to call the
  census wrong. IT WAS NOT — it was true on 2026-07-28 and the world
  moved, which is *precisely* the condition the ending rule exists
  for. The story says so, and the INDEX row now points at the story
  instead of restating a superseded sentence.
- **Carrying an open defect (the canary) — HANDLED, BUT IT NEEDS A
  NAMED SECTION.** A story whose subject is partly broken cannot put
  that in "Where it stands" as an afterthought; it earned
  `## What is still open — and this story does not close it`. Two
  live items sit there: §Canary defining its own ack token two ways,
  and the word-vs-token question the founder filed DEFERRED with no
  ruling. Writing either as settled would have been the easiest
  error available.

### The number, and why it should not be trusted as-is

| Story | Lines | Sources opened | Wall clock |
|---|---|---|---|
| the wake-lock | 166 | ~5 reads (census row, §Wake-lock, 4 decisions, ledger, 4 PR titles) | ~3 min |
| land | 147 | ~3 reads (board paint-stamp history, D-061/D-062, the two-lines ledger entry) | ~2 min |
| the canary handshake | 151 | ~3 reads (§Canary in two parts, the deferred IDEAS line) | ~2 min |

**THE CONFOUND, AND IT IS LARGE ENOUGH TO INVALIDATE THE NUMBER FOR
PLANNING.** This session had spent the preceding hours inside flight
4, the summon test and the charter fix — which is to say inside the
wake-lock, land, and §Canary specifically. THREE OF THE THREE
STORIES WERE ABOUT MATERIAL THIS SEAT HAD JUST READ. A cold session
would have to open flight 4's probe, four decisions, the ledger and
the skill text from nothing, and the honest estimate for that is
several times what the table shows. The measurement is real but it
is a FLOOR, not an average, and it is a floor measured under the
best possible conditions.

**AND THE INFERENCE THAT FOLLOWS IS AN INFERENCE, NOT A
MEASUREMENT — stated that way because the confound above makes it
so.** The reasoning: gathering was already done before the clock
started, and what the clock then measured was 2–3 minutes per story.
So gathering is the one quantity this pilot did NOT measure, and the
claim that it dominates rests on the gap between "3 minutes with
sources in hand" and the several hours this session had already
spent acquiring them — a comparison, not an experiment. IT IS THE
BEST AVAILABLE READING AND IT COULD BE WRONG; a cold bench writing
one story would settle it in an afternoon.

### The recommendation for the remaining 63

**SHELF-SIZED BENCHES, and not all-at-once** — offered as a
recommendation resting on the inference above rather than on the
measured number, which is the honest weight to give it. Four
shelves — but NOT one bench each, because the shelves are wildly
uneven and the numbers say so. Derived from the INDEX at write time:
**Shelf I 12 rows · Shelf II 13 · Shelf III 32 · Shelf IV 9** (66
total, 3 written, 63 left). Shelf III alone is half the census and
is plainly several benches; Shelf IV's nine are product pieces whose
sources are code and specs rather than decisions. So: one bench per
shelf for I, II and IV, and Shelf III split by sub-theme — each
bench reading its slice's sources once and writing those stories
together. This pilot wrote 2 of Shelf II's 13 and 1 of Shelf I's 12, so it has
SAMPLED two shelves rather than gathered either — no shelf is close
to done.
The alternative D-060 named — the load-bearing dozen — cuts across
shelves, so if the inference holds it pays the gathering cost
repeatedly; if the inference is wrong, the dozen is as good a shape
as this one.

TWO CAVEATS THE FOUNDER SHOULD WEIGH RATHER THAN INHERIT: the format
is proven on THREE system pieces and on nothing else — no `event`
story and no `product piece` has been written, and Shelf IV (Roam)
is nine product pieces whose sources are code and specs rather than
decisions, so its bench may need a different shape. And the ending
rule is proven only for *incorporation on paper*; no story has yet
been rewritten by a later weld, which is the mechanism's real test.

2026-08-05 17:52 UTC · bench birth · work PC — born on the founder's
scope ruling, taken at the desk minutes after phase 1 closed and the
cockpit box reached v5.

THE RULING WAS NOT ONE OF THE TWO OPTIONS ON OFFER.
[D-060](../../../DECISIONS.md#d-060--the-three-phase-standing-order)
had deferred phase 2's scope with two named choices — all 66 census
stories, or the load-bearing dozen first — and both commit before
anything is known. The founder took a third: a PILOT, sized to
measure rather than to cover.

WHY THAT IS THE WORKSHOP'S OWN METHOD, and worth writing down
because it keeps recurring: flight 1 flew TRIVIAL CARGO on the
principle that a failure observed on small cargo is a failure of the
MACHINERY rather than of the work. The pilot is that principle
applied to the vault. Twelve stories written to a format that turns
out wrong is twelve rewrites; three is three.

THE THREE ARE CHOSEN TO BREAK THE FORMAT, NOT TO BANK VALUE — one
absorbing brand-new evidence (the wake-lock, which flight 4 observed
firing for the first time), one whose census ending is now FALSE and
must be rewritten (land, whose row still reads "no recorded run"),
and one carrying a live unresolved defect (the canary handshake,
whose ack token is defined two ways in its own section). Three
important-but-similar stories would have exercised one case three
times.

## Where to look

- [the census](../../../../chronicle/INDEX.md) — the 66 proposed stories
  across four shelves; three of them stop being proposals here.
- [D-059](../../../DECISIONS.md#d-059--the-chronicle-layer) — the
  layer's six rulings: the unit, the ending rule, the structure,
  immutability beneath, down-links only.
- [D-076](../../../DECISIONS.md#d-076--phase-2-opens-with-a-three-story-pilot)
  — why a pilot, and why these three.
- [the spec](../../../specs/chronicle-pilot.md) — the contract and
  the hard case each story tests.
- [the ledger](../../README.md#the-ledger) — the
  chronology every story is derived from.
