---
type: memory
id: gh-second-path
updated: 2026-07-23 22:01 · blocked · home PC
---

# gh-second-path — a second API path through the GitHub proxy

## Status

blocked — the probe came back NON-PASS · 2026-07-23 22:01 ·
control tower · home PC. Four of five probe commands matched the
expected shape; (4) `gh pr list` hit a GraphQL allowlist 403, not
an auth failure. Per the mandate — "any other shape: STOP, record,
and hold for the founder" — THE MANDATE HAS NOT RUN. The full
verbatim record is in §The story; the founder's word decides
whether the mandate proceeds on the REST-shaped reading, is
amended, or the bench parks.

## What this task is

The official docs contradict the shipped premise twice over: `gh`
IS installable in cloud sessions (Ubuntu archive, allowlisted —
the earlier exit-100 failure used the egress-blocked
`cli.github.com` repo), and it authenticates AUTOMATICALLY through
the GitHub proxy via a proxy-injected placeholder. If proven, the
cockpit gains a second API path (D-049) and a connector flap stops
costing command. What stays true either way: the raw token is a
placeholder — only gh-through-proxy works. Contract and mandate:
[the spec](../specs/gh-second-path.md).

## Pending issues

- **Held for the founder's word: the probe shape.** (1)(2)(3)(5)
  GREEN, (4) DEVIATED — the proxy serves only a pinned set of
  PR-review GraphQL operations and its own 403 text directs to
  REST via `gh api`. The second path exists but appears
  REST-SHAPED; whether that satisfies the mandate's intent is the
  founder's call, not this seat's.
- **The REST follow-up (4b) is UNTESTED in the cloud** after three
  birth attempts — the follow-up birth-prompt channel failed 3/3
  (§The story records each specimen). Testing it needs either a
  founder-run command in a cloud session or a future probe with
  the lessons below applied.
- **Four probe sessions await founder archive** (§Where to look
  lists all four URLs). None pushed anything; the `claude/*`
  tripwire came back clean — origin carries only `main` and this
  bench.
- Tower-authored, so [no-solo-approval](../LAWS.md) requires an
  external Web review before any eventual gate word. DO NOT MERGE.

## Left / idle

The ENTIRE mandate, unrun by the gate rule: D-049 · SETUP's
two-path API map + two supersession notes · the charter's R2 gh
rung · self-ID adoption · liftoff §7's `/tasks` line. Manual acts
after any eventual weld (founder): routine box re-save · probe
session archive.

## The story

**Birth.** STEP 0 held clean: origin heads = `main` only, the
bench cut from fresh tip `6b2b20c`, spec + this memory + draft PR
[#207](https://github.com/wsher0901/roam/pull/207) on origin
before any probe flew. The founder confirmed the cloud
environment's setup script now carries
`apt update || true && apt install -y gh || true`.

**The probe (session 1 — the gate).** Born by rung 1, the
hidden-console `--cloud` birth with the self-read buffer recovery
(the 07-23 [IDEAS](../IDEAS.md) variant), exit 0, list-native,
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
   [LAWS §Safety](../LAWS.md#safety-non-negotiable) outranks the
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

## Where to look

- [the spec](../specs/gh-second-path.md) — the contract: probe
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
- [cockpit-resilience](../specs/cockpit-resilience.md) ·
  [flight-hardening](../specs/flight-hardening.md) — the two
  record claims a green probe would overturn (supersession notes
  only, if the mandate ever runs).
- [D-048](../DECISIONS.md#d-048--2026-07--cockpit-resilience--the-five-rung-connector-ladder-the-summon-workflow-live-on-workflow_dispatch-and-a-push-to-opssummon-explicit-supersession-with-tombstone-and-refusal-guard-and-the-phone-bootstrap-merge-on-signal-and-a-cloud-environment-token-both-rejected-upholds-no-solo-approval-and-d-047)
  — the ladder D-049 would amend.
