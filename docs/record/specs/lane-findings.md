---
type: spec
id: lane-findings
title: The findings bench — the identity gap, and two review repairs
status: open
stage: workshop
branch: fix/lane-findings
pr: —
opened: 2026-08-05
shipped: —
---

# lane-findings — closing what the cold lane found

**Links:** [the lane's story](../history/workshop/definition/chronicle-shelf-1.md)
· [D-077](../DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
· [ship §7](../../skills/ship.md#7--on-approval--the-atomic-weld) ·
[machine-setup](../../skills/machine-setup.md) ·
[the census](../../chronicle/INDEX.md)

## Goal

Close the three items the founder folded into a findings bench after
[#322](https://github.com/wsher0901/roam/pull/322): the **git-identity
gap** the cold lane found in itself, and **two review findings** the
weld did not repair.

The third review finding — the census contradicting its own count —
was already repaired BY the weld, because ship §7's synthesis step
required that row updated and writing it correctly meant writing an
accurate count. Nothing is owed for it.

## The identity gap, and why the fix is a HOOK

**What happened.** The cold lane of
[#322](https://github.com/wsher0901/roam/pull/322) authored four
commits — its canary, the ship §7 edit, and two story commits — as
`Claude <noreply@anthropic.com>`, the exact tell
[seat-invariance](../../LAWS.md#parallel-lanes--cloud) forbids. It
caught itself only because the procedure happened to be one of its
own eight story subjects, fixed it at 19:45 UTC, and refused to
force-push the history — correctly, since that is not a lane's call
unasked.

**Why it happened, and this is the part worth fixing.** The step
lives in [machine-setup](../../skills/machine-setup.md), which is
**the one file a cloud lane has no reason to open.** A lane's orders
route it to [LAWS](../../LAWS.md),
[parallel-lanes](../../skills/parallel-lanes.md), its spec and its
memory. A lane does not think of itself as setting up a machine.
Verified: `docs/LANE-WORKER.md` contains no mention of identity at
all.

**And it fails SILENTLY.** The push succeeds, CI passes, every gate
is green; only the author name differs. Its neighbour trap — using
the founder's real address — fails loudly, because GitHub rejects
the push outright. **The caught error is the loud one; the
persistent error is the clean one.**

### The choice, made rather than deferred

Two vehicles were available and this bench takes the hook:

- **A lane-worker prompt step** — add it to
  [LANE-WORKER.md](../../LANE-WORKER.md). REJECTED as the primary
  fix: that file is a BOX MASTER whose saved prompt needs a manual
  re-save to take effect, so the fix for a silent failure would
  itself fail silently until a paste happened. Fixing
  silence with silence.
- **THE SESSION-START HOOK** — `.claude/hooks/session-start.mjs`,
  which is IN THE REPO and therefore reaches every seat that clones,
  cloud or desk, with no paste and nothing to remember. TAKEN.

The hook also fixes it for cockpits and background agents, not just
lane workers — the gap was never lane-specific, it was
cloud-seat-specific.

**IF THE FOUNDER PREFERS THE PROMPT STEP**, say so at the gate; the
reasoning above is why this bench chose otherwise rather than
asking.

## Out of scope

- **Rewriting the four mis-authored commits.** They are on main
  now; a force-push is destructive and buys nothing the record does
  not already carry.
- **The hook's OTHER known gap** — that it never syncs a cloud seat,
  because it pulls only on `main` and a cloud seat is born on a
  `claude/*` branch. Separately filed, same file, different fix, and
  folding it in would make this bench two benches.
- **The remaining shelf benches.** The 55 await their re-ruling on
  the calibration number.

## Plan

### 1 · The hook sets a cloud seat's identity

`.claude/hooks/session-start.mjs` gains a step: when the repo-local
git identity is unset or is the harness default, set it repo-local
from the value the history itself carries —
`git log -1 --format='%an <%ae>' origin/main` — which is the
derivation [machine-setup](../../skills/machine-setup.md) already
prescribes, so no literal is hardcoded and no second home is
created.

IT MUST NEVER BLOCK OR FAIL A SESSION. The hook's own contract at
its head says every step degrades gracefully and it always exits 0;
this step obeys that, and REPORTS what it did in the hook's output
so a seat can see it happened.

### 2 · Finding 2 — give "SETTLED vs ADVANCED" an operational test

[ship §7](../../skills/ship.md#7--on-approval--the-atomic-weld)'s
case 2 forks on it and nothing defines it —
[D-059](../DECISIONS.md#d-059--the-chronicle-layer) offers only
"settled in ANY format" and "retirement is a settlement". This is
the FOURTH instance of a fork whose branches share an entry
condition with the tiebreaker undefined. Give it a test a seat can
apply in one read.

### 3 · Finding 3 — the vault-lens cell keeps the founder's word

The cell reads "state UNVERIFIABLE … confirmed by no record either
way", while the same [INDEX](../../chronicle/INDEX.md)'s *Founder
input owed* item 8 records, dated 2026-07-28: "applied at the work
PC the same day: still owed at the home PC." **Underivable from git
is not the same as unverifiable.** Correct the cell to keep the
attestation and scope the open part to the home PC. The story file
gets the same treatment, since it is the row's home.

## Done means

- [ ] The hook sets a repo-local identity when it is unset or the
      harness default, DERIVES the value rather than hardcoding it,
      never blocks, always exits 0, and says what it did.
- [ ] The hook change is proved on a real seat, not asserted — the
      evidence recorded in the memory.
- [ ] `LANE-WORKER.md` is NOT the vehicle, and the spec says why.
- [ ] "SETTLED vs ADVANCED" carries a test a seat can apply without
      judgment calls, and the fourth-instance pattern is named where
      it will be read.
- [ ] The vault-lens cell and its story keep the founder's dated
      attestation and scope the open state to the home PC.
- [ ] The verification loop is green and the PUSHED head's Actions
      run is green.

## Notes for whoever resumes this bench

The identity fix is the load-bearing one and it is small. Resist
widening it into the hook's sync gap — that is filed, adjacent, and
a different fix.
