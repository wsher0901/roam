# Handoff — 2026-06-12, Work (sitting 3)
Active branch(es): main — no open PRs in this terminal.
Cloud lanes (4, launched 2026-06-12 — ALL BLOCKED ON PUSH, see
Blockers; no lane branches will appear on origin):
T3 sky&sea session_018STvMoKD9h4pxLsZhnvKuK — FINISHED, bundle +
PR body ready for download ·
T4 feasibility session_01QMTrsNQxbiP95ddrEsX3mL ·
T5 time&transport session_01KNqHyaTf216CNhSbnSmnBh — FINISHED,
bundle + PR body ready for download ·
T6 crowds&calendar session_01E6Dr8upDGxDD7HJQBau1Kq —
one of T4/T6 reported lost (clone shows no git remote; answer it
from claude.ai/code to keep it cloud-resident — do NOT teleport,
its work is unpushed). Lane work now arrives as git bundles
imported + reviewed locally, then pushed from this machine.
Web lanes: none (confirmed).
Roadmap position: V1.S1 at 2/7, V1.S2 at 3/5.
Done this sitting (3): PR #48 approved + squash-merged — erratum:
lane monitoring is claude.ai/code / mobile app; /tasks lists only
local background work; /teleport = one-way pull-local. (#48 was
authored in an earlier brief session that ended without /handoff —
branch left checked out; recovered at /pickup.) Lane push-blockage
diagnosed and recovery protocol logged (see Blockers).
Done sitting 2: PR #39 approved + squash-merged — D-016
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
protocol (merged) · D-018 fix-routing triage (merged) · D-019
launch mechanics: TTY guard + attended launcher window (merged,
PR #46).
Blockers / open questions: ALL FOUR cloud lanes cannot push — their
containers were created before the GitHub access grant landed
(~21:37Z); the scoped push credential is minted only at session
creation, so granting later does not retrofit running containers
(two lanes verified this independently; matches the "unverified
until first launch" warning above). Recovery protocol (in
progress): a finished lane hands over a git bundle + PR-body file;
founder downloads both from the session at claude.ai/code; local
Claude fetches the bundle into its branch, reviews the diff per
D-018 BEFORE pushing, runs any sandbox-blocked spikes locally,
then pushes and opens the PR with the lane's prepared body
(fallback if the session UI can't serve file downloads: lane
prints git format-patch output as plain chat text). T3 + T5 are
finished with bundles ready; T4/T6 get the same treatment when
they finish — or relaunch fresh (loses their progress; lanes
launched after the grant push normally).
Next steps (exact): founder downloads T3 + T5 bundles + PR bodies
from their sessions and hands local Claude the file paths; Claude
imports each into its branch, reviews per D-018, runs the pending
spikes locally (T3: tides + aurora, NOAA-blocked in sandbox; T5:
three written-not-run), pushes, opens the PRs, then surfaces
issues with stay/teleport/new-lane routing; merge sequentially —
all four touch SOURCES.md, so later ones may need a rebase.
Identify + unstick the lost lane (T4 or T6) via claude.ai/code
reply; collect remaining bundles as lanes finish. V1.S2.T5 design foundations ([P];
re-enable Playwright plugin per equipment plan). T7 agenda: ratify
grade scale, date-flexibility schema, backup posture. V1.S2.T4
waits on V1.S1.T7.
Gotchas discovered (durable): grant cloud GitHub access BEFORE
launching lanes — containers mint their push credential at
creation only; pre-grant lanes stay read-only forever. Cloud
sandbox egress allowlist blocks some spike targets (e.g. NOAA
hosts) — affected spike scripts must run locally before their
SOURCES.md "last verified run" stamp. /tasks does NOT list cloud lanes
(local background work only) — watch lanes at claude.ai/code or
the mobile app; /teleport (/tp) is the CLI picker but entering =
teleporting. `claude --remote` enforces a TTY
guard — fails from Claude's headless shell AND from the `!` prefix
(piped); working route: batch launcher .cmd OUTSIDE the repo
(regenerate per batch — the spent launcher is DELETED after launch
so a stray double-click can't spawn duplicate lanes), opened as an
attended console window via Start-Process (D-019, merged).
.prettierrc has endOfLine:auto (Windows
CRLF churn); other machine still needs Supabase MCP (PowerShell, not
bash), vercel login, roam.machine label — AND real Python 3
(security-guidance plugin hook errors on the Store stub; fix:
`winget install -e --id Python.Python.3.12`, then restart Claude).
