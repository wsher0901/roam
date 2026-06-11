# Foundation

## What Roam is
One engine for travel planning. It assists at any level of certainty —
no idea, some idea, exact idea of where to go — and any level of input,
from the floor (origin + free dates) to rich preferences. Destination is
just another unknown the engine resolves. Roam is a pre-trip brain:
everything before departure, nothing (yet) during the trip. Its identity
is comprehensiveness — it catches the minute, checkable details people
miss — and it treats the traveler's time as the scarcest resource.

## Who V1 is for
Leisure travelers, any party type. Personalization comes from whatever
supplements the user provides — never from rigid user segments.
Demo-first, users soon: built real and deployable, but no day-one
onboarding or billing; nothing in V1 may require a rewrite when accounts
and users arrive.

## What V1 does — the spine
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

## V1 condition checks — the must-haves
Five families, each built as a pluggable check module:
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
  spots (general signals in V1; SNS mining is a later socket).

## The reliability law
NEVER fabricate anything. Every fact is checked. A check module ships
only when its information source is reliable and consistently
obtainable; anything unverifiable is labeled unverified in the plan —
never guessed. Every check declares its source and confidence.

## What V1 refuses to do
- No booking, payments, reservations, seat selection, or fare-class
  mechanics — Roam reasons about times, airports, and modes; it does
  not transact.
- No live fare/price scraping — cost means honest estimate ranges.
  Real prices: stretch goal, never a V1 gate.
- No mid-trip features — pre-trip only; the live companion is a
  much-later socket.
- No social, sharing, or collaboration features.
- Web only; mobile is much later.

## Later — named sockets, not rewrites
Safety & travel advisories · visa/entry/vaccination rules · air quality,
pollen, smoke seasons · sea temperature & swell · accessibility needs ·
real prices · in-app booking · SNS trend mining · trip sharing &
collaboration (async first, sync later) · plan diffs & branching ·
mid-trip companion · mobile · engine tuning on the accumulated dataset.

## The dataset — the quiet asset
Every fact a check fetches or derives is stored: structured,
timestamped, with its source and confidence. Place-and-condition
knowledge compounds into a proprietary dataset; it is knowledge about
places and conditions, not personal data. Because data shape is costly
to change mid-plan, V1's first gating task is the Data Definition:
enumerate every fact each V1 check needs, its source, its reliability
grade, and the storage schema — before any check is built. Later:
anonymized interaction signals tune the ranking.

## Principles
- One engine, no modes.
- Every condition check is a plug-in: a new idea is a new module, never
  a rewrite.
- Depth before breadth — fewer checks done deep beat many done shallow;
  breadth arrives module by module.
- The floor input always works: origin + dates is enough.
- Time optimization is first-class: schedules, buffers, and sequencing
  are computed, not approximated.
- In-app first: maps, timelines, plans render inside Roam, not as
  links out.
- Explain everything: every ranking and every edit verdict carries its
  reasons.
- Room for monetization, never at V1's expense.
- New ideas land in docs/IDEAS.md, triaged into check modules and Vn
  buckets.
