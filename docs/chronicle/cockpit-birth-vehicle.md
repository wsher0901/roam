---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# The cockpit's birth vehicle — how a command seat is raised

> **CURRENT ENDING (2026-08-06).** A four-rung ladder in evidence
> order: rung 1 is a **blind** hidden-window `claude --cloud` fire —
> exit status only, nothing captured — with compose-and-hand, the
> routine fire, and the manual charter paste beneath it. The vehicle
> is chosen on ONE property the founder cares about: `--cloud`
> sessions are LIST-NATIVE, joining the phone's general session
> list, and routine-born ones are not. **The census cell's closing
> clause is now stale.** It reads that the greeting push is "never
> confirmed in flight, since no weld since
> [#213](https://github.com/wsher0901/roam/pull/213) is
> cockpit-seated" — true when written on 2026-07-28, and overtaken
> since: cockpits flew and landed on 2026-08-04, and on 2026-08-05 a
> SUMMONED cockpit was born, read the board, and correctly refused
> to seat itself over a working desk. The vehicle is proven; what
> that birth exposed was a gap in the DUTY, not in the fire.

## What it is

The machinery that turns "the founder is leaving" into a live
command seat in the cloud, and the ladder that keeps trying when the
preferred way fails. Its shape is set by one requirement that has
nothing to do with engineering elegance: **the founder commands from
a phone**, so a seat that is not reachable from the phone's session
list is a seat that does not exist for them.

## What raised it

Maiden flights 1 and 2
([#177](https://github.com/wsher0901/roam/pull/177) ·
[#180](https://github.com/wsher0901/roam/pull/180)) proved the
cockpit CONCEPT works and simultaneously indicted its first vehicle:
routine-born sessions never joined the mobile GENERAL session list.
A working seat the founder cannot find is the command haze all over
again, wearing a different coat.

## What changed, in order

- **[D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit) —
  `claude --cloud` becomes the birth vehicle**, and the routine fire
  drops to a fallback rung while remaining the staged summon
  button's engine. **Demote, never delete** — it still has a job.
- **THREE STOP-GATES DEMANDED EVIDENCE OVER DOCS**, and the reason
  is a scar. The vehicle's ancestor, `--remote`, BUNDLE-SEEDED
  sandboxes and destroyed batch-1 T3+T5 at the
  [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) turn. So:
  gate 0a — origin heads = main only, no cockpit in flight · gate
  0b — a probe session cloned origin main's tip with an unpushed
  marker commit ABSENT from its history and pushed a branch, proving
  clone-from-GitHub and killing the bundle ghost by evidence · gate
  0c — the founder's phone, verbatim: the probe session appeared in
  the general session list "right off the bat … no link-open
  needed."
- **THE STANDING FIRST LINE.** Because the bundle auto-fallback is
  DOCUMENTED and forcible by environment variable, one probe proving
  the primary path exists is not enough — so every composed flight
  plan opens with a clone-provenance directive: verify HEAD equals
  origin/main's tip and the workspace contains nothing origin lacks;
  mismatch = report verbatim and STOP. **The probe proved it once;
  the standing line polices every flight after.**
- **The mechanics, learned by failing at them.** `--cloud` demands a
  real TTY on BOTH ends and refuses every piped route — the harness
  shell, the bang-prefix, redirected `Start-Process`. A hidden
  console already supplies that TTY, so no pty wrapper is involved
  and **none may be: any redirection at all is what breaks this
  rung.** The birth prompt is handed as a FILE-READ argument, never
  piped.
- **[D-051](../record/DECISIONS.md#d-051--self-seat-birth) — the
  fire goes blind and the launcher is deleted.** The attach-and-read
  machinery flew twice and worked, and was retired anyway, because
  it existed for exactly one purpose — handing the tower a URL — and
  [D-049](../record/DECISIONS.md#d-049--gh-second-path) had made
  every session able to derive its own. **Capturing a TUI's console
  buffer is the component most likely to break SILENTLY**, and the
  2026-07-23 title-line experiment on the same flight had just
  proved platform behavior shifts underneath. Deleting is strictly
  simpler than maintaining. Rejected explicitly: keeping it as a
  fallback, because **a fallback that breaks silently is worse than
  none** — the clerk-retirement lesson, generalized to components.
- **[D-048](../record/DECISIONS.md#d-048--cockpit-resilience) clause
  5 — a second vehicle, deliberately kept second.** The summon
  workflow fires the routine, so a summoned cockpit is routine-born
  and therefore LIST-INVISIBLE — reachable by push and by its board
  link, not by the phone's list. `--cloud` stays primary for a
  PLANNED birth; the routine is the rescue vehicle, not the plan.
- **2026-08-05 — a summoned seat is born, and finds the duty wrong
  ([D-075](../record/DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)).**
  The vehicle worked. The seat it produced read its charter
  literally, saw it was being told to seat itself over a WORKING
  DESK, and refused — **only because that board carried a warning
  hand-written before the fire.** The ruling names the real defect:
  *a safeguard that must be hand-written per fire is not a
  safeguard.* The duty gained a third case, and the firing machinery
  lost its hardcoded "You supersede the previous cockpit" — because
  the board is the arbiter of whether a live seat exists, and the
  machinery that fired a session may not assert what only the board
  can grant.

## Where it stands

**Proven, and proven in the order the workshop prefers: by evidence
rather than by documentation.** Rung 1 births list-native sessions;
the ladder beneath it is intact; the summon workflow exists and has
now been fired in anger.

**The trade at the heart of it is named rather than hidden.** A
blind fire cannot report what it produced, so a birth that dies
before Claude starts leaves no URL anywhere and sends no greeting.
The mitigations are listed in the founder's order of reach: **the
MISSING push IS the signal** · `/tasks` at any terminal · the
claude.ai/code list, which shows the session even when its clone
failed · retry the fire. The board's row goes stale HONESTLY rather
than carrying a scraped URL that might be wrong — the same
preference for a visible gap over an invisible error that runs
through the whole away surface.

**What the 2026-08-05 birth actually taught** is worth separating
from the vehicle it rode in on. Nothing was wrong with the fire. What
was wrong was that
[D-051](../record/DECISIONS.md#d-051--self-seat-birth) had been
written when the only things a newborn cockpit could meet were A
COCKPIT or NOTHING, and the baton law had meanwhile made "a desk
holds the baton" an ordinary state. The gap propagated nowhere and
**stayed invisible until a seat was born into it.** That is the
recurring shape of this shelf's defects: not wrong code, but a
document that stopped matching a world which moved on around it.

## Sources

Down-links only.

- [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
  — the living rung ladder, the mechanics, and the failure shape.
- [D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit) · the
  vehicle and its three gates ·
  [D-048](../record/DECISIONS.md#d-048--cockpit-resilience) clause 5
  · the rescue vehicle ·
  [D-051](../record/DECISIONS.md#d-051--self-seat-birth) · the blind
  fire and the deleted launcher ·
  [D-075](../record/DECISIONS.md#d-075--the-self-seat-duty-gains-a-live-desk-case)
  · the third case.
- [cloud-born-cockpit](../record/history/workshop/mechanism/cloud-born-cockpit.md)
  — the bench, with the three gate outputs verbatim.
- [self-seat-birth](../record/history/workshop/mechanism/self-seat-birth.md)
  — the bench that deleted the launcher.
- [COCKPIT-CHARTER](../COCKPIT-CHARTER.md) — rule 1, the first act
  a newborn seat performs.
