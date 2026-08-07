---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# pickup — the sit-down briefing

> **CURRENT ENDING (2026-08-06).** The ritual that opens a sitting
> and claims the baton: claim → self-heal → gather with **git
> outranking the board** → repaint if stale → render the sit-down →
> and, on the founder's word, resume a grounded fleet. It assumes
> the founder remembers nothing, and it is the only ritual that
> reads the whole floor before speaking. Its hard-won principle is
> that **the board is a rendering and git is the fact**; almost
> every step it has gained since exists because some surface lied
> and the ritual had to be told to check. **Its live defect is in
> §4**: the repaint is conditional on the seat JUDGING the board
> stale, and on 2026-08-06 a seat judged it fresh because the git
> state matched — which was true of the fleet and false of the
> baton, leaving the board reading "No live seat" for an entire
> sitting. **A seat that claims the baton has already made the board
> stale by claiming it**, and nothing in §4 says so.

## What it is

The sit-down briefing. It runs unprompted on the founder's first
message of a session, and it is the act by which a session becomes
the CONTROL TOWER — the baton-holder, the one session the founder is
driving. Lanes and background agents skip it and proceed with their
kickoff.

Its living text is [pickup](../skills/pickup.md), six steps:

1. **Claim the baton** — read the board's stamp, announce the last
   ritual, claim on fresh origin.
2. **Self-heal** — squash-merge any stranded micro-PR; declare ghost
   teammates rather than messaging them.
3. **Gather** — ROADMAP, board, every active branch's memory, and
   LIVE git, with a worktree liveness check and the `claude/*`
   residue sweep.
4. **Repaint if stale** — the board, via a micro-PR.
5. **Render the sit-down** — a fenced template, ⏸ interrupted work
   leading everything.
6. **Fleet resume** — on the founder's word, or the desk takeover
   when a live cockpit holds decisions.

The governing sentence is in §3 and it is the ritual's whole
character: **where the board and git disagree, git wins — say so
plainly.**

## What raised it

