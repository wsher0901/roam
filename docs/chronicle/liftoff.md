---
type: chronicle-story
shelf: I — the away surface
status: living
updated: 2026-08-06 · written · cloud lane
---

# Liftoff — hand the workshop to the cloud

> **CURRENT ENDING (2026-08-06).** The leaving ritual for a machine
> going dark with work still worth continuing. It runs a FULL
> handoff first, triages every open item against hard
> disqualifiers and a cap budget, births benches bench-first,
> label-spawns the eligible lanes and handshake-verifies each, WELDS
> THE FLIGHT PLAN TO THE BOARD, and only then fires `claude --cloud`
> **blind** — exit status only, no output captured — before closing
> on the rung and the exit code. **It never reports a cockpit URL**,
> because a blind fire has none to report; the cockpit seats itself.
> The census cell says all of this and is accurate. What it could
> not yet say: on 2026-07-31 the ritual was found painting a board
> line that quoted a URL IT CANNOT HAVE, three paragraphs from its
> own row saying `self-seat pending` — a contradiction invisible on
> the ground and fatal only in the air, repaired at
> [#257](https://github.com/wsher0901/roam/pull/257).

## What it is

The cloud branch of the away-mode chooser: the founder is leaving,
the machine is going dark, and work should continue anyway. Liftoff
lifts the eligible work into cloud lanes, briefs a cockpit from the
board, and closes the ground session — handing the baton to the
cockpit it fires.

It is the only lawful road from a parked bench to the cloud, and the
only sanctioned route for a cloud spawn at all. Ad-hoc CLI spawning
stays banned; the routes live in
[parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder).

Its seven steps: FULL handoff → triage → bench-first birth → spawn →
handshake-verify → ledger handoff and the cockpit fire → close.

## What raised it

The founder's actual evening: a desk that powers off, and work that
should not stop because of it.
[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
turned away-mode into ONE VARIABLE PER FORK rather than a pile of
rituals, and liftoff became the leaf for machine-going-dark. The
alternative it beat was a third leaving ritual for the tethered
case — unnecessary, because a POSTURE suffices there and the baton
law survives unamended.

## What changed, in order

- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — the chooser gives liftoff its branch.** Leaving + work
  continuing + machine going dark → liftoff. Cloud lanes spawn
  through a GitHub-label-triggered routine, chosen over API wiring
  because **a zero-secret label is safer than a bearer token on two
  machines, and it is drivable from the phone**.
- **[D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  — the maiden flight's finding of record.** The routine's
  `pull_request.labeled` trigger DOES NOT FIRE ON DRAFT PRs. Three
  points, one variable at a time: 17:02 label on a draft → nothing ·
  21:31 re-label with the routine verified Active → nothing · 21:53
  ready-flip + label → **canary in 90 seconds**. Undocumented
  platform behavior; the provider's docs imply drafts pass. The
  recipe of record became ready-flip-then-label, with a guard that
  matters — **for a lane mid-flight, ready ≠ complete**; the memory
  Status is the truth.
- **[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  — liftoff gains the fire.** The cloud branch now ENDS by composing
  the flight plan from the board at that moment and firing the
  cockpit with it — the founder never opens the routines page. The
  ritual also closes the ground session before the fire, so the
  one-writer invariant holds and the baton moves cleanly.
- **[D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit) — the
  birth vehicle changes under it.** `claude --cloud` becomes rung 1
  because routine-born sessions never join the phone's GENERAL
  session list, and the founder commands from the phone. Liftoff
  also gains **the standing first line**, opening every flight plan:
  verify your clone's HEAD equals origin/main's tip and your
  workspace contains nothing origin lacks; mismatch = report
  verbatim and STOP.
- **[D-051](../record/DECISIONS.md#d-051--self-seat-birth) — the
  fire goes blind.** The console-attach launcher is DELETED, not
  maintained. It existed for exactly one purpose — handing the tower
  a URL for the board — and
  [D-049](../record/DECISIONS.md#d-049--gh-second-path) had given
  every session self-knowledge, making the fragile half redundant.
  Capturing a TUI's console buffer is the component most likely to
  break SILENTLY. So: exit status only, the Sessions row reads
  "self-seat pending", and the cockpit rewrites it. **The trade is
  named rather than hidden** — a birth that dies before Claude
  starts leaves no URL anywhere and sends no greeting, so THE
  MISSING PUSH IS THE SIGNAL.
- **THE BOARD GOVERNS, learned the hard way.** A birth prompt is a
  delivery channel and channels truncate: on 2026-07-22 a mandate
  arrived CUT MID-SENTENCE, and the cockpit recovered only because
  the plan was already welded to the board. The plan is welded
  FIRST, and the birth prompt is a pointer to it, never its carrier.
  Where a prompt is truncated, garbled, or contradicts the board,
  the board wins — "git outranks the note", applied to the prompt.
- **The title line, disproven and dropped.** A prompt-supplied
  `[COCKPIT] roam — <date>` first line was carried
  VERIFY-BEFORE-RELY, then tested at the 2026-07-23 birth: the
  platform ignored it and auto-titled the session from charter
  content. The line did nothing, so it went. The instruction it
  replaced is recorded beside the answer — the shape a
  verify-before-rely item is supposed to end in.
- **2026-07-31 — the URL it could not have
  ([D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)).**
  Liftoff's BATON line read `COCKPIT — live since <time> (liftoff) ·
  <url>` while its own IN FLIGHT row, three paragraphs earlier in
  the same section, read `self-seat pending`.
  [D-051](../record/DECISIONS.md#d-051--self-seat-birth) had made
  the fire blind, updated the row, and left the baton line quoting a
  value that no longer exists at fire time. The two were written at
  different moments and never read together. The repair single-homes
  EVERY baton rendering in
  [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)'s
  case table, and liftoff cites its case instead of restating it.

## Where it stands

**Live, and the standard away posture** since
[D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
demoted the tether to a backstop. Its close report has a fixed
shape, and one job: the flight is airborne, and here is where to
reach it.

**The bugs this ritual has produced share a signature, and it is
worth naming.** Both the truncated mandate and the phantom URL were
invisible to every gate and bite ONLY IN THE AIR — they are
contradictions between two paragraphs of the same document, written
months apart, that no test exercises because no test flies. The
structural answer both times was the same: stop letting two places
state one fact. The plan lives on the board; the baton wording lives
in one case table.

**What remains unproven** is beneath the ritual rather than in it.
Rung 1 is the plan and the rest of the ladder is fallback, so rungs
2–4 are reached only when the primary has already failed — the
condition under which a rung is least likely to have been recently
exercised. The ladder BOTTOMS OUT at the phone bootstrap, and there
is no rung beneath it: the cloud clerk that once stood there was
retired, on the explicit reasoning that **a rung that cannot fire is
worse than no rung**, because it is reached only when everything
above it has already failed.

## Sources

Down-links only.

- [liftoff](../skills/liftoff.md) — the living procedure, all seven
  steps, the rung ladder in evidence order, and the close report's
  exact shape.
- [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  the chooser ·
  [D-043](../record/DECISIONS.md#d-043--cloud-ignition-and-away-command-redesign)
  · the draft-trigger finding ·
  [D-046](../record/DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
  · the fire ·
  [D-047](../record/DECISIONS.md#d-047--cloud-born-cockpit) · the
  birth vehicle ·
  [D-051](../record/DECISIONS.md#d-051--self-seat-birth) · the blind
  fire ·
  [D-070](../record/DECISIONS.md#d-070--baton-renderings-single-homed)
  · the baton case table.
- [flight-seams](../record/history/workshop/mechanism/flight-seams.md)
  — the bench that found the phantom URL and the third contradiction
  under it.
- [parallel-lanes §Cloud spawn](../skills/parallel-lanes.md#cloud-spawn--route-ladder)
  — the route ladder liftoff dispatches through.
- [COCKPIT-CHARTER](../COCKPIT-CHARTER.md) — the master text every
  birth prompt adopts verbatim.
