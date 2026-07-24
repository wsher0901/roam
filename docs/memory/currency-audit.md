---
type: memory
id: currency-audit
updated: 2026-07-23 21:07 · claimed · home PC
---

# currency-audit — docs currency audit

## Status

claimed — control tower · home PC · 2026-07-23 21:07. Adopted from
the 07-23 18:02 park on the founder's resume mandate, exactly as
the park Status directed: the PART A/B/C analysis stands as
written, and this seat now applies the eleven specified changes
from [the spec](../specs/currency-audit.md) — seven LIVING-STALE
fixes, four dated supersession notes — then the verification chain
to THE GATE.

Bench artifacts, all verified on origin at adoption:
branch `docs/currency-audit` (af1f2d7) · spec · this memory · draft
PR [#204](https://github.com/wsher0901/roam/pull/204) (OPEN, draft).
Adoption used only what is on origin — nothing from the other seat
was assumed to survive.

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

- **Nothing is fixed yet.** The bench parked after analysis, before
  edits. Eleven changes are specified and waiting: seven
  LIVING-STALE instruction fixes and four dated supersession notes.
- The ORPHAN question is ANSWERED, not open: there are none, proven
  mechanically. There is no orphan list to bring to the gate.
- Two items want the founder's word at the gate, both recorded in
  the spec: ENGINE.md's `type: spec` frontmatter (UNCLEAR — flagged,
  not changed), and confirmation that the PART C recommendations
  match intent.
- Tower-authored, so [no-solo-approval](../LAWS.md) requires an
  external Web review before the founder's word. Ships to THE GATE —
  DO NOT MERGE.

## Left / idle

Everything below is specified in
[the spec](../specs/currency-audit.md); this is the work order.

**PART B.1 — seven LIVING-STALE fixes:**
1. [liftoff §6](../skills/liftoff.md) — drop the disproven
   `[COCKPIT] roam — <date>` title line and record the answer.
2. [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
   — same title line, second home.
3. [HOME §The five rituals](../HOME.md#the-five-rituals) — the
   cockpit birth prompt is a POINTER, not the flight plan's carrier.
4. [HOME §The files](../HOME.md#the-files--what-each-one-is-for) —
   FOUNDATION's writer drops "paste block".
5. [HOME §Equipment](../HOME.md#equipment--environment) — the skills
   list gains [go-remote](../skills/go-remote.md).
6. [HOME §Delegation](../HOME.md#delegation--the-away-mode-chooser)
   — name the maiden's recorded winning route.
7. [machine-setup](../skills/machine-setup.md) — one per-machine
   bullet for the `COCKPIT_` pair, pointing at SETUP (a pointer,
   never a second copy of the secret path).

**PART B.2 — four dated supersession notes (note only, no rewrite):**
[cloud-clerk](../specs/cloud-clerk.md) ·
[clerk-notify](../specs/clerk-notify.md) ·
[clerk-autospawn](../specs/clerk-autospawn.md) ·
[cloud-born-cockpit](../specs/cloud-born-cockpit.md).

**Then:** weave-lint, the full CI mirror, Actions green,
[ship §6](../skills/ship.md#6--the-gate)'s critic, external Web
review, THE GATE.

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
   plan as its payload" — the exact model #193 reversed.

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
annotation — it already carries the D-046 backstop wording, and
D-046 explicitly rejected full Remote Control retirement
(alternative ②b); demoted is not dead. And [HOME](../HOME.md)
already describes the CC-direct surface doctrine correctly in §The
daily loop — the paste block is named "a tool since D-046, not a
requirement". The four HOME fixes are edge corrections, not a
doctrine rewrite.

**Orphans: none.** Rather than eyeball it, an inbound-reference
census ran over every tracked file (markdown links, bare paths, bare
filename mentions). Every in-scope file has at least one inbound
reference. The only zero-inbound file is this memory, which is the
normal state of an in-flight memory — it joins the graph at ship.

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
