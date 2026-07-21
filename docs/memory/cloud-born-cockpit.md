---
type: memory
id: cloud-born-cockpit
updated: 2026-07-21 · gate 0b second finding (bang-path also non-TTY) · control tower (work PC)
---
# cloud-born-cockpit — the cockpit's birth vehicle becomes `claude --cloud`

## Status

blocked — gate 0b needs the founder's terminal (the `--cloud`
vehicle refuses non-TTY contexts; probe composed and handed to
the founder 2026-07-21, gate 0c phone check rides the same
probe). 0a PASSED — origin heads = `main` only at
`5d1d4eaa820dfd9ac0fa80a0021cff23ea8057bd`, board shows no cockpit
in flight (flight 2 landed,
[#180](https://github.com/wsher0901/roam/pull/180) resolved by the
founder's word). Marker planted for 0b: throwaway commit
`2ab9614` on LOCAL main only (never pushed), adding
`docs/.probe-marker`; origin main tip stays `5d1d4ea`. The
discriminator: a GitHub clone reports `5d1d4ea…` + marker ABSENT;
a bundle-seeded sandbox reports `2ab9614…` and/or marker present.

## What this task is

D-047, amending
[D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
clause 3, one theme: the cockpit's birth vehicle becomes
`claude --cloud` (list-native on every device); the routine fire
drops to the fallback rung, remaining the summon button's engine.
Three evidence gates precede the mandate — flight/track check,
seed-provenance + branch-create probe, the founder's phone-list
check — because the vehicle's ancestor (`--remote`) bundle-seeded
sandboxes and destroyed batch-1 T3+T5 at the
[D-020](../DECISIONS.md#d-020--2026-07--parallel-lanes-v2-native-lanes-replace-hand-built-orchestration)
turn. Contract: [the spec](../specs/cloud-born-cockpit.md).
Founder kickoff 2026-07-21, its terms carried into the spec
verbatim; scope edges: docs only, nothing outside DECISIONS ·
liftoff · SETUP · spec · this memory (+ DASHBOARD via the ship
tail); tower-authored, so THE GATE waits for external Web review
before the founder's word.

## Pending issues

- Gate 0b, HALF-PROVEN — the vehicle EXISTS but is TTY-only. On
  this seat (CLI 2.1.216) `--cloud` is hidden from `--help`, yet
  the flag is real; fired from the harness's piped shell it
  refused with (verbatim):
  `Error: --cloud requires an interactive terminal.`
  `Non-interactive invocations (piped stdout, --init-only,
  --sdk-url) run locally and would silently ignore --cloud. Drop
  --cloud, or run from a TTY.`
  A clean rail (it refuses rather than silently running locally —
  the D-020-era silent-wrong-thing failure mode is designed out),
  but it means the probe — and, wiring-relevant, liftoff §6's
  primary birth — can only fire from a real terminal. A `winpty`
  pseudo-console attempt crashed (`Assertion failed … winpty.cc,
  line 924` — no console to size from). The probe is handed to
  the founder's terminal; the TTY-only finding must shape
  liftoff §6's command shape at the mandate. SECOND FINDING
  (2026-07-21): the founder fired the probe through the session's
  `!` bang-prefix — SAME refusal, verbatim identical error. The
  bang-path captures output (piped stdout), so it is non-TTY too:
  `--cloud` cannot fire from inside a Claude Code session by ANY
  route — not the harness shell, not the founder's bang-prefix.
  The birth surface is a plain terminal outside the session.
  Liftoff §6's primary rung must therefore read: the ritual
  COMPOSES the full birth command (charter + flight plan) and
  hands it to the founder to paste into a plain terminal; the
  session itself cannot execute it.
- Doc verification LANDED (claude-code-guide agent, official
  docs, 2026-02 era): `--cloud` is real and hidden from help;
  `--remote` survives as a deprecated alias. From a TTY it
  RETURNS IMMEDIATELY (v2.1.195+; this seat runs 2.1.216) with a
  live setup checklist, then a session link — exactly the
  kickoff's expected shape. Primary repo path: FRESH CLONE from
  the GitHub remote AT THE CURRENT BRANCH — local commits must be
  pushed first. BUT the ancestor's ghost survives on paper: a
  documented BUNDLING fallback (auto when GitHub access is
  unavailable; forced via `CCR_FORCE_BUNDLE=1`) uploads the local
  repo — full history, all branches, uncommitted tracked changes.
  So clone-vs-bundle is a runtime outcome, not a doc guarantee —
  the founder's evidence-gate is exactly right, and the probe
  must catch which path fires for THIS repo. Env checked on this
  seat: no `CCR_*` variables set. Prereqs per docs: claude.ai
  sign-in (not API key) + GitHub App or `/web-setup` auth + cwd a
  git repo with a GitHub remote — all believed present here
  (maiden flights 1–2 ran cloud sessions with write access).
  Sessions started this way DO appear in the mobile app's Code
  tab per docs — gate 0c tests the GENERAL-list claim live.
  Sources: code.claude.com/docs/en/claude-code-on-the-web
  (§Move tasks between web and terminal · §Send local
  repositories without GitHub) · code.claude.com/docs/en/mobile
  (§Start and monitor cloud sessions).
- Gate 0c is founder-input: the phone-list answer must be
  recorded verbatim here mid-probe.

## Left / idle

Gate 0b (probe) · gate 0c (phone) · D-047 append · liftoff §6
primary-birth rewrite, whose composed flight plan now opens with
the standing first-line clone-provenance directive (founder
addendum) · SETUP §cloud accounts (recipe + routine annotation +
charter born-at + `gh` environment note) · verification greps ·
CI mirror · THE GATE. Founder manual acts ride after the weld
(routine box re-save · `gh` in the cloud environment's setup
script · home-seat credential paste).

## The story

2026-07-21 — Born at the founder's kickoff, minutes after the
maiden closeout pickup: the maiden flights proved the cockpit
works but its routine-born sessions never join the mobile app's
GENERAL session list — the founder commands from the phone, so
the birth vehicle must be list-native. The kickoff fixes the
theme (birth via `claude --cloud`; fire.mjs to the fallback
rung), the D-047 text, and three STOP-gates that demand evidence,
not docs — the `--remote` ancestor's bundle-seeding destroyed
batch-1 T3+T5 once, and this bench must prove that ghost dead by
probe. Gate 0a passed at birth: origin heads = `main` only
(`5d1d4ea`), no cockpit in flight on the board. First friction,
recorded honestly: this seat's CLI (2.1.216) does not list
`--cloud` in its help — but the flag is REAL: fired from the
harness's piped shell it refused cleanly, demanding an
interactive terminal (verbatim error in Pending issues). That
refusal is good news twice over — the vehicle exists on 2.1.216,
and it fails loud instead of silently running locally (the exact
failure family that killed batch-1 T3+T5). A winpty
pseudo-console detour crashed for want of any console. So the
probe goes to the only real TTY in the building: the founder's
prompt — whom gate 0c summons mid-probe anyway. Marker `2ab9614`
sits planted on local main, unpushed, waiting to catch any bundle
ghost. Then the doc report landed and sharpened the stakes: the
bundle is not dead, it is a DOCUMENTED FALLBACK (auto on missing
GitHub access, forcible by env var) — clone-from-GitHub is the
primary path, not a guarantee. Which is precisely why this bench
gates on evidence: the probe decides clone-vs-bundle for this
repo in practice, and from a real TTY the vehicle should return
immediately with a checklist and a session link (docs, v2.1.195+),
not attach. Mid-gate the founder answered that fallback risk with
an in-theme addendum, dual-written into the spec: every cockpit
birth's composed flight plan opens with a standing FIRST LINE —
"Before any act: verify your clone's HEAD equals origin/main's
tip and your workspace contains nothing origin lacks; mismatch =
report verbatim and STOP." Defense in depth: the one-time probe
proves the primary path exists; the first line polices every
flight after, so a silent bundle fallback (or any seeded ghost)
dies at birth instead of writing history it should not own. Then
the founder fired the probe through the session's `!` prefix and
hit the identical refusal — the bang-path pipes stdout, so it is
non-TTY like everything else inside a session. The vehicle's
demand is now fully mapped: a plain terminal, nothing less. The
probe moves to the founder's own terminal window; liftoff §6's
primary rung becomes compose-and-hand, not execute.

## Where to look

- [The spec](../specs/cloud-born-cockpit.md) — contract, gates,
  done-means.
- [D-046](../DECISIONS.md#d-046--2026-07--flight-cockpit--the-cockpit-is-the-control-tower-online-full-authorship-cloud-command-session-the-no-solo-approval-law-liftoff-auto-fires-the-cockpit-cc-direct-surface-doctrine-clerk-retirement-staged-remote-control-demoted-to-backstop-the-cockpitcontrol-tower-rename-amends-d-041-and-d-043-upholds-the-lane-law-and-the-wake-lock)
  — the amended decision;
  [flight-cockpit](../specs/flight-cockpit.md) the precedent
  bench.
- [liftoff §6](../skills/liftoff.md) ·
  [SETUP §cloud accounts](../SETUP.md#once-and-done--cloud-accounts)
  — the two wiring targets.
- Maiden evidence:
  [#177](https://github.com/wsher0901/roam/pull/177) ·
  [#180](https://github.com/wsher0901/roam/pull/180) · the
  [harness-vocab-rename history](../history/workshop/mechanism/harness-vocab-rename.md).
- Draft PR:
  [#187](https://github.com/wsher0901/roam/pull/187) — the public
  window; born draft with the bench.
