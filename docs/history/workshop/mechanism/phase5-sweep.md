---
type: history
slug: phase5-sweep
shipped: 2026-07-11
pr: 78
---
# phase5-sweep — hardening + hygiene (final ops phase)

## Status
Shipped — merged as
[PR #78](https://github.com/wsher0901/roam/pull/78) after the
founder's approval followed the external Web-chat review, closing
the ops — knowledge architecture thread.

## What this task is
The final phase of the ops thread — seven hardening workstreams in
one sweep: ① prune at gather (session-start hook +
[pickup](../../../skills/pickup.md) step 3; the resolved line left
[IDEAS](../../../IDEAS.md)); ② the board's Shipped table went static —
ten newest [history/](../../README.md) entries re-derived from
frontmatter at every repaint, no Obsidian plugin needed anywhere;
③ a timed gather latency check; ④ a root-cause verdict on the
line-ending phantoms; ⑤ the close-lock — released sessions
physically reject input; ⑥ the micro-PR carve-out sentence caught
up to reality in [LAWS](../../../LAWS.md) and
[PROJECT-POLICY](../../../SETUP.md), and the pickup stub gained
the same narrow merge allowance as its siblings; ⑦ the link checker
was promoted to `scripts/check-links.mjs` + `npm run check:links` +
a CI step. Scope held to docs/, .claude/, .gitignore, scripts/, and
the existing CI workflow. No spec: the brief is the contract, in
the PR description.

## Pending issues
None.

## Left / idle
Nothing — the weld that landed this file was the last act
(slug-keyed, no [ROADMAP](../../../ROADMAP.md) tick).

## The story
Born minutes after phase 4
([home-encyclopedia](../definition/home-encyclopedia.md)) merged; two
of its items closed loops this same cockpit opened in the morning —
the stale-refs prune gotcha and the line-ending phantom watch.

**④, settled.** `git ls-files --eol` showed the index fully
normalized (`i/lf` on every docs file — the
[#57](../definition/hygiene-retro-weave.md) normalization held); a
fresh `file://` clone of this branch came up with a clean
`git status` and a uniform `w/crlf` tree; and
`git add --renormalize .` staged exactly zero files. Verdict: the
phantoms never lived in the repository — they are live-tree stat
artifacts on a machine where two writers disagree (Claude's Write
tool emits LF while git's smudge produces CRLF under
autocrlf=true), surfacing as empty-diff "modified" entries after
index-rewriting operations and cleared by any refresh. Watch
closed: no eol pins, no renormalize commit — either would change
nothing in the repo.

**③, recorded.** One clean gather per the new pickup step 3
(`git fetch --prune` → `git branch -r` → `gh pr list` → the three
briefing reads): **771 ms** wall time. Verdict: nowhere near the
~30 s threshold; nothing to tune, no IDEAS line warranted.

**⑤, unit-tested** (live in-session test impossible by design — the
hook config loads at session start). In a temp repo with the hook
copied in: flag present → stderr
`Closed at handoff #99 · 2026-07-11 · home PC — this session is
closed. Open a fresh `claude` to continue.` and exit 2 (blocked);
flag removed → silent exit 0. The flag file is gitignored; the
session-start hook deletes it before anything else, so new sessions
are always live.

Decisions a future reader should know:
- **The ② grep gate vs the ② HOME instruction**: the brief asked
  HOME §Equipment to state the retirement AND asked that "dataview"
  match only history/ bodies. Resolved word-free: HOME says the one
  table-rendering plugin is retired without naming it — history/
  keeps the name. The board's Threads parenthetical and the
  Needs-you item (whose reason was the plugin install) were
  reworded for the same gate; this task's own memory says the word
  legitimately and lands in history/ at the weld.
- **[PROJECT-POLICY](../../../SETUP.md) rode along** with ⑥'s
  LAWS truth-up (the brief named only LAWS + the pickup stub): its
  Conventions bullet mirrored the stale three-writer list, and
  leaving it would have kept two truths — the retroactivity law
  says repair on sight.
- **Gate false-positives worth remembering**: case-insensitive
  "HANDOFF" matches the living `--- DESIGN HANDOFF ---` exit
  protocol in [DESIGN-KICKOFF](../../../DESIGN-KICKOFF.md) — the retired
  artifact is `HANDOFF.md`, so the gate greps the filename;
  `docs/.obsidian/workspace.json` (gitignored Obsidian state) also
  matches retired words and sits outside the corpus.
- **Dead end**: the first orphan-scan attempt inlined node code in
  a shell string; quoting mangled a regex and every file reported
  zero references. Rerun as a script file: 65 docs files, zero
  orphans. Same lesson as phase 4's CRLF checker bug — verification
  tooling gets written to files, not shell one-liners.
- **Glyph sweep**: zero old-grammar glyphs (✅🔨⬜🔒) in live docs —
  nothing to convert.

## Where to look
[PR #78](https://github.com/wsher0901/roam/pull/78) (contract,
summary, Deviations) · `.claude/hooks/user-prompt-submit.mjs` (the
close-lock) · `scripts/check-links.mjs` + `.github/workflows/ci.yml`
(the promoted gate) · [DASHBOARD §Shipped](../../../DASHBOARD.md) (the
static table) · the ops Web chat (the external review that gates
the merge).
