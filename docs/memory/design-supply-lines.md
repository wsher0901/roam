---
type: memory
id: design-supply-lines
updated: 2026-08-12 · birth · work PC
---
# design-supply-lines — where components come from, and how the gate sees motion

## Status

bench ready — born 2026-08-12 at the work PC control tower, on the
founder's two-part mandate.

## What this task is

Wire four shadcn registries into `components.json` with the ARRIVAL
LAW that governs what lands from them, settle the chart layer with
a D-number, and give the `design-review` agent MOTION EYES — video
or trace for motion-intensive surfaces, since a screenshot cannot
see a spring. Contract:
[the spec](../record/specs/design-supply-lines.md).

## Pending issues

**ONE REGISTRY COULD NOT BE VERIFIED, AND IT IS WIRED ANYWAY.**
`@motion-primitives` is the URL its own documentation gives —
`npx shadcn add "https://motion-primitives.com/c/in-view.json"` —
but every request from this machine returns **429**, including the
site's HOMEPAGE, with an HTML body rather than JSON. Plain curl, a
browser User-Agent, the shadcn CLI by namespace, and the CLI by
direct URL all fail identically, and `/`, `/docs`, `/r/…` and
`/c/…` all 429, which is what a host-level block looks like rather
than a wrong path. So the template rests on the vendor's own docs,
NOT on a passing dry-run, and a builder reaching for that namespace
may meet the same wall. The other three were verified through the
CLI and wrote nothing.

## Left / idle

The home PC inherits Part B the same way it inherits the design
stack — through the standing [DASHBOARD](../DASHBOARD.md) Needs-you
line, since `~/.claude/agents/design-review.md` lives outside git
and only a re-run of machine-setup step 12 puts it there.

## The story

2026-08-12 · BORN · work PC

The two halves share a bench because they are the same problem
seen from opposite ends: Part A widens what can ENTER the product,
and Part B widens what the gate can SEE before it does. Widening
the first without the second is how a product acquires four
registries' worth of house style.

**THE ARRIVAL LAW IS THE POINT OF PART A, NOT THE WIRING.** Wiring
four registries takes one JSON object; what it changes is that a
seat can now install someone else's design decisions in one
command. The law says what that command actually produces: a
DRAFT. Three adaptations are owed on landing — to
[D-007](../record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)'s
Base UI (many registries still ship Radix-era code, which is the
single most likely thing to be wrong), to the token layer once T5
builds it, and to the design law's bans. Arrival is not
ratification, and the sentence exists because nothing else in the
repo would have said so.

**THE CHART DECISION WAS CHECKED BEFORE IT WAS WRITTEN**, which is
the half worth recording. The obvious failure was to assume a
chart component built for a Radix-era kit works under Base UI.
It does — but for a stated reason rather than by luck: shadcn
publishes a Base UI variant of its chart components and says
plainly that it does not wrap Recharts, so the chart layer touches
no primitive at all. A chart is SVG; primitives govern popovers
and menus, which charts do not use. Verified from the vendor's
documentation, then the entry was cut.

**PART B CLOSED A LINE THIS SAME SESSION HAD FILED.** The
motion-blindness of the review gate was discovered from the other
side — the founder rejected three static specimens because stills
cannot judge a moving product — and filed as an inbox line hours
earlier. It is now built: the master text carries the capture
duty, and the machine copy was rewritten FROM that master and
proven identical by extraction and diff rather than by claiming to
have saved the file. The mastering pattern the design-stack bench
introduced paid off the first time it was exercised.

## Where to look

- [the spec](../record/specs/design-supply-lines.md) — goal, out of
  scope, plan, Done-means.
- [D-007](../record/DECISIONS.md#d-007--shadcnui-builds-on-base-ui)
  — the primitive choice every arriving component must adapt to.
- [machine-setup](../skills/machine-setup.md) step 12 — the agent's
  master text.
