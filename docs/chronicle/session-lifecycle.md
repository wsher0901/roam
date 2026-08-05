---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-05 · written · cloud lane
---

# Session lifecycle — what start, pause, and close leave behind

> **CURRENT ENDING (2026-08-05).** Settled in one ruling with four
> clauses, and unamended since: **closed ≠ dead** (a closed session
> answers read-only from origin instead of being walled off), the
> **⏸ interrupt capture** is standing format in every memory, the
> **`claude/*` residue sweep** is pickup hygiene on a standing rule,
> and **IDEAS is an inbox, not an archive**. Its unifying idea is
> that the END of a session is a state with obligations, not an
> absence — and its most-cited half is the first clause, which
> softened a wall into a sign without giving up the invariant the
> wall protected.

## What it is

A single answer to three moments that had been handled ad hoc.

**START.** What a session inherits: a synced tree, an injected
board, and — since the residue clause — a workspace swept of the
`claude/*` heads that cloud sessions leave behind and cannot delete
themselves. The sweep runs on a rule with its safety rails named:
zero-unique-work verified per head, HOLD on any live-session doubt,
otherwise delete plus a prune tripwire.

**PAUSE.** What an interruption leaves: the `interrupted` state in
[TEMPLATE](../memory/TEMPLATE.md)'s vocabulary and a ⏸ capture block
in the memory with every field filled — ORIGINAL MANDATE · THE PLAN
· DONE SO FAR · EXACT NEXT STEP · WHY PAUSED — so a resuming seat
can continue from that block alone. [pickup](../skills/pickup.md)
then LEADS its briefing with "⏸ INTERRUPTED — continue?".

**CLOSE.** What a closed session is: read-only, not dead. FULL
[handoff](../skills/handoff.md) and [liftoff](../skills/liftoff.md)
write `.claude/session-closed` as their last act; addressed after
that, the session answers by fresh derivation from origin, always
names the current baton-holder, and refuses every write, command act
and ritual.

## What raised it

Four irritations that turned out to be one theme.

**The wall was answering the wrong person.** The close-lock had been
a mechanical block — the prompt hook exiting 2, rejecting every
post-close input. It enforced a real invariant (one driving seat per
clone) by making a closed session useless to the founder standing at
the desk asking it a question, and forcing a pointless
open-a-fresh-session round-trip for what was only ever a question.

**Interrupts were losing their context.** Memory rewrites were
shaped for PLANNED parks — a handoff knows it is leaving. An Esc or
a founder redirect leaves mid-thought, and the memory format had
nothing that made resumption exact.

**Two founder-ordered one-offs wanted to be rules.** Five `claude/*`
branches had been swept by hand on 2026-07-24, and the inbox had
grown to 420 lines and been compacted once. Both were the founder
issuing an order that should not have needed issuing twice.

## What changed, in order

- **[#78](https://github.com/wsher0901/roam/pull/78) — the
  mechanics exist first.** Hardening and hygiene put the hooks on a
  standing footing; the lifecycle question is not yet named as one.
- **[D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  at [#211](https://github.com/wsher0901/roam/pull/211) — the whole
  theme is decided at once, in four clauses.**
  - *Closed ≠ dead.* The close-lock RECORD is unchanged; the WALL
    softens from `exit 2` to injected read-only doctrine (`exit 0`,
    stdout as context). **Full removal was rejected** — the
    two-writers risk is real, two sessions driving one clone
    corrupts state, and the softened wall still ends the session as
    a working seat. Strictness was explicitly KEPT where it earns
    its keep: a superseded cockpit stays TOMBSTONE-ONLY, because a
    replaced cockpit is a hazard rather than a reference desk, and
    the seat-stamp supersession law is untouched.
  - *Interrupt capture is standing format.* The ⏸ block, the
    `interrupted` state, and pickup's "continue?" lead. The park
    protocol is preserved intact alongside it: a LANE's diary still
    receives only the one-line park stamp, and the capture duty
    belongs to the tower, for tower-owned memories.
  - *The residue sweep is pickup hygiene.* Standing rule, rails
    named, and one thing forbidden outright — sweeping a `claude/*`
    head that carries unique commits, which is surfaced to the
    founder instead.
  - *IDEAS is an inbox, not an archive.* At every harvest, entries
    closed in an OLDER outing than the current one are deleted,
    because the closing artifact is the record and the ledger finds
    it. Two stays are written into the file's own header: a closed
    entry whose only record is itself, and a partly-closed entry.
- **The ruling was gate-made, which is itself the precedent.** The
  conventions were decided at #211's gate, on the pre-gate critic's
  ROUTING question — the founder's word made them decide-gated
  rather than task-local. A critic asking "where does this belong?"
  is what produced a D-number.

## Where it stands

Standing and unamended. Every clause is in daily use: the ⏸ block is
in the memory TEMPLATE, the residue sweep is a numbered pickup step,
the inbox rule is in IDEAS' header, and the softened wall is live in
`user-prompt-submit.mjs`.

**The clause worth re-reading is the first one, for its shape rather
than its content.** The wall was not wrong about the risk. It was
wrong about who paid for it — the cost of a hard block fell entirely
on the founder, while the risk it guarded against was two SESSIONS
writing at once. Separating the record (kept) from the wall
(softened) let the invariant survive at a fraction of the cost, and
the same move is available anywhere a guard's expense lands on the
person the system exists to serve.

Two things are worth flagging honestly for a later reader.

**The read-only doctrine is instructed, not enforced.** The hook
injects text telling a closed session to refuse writes and name the
current baton-holder; nothing mechanically prevents a session that
ignores that text from acting. This is a deliberate trade — the
alternative is the wall that was just removed — but it means the
clause's strength is the same as any other instruction's, unlike the
branch protection that backs
[D-038](../record/DECISIONS.md#d-038--ci-is-the-arbiter).

**The strictness carve-outs are the part most likely to be misread.**
"Closed ≠ dead" is a memorable phrase and it does NOT extend to a
superseded cockpit, which stays tombstone-only. A later seat reaching
for the friendly half of this ruling should check which case it is
in.

## Sources

Down-links only — this story cites the frozen record and the living
machinery beneath it, never another story's prose.

- [D-050](../record/DECISIONS.md#d-050--session-lifecycle-closed-is-not-dead)
  — the four clauses in full, the rejections, and the Affects list.
- [the session-lifecycle story](../record/history/workshop/mechanism/session-lifecycle.md)
  — [#211](https://github.com/wsher0901/roam/pull/211): the bench,
  the external review, and the two gate questions.
- [TEMPLATE](../memory/TEMPLATE.md) — the ⏸ capture block and the
  `interrupted` state row.
- [pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board) —
  the residue sweep as a numbered step.
- [IDEAS](../IDEAS.md) — the inbox rule and its two stays, in the
  file's own header.
- `.claude/hooks/user-prompt-submit.mjs` — the softened wall as it
  actually runs.
