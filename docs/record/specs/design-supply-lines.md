---
type: spec
id: design-supply-lines
title: Design supply lines, and motion eyes for the review gate
status: open
stage: workshop
branch: feat/design-supply-lines
opened: 2026-08-12
---

# design-supply-lines — where components come from, and how the gate sees motion

**Links:** [DESIGN](../../DESIGN.md) ·
[D-007](../DECISIONS.md#d-007--shadcnui-builds-on-base-ui) ·
[D-084](../DECISIONS.md#d-084--the-global-design-stack) ·
[SETUP §Stack](../../SETUP.md#stack) ·
[machine-setup](../../skills/machine-setup.md) ·
[V1.S2.T5](../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)

## Goal

Two halves, one bench.

**PART A — SUPPLY LINES.** Wire four shadcn component registries
into `components.json` so a builder can pull from them by
namespace, state the LAW that governs what happens when one of
those components lands, and settle the chart layer with a
D-number.

**PART B — MOTION EYES.** The `design-review` agent grades
screenshots, which cannot see a spring. Amend its MASTER TEXT so
motion-intensive surfaces are captured as VIDEO or TRACE, re-run
the install so the machine copy matches, and close the inbox line
that asked for it.

## Out of scope

- **Installing any component.** Registries are WIRED and verified
  to resolve; nothing is added to `src/`. The first real component
  belongs to
  [V1.S2.T5](../../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1).
- **Buying Skiper Pro.** It stays a conditional purchase under the
  founder's standing ruling; only the free namespace is wired.
- **The token layer.** The arrival law REFERS to it; T5 builds it.
- **The home PC.** It inherits Part B through the standing
  [DASHBOARD](../../DASHBOARD.md) Needs-you line, as the design
  stack itself did.

## Plan

1. `components.json` gains four namespaced registries, each URL
   verified by a real dry-run install that writes nothing.
2. The ARRIVAL LAW, homed in [DESIGN](../../DESIGN.md)'s component
   section — beside the component doctrine it extends.
3. `decide` — one D-number for the chart layer, cut only after
   Base UI compatibility is VERIFIED rather than assumed.
4. The agent's master text in
   [machine-setup](../../skills/machine-setup.md) step 12 gains the
   motion-capture duty; the live `~/.claude` file is rewritten from
   it and proven identical by the extract-and-diff test.
5. [IDEAS](../../IDEAS.md)'s motion-blindness line closes to the
   ledger — built, not filed.

## Done means

- [x] THREE of four registries resolve THROUGH THE CLI
      (`@magicui`, `@aceternity`, `@skiper`), dry-run, writing
      nothing. **`@motion-primitives` COULD NOT BE VERIFIED** — its
      host returns 429 to every client and every path including its
      homepage, so the template rests on the vendor's own docs. It
      is wired as mandated with the failure recorded, not papered
      over.
- [x] The arrival law states all three adaptations and the
      attribution duty, and says plainly that arrival is not
      ratification.
- [x] One D-number for the chart layer, with Base UI compatibility
      verified from the vendor's own docs before the entry was cut.
- [x] The agent's master and the machine copy are proven identical
      by extraction and diff, not by assertion.
- [x] The inbox line moves to the outcome ledger with its vehicle.
- [ ] Gates green; the pushed head's Actions run green.
- [ ] Shipped to THE GATE — not merged.

## Notes for whoever resumes this bench

**A registry is a supply line, not a design decision.** The whole
risk of this bench is that wiring four sources makes it feel like
those sources have been approved. They have not: the arrival law
exists precisely because a component that lands is a DRAFT in
Roam's terms until it has been adapted to
[D-007](../DECISIONS.md#d-007--shadcnui-builds-on-base-ui), to the
tokens, and to the design law.
