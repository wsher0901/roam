---
type: spec
id: design-stack
title: The global design stack, and Roam's alignment to it
status: in-flight
stage: workshop
branch: docs/design-stack
opened: 2026-08-11
---

# design-stack — a machine-wide design capability, and the repo that answers to it

**Links:** [LAWS §Workflow](../../LAWS.md#workflow-non-negotiable) ·
[SETUP §Per machine](../../SETUP.md#per-machine-procedure-machine-setup-skill)
· [machine-setup](../../skills/machine-setup.md) ·
[HOME §Terms](../../HOME.md#terms) ·
[HOME §Equipment & environment](../../HOME.md#equipment--environment)
· [DESIGN-KICKOFF](../../DESIGN-KICKOFF.md) ·
[IDEAS](../../IDEAS.md) ·
[D-007](../DECISIONS.md#d-007--shadcnui-builds-on-base-ui)

## Goal

Two halves, one bench.

**PART A — the machine.** Install a design capability at USER
scope on this machine: the official `frontend-design` plugin, three
MCP servers (playwright, shadcn, context7), a global design law in
`~/.claude/CLAUDE.md`, and a global `design-review` agent that
screenshots built surfaces at 375px and 1440px and grades them.
None of this is a repo write; it is machine equipment, and it
applies to every project this machine opens.

**PART B — the repo.** Make Roam answer to that stack: a
[decide](../../skills/decide.md) entry adopting it, a new
`docs/DESIGN.md` that holds Roam's own taste (and therefore
outranks the global law), a design-review gate for UI-touching
diffs in [LAWS §Workflow](../../LAWS.md#workflow-non-negotiable),
and the setup steps recorded where a second machine will find them.

## Out of scope

- **Taste itself.** Direction, font pair and the five reference
  images are the FOUNDER'S authority. `docs/DESIGN.md` ships with
  every one of them marked TBD, awaiting a founder taste pass; a
  bench that filled them in would be inventing the product's face.
- **Any box master's fenced text** —
  [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md),
  [LANE-WORKER](../../LANE-WORKER.md),
  [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md). Untouched.
- **Third-party design skills.** Evaluated, NOT installed —
  unverified third parties are a founder call, filed in
  [IDEAS](../../IDEAS.md).
- **The home PC.** Machine parity is owed by
  [machine-setup](../../skills/machine-setup.md) and stays pending
  until the next sitting there; this bench records the procedure,
  it cannot run it on a machine it is not sitting at.
- **Any UI code.** No component, no token file, no app diff. The
  stack is installed and the rules are written; the first screen it
  governs belongs to [V1.S2.T5](../../ROADMAP.md).

## Plan

1. **Part A, on this machine** — plugin at user scope; three MCP
   servers at user scope; `~/.claude/CLAUDE.md` gains a delimited
   `# Design law (global)` section; `~/.claude/agents/design-review.md`
   is written read-only + Playwright. Every command resolved against
   current official docs before running, and every interactive trust
   prompt reported rather than silently accepted.
2. **Part A verification** — plugin listed, three servers healthy,
   and a scratch-directory smoke test that proves the skill triggers
   and the screenshot loop works end to end.
3. **`decide`** — one D-number for the adoption, with its ripple in
   the same commit.
4. **Part B edits**, each placed by its own file's conventions:
   `docs/DESIGN.md` (new) · root `CLAUDE.md` · LAWS §Workflow ·
   DESIGN-KICKOFF's preamble · SETUP §Per machine + machine-setup ·
   HOME §Terms and §Equipment · IDEAS (three lines).
5. **Gates** — `check:links`, `check:ledger`, `check:memory`, then
   the pushed head's Actions run green.

## Done means

- [ ] Part A is installed and VERIFIED on the work PC, with the
      smoke test's result recorded — including anything that failed.
- [ ] One D-number records the adoption; its **Affects** line and
      the actual edits match exactly.
- [ ] `docs/DESIGN.md` exists, outranks the global law by its own
      words, and every taste slot is marked TBD.
- [ ] A UI-touching diff cannot reach THE GATE without design-review:
      the sentence is in LAWS §Workflow.
- [ ] The second machine can reproduce Part A from
      [machine-setup](../../skills/machine-setup.md) alone.
- [ ] New vocabulary has a [HOME §Terms](../../HOME.md#terms) row —
      design law, taste file, design-review agent.
- [ ] Gates green; the pushed head's Actions run green.
- [ ] Shipped to THE GATE — **not merged.** Tower-authored, so the
      external Web review precedes the founder's word.

## Notes for whoever resumes this bench

**The taste pass is the point of the TBDs, not an oversight.** The
easy version of this bench picks a font pair and a direction,
because the global law demands one before any UI code and an empty
file looks unfinished. That would hand the founder a face chosen by
a docs bench. The tower's job is to prepare the SHORTLIST; the
choice is the founder's, and it is filed in
[IDEAS](../../IDEAS.md) as pending rather than left implied.

**Part A cannot be verified from the repo.** Nothing in git proves
a user-scope plugin is installed or an MCP server is healthy — the
evidence is command output in the session, so it is recorded in the
memory and the PR description, which is the only place a later
reader can find it.
