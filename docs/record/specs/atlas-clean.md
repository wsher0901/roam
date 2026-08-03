---
type: spec
id: atlas-clean
title: The Atlas no-scroll law (D-072)
status: draft
stage: workshop
branch: docs/atlas-clean
opened: 2026-08-03
---

# atlas-clean — the no-scroll law, and the two missing chains

**Links:** [ATLAS](../../ATLAS.md) (the page gaining a law and a
diagram) · [HOME](../../HOME.md) (one files-table row) ·
[IDEAS](../../IDEAS.md) (one appended line) · source: the founder's
approved ruling, Web ops chat 2026-07-31.

## Goal

[ATLAS](../../ATLAS.md) is the page a cold reader opens to see the
workshop whole. Today it cannot be READ that way. Its node labels
carry SENTENCES — one runs past 130 characters — so mermaid renders
boxes wider than any screen, and two diagrams flow left-to-right on
top of that. The reader scrolls sideways to finish a single box, and
the shape of the system, which is the entire reason the page exists,
is lost behind the horizontal bar.

The cause is a category error, not sloppiness: a node was being used
as a place to explain. That is prose's job, and ATLAS already has
prose under every diagram plus a Boxes line linking each doctrine's
real home. So this bench writes the rule down as a law in ATLAS's
own header — TOP-DOWN ONLY, and A NODE LABEL IS A NAME, NEVER A
SENTENCE — brings all seven existing diagrams under it, and hands
every displaced sentence to the prose or to the linked home that
already owns it.

Two chains are missing while we are here, and both are chains a
newcomer needs before any other diagram makes sense:

- **Where work comes from.** Diagram 1 starts at "freshly pulled
  main" — the bench already exists. Nothing draws how a voiced
  thought BECOMES a bench: the [IDEAS](../../IDEAS.md) line, the
  [decide](../../skills/decide.md) triage, the
  [ROADMAP](../../ROADMAP.md) line. The single-inbox law is one of
  the most-cited rules in the workshop and it appears in no picture.
- **What a sitting is.** Seven diagrams draw tasks, lanes, seats,
  and surfaces; none draws the ordinary ground day end to end —
  hook, pickup, work, handoff, close-lock, a closed session that is
  read-only but not dead.

ATLAS's posture is unchanged: IT RENDERS, IT ORIGINATES NOTHING.
The rendering law is about ATLAS's own presentation, which is the
one thing ATLAS does own.

## Out of scope

- **No doctrine changes.** Not one rule is altered, softened, or
  invented. Every sentence leaving a node is a sentence that must
  already exist elsewhere; where it does not, it is written into
  the section PROSE, never into a new rule.
