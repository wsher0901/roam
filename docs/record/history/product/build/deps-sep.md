---
type: history
slug: deps-sep
shipped: 2026-09-10 17:40 UTC
pr: #356
synthesis: deferred — D-086
synthesis-carried: pickup (workshop/mechanism) — §3's dependabot exemption
---

# deps-sep — the advisory sweep and the standing lane

## Status

complete, awaiting merge — 2026-09-10. Born bench-first at the work
PC control tower from freshly pulled main (`08e17ab`) as the
parallel slot to `product-first`; spec and memory stub were the
first commits, the draft PR
([#356](https://github.com/wsher0901/roam/pull/356)) followed
immediately. **The sweep went to ZERO — every advisory closed, not
just the critical and the highs.** Eight critic findings, all
repaired. SELF-AUTHORED, so an external Web review comes before the
merge word; batched with `product-first`.

## What this task is

Close the standing npm advisories and give the repo a lane that
raises the next round as a monthly grouped PR rather than a bench.
Contract: [the spec](../../../specs/deps-sep.md).

## Pending issues

**THE LANE DOES NOT COVER MAJOR-ONLY SECURITY FIXES, and nothing
else in this repo does either.** `.github/dependabot.yml` ignores
`version-update:semver-major` for every dependency, and Dependabot's
`ignore` applies to SECURITY updates as well as version updates —
so an advisory whose only fix is a major version will not be raised
by this lane. CI runs no `npm audit` step (`grep -rn audit .github/`
returns zero), so nothing else raises it either. **Majors still need
a periodic manual sweep.**

This is exactly the shape of the advisory this bench just closed —
a critical whose fix sat outside the declared range — so it is named
rather than left to be rediscovered. The obvious repair is an
`npm audit --audit-level=high` step in `ci.yml`, which is a NEW GATE
and outside this bench's enumerated file list; every gate this
workshop has added first proved itself against deliberate breakage,
and that is bench work with a spec. **Founder call, surfaced at the
gate.** Named in `.github/dependabot.yml`'s own header comment too,
so the file does not overstate what it guarantees.

## Left / idle

Nothing on this bench. Two things deliberately NOT done:
`npm audit fix --force` was never run, and no MAJOR version moved
(see the 0.x caveat below, which is a different thing and is
disclosed rather than waved past).

## The story

### The before and after, by command

```sh
npm audit          # BEFORE
# 16 vulnerabilities (1 low, 6 moderate, 8 high, 1 critical)

npm audit --json 2>/dev/null | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log(JSON.stringify(j.metadata.vulnerabilities));});"
# {"info":0,"low":1,"moderate":6,"high":8,"critical":1,"total":16}
```

The **critical** was `next` itself — a middleware/proxy bypass in
App Router applications using Turbopack — and npm named **16.3.4**
as the fix. Two of the eight highs, `postcss` and `sharp`, were
Next's own transitives and carried the same fix. npm labelled all
three "requires `--force`" for one reason only: 16.3.4 sat outside
the range `package.json` stated (`16.2.9`, pinned exactly). Raising
a declared version is not a forced fix — it is the ordinary one —
so the range was raised first and `--force` was never needed.

```sh
# 1 — raise the declared versions to the latest 16.3.x
npm view next versions --json                # 16.3.0 … 16.3.4
npm view eslint-config-next versions --json  # 16.3.0 … 16.3.4
#   next: 16.2.9 -> 16.3.4
#   eslint-config-next: 16.2.9 -> 16.3.4
npm install            # 12 vulnerabilities (1 low, 6 moderate, 5 high)

# 2 — the rest, no --force
npm audit fix          # added 4, changed 30, audited 630 packages
                       # found 0 vulnerabilities

npm audit              # AFTER
# found 0 vulnerabilities
npm audit --json 2>/dev/null | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const j=JSON.parse(s);console.log(JSON.stringify(j.metadata.vulnerabilities));console.log('advisory entries:',Object.keys(j.vulnerabilities).length);});"
# {"info":0,"low":0,"moderate":0,"high":0,"critical":0,"total":0}
# advisory entries: 0
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

### No major moved — and the first proof of that was wrong

The declared ranges:

```sh
git diff main -- package.json | grep -E '^[-+]\s+"'
```

```diff
-    "next": "16.2.9",
+    "next": "16.3.4",
-    "eslint-config-next": "16.2.9",
+    "eslint-config-next": "16.3.4",
```

Only those two lines. `eslint` stays `^9`, `vitest` `^4.1.8`,
`typescript` `^5`. But a range can hold still while the LOCK moves
underneath it, so the lock was compared package by package:

```sh
git show main:package-lock.json > /tmp/main-lock.json
node -e '
const fs=require("fs");
const a=JSON.parse(fs.readFileSync(process.argv[1],"utf8")).packages;
const b=JSON.parse(fs.readFileSync("package-lock.json","utf8")).packages;
// A BREAKING move under semver: the major changes; or, for 0.x, the minor does.
const brk=(x,y)=>{const p=String(x).split("."),q=String(y).split(".");
  return p[0]!==q[0] || (p[0]==="0" && p[1]!==q[1]);};
let n=0;
for(const k of Object.keys(b)){ if(!a[k]||!a[k].version||!b[k].version) continue;
  if(brk(a[k].version,b[k].version)){ console.log("BREAKING",k.replace("node_modules/",""),a[k].version,"->",b[k].version); n++; } }
console.log("breaking moves (major, or minor on 0.x):",n);
' /tmp/main-lock.json
```

**MAJOR MOVES: 0.** Installed after the sweep: eslint 9.39.4 ·
vitest 4.1.11 · typescript 5.9.3 · next 16.3.4 · react 19.2.4.
ESLint 10, Vitest 5 and TypeScript 7 are all published and all
declined here — each is a migration with a blast radius, which is
bench work with a spec and a review.

**BUT THE FIRST VERSION OF THIS CHECK COMPARED MAJORS ONLY, AND THE
CRITIC CAUGHT IT.** On a `0.x` package a MINOR bump is breaking by
convention, and this diff contains sixteen of them:

| Package | main | here |
|---|---|---|
| `sharp` | 0.34.5 | 0.35.4 |
| `@img/sharp-*` (14 platform binaries) | 0.34.5 | 0.35.4 |
| `@oxc-project/types` | 0.133.0 | 0.149.0 |

**Disclosed rather than waved past, and taken anyway, for a stated
reason:** the `sharp` move IS the fix for one of the eight high
advisories, it arrived with `next@16.3.4` as Next's own transitive
rather than by a `--force` that overrode a declared range, `sharp`
is an optional image-optimisation dependency this app does not call
directly, and `npm run build` renders both routes on the new tree.
`@oxc-project/types` is a type-only transitive of the lint stack.
The spec's out-of-scope names ESLint 10, Vitest 5 and TypeScript 7,
and all three held.

**The lesson is about the proof, not the packages:** "no major
moved" was ASSERTED with a fenced block that contained output and no
command, so it could not be re-run — which is the derivation law
failing in its quietest form. Both are repaired above: the command
is here verbatim, and it now knows what `0.x` means.

### The dependabot lane, and what it does not cover

`.github/dependabot.yml` is new: npm, `/`, **monthly**. Two groups,
not one — `all-npm` for version updates (minors and patches) and
`all-npm-security` for security updates. **The second group exists
because a group defaults to `applies-to: version-updates`**, so
without it every security PR would arrive ungrouped and outside
`open-pull-requests-limit`. The grouping is done by `groups`; the
limit is only the cap on how many version-update PRs stand open.
Sixteen separate PRs a month would be worse than the problem, and
this workshop's whole complaint at
[#355](https://github.com/wsher0901/roam/pull/355) is bookkeeping
PRs.

`version-update:semver-major` is ignored for every dependency — and
that ignore reaches security updates too, which is the gap recorded
under §Pending issues and named in the file's own header comment.

**And a new branch class needs a ritual that knows how to read it.**
`dependabot/*` branches would otherwise meet
[pickup](../../../../skills/pickup.md)'s claim check, which asks whether an
open branch is a live bench to adopt or a reclaimable one to
respawn — and would answer wrongly, because a dependabot branch is
neither. §3 now says so in one sentence: no memory, no claim, and
the ordinary gates (a non-author review, then the founder's word,
after green CI) rather than only the merge gate — the first draft
named the word alone, which a hurried reader could take as a review
carve-out.

### The one deviation: a D-number that is still on another branch

The spec was written citing `D-086` by anchor, and `check:links`
went red twice — correctly. **D-086 lives on `docs/product-first`,
this bench's sibling, and cannot be resolved from here until that
bench merges.** This is a live instance of the inbox line "A BOARD
CANNOT CITE A DECISION THAT IS STILL ON A BRANCH", which observed it
twice on 2026-08-05 and now has a third sighting — from a spec
rather than a board.

Repaired the way both earlier repaints chose: the window is NAMED in
words and LINKED AT ITS PR
([#355](https://github.com/wsher0901/roam/pull/355)) rather than at
an anchor `main` cannot resolve, with the reason stated in the spec
itself so a later reader does not "repair" it into a broken link.
The line stays open in [IDEAS](../../../../IDEAS.md) — the general carve-out
is a law edit, which the window forbids this bench from making.

### The critic round — eight findings, all repaired

The first invocation returned NO REVIEW: the reviewer subagent has
`Read`/`Grep`/`Glob` and no `Bash`, and the branch was not checked
out, so it refused to guess rather than fabricate a reading. It was
re-invoked against a materialized worktree. **That refusal was the
right call and is worth keeping:** a review that cannot read the
diff must say so, not produce plausible prose.

1. 🟡 **The major-ignore suppresses major-only SECURITY fixes, and
   CI has no `npm audit` step.** REAL. Not repaired by code — a CI
   gate is outside this bench's file list — but named in
   §Pending issues, in the file's header comment, and at the gate.
2. 🟡 **`groups` without `applies-to` covers version updates only**,
   so security PRs were ungrouped and uncapped while the comment
   claimed "ONE grouped PR per month". Repaired: a second group,
   `all-npm-security`.
3. 🟡 **The "proved rather than asserted" block contained no
   command, and the comparison was blind to `0.x`.** Repaired
   above; the re-run found sixteen 0.x minor moves, disclosed.
4. ⚪ The two `npm audit --json | node -e "…"` lines elided the
   command body, so the one machine-readable proof was not
   reproducible. Repaired — both are now verbatim.
5. ⚪ Grouping was attributed to `open-pull-requests-limit`.
   Repaired: `groups` groups, the limit caps.
6. ⚪ A block presented as literal `git diff` output was not
   literal — `-    "next": "16.2.9,"` had the comma inside the
   quotes. Repaired with the real output.
7. ⚪ [IDEAS](../../../../IDEAS.md) was mentioned three times unlinked while
   every other sibling-doc mention was woven. Repaired.
8. ⚪ The pickup sentence named only the merge gate, not
   no-solo-approval. Repaired.

Findings the critic checked and cleared: the dependabot schema
(every key real, and the two `update-types` vocabularies correctly
different — short under `groups`, long under `ignore`); the pickup
sentence's placement after the liveness rule rather than before it;
no contradiction with
[parallel-lanes](../../../../skills/parallel-lanes.md); the zero-moderates
report as honest rather than a technicality; and the unlinked
`D-086` as following documented precedent rather than breaching the
weave rule.

### Verification

Full CI mirror green on 16.3.4:

```sh
npm run check:links     # 7184 internal links, 0 broken
npm run check:ledger    # 139 history files ↔ 139 ledger lines
npm run check:memory    # 1 memory file, valid
npm run lint            # clean
npm run format:check    # all matched files use Prettier code style
npm test                # 2 files, 3 tests, passed (vitest 4.1.11)
npm run build           # ✓ compiled; routes / and /_not-found, both static
```

## Where to look

- [the spec](../../../specs/deps-sep.md) — the contract
- `package.json` · `package-lock.json` — the bump
- `.github/dependabot.yml` — the standing lane, and what it does not cover
- [pickup §3](../../../../skills/pickup.md#3--gather-git-outranks-the-board)
  — what a `dependabot/*` branch is
- [#356](https://github.com/wsher0901/roam/pull/356) — the PR
