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
| **Reserved to the founder** — the DIRECTION, the FONT PAIR, the REFERENCE IMAGES | **STOP AND ASK.** These three are the taste pass itself; no floor exists to fall through to, because the global law's own first instruction is to name a direction. A seat that picks one has made the founder's decision for them. |
| **Every other TBD** — spacing, radii, motion feel, component-level calls | **FALL THROUGH TO THE FLOOR.** The global law governs, the choice is task-local, and it lands in the task's memory like any implementation call. |

So: this file BEATS the global law where it speaks, DEFERS to it
where it is merely silent, and BLOCKS on the three slots above,
which are neither.

Sources:
[D-084](record/DECISIONS.md#d-084--the-global-design-stack)
[D-007](record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)
[FOUNDATION](FOUNDATION.md)
[HOME §Terms](HOME.md#terms)

## Direction

# place-first

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
PLANS FOR IT — tile strategy, camera-move budget, and what the
surface degrades to when the map cannot keep up — rather than
meeting it as a surprise once the shell is built. This is the
founder's ruling, recorded here because it is a consequence of the
direction and therefore belongs with the direction.

What is already fixed, and constrains any direction chosen:
Roam's identity is **trust made visible** — confidence badges,
source attributions and "unverified" labels are first-class UI
citizens, and the surface is calm, legible and
explanation-forward ([FOUNDATION](FOUNDATION.md), condensed in
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)'s preamble). A direction that
buries provenance is wrong for this product however good it looks.

## Typography

**RATIFIED 2026-08-11**, as worn by the picked probe:

| Role | Face | Weights in real use |
|---|---|---|
| Display | **Archivo** | 200 and 800 — the extremes |
| Body | **Public Sans** | 400, with 700 for emphasis |
| Utility — sources, times, badges, counts | **JetBrains Mono** | 500 and 700 |

**THE PROBE'S WEIGHTS WERE A SHORTCUT AND ARE NOT THE RULE.** It
loaded Archivo at 500/800 and Public Sans at 400/600 because a
probe loads what it needs to be felt. Real usage follows the global
law: **weight extremes — 200 and 800 — rather than living at
400/600**, and hierarchy from SCALE JUMPS of 3× or more rather than
from nudging sizes. Where the probe and this table disagree, this
table wins; the probe is a reference for MOTION and LAYOUT, never
for type weights.

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

One dominant colour plus one sharp accent; everything else
neutral. Confidence states (checked · unverified · stale) need
their own semantic tokens, because they are content in this
product rather than decoration.

**Tokens are not written here.** When the design foundations land
under
[V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1),
the token source of truth is the theme layer in the app —
Tailwind v4 theme variables + the shadcn/ui token set — and this
section points at it rather than duplicating values. A hex literal
in a component is a decision nobody can find later; a hex literal
in TWO files is a contradiction waiting to ship.

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
Its two rejected siblings sit beside it as the material that lost,
clearly marked in that folder's index and referenced by nothing.

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

## The review gate

A diff that changes what a screen renders faces the
**design-review agent** before THE GATE — it screenshots the
running surface at 375px and 1440px, grades it against this file
first and the global law second, and returns counted findings. An
unreachable surface, or a needed slot still TBD, is REPORTED at
the gate rather than passed or silently skipped; what counts as a
UI diff, and what happens when no surface can be reached, is
fixed in [LAWS §Workflow](LAWS.md#workflow-non-negotiable).
