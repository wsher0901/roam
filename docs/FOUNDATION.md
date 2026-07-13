---
type: foundation
title: Foundation
status: living
---
# Foundation

## What Roam is
One engine for travel planning. It assists at any level of certainty —
no idea, some idea, exact idea of where to go — and any level of input,
from the floor (origin + free dates) to rich preferences. Destination is
just another unknown the engine resolves. Roam starts as the pre-trip
brain — everything before departure; the boundary moves by roadmap
decision, never by drift. Its identity is comprehensiveness — it catches
the minute, checkable details people miss — and it treats the traveler's
time as the scarcest resource.

## The spine
One loop, three exercises of the same engine:
1. Suggest — from whatever is given (floor: origin + dates), return
   ranked trip options, each with its reasons.
2. Plan — from a selection, produce the full day-by-day plan, optimized
   by construction.
3. Edit + revalidate — the user moves anything in time or place; the
   engine re-validates the WHOLE plan, explains whether the change is
   good or bad and what it knocks over. Never a silent squeeze-in.

Every change creates a new plan version: full history, one-click revert.
No fixed modes: one conversation flows between all three.

## What Roam checks
Each family is a pluggable check module; five today, and the set is
open — any condition the founder or Claude finds load-bearing enters
as a new family by decision:
- Weather per activity — rain, wind, fog, temperature; real forecast
  when the trip is near, climatology when it is far — and the plan says
  which it used.
- Sky & sea — moon phase, daylight and golden hours, tides; seasonal
  nature timing (foliage, blooms, aurora windows).
- Feasibility — opening hours, seasonal closures, realistic distances,
  cost fit (estimate ranges).
- Time & transport — flight-time sense (peak vs off-peak days and hours;
  no pointless extra nights; add a night when a red-eye does not fit the
  traveler; jet-lag awareness); airport choice in multi-airport regions;
  backward-chained departure logistics (target takeoff -> boarding ->
  security buffer -> door-to-airport mode and leave-time); within-trip
  transport — what to ride and why. The most data-gated family:
  schedule-level facts ship only with a consistently reliable source.
- Crowds & calendar — peak vs off-peak, public holidays and school
  breaks, local events that spike crowds or close streets, trending
  spots.

## The reliability law
NEVER fabricate anything. Every fact is checked. A check module ships
only when its information source is reliable and consistently
obtainable; anything unverifiable is labeled unverified in the plan —
never guessed. Every check declares its source and confidence.

## The dataset — the quiet asset
Every fact a check fetches or derives is stored: structured,
timestamped, with its source and confidence. Place-and-condition
knowledge compounds into a proprietary dataset; it is knowledge about
places and conditions, not personal data. Later: anonymized interaction
signals tune the ranking.

## Principles
- One engine, no modes.
- Every condition check is a plug-in: adding one never rewrites what
  exists — it adds a module. Results still move: every new check
  re-tunes the rankings, by design.
- Depth before breadth — fewer checks done deep beat many done shallow;
  breadth arrives module by module.
- The floor input always works: origin + dates is enough.
- Time optimization is first-class: schedules, buffers, and sequencing
  are computed, not approximated.
- In-app first: results render inside Roam, not as links out — maps,
  timelines, plans, and whatever the product comes to show.
- Explain everything: every ranking and every edit verdict carries its
  reasons.
- Room for monetization, never at the product's expense.
- Personalization is layered: what the traveler states, what's
  inferred from their own behavior, learned patterns of travelers
  like them, and defaults — in that order of authority. Category
  patterns are priors, never pigeonholes: the traveler's own signal
  always outranks them, and demographic stereotypes never drive.
