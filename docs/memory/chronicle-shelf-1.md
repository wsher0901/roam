---
type: memory
id: chronicle-shelf-1
updated: 2026-08-05 19:52 UTC · completion rewrite · cloud lane
---

# chronicle-shelf-1 — the calibration that re-rules the rest

## Status

complete, awaiting merge — 2026-08-05

All four plan steps done, flown from a genuinely cold cloud seat.
Eight slice-D stories written, the ship §7 adjustment installed
first, the INDEX repainted, and the measurement taken. **The
calibration's headline is that the pilot's inference DID NOT HOLD**
— see §The measurement.

This lane authored the payload, so
[no-solo-approval](../LAWS.md#workflow-non-negotiable) applies as it
does to any self-authored diff: an external Web review before the
founder's word.

## What this task is

The first shelf bench under
[D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes):
**Shelf III slice D — the machinery & gates**, eight stories, and
the CALIBRATION whose measured cost re-rules the remaining shelves
before any of them fire.

It carries one payload edit besides the stories:
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s cases
2 and 3, because
[D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
ruling 2 names this bench as its vehicle.

The contract, the five-slice split, and why slice D goes first:
[the spec](../record/specs/chronicle-shelf-1.md).

## Pending issues

**None blocking.** Three things are owed by the WORKSHOP rather than
by this bench, listed so they cannot go missing:

1. **The board still carries the settle-weld question as Needs-you
   #1** — asking the founder to rule the fork that
   [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
   ruling 2 has already ruled and this bench has now implemented.
   A lane may never write [DASHBOARD](../DASHBOARD.md), so it is
   flagged here for the next baton-holder repaint.
2. **The cloud-seat identity step has no mechanism** — see
   §Deviations. A finding, not a fix; the fix is a founder call.
3. **The re-ruling of the remaining shelves** is the founder's, on
   the number below. The recommendation is in §The measurement.

## Left / idle

Nothing on this bench. All four plan steps are complete and the
Done-means boxes are verified in §Done-means below.

## The story

2026-08-05 · flown from a cold cloud seat, claimed 19:35 UTC and
licensed by the airborne ack at 19:36 UTC. The narrative below is
organized by finding rather than chronologically, because the
bench's product IS its findings and this memory is the report.

### The measurement — what a shelf slice actually costs from a cold seat

**THE HEADLINE: the pilot's central inference did not survive its
first real test.** The pilot inferred that story cost is dominated
by SOURCE-GATHERING. Measured from a cold seat, **writing dominated,
roughly 60/40.**

Wall-clock, from the airborne ack (19:36:39 UTC) to stories +
INDEX complete (19:51:31 UTC): **14 min 52 s** for the ship §7
adjustment plus eight stories plus the INDEX repaint.

| Step | Gather | Write | Total |
|---|---|---|---|
| ship §7 (plan step 1) | ~60 s | ~42 s | 1 m 42 s |
| common index read (served all 8) | 19 s | — | 19 s |
| D1 · link integrity | 22 s | 52 s | 1 m 14 s |
| D2 · CI is the arbiter | 6 s | 51 s | 57 s |
| D3 · the session hooks | 21 s (shared with D4) | 53 s | — |
| D4 · session lifecycle | ~10 s | 52 s | — |
| D5 · the vault lens | 33 s (shared with D6) | 48 s | — |
| D6 · the per-machine seat | 29 s | 55 s | — |
| D7 · the guardrail audit | 37 s (shared with D8) | 56 s | — |
| D8 · the docs currency audit | ~25 s | ~59 s | 1 m 24 s |

**Totals: gathering ≈ 4 min 20 s · writing ≈ 7 min 30 s**, the
balance in commits, pushes and verification. **Eight stories at
≈ 1 min 50 s each all-in.**

#### Why gathering was cheap — and why that is NOT a general result

The honest reading is that **gathering was cheap because the record
is good, not because gathering is inherently cheap.** Three specific
properties did the work, and each is a property of THIS slice:

1. **The ledger is a PR→file index.** One grep of
   [the ledger](../record/history/README.md#the-ledger) for the span
   PR numbers returned the history file for nearly every item. That
   single read is most of what "gathering" would otherwise mean.
2. **Every slice-D item had a dedicated history file.** Eight items,
   eight pre-digested benches. Nothing had to be reconstructed from
   raw commits.
3. **The slice shared its sources, exactly as
   [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
   ruling 1 predicted.**
   [D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter) served
   D1 and D2;
   [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
   served D3 and D4; [#91](https://github.com/wsher0901/roam/pull/91)
   and [machine-setup](../skills/machine-setup.md) served D5 and D6.
   **D2's gather cost 6 seconds because D1 had already opened its
   sources.**

**So the two D-077 rulings are affected in opposite directions, and
that is the finding.**

- **RULING 1 (shelf-sized benches) is CONFIRMED, and by a mechanism
  the pilot only guessed at.** Source-sharing within a slice is
  real and large: three of eight stories cost almost nothing to
  gather because a sibling had just paid for it. A cross-cutting
  dozen would have paid those costs separately.
- **RULING 2 (the settling weld writes) SURVIVES WITH ITS MARGIN
  CORRECTED.** Its argument — the settling seat has already
  gathered, so deferring "pays it twice" — assumed gathering is the
  dominant cost. It is not; it is ~38%. The settling seat still
  saves that 38% and still holds context a cold seat lacks, so the
  ruling holds directionally. But **"pays it twice" is too strong:
  deferring re-pays about a third, not the whole.** The step as
  written in ship §7 does not depend on the size of that margin, so
  no edit is owed — only this correction to the reasoning.

#### The recommendation for the remaining 55

**Fire the remaining shelves as shelf-sized benches, and DO NOT
scale this number to Shelf IV.**

- **Shelf III's four remaining slices** (A 6 · B 7 · C 7 · E 4 =
  24 rows) are the same material with the same properties: decision
  entries, history files, a ledger that indexes them. This bench's
  ≈ 1 min 50 s per story is a fair planning figure for them.
- **Shelves I (12) and II (13)** are lane- and away-surface items
  whose sources are decisions, probes and flight logs — also
  well-recorded. Expect the same order, with a caveat: several have
  MULTIPLE probe logs that disagree, which the pilot already met in
  the wake-lock story, and reconciling disagreeing sources is a
  writing cost, not a gathering one.
- **Shelf IV (9 Roam product pieces) is the outlier and this number
  does not apply.** The pilot flagged it and this bench confirms the
  reasoning without testing it: its sources are code and specs
  rather than decisions, so there is no ledger line to grep and no
  pre-digested bench per item. **Shelf IV should be its own
  calibration**, not planned against this figure.
- **Slice E stays last**, as the spec ordered — its four items are
  the rituals this workshop rewrites most.

#### What the falsifier would have looked like

Stated so the number is checkable rather than merely reported: had
gathering dominated, D2 would not have cost 6 seconds after D1, and
the items with no dedicated history file would have blown the
average. Neither happened. The one measurement this bench CANNOT
make is the counterfactual — what these eight would have cost a
seat that had been living in them — so the pilot's floor and this
bench's number are not two points on one line.

### The format on EVENT stories — the bend, and it is a real one

The pilot named "no event story has been written" as one of its two
coverage gaps. D7 and D8 close it, and **the format did have to
bend.** The bend is stated in both files so the next bench inherits
it rather than re-deriving it:

- `## What it is` → **`## What it was`.** An event is past tense by
  nature; the present tense fought the content in every draft.
- `## What changed, in order` → **`## What happened, in order`**,
  carrying the event's own passes plus anything that has since
  disturbed its findings. **Incorporation semantics are UNCHANGED** —
  a later weld adds a bullet and rewrites the ending, exactly as for
  a system piece — and both files say so in an italic note under the
  heading, because a reader meeting a renamed spine needs to know
  the ending rule still applies.
- **Both earned a new `## What it found` section.** An audit's
  product IS its findings; a chronology buries them. This is the
  same move the pilot made when the canary story earned its own
  named section, so the format already had the precedent for
  "a story may earn a section".

**One structural difference worth recording for whoever writes the
next event story:** a system piece's ending describes a CURRENT
STATE, which stays true until something changes it. An event's
ending describes a CLOSED VERDICT plus that verdict's SHELF LIFE —
the event cannot reopen, but what it established keeps being
falsified by later work. Both event stories hit this immediately,
which is why both endings had to be re-derived rather than copied.

### Deviations — recorded, not rewritten out

**THIS LANE AUTHORED ITS FIRST THREE COMMITS UNDER THE WRONG GIT
IDENTITY.** The canary and the first two story commits were authored
as `Claude <noreply@anthropic.com>` — the exact tell
[seat-invariance](../LAWS.md#parallel-lanes--cloud) forbids, and the
thing [machine-setup](../skills/machine-setup.md)'s cloud-seat
section exists to prevent. It was caught while gathering sources FOR
D6, whose subject is that procedure, and the repo-local identity was
set at 19:45:36 UTC. Commits from D6 onward carry
`Wonseuk Her <140655542+wsher0901@users.noreply.github.com>`. History
was not rewritten: a force-push is a destructive act a lane may not
take unasked, and the deviation is more useful on the record than
erased from it.

**The finding underneath it is the part worth keeping.** The
identity step is documented in the one file a cloud lane has no
particular reason to open — a lane's orders route it to
[LAWS](../LAWS.md),
[parallel-lanes](../skills/parallel-lanes.md), its spec and its
memory, and a lane does not think of itself as setting up a machine.
**This bench complied only because the procedure happened to be one
of its eight assigned items, which is luck, not a mechanism.** And
the failure is silent: nothing rejects the wrong identity, the push
succeeds, CI passes, and the only symptom is an author name that
differs from every other commit in the history. Its neighbouring
trap — using the founder's real address — fails LOUDLY, because
GitHub refuses the push outright. The caught error is the loud one;
the persistent error is the clean one. Written into
[the machine-setup story](../chronicle/machine-setup.md); the fix
(a lane-worker prompt step, or a hook) is a founder call, not a
lane's.

### Endings that moved — three census cells were wrong or overstated

Verified rather than copied, per the verification law. Each is
recorded in its story and reflected in its INDEX cell:

- **The guardrail audit's promoted block MOVED.**
  [D-053](../record/DECISIONS.md#d-053--guardrail-audit) promoted
  the verification loop into LAWS; it now lives at
  [ship §1](../skills/ship.md#1--preflight), with LAWS pointing
  there as its one home. The improvement survived, its address did
  not. Both sharpened stub descriptions are still verbatim.
- **The currency audit's principle was NOT promoted.** "Annotation
  beats deletion" appears in exactly two places — that bench's own
  spec and its own history file. **No law, no skill.** A sibling
  bench used the convention about an hour later the same day
  ([#207](https://github.com/wsher0901/roam/pull/207)), which shows
  the practice travelled; a same-sitting sibling is not durable
  adoption. The census cell said "promoted"; the accurate word is
  *demonstrated*, and the cell is corrected.
- **The vault lens's per-seat state is UNVERIFIABLE, not owed.** The
  census recorded a home-PC re-seed still owed. The board no longer
  carries it and no record confirms it was done — and
  `docs/.obsidian/` is gitignored, so **no seat's application of the
  lens is visible from origin, ever.** The verification law forbids
  reading the board's silence as completion, so the story records
  the question as open and names the structural reason it cannot be
  closed from the repository.

### Done-means — verified

- [x] ship §7's cases 2 and 3 implement
      [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
      ruling 2; the debt form is explicitly scoped to the backlog
      and named as not-an-option for a weld being performed.
- [x] Eight story files exist for slice D in the pilot's format,
      each ending DERIVED at write time (the link count by running
      the checker; the two audit endings by re-checking their
      artifacts; the vault lens by checking `.gitignore` and the
      board).
- [x] No story cites another story's prose — every Sources block is
      down-links only; `record/` untouched (verified: this branch's
      diff touches no file under `docs/record/` except its own spec
      at ship).
- [x] Both EVENT stories written, and the format bend named — in
      both files and in §The format above.
- [x] The measurement separates GATHERING from WRITING and states
      that the pilot's inference did NOT hold, with the reason and
      the falsifier.
- [x] The INDEX marks exactly these eight written — 11 written rows,
      11 story files, 66 total, 55 proposals, all derived by count.
- [x] A re-ruling recommendation for the remaining shelves is above,
      including the one shelf this number must NOT be scaled to.
- [x] The verification loop is green and the PUSHED head's Actions
      run is green (recorded at the ready-flip).

## Where to look

- [the spec](../record/specs/chronicle-shelf-1.md) — the contract
  and the five-way split of Shelf III.
- [D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
  — both rulings; ruling 2's margin is corrected above.
- [the pilot's report](../record/history/workshop/definition/chronicle-pilot.md)
  — the format, the confound this bench escaped, and the inference
  this bench tested.
- [the census](../chronicle/INDEX.md) — 66 rows, 11 written.
- The eight stories: [link integrity](../chronicle/link-integrity.md)
  · [CI is the arbiter](../chronicle/ci-is-the-arbiter.md) ·
  [the session hooks](../chronicle/session-hooks.md) ·
  [session lifecycle](../chronicle/session-lifecycle.md) ·
  [the vault lens](../chronicle/vault-lens.md) ·
  [the per-machine seat](../chronicle/machine-setup.md) ·
  [the guardrail audit](../chronicle/guardrail-audit.md) ·
  [the docs currency audit](../chronicle/currency-audit.md).
