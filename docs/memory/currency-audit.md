---
type: memory
id: currency-audit
updated: 2026-07-23 21:14 · complete · home PC
---

# currency-audit — docs currency audit

## Status

complete, awaiting merge — 2026-07-23 21:14 · home PC. All eleven
specified changes are applied and pushed: seven LIVING-STALE fixes
(liftoff §6 · SETUP · four HOME edges · machine-setup) and four
dated supersession notes (the clerk spec trio ·
cloud-born-cockpit). The retired-noun greps re-run clean. At THE
GATE — tower-authored, so external Web review precedes the
founder's word. DO NOT MERGE on this session's say-so.

## What this task is

Find and fix every LIVE instruction that points at retired
machinery, and inventory every orphaned file, without touching the
record. The danger is narrow: not "docs that read oddly" but an
instruction a future seat would OBEY that can no longer work — the
class [#197](https://github.com/wsher0901/roam/pull/197) fixed when
the clerk routine was deleted and the repo went on reaching for it.

Governing principle: **annotation beats deletion**. history/, specs,
and DECISIONS entries are immutable record — a superseded record
earns a dated supersession note naming what replaced it, nothing
more. Nothing is deleted in this bench, orphans included. Scope
edges: [the spec](../specs/currency-audit.md).

## Pending issues

- Three things want the founder at the gate, all on record in
  [the spec](../specs/currency-audit.md): ENGINE.md's `type: spec`
  frontmatter (UNCLEAR — flagged, not changed), confirmation that
  the PART C recommendations match intent, and the ORPHAN answer
  (there are none, proven mechanically — the list to bring is
  empty).
- Tower-authored, so [no-solo-approval](../LAWS.md) requires an
  external Web review before the founder's word. At THE GATE —
  DO NOT MERGE.
- The stale origin ref `chore/liftoff-findings` survives its
  squash-merge ([#202](https://github.com/wsher0901/roam/pull/202);
  tip verified equal to the PR head at merge, zero unique commits —
  re-verified at adoption). Deleting remote refs is not this
  bench's business; a one-click UI delete whenever convenient.

## Left / idle

Nothing is left on this bench — the work order is fully executed
and verification is at the gate. After the founder's word, the
weld ticks the last two Done-means boxes (Actions on the final
head · the critic run), per the
[shakedown-audit](../specs/shakedown-audit.md) precedent. The next
bench after this one:
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) v5 (see Where to look).

## The story

**Birth.** Origin carried two heads where the mandate expected one:
`main` plus `chore/liftoff-findings`. The second was already merged —
it landed as [#202](https://github.com/wsher0901/roam/pull/202) and
only its remote ref survived the squash. So STEP 0 held in
substance: no live unmerged work on origin, and this bench was born
from the true fresh tip. The stale ref was left alone; deleting
remote refs is not this bench's business. The session also began in
the leftover `chore+env-clerk-scrub` worktree of the completed
[#200](https://github.com/wsher0901/roam/pull/200) lane, so this
bench cut its own worktree from `origin/main` rather than work a
dead lane's tree.

**A caught mistake worth remembering.** The first draft of the spec
invented D-047 and D-048 anchors from their subject matter instead
of deriving them from the actual headings — and `grep` appeared to
confirm them, because it was matching the very files just written.
Excluding those files revealed both anchors were wrong. `check:links`
would have caught it, but the lesson generalizes: when verifying a
new file's links by grep, exclude the new file, or the check
confirms itself. Real anchors were then copied from existing
in-repo usages.

**PART A — how the sweep ran.** Every living surface was read end to
end: LAWS, HOME (1462 lines), SETUP (665), all nine skills, all
three hooks, settings, the reviewer agent, all nine skill stubs,
every script, both workflows, `.env.example`, `package.json`, the
root stubs, the data files, ENGINE, FOUNDATION, DESIGN-KICKOFF, the
ledger. The 46-file specs corpus was swept by grep for every retired
noun AND its synonyms — the explicit lesson of
[#197](https://github.com/wsher0901/roam/pull/197), that a
verification phrased around one verb misses its synonyms — then read
at each hit.

**The retired-noun sweep came back clean.** `fire:clerk`, `CLERK_`,
`gh install`, `winpty`, "roam environment", "Web produces the block"
— every hit in a LIVING file is either correct-and-live (
`scripts/fire.mjs`'s honest-failure guard for a stale `clerk`
target) or already tombstoned by
[#197](https://github.com/wsher0901/roam/pull/197) (SETUP's three
clerk sections, `parallel-lanes` §Answering a lane). `.env.example`
carries zero `CLERK_`. The bulk of raw `clerk` grep hits are inside
the D-046 anchor slug, which is unavoidable and harmless.

**So the real finds were not the clerk at all.** The clerk was
already handled. What this bench actually caught is a different
generation of staleness:

1. **A verify-before-rely instruction whose verification already
   happened.** [liftoff §6](../skills/liftoff.md) tells a future
   seat to confirm the `[COCKPIT]` title line at the next birth and
   drop it if it does nothing. That birth HAPPENED on 2026-07-23:
   the platform ignored the line and auto-titled from charter
   content. [IDEAS](../IDEAS.md) records it as DISPROVEN and says
   plainly that it "wants a liftoff §6 edit (a reviewed PR, not this
   micro)". This bench is that PR. The instruction is not merely
   stale — it is a standing order to redo work already done.

2. **A doctrine that landed in one home but not its manual.**
   [#193](https://github.com/wsher0901/roam/pull/193) made the board
   the authoritative flight plan and demoted the birth prompt to a
   pointer, after a mandate arrived truncated mid-sentence.
   `liftoff.md` says so emphatically. [HOME](../HOME.md)'s ritual
   portrait still says liftoff fires the cockpit "with that flight
   plan as its payload" — the exact model
   [#193](https://github.com/wsher0901/roam/pull/193) reversed.

3. **`cloud-born-cockpit.md`, found beyond the known set.** The
   mandate named the clerk specs as the supersession-note set. This
   spec is a fourth, and a more dangerous one: it reads as a
   RECIPE and carries two shapes proven not to work — the `winpty`
   pty wrapper with output captured to file (the capture is exactly
   what the wrapper refuses), and "the roam cloud environment's
   setup script must install `gh`" (the environment is named
   `Default`, and the install fails the whole setup script with exit
   100). Both corrections exist elsewhere; nothing in this file
   points at them.

4. **A per-machine obligation missing from the per-machine
   procedure.** [machine-setup](../skills/machine-setup.md) points
   at nothing retired — its flaw is omission. It never names the
   `COCKPIT_` pair, though SETUP says each seat must paste it and
   the board tracks it as an open seat debt. A seat could complete
   machine-setup and still be unable to fire the cockpit or the
   summon self-rescue.

**Two questions answered rather than assumed.**
[go-remote](../skills/go-remote.md) does NOT want retiring or a new
annotation — it already carries the
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
backstop wording, and
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
explicitly rejected full Remote Control retirement
(alternative ②b); demoted is not dead. And [HOME](../HOME.md)
already describes the CC-direct surface doctrine correctly in §The
daily loop — the paste block is named "a tool since
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock),
not a requirement". The four HOME fixes are edge corrections, not a
doctrine rewrite.

**Orphans: none.** Rather than eyeball it, an inbound-reference
census ran over every tracked file (markdown links, bare paths, bare
filename mentions). Every in-scope file has at least one inbound
reference. The only zero-inbound file is this memory, which is the
normal state of an in-flight memory — it joins the graph at ship.

**Adoption (home PC, 2026-07-23 evening).** The founder resumed
the bench with a re-derivation mandate: trust only origin. The
bench was found whole at `af1f2d7` and adopted as the park Status
directed — nothing re-derived, nothing assumed to have survived
from the other seat. The STEP 0 tripwire fired on the same
`chore/liftoff-findings` ref the birth had already adjudicated;
re-verified (merged as
[#202](https://github.com/wsher0901/roam/pull/202), tip equal to
the PR head at merge, zero unique commits) and left alone again.
The mandate's machine-local tidy ran: this seat's `.env.local`
carried exactly the two dead `CLERK_` lines — removed, nothing
committed (the file is gitignored), masked read-back clean. The
founder's acts arrived as context and were NOT re-flagged as owed:
OAuth secret deleted · clerk routine deleted · the `Default`
environment's setup script emptied · both routine boxes re-saved
07-23 · workflow permissions verified.

**Implementation (same sitting).** The eleven changes landed in
four pushed commits (title-line pair · HOME edges · machine-setup
· the four notes), each note a dated blockquote directly under its
spec's title so a reader reaching for a recipe hits the note
first. One deviation, recorded in the spec: fix 7's rationale
narrowed — the machine-local `COCKPIT_` pair gates only
`fire:cockpit` (the summon workflow runs on repository secrets),
so the bullet claims exactly that. The retired-noun greps re-ran
clean over the finished tree: every surviving hit is
record-with-note, this bench's own artifacts, the board's ledger
lines, doctrine-correct
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
prose (the paste block described as
a tool, not a requirement), or the out-of-scope
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md). One reassurance worth
keeping: the ground-meaning "cockpit" the session-start hook
printed at this sitting's open came from the stale
pre-[#180](https://github.com/wsher0901/roam/pull/180) branch
this session began on — current main's hook says BATON-HOLDER,
verified directly.

**The critic's findings, repaired at the gate.** Ship §6's
reviewer passed every one of the eleven changes and both
law-classification judgments, and caught two weave-rule breaches
in THIS diary's own prose — a bare `#193` and unlinked
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
mentions in the story. Repaired on sight (the retroactivity law)
before the ready-flip; a currency bench of all benches should not
ship carrying its own staleness class.

## Where to look

- [the spec](../specs/currency-audit.md) — the deliverable: the full
  classification table, the eleven specified changes with the law
  that dates each, and the PART C recommendations. **Read this
  first; it is the work order.**
- [#204](https://github.com/wsher0901/roam/pull/204) — the draft PR,
  the public window.
- [#197](https://github.com/wsher0901/roam/pull/197)
  ([story](../history/workshop/mechanism/clerk-retirement.md)) — the
  defect class this bench generalizes.
- [IDEAS](../IDEAS.md), the 2026-07-23 liftoff-harvest entry — where
  the title line is recorded DISPROVEN, with the edit it wants.
- [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  ·
  [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)
  ·
  [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — the law every finding is judged against.
- **The next bench after this one:**
  [WEB-INSTRUCTIONS.md](../WEB-INSTRUCTIONS.md) v5. Confirmed stale
  at v4 (the paste-block loop; "Claude Code: the ONLY repo writer";
  no cockpit). Deliberately untouched here — it needs a rewrite, not
  mechanical fixes.
