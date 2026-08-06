---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# Go-remote / Remote Control — the tether

> **CURRENT ENDING (2026-08-06).** Alive as a six-step skill and a
> BACKSTOP posture — never the plan since the cockpit became the
> away seat, and confirmed NEVER USED (the founder, 2026-07-28). The
> phone still carries the app, so this is a demotion and not
> retirement-by-platform. **The census cell ends by naming a
> condition, and that condition has since been MET: it says the
> keep-or-retire question gets ruled "after a real cloud flight
> proves the cloud path" — and real cloud flights have now flown,
> four of them across 2026-08-03 to 08-05.** The
> [IDEAS](../IDEAS.md) line carrying the question is still marked
> open. So the honest ending is not "waiting for a flight" but
> **the trigger has fired and the ruling is owed** — a founder call,
> unmade rather than pending.

## What it is

The posture for leaving a desk while the machine STAYS ON. The
control tower does not move, park, or close — it simply relocates
from the desk to the founder's pocket via Remote Control, and every
live local lane keeps flying under it.

Its six steps are almost entirely CHECKS rather than actions:
verify RC is available (a version floor, and no
`ANTHROPIC_BASE_URL` override, because RC needs the first-party
endpoint) · enable RC and surface the session link · sweep the lanes
for visibility · confirm the push toggles · report · and a rule for
ending from the phone.

## What raised it

The gap between "I am leaving my desk" and "I am leaving my
machine". The founder can walk away from a keyboard while a build,
a lane, or a long turn keeps running — and the existing rituals both
assumed departure meant SHUTDOWN. Handoff parks everything; liftoff
lifts everything to the cloud. Neither describes stepping out with
the machine humming.

## What changed, in order

- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — born as a POSTURE, deliberately not a ritual.** This is the
  whole design. Go-remote parks nothing, closes nothing, and KEEPS
  THE BATON — which is exactly what lets
  [the baton law](../LAWS.md#parallel-lanes--cloud) survive
  unamended. A third leaving ritual was the obvious alternative and
  was rejected for that reason: nothing state-changes here, so there
  is nothing to stamp, no board to repaint, and no close-lock to
  write.
- **The idle-wait law arrives with it.** A blocked lane on a
  phone-reachable vehicle — a cloud session, or an RC-tethered local
  one — stays ALIVE and waits for the founder's reply, which resumes
  it in-thread, instead of parking. Parking there was pure loss:
  idle costs nothing where a phone can reach.
- **The lane visibility sweep, which is the step with real teeth.**
  Every live local lane must be RC-VISIBLE — running inside the RC'd
  control tower or an interactive auto-connect session. **A bare
  detached background agent is invisible from the phone.** For each
  lane that is not, the ritual asks the founder ONCE: park it now,
  or accept blind flight? — and records the choice in that lane's
  own memory. It is the only place the tether admits it cannot
  actually see everything.
- **[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  clause 6 — demoted to backstop.** Machine-off plus the cockpit
  becomes the standard away posture; the tether is what you use when
  the machine MUST stay on. Full retirement (option ②b) was on the
  table and the founder chose demotion: **toggles are cheap
  insurance, and the posture change, not the uninstall, is the
  decision.**
- **2026-07-28 — the founder confirms it has never been used.** Not
  inferred from an empty log: asked and answered. That single datum
  is what turned a demotion into an open question, and it is why the
  census cell for this item carries a confidence note the others do
  not need.
- **[D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)
  — it counts as a road out.** When supersession was generalized,
  go-remote is listed among the exits that ALREADY run a ritual, in
  contrast to the one road that ran none. A posture that changes no
  state still had to be enumerated to prove the gap was elsewhere.

## Where it stands

**Installed, documented, demoted, and unused.** The skill is
current; the toggles live on both machines by
[machine-setup](machine-setup.md); the ending rule is written — a
leaving phrase from the phone runs ordinary handoff FULL, and a
"shut the PC down" rider becomes the same turn's FINAL tool call,
after the close-lock write and only on the founder's approval.

**The keep-or-retire ruling is now due.** The question was filed
with an explicit precondition rather than a date — *rule only after
a real cloud flight proves that path* — which was the right way to
file it, because it made the trigger checkable instead of
arbitrary. The flights have flown. Nothing in the record rules on
it, and the IDEAS line still reads open. **A condition that has
been met and not noticed is exactly the failure mode this
chronicle's ending rule exists to catch**, and it is worth stating
plainly rather than leaving it to be rediscovered.

**Two things argue for keeping it, and they are not the same
argument.** The first is cheapness: two toggles cost nothing to
leave installed. The second is more interesting — the tether is the
ONLY away posture that does not require the cloud to work at all.
Every other leaf of the chooser routes through a cloud session, and
the failure modes this shelf has catalogued are overwhelmingly cloud
failure modes: connectors dropping, births going blind, acks
arriving after their window. A backstop whose failure modes are
DISJOINT from the primary's is worth more than its usage count
suggests.

**What would settle it** is not more thinking but one use. The
posture has never been exercised even once, so every claim about it —
including the two above — rests on reading rather than on evidence,
which is the state this workshop generally refuses to leave things
in.

## Sources

Down-links only.

- [go-remote](../skills/go-remote.md) — the living six-step posture,
  including the RC availability floor and the visibility sweep.
- [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  born as a posture, and the idle-wait law ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  clause 6 · demoted to backstop ·
  [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized) ·
  counted among the roads out.
- [IDEAS](../IDEAS.md) — the open keep-or-retire line and its
  precondition.
- [the away-mode chooser](away-mode-chooser.md) — where this leaf
  sits, and why a posture rather than a ritual.
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — the chooser
  law's tether clause: a backstop posture, never the plan.
