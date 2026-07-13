---
type: memory
id: laws-polish
updated: 2026-07-13 · task birth · home PC
---
# laws-polish — LAWS polish: glossed lane law, provenance to consolidations, ship syncs with main

## Status
Bench born and claimed by the cockpit (home PC seat). Spec + this
stub are the first commits; the draft PR goes up immediately after.
No work landed yet.

## What this task is
A docs-only polish of the constitution, fully specified in the
Web-chat workshop (slug laws-polish). Three moves: [LAWS](../LAWS.md)
drops its four inline D-citations and gains one-line whys instead
(provenance lives in the consolidations, which the header now names);
the pacing law — the one LAWS rule not yet consolidated — lands in
[PROJECT-POLICY §Workshop choices](../PROJECT-POLICY.md#workshop-choices)
with its [D-009](../DECISIONS.md#d-009--2026-06--pacing-law-finish-first-flexible-cap)
provenance; and [ship](../skills/ship.md)'s Preflight gains a
sync-with-main step (merge current origin/main, never rebase) so
what gets tested is exactly what main will contain after the weld.
Lane-law glosses only — no semantics change is in scope.

## Pending issues
none

## Left / idle
Everything: the decide entry (next D-number computed from
[DECISIONS](../DECISIONS.md)' tail = D-027) + the full ripple in one
commit, then verification, then ship to THE GATE (no merge — the
founder's approval follows external review).

## The story
Born from the laws-polish Web-chat workshop: the founder arrived
with edits 1–10 verbatim and the mechanism pre-decided (one
D-number, entry + ripple in the same commit). Claim check found zero
open branches and zero open PRs — the cockpit takes the lane
directly. Note for the shipper: this task rewrites ship's own
Preflight, so the ship that closes it must already follow the new
procedure — sync with origin/main before gating.

## Where to look
- spec: [../specs/laws-polish.md](../specs/laws-polish.md)
- the laws-polish workshop chat (Web) — where edits 1–10 were cut
- target files: [LAWS](../LAWS.md) ·
  [PROJECT-POLICY](../PROJECT-POLICY.md) · [ship](../skills/ship.md) ·
  [HOME](../HOME.md) · [DECISIONS](../DECISIONS.md)
- PR: opens as draft at birth (number lands here at first rewrite)
