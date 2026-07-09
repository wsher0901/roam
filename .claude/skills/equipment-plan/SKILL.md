---
name: equipment-plan
description: Stage-gated tooling plan for Roam — which MCPs, plugins,
  subagents, and skills to add at which roadmap stage. Consult when a
  new stage or task opens, before adding any tooling, or when wiring
  subagents.
---
# Equipment plan (stage-gated — never stockpile)
- V1.S1: no extra tooling. Web research + plain Node spike scripts.
- V1.S2: Supabase MCP (project, migrations, schema) and Vercel MCP
  (deploys, logs, preview URLs). Tokens live per-machine in local MCP
  config — never in this public repo.
- First UI work onward (V1.S2.T5+): enable the playwright plugin in
  .claude/settings.json so Claude renders, screenshots, and judges
  its own UI before showing the founder.
- After V1.S3.T1 settles the check-module contract: encode it as a
  project skill in .claude/skills/check-module/ — V1.S7's three
  modules must follow it exactly.
- Plugins (.claude/settings.json): context7, frontend-design,
  security-guidance enabled; playwright staged OFF until first UI
  work (V1.S2.T5); superpowers off. Machine-local plugins (e.g.
  Vercel) live in settings.local.json, never here.
- Roam's RUNTIME tool use is a source-type question under the
  reliability law (fuzzy facts may use Claude+web-search as a graded
  source, rendered as derived/unverified); settle the exact runtime
  architecture when V1.S3.T1 opens.
- Subagents (.claude/agents/): none speculatively. Two planned — a
  read-only "reviewer" wired into /ship once code + CI exist
  (V1.S2.T2+): checks each diff against FOUNDATION principles, the
  task's roadmap line, the reliability law, and the no-secrets rule
  before any PR opens; and a "design-critic" at first UI work
  (V1.S2.T5+), paired with Playwright screenshots, judging against
  the design tokens. Write each spec when its stage opens.
- Built-in exploratory subagents (parallel research within one task)
  need no spec — distinct from roadmap [P] lanes, which are separate
  sessions on separate branches (see CLAUDE.md "Parallel lanes").
