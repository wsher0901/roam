---
type: memory
id: phase5-sweep
updated: 2026-07-11 · birth · home PC
---
# phase5-sweep — hardening + hygiene (final ops phase)

## Status
Bench ready — branch, this stub, and the draft PR are born; no work
started. The contract is the founder's phase-5 brief, carried in
full in the PR description.

## What this task is
The final phase of the ops thread: seven hardening workstreams in
one sweep. ① the gather step stops trusting stale refs (prune in
the session-start hook + [pickup](../skills/pickup.md) step 3);
② Dataview retires — the board's Shipped table goes static,
re-derived at every repaint; ③ a timed pickup-gather latency check
(record, don't tune); ④ the line-ending phantom gets a root-cause
verdict (renormalize only if it reproduces); ⑤ the close-lock — a
released session physically rejects input via a new
prompt-submit hook + a session-closed flag written as the leaving
rituals' last act; ⑥ the micro-PR carve-out sentence in
[LAWS](../LAWS.md) catches up to reality (pickup's stale-repaint
included; pickup stub gains the merge allowance); ⑦ the link
checker is promoted into `scripts/` + CI. Plus hygiene: the
[IDEAS](../IDEAS.md) header sheds retired GitHub Issues, a glyph
sweep, an orphan scan, and the retired-reference grep gates. Scope:
docs/, .claude/, .gitignore, scripts/, the existing CI workflow —
nothing else. No spec: the brief is the contract.

## Pending issues
None yet.

## Left / idle
Everything: ④ investigation → four ordered commits (1 prune +
close-lock · 2 Dataview retirement · 3 link-checker + CI · 4
truth-up + hygiene; renormalize as its own commit only if ④
demands) → the verification battery → ship to the gate, DO NOT
MERGE (founder approval follows the external Web-chat review).

## The story
Born minutes after phase 4
([home-encyclopedia](../history/home-encyclopedia.md)) merged, from
the same ops thread that shipped the
[recut](../history/foundation-roadmap-recut.md) and the
[engine swap](../history/engine-swap.md). Two of the sweep's items
close loops this very cockpit opened today: the stale-refs prune
gotcha logged in [IDEAS](../IDEAS.md) this morning, and the
line-ending phantoms that dogged the phase-4 merges.

## Where to look
The draft PR (contract + steps) · [IDEAS](../IDEAS.md) (the prune
line this task resolves) ·
[home-encyclopedia](../history/home-encyclopedia.md) (the CRLF
gotcha + checker story) · `.claude/hooks/` (the two existing hooks
the new one must match in style).
