---
type: spec
id: flight-hardening
title: Flight hardening — correct every instruction the first end-to-end flight proved wrong
status: shipped
stage: workshop
branch: docs/flight-hardening
pr: 193
opened: 2026-07-22
shipped: 2026-07-22 15:09
---

# flight-hardening — the repo stops telling a future seat to do things that cannot work

> **SUPERSESSION NOTE — added 2026-07-23.** One correction below
> was itself corrected by live probe
> ([D-049](../DECISIONS.md#d-049--2026-07--gh-second-path--gh-api-rest-through-the-github-proxy-is-the-cockpits-second-api-path-a-connector-flap-stops-costing-command-r2-gains-the-automatic-gh-rung-self-id-by-session-env-amends-d-048-corrects-the-193-api-map-upholds-d-047-and-verify-before-rely),
> [#207](https://github.com/wsher0901/roam/pull/207)): "the
> environment cannot install `gh` … the MCP connector is the sole
> API path" read an egress block as a design wall. The
> `cli.github.com` 403 → exit 100 this spec recorded was REAL but
> source-specific — the Ubuntu archive is allowlisted, the setup
> script now installs `gh` from it, and the proxy authenticates it
> REST-shaped. The live map:
> [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts).
> The other eight corrections stand. Everything below is RECORD.

**Links:** [LAWS](../LAWS.md) ·
[SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts) ·
[liftoff](../skills/liftoff.md) ·
[parallel-lanes](../skills/parallel-lanes.md) ·
[TEMPLATE](../memory/TEMPLATE.md) · [IDEAS](../IDEAS.md) ·
evidence base: the first end-to-end chain flight
([#191](https://github.com/wsher0901/roam/pull/191), 2026-07-22)
and its closeout filings
([#190](https://github.com/wsher0901/roam/pull/190) ·
[#192](https://github.com/wsher0901/roam/pull/192))

## Goal

One theme: **the repo currently tells a future seat to do things
that cannot work.** The first end-to-end flight of the assembled
chain
([D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
+ [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law))
flew liftoff → cloud-born cockpit → bench birth → label-spawned
lane → canary → non-author review → the founder's word → the weld,
and every step that nearly failed failed against a WRITTEN
instruction, not against a missing one. This bench corrects the
instructions, in place, from lived evidence.

Nothing here is new machinery. The permanent fix for the API-flap
class — a merge-on-signal GitHub Action that turns merge into a git
act — is deliberately **staged, not built here**; it gets its own
bench.

## Out of scope

- The merge-on-signal GitHub Action (staged; own bench).
- Any change to rungs 2–4 of
  [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)'s
  ladder.
- Any file outside the FILES TOUCHED list below.
- The remaining open [IDEAS](../IDEAS.md) lines this bench does not
  fix (see plan item 9) — they stay untriaged.

## Plan

1. **Ack token — one canonical form, machine-checkable.**
   [parallel-lanes §Canary](../skills/parallel-lanes.md#canary-handshake-both-sides)
   is the contract the lane's watcher reads, so it wins: the Status
   line begins EXACTLY `airborne · <url> · <date>`.
   [TEMPLATE](../memory/TEMPLATE.md)'s state-table row (currently an
   em-dash form) conforms to it; §Canary states that the match is
   ANCHORED to the start of the Status line, never a substring; the
   lane-worker charter master in
   [SETUP](../SETUP.md#once-and-done--cloud-accounts) gains the same
   anchored-match sentence, so one box re-save covers
   [#191](https://github.com/wsher0901/roam/pull/191) and this bench
   together.
2. **[liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
   rung 1 — replace the impossible recipe.** The current text
   prescribes a hidden console hosting a winpty pty with output
   captured to file; winpty refuses whenever either of its own ends
   is redirected, so that shape cannot run at all. Document the
   shape that actually flew (2026-07-22, work PC, Git for Windows):
   hidden console with NO redirection anywhere, birth prompt handed
   as a file-read argument, output recovered afterwards by attaching
   to the console and reading `CONOUT$`. The TTY explanation and the
   list-native claim stay.
3. **Board-authoritative flight plan.** New rule in
   [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
   and the cockpit charter: liftoff welds the flight plan to the
   [DASHBOARD](../DASHBOARD.md) FIRST; the birth prompt carries a
   pointer plus a one-line mandate, not the full plan. The cockpit's
   first act reads the board's flight context, and if its birth
   prompt appears truncated or contradicts the board, the BOARD
   governs.
4. **API-dependency map + recovery rung.** New subsection in
   [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
   under the cockpit: which acts are git-only (always available) and
   which are API-only; the cockpit's ONLY API path is its GitHub MCP
   connector; the ordered recovery rung (a) retry once, (b) at a desk
   — land, park the tail with its reason, hand the baton to the
   control tower, (c) away — land and birth a fresh cockpit, (d) last
   resort, the GitHub mobile app. The merge-on-signal Action is noted
   as STAGED.
5. **Cloud environment — correct
   [D-047](../DECISIONS.md#d-047--2026-07--cloud-born-cockpit--the-cockpits-birth-vehicle-becomes-claude---cloud-list-native-on-every-device-the-automated-hidden-console-birth-is-liftoffs-primary-rung-the-routine-fire-demotes-to-fallback--summon-button-engine-amends-d-046-clause-3-upholds-the-lane-law)'s
   note.** The environment cannot install `gh` — the install is
   egress-blocked (`cli.github.com` 403) and fails the whole setup
   script with exit 100. Replace with: no `gh`, cannot install it,
   the MCP connector is the sole API path, the setup script must not
   attempt it. Fix the name too — the live environment is `Default`,
   not `roam`.
6. **[LAWS](../LAWS.md#workflow-non-negotiable) — one clarifying
   sentence** on no-solo-approval: on bench-first flights the
   baton-holder necessarily authors the memory stub and the airborne
   ack, so "non-author" refers to the PAYLOAD diff; a baton-holder
   may not review a payload it wrote itself.
7. **`.gitignore`** — add `.local/` (rung-1 birth writes a stray
   `.local/state/gh/device-id` into the repo root).
8. **Session naming.** liftoff's birth prompt opens with a title
   line `[COCKPIT] roam — <date>` so the general session list reads
   itself, marked verify-before-rely: confirm at the next birth
   whether the platform takes the title; if not, record and drop.
   Doctrine sentence: the general session list is what the founder
   touches; routine run panels are the machinery's paper trail
   (archiving does not clear a run log, by design).
9. **[IDEAS](../IDEAS.md) triage.** Close the lines this bench
   fixes, dated and naming this PR. Left open: the merge-on-signal
   Action, notification taxonomy, self-authored gates carrying the
   review verdict, the `count:runs` npm wrapper, cap arithmetic blind
   to fires/redeliveries, clerk retirement, the reviewer DEFECT.

## Files touched

`docs/memory/TEMPLATE.md` · `docs/skills/parallel-lanes.md` ·
`docs/skills/liftoff.md` · `docs/SETUP.md` · `docs/LAWS.md` ·
`docs/IDEAS.md` · `.gitignore` · `docs/specs/flight-hardening.md` ·
`docs/memory/flight-hardening.md` · [DASHBOARD](../DASHBOARD.md) via
the ship tail. Nothing outside this list.

## Done-means

- [x] The airborne token is one canonical middot form, and every
      mention across [TEMPLATE](../memory/TEMPLATE.md),
      [parallel-lanes](../skills/parallel-lanes.md), and
      [SETUP](../SETUP.md) agrees with it by grep.
- [x] §Canary states the anchored-match rule; the lane-worker charter
      master carries the same sentence.
- [x] `winpty` is absent from
      [liftoff](../skills/liftoff.md), and rung 1 documents the
      console-attach shape that flew. Rungs 2–4 unchanged.
- [x] The board-authoritative flight-plan rule appears in both
      [liftoff §6](../skills/liftoff.md#6--ledger-handoff--fire-the-cockpit)
      and the cockpit charter master.
- [x] [SETUP](../SETUP.md#once-and-done--cloud-accounts) carries the
      API-dependency map and the four-step recovery rung, with the
      merge-on-signal Action marked staged.
- [x] "install `gh`" is absent from SETUP's cloud section; the
      environment is named `Default`; the egress-block and exit 100
      are recorded.
- [x] [LAWS](../LAWS.md#workflow-non-negotiable) carries the
      payload-diff clarifying sentence.
- [x] `.gitignore` ignores `.local/`.
- [x] liftoff's birth prompt opens with the `[COCKPIT]` title line,
      marked verify-before-rely, with the session-list doctrine
      sentence recorded.
- [x] [IDEAS](../IDEAS.md) lines this bench fixes are closed and
      dated naming this PR; the seven named lines stay open.
- [x] Full CI mirror green locally AND the pushed head's Actions run
      green; ship §6's critic has run (clean on all nine items; its
      two findings sit outside the file list and are recorded in
      [the story](../history/workshop/mechanism/flight-hardening.md)'s
      Pending issues).
