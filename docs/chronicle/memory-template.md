---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The memory TEMPLATE and the Status vocabulary

> **CURRENT ENDING (2026-08-06).** One home for the locked format —
> [`docs/memory/TEMPLATE.md`](../memory/TEMPLATE.md) — and it is
> mechanically enforced on every CI run by
> [`scripts/check-memory.mjs`](../../scripts/check-memory.mjs), 171
> lines and zero dependencies, which fails a memory that drops a
> section, reorders one, leaves a placeholder, or carries a Status
> with no date. **Derived at write time: the Status vocabulary
> stands at 14 states**, and `npm run check:memory` on this branch
> passes. The table's one MACHINE-CHECKED row is `airborne`, whose
> form is not defined here at all — it is copied character-for-
> character from
> [§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides),
> which wins any disagreement, because a waiting lane polls for that
> exact string and cannot see a near-miss. **The honest limit is
> that the gate checks SHAPE, never TRUTH:** a well-formed Status
> that lies passes green, and what defends the meaning is the
> wake-lock, not this checker.

## What it is

Two things in one file, plus the script that holds them to account.

**The locked format.** Frontmatter (`type: memory`, a non-empty
`id:`, a non-empty `updated:`) followed by six `##` sections in a
fixed order: Status · What this task is · Pending issues · Left /
idle · The story · Where to look. Status comes FIRST because it is
what a waking session reads before anything else. When the state is
`interrupted`, a **⏸ Interrupt capture** block follows the Status
line with every field filled — original mandate, the plan, done so
far, the exact next step, why paused, and conditionally TEAM
FINDINGS — so a resuming seat can continue from that block alone.

**The Status vocabulary.** One state per Status line, 14 of them at
write time, each row naming who WRITES it and what it LICENSES.
That second column is the part that makes the table a protocol
rather than a glossary: `bench ready` licenses claiming ·
`claimed` licenses waiting · `airborne · <url> · <date>` licenses
the lane to work · `parked`, `respawned`, `superseded`, `failed`
and `held` license nothing, and a lane meeting one it does not own
self-terminates on sight.

**The gate.** [`check-memory.mjs`](../../scripts/check-memory.mjs)
validates every `docs/memory/*.md` except the README and the
TEMPLATE itself, checking four things: frontmatter, the six headings
present and in TEMPLATE order, at least one `YYYY-MM-DD` stamp in
the Status BODY, and no surviving `<placeholder>` after backtick
spans are stripped. One honest failure line per file; nonzero exit.
Zero files in scope is an explicit, vacuous pass.

## What raised it

The memory is the handshake surface, and a handshake surface is
exactly the kind of thing that must not drift.

The lane law reads a memory's Status on every wake, and the
wake-lock licenses work ONLY on a lane's own live claim. That gives
malformation real teeth: a memory missing its Status heading, or
carrying a Status with no date, does not merely read badly — it
**mis-attributes a seat or hides a claim**, and the mechanism that
prevents two workers on one bench reads exactly that field.

The vocabulary exists for the same reason in the other direction.
Free-text status would be human-readable and machine-useless; the
enumeration is what lets a lane, a ritual, and a CI script all agree
on what a bench's state MEANS without any of them asking a person.

## What changed, in order

