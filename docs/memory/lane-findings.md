---
type: memory
id: lane-findings
updated: 2026-08-05 20:21 UTC · bench birth · work PC
---

# lane-findings — closing what the cold lane found

## Status

claimed — work PC control tower, 2026-08-05

Born on the founder's word folding three items into a findings
bench. Self-authored payload, so an external Web review is required
before the merge word
([no-solo-approval](../LAWS.md#workflow-non-negotiable)).

## What this task is

Three items from
[#322](https://github.com/wsher0901/roam/pull/322)'s flight: the
**git-identity gap** the cold lane found in itself, and the **two
review findings** the weld did not repair.

The contract, and the reasoning for choosing the hook over a
lane-worker prompt step:
[the spec](../record/specs/lane-findings.md).

## Pending issues

One design choice is made rather than asked, and stated where the
founder can override it: the identity fix goes in the SESSION-START
HOOK, not [LANE-WORKER.md](../LANE-WORKER.md). A box master needs a
manual re-save to take effect, so putting the fix for a silent
failure into a box would make the fix itself fail silently until
someone pasted it.

## Left / idle

All of it — plan steps 1–3 in
[the spec](../record/specs/lane-findings.md).

## The story

2026-08-05 20:21 UTC · bench birth · work PC — born from a cold
lane's findings about itself.

**THE IDENTITY GAP IS THE ONE WORTH THE BENCH, and its shape is more
interesting than its fix.** A cloud lane authored four commits as
`Claude <noreply@anthropic.com>` — the tell
[seat-invariance](../LAWS.md#parallel-lanes--cloud) forbids — and
caught itself ONLY because the setup procedure happened to be one of
its eight story subjects. It complied by luck.

The step lives in [machine-setup](../skills/machine-setup.md), which
is the one file a cloud lane has no reason to open: a lane's orders
route it to LAWS, parallel-lanes, its spec and its memory, and A
LANE DOES NOT THINK OF ITSELF AS SETTING UP A MACHINE. Verified at
birth — [LANE-WORKER.md](../LANE-WORKER.md) contains no mention of
identity at all.

**AND THE FAILURE IS CLEAN, WHICH IS WHY IT PERSISTS.** The push
succeeds, CI passes, every gate goes green; only the author name
differs. Its neighbour trap — using the founder's real address —
fails LOUDLY, because GitHub rejects the push outright. The lane put
it best and the line is worth keeping: **the caught error is the
loud one; the persistent error is the clean one.** A workshop that
only fixes what breaks visibly will keep this class forever.

**WHY THE HOOK AND NOT THE LANE-WORKER PROMPT.** The prompt step was
the obvious answer and it is the wrong one:
[LANE-WORKER.md](../LANE-WORKER.md) is a BOX MASTER whose saved
prompt needs a manual re-save to take effect, so the fix for a
silent failure would itself fail silently until a paste happened.
The hook is in the repo, reaches every seat that clones, needs no
paste, and fixes cockpits and background agents too — the gap was
never lane-specific, it was CLOUD-SEAT-specific.

**THE OTHER TWO ARE SMALL AND BOTH ARE ABOUT KEEPING WHAT THE RECORD
ALREADY KNEW.** "SETTLED vs ADVANCED" forks ship §7's case 2 with no
operational test — the fourth instance of a fork whose branches
share an entry condition with an undefined tiebreaker. And the
vault-lens cell called its state "unverifiable" while the same file
carries the founder's dated 2026-07-28 word that it WAS applied at
the work PC: underivable from git is not the same as unverifiable,
and the correction quietly threw away an attestation.

## Where to look

- [the spec](../record/specs/lane-findings.md) — the three items and
  the hook-vs-prompt reasoning.
- [the lane's story](../record/history/workshop/definition/chronicle-shelf-1.md)
  — where all three findings came from, including the lane's own
  honest self-report.
- [machine-setup](../skills/machine-setup.md) — where the identity
  step lives today, and the file a lane never opens.
- [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) — the
  case-2 fork needing a test.
- [the census](../chronicle/INDEX.md) — the vault-lens cell and the
  founder-input-owed item 8 it contradicts.
