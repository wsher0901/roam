---
type: chronicle-story
shelf: II — the lane system
status: living
updated: 2026-08-06 · the last uncovered road re-derived as closed · cloud lane
---

# Agent teams — the boundary drawn before the first team existed

> **CURRENT ENDING (2026-08-06).** The boundary is one sentence with
> its reasons written out at
> [HOME §Agent teams](../HOME.md#agent-teams): **teams are for
> EXPLORATION AND REVIEW at a ground seat; LANES REMAIN THE
> AUTHORSHIP MECHANISM.** Two risks are law — a team is
> single-sitting-only, and a teammate-authored diff counts as
> self-authored under no-solo-approval. Both are now ENFORCED
> rather than merely stated: handoff captures a live team's
> findings and shuts it down before anything is parked, and pickup
> carries the ghost-teammate recovery note. **The census cell for
> this item ends "one road stays uncovered and filed"; the
> derivation contradicts it and wins — that road, the superseded
> seat that ran no ritual at all, was closed in two recorded steps
> and its inbox line is marked closed.** What remains open is
> something else entirely: a proposal to let any session SUGGEST a
> team unprompted, gated on grading the first team use.

## What it is

A fence built around a capability the moment it became available,
and before it was used for anything.

A team, in one line: several full sessions — a fixed lead plus
teammates, each with its own context window — sharing a task list
and messaging each other directly. That last part is what
distinguishes a team from exploratory subagents, which only report
back to whoever called them.

The boundary says where that shape is allowed: exploring and
reviewing, at a ground seat, never authoring a bench, never
merging, never running a ritual.

## What raised it

An experimental flag that was already switched on with nothing
reaching for it. The question was therefore not whether teams would
be used but whether their FIRST use would be governed — and the two
ways it could go wrong were both foreseeable, so they were written
as rules before the first team existed rather than discovered
afterwards.

## What changed, in order

- **[D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary)
  — the boundary, its reasons, and its two risks.** The reasons are
  stated rather than asserted, and they are the durable part: lanes
  are cloud-isolated, PR-gated, canary-claimed and wake-locked with
  days of hardening behind them, while teams are local, in-session,
  share ONE working tree, and have no PR isolation of any kind; and
  authoring a bench is sequential same-file work, the exact shape
  the official guidance points away from teams and back at a single
  session. **Every property that makes a lane safe is a property a
  team structurally lacks** — so the line is drawn where each
  mechanism's guarantees actually hold.
- **The research was verified before anything was written**,
  against the official page: teammates do not inherit the lead's
  `/model` and a teammate's model is fixed at spawn; they DO
  inherit effort; a teammate spawned from a subagent definition
  honours that definition's `tools` and `model` but not its
  `skills` or `mcpServers`; `/resume` and `/rewind` do not restore
  in-process teammates. Three further facts turned out to be
  load-bearing: one team per session and no nested teams — which
  independently justify keeping teams out of the cockpit — and
  split-pane mode being unsupported on the terminal both seats run.
- **Risk (a) is written twice on purpose.** The carve-out to the
  interrupt promise appears both in the boundary section and on the
  Command card's Esc line, because that is where a founder meets
  the promise "Esc is safe", and a promise and its exception must
  not live one scroll apart. The sentence that ties them: **an
  interrupt is safe for your session and fatal to your teammates.**
- **[D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  — the rule gains a ritual that acts on it, and the duty
  INVERTS.** The candidate clause had been "a live team is finished
  or shut down, never parked", which stops at the processes.
  Teammates are cheap: they die cheaply and respawn cheaply. What
  cannot be re-derived is what the team FOUND, because a team's
  output lives in transcripts that vanish with the session while
  git keeps everything else. So handoff captures FIRST — per
  teammate, into the open bench's memory or a dated inbox line —
  and only then shuts down by name. Two honesty clauses ride along:
  shutdown is not instant, because a teammate finishes its current
  request first; and a teammate that refuses or hangs is named
  plainly in the close report rather than smoothed into a clean
  exit.
- **The same decision refused to copy itself into landing.** A
  cockpit does not lead a team — and the basis is stated as what it
  is, POLICY rather than a platform limit, because the platform
  would happily let any session spawn teammates. Resting the rule
  on one-team-per-session would have founded it on a mechanism that
  does not imply it and could change.
- **[D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  →
  [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized)
  — the last uncovered road is closed, in two steps.** The road was
  supersession: a seat that discovers it has been superseded exits
  without running any ritual, so a superseded control tower leading
  a team lost its findings. The first step closed the cockpit case;
  the second generalized it — ANY superseded seat exits by its OWN
  closing ritual and never bare, a cockpit by landing, a ground
  control tower by capture-then-close with TEAM FINDINGS CAPTURED
  FIRST. The bench that made the first step marked its inbox line
  PARTLY CLOSED rather than claiming a fix that did not exist,
  which is exactly what made the second step necessary and
  reviewable.

## Where it stands

The boundary holds, and its first exercise was a clean one: the
workshop's first team use put three read-only teammates on a
research census at a ground seat, wrote nothing to the tree from a
teammate, and ran the capture-then-shutdown discipline in the
corrected order an external review demanded mid-bench — each
capture committed and pushed BEFORE the shutdown requests, an order
the review then proved from the push log rather than from the
report. Three silent teammate shutdowns were named plainly per the
close-report duty instead of being tidied away.

**The census cell's closing clause is out of date, and this is the
kind of staleness the ending rule exists for.** "One road stays
uncovered and filed" was true when written; the road is now closed
in the record and its inbox line carries the closed marker. Nothing
was careless about the cell — the closure happened after it.

What IS open is a different question, and it is a permission rather
than a gap: whether every session should be licensed to PROPOSE
teams and lanes unprompted under the hands litmus, with the
founder's word staying the only trigger. It is filed and gated on
grading the first team use — so the boundary's next move waits on
an assessment of the one team that has run, not on a new incident.

## Sources

Down-links only.

- [HOME §Agent teams](../HOME.md#agent-teams) — the boundary, the
  reasons, and both risks in their living form ·
  [LAWS §Workflow](../LAWS.md#workflow-non-negotiable) — the
  teammate clause of no-solo-approval.
- [D-020](../record/DECISIONS.md#d-020--parallel-lanes-v2) — the
  early team rule this boundary superseded ·
  [D-045](../record/DECISIONS.md#d-045--hands-doctrine) ·
  [D-055](../record/DECISIONS.md#d-055--agent-teams-the-boundary) ·
  [D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  ·
  [D-061](../record/DECISIONS.md#d-061--the-landing-doctrine-recut-to-three-scenarios)
  ·
  [D-062](../record/DECISIONS.md#d-062--the-wake-rule-generalized).
- [handoff §1.2](../skills/handoff.md#12--shut-the-team-down-full-only)
  — capture, then kill ·
  [pickup §2](../skills/pickup.md#2--self-heal) — the ghost-teammate
  note · [TEMPLATE](../memory/TEMPLATE.md) — the conditional TEAM
  FINDINGS field.
- [the agent-teams weld](../record/history/workshop/definition/agent-teams.md)
  — the verified research and where the boundary was filed ·
  [the chronicle-layer weld](../record/history/workshop/definition/chronicle-layer.md)
  — the first team use and its capture order.
- [IDEAS](../IDEAS.md) — the closed superseded-seat line and the
  open propose-a-team line.