- **[#71](https://github.com/wsher0901/roam/pull/71) (2026-07-11) —
  [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  names the locked format.** Per-task memory is born, "the living
  story in the locked format," rewritten cognitively at rituals.
  The format exists as a rule before it has a single home.
- **[#108](https://github.com/wsher0901/roam/pull/108) (2026-07-13)
  — TEMPLATE takes ownership.** The ledger line is explicit:
  "TEMPLATE owns the memory format and Status vocabulary." One home,
  per the routing law, and the moment the vocabulary becomes a
  table someone can be pointed at rather than a convention someone
  remembers.
- **[#128](https://github.com/wsher0901/roam/pull/128) (2026-07-15)
  — the skills precision pass** codifies already-decided behavior
  across decide, handoff, liftoff, parallel-lanes and recall. The
  format's consumers get precise about what they write into it.
- **[#171](https://github.com/wsher0901/roam/pull/171) (2026-07-17)
  — the format becomes a GATE.** `check-memory.mjs` is written in
  check-ledger's shape and voice, wired into `package.json`,
  `ci.yml` after `check:ledger`, and
  [ship §1](../skills/ship.md#1--preflight)'s mirror. Two details
  are worth keeping: it was flown FULLY UNATTENDED as payload B of
  Shakedown phase 2 — a lane wrote the gate that checks lanes — and
  it deliberately copies the ledger gate's idiom, so the two
  scripts read as one family.
- **[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — `interrupted` and the ⏸ block become standing format.**
  Interrupted work — Esc, a founder redirect, or a handoff parking
  mid-task — leaves a filled capture block, and pickup's briefing
  LEADS with "⏸ INTERRUPTED — continue?". The park protocol is
  preserved intact alongside it: a LANE's diary still receives only
  the one-line park stamp; the capture duty belongs to the tower,
  for tower-owned memories.
- **[D-054](../record/DECISIONS.md#d-054--the-landing-skill) — the
  fence writes a terminal word.** land's MODE P holds a live lane by
  COMMITTING a Status it does not own; the lane re-reads, meets it,
  and stops. The vocabulary is now the mechanism by which a flight
  can be ended safely from outside the lane.
- **[D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  — the ⏸ block gains TEAM FINDINGS**, written only when an agent
  team was live at the pause. Its rationale is precise and is the
  reason it is a FIELD rather than a note: teammates do not survive
  the sitting, their transcripts die with them, and this is
  therefore the one field git cannot re-derive.

## Where it stands

Live and enforced. `npm run check:memory` passes on this branch, and
the vocabulary carries 14 states at write time — both derived here
rather than quoted.

Three things a later reader should carry:

**The `airborne` row is a copy, and knows it.** The TEMPLATE says so
in its own text: the token's form is the contract in
[§Canary](../skills/parallel-lanes.md#canary-handshake-both-sides),
copied into the table "exactly, middots and all," and §Canary wins
any disagreement. The reason is not tidiness — it is that a lane
tests whether its Status line STARTS WITH `airborne ·`, so a
paraphrase or a decorated variant is invisible to it. That failure
is lived, not hypothetical: on 2026-07-22 an em-dash ack cost a
flight its handshake.

**Every `<date>` slot in the table is load-bearing.** Because the
gate demands a `YYYY-MM-DD` in the Status BODY, a vocabulary row
copied verbatim without filling its date goes RED. This was
discovered on 2026-08-04 by flight 2's lanes A
([#278](https://github.com/wsher0901/roam/pull/278)) and B
([#279](https://github.com/wsher0901/roam/pull/279)) INDEPENDENTLY —
which is the useful part, because two seats hitting the same trap
separately is evidence about the table rather than about either
seat. The finding is now written into the TEMPLATE beside the rows
that cause it.

**The gate checks shape, not truth — and this is the boundary that
matters most.** `check-memory.mjs` cannot tell whether a Status is
ACCURATE. A lane that writes `airborne ·` into its own memory
produces a file that passes every check, which is precisely why the
licence was ruled to be an ack COMMIT ON ORIGIN and nothing else.
The format gate defends the shape a protocol needs; the protocol's
integrity is defended by the wake-lock and the anchored match. Two
different guarantees, and it is worth not confusing them.

## Sources

Down-links only.

- [TEMPLATE](../memory/TEMPLATE.md) — the locked format, the ⏸
  block, and the 14-row vocabulary with its writer and licence
  columns.
- [`scripts/check-memory.mjs`](../../scripts/check-memory.mjs) — the
  gate, whose header comment states the format's purpose in one
  paragraph.
- [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  — the format's origin.
- [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — `interrupted` + the ⏸ capture block as standing format.
- [D-054](../record/DECISIONS.md#d-054--the-landing-skill) — MODE
  P's fence and the terminal `held` word.
- [D-056](../record/DECISIONS.md#d-056--team-aware-leaving-rituals)
  — TEAM FINDINGS, and why it is the field git cannot re-derive.
- [parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
  — the ack token's one home; the TEMPLATE row is its copy.
- [parallel-lanes §Wake-lock](../skills/parallel-lanes.md#wake-lock--parking)
  — what the vocabulary's terminal words actually do.
- [the check-memory bench](../record/history/workshop/mechanism/check-memory.md)
  — [#171](https://github.com/wsher0901/roam/pull/171), flown
  unattended as Shakedown payload B.
