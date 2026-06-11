# Handoff — 2026-06-11, Work
Active branch(es): main
Roadmap position: V1.S1 and V1.S2 active (parallel lanes); V1.S2.T1
done (first ticked task).
Done this session: V1.S2.T1 app scaffold shipped (PR #19) — Next.js
16.2.9 (App Router, TS, React 19, Turbopack) at repo root; Tailwind v4
+ shadcn/ui on Base UI ("nova" preset) with one Button component;
isolated engine/ dir with ESLint-enforced import boundary (no
app/React/Next imports), @engine/* alias, Vitest smoke test; Prettier
+ eslint-config-prettier wired, npm scripts (test, format,
format:check); AGENTS.md from create-next-app kept (Next 16 differs
from AI training data — read node_modules/next/dist/docs/). D-007
recorded (Base UI, not Radix) and mirrored into CLAUDE.md stack line.
`git config roam.machine "Work"` set on this machine. Tooling scope
shipped (PR #21): .claude/settings.json now disables the claude.ai
MCP connector bridge (ENABLE_CLAUDEAI_MCP_SERVERS=false) and pins
plugins — on: context7, frontend-design, security-guidance; off:
playwright (until V1.S2.T5), superpowers. Takes effect on next
session launch.
In flight (half-finished): V1.S1.T1 (fact inventory) is being drafted
by me in the Claude Web Project chat — it arrives later as a paste
block on branch docs/v1.s1.t1-fact-inventory. Claude Code must NOT
start V1.S1.T1 independently.
Decisions this session: D-007 (shadcn/ui builds on Base UI).
Blockers / open questions: CLAUDE.md still says "Claude Code plugins:
not used" — stale since PR #21 enables three; needs a small docs PR
when convenient.
Next steps (exact): V1.S2.T2 (deploy + CI, branch
feat/v1.s2.t2-deploy-ci) and/or V1.S2.T3 (Supabase wiring, branch
feat/v1.s2.t3-supabase) — both unblocked now T1 is merged; per the
equipment plan, add Vercel MCP when T2 starts and Supabase MCP when T3
starts (tokens per-machine, never in repo; the claude.ai bridge
versions are gone after PR #21, so use local `claude mcp add` on each
machine). V1.S2.T5 (design
foundations) also [P after T1] but wants Playwright MCP. S1 lane:
T2–T6 source vetting is [P] and open.
Gotchas discovered: shadcn CLI changed — `-b` now picks the primitive
library (radix|base, NOT a color); presets are nova/vega/maia/etc.;
old `-b neutral` syntax fails then hangs on an interactive prompt.
Prettier corrupted a CLAUDE.md line on first run — CLAUDE.md, docs/,
.claude/, README.md, AGENTS.md are now in .prettierignore; keep them
there. Current scaffold gitignores next-env.d.ts (generated). The old
"re-upload docs to the Claude Web Project" step is retired — the Web
Project fetches live repo files.
