---
type: history
slug: engine-recut
shipped: 2026-07-13
pr: 95
---
# engine-recut — Consolidation recut: DECISION-POLICY becomes ENGINE; PROJECT-POLICY to house style

## Status
Shipped — merged as
[PR #95](https://github.com/wsher0901/roam/pull/95) on the founder's
word after the external review, with one gate amendment (ROADMAP's
binding-requirements links name stages, not numbers). All
verification green: 1128 links / 0 broken, lint clean, 3/3 tests,
zero old-filename hits in tracked files, zero old anchors repo-wide,
ROADMAP checkboxes untouched. The rename, both payload rewrites, the
[D-028](../DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)
entry, and the full retroactive ripple landed in one commit, per
the [decide](../skills/decide.md) same-commit law.

## What this task is
The engine consolidation is renamed to its true name —
[ENGINE.md](../ENGINE.md) — and reshaped from topic-prose into the
engine's own shape: ten pipeline stages with inputs, outputs,
procedures, and rules-in-slots, plus a loud numbered OPEN register
for everything not yet decided (filling a slot takes a D-number).
[PROJECT-POLICY](../PROJECT-POLICY.md) adopts the same house style
(italic gloss per section, bold rule handles, per-section Sources
lines). Full retroactive ripple across the corpus; no rule-semantics
change anywhere.

## Pending issues
none

## Left / idle
Nothing — the weld that landed this file was the last act
(slug-keyed, no [ROADMAP](../ROADMAP.md) tick; spec finalized in
place at [../specs/engine-recut.md](../specs/engine-recut.md)).

## The story
Born from a founder-delivered workshop brief (Web chat), payloads
and anchor map included verbatim. The founder read "Decision policy"
as a policy for decisions in general — the name misled its own
author; that observation opened the task.

Execution notes and judgment calls, in order:
- The rename was committed as a pure `git mv` BEFORE the content
  rewrite, in its own commit, so git records a 100% rename and
  history follows the file; the brief's "history follows" survives
  the full-content overwrite this way.
- Anchor self-check (sanctioned by the brief): of the three
  best-effort targets, two were already correct (V1.S6 stage anchor,
  TELEMETRY §1/§2); the D-014 entry anchor was not — the payload
  guessed `behavior-telemetry-event-vocabulary`, the real heading is
  "Telemetry posture: capture now, use later" — corrected inside
  ENGINE §10's Sources line. Only deliberate divergence from the
  payload bytes.
- The next D-number was computed from
  [DECISIONS](../DECISIONS.md)' tail: D-027 was last → this landed
  as D-028.
- [HOME](../HOME.md)'s portrait of the consolidations was a JOINT
  portrait (PROJECT-POLICY + the old file in one block). The brief
  said "retitle the portrait and replace its body with this verbatim
  paragraph", but the verbatim paragraph describes only ENGINE —
  replacing the joint block outright would have deleted
  PROJECT-POLICY's only portrait. Judgment call: split into two
  portraits — PROJECT-POLICY keeps a portrait distilled from the old
  joint text (no new claims), ENGINE gets the founder's verbatim
  paragraph. Deviation recorded in the spec and PR.
- ROADMAP's two binding-requirements lines first kept their text
  "§6–§8" per the brief ("keeping their line text otherwise
  intact"), renamed to ENGINE and retargeted per the anchor map —
  and the looseness was flagged at the gate (the old §6/§7/§8 rules
  now live in ENGINE §6/§5/§8). The founder amended at the gate:
  the link text now names the stages ("ENGINE — Aggregate ·
  Synthesize · Gate", target ENGINE §5), so the reference outlives
  any renumbering.
- [DECISIONS](../DECISIONS.md) D-021's decision line linked the old
  file with its ".md" suffix spelled out in the link TEXT (a
  "docs/" path). Kept the historical name but dropped the suffix
  from the text ("docs/DECISION-POLICY") — the only way to satisfy
  both the frozen-prose law and the Done-means grep (zero repo-wide
  hits of the old filename string). This memory words the note the
  same way, for the same reason.
- [DASHBOARD](../DASHBOARD.md): exactly one mechanical link-target
  repair (Needs-you item 3 → ENGINE §12 Open register) — a
  sanctioned retroactivity repair; the single-writer law is
  otherwise intact.
- FACTS F-FE-09 cited old §7 (constraint priority) for
  composition-aware matching; per the map it now points at ENGINE §5
  Aggregate. Content-wise the composition-aware matching RULE lives
  in ENGINE §6 Synthesize — possible one-line follow-up, left alone
  here (semantics changes out of scope).

## Where to look
- spec: [../specs/engine-recut.md](../specs/engine-recut.md)
- PR: [#95](https://github.com/wsher0901/roam/pull/95)
  (squash-merged 2026-07-13)
- decision:
  [D-028](../DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)
- the two rewritten files: [../ENGINE.md](../ENGINE.md) ·
  [../PROJECT-POLICY.md](../PROJECT-POLICY.md)
- the workshop brief (Web chat) — payloads + anchor map + mechanism
