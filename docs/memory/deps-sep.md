---
type: memory
id: deps-sep
updated: 2026-09-10 · birth · work PC
---

# deps-sep — the advisory sweep and the standing lane

## Status

bench ready — 2026-09-10. Born bench-first at the work PC control
tower from freshly pulled main (`08e17ab`), as the parallel slot to
`product-first` under the pacing law. The two benches share no file.

## What this task is

Close the standing npm advisories — 16 at birth, 1 of them critical
— by bumping Next to the latest 16.3.x and running `npm audit fix`
without `--force`, then add a dependabot lane so the next round is a
monthly grouped PR rather than a bench. Contract:
[the spec](../record/specs/deps-sep.md).

## Pending issues

none yet.

## Left / idle

nothing yet.

## The story

Born 2026-09-10. The before-reading was taken by command before any
package was touched, so the after-reading has something honest to be
compared against.

## Where to look

- [the spec](../record/specs/deps-sep.md) — the contract
- `package.json` · `package-lock.json` · `.github/dependabot.yml`
- the draft PR — the public window
