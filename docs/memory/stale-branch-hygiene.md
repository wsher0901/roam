---
type: memory
id: stale-branch-hygiene
updated: 2026-07-13 · ship (to the gate) · work PC
---
# stale-branch-hygiene — Stale-branch hygiene: gone-guard on the safety net; auto-delete welded-elsewhere locals; pickup restyle

## Status
Complete, awaiting merge — held at THE GATE by the brief's explicit
"DO NOT MERGE; founder approval follows external review". All
verification green: 1167 links / 0 broken, node --check clean on
both hooks, smoke run exit 0, exactly the six named files in the
diff, lint + tests + format clean. Both hook patches, the pickup
payload, and the
[D-031](../DECISIONS.md#d-031--2026-07--stale-branch-hygiene--gone-guard-on-the-session-end-net-welded-elsewhere-locals-auto-removed-at-session-start)
entry landed in one commit.

Sources:
[spec](../specs/stale-branch-hygiene.md)

## What this task is
Close the zombie-branch hole the engine-recut incident exposed: a
weld deletes the remote branch, the other seat's local copy
survives, and its session-end safety net faithfully pushes the
corpse back to origin. Three moves: session-end gains a gone-guard
(tracking configured + upstream gone = welded elsewhere → never
push); session-start auto-deletes welded-elsewhere locals after its
prune (skipping main, the current branch, and worktree-checked-out
branches; tips stay reflog-recoverable); pickup relays what the
hooks report, gains the dead-worktree check, and adopts the writing
laws.

## Pending issues
none

## Left / idle
Only the weld (on approval): slug-keyed history move + spec
finalize, then squash-merge (workshop task — no ROADMAP tick).

## The story
Born from a founder-delivered workshop brief (Web chat): both hook
patches and the pickup payload verbatim; the founder chose
auto-delete over warn-and-skip. The zombie mechanism was verified
against the actual hook code before patching: the old session-end
fall-through (push -u origin <branch>) recreates a pruned-away
remote branch at its stale tip — exactly what resurrected
docs/engine-recut.

Execution notes, in order:
- ONE deviation, load-bearing: the brief's session-start patch
  calls shFile(), but session-start.mjs only defined sh() — landing
  the block verbatim alone would have thrown a ReferenceError on
  every session launch. The shFile helper (execFileSync + argument
  array, injection-safe) was copied verbatim from session-end.mjs,
  with its comment, plus the execFileSync import. The patch block
  itself is byte-exact as briefed.
- Both hooks pass node --check, and the patched session-start was
  smoke-run end-to-end on the branch: exit 0, no runtime error,
  gone-locals loop a clean no-op (the only locals here are main and
  the current branch — both excluded by construction).
- The gone-guard's timing was sanity-checked: session-start's every
  launch prune is what marks upstreams gone, so by any session-end
  the marker is fresh; the guard closes exactly the observed hole.

## Where to look
- decision:
  [D-031](../DECISIONS.md#d-031--2026-07--stale-branch-hygiene--gone-guard-on-the-session-end-net-welded-elsewhere-locals-auto-removed-at-session-start)

## Where to look
- spec: [../specs/stale-branch-hygiene.md](../specs/stale-branch-hygiene.md)
- the two hooks: `.claude/hooks/session-end.mjs` ·
  `.claude/hooks/session-start.mjs`
- the workshop brief (Web chat) — patches + payload
- PR: opens at birth (draft)
