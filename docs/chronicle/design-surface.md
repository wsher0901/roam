---
type: chronicle-story
shelf: IV — Roam
status: living
updated: 2026-08-11 · the taste file is filled · work PC
---

# The Design surface — a rule-carrier for a tool that cannot be given rules any other way

> **CURRENT ENDING (2026-08-11).** Living, unretired, and no longer
> the only design rule in the repo.
> [D-084](../record/DECISIONS.md#d-084--the-global-design-stack)
> gave Roam a TASTE FILE — [DESIGN](../DESIGN.md), holding the
> direction, typography, tokens and reference images — and gave the
> machine a global design law beneath it. The preamble now carries
> two more lines: work from the design law and the taste file, and
> NAME the direction in every draft. **The mechanism those lines
> needed is this item's own oldest lesson, applied again:** Design
> cannot fetch files, so the law and the taste file have to be
> CARRIED with the paste, not cited — one more copy someone re-makes
> by hand, on a bridge where neither side reports staleness. **AND
> AS OF 2026-08-11 THERE IS SOMETHING REAL TO CARRY:** the taste
> pass ran, and what gets pasted alongside this preamble is no
> longer a set of open questions but a NAMED DIRECTION —
> `place-first`, the plan on a living map — with ratified faces
> beneath it. Colour and three reference images are still open and
> are carried as open, which is the distinction the paste has to
> preserve: a Design session told "the palette is undecided" will
> propose one, and a session told nothing will invent one silently. Everything below still binds: no-write governance,
> the extraction path, the exit format, and the sunset clause
> keyed to
> [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
> — **derived at write time: T5 is unticked, and its D-060 pause
> LIFTED with phase 2's close, so the condition is now merely
> unmet rather than blocked.** This item was LEAD-ADDED at the
> census: no teammate claimed it, and its confidence was recorded
> as medium for that reason.

## What it is

A rule-carrier, and the only kind available for the surface it
governs.

Claude Design is a separate surface from the Code sessions this
workshop runs in, and the mechanism the project uses everywhere else
to carry rules — claude.ai Project instructions, which reach chat and
Code — **does not reach it**. There is no configuration, hook, or
settings file to put a law in. The only channel into a Design session
is the first message of that session, so the law is a block of text
the founder pastes.

The preamble carries four things:

- **Identity** — "trust made visible": confidence badges, source
  attributions and "unverified" labels are first-class UI citizens;
  calm, legible, explanation-forward. A condensation of
  [FOUNDATION](../FOUNDATION.md)'s reliability-first principles into
  something a design tool can act on.
- **A scope guard** — work only on what this session was opened for,
  with the lane and its deliverable stated when the session opens.
- **Governance** — the no-write law: Design is a no-write surface for
  the repo; deliverables leave ONLY as extracted values via "Hand off
  to Claude Code"; never commit its markup or bundles; and Design's
  other export destinations (Vercel, Canva, PDF, …) are **forbidden
  for this project**, because anything reaching the product goes
  through the repo.
- **A fixed exit format** — a `--- DESIGN HANDOFF ---` block with
  purpose, concluded items, open items and a single next step,
  produced only on the word "handoff" and never unprompted.

Beneath the preamble sit working rules for the founder — feed context
rather than prose, polish on the canvas before re-prompting, save
before changing direction (saved iterations are Design's only version
control), and the extraction path into a Code lane.

## What raised it

Two problems that would each have been enough.

**A surface with no rule channel is a surface with no rules.** Every
other place work happens in this project inherits the laws
automatically. Design inherits nothing, so without a deliberate
carrier it would be the one place where the reliability-first identity
and the repo's authority simply did not apply.

**A design tool that can deploy is a second path to the product.**
Claude Design can export to Vercel, Canva and PDF. Any of those would
create an artifact that reached users without passing through the
repo — no CI, no review, no record. The governance block exists to
close that path by instruction, since it cannot be closed by
configuration.

## What changed, in order

- **[#64](https://github.com/wsher0901/roam/pull/64) — the
  rule-carrier is born.** DESIGN-KICKOFF ships with the identity line,
  the scope guard, the no-write governance law and the exit format,
  and [HOME](../HOME.md) routes to it. The reasoning is stated
  plainly in the record: Project instructions cannot reach Claude
  Design, so a pasted preamble is the ONLY rule-carrier onto that
  surface. (The same PR also repaired a missing shiplog line — a
  files-touched omission caught in review — which is incidental to
  this item but is why the PR touches more than the kickoff.)
- **[#97](https://github.com/wsher0901/roam/pull/97) — the refresh to
  the June-2026 Design.** The tool changed underneath the file, and
  the file was re-verified against the product rather than updated
  from memory: facts checked 2026-07-13 against Claude Design's own
  documentation and the 2026-06-17 update coverage. Four changes
  landed. The **export guard** joins the governance block explicitly.
  Canvas-first editing and feed-context rules replace guesswork about
  how to drive the tool. The usage-pool wording is corrected — Design
  now draws from the same shared pool as chat, Code and Cowork, its
  old separate allowance gone. And the load-bearing new fact: the
  **snapshot law** — `/design-sync` produces a point-in-time COPY of
  the design system, not a live link, so it must be re-imported after
  any token or component change. Two stale framings ("Labs flakiness",
  the separate allowance) were removed because they had ceased to be
  true of the product.
  One mechanism note from that bench is worth keeping: **it took no
  D-number**, deliberately. The kickoff is an ops file under the
  routing table's writer column, and the export guard only makes
  explicit what the Claude-Design no-write law in
  [LAWS](../LAWS.md#knowledge--tracking) already implied — so there
  was no standing choice to record, only a file to refresh.
- **[#345](https://github.com/wsher0901/roam/pull/345) — the taste
  file arrives, and the preamble stops being the only design rule.**
  [D-084](../record/DECISIONS.md#d-084--the-global-design-stack)
  adopts a design stack at USER SCOPE on the machine and gives Roam
  [DESIGN](../DESIGN.md) — a taste file holding direction,
  typography, tokens and five reference slots, all shipping TBD
  because they are the founder's to set. Two lines join the
  preamble: work from the design law and the taste file, and NAME
  the draft's direction. **The bench had to solve this item's own
  oldest problem a second time to write them** — Design cannot
  fetch files, so "work from the taste file" is unfollowable unless
  the taste file is PASTED ALONGSIDE the preamble, which is now
  stated in the kickoff's prose rather than assumed. The same PR
  put a design-review gate in [LAWS](../LAWS.md), which is the
  first design rule in this workshop that something OTHER than a
  human paste enforces.

- **[#349](https://github.com/wsher0901/roam/pull/349) — the taste
  file stops being a set of blanks.** The founder picked
  `place-first` from three LIVE motion probes, after rejecting an
  entire round of static candidates for varying the typeface inside
  one metaphor — a judgment this item's own surface could not have
  supported either, since a pasted preamble carries stills and
  words, never motion. What this changes for Design is concrete:
  the preamble's "work from the taste file" line now has a
  direction and a font pair to carry, and a shorter list of things
  it must carry as still-open.

## Where it stands

Living, binding in full, and waiting on a task that is no longer
blocked — only unstarted.

The file's own sunset clause is precise: after V1.S2.T5 ships, the
repo becomes the design system Design builds with — imported from
GitHub and self-checked — and **only the governance lines below still
matter**. Derived today, T5 is unticked; its
[D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
pause LIFTED when phase 2 closed
([D-081](../record/DECISIONS.md#d-081--phase-2-closes-the-polish-pass-is-split-out-not-dropped)),
so what holds the sunset now is simply that nobody has run the task.
The preamble, the working rules and the extraction path all remain in
force; nothing about this item has been superseded, and the "living
until replaced" ending is accurate as written rather than merely
inherited.

Three properties are worth naming.

**It is a box master in everything but name.** The repo holds the
text; the actual carrier is a paste into a session the repo cannot
see. That is exactly the failure mode the workshop names elsewhere —
an edit that lands in the master and never reaches the copy fails
SILENTLY, because a Design session opened with a stale preamble looks
identical to one opened with a current one. The refresh in
[#97](https://github.com/wsher0901/roam/pull/97) had no mechanism to
confirm the founder pastes the new text rather than an old copy, and
nothing on record tracks which version was last pasted.

**The governance line is the durable half.** Identity condensations
and tool-driving tips age with the product and the tool — #97 rewrote
several of them within three months. The no-write law has not changed
and, by the file's own sunset clause, is the part that survives T5.
The rest of the file is scaffolding for a period in which the repo
cannot yet describe itself to Design.

**The snapshot law is the same lesson in a second place.** A
design-system import is a copy, so a token change in the repo does not
propagate to Design any more than a preamble edit does. Both
directions of this bridge are manual, and both fail quietly. That is
the property most worth remembering about this surface: **every
connection between the repo and Design is a copy someone has to
re-make, and neither side reports staleness.**

The open edge is that this item has never been exercised. V1.S2.T5 —
the task that would produce the tokens, the shadcn theme, the motion
principles and the app shell, and the extraction path this file
describes in detail — has not run. The governance has been designed;
the handoff it governs has not happened.

## Sources

Down-links only.

- [DESIGN-KICKOFF](../DESIGN-KICKOFF.md) — the preamble, the working
  rules, the extraction path, and the sunset clause.
- [the design-kickoff story](../record/history/workshop/definition/design-kickoff.md)
  — [#64](https://github.com/wsher0901/roam/pull/64): why a pasted
  preamble is the only rule-carrier.
- [the design-kickoff-refresh story](../record/history/workshop/definition/design-kickoff-refresh.md)
  — [#97](https://github.com/wsher0901/roam/pull/97): the June-2026
  refresh, the snapshot law, and the no-D-number reasoning.
- [D-060](../record/DECISIONS.md#d-060--the-three-phase-standing-order)
  — the pause on V1.S2.T5.
- [V1.S2.T5](../ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  — the task whose ship retires most of this file.
- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) — the
  Claude-Design no-write law the governance block carries.
- [FOUNDATION](../FOUNDATION.md) — the reliability-first identity the
  preamble condenses.
- [SETUP §Staged](../SETUP.md#staged--turns-on-when-its-stage-opens) —
  the Design MCP server, staged rather than stockpiled.
- [DESIGN](../DESIGN.md) — the taste file the preamble now points
  at, every slot TBD.
- [D-084](../record/DECISIONS.md#d-084--the-global-design-stack) ·
  [the design-stack story](../record/history/workshop/definition/design-stack.md)
  — [#345](https://github.com/wsher0901/roam/pull/345): the stack,
  the four layers, and the one-directional override.
