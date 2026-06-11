---
description: Resume work on this machine from wherever the last session stopped
---
Start-of-sitting ritual. Do all of this:
1. git checkout main && git pull.
2. Read docs/HANDOFF.md. If it names an active branch, check it out and
   pull it. If the file is missing, say so and continue from main.
3. Read the active Stage (Vn.Sm) in docs/ROADMAP.md.
4. Run `gh pr list --state open` and `git branch -r`. Include open PRs
   and non-main branches in the briefing, flagging any that did not
   come from this machine's last session (compare against
   docs/HANDOFF.md). If any branch or PR has commits newer than the
   handoff's date, say "HANDOFF is stale — trusting git" and brief
   from git state instead.
5. Render a progress map: one line per V1 stage with its tick count,
   e.g. "S2 ██░░░ 2/5 <- active", marking active stages. Under it,
   list open items: Code lanes (branches/PRs), Web lanes (from the
   handoff), pending paste blocks, and any blockers/gotchas.
6. Tell me in plain sentences: where we left off, what is
   half-finished, and the recommended next action(s) — labeling EVERY
   suggested item with (a) its tool: Web chat (needs thinking or
   decisions) or Code (fully specified), and (b) parallel or
   sequential relative to lanes already running, per the [P]/[seq]
   tags. Then wait for my go-ahead.
7. Claim rule (always): before starting ANY task this session, state
   its ID and ask me to confirm it is not already open elsewhere (a
   Web chat or the other machine). One yes/no, then proceed. Never
   start a task without this question.
