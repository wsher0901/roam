# Handoff — 2026-06-12, Work (sitting 2)
Active branch(es): main — no open PRs in this terminal.
Cloud lanes (4, launched 2026-06-12 — review per D-018 as PRs land):
T3 sky&sea session_018STvMoKD9h4pxLsZhnvKuK ·
T4 feasibility session_01QMTrsNQxbiP95ddrEsX3mL ·
T5 time&transport session_01KNqHyaTf216CNhSbnSmnBh ·
T6 crowds&calendar session_01E6Dr8upDGxDD7HJQBau1Kq —
expect branches docs/v1.s1.t3..t6-*-sources as they push.
Web lanes: none (confirmed).
Roadmap position: V1.S1 at 2/7, V1.S2 at 3/5.
Done this sitting: PR #39 approved + squash-merged — D-016
parallel-ready menu wired into /pickup, /ship, CLAUDE.md, HOME.md;
stale remote branch refs pruned (all were merged PRs). PR #41
approved + squash-merged — D-017: cloud sessions are the
parallel-lane vehicle (launch via Desktop Code tab / claude.ai/code
/ `claude --remote`; no "&" prefix exists; clone-from-main rule;
/tasks monitoring; launch protocol: founder's explicit "launch
them" = Claude fires all approved lanes itself, approval doubles as
claim answer); CLAUDE.md stale "plugins: not used" line fixed
(rides D-017 PR, declared deviation). PR #43 approved +
squash-merged — D-018: review-and-route after lanes finish (Claude
reviews lane PRs first, surfaces issues each with a stay/teleport/
new-lane recommendation; founder's verdict routes; teleport =
founder's keystroke, Claude hands the paste-line; new-lane verdict
doubles as launch approval).
Done earlier today: V1.S1.T1 fact inventory (PR #31) + amendments
(PR #33, PR #35); V1.S1.T2 weather vetting (PR #37: SOURCES.md born —
Open-Meteo A, NWS alerts B, spike scripts).
In flight (half-finished): the four cloud lanes above (running
unattended; they survive both machines being off).
Decisions today: D-010 … D-015 (see DECISIONS.md) · D-016
parallel-ready menu (merged) · D-017 cloud parallel lanes + launch
protocol (merged) · D-018 fix-routing triage (merged).
Blockers / open questions: none. (Cloud lanes need one-time GitHub
access — Claude GitHub App or /web-setup — unverified until first
launch.)
Next steps (exact): review the four lane PRs per D-018 as they land
(Claude reviews first, flags issues with stay/teleport/new-lane
recommendations; merge sequentially — all four touch SOURCES.md, so
later ones may need a rebase). V1.S2.T5 design foundations ([P];
re-enable Playwright plugin per equipment plan). T7 agenda: ratify
grade scale, date-flexibility schema, backup posture. V1.S2.T4
waits on V1.S1.T7.
Gotchas discovered (durable): `claude --remote` enforces a TTY
guard — fails from Claude's headless shell AND from the `!` prefix
(piped); working route: batch launcher .cmd OUTSIDE the repo
(MyFile/Github/roam-launch-lanes.cmd, regenerate per batch), opened
as an attended console window via Start-Process (D-019 pending).
.prettierrc has endOfLine:auto (Windows
CRLF churn); other machine still needs Supabase MCP (PowerShell, not
bash), vercel login, roam.machine label — AND real Python 3
(security-guidance plugin hook errors on the Store stub; fix:
`winget install -e --id Python.Python.3.12`, then restart Claude).
