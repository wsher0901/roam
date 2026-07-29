---
type: memory
id: ideas-contract
updated: 2026-07-29 14:52 · ship · work PC
---
# ideas-contract — the inbox becomes readable, and keeps its outcomes

## Status

complete, awaiting merge — 2026-07-29, work PC. D-066 is minted,
IDEAS is rewritten to the contract (443 lines → 208, with MORE
ideas visible, not fewer: 26 bundled entries became 29 open lines
and 11 closed ones), and the enforcement is wired into all five
writing files. Every status was VERIFIED against the record, not
taken from the entry's own note — and four verdicts changed as a
result. Full CI mirror green. NO founder rulings are owed: every
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

Everything else verified as the file stated. NOTHING was left
unsettled, so there are no counted founder rulings at this gate.

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

## Where to look

- [the spec](../record/specs/ideas-contract.md) — the contract.
- [IDEAS](../IDEAS.md) — the file being rewritten.
- [D-050](../record/DECISIONS.md#d-050--2026-07--session-lifecycle--closed--dead-the-close-locks-wall-softens-to-injected-read-only-doctrine-interrupt-capture-is-standing-format-the-claude-residue-sweep-is-pickup-hygiene-ideas-is-an-inbox-not-an-archive-amends-the-d-046-era-close-wall-design-upholds-the-park-protocol-and-no-solo-approval)
  — the delete-at-harvest law this amends.
- the Web ops chat, 2026-07-29 — where the contract was approved.
