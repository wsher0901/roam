---
description: Finish the current task — PR, my approval, then merge
---
Task-completion ritual. Do all of this:
1. Run tests + linter; fix failures before proceeding.
2. Commit and push all remaining work on the current branch.
3. Open a PR with a clear title and a plain-language summary of what
   changed and why; reference the roadmap step or issue ("Closes #N").
4. Show me the summary (plus the Vercel preview URL once previews exist)
   and ASK FOR MY APPROVAL. Do not merge without it.
5. After my yes: squash-merge, delete the branch, git checkout main and
   pull.
6. If the shipped task completes a roadmap task, tick its checkbox in
   docs/ROADMAP.md.
7. Update docs/HANDOFF.md (reflecting the shipped task and any roadmap
   tick), commit, and push.
