---
type: design
title: Design — Roam's taste
status: living
---
# Design — Roam's taste

**This file OUTRANKS the global design law.** The law in
`~/.claude/CLAUDE.md` is the floor for every project on the
machine; where this file disagrees with it, THIS FILE WINS, and a
seat obeys it without argument
([D-084](record/DECISIONS.md#d-084--the-global-design-stack)).

**THE TASTE PASS RAN ON 2026-08-11 AND THE FOUNDER PICKED.** The
direction and the font pair are SET below and are no longer open
questions. What remains TBD is named as such, slot by slot: three
of the five reference images, and the colour tokens, which the
founder has not ruled.

A TBD is still not a blank to be helpfully filled — it is an UNMADE
DECISION. The rule below is unchanged and now applies to fewer
slots.

**WHAT A TBD MEANS FOR THE SEAT THAT HITS ONE**, because silence
is not the same as disagreement and
[D-084](record/DECISIONS.md#d-084--the-global-design-stack)'s
override rules only the disagreement:

| The slot | What a seat does |
|---|---|
| **Reserved to the founder** — the DIRECTION · the FONT PAIR · the COLOUR TOKENS · the REFERENCE IMAGES | **STOP AND ASK.** These four are the taste pass itself, and they are exactly the four [D-084](record/DECISIONS.md#d-084--the-global-design-stack)'s ownership row assigns to the founder. No floor exists to fall through to: the global law's own first instruction is to name a direction, and its colour rule ("one dominant, one sharp accent") constrains a palette without choosing one. A seat that picks any of the four has made the founder's decision for them. |
| **Every other TBD** — spacing, radii, motion feel, component-level calls | **FALL THROUGH TO THE FLOOR.** The global law governs, the choice is task-local, and it lands in the task's memory like any implementation call. |

**AS OF 2026-08-11 the DIRECTION and the FONT PAIR are SET**, and
the **COLOUR TOKENS** and **three of the five reference images**
remain reserved and unruled. The row above is the live answer for
each slot, not a description of how the file began — read the slot,
never a running total.

So: this file BEATS the global law where it speaks, DEFERS to it
where it is merely silent, and BLOCKS on the reserved slots above,
which are neither.

Sources:
[D-084](record/DECISIONS.md#d-084--the-global-design-stack)
[D-007](record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)
[FOUNDATION](FOUNDATION.md)
[HOME §Terms](HOME.md#terms)

## Direction

### place-first

**Ruled by the founder 2026-08-11.** The name is the whole
instruction, and it is three clauses:

- **The plan lives on a living map.** Not a list with a map beside
  it — the map is the surface the plan happens on.
- **Place is the ground.** Everything else — days, stops, cards,
  detail — sits on top of place and moves with respect to it. When
  the plan changes, the camera is how you feel the change.
- **Provenance pins to place.** A source is not a footnote at the
  bottom of a card; it belongs to the point on the map it is about.

The direction was chosen from a LIVE probe rather than a still,
after a first round of static candidates was rejected for varying
the typeface inside a single metaphor. That history, and the two
families that lost, are in
[the spec](record/specs/taste-pass.md).

**WHAT THIS DIRECTION COSTS, stated at the moment of choosing
rather than discovered later: place-first makes MAP PERFORMANCE ON
MID-RANGE PHONES A DESIGN CONSTRAINT.** A map is the most expensive
thing a phone can render, and this direction puts one under
everything.
[V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
PLANS FOR IT rather than meeting it as a surprise once the shell is
built. **That sentence is the founder's ruling**, recorded here
because it is a consequence of the direction and belongs with it.

What the plan should COVER is not ruled and is this bench's
suggestion, offered so T5 has somewhere to start and free to
disagree: a tile strategy, a camera-move budget, and a stated
answer for what the surface degrades to when the map cannot keep
up.

What was already fixed before the pick, and constrains this
direction as it would have constrained any other:
Roam's identity is **trust made visible** — confidence badges,
source attributions and "unverified" labels are first-class UI
citizens, and the surface is calm, legible and
explanation-forward ([FOUNDATION](FOUNDATION.md), condensed in
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)'s preamble). A direction that
buries provenance is wrong for this product however good it looks.

## Typography

**THE FACES ARE RATIFIED 2026-08-11**, as worn by the picked probe:

| Role | Face |
|---|---|
| Display | **Archivo** |
| Body | **Public Sans** |
| Utility — sources, times, badges, counts | **JetBrains Mono** |

**THE WEIGHTS ARE NOT RATIFIED, and this section will not pretend
otherwise.** The founder ratified the PAIR and named the probe's
loads as shortcuts; nobody ruled a weight. What governs until
someone does is the global law, which is a rule about the DISPLAY
face and about hierarchy, not a demand that body copy be set at
200:

- **Display (Archivo): 200 and 800.** The extremes, per the law.
  The probe's 500 was a shortcut and is superseded.
- **Body and utility: TASK-LOCAL and unruled.** Pick what is
  legible at the size in question, record the choice in the task's
  memory like any implementation call, and do NOT read the probe's
  `400;600` / `500;700` loads as decisions — they are what a probe
  loads to be felt.
- **Hierarchy comes from SCALE JUMPS of 3× or more**, never from
  nudging 16px to 18px. This is the half of the law that does the
  work.

Where the probe and this section disagree, this section wins; the
probe is a reference for MOTION and LAYOUT, never for type.

The banned-as-default list still applies: Inter, Roboto, Open Sans,
Arial, `system-ui`.

## Color & tokens

**TBD — the founder ruled the direction and the font pair, NOT the
palette.** What follows is the picked probe's WORKING PALETTE,
recorded because it is what the founder saw and approved as a whole
— but it is DERIVED FROM the ratified probe, not ratified in its
own right, and it is provisional until the token pass:

| Token | Value | Role in the probe |
|---|---|---|
| ink | `#0E1417` | text, chrome |
| paper | `#F7F7F4` | the rail and sheets that sit on the map |
| muted | `#6A737A` | secondary text, sources |
| rule | `#E2E3DE` | hairlines between stops |
| place | `#0B7A6B` | the map's own accent — pins, place-belonging |
| signal | `#E8590C` | caught conflicts and unverified facts, ONLY |

**This table is scheduled for deletion.** When the token pass runs
at
[V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
and the theme layer becomes the one source, THIS TABLE IS REMOVED
and this section points at that layer instead — so these values
never exist in two live homes.

One dominant colour plus one sharp accent; everything else
neutral. Confidence states (checked · unverified · stale) need
their own semantic tokens, because they are content in this
product rather than decoration.

**RULED tokens are not written here — and there are none yet.**
The table above is not a token set: it is the PROBE's working
palette, provisional and unruled, recorded so a seat can see what
the founder actually looked at. When the design foundations land
under
[V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
the token source of truth is the theme layer in the app —
Tailwind v4 theme variables + the shadcn/ui token set — and this
section will point at it rather than duplicate it. A hex literal in
a component is a decision nobody can find later; the same value
live in TWO homes is a contradiction waiting to ship, which is why
the table above carries an expiry rather than a promotion.

**WHAT A SEAT MAY DO WITH THESE VALUES IN THE MEANTIME, since the
palette is reserved and the work does not stop:** reaching for the
probe's working palette as a TASK-LOCAL fall-through, before the
token pass, is NOT ruling it — use it, and record the use in the
task's memory like any implementation call. **Proposing a palette
as ROAM'S, or writing any values into the app's token source of
truth, is the reserved act: that one stops and asks.**

## Reference images

**Two slots are SEEDED, three stay founder-supplied.** When a
reference is present it is THE TARGET, not inspiration: build it,
screenshot at 375px and 1440px, compare, iterate — three passes
maximum, then report the remaining gap.

| # | Reference | What it is the reference FOR | Added |
|---|---|---|---|
| 1 | *(empty — TBD)* | the plan day: how a long day reads without becoming a list | — |
| 2 | *(empty — TBD)* | the provenance layer: a claim carrying its source without the source shouting louder | — |
| 3 | [`place-first.html`](../public/spikes/taste/place-first.html) | **the opening moment** — the camera arriving, the day assembling on top of place, provenance appearing in sequence | 2026-08-11 |
| 4 | [`place-first.html`](../public/spikes/taste/place-first.html) | **motion** — spring character, stagger, and a caught conflict announcing itself IN TIME rather than appearing already-arrived | 2026-08-11 |
| 5 | *(empty — TBD)* | the ANTI-reference: one thing Roam must NOT look like, which makes the banned-defaults list checkable | — |

**SLOTS 3 AND 4 ARE SEEDED BY THE PICKED PROBE ITSELF**, which is
why it lives in this repo rather than being deleted with the round
that produced it: a reference has to be OPENABLE, and a screenshot
of motion is not a reference for motion. Run it, do not read it.
Its two rejected siblings sit beside it as the material that lost —
linked from that folder's index and marked there as not-picked, but
pointed at by NO REFERENCE SLOT, which is the distinction that
matters here.

**WHAT THE SEED DOES NOT COVER, said out loud because a narrowed
slot is easy to mistake for a filled one.** The spec originally
scoped slot 3 as first-run, empty state and the six questions —
onboarding and VOICE. The probe shows none of that: it opens on an
existing day. So slot 3 is seeded for THE OPENING OF A PLAN and
still owes a reference for the opening of the PRODUCT, which is
part of what slot 1 or a founder-supplied image must answer. Slot 4
is likewise seeded for spring character and announcement timing,
not for what a full re-validation ripple feels like after an edit —
the probe never edits anything.

**The probe is a reference for MOTION AND LAYOUT ONLY.** Its type
weights are superseded by the table above, and its palette is
provisional per §Color & tokens. A reference with no stated scope
gets applied to everything, which is exactly the failure this
column exists to prevent.

A slot names what it governs — a whole page, a component, a
motion feel — because a reference with no stated scope gets
applied to everything.

## States — every screen, every time

Loading · empty · error · long-content · mobile. All five ship
with the screen, in the same PR; a screen that renders only its
happy path is unfinished, and its states are not a follow-up task.

Roam adds a sixth that is specific to it: **the unverified
state.** Any fact the engine could not check renders as
unverified rather than being hidden or silently presented as
checked. This one is not taste and is not TBD — it is the
product's identity, and it is not the founder's taste pass to
change.

## The component kit

shadcn/ui on the **Base UI** primitive library — shadcn's current
default, the "nova" preset — never the legacy Radix option
([D-007](record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)).
Components are vendored files, so this choice deepens with every
one added; Radix remains available per-component if a gap ever
appears.

The machine's shadcn MCP server searches the registries and
returns install commands; it does not choose taste.

### The supply lines

`components.json` wires four component registries by namespace, so
a builder can pull from them without hunting for URLs:
**`@magicui` · `@aceternity` · `@motion-primitives` · `@skiper`.**
The namespace→URL map lives in `components.json` and ONLY there —
it is machine-readable, the CLI reads it, and a second copy in
prose would go stale the day a vendor moves a path.

Two things a builder meets immediately:

- **`@motion-primitives` was NOT verified.** Its URL is the one its
  own documentation gives, but on 2026-08-12 that host returned
  **429 to every request from this network — including its
  homepage** — so no dry-run has ever succeeded against it. Expect
  it to fail; if it does, the wiring is not the suspect.
- **Skiper's own docs write `@skiper-ui/<name>`**, while this repo
  wires the namespace as `@skiper`. A command copied from their
  site needs its namespace swapped.

Wiring a registry is a SUPPLY LINE, not an endorsement of anything
in it.

### THE ARRIVAL LAW

**A registry component ADAPTS ON LANDING. Arrival is not
ratification** — what the CLI writes is a DRAFT in Roam's terms
until all three of these are true:

1. **It adapts to [D-007](record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)** —
   shadcn/ui on Base UI, the "nova" preset. Anything arriving
   against Radix-era primitives is rewritten onto Base UI or not
   kept. Many registries still ship Radix-era code; that is the
   single most likely thing to be wrong on landing.
2. **It adapts to the token layer, once it exists** — no hex
   literals, no private scales. Until
   [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
   builds that layer, an arriving component's own values are
   task-local and recorded in the task's memory, exactly as
   §Color & tokens allows for the probe palette.
3. **It adapts to the design law** — the direction above, the
   banned defaults, the motion rules, and the five states. A
   component that ships a purple gradient or `system-ui` arrives
   with those stripped, not with an exception.

**SKIPER'S FREE TIER CARRIES AN ATTRIBUTION DUTY: attribute, or do
not ship free-tier items in the product.** There is no third
option, and "we will add the credit later" is the failure this
sentence exists to prevent. Skiper Pro remains a CONDITIONAL
PURCHASE under the founder's standing ruling — it is not bought
because a component would be convenient.

**THE OTHER THREE REGISTRIES WERE NOT WALKED, and silence here is
not permission.** Skiper's duty is the founder's ruling; MagicUI,
Aceternity and motion-primitives each run their own free/pro terms
which this bench did not read. So the rule for them is procedural
rather than substantive: **read the vendor's licence at FIRST USE,
record what it requires in that task's memory, and treat an
unread licence as a blocker rather than a default-yes.** The
attribution question is asked of every registry; only one of the
four has its answer written down.

## The review gate

A diff that changes what a screen renders faces the
**design-review agent** before THE GATE — it screenshots the
running surface at 375px and 1440px, grades it against this file
first and the global law second, and returns counted findings. An
unreachable surface, or a needed slot still TBD, is REPORTED at
the gate rather than passed or silently skipped; what counts as a
UI diff, and what happens when no surface can be reached, is
fixed in [LAWS §Workflow](LAWS.md#workflow-non-negotiable).
