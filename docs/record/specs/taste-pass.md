---
type: spec
id: taste-pass
title: The taste pass — three directions, and the reference slots
status: shipped
stage: workshop
branch: docs/taste-pass
pr: #349
opened: 2026-08-11
shipped: 2026-08-11
---

# taste-pass — the shortlist, and the choice only the founder can make

**Links:** [DESIGN](../../DESIGN.md) ·
[D-084](../DECISIONS.md#d-084--the-global-design-stack) ·
[FOUNDATION](../../FOUNDATION.md) ·
[V1.S2.T5](../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
· [IDEAS](../../IDEAS.md)

## Goal

Fill the founder-reserved slots in [DESIGN](../../DESIGN.md) that
this bench can reach — the NAMED DIRECTION, the font pair, and the
five reference images — by putting a real shortlist in front of the
founder and recording the choice. **The COLOUR TOKENS are reserved
too** ([D-084](../DECISIONS.md#d-084--the-global-design-stack)'s
ownership row names four, not three) and the founder did not rule
them here, so they stay TBD.

**The tower's half is this document; the founder's half is one
word.** [D-084](../DECISIONS.md#d-084--the-global-design-stack)
reserves these slots precisely because a seat that fills them has
chosen the product's face, so this bench proposes and stops.

## Out of scope

- **Choosing.** Three directions are offered, one is RECOMMENDED
  with its reasoning, and none is written into
  [DESIGN](../../DESIGN.md) until the founder says which.
- **Any UI code.** No component, no theme file, no token export.
  The first screen belongs to
  [V1.S2.T5](../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1);
  this bench only decides what it should look like.
- **The specimen markup** — ~~only EXTRACTED VALUES enter the
  repo; the markup is scaffolding~~. **AMENDED AT THE PICK, and the
  amendment is the founder's ruling rather than a drift:** round
  one's static specimens obeyed this and are gone, but the PICKED
  ROUND-TWO PROBE now SEEDS reference slots 3 and 4, so its markup
  lives in `public/spikes/taste/` on purpose. The reason is exact:
  **a reference for MOTION cannot be a value or a screenshot — it
  has to be runnable.** The two rejected probes sit beside it as
  the material that lost — linked from that folder's index and
  marked there as not-picked, but pointed at by NO REFERENCE SLOT.
- **The reference IMAGES themselves.** This bench defines what each
  of the five slots is FOR; the images are the founder's to supply
  or approve.

## Plan

1. Three directions, each named, each with a font pair, a palette,
   and a stated risk.
2. A specimen page per direction carrying the SAME real Roam
   content — a plan day with checked and unverified facts — so the
   comparison is of the design and not of the copy.
3. Render each at 375px and 1440px through the design stack that
   [#345](https://github.com/wsher0901/roam/pull/345) installed,
   and read the results.
4. Define the five reference slots by what they GOVERN.
5. Stop at a `BLOCKED:` question. On the founder's word, fill
   [DESIGN](../../DESIGN.md) and ship.

## The three directions

Each was built as a specimen page carrying IDENTICAL content — a
Kanazawa plan day with three checked facts, one unverified, and
one caught conflict — and rendered at 375px and 1440px, so what
differs below is the design and never the copy.

**The calibration check, run before anything else.** The
`frontend-design` skill names three looks that AI produces
regardless of subject: (1) cream ground + high-contrast serif +
terracotta accent, (2) near-black ground + one acid accent, (3)
broadsheet columns with hairline rules and zero radius. **None of
the three below is any of those**, and two of them were moved
deliberately to avoid one: A's ground is pale sage rather than
cream and its accent ochre rather than terracotta; B is a LIGHT
instrument rather than the dark-plus-acid default.

### A · ALMANAC — a field guide that happens to be a trip

The aesthetic of a printed reference: plates, captions, generous
margins, a source under every claim. It says *this is a document
you can check*, not a feed you scroll.

| | |
|---|---|
| Display | **Fraunces** — weights 200 and 800 |
| Body | **Newsreader** — 400, italic for asides |
| Utility | **IBM Plex Mono** — 600, for sources, times, badges |
| Ground | `#E9EBE3` pale sage-grey |
| Ink | `#14231C` deep forest |
| Accent | `#9A6B12` ochre |
| Muted | `#66705F` · rules `#C8CCBE` · plate `#DFE3D7` |

**Read at both widths:** the most pleasant to read by a distance,
and the mobile column is genuinely lovely. **And its problem is
structural, not fixable by tuning:** the CAUGHT callout is the
quietest element on the page. A field guide's whole manner is
unhurried, which is the opposite of "we found a problem before you
left". The direction fights the promise.

### B · INSTRUMENT — confidence as a readout

The aesthetic of a measuring device, in light rather than dark. A
strip of readings sits above the plan: stops, checked, unverified,
conflicts caught. Unverified is drawn as an OUTLINE rather than a
second colour — the absence of ink is the signal.

| | |
|---|---|
| Display | **Space Grotesk** — 300 and 700 |
| Body | **IBM Plex Sans** — 400, 600 |
| Utility | **IBM Plex Mono** — 600 |
| Ground | `#DFE3E4` cool grey · panel `#EDEFEF` |
| Ink | `#0F1416` |
| Accent | `#1B3FE0` electric blue |
| Muted | `#5E686B` · rules `#C3CACC` |

**Read at both widths:** the readout strip is the strongest single
idea in the whole shortlist — it is the only direction where **the
number of problems caught is visible before you read a word**, and
it survives the mobile collapse into a 2×2 grid. The cost is
temperature: the grey ground is inert, and travel is not an inert
subject.

### C · SIGNAGE — wayfinding, where the warning is the loudest thing

The aesthetic of transit signage: a colour band, platform-number
time chips, one signal colour that means *look here*. Yellow is
spent ONLY on caught conflicts and unverified facts — nowhere
else, ever.

| | |
|---|---|
| Display | **Bricolage Grotesque** — 200 and 800 |
| Body | **Public Sans** — 400, 700 |
| Utility | **JetBrains Mono** — 500, 700 |
| Ground | `#FAFAF7` off-white |
| Ink | `#111214` |
| Dominant | `#005EB8` rail blue |
| Signal | `#FFD100` — reserved for caught + unverified |
| Muted | `#5A5F66` · rules `#DEDFDA` |

**Read at both widths:** the caught conflict is the loudest thing
on the page at 1440px AND at 375px, which is the only direction
where the visual hierarchy matches what the product is FOR. Time
chips read as platform numbers without being told. Two risks, both
real: yellow at scale fatigues, so the discipline of spending it
only on signal is load-bearing rather than stylistic; and this is
the most branded of the three, so it will date fastest.

### The recommendation

**C · SIGNAGE, with B's readout strip grafted in.**

The reasoning is one sentence: Roam's promise is that it CATCHES
things, and C is the only direction where the caught thing is the
loudest element on the screen. A is the best reading experience
and the wrong instrument for this promise — its manner is calm
where the product needs to be pointed. B has the best single
component, and that component transplants cleanly: the readout
strip in C's palette, above the plan, turns "two problems found"
into something you see before you read.

**What the graft costs:** C's signal yellow and B's blue readout
must not compete, so the readout stays neutral — counts in ink,
only the non-zero unverified/conflict figures picking up colour.

## ROUND ONE IS ANSWERED: none of A/B/C

**The founder rejected all three on 2026-08-11**, and the reason is
the contract for round two, kept in the founder's own terms:

> Round one varied the TYPEFACE INSIDE A SINGLE METAPHOR — static
> print — while Roam is a UI/UX-, motion- and graphics-intensive
> product. Stills can judge a font pair; they cannot judge a
> direction for a moving product.

So round two varies **the metaphor and the motion character**, and
**is judged LIVE.** The three directions above are not discarded —
their palettes and pairs survive as working values — but they are
demoted from candidates to material. THE FONT PAIR IS NO LONGER
PART OF THE PICK: each round-two probe carries a working pair so it
can be felt at all, and the pair decision returns to the founder
separately, independent of which family wins.

**What round one got wrong is worth naming**, because the same
mistake is cheap to repeat: three directions that differed in
typeface and palette while sharing one metaphor is ONE direction
in three costumes. The specimens were honest and the axis was
wrong.

## Round two — three families, judged live

Same Kanazawa day in all three, so the metaphor and the motion are
what differ. Every probe demonstrates, live: the opening moment (a
day assembling) · one caught conflict announcing itself IN TIME ·
one card→detail transition · provenance states appearing in motion
· at 375 and 1440 · springs throughout, never a linear easing ·
Motion (the library named by the stack) · the global design law's
bans · and each names its direction on-screen.

| # | Family | The metaphor, and what its motion says |
|---|---|---|
| 1 | **PLACE-FIRST** | The plan lives on a living map ([MapLibre](../../SETUP.md#stack), per the stack law); the camera travels between stops, and place is the ground everything sits on. Motion says: *you are somewhere, and the day moves through it.* |
| 2 | **OBJECT-FIRST** | The plan as a tactile product — cards with weight, drag-to-reorder that settles on a spring, and a conflict that INTERRUPTS the motion, shoving the stack and striking the line through, rather than sitting in a coloured box. Motion says: *this is a thing you hold and rearrange.* |
| 3 | **TYPE-FIRST** | The editorial soul made kinetic: the headline assembles word by word, sources underline themselves in as they scroll into view, and the caught conflict REWRITES ITS OWN SENTENCE — the old line struck through, the new one typed in. Motion says: *this is being written for you, and it corrects itself.* |

**Working pairs, provisional and stated on every probe:** place-first
Archivo + Public Sans + JetBrains Mono · object-first Space Grotesk
+ IBM Plex Sans + Plex Mono · type-first Fraunces + Newsreader +
Plex Mono.

**Where the probes live and why.** `public/spikes/taste/`, served
by this branch's Vercel preview — throwaway files on a branch that
never merges, so no component, no route and no dependency enters
the product. The alternative considered was a self-contained
published page, and it was REJECTED for a concrete reason: that
surface forbids remote requests, which would have forced probe 1 to
fake its map. A place-first probe with a fake map tests nothing.

**THE URLS, and the one thing that is not obvious about them:**

```text
https://roam-git-docs-taste-pass-wsher0901s-projects.vercel.app/spikes/taste/
```

The branch alias is stable — it follows the branch, not a build, so
it keeps working as the probes change. **Preview deployments on this
project are PROTECTED**, so that URL asks for a Vercel login;
signed in as the project owner it simply opens. For a phone, or any
browser that is not signed in, a 23-hour share link bypasses the
wall without changing the project's protection setting, which is
not a bench's call to weaken. The link rides the gate comment on
[#349](https://github.com/wsher0901/roam/pull/349), where it can be
reissued when it expires.

**Every probe was verified AS SERVED**, not merely as authored:
each URL was opened from the deployment and screenshotted at both
widths. That check is the reason the protection wall was found at
all — the first pass captured three identical images, which is what
a login page looks like when you assume a 200 means your page.

## The five reference slots

A reference is a TARGET, not a mood — the law says build it,
screenshot at both widths, compare, three passes maximum. So each
slot names what it GOVERNS, because a reference with no stated
scope gets applied to everything.

| # | Governs | What a good reference for it shows |
|---|---|---|
| 1 | **The plan day** — the densest screen | how a long day reads without becoming a list; where the eye rests |
| 2 | **The provenance layer** — badges, source lines, the unverified state | how a claim carries its source without the source shouting louder than the claim |
| 3 | **The opening moment** — ~~first run, empty state, the six questions~~ · NARROWED AT THE PICK to the opening of a PLAN, which is what the seeding probe shows | how a product asks for input without a form; the voice — **still owed, and named as owed in [DESIGN](../../DESIGN.md)** |
| 4 | **Motion** — ~~what an edit feels like when it re-validates the whole plan~~ · NARROWED AT THE PICK to spring character, stagger and announcement timing | timing and restraint; the re-validation ripple is **still owed** — the probe never edits anything |
| 5 | **The ANTI-reference** — one thing Roam must NOT look like | names the failure concretely, so the banned-defaults list stops being abstract |

Slot 5 is the unusual one and it earns its place: the global
design law bans defaults in words, and a named anti-reference is
what makes that ban checkable by the design-review agent.

## Done means

- [x] Three directions, each with the calibration check stated —
      no direction lands in one of the three named AI-default
      clusters.
- [x] Specimens rendered at both widths and READ, not merely
      produced.
- [x] The five reference slots each name what they govern.
- [x] ROUND ONE: three directions offered, ALL THREE REJECTED —
      the axis was wrong, not the execution.
- [x] ROUND TWO: three families built as LIVE probes, judged in
      motion at both widths; the founder chose **PLACE-FIRST** on
      2026-08-11.
- [x] [DESIGN](../../DESIGN.md)'s reserved slots are filled with
      that choice and nothing else: the direction `place-first` with
      its three clauses, the font pair RATIFIED as worn by the picked
      probe (Archivo · Public Sans · JetBrains Mono, at the global
      law's weights rather than the probe's shortcuts), and
      reference slots 3 and 4 seeded by the probe itself. Slots 1,
      2 and 5 stay TBD and say so; the PALETTE stays TBD too,
      recorded as the probe's working values because the founder
      ruled the direction and the pair, not the colour.
- [x] The direction's cost is recorded WITH the direction: map
      performance on mid-range phones is a design constraint that
      [V1.S2.T5](../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
      plans for rather than discovers.
- [ ] Gates green; the pushed head's Actions run green.
- [x] Shipped to THE GATE — not merged. Tower-authored, so the
      external Web review precedes the founder's word.

## Notes for whoever resumes this bench

**The recommendation is not the decision, and a resuming seat must
not read it as one.** If the founder has not answered, the slots
stay TBD however persuasive this document is.
