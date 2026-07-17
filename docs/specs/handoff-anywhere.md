---
type: spec
id: handoff-anywhere
title: Handoff-anywhere — leave at any instant, nothing lost
status: shipped
stage: workshop
branch: docs/handoff-anywhere
pr: 155
opened: 2026-07-16
shipped: 2026-07-16 23:55
---

# handoff-anywhere — leave at any instant, nothing lost

**Links:** [handoff](../skills/handoff.md) ·
[pickup](../skills/pickup.md) · [liftoff](../skills/liftoff.md) ·
[ship §7 — the weld](../skills/ship.md#7--on-approval--the-atomic-weld)
·
[parallel-lanes §Wake-lock & parking](../skills/parallel-lanes.md#wake-lock--parking)
·
[D-032 — fleet continuity](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)

## Goal

The founder can hand off or lift off at ANY instant of any sitting —
mid-turn, mid-tool, mid-ritual — and nothing is lost or forgotten.
This spec enumerates every mid-state a sitting can be in and
verifies each parks clean. Most park clean today by construction
(pushed state + memory diaries — the 07-16 crash proved the
involuntary case live); the audit writes the missing lines:
watch-duty inheritance, the unanswered-`BLOCKED:` surface, and the
interrupt doctrine.

## The mid-state table

Every state a sitting can be interrupted in, and how it parks:

| #   | Mid-state                                          | Parks clean via                                                                                                                                                                                                                                            | Gap → line written by this bench                                                                          |
| --- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | Mid-turn / mid-tool (Esc pressed)                  | pushed commits hold all prior state; [handoff §1](../skills/handoff.md#1--secure-the-work) catches the working tree                                                                                                                                          | the interrupt doctrine paragraph (handoff intro) — declares it lawful                                       |
| 2   | Background watch running (canary · Actions · other) | nothing — watches die silently with the session                                                                                                                                                                                                             | watch-duty inheritance ([handoff §1.5](../skills/handoff.md#15--park-the-local-lanes-full-only)) + the [pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board) re-arm mirror |
| 3   | Local lane working                                 | [handoff §1.5](../skills/handoff.md#15--park-the-local-lanes-full-only) park protocol: rescue-save if needed, one stamped Status line ([D-032](../DECISIONS.md#d-032--2026-07--fleet-continuity--handoff-parks-every-local-lane-liftoff-respawns-parked-benches-wake-lock-parks-every-outcome-extends-the-d-020d-023-lane-law-upholds-d-009)) | —                                                                                                          |
| 4   | Local lane `BLOCKED:` — founder owes a reply       | parks at FULL (the machine is halting); the question survives in the PR's `BLOCKED:` comment                                                                                                                                                                | the owed reply surfaces as a Needs-you line — "lane #N awaits your reply" ([handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)) |
| 5   | Cloud lane flying or blocked                       | machine-independent — handoff never parks or touches it; a blocked cloud lane idle-waits; its Sessions row carries it                                                                                                                                        | —                                                                                                          |
| 6   | Micro-PR armed, awaiting green                     | auto-merge is GitHub-side and fires machine-off; a merge that never fired is healed by [pickup §2](../skills/pickup.md#2--self-heal)                                                                                                                         | —                                                                                                          |
| 7   | Bench half-born (branch pushed, PR not yet)        | every birth step pushes before the next; the branch is already visible to the claim check; the next cockpit completes the birth                                                                                                                              | —                                                                                                          |
| 8   | Mid-liftoff, between spawns                        | [liftoff §5](../skills/liftoff.md#5--handshake-verify-each) writes airborne / failed / held per lane as each resolves; unspawned items still carry their parked or bench-ready Status — nothing is silently parked                                            | —                                                                                                          |
| 9   | THE WELD's atomic commit                           | the weld is ONE commit — before it nothing claims done; after the push, auto-merge completes machine-off; `check:ledger` nets a dropped piece                                                                                                                | the doctrine names it the one no-interrupt window (seconds long)                                            |

## Routing (the one-home call)

The interrupt doctrine lives in handoff's intro, NOT
[HOME](../HOME.md): the routing law sends conditional knowledge
(when leaving) to the relevant skill; handoff is the leaving ritual
and [liftoff §1](../skills/liftoff.md#1--full-handoff-first) runs it
first, so one home covers both roads. HOME stays rule-free per its
own header (it explains and links, duplicates no rule).

## Out of scope

- New mechanisms or rituals — this bench writes doctrine lines into
  existing homes only.
- [go-remote](../skills/go-remote.md) — the tether keeps the session
  alive; nothing parks.
- Automating watch re-arming — the named record plus pickup's read
  IS the mechanism.

## Plan

1. Bench birth: branch · this spec · memory stub · draft PR.
2. [handoff §1.5](../skills/handoff.md#15--park-the-local-lanes-full-only)
   — the watch-duty inheritance line.
3. [pickup §3](../skills/pickup.md#3--gather-git-outranks-the-board)
   — the mirror line: re-arm every named watch.
4. [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
   — Needs-you invariant: "lane #N awaits your reply".
5. handoff intro — the interrupt doctrine paragraph (one home; see
   §Routing).
6. Verification greps + full CI mirror + Actions green → THE GATE.

## Done means

- [x] The mid-state table is complete: all nine states enumerated,
      each verified parking clean or gaining its line.
- [x] handoff §1.5 names watch-duty inheritance — "watching #N for
      X" written at park.
- [x] pickup §3 carries the mirror line: re-arm every named watch
      found.
- [x] handoff §4's Needs-you invariants include "lane #N awaits
      your reply" for an unanswered `BLOCKED:` lane.
- [x] The interrupt doctrine paragraph exists in exactly ONE home
      (handoff intro), naming Esc and THE WELD's no-interrupt
      window.
- [x] Verification greps pass (§Verification).
- [x] Full CI mirror green; the pushed commit's Actions run green.
      (Ticked at the weld — the box describes the very Actions run
      that can only exist after this spec's final commit; verified
      green by the cockpit before THE GATE.)

## Verification

- grep `watching #N for X` → hits in `docs/skills/handoff.md` AND
  `docs/skills/pickup.md`.
- grep `awaits your reply` → hit in `docs/skills/handoff.md` §4.
- grep `Esc` and `no-interrupt` → the doctrine paragraph in
  handoff's intro, and no second home.
- The mid-state table lists all nine: mid-turn/mid-tool ·
  background watch · local lane working · local lane `BLOCKED:` ·
  cloud lane flying or blocked · micro-PR armed · bench half-born ·
  mid-liftoff between spawns · THE WELD.

## Deviations

None from the plan. One in-flight fix worth naming: the first draft
of the handoff edits wrapped the greppable phrases across line
breaks, so the verification greps failed; rewrapped so each phrase
sits whole on one line (the memory's story carries the lesson).

## Open questions

none
