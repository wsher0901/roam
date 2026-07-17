---
type: spec
id: check-memory
title: check:memory — the memory-format CI gate
status: open
stage: workshop
branch: feat/check-memory
pr: —
opened: 2026-07-17
shipped: —
---

# check-memory — the memory-format CI gate

**Links:**
[TEMPLATE — the locked format](../memory/TEMPLATE.md) ·
[ship §1 — the CI mirror](../skills/ship.md#1--preflight) ·
style model: `scripts/check-ledger.mjs` · origin idea line:
[IDEAS](../IDEAS.md) (2026-07-16, check:memory CI lint)

## Goal

The 2026-07-16 IDEAS line becomes machinery: a zero-dep script
validating every task memory in `docs/memory/` against
[TEMPLATE](../memory/TEMPLATE.md)'s locked format, wired as a CI
step and into the local mirror. Fully specified — zero lane
decisions; every judgment is made below.

## The validation contract (exact)

`scripts/check-memory.mjs` — zero-dep Node, shebang + header
comment styled on `scripts/check-ledger.mjs` (read it first).
Scope: every `docs/memory/*.md` EXCEPT `README.md` and
`TEMPLATE.md`. Zero files in scope = vacuous pass, printed
honestly ("0 memory files — nothing to validate"). Per file:

1. FRONTMATTER — the file opens with a `---` fence closed by a
   second `---`; inside it: `type: memory`, a non-empty `id:`, a
   non-empty `updated:`.
2. HEADINGS — all six section headings present, each at `## `
   level, in TEMPLATE order: Status · What this task is · Pending
   issues · Left / idle · The story · Where to look.
3. STATUS DATE — the `## Status` section's body carries at least
   one `YYYY-MM-DD` date stamp (regex `\d{4}-\d{2}-\d{2}`); the
   check reports the LATEST such date it finds there. (Cockpit's
   zero-decision rendering of the founder's "latest line carries
   a date stamp" — a wrapped paragraph makes "last line" fragile,
   so the rule is: the Status body is dated; recorded here so the
   lane implements exactly this.)
4. PLACEHOLDERS — after stripping backtick spans, no unresolved
   TEMPLATE-style placeholder remains anywhere in the file:
   regex `/<[a-z][^<>\n]{0,60}>/i`.

Output: one honest line per failing file naming every failed rule
("docs/memory/x.md: missing heading '## Left / idle'; Status
carries no date"); exit 1 if any file fails; on green, "N memory
files checked — all valid" (with each file's latest Status date).

## Plan

1. Bench birth: branch · this spec · memory stub · draft PR.
2. `scripts/check-memory.mjs` per the contract above.
3. `package.json`: `"check:memory": "node scripts/check-memory.mjs"`,
   placed directly after `check:ledger`.
4. `.github/workflows/ci.yml`: the step `npm run check:memory`
   directly after the `check:ledger` step (read the file, copy
   its step shape).
5. [ship §1](../skills/ship.md#1--preflight): the mirror list
   gains `check:memory` after `check:ledger`.
6. Self-test: the full CI mirror INCLUDING the new step must pass
   on this branch — this bench's own memory file is in scope and
   must validate.

## Constraints

- Touch ONLY: `scripts/check-memory.mjs`, `package.json`,
  `.github/workflows/ci.yml`, `docs/skills/ship.md`, this spec,
  and the bench memory. File-disjoint from the sibling lane
  (docs/agent-teams-brain) by construction.
- Lane law throughout: push every commit; diary at the four
  moments; `BLOCKED:` + @wsher0901 on any blocker, then idle-wait;
  completion = final memory rewrite → Actions green → ready-flip →
  completion comment @wsher0901. NEVER merge; never touch
  DASHBOARD/ROADMAP/IDEAS/history.

## Done means

- [ ] `scripts/check-memory.mjs` implements the exact contract.
- [ ] `package.json` carries `check:memory`.
- [ ] ci.yml runs it after `check:ledger`.
- [ ] ship §1's mirror list names it.
- [ ] The branch's own CI mirror (new step included) is green —
      this bench's memory validates itself.
- [ ] The pushed commit's Actions run green. (Ticked at the weld
      by the cockpit.)

## Deviations (declared at birth)

Two doc mentions are deliberately NOT this lane's to make, and
ride the weld as recorded cockpit acts at the next sitting —
nothing merely happens:

- `docs/SETUP.md`'s CI line ("CI — .github/workflows/ci.yml:
  …") gains the check:memory mention at the weld — SETUP is owned
  by sibling lane A this flight (the no-shared-file law).
- [LAWS §Workflow](../LAWS.md#workflow-non-negotiable)'s CI-mirror
  parenthetical gains its ledger-sibling mention at the weld —
  a law file; lanes leave it to the cockpit.

## Verification

- `npm run check:memory` on this branch → green, names this
  bench's memory with its Status date.
- Deliberately break a copy (drop a heading) in a scratch run →
  nonzero exit + the honest line. (Do this in /tmp or the
  sandbox scratch dir, never committed.)
- grep `check:memory` → package.json, ci.yml, ship §1.
