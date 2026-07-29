---
type: memory
id: setup-recut
updated: 2026-07-29 11:12 · ship · work PC
---
# setup-recut — the container becomes a replication spec

## Status

complete, awaiting merge — 2026-07-29, work PC. All five moves are
in. SETUP goes 596 → 439 lines while GAINING a VERIFY probe per
entry, and every non-default value survives — checked
mechanically, not by eye. Precondition verified before anything
was touched: [COCKPIT-CHARTER.md](../COCKPIT-CHARTER.md) exists on
freshly pulled main, so
[#242](https://github.com/wsher0901/roam/pull/242) is merged. No
new decide;
[D-064](../record/DECISIONS.md#d-064--2026-07--the-box-master-class--the-setup-entry-contract--every-external-box-master-is-its-own-top-level-file-on-the-web-instructions-pattern-cockpit-chartermd-and-lane-workermd-extracted-verbatim-setup-compresses-to-a-replication-spec-under-the-entry-contract-what--where--values--verify--source-design-kickoff-joins-the-class-on-paper)
already records this bench, and [DECISIONS](../record/DECISIONS.md)
is untouched.

## What this task is

[SETUP](../SETUP.md) became a container: it held masters, a
retired routine's whole record, and the reasoning behind the
cockpit — none of which a person rebuilding the workshop needs at
the moment they are rebuilding it. This bench compresses every
entry to the contract (WHAT · WHERE · VALUES · VERIFY · SOURCE),
collapses the clerk to a tombstone, and moves the WHY to
[HOME](../HOME.md). Contract:
[the spec](../record/specs/setup-recut.md).

## Pending issues

- Tower-authored, so
  [no-solo-approval](../LAWS.md#workflow-non-negotiable) requires
  an external Web review before the founder's word at THE GATE. DO
  NOT MERGE.

## Left / idle

nothing parked. The dead `CLERK_` credentials line left SETUP as
founder-facing status and reaches
[the board](../DASHBOARD.md)'s Needs-you at the ship tail: the
`CLERK_FIRE_TOKEN`/`CLERK_ROUTINE_ID` pair still sits in both
seats' `.env.local` pointing at a deleted routine — inert, not a
leak (those files are gitignored and never left the machines),
delete the two lines at each seat's convenience. The
COCKPIT-CHARTER v2 bump also means the routine-box re-save is owed
again; it rides the EXISTING Needs-you item rather than opening a
new one.

## The story

Born 2026-07-29 at the work PC, straight after
[bench 1](../record/history/workshop/definition/box-masters.md)
shipped. The compression was deliberately split from the
extraction: a verbatim move is only verifiable when it is the only
thing in view, and this bench relocates a retired routine's whole
record plus the cockpit's reasoning — a diff that would have made
bench 1's byte-proof unreadable.

### The standing duty, checked BEFORE any deletion

Nothing unrecorded may be dropped. Every narrative sentence
scheduled for compression was checked against its pointer's target
first:

- **Has a home, safe to compress** — the Vercel `ignoreCommand`
  story (its own
  [spec](../record/specs/vercel-ignore-fix.md) and
  [story](../record/history/workshop/mechanism/vercel-ignore-fix.md)) ·
  the GitHub preflight drift of 07-16
  ([the maiden-flight report](../record/history/workshop/mechanism/maiden-flight-report.md)) ·
  the `cli.github.com` 403 / wrong-apt-source reading
  ([gh-second-path](../record/history/workshop/mechanism/gh-second-path.md)
  and its decide).
- **Has NO home — must not be deleted:** the CLERK CHARTER TEXT
  and its SPAWN PREAMBLE exist nowhere in the repo but SETUP. The
  clerk's specs POINT at SETUP for them rather than carrying
  them, so compressing SETUP without relocating these would
  destroy the artifact the specs cite.

### What moved where

- **The clerk's charter text and spawn preamble → a NEW record
  file**, [record/retired/clerk-charter.md](../record/retired/clerk-charter.md),
  holding both verbatim plus the account of what the clerk was,
  what it proved, and which specs cite it. It is marked RECORD,
  NOT INSTRUCTION with an explicit "do not paste it anywhere". It
  went to a new `record/retired/` folder rather than into
  `record/history/`, because history/ is ledger-bound —
  `check:ledger` enforces a file↔line bijection there, and a
  retired artifact is not a shipped story.
  SETUP's three clerk entries, its charter fence and its spawn
  fence collapse to ONE tombstone bullet pointing at that file
  and the four evidence specs.
- **The API dependency map + recovery rungs → [HOME](../HOME.md)**,
  as `§The cockpit's API dependency map + recovery`, beside the
  lanes-and-cloud material where explanations belong. SETUP keeps
  one closing pointer. THE CASCADE, handled in the same bench:
  [COCKPIT-CHARTER](../COCKPIT-CHARTER.md)'s R3 line cited the
  map's old SETUP address inside the fenced master, so that one
  line was edited and the file's version table bumped to v2 with
  a changelog row — the charter text is otherwise untouched.
- **The dead `CLERK_` credentials line → the board**, via the
  ship tail (see Left/idle). It was founder-facing STATUS sitting
  in an inventory file, which the entry contract forbids.
- **Nothing else needed relocating.** The Vercel `ignoreCommand`
  story, the 07-16 GitHub preflight drift, and the
  `cli.github.com` wrong-apt-source reading were each confirmed
  present at their pointer's target before their sentences were
  compressed to a SOURCE line.

### The compression, and how it was checked

SETUP went 596 → 439 lines while GAINING a VERIFY probe per
entry — the shrink is narrative, not substance. Value preservation
was checked MECHANICALLY rather than by eye: a token sweep for
every non-default value in the old file (`nova`, `React 19`,
`lane:cloud`, `15 runs/day`, `proxy-injected`, `add_repo`,
`ops/summon`, `missing-secrets`, `sk-ant-oat01`, `trig_`, both
`COCKPIT_` names, `Opus 5`, `xhigh`, `in-process`, `tmux`,
`autocrlf`, `roam.machine`, `deadsnakes`/`ondrej`, and the rest)
against the new one. Two flagged and both resolve clean:
`playwright OFF` is present but line-wrapped, and `cli.github.com`
is deliberately gone — it is discovery narrative with a home at
[gh-second-path](../record/history/workshop/mechanism/gh-second-path.md),
which is exactly what the contract says to drop to a pointer.

The VERIFY probes are real commands wherever one exists — the
repo-settings probe is a single `gh api` read returning the five
booleans; branch protection, the `lane:cloud` label, `gh secret
list`, `npm run count:runs`, `git config roam.machine`, `git
check-ignore .env.local`, and the vault-lens file comparison all
resolve mechanically. Where none exists the entry says so
honestly: `VERIFY: none — UI-only` on the routine settings, VS
Code, ccstatusline, and the phone bootstrap (whose UNPROVEN status
is kept with its test pointer).

### The second rider: why WEB-INSTRUCTIONS is NOT retrofitted

The external review asked whether the exemplar should carry the
class's header-laws element, since its laws sit INSIDE its fence.
It should not, and the reason is the class's own logic: a box
master's laws exist to bind whoever READS the box. For the cockpit
and the lane worker, that reader is a session that clones the repo
and can follow a link, so header prose reaches it. For
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md), the reader IS the Web
surface, which sees only the pasted box and never the file around
it — laws in header prose would be invisible to the one actor
bound by them. So the fence carries them by necessity, and the
exemplar is correct as it stands.

## Where to look

- [the spec](../record/specs/setup-recut.md) — the contract.
- [SETUP](../SETUP.md) — the file being recut.
- [D-064](../record/DECISIONS.md#d-064--2026-07--the-box-master-class--the-setup-entry-contract--every-external-box-master-is-its-own-top-level-file-on-the-web-instructions-pattern-cockpit-chartermd-and-lane-workermd-extracted-verbatim-setup-compresses-to-a-replication-spec-under-the-entry-contract-what--where--values--verify--source-design-kickoff-joins-the-class-on-paper)
  — the entry contract this bench executes.
- the Web ops chat, 2026-07-29 — where the recut was planned.
