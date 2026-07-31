---
type: spec
id: anchor-diet
title: The short-anchor law (D-068)
status: open
stage: workshop
branch: docs/anchor-diet
pr: —
opened: 2026-07-31
shipped: —
---

# anchor-diet — short stable anchors for the decision ledger

**Links:** [DECISIONS](../DECISIONS.md) (the ledger being
retrofitted) · [decide](../../skills/decide.md) (the writer whose
format changes) · promotes and closes the open LAWS-ANCHOR line in
[IDEAS](../../IDEAS.md) · source: the founder's approval, Web ops
chat 2026-07-30.

## Goal

Decision headings grew into full statements, so their GitHub
anchors grew with them — the newest runs 1,038 characters and is
cited five times. Anchors are quoted ambient-wide: every law, every
skill, every story, every frozen shelf. Their cost is paid on every
read of every citing file, forever.

THE SHORT-ANCHOR LAW: a decision heading carries a SHORT NAME (8
words maximum). The complete statement moves verbatim into the
entry body as its first line, `In full: …`. The anchor freezes at
mint — a short name is never edited afterwards, because every
citation in the repo depends on it.

The retrofit of D-001..D-067 is a CONTENT-PRESERVING format change
sanctioned by the retroactivity law. Append-only protects the
WORDS, not their position on the page: every word survives, moved
one line down.

## Out of scope

- **Entry bodies.** Nothing inside an entry changes except the
  inserted `In full:` line.
- **Any master's fence.** The version-history tables of
  [WEB-INSTRUCTIONS](../../WEB-INSTRUCTIONS.md),
  [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md) and
  [LANE-WORKER](../../LANE-WORKER.md) sit BELOW their fences and
  are edited as ordinary prose — no box re-save or re-paste
  results.
- **Frozen shelves' prose.** `record/history/` · `record/specs/` ·
  `chronicle/` · `record/retired/` · `record/probes/` take
  POINTER-ONLY repairs; not one other character moves.

## Plan

1. Bench birth: branch, this spec, memory stub, draft PR.
2. Run [decide](../../skills/decide.md) for D-068 — minted in the
   NEW format as its own first instance, title "the short-anchor
   law".
3. [DECISIONS](../DECISIONS.md): retrofit D-001..D-067. Each
   heading becomes `## D-0XX — <short name ≤8 words>`; the
   existing heading text after the D-number moves verbatim to
   `In full: …` directly beneath it. STANDING DUTY, per entry:
   diff-verify that every word of the old heading survives —
   nothing dropped, nothing paraphrased.
4. [decide](../../skills/decide.md): the entry format updated to
   the heading law, with one line on why.
5. THE CITING SWEEP by destination-grep — every
   `DECISIONS.md#d-` occurrence in the tree, never a predicted
   phrasing — re-pointed to the new short anchors. Living files
   edit normally; frozen files take pointer-only repairs, each
   named in the memory.
6. [IDEAS](../../IDEAS.md): the LAWS-ANCHOR line closes 🟢 via
   this bench and moves to CLOSED per the entry contract.
7. Verification loop, full CI mirror, Actions green, ship §6
   critic; ship to THE GATE. Tower-authored — external Web review
   precedes the founder's word.

## Done means

- [ ] D-068 exists in the NEW format, with Decision · Why ·
      Alternatives rejected · Affects, and states the heading law,
      the `In full:` line, the freeze-at-mint rule, and the
      retrofit's sanction.
- [ ] All 67 prior entries carry a short heading (≤8 words) and an
      `In full:` line whose text is the old heading verbatim.
- [ ] WORD-PRESERVATION PROVEN MECHANICALLY: every word of every
      old heading is present in its `In full:` line, checked by
      script against the pre-retrofit file, zero exceptions.
- [ ] [decide](../../skills/decide.md) carries the heading law and
      its one-line why.
- [ ] Every `DECISIONS.md#d-` citation in the tree points at a
      short anchor; `check:links` green is the proof.
- [ ] Frozen-shelf files took pointer-only repairs — proven by a
      diff that shows changed anchor text and nothing else — and
      each is named in the memory.
- [ ] No master's fence changed; no box re-save results.
- [ ] [IDEAS](../../IDEAS.md): the LAWS-ANCHOR line closes 🟢 with
      this PR as its vehicle, in CLOSED per the entry contract.
- [ ] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the pushed
      head; ship §6 critic run.

## Deviations

<filled by ship>

## Open questions

None at birth. The 67 short names are the bench's judgment call,
distilled from each entry's own words; the `In full:` line makes
every one of them auditable against the original.
