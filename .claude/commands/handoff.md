---
description: Park work safely so any computer can resume it
---
End-of-sitting ritual. Do all of this:
1. If the current branch is NOT main: stage, commit, and push ALL current
   work on it (including any edits made in docs/ via Obsidian) with a
   clear message. If there is nothing to commit, continue to step 2.
   If the current branch IS main and anything besides docs/HANDOFF.md
   has changed, STOP and ask me what to do — never commit other work
   to main.
2. Create or update docs/HANDOFF.md (under 20 lines) in exactly this
   structure, using today's date and the machine label (run
   `git config roam.machine`; if unset, fall back to `hostname`):
   # Handoff — <date>, <machine label>
   Active branch(es):
   Roadmap position: <Vn.Sm / Vn.Sm.Tk>
   Done this session:
   In flight (half-finished):
   Decisions this session: <D-numbers + one-line gist, or "none">
   Blockers / open questions:
   Next steps (exact):
   Gotchas discovered:
3. Commit ("chore: handoff note") and push, branch-aware:
   - On a branch other than main: commit and push to that branch.
   - On main: create branch chore/handoff-note, commit the
     docs/HANDOFF.md update there, push, open a PR titled "Handoff
     note", squash-merge it immediately without asking (the D-002
     carve-out), delete the branch, checkout main, pull.
4. Confirm to me that everything is pushed and it is safe to walk away.
