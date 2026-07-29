---
type: memory
id: ideas-contract
updated: 2026-07-29 14:52 · ship · work PC
---
# ideas-contract — the inbox becomes readable, and keeps its outcomes

## Status

complete, awaiting merge — 2026-07-29, work PC. D-066 is minted,
IDEAS is rewritten to the contract (443 lines → ~220, with MORE
ideas visible, not fewer: 26 bundled entries became 30 open lines
and 12 closed ones), and the enforcement is wired into all five
writing files. Every status was VERIFIED against the record, not
taken from the entry's own note — and FIVE verdicts changed as a
result, the fifth caught by the critic. Full CI mirror green. NO founder rulings are owed: every
entry settled from the record.

## What this task is

[IDEAS](../IDEAS.md) is the single inbox and had stopped being
scannable: twenty-line entries, probe narratives that belong in
the record, several ideas bundled per bullet so nothing closed
cleanly, and a compaction law that DELETED what closed — so the
file could never answer "what did we decide about X?". THE ENTRY
CONTRACT fixes both halves, and closed entries now COMPRESS AND
STAY as the outcome ledger. Contract:
[the spec](../record/specs/ideas-contract.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked.

## The story

Born 2026-07-29 at the work PC, the fifth bench of the sitting and
the third in a row about the same disease: a file that had grown
into a container. [SETUP](../SETUP.md) held masters and
narratives; the cockpit charter held a procedure; IDEAS holds
probe stories, findings, and multi-idea bundles that cannot close.
Each recut answers the same question differently — what is this
file FOR, and what does that exclude?

### VERIFY-BEFORE-CLASSIFY — and the four verdicts it changed

The rule was never to trust an entry's own closure note without
its artifact resolving. That mattered: four statuses came out
different from what the file claimed or implied.

1. **"Name Agent View in parallel-lanes" — claimed nothing, and
   is NOT done.** `grep -c 'Agent View'` on
   [parallel-lanes](../skills/parallel-lanes.md) returns 0. It
   had sat since 07-16 reading like housekeeping already handled.
   STAYS OPEN.
2. **The `count:runs` defect is NOT fixed.**
   `scripts/count-routine-runs.mjs` still calls
   `execFileSync("gh", …)` with no shell resolution, which is
   exactly the failure the entry describes. STAYS OPEN — and it
   still costs liftoff a number it could derive.
3. **The daily-cap entry was HALF closed, and nobody had noticed.**
   [liftoff §2](../skills/liftoff.md#2--triage-every-open-item)
   now reads "`npm run count:runs` PLUS the fires performed this
   sitting" — so the API-fire blind spot IS fixed. The REDELIVERY
   blind spot is not mentioned anywhere. Split: one line closed,
   one still open. This is the contract's split-so-closure-is-
   per-idea rule earning its place on its first use.
4. **BOX PROVENANCE is CLOSED, though nothing said so.** It asked
   for "last pasted: date + sha" stamps so box currency becomes
   derivable. [D-064](../record/DECISIONS.md#d-064--2026-07--the-box-master-class--the-setup-entry-contract--every-external-box-master-is-its-own-top-level-file-on-the-web-instructions-pattern-cockpit-chartermd-and-lane-workermd-extracted-verbatim-setup-compresses-to-a-replication-spec-under-the-entry-contract-what--where--values--verify--source-design-kickoff-joins-the-class-on-paper)
   gave every master a version-history table and
   [D-063](../record/DECISIONS.md#d-063--2026-07--response-doctrine-v2--web-instructions-v6--two-channels-sentences-for-the-founder-fenced-blocks-for-machines-process-is-proof-not-prose-the-chat-start-ingest-contract-the-relay-rule--origin-is-the-only-courier-codes-output-is-never-pasted-to-web-reviews-speak-in-goal-and-outcome-the-core-file-alert-the-agenda-convention-brief-renders-the-full-picture-the-master-gains-a-version-history-amends-d-052)
   made a fresh Web chat drift-check its box against the master's
   version line. The idea got what it asked for by a different
   mechanism, three benches later, and no one closed it.

A FIFTH changed at the critic round — see the critic section: the
self-read launcher is DECLINED, not open. Everything else verified
as the file stated. NOTHING was left unsettled, so there are no
counted founder rulings at this gate.

### THE STANDING DUTY — what was homeless, and where it went

Before dropping any narrative, each was checked against its
pointer's target.

- **The gh-second-path probe findings** (a session bluffing about
  its own toolset · teleport relocating execution · birth prompts
  truncating on nested quotes · a birth turn no-opping) — ALL
  FOUR already live in
  [their story](../record/history/workshop/mechanism/gh-second-path.md).
  The IDEAS copy was a duplicate; it compresses to a pointer. My
  first grep said otherwise and was wrong — it searched my
  phrasings, not the file's, which is the same trap the last
  bench recorded.
- **The CI cloud-birth probe** (the org-UUID wall) — HOMELESS.
  The branch `ops/probe-cloud` was never merged, no bench shipped
  from it, and nothing in the record carried the result. It cost
  a flight to learn that a pty defeats the TTY refusal, that
  first-run onboarding blocks `--cloud`, and that a bare
  setup-token carries no org identity. It moved WHOLE to
  [a new probe record](../record/probes/cloud-birth-in-ci.md),
  with the founder's decision and the untried next step intact.
  That is a new `record/probes/` shelf — a probe is neither a
  shipped story nor a retired artifact.

### What the compression actually did

443 lines → 208, and MORE ideas are visible, not fewer: 26
bundled entries became 29 OPEN lines and 11 CLOSED ones. The old
file hid ideas inside other ideas — the "four smaller ones" entry
was four, the rung-1 entry was two, the daily-cap entry was two.
Splitting them is what let three of them close and the rest stand
up as separate work.

### The critic round (ship §6, pre-flip)

Nine findings, and the first is the one that matters: **A FIFTH
VERDICT WAS WRONG, and the verification pass had already looked at
that entry.**

"Keep the self-read launcher as a script" was carried forward as
OPEN. It is DECLINED:
[D-051](../record/DECISIONS.md#d-051--2026-07--self-seat-birth--liftoff-fires---cloud-blind-and-the-cockpit-seats-itself-by-its-env-derived-self-url-the-console-attach-launcher-is-retired-amends-d-047s-rung-1-mechanics-as-corrected-by-193-upholds-d-049-and-board-governs)
retires the console-attach launcher — "the component is DELETED
from the recipe, not maintained" — and names KEEPING THE LAUNCHER
AS A FALLBACK among its rejected options, two days AFTER the idea
was filed. The blind fire captures nothing, so there is no output
for a launcher to read.

Why it slipped is worth naming: the entry reads as a leftover
half of a PARTLY-CLOSED bundle, and I verified the half that had
closed (rung 1's mechanics, #193) without asking whether anything
LATER had ruled on the remainder. Verify-before-classify has to
mean verifying against the WHOLE record, not just the artifact the
entry names.

Two structural repairs followed:

- **The new `record/probes/` shelf was unregistered** — no row in
  HOME's files table, none in the routing table. That is the same
  miss the last three benches each made once with a new class, so
  it is fixed here rather than left for a fourth. HOME also gained
  the outcome-ledger routing row.
- **The micro-PR safety argument had drifted.** It reasoned that
  IDEAS "only ever gains dated inbox lines", so a bad merge could
  at worst be noisy. Harvests now COMPRESS and RELOCATE lines, so
  a bad merge can lose an outcome — the argument is rewritten to
  say what actually protects it (git, plus the closing vehicle
  each line names).

Also repaired: HARNESS V2 absorbed "three older lines" without
naming them — an unnamed absorption is exactly where an idea
disappears, so the three are now named and the two that had been
swallowed are back as their own OPEN lines; the gh-second-path
pointer was a trailing unglyphed paragraph outside both sections
and is now a glyph-led CLOSED line; BOX PROVENANCE was marked
fully closed when the routine boxes still have no staleness
signal, now stated precisely; both sections were NOT newest-first
on day one — the file broke the rule in its own header — and both
are now sorted, the sort key having needed a second pass because
HARNESS V2's inline dates outrank its attribution date.

And the spec's Done-means were all still unticked at the gate.

WHAT THE CRITIC COULD NOT DO, and I did: the exhaustive
old-vs-new idea enumeration. It had no shell, so it could not read
`origin/main:docs/IDEAS.md`. I ran it — 26 keyword probes across
every distinct idea in the old file, including those buried inside
multi-part bullets. Two flagged ABSENT on the first pass and both
were my regex, not the file (`\|` does not alternate under
`grep -E`). **NO IDEA WAS LOST.**

## Where to look

- [the spec](../record/specs/ideas-contract.md) — the contract.
- [IDEAS](../IDEAS.md) — the file being rewritten.
- [D-050](../record/DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)
  — the delete-at-harvest law this amends.
- the Web ops chat, 2026-07-29 — where the contract was approved.
