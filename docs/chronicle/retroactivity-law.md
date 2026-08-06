---
type: chronicle-story
shelf: III — the information system
status: living
updated: 2026-08-06 · written · cloud lane
---

# The retroactivity law and the currency sweeps

> **CURRENT ENDING (2026-08-06).** When a convention is adopted OR
> CHANGED, every pre-existing file is backfilled in the SAME PR; any
> gap found later is repaired the moment it is found, in the current
> PR or a chore PR. The law has a repeatable vehicle — the currency
> sweep — and a companion minted later:
> [D-069](../record/DECISIONS.md#d-069--the-law-register-and-the-manual-groom)'s
> **SWEEP LAW**, which governs how a sweep is performed rather than
> when. **The census cell is STALE on its one derivable claim.** It
> names [#204](https://github.com/wsher0901/roam/pull/204) as "the
> practice's last full run"; the retrofit of D-001 through D-067
> under
> [D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) is a
> later and far larger one — sixty-seven frozen entries reformatted
> in the minting PR, explicitly sanctioned by this very law. The
> cell also predates the sweep law entirely.

## What it is

The rule that stops the corpus from stratifying into layers by age.

Its content is one sentence — adopt or change a convention, backfill
everything in the same PR — but its force comes from where the
backfill sits. **In the same PR** means a convention change is not
"done" when the rule is written; it is done when nothing in the repo
still contradicts it. That single placement is what prevents the
common failure of a documented standard that only the newest files
follow.

The second clause covers what the first cannot: any later-found gap
is repaired the moment it is found. Sweeps are therefore not a
scheduled ritual but a response — the currency sweep is the vehicle
that runs when someone suspects the corpus has drifted from its own
rules.

## What raised it

Repo hygiene ([#57](https://github.com/wsher0901/roam/pull/57)) —
line endings pinned and old docs woven — and the run of
consolidations that followed it. Each consolidation retired a file
and re-homed its content, and each one raised the same problem: what
happens to every existing link and mention that still points at the
thing you just retired?

Answering that once per consolidation would have been a policy.
Answering it as a standing law is what made the retirement pattern
repeatable — and the retirements did repeat, four times in quick
succession.

## What changed, in order

- **[#57](https://github.com/wsher0901/roam/pull/57) — hygiene, and
  old docs woven.** The first backfill of an adopted convention.
- **[#76](https://github.com/wsher0901/roam/pull/76) — HOME v3.**
  The encyclopedia takes shape and inherits the currency problem.
- **[#78](https://github.com/wsher0901/roam/pull/78) — the phase-5
  hardening sweep**, the final ops phase.
- **[D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  — retirement becomes a pattern.** HANDOFF.md and SHIPLOG.md are
  retired and the shiplog's 35 entries live on as backfilled history
  files. Retiring a file with its content preserved elsewhere is the
  shape every later consolidation copies.
- **[D-030](../record/DECISIONS.md#d-030--setup-consolidation) — the
  successor-of-record idea.** SETUP.md absorbs equipment-plan and
  PROJECT-POLICY, and the entry states the backfill rule precisely:
  every frozen link to either retired file RETARGETS to SETUP.md,
  while frozen PROSE keeps the historical names. That split —
  repair the pointers, preserve the words — is the retroactivity
  law's operating compromise with the append-only record, and it
  recurs.
- **[D-033](../record/DECISIONS.md#d-033--telemetry-folds-into-facts)
  — the same pattern again.** TELEMETRY folds into FACTS Appendix C;
  the entry's Affects line enumerates the frozen link repairs by
  name.
- **[#121](https://github.com/wsher0901/roam/pull/121) — the leg-end
  restyle sweep.** Every living doc carries its links below the
  prose. This is the law's migration-by-ratchet clause discharged in
  one pass: a convention adopted earlier, backfilled across every
  file the leg had not already touched.
- **[#128](https://github.com/wsher0901/roam/pull/128) ·
  [#130](https://github.com/wsher0901/roam/pull/130) ·
  [#132](https://github.com/wsher0901/roam/pull/132) — three
  currency passes.** The skills precision pass codifies
  already-decided behaviour across five skills and retires the
  abort-ledger ghost; the HOME currency pass closes six
  newcomer-test gaps; the retroactivity sweep repairs three
  later-found gaps by name — a surviving Cloud-ledger ghost,
  a non-vocabulary "waiting", and two missing recall routes.
- **[#134](https://github.com/wsher0901/roam/pull/134) ·
  [#144](https://github.com/wsher0901/roam/pull/144)** — LAWS
  tightness and the July full-pass audit.
- **[#197](https://github.com/wsher0901/roam/pull/197) — the clerk
  retirement, where the risk INVERTED.** The founder deleted the
  cloud clerk routine ahead of the trigger its retirement had been
  staged to, so the paper outlived the vehicle rather than the other
  way round. Every live instruction reaching for a thing that could
  no longer fire had to be found and fixed — the retroactivity law
  applied to a retirement nobody had scheduled.
- **[#204](https://github.com/wsher0901/roam/pull/204) — the docs
  currency audit, and the sharpest statement of what staleness IS.**
  Its catch was not a missed link but the NEXT generation of
  staleness: a verify-before-rely instruction whose verification had
  already happened, a doctrine landed in one home but not its
  manual, a shipped spec reading as a recipe carrying two disproven
  shapes, and a per-machine obligation missing from the per-machine
  procedure. Annotation beat deletion throughout — four dated
  supersession notes as blockquotes, ZERO deletions, zero
  record-body rewrites — and orphans were established by an
  inbound-reference census rather than by eyeball.
- **[D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) —
  the largest backfill on record, and the census misses it.** Sixty-
  seven frozen DECISIONS entries reformatted in the minting PR,
  named in the entry as "a content-preserving format change
  sanctioned by the retroactivity law". The justification is the
  same compromise D-030 reached: append-only protects the words, and
  every word survives one line lower.
- **[D-069](../record/DECISIONS.md#d-069--the-law-register-and-the-manual-groom)
  — THE SWEEP LAW is minted, and it is paid for four times over.**
  Any pointer or citation sweep greps THE DESTINATION — the heading,
  anchor or name being replaced — never the phrasings you predict
  will surround it, and **the proof of a sweep is a re-run returning
  zero.** The entry names the tuition: most sharply
  [#250](https://github.com/wsher0901/roam/pull/250), where a
  re-sweep reported CLEAN because it was still the wrong grep, and
  [#253](https://github.com/wsher0901/roam/pull/253), where an
  underscore hid forty citations.

## Where it stands

Standing, with a vehicle, and now with a companion that governs the
vehicle's technique.

The pairing is the point. The retroactivity law says WHEN to
backfill and is easy to obey. The sweep law says HOW to verify you
did, and exists because obeying the first one badly is
indistinguishable from obeying it well — **a clean result from a bad
pattern is more dangerous than a red one**, since it ends the
investigation. Four separate benches paid for that lesson before it
was written down, and D-069's stated reason for minting it is
exactly that: a lesson that lives only in a story is a lesson the
next bench repeats.

**Two derivations contradict the census cell.** First, #204 is not
the practice's last full run — D-068's sixty-seven-entry retrofit
is, and it is larger by any measure. Second, the cell describes a
law that has since acquired a companion it does not mention. Both
follow from the cell's date rather than from any error in its
reasoning.

One tension is live rather than settled, and the record is honest
about it: the retroactivity law reaches INTO frozen files, which
append-only appears to forbid. The workshop has resolved this three
times — D-030's retarget-links-keep-prose, D-057's meaning-not-bytes
ruling, D-068's every-word-survives-one-line-lower — and each
resolution was reached locally, by the bench that needed it. There
is no single statement of the boundary, only three consistent
precedents.

## Sources

Down-links only — this story cites the record beneath it and never
another story's prose.

- [LAWS §Knowledge & tracking](../LAWS.md#knowledge--tracking) —
  the retroactivity law and the sweep law at HEAD.
- [D-024](../record/DECISIONS.md#d-024--architecture-v2-narrative-layer-and-skills)
  · the retirement pattern ·
  [D-030](../record/DECISIONS.md#d-030--setup-consolidation) ·
  successor-of-record ·
  [D-033](../record/DECISIONS.md#d-033--telemetry-folds-into-facts)
  · the fold ·
  [D-068](../record/DECISIONS.md#d-068--the-short-anchor-law) · the
  largest backfill ·
  [D-069](../record/DECISIONS.md#d-069--the-law-register-and-the-manual-groom)
  · the sweep law.
- [currency-audit](../record/history/workshop/mechanism/currency-audit.md)
  — #204's own account, including the orphan census.
- [retroactivity-sweep](../record/history/workshop/definition/retroactivity-sweep.md)
  · [skills-precision-pass](../record/history/workshop/mechanism/skills-precision-pass.md)
  · [home-currency-pass](../record/history/workshop/definition/home-currency-pass.md)
  — the three currency passes.
- [restyle-sweep](../record/history/workshop/definition/restyle-sweep.md)
  — the leg-end ratchet discharged.
- Spans cited by the census:
  [#57](https://github.com/wsher0901/roam/pull/57) ·
  [#76](https://github.com/wsher0901/roam/pull/76) ·
  [#78](https://github.com/wsher0901/roam/pull/78) ·
  [#121](https://github.com/wsher0901/roam/pull/121) ·
  [#128](https://github.com/wsher0901/roam/pull/128) ·
  [#130](https://github.com/wsher0901/roam/pull/130) ·
  [#132](https://github.com/wsher0901/roam/pull/132) ·
  [#134](https://github.com/wsher0901/roam/pull/134) ·
  [#144](https://github.com/wsher0901/roam/pull/144) ·
  [#197](https://github.com/wsher0901/roam/pull/197) ·
  [#204](https://github.com/wsher0901/roam/pull/204).
