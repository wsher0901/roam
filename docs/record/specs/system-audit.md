---
type: spec
id: system-audit
title: Validate the workshop — do the gates, rituals and promises hold?
status: shipped
stage: workshop
branch: chore/system-audit
pr: #362
opened: 2026-09-10
shipped: 2026-09-10 22:17 UTC
---

# system-audit — does the machinery do what it says?

**Links:** [LAWS](../../LAWS.md) · [HOME](../../HOME.md) ·
[SETUP](../../SETUP.md) · [docs/skills/](../../skills) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)

## Goal

Two jobs, both the founder's, given on 2026-09-10.

**One — the permission friction.** Determine why the founder is
constantly asked to approve shell commands, and fix it so the fix
applies in EVERY directory rather than only in Roam.

**Two — validate the system.** Evaluate the machinery Roam runs
on — skills, workflow, pipeline, the GitHub repo, the promises the
docs make, the instructions — and fix what is broken. **Not Roam's
product content.**

The governing question is not "do the docs describe a good system"
but **"does the system do what the docs claim"** — so every check
that CAN be run is run, and a claim tested is worth more than a
claim read.

## The window is suspended for this bench

[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)
ruling 1 forbids workshop benches until
[V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes, and this bench is entirely workshop. **The founder
suspended it explicitly — "audit and fix" — on 2026-09-10.**

**THE SUSPENSION IS NOW ON THE RECORD, in the entry's own words**
([D-086](../DECISIONS.md#d-086--workshop-the-product-first-window),
amendment line): "2026-09-10 — the founder suspended the window for
one workshop bench, chore/system-audit (#362), to fix the machinery
the Web full-pass validation listed; the window resumes at its
merge." Three things follow, and they bound this bench exactly:

- **The suspension is for THIS bench and no other.** No second
  workshop bench is born under it.
- **The window RESUMES AT THIS BENCH'S MERGE** — not at
  [V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  close, and not by anyone deciding it has lapsed.
- **The scope is the machinery the Web full-pass validation
  listed**, which is why this bench turned from audit-and-file into
  fix-everything: the founder ruled that every listed workshop item
  is fixed before any product bench reopens.

## Out of scope

- **Roam's product content** — FACTS, SOURCES, ENGINE's model, the
  roadmap's substance. Named out by the founder.
- **The four parked V1.S1 benches** (#358–#361). They sit at birth
  and are not touched here.
- **Box masters' fenced text** — [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md),
  [LANE-WORKER](../../LANE-WORKER.md),
  [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md). If a finding needs
  one, it is surfaced, not edited
  ([D-064](../DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)).

## Plan

1. Diagnose the permission friction at its source; fix at USER
   scope so it applies everywhere.
2. Prove each CI gate catches what it claims, by deliberately
   breaking something and confirming the gate goes red.
3. Check GitHub against what LAWS promises: branch protection,
   required checks, who can bypass.
4. Check every skill stub resolves, every hook runs, every doc
   named in prose exists.
5. Re-derive every literal count the docs assert.
6. Run SETUP's own VERIFY probes.
7. Read the process corpus for contradictions; fix them.
8. Record honestly what is enforced by machinery and what is
   enforced only by compliance.

## Done means

- [ ] The permission cause is named and fixed at user scope, with
      the fix verified to parse and the old file backed up.
- [ ] Every gate is proven to FAIL on deliberate breakage, or its
      blind spot is recorded.
- [ ] Branch protection is read from the API, not assumed.
- [ ] Every skill stub, hook, and prose-named doc is confirmed.
- [ ] Every asserted count is re-derived.
- [ ] Contradictions found in the corpus are fixed and swept to
      zero.
- [ ] The honest enforcement picture is written down — which
      promises machinery keeps, and which rest on compliance.
- [ ] Full CI mirror green; pushed head's Actions green.

**AND THE FIX-EVERYTHING RIDERS,** added 2026-09-10 when the
founder ruled the listed items fixed rather than filed:

- [ ] **R1 — the merge-gate claim.** One home says what the SERVER
      refuses and what only BEHAVIOUR supplies, including that auto
      mode adjudicates `gh pr merge` outside a ritual without a
      prompt. Every "physical gate" sentence swept.
- [ ] **R2 — the rails run on both shells.** Every tracked
      `Bash(...)` rule has a `PowerShell(...)` twin; JSON parses;
      counts equal in both lists; no allow begins `gh pr merge`;
      deny is a superset.
- [ ] **R3 — the hook stops sweeping.** `git add -A` → `git add -u`;
      untracked paths named in the message, never committed; proved
      on a scratch branch.
- [ ] **R4 — the weave gate.** A bare D-number in a living doc
      fails CI naming file:line; every offender on main linked;
      LAWS' weave rule says check:links enforces it; proved
      red-then-green.
- [ ] **R5 — dependabot [#357](https://github.com/wsher0901/roam/pull/357).**
      Reformatted for prettier 3.9, all 12 bumps read and reported
      by a non-author seat, merged on the founder's word.
- [ ] **R6 — the suspension on the record.** This section, the
      memory, and
      [D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)'s
      amendment line.
- [ ] **R7 — F3 parked.** One
      [IDEAS](../../IDEAS.md) Parked line; not fixed here.

## Deviations

<filled by ship>

## Open questions

<raised as BLOCKED: comments, or in the gate report>
