---
type: memory
id: deps-sep
updated: 2026-09-10 · payload complete · work PC
---

# deps-sep — the advisory sweep and the standing lane

## Status

complete, awaiting merge — 2026-09-10. Born bench-first at the work
PC control tower from freshly pulled main (`08e17ab`) as the
parallel slot to `product-first`; spec and memory stub were the
first commits, the draft PR
([#356](https://github.com/wsher0901/roam/pull/356)) followed
immediately. **The sweep went to ZERO — every advisory closed, not
just the critical and the highs.** SELF-AUTHORED, so an external Web
review comes before the merge word; batched with `product-first`.

## What this task is

Close the standing npm advisories and give the repo a lane that
keeps them closed without a bench each time. Contract:
[the spec](../record/specs/deps-sep.md).

## Pending issues

none.

## Left / idle

Nothing. One thing deliberately NOT done: `npm audit fix --force`
was never run, and no major version moved.

## The story

### The before and after, by command

```sh
npm audit          # BEFORE
# 16 vulnerabilities (1 low, 6 moderate, 8 high, 1 critical)

npm audit --json | node -e "…metadata.vulnerabilities…"
# {"info":0,"low":1,"moderate":6,"high":8,"critical":1,"total":16}
```

The **critical** was `next` itself — a middleware/proxy bypass in
App Router applications using Turbopack — and npm named **16.3.4**
as the fix. Two of the eight highs, `postcss` and `sharp`, were
Next's own transitives and carried the same fix. npm labelled all
three "requires `--force`" for one reason only: 16.3.4 sits outside
the range `package.json` stated (`16.2.9`, pinned exactly). Bumping
the declared version is not a forced fix — it is the ordinary one —
so the range was raised first and `--force` was never needed.

```sh
# 1 — raise the declared versions to the latest 16.3.x
npm view next versions --json                # 16.3.0 … 16.3.4
npm view eslint-config-next versions --json  # 16.3.0 … 16.3.4
#   next: 16.2.9 -> 16.3.4
#   eslint-config-next: 16.2.9 -> 16.3.4
npm install            # 12 vulnerabilities (1 low, 6 moderate, 5 high)

# 2 — the rest, no --force
npm audit fix          # added 4, changed 30, audited 630
                       # found 0 vulnerabilities

npm audit              # AFTER
# found 0 vulnerabilities
npm audit --json | node -e "…metadata.vulnerabilities…"
# {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0}
```

**16 → 0.** The bump alone took it to 12 (killing the critical and
three highs); `npm audit fix` closed the remaining twelve without a
single major.

### No surviving moderate to name, and that is the honest report

The spec's Done-means asks for **each remaining moderate named with
why it stays**. There are none — the count is zero across every
severity, so the list is empty rather than omitted. Said explicitly
because an empty section and a forgotten section look identical, and
this one was checked twice by the machine-readable reading above.

### No major moved, and it was proved rather than asserted

```sh
git diff main -- package.json | grep -E '^[-+]\s+"'
# -    "next": "16.2.9,"   +    "next": "16.3.4",
# -    "eslint-config-next": "16.2.9",  +  "eslint-config-next": "16.3.4",
```

Only those two lines changed. `eslint` stays `^9`, `vitest` `^4.1.8`,
`typescript` `^5`. And because a range can hold still while the LOCK
moves underneath it, the lock was diffed too — every package present
in both `main`'s lock and this one, compared on its major:

```sh
# MAJOR MOVED …   -> none
# major moves: 0
```

Installed after the sweep: eslint 9.39.4 · vitest 4.1.11 ·
typescript 5.9.3 · next 16.3.4 · react 19.2.4. ESLint 10, Vitest 5
and TypeScript 7 are all published and all declined here — each is a
migration with a blast radius, which is bench work with a spec and a
review.

### The dependabot lane, and why majors are ignored

`.github/dependabot.yml` is new: npm, `/`, **monthly**, every minor
and patch grouped into **ONE** PR (`open-pull-requests-limit: 1`),
and `version-update:semver-major` ignored for every dependency. The
grouping is the point — sixteen separate PRs a month would be worse
than the problem, and this workshop's whole complaint at
[#355](https://github.com/wsher0901/roam/pull/355) is bookkeeping
PRs. The major-ignore is the same judgement written as config: a
major arriving unannounced as an unreviewed PR is exactly the thing
a spec and a review exist to prevent.

**And a new branch class needs a ritual that knows how to read it.**
`dependabot/*` branches would otherwise meet
[pickup](../skills/pickup.md)'s claim check, which asks whether an
open branch is a live bench to adopt or a reclaimable one to
respawn — and would answer wrongly, because a dependabot branch is
neither. §3 now says so in one sentence: no memory, no claim, merges
on the founder's word after green CI. That sentence is in scope
under the window's ruling-1 exception (a fix the product bench needs
in order to proceed) — without it this bench would ship a hazard.

### The one deviation: a D-number that is still on another branch

The spec was written citing `D-086` by anchor, and `check:links`
went red twice — correctly. **D-086 lives on `docs/product-first`,
this bench's sibling, and cannot be resolved from here until that
bench merges.** This is a live instance of the inbox line "A BOARD
CANNOT CITE A DECISION THAT IS STILL ON A BRANCH", which observed it
twice on 2026-08-05 and now has a third sighting from a spec rather
than a board.

Repaired the way both earlier repaints chose: the window is NAMED in
words and LINKED AT ITS PR
([#355](https://github.com/wsher0901/roam/pull/355)) rather than at
an anchor `main` cannot resolve, with the reason stated in the spec
itself so a later reader does not "repair" it into a broken link.
The line stays open in the inbox — the general carve-out is a law
edit, which the window forbids this bench from making.

### Verification

Full CI mirror green on 16.3.4:

```sh
npm run check:links     # 7182 internal links, 0 broken
npm run check:ledger    # 139 history files ↔ 139 ledger lines
npm run check:memory    # 1 memory file, valid
npm run lint            # clean
npm run format:check    # all matched files use Prettier code style
npm test                # 2 files, 3 tests, passed (vitest 4.1.11)
npm run build           # ✓ compiled; routes: / and /_not-found, both static
```

## Where to look

- [the spec](../record/specs/deps-sep.md) — the contract
- `package.json` · `package-lock.json` — the bump
- `.github/dependabot.yml` — the standing lane
- [pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board)
  — what a `dependabot/*` branch is
- [#356](https://github.com/wsher0901/roam/pull/356) — the PR
