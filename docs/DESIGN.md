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

**Every taste slot below is TBD, awaiting the founder's taste
pass.** A TBD is not a blank to be helpfully filled — it is an
UNMADE DECISION, and the global law's "commit to one named
direction before any UI code" cannot be satisfied by a seat
inventing one here. A seat that needs a TBD asks for it; it does
not guess.
→ its line in [IDEAS](IDEAS.md)

Sources:
[D-084](record/DECISIONS.md#d-084--the-global-design-stack)
[D-007](record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)
[FOUNDATION](FOUNDATION.md)
[HOME §Terms](HOME.md#terms)

## Direction

**TBD — awaiting the founder's taste pass.**

One NAMED aesthetic direction, in the founder's words. Not a mood,
not a list of adjectives — a name a seat can be held to.

What is already fixed, and constrains any direction chosen:
Roam's identity is **trust made visible** — confidence badges,
source attributions and "unverified" labels are first-class UI
citizens, and the surface is calm, legible and
explanation-forward ([FOUNDATION](FOUNDATION.md), condensed in
[DESIGN-KICKOFF](DESIGN-KICKOFF.md)'s preamble). A direction that
buries provenance is wrong for this product however good it looks.

## Typography

**TBD — awaiting the founder's taste pass.**

- Display face: TBD
- Body face: TBD
- Utility/mono face (captions, data, badges): TBD

The global law's typography rules apply beneath this heading until
it is filled: a distinctive display + body pair, weight extremes
(200 / 800) rather than 400/600, and hierarchy from scale jumps of
3× or more. The banned-as-default list — Inter, Roboto, Open Sans,
Arial, `system-ui` — applies here too.

## Color & tokens

**TBD — awaiting the founder's taste pass.**

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

**Five slots, all empty.** When a reference is present it is THE
TARGET, not inspiration: build it, screenshot at 375px and 1440px,
compare, iterate — three passes maximum, then report the remaining
gap.

| # | Reference | What it is the reference FOR | Added |
|---|---|---|---|
| 1 | *(empty)* | — | — |
| 2 | *(empty)* | — | — |
| 3 | *(empty)* | — | — |
| 4 | *(empty)* | — | — |
| 5 | *(empty)* | — | — |

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

A diff that touches UI faces the **design-review agent** before
THE GATE — it screenshots the running surface at 375px and 1440px,
grades it against this file first and the global law second, and
returns counted findings. Unreachable surface, or a needed slot
still TBD, is reported as such rather than passed
([LAWS §Workflow](LAWS.md#workflow-non-negotiable)).
