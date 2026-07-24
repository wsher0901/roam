---
type: spec
id: session-lifecycle
title: Session lifecycle — close-lock softening, interrupt capture, and the two cleanup gaps
status: open
stage: workshop
branch: docs/session-lifecycle
pr: —
opened: 2026-07-23
shipped: —
---

# session-lifecycle — what a session's start, pause, and close leave behind

**Links:**
[liftoff](../skills/liftoff.md) · [handoff](../skills/handoff.md) ·
[pickup](../skills/pickup.md) ·
[TEMPLATE](../memory/TEMPLATE.md) · [IDEAS](../IDEAS.md) ·
[HOME](../HOME.md) ·
[D-049](../DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely)
(the self-URL the residue sweep and self-seat idea build on)

## Goal

One theme: what a session's start, pause, and close leave behind —
made deliberate. Four mechanisms and two queued ideas:
1. **Close-lock softening** — closed ≠ dead: a closed session
   stays READ-ONLY CONVERSATIONAL (fresh derivation from origin,
   names the baton-holder, refuses every write/command/ritual);
   the close-lock RECORD is unchanged, the WALL softens.
   Strictness kept: R4b's superseded-cockpit tombstone stays
   tombstone-only; the seat-stamp supersession law untouched.
2. **Interrupt capture** — interrupted work leaves a structured
   block (mandate · plan · done · exact next step · why paused),
   an `interrupted` state, and a pickup briefing that LEADS with
   "⏸ INTERRUPTED — continue?".
3. **Gap A** — the `claude/*` residue sweep mechanized in pickup
   (cloud sessions lazily leave workspace heads and cannot delete
   branches — the C7 rail; five swept ad-hoc on 2026-07-24).
4. **Gap D** — IDEAS compaction: an inbox, not an archive; closed
   lines older than the current outing are deleted at harvest —
   the closing artifact is the record.
Plus two deduped IDEAS appends (the chronicle layer · self-seat
birth) and one in-theme polish (liftoff rung 3's summon-engine
wording).

## Out of scope

- Any weakening of R4b's tombstone or the seat-stamp supersession
  law — strictness KEPT by mandate.
- The self-seat birth itself — queued as its own bench (IDEAS).
- The chronicle layer — queued after WEB-INSTRUCTIONS v5, its own
  chat.
- Extending `scripts/check-memory.mjs` unless verification proves
  the added TEMPLATE section breaks it (it excludes TEMPLATE and
  tolerates extra sections — verified before writing; no change
  expected).

## The wall lives in a hook — the one file beyond the mandate's list

The close-lock's WALL is not ritual text: it is
`.claude/hooks/user-prompt-submit.mjs`, which exits 2 on any
prompt after the flag and physically rejects the founder's
message before a session could answer read-only. Doctrine-only
softening would ship an instruction that cannot operate — the
exact defect class [#204](https://github.com/wsher0901/roam/pull/204)
audited out. Per the gap-in-the-mandate precedent
([#197](https://github.com/wsher0901/roam/pull/197): fixed,
flagged loudly, approved at the gate), the hook is softened in
this bench: on a closed session it now exits 0 and INJECTS the
read-only-conversational doctrine as context instead of blocking.
The close-lock record (`.claude/session-closed`, written by the
rituals; cleared by session-start) is untouched. Flagged here for
the founder's word at the gate.

## Plan

1. Close-lock softening: [liftoff §7](../skills/liftoff.md) ·
   [handoff §6](../skills/handoff.md) · HOME's two close-lock
   passages + one new Terms line ("closed ≠ dead") · the hook
   (above).
2. Interrupt capture: [TEMPLATE](../memory/TEMPLATE.md) gains the
   ⏸ block and the `interrupted` state row · handoff §3 gains the
   capture duty for tower-parked interrupted work (a lane's diary
   stays the lane's — the park protocol's one-line limit is law) ·
   pickup §5 LEADS with the ⏸ line when any memory carries
   interrupted Status.
3. Gap A: pickup §3 gains the standing `claude/*` sweep — list
   heads · verify zero unique commits vs main · live-session doubt
   = HOLD and ask (archive-before-delete, the resurrection rule) ·
   else delete + the 60s `fetch --prune` tripwire. HOME's pickup
   portrait points at it.
4. Gap D: the compaction rule into IDEAS' header + handoff §3's
   harvest step; the FIRST compaction performed here, counts in
   the memory.
5. IDEAS appends, deduped: the chronicle layer · self-seat birth.
6. Polish: liftoff rung 3 reads "the summon engine, fired
   locally".

## Files touched — the mandate list, plus one flagged gap

[liftoff](../skills/liftoff.md) · [handoff](../skills/handoff.md)
· [pickup](../skills/pickup.md) ·
[TEMPLATE](../memory/TEMPLATE.md) · [IDEAS](../IDEAS.md) ·
[HOME](../HOME.md) · `.claude/hooks/user-prompt-submit.mjs` (the
gap above, flagged) · this spec +
[the memory](../memory/session-lifecycle.md) ·
[DASHBOARD](../DASHBOARD.md) via the ship tail.
`scripts/check-memory.mjs`: untouched — verification confirmed
tolerance (it skips TEMPLATE and checks the six headings as an
ordered subset).

## Done means

- [ ] The read-only-close clause present in BOTH rituals' close
      steps (grep), HOME's two passages agree, the Terms line
      exists, and the hook injects instead of blocking.
- [ ] R4b's tombstone and the seat-stamp law byte-untouched.
- [ ] TEMPLATE carries the ⏸ interrupt block and the
      `interrupted` state row; handoff §3 carries the capture
      duty; pickup §5 carries the ⏸ lead line (grep).
- [ ] `check:memory` green with the changed TEMPLATE — explicitly
      including TEMPLATE tolerance (it is excluded by the
      validator and extra sections are tolerated); the validator
      unchanged, or minimally extended with the reason recorded.
- [ ] The `claude/*` sweep clause present in pickup §3 (grep);
      HOME's pickup portrait points at it.
- [ ] The compaction rule in IDEAS' header AND handoff §3's
      harvest step (grep); the first compaction performed —
      before/after line counts in the memory.
- [ ] The two queued ideas appended, deduped against the inbox.
- [ ] Liftoff rung 3 reads "the summon engine, fired locally".
- [ ] `check:links` · `check:ledger` · `check:memory` green.
- [ ] Full CI mirror green locally AND the pushed head's Actions
      run green.
- [ ] [ship §6](../skills/ship.md) critic runs; verdict rides to
      the founder verbatim.

## Pending

**The queue after this bench** (founder-stated, recorded in
[IDEAS](../IDEAS.md) by this bench): SELF-SEAT BIRTH — its own
small bench, next after this one. THE CHRONICLE LAYER — after
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) v5, its own chat. The
v5 rewrite itself stays queued
(named by [#204](https://github.com/wsher0901/roam/pull/204)).

## Deviations

<filled by /ship: anything done differently than planned — or "none">

## Open questions

The hook gap (above) carries to THE GATE for the founder's word.
This bench ships to the gate and does NOT merge.
