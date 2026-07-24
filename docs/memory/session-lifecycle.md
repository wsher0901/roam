---
type: memory
id: session-lifecycle
updated: 2026-07-23 23:19 · complete · home PC
---

# session-lifecycle — what start, pause, and close leave behind

## Status

complete, awaiting merge — 2026-07-23 23:19 · home PC. All six
mandate items are applied and verified: the close-lock softened to
read-only conversational in both rituals + HOME + the wall hook
(the one flagged gap file) · the ⏸ interrupt capture in TEMPLATE,
handoff, and pickup · the `claude/*` residue sweep as standing
pickup hygiene · IDEAS' compaction rule + the FIRST compaction
(420→266 lines, 11 deleted, 24 kept) · the two queued ideas
appended · the rung-3 polish. At THE GATE — tower-authored, so
external Web review precedes the founder's word. DO NOT MERGE.

## What this task is

One theme — what a session's start, pause, and close leave
behind, made deliberate: closed ≠ dead (the record unchanged, the
wall softened; R4b tombstone and seat-stamp law kept strict) ·
interrupted work leaves a structured ⏸ capture block and pickup
leads with "continue?" · cloud workspace residue is swept on a
standing rule, not ad-hoc founder orders · IDEAS is an inbox, not
an archive. Contract: [the spec](../specs/session-lifecycle.md).

## Pending issues

- **The one file beyond the mandate's list, for the founder's
  word at the gate:** the close-lock's wall is
  `.claude/hooks/user-prompt-submit.mjs` (it exited 2 on any
  prompt after the flag — doctrine-only softening could not
  operate). Softened per the
  [#197](https://github.com/wsher0901/roam/pull/197)
  gap-in-the-mandate precedent: on a closed session it now exits
  0 and injects the read-only doctrine as context. Both paths run
  live at implementation.
- Founder context on record, NOT re-flagged: the cockpit routine
  box re-saved 07-24 post-D-049 · the seat debt cleared this
  sitting.
- Tower-authored → external Web review before the word. DO NOT
  MERGE.

## Left / idle

Nothing is left on the bench — verification is at the gate. The
queue after the word, both founder-stated and now in
[IDEAS](../IDEAS.md): SELF-SEAT BIRTH (its own small bench, next)
· THE CHRONICLE LAYER (after
[WEB-INSTRUCTIONS](../WEB-INSTRUCTIONS.md) v5, its own chat).

## The story

**Birth.** STEP 0 held: the board-seat-armed micro
([#210](https://github.com/wsher0901/roam/pull/210)) had landed
and pruned; origin heads = `main` only; the bench cut from
`058cf40`. Pre-birth recon settled the two design questions the
mandate left open, both worth keeping:

**The validator needed nothing.** `scripts/check-memory.mjs`
excludes TEMPLATE by name and checks the six headings as an
ordered SUBSET — so the TEMPLATE's new ⏸ block and any extra
section in a real memory pass untouched. Verified by reading the
validator BEFORE writing, then by a green run after the TEMPLATE
edit. The mandate's "extend only if it objects" clause never
fired.

**The wall was a hook, not text.** The close-lock's rejection
lived in `.claude/hooks/user-prompt-submit.mjs` — exit 2, prompt
blocked, "open a fresh claude". Softening only the ritual text
would have shipped an instruction that cannot operate — the exact
defect class the currency audit
([#204](https://github.com/wsher0901/roam/pull/204)) exists to
kill. The hook was ruled the one lawful gap-file per the
[#197](https://github.com/wsher0901/roam/pull/197) precedent
(fixed · flagged loudly · the founder's word at the gate): it now
exits 0 on a closed session and injects the doctrine — read-only
conversational, fresh derivation, name the baton-holder, refuse
every write/command/ritual, tombstone-only for a superseded
cockpit. Both paths were run live before commit: silent exit 0
without the flag; doctrine on stdout + exit 0 with it. The
close-lock record and session-start's flag-clearing are
byte-untouched.

**The park protocol shaped the capture duty.** The mandate said
"handoff gains the capture duty when parking interrupted work" —
but a LANE's diary may receive exactly ONE tower-written line at
park (the park protocol, LAWS). So the duty landed in handoff §3,
scoped to tower-owned memories, with the limit stated in place; a
lane's own ⏸ capture remains the lane's job at its trigger
moments. The mandate's letter and the law both hold.

**The first compaction, mechanized with tripwires.** The census
before touching anything: 11 entries explicitly CLOSED or
SUPERSEDED in outings older than this one; the winpty and
four-smaller entries PARTLY open (kept whole); the cloud-birth
probe entry closed but its record living only in itself (kept —
and the header rule gained a stay clause naming exactly that
case). The sweep ran as a script with two safety asserts — every
deleted entry must carry a closure marker, and the count must
equal the census. The first run THREW: two markers straddled
prettier's line reflow ("the summon / button", "non-author /
review purity") and only 9 matched. Fixed to line-safe markers,
re-run: 11 deleted, 24 kept, 420→266 lines, zero collateral. The
assert-first shape is the lesson — a compaction that deletes
record-adjacent text should refuse to run on a census mismatch.

**The eleven deleted, enumerated** (so a later reader can confirm
independently, not trust the narration; each was explicitly
CLOSED/SUPERSEDED before this outing, closing artifact in
parentheses): 1. the double-dispatch diagnosis (closed 07-19,
[#175](https://github.com/wsher0901/roam/pull/175)'s gate) ·
2. the Slack/Telegram doorbell mirror (superseded 07-17,
clerk-notify) · 3. the airborne-ack em-dash/middot disagreement
(closed 07-22, [#193](https://github.com/wsher0901/roam/pull/193))
· 4. the watcher self-match trap (07-22, #193) · 5. the cockpit
API-flap-no-fallback defect (07-22,
[#195](https://github.com/wsher0901/roam/pull/195),
rejected-and-replaced) · 6. the staged summon button (07-22, #195,
shipped live) · 7. the setup-script exit-100 (07-22, #193) ·
8. the truncated birth prompt / board-governs (07-22, #193) ·
9. the stray `.local` device-id gitignore (07-22, #193) ·
10. non-author review purity (07-22, #193) · 11. the clerk
retirement execution note (07-23 midday,
[#197](https://github.com/wsher0901/roam/pull/197)). The script
itself was ephemeral by the mandate's file list (no new
machinery); its logic, for the record: split the file into
top-level dated entries · match each against the census's unique
markers · assert every match contains CLOSED or SUPERSEDED ·
assert the match count equals the census (11) · only then write.

**The rest landed flat:** liftoff §7 and handoff §6 carry the
read-only close; HOME's two close-lock passages agree and Terms
gained "closed ≠ dead"; pickup §3 carries the standing sweep
(zero-unique-work check · live-session HOLD · delete + 60s prune
tripwire — the tripwire wording carries the gh-second-path
lesson that workspace branches are born lazily); pickup §5 leads
with ⏸ when any Status reads interrupted; the two queued ideas
went in deduped; rung 3 reads "the summon engine, fired locally".

## Where to look

- [the spec](../specs/session-lifecycle.md) — the contract; the
  hook gap is its own section; Deviations records the compaction
  asserts.
- [#211](https://github.com/wsher0901/roam/pull/211) — the draft
  PR.
- [#197](https://github.com/wsher0901/roam/pull/197) — the
  gap-in-the-mandate precedent the hook fix rides on.
- [TEMPLATE](../memory/TEMPLATE.md) — the ⏸ block and the
  `interrupted` state row.
- [IDEAS](../IDEAS.md) — the compaction rule in the header; the
  chronicle-layer and self-seat-birth entries at the tail.
