---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · written from the record · cloud lane
---

# Fleet continuity — park, respawn, and the protocol between them

> **CURRENT ENDING (2026-08-06).** Leaving a machine with lanes on
> it is a solved problem in three moves. THE PARK: handoff FULL
> rescue-saves each live local lane and stamps it with ONE Status
> line — the single lawful moment the control tower may touch a
> lane's tree or diary mid-flight. THE RESPAWN: liftoff adopts a
> parked bench on its SAME branch, no second birth, the new worker
> canarying onto the existing memory. THE WAKE-LOCK between them,
> guaranteeing no old worker survives a Status it does not own. A
> grounded fleet — one fenced by a landing rather than parked by a
> handoff — resumes through
> [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
> instead, a separate road added after a landing painted two
> different board lines for one event. **The respawn half has now
> run repeatedly; on 2026-08-06 it ran twice in one afternoon on
> benches whose workers had died silently, and it is what made this
> story writable.**

## What it is

The answer to a plain question: the founder is leaving and lanes
are still running — what happens to them?

The protocol splits by whether the machine keeps running:

- **Machine halting** → handoff FULL parks every live local lane.
  A park is a rescue-save (a wip commit and push, only if the
  tree holds unsaved work) followed by one stamped Status line.
  Handoff never asks and never leaves lanes running, because
  handoff means operations halt here.
- **Work continuing, machine going dark** → liftoff, whose step 2
  respawns eligible parked benches on their same branch; ineligible
  ones stay parked with a reason written down.
- **Any outcome at all** — completion, a `BLOCKED:`, a failed
  spawn — **parks**. Nothing continues without a founder-initiated
  action.

The rule that makes all three safe is the wake-lock: on any resume,
a lane re-reads its memory Status first and stands down on a word
it does not own (parked · respawned · superseded).

## What raised it

A scenario the founder described rather than an incident:
the machine powers off after a handoff, local agents die with it,
and — before this — their since-last-push work and their task state
depended on luck. Worse, a lane that woke from sleep afterwards
could dual-drive a branch that had already been respawned
elsewhere.

Three alternatives were rejected, each for a reason still visible
in how the ritual behaves. Asking at handoff was refused by the
founder outright — handoff means halt, and a question there is a
question every time. Auto-liftoff at handoff was refused because
cloud runs only on the word. And signalling lanes to land
themselves was refused as impossible in the situation that matters:
there is no reliable channel, and the process dies with the machine
anyway. **Saving the bench is what matters, not saving the
worker** — which is the sentence the whole lane system rests on.

## What changed, in order

- **[D-032](../record/DECISIONS.md#d-032--fleet-continuity) — the
  three moves land together**, and the wake-lock is born inside
  them as a clause rather than a named mechanism.
- **The implementation was a transcription job, and the record says
  so plainly.** Both ritual payloads landed byte-exact against
  independently re-transcribed reference copies, six line edits
  verbatim, no deviations. One subtlety survives as a lesson about
  verification rather than about lanes: the brief's expected grep
  count for a three-word phrase was 3 across two files because one
  copy WRAPS the phrase across two lines by design — so the 0 that
  file returned was correct, not a miss. A grep that counts lines
  is measuring the typography, not the text.
- **[D-041](../record/DECISIONS.md#d-041--delegation-architecture)
  — park stops being the universal answer to blocking.** A blocked
  lane on a phone-reachable vehicle idle-waits instead: alive,
  silent, zero-cost, resumed in-thread by the founder's reply.
  Parking there was pure loss. Blocked LOCAL lanes still park at
  handoff FULL, because the machine is halting regardless.
- **[D-042](../record/DECISIONS.md#d-042--lane-liveness) — the
  protocol gains a precondition.** Adoption presumes a RECLAIMABLE
  bench; a live heartbeat is never adopted, whatever a board says.
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — a
  second, parallel road appears.** A flight ending in the air
  FENCES its lanes rather than parking them, and a fenced fleet
  needs its own resume. That road is
  [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer),
  and
  [parallel-lanes §Respawn](../skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
  deliberately does not repeat its mechanics.
- **[D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  — something that is not a lane gets swept up first.** No ritual
  road out of a sitting may let a live agent team outlive it:
  handoff shuts the team down and captures its findings BEFORE
  anything is parked, because a team's output lives in transcripts
  that die with the session.

## Where it stands

**The park half and the respawn half have very different amounts of
evidence behind them, and it is worth being exact about which.**

The respawn half is well-exercised. Its most instructive runs are
recent: on 2026-08-06 two benches of a seven-lane fleet lost their
workers to a late canary ack, and both were adopted back — same
branch, same memory, no second birth, the new worker claiming by
the ordinary respawn canary onto a bench that already carried its
spec and its draft PR. The protocol's whole design goal is that
losing a worker costs a restart and nothing else, and that is
precisely what it cost. **This story is being written by the second
worker on one of those benches.**

The park half's rescue-save clause is the thinner side of the
record: a park writes a Status line every time, but the wip-commit
branch of it only fires when a tree holds unsaved work at exactly
the moment a handoff runs, and the record carries no such firing.
Not a defect — a clause whose trigger is rare — but it is a promise
kept by design rather than by demonstration, and it should be read
that way until something demonstrates it.

One structural asymmetry remains by construction: a park is the ONE
exception to the rule that the control tower never touches a live
lane's tree or diary. Every exception to an absolute rule is a
place where the absolute rule stops protecting you, and this one is
narrow on purpose — one line, one moment, one ritual.

## Sources

Down-links only.

- [handoff §1.5](../skills/handoff.md#15--park-the-local-lanes-full-only)
  — the park step ·
  [parallel-lanes §Respawn](../skills/parallel-lanes.md#respawn-on-an-existing-bench-liftoff-adopt)
  — adoption ·
  [parallel-lanes §Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
  — the guarantee between them ·
  [pickup §6](../skills/pickup.md#6--fleet-resume-on-the-founders-answer)
  — the grounded-fleet road.
- [D-032](../record/DECISIONS.md#d-032--fleet-continuity) — the
  decision and its three rejected alternatives ·
  [D-041](../record/DECISIONS.md#d-041--delegation-architecture) ·
  [D-042](../record/DECISIONS.md#d-042--lane-liveness) ·
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) ·
  [D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals).
- [the fleet-continuity weld](../record/history/workshop/mechanism/fleet-continuity.md)
  — the byte-exact transcription and the wrapped-phrase grep
  lesson.
- [LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)
  — the park protocol and idle-wait as law.
- Span cited by the census:
  [#155](https://github.com/wsher0901/roam/pull/155).
