# Handoff — 2026-06-11, 4FL102-APP-WH
Active branch: main
Roadmap position: V1 — stages not yet cut (blueprint session in
progress); scaffolding stays blocked until V1.S1 opens.
Done this session: Foundation V1 shipped (PR #7) — FOUNDATION.md full
product definition, ROADMAP.md notation Vn / Vn.Sm / Vn.Sm.Tk +
rolling-wave depth, D-003 + D-004 recorded, CLAUDE.md and /pickup moved
to Stage vocabulary. Stack trial shipped (PR #9) — D-005: D-001 upheld
and extended with the named frontend layer (Tailwind v4 + shadcn/ui,
Motion, MapLibre GL, dnd-kit, Vercel AI SDK "AI SDK UI" flavor,
TanStack Query + Zustand), performance doctrine (stream-first,
cache-heavy, parallel fan-out, co-located DB), and two riders
(streaming + fact-caching from day one; hard engine boundary for a
future Python ML worker); CLAUDE.md tech-stack section updated;
FOUNDATION.md idea-triage line moved to Vn vocabulary.
In flight (half-finished): nothing.
Decisions this session: D-003 — V1 scope (Foundation V1); D-004 —
planning notation & rolling-wave depth; D-005 — stack re-trial: D-001
upheld + frontend layer + performance doctrine.
Blockers / open questions: "Issue 2" (the blueprint session) exists
only in the Claude Web project — the GitHub repo has zero issues and
#2 there is the merged "Context engine v2" PR. Decide: create the
GitHub issue or keep that numbering Web-only.
Next steps (exact): finish the blueprint session in the Claude Web
project chat — cut V1 stages and tasks into docs/ROADMAP.md and fill
the V2 bucket from the socket pool. Re-upload the changed docs
(FOUNDATION.md, ROADMAP.md, DECISIONS.md, CLAUDE.md) to the Claude Web
Project so it works from current files. Optional: set `git config
roam.machine "<label>"` on each computer for friendly handoff titles.
Gotchas discovered: `git config roam.machine` is still unset on this
machine — titles fall back to hostname until it is set. PowerShell
mangles double quotes in `gh pr create --body` args — write the body
to a temp file and use --body-file instead.
