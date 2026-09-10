---
type: spec
id: deps-sep
title: The advisory sweep — Next 16.3.4, and a dependabot lane
status: shipped
stage: workshop
branch: chore/deps-sep
pr: #356
opened: 2026-09-10
shipped: 2026-09-10
---

# deps-sep — the advisory sweep and the standing lane

**Links:** [SETUP §Stack](../../SETUP.md#stack) ·
[pickup §3](../../skills/pickup.md#3--gather-git-outranks-the-board)
· [ship §1](../../skills/ship.md#1--preflight) ·
[D-038](../DECISIONS.md#d-038--ci-is-the-arbiter) ·
[D-086](../DECISIONS.md#d-086--workshop-the-product-first-window),
the product-first window, which explicitly does not block dependency
and security work. **This link was a bare PR reference for most of
this bench's life** — D-086 lived on the sibling branch
[#355](https://github.com/wsher0901/roam/pull/355) and the anchor
was unresolvable from here, which turned `check:links` red twice. It
is woven now that #355 has merged

## Goal

Close the standing advisories and give the repo a lane that keeps
them closed without a bench each time.

The clone's reading before any change (`npm audit`, 2026-09-10):
**16 advisories — 1 critical, 8 high, 6 moderate, 1 low.** The
critical is a Next.js middleware/proxy bypass in App Router
applications; two of the highs (`postcss`, `sharp`) ride under Next
as well. The advisory names **16.3.4** as the fix.

So: bump `next` and `eslint-config-next` to the latest 16.3.x, run
`npm audit fix` WITHOUT `--force`, and take NO major version. Then
add `.github/dependabot.yml` so this becomes a monthly grouped PR
rather than a bench, and tell [pickup](../../skills/pickup.md) what
a `dependabot/*` branch is so it is never mistaken for one.

## Out of scope

- **Any major version.** ESLint 10, Vitest 5 and TypeScript 7 stay
  where they are. `--force` is not run; a fix that requires it is
  reported, not taken.
- **`.env.example`, [SETUP](../../SETUP.md), and `src/`.** Untouched.
  The stack's inventory changes only in the version numbers
  `package.json` already carries.
- **Any workshop change beyond the one pickup sentence.** The
  window ([D-086](../DECISIONS.md#d-086--workshop-the-product-first-window)
  ruling 1) permits this bench as product hygiene; it does not
  license a workshop bench riding along. The pickup sentence is in scope
  because `.github/dependabot.yml` would otherwise create a branch
  class no ritual knows how to read.

## Plan

1. `npm audit` — record the before reading by command.
2. `package.json` + `package-lock.json`: `next` and
   `eslint-config-next` → the latest 16.3.x (16.3.4).
3. `npm audit fix` (no `--force`).
4. `npm audit` — record the after reading; name every surviving
   advisory and why it stays.
5. `.github/dependabot.yml` — NEW: npm ecosystem, monthly, every
   update grouped into ONE PR, semver-major ignored.
6. [pickup §3](../../skills/pickup.md#3--gather-git-outranks-the-board)
   — one sentence: `dependabot/*` branches are not benches.
7. The full CI mirror, plus `npm run build` rendering `/` and
   `/_not-found`.

## Done means

- [ ] `npm audit` reports **0 critical and 0 high**.
- [ ] Every remaining moderate is named in
      [the memory](../history/product/build/deps-sep.md) with why it
      stays.
- [ ] No major version moved — ESLint, Vitest and TypeScript ranges
      are byte-identical to main's.
- [ ] `.github/dependabot.yml` exists, monthly, grouped, majors
      ignored.
- [ ] [pickup §3](../../skills/pickup.md#3--gather-git-outranks-the-board)
      carries the `dependabot/*` sentence.
- [ ] Full CI mirror green; `npm run build` renders `/` and
      `/_not-found`; the PUSHED head's Actions run green.

## Deviations

<filled by ship>

## Open questions

none.
