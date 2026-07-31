---
type: probe-record
title: Can a GitHub Action birth a list-native cockpit? (2026-07-23)
status: frozen
---

# Cloud birth from CI — the org-UUID wall

A probe flown 2026-07-23 on the branch-only `ops/probe-cloud`,
NEVER MERGED, and decided against the same day. This file is the
record its findings had nowhere else to live: the branch is gone,
no bench shipped from it, and
[the IDEAS recut](../specs/ideas-contract.md) moved it here rather
than delete a result that cost a flight to learn.

**THE QUESTION.** Could a GitHub Action birth a LIST-NATIVE
cockpit by running `claude --cloud` itself under a real pty — so
that even an emergency cockpit lands in the phone's general
session list — instead of the routine fire `summon.yml` uses
([D-048](../DECISIONS.md#d-048--cockpit-resilience)),
which yields a list-INVISIBLE session?

**THE RESULT, three gates deep.**

1. **The pty DEFEATS the TTY refusal.** `script -qec '…'
   /dev/null` gave a real terminal, so the refusal recorded across
   the flight-hardening work is NOT a wall for a pty — only for
   pipes.
2. **A fresh-install CLI blocks on FIRST-RUN ONBOARDING** (the
   theme picker) before it parses `--cloud`. Cleared by
   pre-seeding `~/.claude.json` (`hasCompletedOnboarding` +
   `lastOnboardingVersion` — the theme step is part of
   onboarding) plus the per-project `hasTrustDialogAccepted` for
   the workspace-trust gate. Keys verified against a real install
   (2.1.218), never guessed.
3. **`--cloud` then runs FULLY HEADLESS**, reaches the real
   cloud-birth, and fails `Error: Unable to get organization UUID`
   (exit 1). A bare `setup-token` (`CLAUDE_CODE_OAUTH_TOKEN`) does
   not carry the account's org identity, which a logged-in
   `~/.claude.json` caches under `oauthAccount.organizationUuid`.

**WHY THE ROUTINE FIRE WORKS WHERE THIS DOES NOT:** the routine
runs inside Anthropic infra with org context already established
server-side, while the `--cloud` CLI resolves it client-side from
local auth state that a token alone does not populate.

**THE DECISION (the founder, 2026-07-23):** KEEP the proven
routine fire as the rescue engine; do NOT seed account identity
into CI for an uncertain payoff.

**THE UNTRIED NEXT STEP,** if this is ever revisited: inject
`oauthAccount` (accountUuid · organizationUuid · email) as MASKED
repository secrets and retry — it may be the last gate, or reveal
another (org-scoped auth the setup-token may not carry). It bears
on
[D-047](../DECISIONS.md#d-047--cloud-born-cockpit)'s
list-native-beats-sturdy choice: if a list-native rescue is ever
wanted, this is the path and the org-UUID gate is its remaining
wall.

Sources:
[D-047](../DECISIONS.md#d-047--cloud-born-cockpit) ·
[D-048](../DECISIONS.md#d-048--cockpit-resilience) ·
[cockpit-resilience](../specs/cockpit-resilience.md)
