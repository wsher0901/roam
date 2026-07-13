---
type: kickoff
title: Design kickoff
status: living
---
# Claude Design — session kickoff

claude.ai Project instructions do not reach Claude Design; this file
is the rule-carrier — paste the preamble below into every new Design
session. After [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
ships, the repo itself becomes the design system Design builds
with — imported from the GitHub repo and self-checked — and only the
governance lines below still matter.

## Preamble (paste into Design, verbatim)

```text
Project: Roam — a validity-first travel planner
(https://github.com/wsher0901/roam). Visual identity: trust made
visible — confidence badges, source attributions, and "unverified"
labels are first-class UI citizens; calm, legible,
explanation-forward.

Scope guard: work only on what this session was opened for; the
current lane and its deliverable are stated when I open the session.

Governance: you are a no-write surface for the repo. Deliverables
leave ONLY as extracted values via "Hand off to Claude Code"; never
instruct me to commit your markup or bundles. Design's other export
destinations (Vercel, Canva, PDF, ...) are forbidden for this
project — anything that reaches the product goes through the repo.

Exit: when I say "handoff", output exactly:
--- DESIGN HANDOFF ---
Project: "<name>"
Purpose: <one line>
Concluded: <items>
Open: <items>
→ next: <single next step>
Never produce it unprompted.
```

(The identity line condenses [FOUNDATION](FOUNDATION.md)'s
reliability-first principles; the governance line is the
Claude-Design no-write law in
[LAWS](LAWS.md#knowledge--tracking).)

## Working rules (for the founder)

- Session start: paste the preamble, then state the lane (e.g. "Lane
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  — converge two screens: Suggest option card with confidence badge +
  source line; day Plan timeline beside a map. Deliverable: token
  values — palette incl. semantic confidence colors, type scale,
  spacing, radii, motion durations. Prototypes are throwaway.")
- Feed context, not prose: point Design at the public repo, the
  deployed shell, or screenshots before describing pixels — its
  import surface reads all three.
- Polish on the canvas first — drag, resize, sliders, and inline
  edits are direct; re-prompt only to generate or restructure (every
  regeneration costs tokens).
- Version habit: before changing direction, say "Save what we have,
  then try a different approach" — saved iterations are Design's only
  version control.
- On a "chat upstream error," open a new chat tab inside the same
  project; if an inline comment seems ignored, paste its text into
  the chat.
- Extraction path: "Hand off to Claude Code" → paste the generated
  prompt into a
  [V1.S2.T5](ROADMAP.md#v1s2--skeleton--design-foundations-parallel-lane-with-s1)
  Code lane; Code opens with the design context already loaded
  (components used, arrangement, canvas annotations). The bundle is
  INPUT the lane reads — never committed. The lane writes only
  repo-native deliverables (globals.css theme tokens, shadcn config,
  motion constants, app shell) and records the bundle URL in the PR
  body.
- After T5 merges: import the design system from the GitHub repo (or
  run /design-sync from a Code session) so every future Design
  project builds with — and self-checks against — roam's actual
  tokens and components. The import is a SNAPSHOT: re-import after
  any token or component change. (Staged in the
  [equipment plan](skills/equipment-plan.md).)
- Design draws from the same shared usage pool as chat, Code, and
  Cowork (its old separate allowance is gone) — batch sessions; plan
  before opening.
