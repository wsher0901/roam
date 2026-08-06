---
type: memory
id: lane-findings
updated: 2026-08-06 13:55 UTC · external review round 1 · work PC
---

# lane-findings — closing what the cold lane found

## Status

complete, awaiting merge — 2026-08-06

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

2026-08-06 13:55 UTC · THE EXTERNAL REVIEW — ONE FINDING, AND IT
OVERTURNED MY OWN CORRECTION · work PC

**THE FINDING.** The vault-lens cell I had just "corrected" claimed
the record after 2026-07-28 held nothing on the home PC and that
"only speech can close it". FALSE. Commit `937d5ec`
([#252](https://github.com/wsher0901/roam/pull/252), 2026-07-30,
"micro repaint — three founder confirmations") removed the standing
Needs-you act and recorded the founder's words: **"the vault lens
applied at the HOME PC (every seat now done)"**. Verified before
repairing — the commit removes the item and writes the confirmation
in the same diff. **Speech had already closed it, and it was
recorded.**

**SO THE STATE WAS CLOSED A WEEK BEFORE ANYONE WROTE THAT IT WAS
OPEN, AND THREE READERS MISSED THE SAME COMMIT.** The cold lane
wrote the state unknowable. This desk "corrected" that to *work PC
attested, home PC still owed* — and felt precise doing it, because
it had found an attestation the lane had discarded. The external
review found the one that closed it.

**WHY ALL THREE MISSED IT IS THE PART WORTH KEEPING.** Each of us
consulted the census's *founder input owed* item 8 — written
2026-07-28, **two days before the act that closed it** — and none of
us asked whether anything AFTER that date had answered it. **A DATED
ATTESTATION IS EVIDENCE OF ITS DATE AND OF NOTHING LATER.** My own
correction was careful about every clause in that sentence except
the last one, and being the second reader to stop at the same stale
line did not make my stop any better than the first.

There is a sharper version. The board's silence on the item was read
as "a repaint may have dropped it" — the cautious reading — when it
actually meant "it was finished". **THE CAUTIOUS READING WAS WRONG
IN THE SAME WAY THE CARELESS ONE WOULD HAVE BEEN**, because both
substituted a guess about the board for a search of the record.

**REPAIRED IN FOUR PLACES, not the two the review named.** The cell
and the story's ending were the instruction; the story's BODY argued
the open case at length and its section heading announced "the
structural gap in knowing", so leaving those would have left the
wrong claim in the places a reader actually reads. AND ITEM 8
ITSELF — the census line all three of us trusted — now carries the
close plus a note that it stood stale for a week and misled two
later readers. Fixing the citations and leaving the source would
have guaranteed a fourth reader.

2026-08-06 13:30 UTC · THE CRITIC ROUND — AND A FIFTH INSTANCE OF
THE CLASS THIS BENCH EXISTS TO CLOSE · work PC — eleven findings,
two 🔴, all repaired. **The second red matters most, because of
where it landed.**

**🔴 ONE — THE TEST I WROTE WOULD HAVE MADE THE SETTLED BRANCH
UNREACHABLE.** It listed "an unticked Done-means box" as evidence of
owed work. But unticked boxes are the NORM here, not a signal:
`cloud-git-identity` shipped with all eight unticked,
`ship-synthesis` with five, and the CI box is left unticked BY A
CONVENTION I INVENTED TWO BENCHES AGO. The test would have answered
ADVANCED for nearly every item, making
[D-077](../record/DECISIONS.md#d-077--shelf-benches-and-the-settling-weld-writes)
ruling 2's "WRITE THE STORY, NOW" practically unreachable — a test
that quietly undoes the ruling it was written to sharpen. That input
is now named as NOT an input, with the reason.

**🔴 TWO — AND IT IS THE FIFTH INSTANCE OF THIS EXACT CLASS.** The
test asked "is any work still KNOWN to be owed — Yes → ADVANCED, No
→ SETTLED", then said "WHEN YOU CANNOT TELL, TREAT IT AS ADVANCED."
Under the first sentence uncertainty is not knowledge, so "cannot
tell" answers NO and lands on SETTLED. **One read, two verdicts** —
a fork whose branches share an entry condition with the tiebreaker
undefined, which is precisely the defect this bench was convened to
fix, committed inside the fix. Repaired by folding the default INTO
the question: "Yes, OR you cannot tell → ADVANCED. Only a checked NO
→ SETTLED."

THE PATTERN NOW HAS FIVE MEMBERS: an absence-keyed case · a prefix
collision · two cases with one trigger · a fork with an undefined
tiebreaker · and now a fork whose stated default contradicts its own
question. **Every one caught by review, none by its author** — and
the countermeasure that works, enumerating the real inputs from
their source, I applied to the OTHER half of this bench and not to
this sentence.

**THE HOOK GAINED TWO GUARDS I HAD NOT THOUGHT OF, both hazards
rather than tidiness.** It fired on an UNSET identity as well as the
harness default — and this repo is PUBLIC, so on any outside clone
lacking an identity it would have replaced git's loud "who are you?"
refusal with silent misattribution to the founder. That branch is
gone. And the DERIVED value was installed without being re-tested
against the same rule, so a bad `origin/main` tip would have written
the very string the step exists to remove and printed a green line
over it. It is re-tested now.

**ONE CONTRADICTION BETWEEN MY OWN TWO FILES, resolved by
measurement.** The spec said the four mis-authored commits "are on
main now"; this memory said local commits never reach main under
their local name. `git log --format='%an' origin/main` returns only
`Wonseuk Her` and `claude[bot]` — never `Claude`. Squash-merge
rewrites the author, so the memory was right and the spec was loose.
Corrected there.

**Five more, all taken:** [machine-setup](../skills/machine-setup.md)
still told a cloud seat to set its identity itself, stale the moment
this merges — backfilled per the retroactivity law, hook named,
manual path kept as the fallback · this memory's Status still read
`claimed` at critic time where ship §4 requires `complete, awaiting
merge` · two weave misses · the vault-lens cell asserted "still owed
at the home PC" as present fact where the attestation is dated · and
two undated derived literals, now stamped.

**AND ONE THE WELD OWES, surfaced rather than absorbed:**
[session-hooks](../chronicle/session-hooks.md) and
[machine-setup](../chronicle/machine-setup.md) BOTH have written
stories whose endings this diff falsifies — one states the hook's
line count, the other calls the identity step "the procedure's one
silent failure mode". Under ship §7 case 1 this weld owes both an
incorporation, so its synthesis names TWO items.

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
`origin/main`'s history ZERO times — main carried `Wonseuk Her`, measured 2026-08-06, 322
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
route it to [LAWS](../LAWS.md), [parallel-lanes](../skills/parallel-lanes.md), its spec and its memory, and A
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
ALREADY KNEW.** "SETTLED vs ADVANCED" forks [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld)'s case 2 with no
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