- **No master fence touched** — [COCKPIT-CHARTER](../../COCKPIT-CHARTER.md)
  and the other box masters are fences and a bench does not edit a
  fence ([D-065](../DECISIONS.md#d-065--the-box-master-diet)).
- **No LAWS, no skills, no DASHBOARD** beyond a citation the sweep
  proves stale.
- **No width lint built.** The mechanical gate that would keep the
  law true forever is the right idea and the wrong bench — it goes
  to [IDEAS](../../IDEAS.md) as a line, per the single-inbox law.
- **No new diagrams beyond the two named.** The census question
  "what else is undrawn?" stays closed.

## Plan

1. **[decide](../../skills/decide.md) runs first** — D-072, short
   heading per [D-068](../DECISIONS.md#d-068--the-short-anchor-law),
   with Decision · Why · Alternatives rejected · Affects. The entry
   and its ripple ride ONE commit.
2. **ATLAS's header** gains THE RENDERING LAW beside "THIS PAGE
   RENDERS, IT ORIGINATES NOTHING"; seven → eight diagrams; the
   stamp restamped from a clock read, the born line untouched.
3. **THE REWRAP**, all seven existing diagrams:
   - Diagrams 2 and 6 convert `flowchart LR` → `flowchart TD`.
   - Every over-cap label becomes a short NAME — at most two lines
     via `<br/>`, no line over 45 characters.
   - **The standing duty, per the verification law:** every
     sentence removed from a node is VERIFIED present in that
     diagram's section prose, in a Boxes-line target, or in the
     linked skill — and written into the section prose if it lives
     nowhere. Receipts in the memory, one per displaced sentence.
   - Diagram 7's judgment box becomes
     `JUDGMENT ONLY —<br/>four joints, named below`, its four
     joints verified present in the section prose; the three hook
     boxes, the denies box and the summon box become names, their
     duties resting on [HOME](../../HOME.md)'s files table and the
     existing apart-from-the-cascade paragraph.
   - Diagram 3's MODE P, DESK TAKEOVER and AUTO-LAND boxes become
     names; their dropped clauses are [land](../../skills/land.md)'s
     and [pickup](../../skills/pickup.md)'s own law text — cited,
     never restated.
4. **Diagram 1 gains THE INTAKE BAND** upstream of the bench node:
   voiced idea or defect → the [IDEAS](../../IDEAS.md) line (the
   entry contract) → [decide](../../skills/decide.md), the triage →
   the [ROADMAP](../../ROADMAP.md) line → the bench. The Boxes line
   gains IDEAS, decide, and the roadmap manual.
5. **New `## 8 · A sitting`** — the ground cycle, `flowchart TD`,
   labels under the law: session-start hook (pull · board ·
   close-lock cleared) → pickup (the claim + the sit-down) → the
   work loop, one node pointing at diagram 1 → handoff FULL
   (capture → park → repaint → close report → close-lock) → the
   closed session, the prompt hook stamping it read-only → the next
   sitting. One side node: QUIET — ship's tail, welds only. Boxes:
   pickup · handoff §4 · the hooks' HOME rows · the close-lock
   Terms row.
6. **[HOME](../../HOME.md)** — the files-table ATLAS row only,
   seven → eight.
7. **[IDEAS](../../IDEAS.md)** — one appended line per the entry
   contract: the ATLAS WIDTH GATE, a standing lint (max label line
   ≤48 chars, TD only) so the law survives future re-renders
   mechanically.
8. **THE SWEEP**, per the sweep law: destination-grep
   `seven diagrams` across the tree; living files edit normally;
   frozen record — shipped specs, `record/history/`, and any
   `In full:` quotation under the
   [D-068](../DECISIONS.md#d-068--the-short-anchor-law) carve-out —
   stays verbatim and is NAMED in the memory. The proof is a re-run
   returning zero over living files.
9. **Verification**, then ship to THE GATE. Tower-authored: the
   external Web review precedes the founder's word. DO NOT MERGE.

## Done means

- [x] D-072 exists in the
      [D-068](../DECISIONS.md#d-068--the-short-anchor-law) format —
      short heading, `In full:`, Decision · Why · Alternatives
      rejected · Affects — and its Affects line matches the files
      actually edited, exactly.
- [x] ATLAS's header carries THE RENDERING LAW in plain lines, says
      EIGHT diagrams, and is restamped from a clock read; the born
      line is unchanged.
- [x] EVERY mermaid block on the page is `flowchart TD` — diagrams
      2 and 6 converted.
- [x] THE WIDTH PROOF, run MECHANICALLY, not by eye: every label
      line on the page scanned against the 45-character cap and
      every block against TD orientation, ZERO VIOLATIONS, the
      result recorded in the memory.
- [x] VERIFY-BEFORE-DROP RECEIPTS: every sentence that left a node
      is named in the memory with where it now lives — section
      prose, a Boxes-line target, or the linked skill. Nothing
      unrecorded was dropped.
- [x] Diagram 7's four judgment joints are all four present in the
      section prose, verified rather than assumed.
- [x] Diagram 1 draws the intake band ending at the bench, and its
      Boxes line cites IDEAS, decide, and the roadmap manual.
- [x] §8 renders the ground cycle end to end, including the QUIET
      side node and the closed-session read-only state, every box
      linking a PROSE home.
- [x] HOME's files-table ATLAS row says eight diagrams.
- [x] ALL EIGHT MERMAID BLOCKS PARSE against the real grammar
      (`mermaid.parse()` under `jsdom`, packages `--no-save`, tree
      restored with `npm ci`), not merely eyeballed.
- [x] THE SWEEP PROVEN: a destination-grep re-run returns zero over
      living files, and every frozen survivor is named in the
      memory with why it stands.
- [x] Nothing outside the named files is touched: ATLAS · HOME (one
      row) · DECISIONS · IDEAS · sweep-proven pointers if any · this
      spec + memory.
- [x] `check:links` · `check:ledger` · `check:memory` · lint ·
      format · test · build green; Actions green on the PUSHED head;
      [ship §6](../../skills/ship.md#6--the-gate) critic run.
