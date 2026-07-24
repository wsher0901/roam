---
type: history
id: gh-second-path
updated: 2026-07-23 22:38 · weld · home PC
shipped: 2026-07-23 22:38
pr: 207
---

# gh-second-path — a second API path through the GitHub proxy

## Status

shipped — merged [#207](https://github.com/wsher0901/roam/pull/207),
2026-07-23. Tower-authored, so the no-solo-approval law was
satisfied by the external Web review — PASS on `2b97a86`: eight
files (the mandate list + IDEAS per the founder's 4b fold),
D-049's three-revision Why with the REST shaping and the
placeholder clause verified, R2's gh rung verified verbatim
(API-read probe, never an env echo, command continues, only both
paths dead demote), both supersession notes pure additions, the
gates re-run by the reviewer (links 2648/0 · ledger 89↔89 ·
memory valid), Actions green — plus the founder's merge word.

## What this task is

The official docs contradict the shipped premise twice over: `gh`
IS installable in cloud sessions (Ubuntu archive, allowlisted —
the earlier exit-100 failure used the egress-blocked
`cli.github.com` repo), and it authenticates AUTOMATICALLY through
the GitHub proxy via a proxy-injected placeholder. If proven, the
cockpit gains a second API path (D-049) and a connector flap stops
costing command. What stays true either way: the raw token is a
placeholder — only gh-through-proxy works. Contract and mandate:
[the spec](../../../specs/gh-second-path.md).

## Pending issues

- **Manual acts owed after the weld (founder):** re-save the
  cockpit routine box from the updated charter master (it gained
  the R2 gh rung and the self-URL line) · archive the five
  sessions of this outing (§Where to look).
- **The `claude/*` tripwire FIRED LATE, harmlessly:** five
  session-workspace branches surfaced on origin after the flight
  — one per session of this outing (the four probes + the
  founder's 4b session) — each tip a commit already on `main` or
  this bench, ZERO unique work verified per branch. They were
  absent from the mid-flight check: the platform creates them
  lazily, so a probe-cleanup tripwire must re-run at the GATE,
  not only mid-flight. The founder's weld order: HOLD the five
  deletions until the founder confirms "sessions archived" — then
  delete all five, wait 60s, `fetch --prune`, and confirm origin
  heads = `main` only. The hold rides the board's Needs-you until
  that word lands.

## Left / idle

Nothing is left on the bench — the mandate is fully run and
verification is at the gate. The queued next bench, unchanged:
[WEB-INSTRUCTIONS](../../../WEB-INSTRUCTIONS.md) v5
(named by [#204](https://github.com/wsher0901/roam/pull/204)).

## The story

**Birth.** STEP 0 held clean: origin heads = `main` only, the
bench cut from fresh tip `6b2b20c`, spec + this memory + draft PR
[#207](https://github.com/wsher0901/roam/pull/207) on origin
before any probe flew. The founder confirmed the cloud
environment's setup script now carries
`apt update || true && apt install -y gh || true`.

**The probe (session 1 — the gate).** Born by rung 1, the
hidden-console `--cloud` birth with the self-read buffer recovery
(the 07-23 [IDEAS](../../../IDEAS.md) variant), exit 0, list-native,
platform-auto-titled — consistent with
[#204](https://github.com/wsher0901/roam/pull/204)'s title-line
finding. The five commands ran IN THE CLOUD at birth; outputs
retrieved afterward by teleport-print, verbatim:

1. `gh --version` → `gh version 2.45.0 (2025-07-18 Ubuntu
   2.45.0-1ubuntu0.3)` — installed, and the Ubuntu build string
   proves the archive path. **GREEN.**
2. `echo $GH_TOKEN` → `proxy-injected` — the literal placeholder.
   **GREEN.**
3. `gh api user` → the full authenticated public profile object
   for `"login":"wsher0901","id":140655542` — the proxy
   substitutes real credentials. **GREEN.** (One deliberate
   deviation from record-verbatim: the object's public-profile
   body is elided here — this repo is public and
   [LAWS §Safety](../../../LAWS.md#safety-non-negotiable) outranks the
   mandate's verbatim clause; the `login` field carries the whole
   probative weight.)
4. `gh pr list --repo wsher0901/roam` → exit 1, verbatim: `HTTP
   403: This GraphQL query (PullRequestList, sent by gh pr list)
   is not enabled for this session — only the pinned set of
   PR-review operations is served. Use REST via ``gh api
   repos/{owner}/{repo}/...`` instead.
   (https://api.github.com/graphql)` — **DEVIATED: not an auth
   failure; a GraphQL allowlist boundary the premise did not
   anticipate.**
5. `gh api repos/anthropics/claude-code` → HTTP 403, verbatim
   core: `GitHub access to this repository is not enabled for
   this session. Use add_repo to request access. If add_repo
   answers that read access is already available and you need
   GitHub API or write access, call add_repo again with
   access:"push" to attach the repository with credentials.` —
   scoped-403 confirmed, and the `add_repo` mechanism named.
   **GREEN.**

**Verdict: NON-PASS by the mandate's own definition** — (4) did
not authenticate-and-succeed. STOP declared; the mandate held.

**The 4b sharpening, and what it taught instead.** The 403's own
text claims REST works; one read-only follow-up
(`gh api repos/wsher0901/roam/pulls`) would separate "second path
real but REST-shaped" from "command acts closed". Three attempts,
three failures — each a vehicle finding worth the record:

- **Teleport relocates.** Sending a message into a cloud session
  via `claude --teleport <id> --print` moves the session's
  EXECUTION to the local machine: session 1's follow-up hit this
  seat's local permission gate ("This command requires approval")
  where no proxy exists, and the session itself reported the
  environment had changed under it. Teleport-to-READ what already
  ran in the cloud is faithful; teleport-to-RUN is a different
  machine. A probe must carry its commands in the BIRTH prompt.
- **The birth channel truncates on nested quotes.** Session 3's
  prompt arrived cut mid-command, exactly inside a quoted `--jq`
  expression — [#193](https://github.com/wsher0901/roam/pull/193)'s
  "channels truncate" reproduced live, with quoting as the
  trigger. Session 1's five commands carried no nested quotes and
  arrived whole.
- **A birth turn can no-op.** Sessions 2 and 4 received their
  prompts (session 4's arrived COMPLETE, quoted back verbatim)
  yet executed nothing — the first turn closed "No response
  requested", the session apparently misreading the prompt amid
  the session-start hook dump. Both sessions honestly refused to
  fabricate outputs when asked to report. Net: the follow-up
  birth-prompt channel ran 1 of 4 attempts; only the founder-shaped
  five-command prompt executed.

**Where that leaves 4b:** untested in the environment that
matters. The evidence FOR the REST reading is real but indirect —
(3) `gh api user` IS a REST call through the proxy that
authenticated and succeeded, and the 403's own text directs to
REST — but the repo-scoped REST read the mandate's map needs has
not been witnessed. Held rather than assumed: verify-before-rely
is this bench's whole premise.

**The founder's 4b, and the gate reopening.** The founder ran 4b
in a fresh interactive cloud session and witnessed it GREEN:
`command -v gh` → `/usr/bin/gh` (the environment cache DID carry
the setup-script install) · `GH_TOKEN` set at length 14 — the
permission classifier lawfully refused to echo it, and 14
characters is exactly the `proxy-injected` fingerprint · `gh api
repos/wsher0901/roam/pulls --jq '.[0].number'` → `207`, this very
bench's PR. The repo-scoped REST read through the proxy is
PROVEN. The same sitting yielded a fifth finding: that fresh
session first BLUFFED "gh isn't available" from its environment
briefing without probing, and self-corrected only when made to
run `command -v gh` — probe-don't-assume extends to a session's
OWN toolset. The founder ordered the mandate run with four folds:
REST-shaped wording throughout · gh probes are API reads, never
env-var echoes (the classifier treats `GH_TOKEN` as a secret) ·
the bluff finding to memory + [IDEAS](../../../IDEAS.md) · the three
vehicle findings ride first-class.

**The mandate run (same sitting).** D-049 landed with its full
ripple in one decide commit: the honest three-revision Why
(egress-blocked → "MCP sole path" → installable +
proxy-authenticated, each once written as certain), SETUP's
environment entry reversed onto the new evidence, the API map
rewritten two-path REST-shaped, the charter's connector-ladder
preamble reworded and R2 gaining the automatic gh rung as (b) —
CONNECTOR DOWN and the self-rescue dropping one rung deeper — the
successor-duty and liftoff-seating self-URL from
`CLAUDE_CODE_REMOTE_SESSION_ID` (the tower's console-attach read
of a BIRTH's output deliberately kept: that recipe serves a
session the tower cannot ask), the `Claude-Session:` trailer
noted as the free audit link, and liftoff §7's `/tasks` +
teleport line. Then the two supersession notes (cockpit-resilience
kept its ladder, lost its sole-path premise; flight-hardening's
one gh correction corrected in turn, its other eight standing) and
the four findings into [IDEAS](../../../IDEAS.md). The sole-path grep
came back clean on the finished tree: every surviving hit is
record, a note quoting what it overturns, or D-049's own history.

**The tripwire's late fire.** At the pre-gate fetch, FIVE
`claude/*` workspace branches surfaced on origin — one per
session of this outing, none present at the mid-flight check.
Each was verified zero-unique-work (tips are this bench's birth
commit or main's tip — the platform branches a session's
workspace from the repo head at its birth, lazily). Harmless, and
a lesson: the platform creates workspace branches AFTER a check
can pass, so the cleanup tripwire belongs at the gate too. The
five ride to the founder with the session archives.

**The gate.** The external Web review returned PASS on `2b97a86`
— eight files as declared, D-049's three-revision Why with the
REST shaping and the placeholder clause verified, R2's gh rung
verified verbatim, both supersession notes pure additions, the
gates re-run independently (links 2648/0 · ledger 89↔89 · memory
valid · Actions green). The merge word followed, with one
sequencing order: the five workspace-branch deletions HOLD until
the founder confirms the five sessions are archived — archive
before delete, so no session is orphaned from its workspace while
it still exists.

## Where to look

- [the spec](../../../specs/gh-second-path.md) — the contract: probe
  PASS shape, the five mandate items, the file list.
- [#207](https://github.com/wsher0901/roam/pull/207) — the draft
  PR; the hold is mirrored there as a `BLOCKED:` comment.
- The four probe sessions, all awaiting founder archive, none
  having pushed anything:
  1. `session_01BbQ6fuNommWHsSxmtdw1Ua` — THE probe; ran all
     five commands in the cloud; later teleport-relocated.
  2. `session_01QdwqzAkTDE5zjqNkQC9qqq` — 4b attempt; no-op
     birth turn.
  3. `session_01GnWsKJtbZ4rujXsr5Xihwz` — 4b attempt; prompt
     truncated mid-quote.
  4. `session_01U1iBQkYD52PkRVnmLREc88` — 4b attempt; complete
     prompt, no-op birth turn.
- [cockpit-resilience](../../../specs/cockpit-resilience.md) ·
  [flight-hardening](../../../specs/flight-hardening.md) — the two
  record claims a green probe would overturn (supersession notes
  only, if the mandate ever runs).
- [D-048](../../../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — the ladder D-049 would amend.
