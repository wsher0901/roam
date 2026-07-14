---
type: history
slug: design-kickoff-refresh
shipped: 2026-07-13
pr: 97
---
# design-kickoff-refresh — DESIGN-KICKOFF refresh: June-2026 Claude Design capabilities

## Status
Shipped — merged as
[PR #97](https://github.com/wsher0901/roam/pull/97) on the founder's
word after the external review. All verification green: 1145 links /
0 broken, "Labs flakiness" grep 0, snapshot law present, exactly the
three named files in the diff vs main, lint + tests + format clean.
No deviations.

## What this task is
Refresh the Design rule-carrier —
[DESIGN-KICKOFF](../../../DESIGN-KICKOFF.md) — to Claude Design as it
exists after the 2026-06-17 overhaul: an export guard in the
governance block (Vercel/Canva/PDF destinations forbidden — the
repo is the only path to the product), canvas-first editing and
feed-context rules, real /design-sync mechanics with the snapshot
law, and corrected usage-pool wording. Byte-exact payload from the
founder's workshop brief.

## Pending issues
none

## Left / idle
Nothing — the weld that landed this file was the last act
(slug-keyed, no [ROADMAP](../../../ROADMAP.md) tick; spec finalized in
place at
[../specs/design-kickoff-refresh.md](../../../specs/design-kickoff-refresh.md)).

## The story
Born from a founder-delivered workshop brief (Web chat), payload
verbatim. Mechanism is task-local — NO D-number: the kickoff is an
ops file per [HOME](../../../HOME.md)'s writer column, and the export
guard only makes explicit what the Claude-Design no-write law in
[LAWS](../../../LAWS.md#knowledge--tracking) already implies.

Provenance, per the brief: product facts verified 2026-07-13
against support.claude.com ("Get started with Claude Design") and
the 2026-06-17 update coverage. The load-bearing new fact is the
SNAPSHOT semantics of /design-sync: a design-system import is a
point-in-time copy, not a live link — it must be re-imported after
any token or component change. The old "Labs flakiness" framing and
the separate-usage-allowance wording are gone from the product and
leave the kickoff with this refresh.

## Where to look
- spec:
  [../specs/design-kickoff-refresh.md](../../../specs/design-kickoff-refresh.md)
- the file: [../DESIGN-KICKOFF.md](../../../DESIGN-KICKOFF.md)
- the workshop brief (Web chat) — payload + verification list
- PR: [#97](https://github.com/wsher0901/roam/pull/97)
  (squash-merged 2026-07-13)
