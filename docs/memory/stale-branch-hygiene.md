---
type: memory
id: stale-branch-hygiene
updated: 2026-07-13 · bench birth · work PC
---
# stale-branch-hygiene — Stale-branch hygiene: gone-guard on the safety net; auto-delete welded-elsewhere locals; pickup restyle

## Status
Claimed by the cockpit (work PC) — bench birth in progress: branch,
this stub, and the spec are the first commits; the draft PR opens
next. Hook patches follow.

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
Everything — birth just happened.

## The story
Born from a founder-delivered workshop brief (Web chat): both hook
patches and the pickup payload verbatim; the founder chose
auto-delete over warn-and-skip. The zombie mechanism was verified
against the actual hook code before patching: the old session-end
fall-through (push -u origin <branch>) recreates a pruned-away
remote branch at its stale tip — exactly what resurrected
docs/engine-recut.

## Where to look
- spec: [../specs/stale-branch-hygiene.md](../specs/stale-branch-hygiene.md)
- the two hooks: `.claude/hooks/session-end.mjs` ·
  `.claude/hooks/session-start.mjs`
- the workshop brief (Web chat) — patches + payload
- PR: opens at birth (draft)
