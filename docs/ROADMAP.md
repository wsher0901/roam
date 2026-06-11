# Roadmap

## Notation — the only one we use (D-004)
- Vn = Version (V1, V2, ...). No synonyms: not "MVP", not "demo build",
  not "milestone".
- Vn.Sm = Stage inside a version — ordered; each has a done-criterion.
- Vn.Sm.Tk = Task — the PR-sized unit; one task = one branch = one PR.
  Small steps are checkboxes inside a task, unnumbered.
- Tasks are tagged [P] (parallel-safe: touches files no sibling task
  touches) or [seq] (must follow its predecessor).
- Branches, PRs, and handoff notes reference these IDs
  (e.g. "feat: V1.S2.T3 weather module").

## Planning depth — rolling wave (D-004)
- V1: fully detailed below (stages -> tasks -> small steps).
- V2: a rough bucket of named capabilities — no stages or tasks until
  V1 ships.
- Everything else: the socket pool in FOUNDATION "Later" plus
  docs/IDEAS.md.

## V1 — stages
Status: being cut in the blueprint session (Issue 2). Until V1.S1
opens: do not scaffold the app.

## V2 — rough bucket
Status: to be filled at the end of the blueprint session from the
socket pool.
