---
description: Resume work on this machine from wherever the last session stopped
---
Start-of-sitting ritual. Do all of this:
1. git checkout main && git pull.
2. Read docs/HANDOFF.md. If it names an active branch, check it out and
   pull it. If the file is missing, say so and continue from main.
3. Read the active Stage (Vn.Sm) in docs/ROADMAP.md.
4. Run `gh pr list --state open`. Include any open PRs in the briefing,
   flagging ones that did not come from this machine's last session
   (compare against the machine and branch named in docs/HANDOFF.md).
5. Tell me in a few plain sentences: where we left off, what is
   half-finished, any open PRs (flagged if unexpected), and the
   recommended next step. Then wait for my go-ahead.
