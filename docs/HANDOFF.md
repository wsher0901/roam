# Handoff — 2026-06-12, Work
Active branch(es): main
Web lanes: none — V1.S1.T1's Web chat delivered its block and closed
(PR #31).
Roadmap position: V1.S1 at 1/7, V1.S2 at 3/5 (parallel lanes).
Done this sitting: V1.S1.T1 fact inventory shipped (PR #31) —
docs/data/FACTS.md: 47 world facts across five families with source
slots joining T2–T6 vetting, 14-type activity taxonomy, traveler
vocabulary TP-01..26; D-010 recorded (global coverage via six-rung
fallback ladders), D-011 recorded (traveler inputs: nullable, tiered,
append-only). Note: the block expected D-009/D-010 — renumbered to
D-010/D-011 (D-009 = pacing law).
Previous sitting (2026-06-11): V1.S2.T1 scaffold (PR #19), tooling
scope (PR #21), D-008 cockpit (PR #23), V1.S2.T2 deploy+CI (PR #25),
D-009 pacing (PR #27), V1.S2.T3 Supabase (PR #29).
In flight (half-finished): nothing.
Decisions this sitting: D-010, D-011.
Blockers / open questions: CLAUDE.md "plugins: not used" line still
stale (PR #21 enabled three) — tiny docs PR when convenient.
Next steps (exact): V1.S1.T2–T6 source vetting now unblocked by
FACTS.md ([P], five lanes; outputs per the T2–T6 assignment map +
"one SOURCES.md entry per slot" rule). V1.S2.T5 design foundations
([P]; re-enable Playwright plugin per equipment plan). V1.S2.T4 waits
on V1.S1.T7. Other machine still needs one-time setups: Supabase MCP
add (run from PowerShell, NOT bash — see gotcha), `npx vercel login`,
`git config roam.machine`.
Gotchas discovered (durable): `!` bash prefix mangles `/c` → `C:/`
(MSYS) — run `claude mcp add ... cmd /c ...` from PowerShell. Vercel
CLI non-interactive can't set preview-scope env for all branches —
use dashboard. Supabase REST root 401s on new projects — verify via
/auth/v1/health or a table query. `gh pr merge` refuses while checks
pend — wait for green. PowerShell mangles quotes in `gh pr create
--body` — use --body-file. Prettier must not touch docs/CLAUDE.md/
.claude (in .prettierignore). shadcn `-b` = base library (radix|base).