The same founding PR that raised every ritual:
[#1](https://github.com/wsher0901/roam/pull/1) shipped four slash
commands, pickup among them, against a stated reality — **two
computers and a cloud**, a solo builder who would sit down at one
machine having last worked at another. The briefing exists because a
session's opening question is never "what shall we do" but "what is
already true".

Its later shape was set by a harder version of that problem. Once
work could be running *while nobody was at a desk* — lanes, and then
cloud lanes — the sitting no longer opened onto a static floor. The
ritual had to learn to read a floor that was moving.

## What changed, in order

- **[#1](https://github.com/wsher0901/roam/pull/1) — born.** One of
  the original four rituals, beside handoff, ship and decide.
- **[#56](https://github.com/wsher0901/roam/pull/56) — ritual engine
  v2.** Rewritten to a locked design: a three-lens briefing
  (MACRO/FOCUS/CHANNELS). That lens shape is now gone, replaced by
  the report skeleton below — the engine swap
  ([D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills))
  later turned the commands into skills.
- **[#62](https://github.com/wsher0901/roam/pull/62) — it stops
  carrying a constant.** Pickup and handoff begin computing
  done/total live from [ROADMAP](../ROADMAP.md)'s checkboxes instead
  of a hardcoded number, and the derivation law enters the
  constitution. This is the first instance of the principle the
  ritual now applies everywhere: **counts are computed at render
  time, never recalled.**
- **[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — three duties arrive at once, all of them about residue.** The ⏸
  INTERRUPTED lead is mandated ABOVE everything else in the
  briefing, drawn from the interrupt capture block a paused task
  leaves behind. The `claude/*` RESIDUE SWEEP becomes pickup
  hygiene, because every cloud session lazily leaves a workspace
  head on origin that it cannot itself delete — swept only after
  verifying zero unique commits, held and asked about if its session
  may still be live, never swept if it carries unique work. And
  IDEAS is confirmed an inbox rather than an archive.
- **[D-052](../record/DECISIONS.md#d-052--response-doctrine) and the
  report shapes ([#250](https://github.com/wsher0901/roam/pull/250))
  — the briefing becomes a template.** §5 renders a fenced skeleton
  whose ONE JOB is "where you are, and what you can do now": floor
  state, Needs-you, In flight, Working on, your act, an OFF-ORIGIN
  block, shipped lately. **The OFF-ORIGIN block's presence is the
  signal** — it is omitted entirely when nothing qualifies, and it
  exists because §2's self-heal and §3's hook relay have no home on
  origin and would otherwise be lost with the session. The same
  decision bans ritual self-narration: "baton claimed" and kin stay
  silent mechanics.
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — the
  fleet-resume ask.** Landing can now ground a fleet, so pickup
  gains the counterpart: when the board shows a grounded fleet, §5
  renders one row per lane and THE ASK in exact words, with the
  cap-run arithmetic stated aloud and DERIVED at ask time. §6 holds
  the resume mechanics — redeploy, adopt locally, hold — and they
  run only on the founder's word, because **a ritual never spends
  cap runs by default.**
- **The two-fact trigger, hardened by review.** The fleet-resume
  trigger is deliberately NOT a string match on a phrase that may be
  reworded: it fires on a fleet-at-ground table standing under IN
  FLIGHT *and* the baton line carrying `grounded for local pickup`.
  The record is explicit that an earlier version keyed on an
  ABSENCE, matched a desk-takeover board by accident, and that its
  repair keyed on a token that turned out to be a PREFIX of a longer
  state — caught by external review both times.
- **[D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  — the desk takeover.** A case that outranks the resume mechanics:
  §3 finds a cockpit that is LIVE and holding pending decisions, and
  the founder is here. The desk adopts the decision queue, writes
  COCKPIT SUPERSEDED to the board — **that board write IS the
  supersession**, since the old cockpit learns of it by reading —
  and then **leaves the lanes alone**, because `redeploy` on a live
  lane would write a Status its worker does not own and the
  wake-lock would kill a healthy lane.

## Where it stands

**The ritual is complete and in daily use, and its one open defect
is the conditional in §4.**

The gather step is the strongest part: it reads live git, prunes
stale remote-tracking refs before believing them, checks worktrees
against the liveness rule rather than against the board, re-arms
named watches so a duty survives the session that created it, and
states plainly when git and the board disagree. Each of those
clauses is a lie some surface once told.

**§4 is where it still fails, and the failure is recent and
documented in the board's own words.** The repaint is conditional —
"if the board disagrees with its sources, repaint" — and that leaves
the judgement to the seat. On 2026-08-06 a seat claimed the baton at
pickup and judged the board FRESH, on the strength of the git state
matching. That was true of the FLEET and false of the BATON: the
board read "No live seat" through the entire sitting, and the line
was paid late, by hand, in a paragraph the board now carries as its
own erratum. The principle it yields is sharp and is not yet in the
procedure: **a seat that claims the baton has already made the board
stale by claiming it**, so the claim case is not a judgement call at
all.

That defect is filed in [IDEAS](../IDEAS.md) as one instance of a
three-instance pattern, and the general diagnosis is worth more than
the instance: **rituals repaint on entry and exit, and the middle of
a long sitting belongs to no ritual.** The other two instances are
the gate window and a mid-sitting ruling — the same shape, different
surfaces.

**This story contradicts its census cell in one respect and the
derivation wins.** The cell reads "the baton-claiming briefing:
self-heal, gather with git outranking the board, repaint if stale,
the templated summary, the fleet-resume ask" — an accurate list of
steps that presents "repaint if stale" as a settled feature. It is
the ritual's open defect, and the cell predates the 2026-08-06
sitting that demonstrated it. The desk takeover is also absent from
the cell.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [pickup](../skills/pickup.md) — the ritual's living text.
- [handoff §4's case table](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
  — the single home of the baton renderings pickup paints from.
- [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  · the ⏸ lead and the residue sweep ·
  [D-052](../record/DECISIONS.md#d-052--response-doctrine) · the
  briefing template ·
  [D-054](../record/DECISIONS.md#d-054--the-landing-skill) · the
  fleet-resume ask ·
  [D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  · the desk takeover ·
  [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  · commands become skills.
- [the workflow kit](../record/history/workshop/mechanism/workflow-kit.md)
  — the original four rituals.
- [the ritual engine](../record/history/workshop/mechanism/ritual-engine-v2.md)
  · [live counts](../record/history/workshop/mechanism/ritual-live-counts.md)
  · [the report skeleton](../record/history/workshop/definition/report-shapes.md)
  · [the landing skill](../record/history/workshop/mechanism/landing-skill.md).
- [DASHBOARD](../DASHBOARD.md) — the 2026-08-06 baton erratum, in
  the board's own words.
- [IDEAS](../IDEAS.md) — the open repaint-window line.
