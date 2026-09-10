---
type: spec
id: product-first
title: The product-first window — a ceremony diet until V1.S1 closes
status: shipped
stage: workshop
branch: docs/product-first
pr: #355
opened: 2026-09-10
shipped: 2026-09-10
---

# product-first — the window, the diet, and the inbox split

**Links:** [LAWS §Workflow](../../LAWS.md#workflow-non-negotiable) ·
[HOME §Micro-PRs](../../HOME.md#micro-prs) ·
[ship](../../skills/ship.md) · [handoff](../../skills/handoff.md) ·
[IDEAS](../../IDEAS.md) · [chronicle INDEX](../../chronicle/INDEX.md) ·
[DASHBOARD](../../DASHBOARD.md) ·
[ROADMAP V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
· [D-023](../DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)
· [D-059](../DECISIONS.md#d-059--the-chronicle-layer)
· [D-066](../DECISIONS.md#d-066--the-ideas-entry-contract)
· [D-067](../DECISIONS.md#d-067--the-report-skeleton-and-the-board-diet)
· [D-079](../DECISIONS.md#d-079--the-closing-campaigns-advance-word)

## Goal

The workshop has out-built the product. Derived from this clone at
write time: **351 merged PRs, 37 of which touched product code**;
**170 of those merges changed nothing but
[DASHBOARD](../../DASHBOARD.md) and/or [IDEAS](../../IDEAS.md)**;
**5 ROADMAP ticks, every one of them on 2026-06-11/12**, with 314
merged PRs and 90 days since the last; **124 workshop history files
against 15 product**; and **34 days since phase 3 was unblocked**
with 23 merges and zero ticks in that window.

This bench mints **D-086 — the product-first window**: from its
merge until [V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes (T3–T7 ticked), **no workshop bench is born**, the ceremony
runs on a diet, the T3–T6 external review is batched, the board
carries a permanent diet, and the inbox splits so that
[IDEAS](../../IDEAS.md) §Open holds product work only.

## Out of scope

- **Any product work.** This bench opens the window; it does not
  walk through it. [V1.S1](../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
  T3–T6 are triaged after the merge word, not here.
- **Any box master's fenced text** —
  [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md),
  [LANE-WORKER](../../LANE-WORKER.md),
  [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md). A master that would
  need to learn the window is a follow-on with a re-save
  ([D-064](../DECISIONS.md#d-064--the-box-master-class-and-setup-entry-contract)),
  never this bench.
- **Retiring or rewriting any law the window merely suspends.**
  [D-023](../DECISIONS.md#d-023--universal-draft-pr-at-birth-and-micro-pr-carve-out)'s
  micro-PR carve-out STANDS and is simply not exercised; the merge
  gate, the no-solo-approval law and CI-as-arbiter are untouched.
- **Dependency and security work** — that is product hygiene and
  rides its own bench (`chore/deps-sep`, this bench's parallel slot).

## Plan

1. **DECIDE — D-086**, heading tagged `[workshop]`, with its five
   rulings and its audit-derived Why; entry and ripple in one commit.
2. **[LAWS §Workflow](../../LAWS.md#workflow-non-negotiable)** — one
   bullet, THE PRODUCT-FIRST WINDOW, pointing at D-086.
3. **[HOME §Micro-PRs](../../HOME.md#micro-prs)** — one pointer
   sentence naming the window's diet.
4. **[ship](../../skills/ship.md)** — the three window clauses
   (§6 no gate-repaint micro-PR · §7 synthesis deferred for product
   welds · §8 the tail's repaint rides the weld).
5. **[handoff §4](../../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)**
   — the RECENT cap (last five Completed) and the ISSUES rule (only
   lines with no home elsewhere).
6. **[chronicle INDEX](../../chronicle/INDEX.md)** — one head line
   recording the deferral and the catch-up bench.
7. **[IDEAS](../../IDEAS.md)** — the `## Parked — workshop` section,
   the verbatim move, the decide-tag line closed, one product line
   added.
8. **[docs/record/probes/summon-fire.md](../probes/summon-fire.md)**
   — NEW; the summon timing table and its correction lifted verbatim
   from the board's Recent, giving that measurement its first record
   home so the board's "no record home" warning retires with the move.
9. **[DASHBOARD](../../DASHBOARD.md)** — repaint per
   [handoff §4](../../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
   as written, plus ruling 4.
10. **`public/spikes/taste/`** — delete the three unreferenced
    probes; keep `place-first.html`, [DESIGN](../../DESIGN.md)'s only
    linked reference.
11. The full CI mirror, then four sweep proofs that re-run to zero.
12. **`.claude/settings.json` — widen `permissions.allow` only.** The
    founder asked for it at the Web review: rituals were prompting on
    ordinary inspection (`grep`, `sed`, `git show`, `gh pr checks`,
    `npm audit`), which is friction on every bench and buys no
    safety. The INSPECTION AND READ-ONLY SHELL INVENTORY is added;
    `deny` is not touched; **no standing `gh pr merge` is granted** —
    the self-merge stays reachable only inside a ritual's own
    `allowed-tools`, which is what
    [HOME §Micro-PRs](../../HOME.md#micro-prs) says the physical gate
    rests on. Bare `rm` is deliberately NOT added: its `-rf` form is
    denied and `git rm` is the way.
    **AMENDED IN FLIGHT, on the founder's word to rule it rather than
    ask:** a security review found that six of the listed entries are
    EXECUTION primitives, so the allow side reopened what `deny`
    closes. `curl` and `npx next` are dropped (neither is inspection,
    and no ritual calls either), and `deny` GAINS twenty rules
    closing the escape forms. Widening `deny` is the one thing the
    mandate said not to do — taken deliberately, because the mandate's
    own stated intent was a READ-ONLY inventory, and a deny list that
    its own allow list walks around is not a rail.

## Done means

- [ ] D-086 exists with all five rulings, a `[workshop]`-tagged
      heading, and a Why whose every figure was derived from this
      clone by a recorded command.
- [ ] The five ripple files carry exactly the edits listed above and
      nothing more.
- [ ] [docs/record/probes/summon-fire.md](../probes/summon-fire.md)
      holds the timing table and the correction VERBATIM, and the
      board no longer warns that the measurement has no home.
- [ ] [IDEAS](../../IDEAS.md) §Open contains no standing workshop-
      machinery line; every one moved verbatim to
      `## Parked — workshop`.
- [ ] The board's ISSUES section carries no line whose only content
      is a pointer to [IDEAS](../../IDEAS.md).
- [ ] `public/spikes/taste/` holds `place-first.html` and nothing
      else, and `npm run check:links` proves it still resolves.
- [ ] `.claude/settings.json` parses; every one of main's eleven
      `deny` rules survives and twenty escape-closing rules join
      them; no `allow` entry begins with `Bash(gh pr merge`; no bare
      `rm`; `curl` and `npx next` absent; `env`, `enabledPlugins` and
      `hooks` unchanged.
- [ ] The full CI mirror is green and the PUSHED head's Actions run
      is green.

## Deviations

- **A SHIPPED SPEC'S CITED URL 404s BECAUSE OF THIS BENCH.** Deleting
  `public/spikes/taste/index.html` leaves
  [taste-pass](taste-pass.md)'s frozen spec pointing at the deployed
  DIRECTORY url `…/spikes/taste/`, which without an index will not
  resolve. Named here rather than only in the diary, because the
  diary moves to `record/history/` and a later reader chasing that
  url will start from the spec. **Nothing load-bearing broke:**
  `place-first.html` — [DESIGN](../../DESIGN.md)'s only linked
  reference — is byte-identical to main and resolves, which
  `npm run check:links` proves. The frozen spec is NOT edited here
  (it is outside this bench's file list); repairing it with a dated
  note is a one-line follow-on.
- **STEP 0 of the sitting's mandate could not be performed, and its
  premise was wrong** — the "no-agents" sentence is emitted by the
  CLI and exists in no editable file. The full search is in
  [the memory](../history/workshop/definition/product-first.md); the founder's ruling
  is [DASHBOARD](../../DASHBOARD.md) Needs-you 2. Recorded as a
  deviation because the mandate asked for a file-and-line and there
  is none.

## Open questions

none — the mandate rules every case it opens.
