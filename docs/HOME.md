# Home — the cockpit
Open this note first. It stores no state — only where state lives.

## The eight questions
1. Our goal -> FOUNDATION.md, "What Roam is".
2. Everything we want to build -> FOUNDATION.md (V1 scope + Later
   sockets) · ROADMAP.md V2 bucket · IDEAS.md (new arrivals).
3. Schedule / versions / changes -> ROADMAP.md (rolling wave) ·
   DECISIONS.md (every change is a D-number).
4. Task splits & parallelism -> ROADMAP.md tasks with [P] / [seq] tags.
5. Which tool for what -> routing table below.
6. Are discussions tracked? -> if it changed anything, it ended in a
   paste block -> PR -> D-number / roadmap tick. No block = it did not
   happen.
7. Where are we right now -> /pickup in Code or "brief" in any Web
   chat: both render the stage progress map, open lanes, pending
   blocks, blockers. ROADMAP's checkboxes render visually in Obsidian.
8. What do I do right now -> every briefing AND every completion ends
   with labeled next action(s): what, which tool, parallel or
   sequential.

## The information hierarchy (what lives where, who updates it)
- Goal & identity -> FOUNDATION.md · changes only via paste block +
  D-number · rare.
- Scope inventory (V1, sockets, V2 bucket) -> FOUNDATION "Later" +
  ROADMAP V2 · paste block + D-number.
- Plan structure (versions -> stages -> tasks, [P]/[seq]) -> ROADMAP ·
  structure via blocks + D-numbers; progress via /ship ticks.
- Decisions & rationale -> DECISIONS.md · append-only D-numbers, via
  /decide or blocks; Code records discovered decisions itself.
- Task narrative (what/why/deviations) -> the task's PR description ·
  written by /ship · immutable history.
- Session state (lanes, blockers, gotchas, next) -> HANDOFF.md ·
  rewritten by /handoff micro-PR · git outranks it when stale.
- Inbox (untriaged ideas) -> IDEAS.md · auto-appended by Code the
  moment an idea is voiced; APPEND sections in Web blocks; Obsidian
  jots; swept by the D-008 carve-out; emptied by Triage chats.
- In-flight thinking -> the ID-titled Web chat itself · persistent and
  searchable; speaks in Lane Status footers and Resume Primers;
  promoted upward only via paste blocks; otherwise disposable.
- Operations manual -> HOME.md + CLAUDE.md + .claude/commands ·
  changed via Ops blocks.

## How state syncs (who tells whom — never your memory)
- Code -> repo: automatic. Commits pushed continuously; /ship runs
  ITSELF when a task completes (ticks, PR summary with deviations);
  ideas appended to IDEAS.md the moment voiced; concerns/gotchas + Web
  lanes in HANDOFF; decisions as D-numbers. Never conversation-only.
- Web -> repo: ONLY via paste blocks. A block counts as delivered only
  when its branch/PR/commit exists on GitHub; until then its chat is an
  open lane. Chats self-describe with Lane Status footers; parking
  produces a Resume Primer; new ideas become IDEAS appends inside the
  block.
- Repo -> both: automatic (Code pulls at session start; Web fetches
  live).
- Conflicts: git outranks notes. A stale HANDOFF is detected and
  announced, never trusted.
- Collisions: nothing starts a task without the claim question (one
  yes/no from you).

## Tool routing
- Claude Web / Desktop (same brain, synced; Desktop is a convenient
  window and the launchpad for cloud Code sessions): THINK here. Open an
  ID-titled chat when a task needs decisions, trade-offs, or design.
  Every chat that changes anything ends in exactly ONE paste block —
  pasted immediately, or it stays a tracked open lane.
- Claude Code: EXECUTE here. Inputs it accepts: /pickup at sit-down;
  "Start Vn.Sm.Tk" for fully-specified tasks; paste blocks from Web
  chats; PR approvals; "done for today" (runs /handoff).
- Parallel lanes: two [P] tasks at once = two Code sessions on
  separate branches. Primary vehicle (D-017): a Claude Code CLOUD
  session — launched from Claude Desktop's Code tab, claude.ai/code,
  or `claude --remote "<kickoff prompt>"` — runs remotely in its own
  isolated clone, on its own branch, ships its own PR. Fallbacks:
  second machine, or a git worktree on one machine. Never two
  sessions in one checkout.
- Obsidian: the reading room + quick capture into IDEAS.md; /handoff
  sweeps it (D-008). Never hand-edit FOUNDATION / ROADMAP / DECISIONS.

## The daily loop
1. Sit down -> Claude Code -> /pickup -> progress map + labeled next
   actions (stale handoffs and unexpected branches flagged by itself).
2. Pick lane(s); Code asks the claim question before starting anything.
3. Task needs thought? -> Web chat titled with its ID -> discuss ->
   paste block + NEXT line -> paste it now. Fully specified? ->
   "Start Vn.Sm.Tk".
4. Task done -> Code runs /ship itself -> read the PR summary ->
   approve -> /ship states the next labeled action(s). (High stakes?
   Paste the summary into a Web chat for verification first.)
5. Leaving a Web task midway? Say "park" -> footer + Resume Primer.
   Done for the day? Say so -> /handoff asks the Web-lanes question,
   sweeps IDEAS, confirms "safe to walk away".

## Pacing (the anti-fatigue law)
Finish before start: open lanes and pending blocks outrank new tasks.
Recommendations needing my attention: "Now: <one thing>" plus at most
one parallel slot — beyond that, "plate is full". Web items are
flagged explicitly with the chat to open or answer. Flexible cap: work
needing no overview (fully specified, no decisions) may run as extra
autonomous lanes at Claude's discretion; an explicit "more" from me
unlocks the full ordered menu. Stopping is a valid next step.
Parallel-ready menu (D-016; launch recipe per D-017): every briefing
and completion appends the list of unblocked, unclaimed [P] tasks —
tool label, branch name, and a paste-ready kickoff prompt for a
Claude Desktop cloud session (git worktree recipe only as the
offline fallback). Informational, exempt from the cap, never an ask.
An explicit "launch them" from me flips the menu to action: Code
launches the approved lanes itself via `claude --remote` from fresh
main and reports session URLs — the approval doubles as the claim
answer for those lanes (D-017).
