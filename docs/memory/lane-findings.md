---
type: memory
id: lane-findings
updated: 2026-08-06 13:15 UTC · payload complete · work PC
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

Nothing — all three plan steps are done. What remains is the closing
sequence: the pre-gate critic, and the external Web review that
[no-solo-approval](../LAWS.md#workflow-non-negotiable) requires of a
self-authored diff.

## The story

2026-08-06 13:15 UTC · ALL THREE CLOSED, AND THE HOOK WAS PROVED
RATHER THAN ASSERTED · work PC

**THE HOOK STEP, AND THE NEAR-MISS IT HAD TO SURVIVE.**
`.claude/hooks/session-start.mjs` now checks the effective git
identity and, when it is unset or the harness default, sets a
REPO-LOCAL one derived from `git log -1 origin/main` — the recipe
[machine-setup](../skills/machine-setup.md) already prescribes, so
no literal is hardcoded and no second home is created. It runs after
the fetch, so origin/main is fresh; it never blocks; it reports what
it did.

**IT WAS PROVED ON A REAL SEAT, three branches at once**, because
the Done-means asked for evidence rather than a claim:

| probe | fires? | why it matters |
|---|---|---|
| this desk, `…@users.noreply.github.com` | **no** | correctly skipped — a live seat is not touched |
| `noreply@anthropic.com` | **yes** | the harness default, the case that exists |
| the founder's GitHub noreply | **no** | THE NEAR-MISS — both contain "noreply", and a sloppier test would have rewritten a working desk's identity |

The derivation returned `Wonseuk Her <…@users.noreply.github.com>`
and is usable.

**ONE THING THE PROOF SURFACED that reads like a defect and is not.**
This desk's configured name is `Wonseuk`, and that string appears in
`origin/main`'s history ZERO times — main carries `Wonseuk Her` 322
times. Squash-merge rewrites the author to the GitHub account name,
so local commits never reach main under their local name. The
derivation therefore returns THE SQUASH IDENTITY, which is exactly
what main carries and exactly what a lane's pre-merge commits should
match. Nothing is inconsistent; it is worth writing down because the
opposite conclusion is the obvious one.

**FINDING 2 — the settled/advanced fork now has a one-read test.**
After this weld, is any work on the item still KNOWN to be owed — an
open bench, a Needs-you line, an inbox line, an unticked Done-means
box, a "still owed" in the record? Yes → ADVANCED, no → SETTLED. AND
IT NAMES ITS DEFAULT AND WHY: when you cannot tell, treat it as
ADVANCED, because the costs are asymmetric — a wrong ADVANCE leaves
a cell someone rewrites later, a wrong SETTLE writes a story onto a
moving target and has to incorporate it anyway.

**FINDING 3 — the attestation is back, and the story needed the same
repair as the cell.** The census cell called the vault lens's state
"UNVERIFIABLE"; the review's point was that underivable-from-git is
narrower than unverifiable, because the founder's dated 2026-07-28
word IS a record and this same file carries it. Fixed. **Then the
story turned out to carry the identical overstatement in its own
ENDING** — "permanently unverifiable as a state" — while its body
had the facts right all along. Narrowed too: one seat attested, one
open. A repair that fixed the index and left the story would have
left the wrong claim in the place the ending rule says later welds
rewrite.

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
