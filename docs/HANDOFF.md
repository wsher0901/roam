# Handoff — 2026-06-12, Work
Active branch(es): main
Web lanes: none — V1.S1.T1's Web chat delivered its block and closed
(PR #31).
Roadmap position: V1.S1 at 2/7, V1.S2 at 3/5 (parallel lanes).
Done this sitting: V1.S1.T1 fact inventory shipped (PR #31) —
docs/data/FACTS.md: world facts across five families with source
slots joining T2–T6 vetting; D-010 (global coverage via six-rung
fallback ladders), D-011 (traveler inputs: nullable, tiered,
append-only); block expected D-009/D-010 — renumbered. FACTS
amendment 1 shipped (PR #33, from the P1+P2 vocabulary audit +
Web review): inventory now 54 facts (parking, route-services,
area-profiles, venue-reputation, fx-rates, transport-disruptions,
cruise-port-calls) with Dictionary payload-key lines; traveler
vocabulary now TP-01..47 with ask tiers/provenance/upsert (D-012,
six-question upfront cap); SI-only storage (D-013 — units toggle
noted for V1.S2 UI); taxonomy 15 types (+nightlife); FOUNDATION
gained §Plan-synthesis principles, bound to S3/S5 in ROADMAP; two
ideas captured to IDEAS.md. Amendment 2 shipped (PR #35, P3–P6
review): docs/data/TELEMETRY.md — behavior events (19 types,
capture-now-use-later, exposure law: full slates + positions,
consent-gated privacy floor, D-014); claim ledger + actuals
harvester (new task V1.S3.T7) for calibration; source-health metrics
with the demotion law; fact cache made bitemporal, append-only,
license-segmented with retention/license as PRIMARY T2–T6 selection
criteria (D-015); V1.S1.T7 scope extended to telemetry tables; one
more idea captured (dataset licensing/export). V1.S1.T2 weather
vetting shipped (PR #37): docs/data/SOURCES.md born with all six
weather slots — Open-Meteo forecast + ERA5 climatology Grade A
(CC-BY 4.0, store-raw, all Dictionary keys live-confirmed, zero
gaps); NWS alerts Grade B (US-only, MeteoAlarm = EU candidate); snow
model-grade B; seasonal-risk derived C; activity-profiles in-repo.
Provisional A–D grade scale in SOURCES.md header — ratify at T7.
Three spike scripts in scripts/spikes/. .prettierrc gained
endOfLine:auto (Windows CRLF churn fix).
Previous sitting (2026-06-11): V1.S2.T1 scaffold (PR #19), tooling
scope (PR #21), D-008 cockpit (PR #23), V1.S2.T2 deploy+CI (PR #25),
D-009 pacing (PR #27), V1.S2.T3 Supabase (PR #29).
In flight (half-finished): nothing.
Decisions this sitting: D-010, D-011, D-012, D-013, D-014, D-015.
Blockers / open questions: CLAUDE.md "plugins: not used" line still
stale (PR #21 enabled three) — tiny docs PR when convenient.
Next steps (exact): V1.S1.T3–T6 source vetting ([P], four lanes
left; pattern set by the T2 weather entries in SOURCES.md — confirm
Dictionary keys, record retention/license/attribution per D-015,
spike script per fetched slot). T7 agenda accumulating: ratify grade
scale; date-flexibility schema; backup posture for the fact cache
once it holds real history. V1.S2.T5 design foundations
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
