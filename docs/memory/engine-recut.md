---
type: memory
id: engine-recut
updated: 2026-07-13 · recut landed · work PC
---
# engine-recut — Consolidation recut: DECISION-POLICY becomes ENGINE; PROJECT-POLICY to house style

## Status
Content work complete on the branch; verification and ship-to-gate
are next. The rename, both payload rewrites, the
[D-028](../DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)
entry, and the full retroactive ripple are all in one commit, per
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
none — awaiting verification, then THE GATE (founder approval
follows external review; DO NOT MERGE was explicit in the brief).

## Left / idle
Verification suite (check-links · greps · lint · tests · ROADMAP
diff check) · ship to THE GATE.

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
- ROADMAP's two binding-requirements lines kept their text
  "§6–§8" per the brief ("keeping their line text otherwise
  intact"), renamed to ENGINE and retargeted per the anchor map.
  Note for the founder: the old §6/§7/§8 rules now live in ENGINE
  §6/§5/§8, so the literal range "§6–§8" is a hair loose (it now
  spans Synthesize·Render·Gate; Aggregate §5 also binds). Flagged,
  not fixed — fixing wording beyond the rename was out of brief.
- [DECISIONS](../DECISIONS.md) D-021's decision line linked the old
  file with its ".md" suffix in the link TEXT
  ("docs/DECISION-POLICY.md"). Kept the historical name but dropped
  the ".md" from the text ("docs/DECISION-POLICY") — the only way to
  satisfy both the frozen-prose law and the Done-means grep (zero
  repo-wide hits of the old filename string).
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
- PR: [#95](https://github.com/wsher0901/roam/pull/95) (draft until
  the gate)
- decision:
  [D-028](../DECISIONS.md#d-028--2026-07--consolidation-recut--decision-policy--engine-brain-skeleton-form-project-policy-house-style-open-register-grows-69-upholds-d-021-extends-the-d-021-consolidation)
- the two rewritten files: [../ENGINE.md](../ENGINE.md) ·
  [../PROJECT-POLICY.md](../PROJECT-POLICY.md)
- the workshop brief (Web chat) — payloads + anchor map + mechanism
