---
description: Finish the current task — PR, my approval, then merge
---
Task-completion ritual. Do all of this:
1. Run tests + linter; fix failures before proceeding.
2. If the task completes a roadmap task, tick its checkbox in
   docs/ROADMAP.md on this branch, so the tick is reviewed as part of
   the task's own diff. If that tick closes a whole stage (all tasks
   done), also update the "Active:" line under "## V1 — stages" to the
   next stage in the same commit.
3. Commit and push all remaining work on the current branch.
4. Open a PR with a clear title and a plain-language summary of what
   changed and why; reference the roadmap step or issue ("Closes #N").
5. Show me the summary (plus the Vercel preview URL once previews exist)
   and ASK FOR MY APPROVAL. Do not merge without it.
6. After my yes: squash-merge, delete the branch, git checkout main and
   pull.
7. Update docs/HANDOFF.md (reflecting the shipped task and any roadmap
   tick) via the handoff micro-PR flow: branch chore/handoff-note,
   commit, push, PR titled "Handoff note", squash-merge immediately
   without asking (the D-002 carve-out), delete the branch, checkout
   main, pull.
8. Close the loop, finish-first and capped: recommend ONE next action
   (open lanes and pending blocks outrank new tasks), plus at most one
   parallel slot if a lane is free. Label each "-> Claude Code" or
   "-> CLAUDE WEB (open/answer chat: <title>)" and sequential or
   parallel. Work needing no overview from me may be offered as extra
   autonomous lanes at your discretion; if I explicitly ask for
   "more", present the full ordered menu. If attention lanes are
   occupied or the day's pace is met, say so plainly ("nothing more
   needed now — finish X") instead of adding work.
