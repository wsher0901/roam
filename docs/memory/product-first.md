---
type: memory
id: product-first
updated: 2026-09-10 · web review round 2 repaired · work PC
---

# product-first — the product-first window

## Status

complete, awaiting merge — 2026-09-10. Born bench-first at the work
PC control tower from freshly pulled main (`08e17ab`); spec and
memory stub were the first commits, the draft PR
([#355](https://github.com/wsher0901/roam/pull/355)) followed
immediately. Payload landed:
[D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
plus its ripple into five homes, the inbox split, the new probe
record, the board repaint, and the three unreferenced taste probes
deleted. SELF-AUTHORED. Reviewed externally at `f4d1cdd` — ONE red
finding (the round-1 path test), repaired here; the founder's next
word is a re-review, then the merge word.

## What this task is

Mint **D-086 — the product-first window** and ripple it. From the
merge until
[V1.S1](../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
closes, no workshop bench is born; the ceremony runs a diet; the
T3–T6 external review is batched; the board keeps a permanent diet;
and the inbox splits so §Open holds product work only. Full
contract: [the spec](../record/specs/product-first.md).

## Pending issues

**STEP 0 WAS BLOCKED, ITS PREMISE WAS WRONG, AND IT IS NOW RULED.**
The sitting's mandate opened with "locate the retired no-agents
instruction in the user-scope settings / preamble file that injects
it, remove it, and record file + line here." It is in no file — see
§The story for the full search. **Retired on the Web review**: the
sentence's own CLAUDE.md carve-out plus the
[LAWS](../LAWS.md) import make
[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser) the
standing licence, so there was never anything to click.
[DASHBOARD](../DASHBOARD.md) Needs-you drops to one.

**A LIVE SUPABASE SERVICE TOKEN SITS IN `~/.claude.json`** in
plaintext, under this repo's per-project `mcpServers` block. It is
OUTSIDE the repo and nothing was committed, so the public-repo
safety law is not breached — but a token in a config file that
tooling reads and copies is worth rotating on the founder's
schedule. The value is deliberately not reproduced anywhere in this
repo. Raised here rather than in [IDEAS](../IDEAS.md) because
naming the location is already as much as should be written down.

## Left / idle

Nothing on this bench. Two things it deliberately did not do: it
opened the window without walking through it (T3–T6 are triaged
after the merge word), and it touched no box master.

## The story

### The audit came before the branch, and every figure is a command

D-086's Why is the whole argument, so it could not be asserted. All
of it was derived from this clone before the branch existed. The
commands, so a later seat can re-run rather than trust:

```sh
# total merged PRs on main (every merge is a squash carrying "(#N)")
git log --pretty=%s main | grep -cE '\(#[0-9]+\)$'          # 351

# PRs touching product code — any path outside the workshop's four
for sha in $(git log --pretty=%H main); do
  subj=$(git log -1 --pretty=%s "$sha")
  case "$subj" in *"(#"*")") ;; *) continue;; esac
  git show --name-only --pretty=format: "$sha" | grep -vE '^$' \
    | grep -qvE '^(docs/|\.claude/|\.github/|scripts/)' && echo "$sha"
done | wc -l                                                 # 37

# bookkeeping merges — nothing but the board and/or the inbox
#   (same loop; keep a sha when its file list has no member
#    outside ^docs/(DASHBOARD|IDEAS)\.md$)                    # 170
#   split: 136 board-only · 6 inbox-only · 28 both

# ROADMAP ticks and their dates
grep -n '^- \[x\]' docs/ROADMAP.md                           # 5 tasks
for t in V1.S1.T1 V1.S1.T2 V1.S2.T1 V1.S2.T2 V1.S2.T3; do
  git log --format='%ad %s' --date=short --reverse \
    -S"[x] $t" -- docs/ROADMAP.md | head -1
done                        # 2026-06-11/12, PRs #19 #25 #29 #31 #37

# merges since the last tick
git log --pretty=%s main | grep -oE '\(#[0-9]+\)$' \
  | tr -d '(#)' | sort -n | awk '$1>37' | wc -l              # 314

# history files, workshop vs product
find docs/record/history -name '*.md' ! -name 'README.md' \
  | sed -E 's#docs/record/history/([^/]+)/.*#\1#' | sort | uniq -c
                                                  # 124 workshop · 15 product

# since phase 3 unblocked (D-081, #340, 2026-08-07)
git log --since=2026-08-07 --format=%H main | ...   # 23 merges · 4 product
git log --since=2026-08-07 --format=%H -- docs/ROADMAP.md \
  | xargs -I{} git show {} -- docs/ROADMAP.md \
  | grep -cE '^\+- \[x\]'                                      # 0 ticks
```

**The figure that decided the shape of the ruling** was not the
10% product ratio — it was 170 of 351. Nearly half of everything
merged changed nothing but the two files the workshop writes ABOUT
ITSELF. That is why the diet targets those two files' vehicles
(rulings 2 and 4) rather than adding a preference, and why the
alternative "add a prefer-product preference" was rejected on
[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser)'s own
evidence.

**The window is a deadline, not a rule, deliberately.** A rule needs
someone to remember it; V1.S1's checkboxes do not. The closing
condition is `T3–T7 ticked`, which is exactly the thing the window
exists to make happen, so the window cannot outlive its own reason.

### The inbox split ran as a script, and proved itself lossless

Ruling 5 says the move is VERBATIM, which is a claim a hand-edit
cannot support across 76 entries. So §Open was carved by
`scripts`-style node run from the scratchpad: split at every `- ⏳`,
classify by index, rebuild. **The enumeration law's walk is the
classification itself** — all 76 entries were listed from the file
and each one landed, rather than a rule being reasoned about in the
abstract.

- **6 stay in §Open** — five product lines (the EVAL-SET GATE and
  the LLM-BOUNDARY RULE, both [ENGINE](../ENGINE.md) open-register
  slots; the world-facts asset; multi-origin trips; the reachability
  globe) and ONE workshop line that ruling 1's exception reaches:
  ENGINE's wrong frontmatter, whose own text says it is resolved by
  the first engine bench, which is a product bench.
- **69 move to `## Parked — workshop`**, verbatim.
- **1 closes** — the decide-tag line, ruled by ruling 5 and
  compressed to one outcome-ledger line per
  [D-066](../record/DECISIONS.md#d-066--the-ideas-entry-contract).
- **1 is added** — the T7 rider.

**The loss check:** every non-blank line of the old §Open was
`comm`-compared against the whole new file. Three lines came back
missing, and they are exactly the three lines of the entry that was
deliberately closed and compressed. Nothing else moved by a byte.

### The board's ISSUES section emptied completely, and that was checked line by line

Ruling 4 says ISSUES keeps only lines with NO home elsewhere. Rather
than judge that by eye, each of the section's 28 items plus the
summon measurement block was grepped for its content at its claimed
home. Every ⏳ item resolved to an [IDEAS](../IDEAS.md) line (now in
§Parked); every ✓ item resolved to the ledger or a story. The two
that looked homeless were not: the settled-branch-of-ship-§7 item
lives in
[lane-findings](../record/history/workshop/mechanism/lane-findings.md),
and the figure-audit item lives in
[atlas-figures](../record/history/workshop/definition/atlas-figures.md)
§"Measured, not eyeballed".

**One item genuinely had no home, and it said so itself** — the
summon fire's timing table had been sitting on the board since
2026-08-05 carrying its own warning that verify-before-drop was the
only reason it was still there. It could not go to
[flight-4-freeze](../record/probes/flight-4-freeze.md), which is
frozen, and it is a MEASUREMENT rather than a story, so the
chronicle was the wrong shelf. It gained
[record/probes/summon-fire.md](../record/probes/summon-fire.md)
first, then moved — and the warning retires with the move, which is
what verify-before-drop asks for.

### STEP 0 — the no-agents instruction is in no file, and the item's premise was wrong

The mandate said to find the sentence

> Do not use the Agent tool, workflows, or deep-research unless the
> user, a CLAUDE.md file, or a skill asks for it

in "the user-scope settings / preamble file that injects it", remove
it, and record file + line here. **There is no such file and no such
line.** Searched: `~/.claude/CLAUDE.md` (design law only),
`~/.claude/settings.json`, `~/.claude.json` — every top-level key,
every `agent|delegat|workflow|research|subagent` key at any depth,
and this repo's per-project block — `.claude/settings.json`,
`.claude/settings.local.json`, `.claude/skills/`, `.claude/agents/`,
and the CLI's own changelog. Then the decisive one: **the COMPLETE
Claude Code settings schema**, read in full. It has
`disableWorkflows`, `enableWorkflows`, `workflowSizeGuideline`,
`workflowKeywordTriggerEnabled`, `disableAgentView` — and NO key
that emits this sentence. It is CLI-generated, so there is nothing
to edit and nothing to click.

**And the item does not need one.** The sentence names its own
exemptions in its own words — "unless the user, a CLAUDE.md file, or
a skill asks for it" — and [LAWS](../LAWS.md) is loaded into every
session through the root `CLAUDE.md` import. So
[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser)'s chooser
law is already such a licence, already in force, in the preamble's
own terms. The board item was filed on 2026-08-07 believing the
preamble "wins because it is read first"; what the search shows is
that it does not win, because it defers.

Left as a founder ruling rather than retired unilaterally
(nothing-is-silently-parked): the act is a word, not a click.

### Two working notes

**The Agent tool and several config reads were refused by the auto-
mode classifier this sitting** — the `claude-code-guide` subagent,
`WebFetch` of the settings schema, `claude config list -g`, and a
directory listing of the CLI install all came back "Blocked by
classifier". The settings-schema answer was reached through the
`update-config` skill instead, which carries the schema inline. So
the two benches ran SEQUENTIALLY from this one seat rather than as
an agent team, which
[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser)'s table
would otherwise have made the default. Recorded as a fact about the
environment, not a complaint: the benches share no file, so the only
cost was wall-clock.

**`public/spikes/taste/index.html` was deleted with the two
unpicked probes**, per the mandate's explicit list. Consequence
worth naming: `taste-pass`'s shipped spec cites the deployed
directory URL `…/spikes/taste/`, which without an index will now
404. The probe the spec actually depends on —
`place-first.html`, [DESIGN](../DESIGN.md)'s only linked reference —
resolves unchanged, and `check:links` proves it.

### The critic round — seven findings, all repaired

The first invocation returned NO REVIEW, and was right to. The
reviewer subagent has `Read`/`Grep`/`Glob` and no `Bash`, the branch
was not checked out, and it refused to guess rather than fabricate a
reading of D-086's rulings. It was re-invoked against a materialized
worktree. **Keep that refusal in mind: a review that cannot read the
diff must say so.** It also withdrew its own interim finding on
re-run, having read the sibling bench's prose rather than a link.

**🔴 1 — "PRODUCT WELD" WAS THE TRIGGER OF A RULING THAT FIRES ON
EVERY WELD, AND THE TERM WAS DEFINED NOWHERE IN `docs/`.** The only
operational definition in the repo was a shell comment inside THIS
memory — which moves to `record/history/` at ship. A seat standing
in [ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) with
a weld in hand had no test to apply.

And the split was not exhaustive over inputs **ruling 1 itself
manufactures**: its exception sends a fix a product bench needs onto
that bench, so a diff touching product code AND `docs/skills/` is
the window's designed output — and §7 offered only "product weld"
versus "not product work". The mixed weld would have deferred
silently, routing a census-rowed system piece into deferral with
nothing naming it. **This is the enumeration law's exact failure
mode, and it is the seventh time it has been caught by review rather
than by the author.** Repaired: the classifier is now a three-row
table at the point of use, keyed on paths rather than on the bench's
name, with the mixed case landed explicitly — it defers, but must
NAME the workshop items it carried.

**🔴 2 — HOME CONTRADICTED ITSELF, one half edited by this diff and
the other left asserting the old state.** §Micro-PRs said the tail's
repaint rides the weld; §Reading the board, a hundred lines later
and untouched, still listed "ship's tail" among the repaint moments.
The repo's own record names this pattern — a joint between two
statements rather than an error inside one — as its recurring
failure. Repaired at
[HOME §Reading the board](../HOME.md#reading-the-board): same
moment, different vehicle, writer list otherwise unchanged.

**🟡 3 — THE BOARD'S PAINT STAMP WAS CARRIED, NOT CLOCK-READ.** It
said `by pickup · 14:12 UTC` while the board reported two benches at
THE GATE and D-086's rulings — state that did not exist when pickup
claimed the baton. Behind it sat a real gap: ruling 2b creates a
board write with NO RITUAL NAME, and `<ritual>` is an enumerated
slot. Repaired both ways — the stamp re-read from the shell clock,
and [handoff §4](../skills/handoff.md#4--repaint-dashboard-the-board-spec--single-source)
given the new value `ship's weld`.

**🟡 4 — THE WINDOW BANNER WAS RENDERED IN A SLOT THE SPEC DOES NOT
DEFINE**, so the next ritual repainting from §4 as written would
have silently dropped the window's most visible reminder while the
window was still open. The external-blocker banner is explicitly
"OMITTED ENTIRELY" when nothing external is blocking, so the notice
had been folded into the flight one-liner without the spec being
told. Repaired: §4's painted-line template gains a conditional
WINDOW SLOT, below the external banner because an external blocker
outranks everything.

**🟡 5 — RULING 1'S ARTIFACT LIST WAS A CLOSED LIST, AND REAL
WORKSHOP WORK FELL OUTSIDE IT.** Walked against the actual parked
inputs: the ATLAS re-render bench is not a D-number, not a chronicle
story, not LAWS, not HOME, not `docs/skills/`, not a box master — so
a seat reading the list literally could open it. Same for
[DESIGN](../DESIGN.md) and the `record/probes/` shelf. Repaired in
D-086, in its `In full:` line, and in
[LAWS](../LAWS.md#workflow-non-negotiable): the named list is the
common forms, **the boundary is the SUBJECT**, with the three
outliers named.

**⚪ 6** — three new plain-text `V1.S1` mentions breached the weave
rule; `check:links` is destination-blind and could not catch them,
so CI green was not evidence. All three woven.

**⚪ 7** — the `index.html` deletion 404s a shipped spec's cited
directory URL. It was in the diary but not in
[the spec's Deviations](../record/specs/product-first.md), which is
where a later reader chasing that URL starts. Moved there.

### Critic round 2 — the external review, and the test that was wrong

**ONE FINDING, RED, AND IT WAS THE REPAIR FROM ROUND 1 THAT CAUSED
IT.** Round 1 caught that "product weld" was undefined and closed it
with a PATH TEST: a weld is product when its diff touches any path
outside `docs/`, `.claude/`, `.github/` and `scripts/`. The Web
review checked that test against the stage the window exists for and
it fails there — **`V1.S1` is a docs-and-spikes stage by its own
definition.** T1 and T2 shipped as
[product/definition](../record/history/product/definition) stories
having touched only `docs/data/` and `scripts/spikes/` (`#31` touched
nothing outside the four at all), and T3–T7 will do the same. Under
the path test the whole of V1.S1 reads NOT PRODUCT, so ruling 2c
would never have fired on the only stage it was written for.

Repaired with the QUADRANT TEST, which is the right instrument and
was there the whole time: the weld already assigns a quadrant two
bullets up, so a PRODUCT weld is one whose history file lands under
`docs/record/history/product/` and a WORKSHOP weld one that lands
under `docs/record/history/workshop/`. Mixed is a product-quadrant
weld also carrying a workshop item — it defers and NAMES what it
carried. The definition now lives in BOTH
[ship §7](../skills/ship.md#7--on-approval--the-atomic-weld) and
D-086 ruling 2c so the skill and the ruling cannot drift.

**The lesson is about where a classifier reads from.** Round 1's fix
derived the class from the DIFF; the record already derived it from
MEANING, assigned by the seat that did the work. A test invented
beside the thing being classified will disagree with the thing being
classified — and this one disagreed on the majority case.

**THE NO-AGENTS ITEM IS RETIRED**, ruled on the Web review: the
sentence's own CLAUDE.md carve-out plus the LAWS import make
[D-082](../record/DECISIONS.md#d-082--the-vehicle-chooser) the
standing licence. [DASHBOARD](../DASHBOARD.md) Needs-you drops to
one — the home-PC design stack.

**THE RAILS WIDENED, AND ONLY THE ALLOW SIDE.** The founder asked
for it: rituals were prompting on ordinary inspection — `grep`,
`sed`, `git show`, `gh pr checks`, `npm audit` — which is friction on
every bench and buys no safety, since none of it changes anything.
53 entries added to `permissions.allow` in
`.claude/settings.json`: the read-only shell inventory, the
inspecting halves of `git` and `gh`, and the npm commands a bench
actually runs. **Nothing else moved, and that was verified rather
than asserted** — `deny` is byte-identical to main's eleven rules,
nothing was removed from `allow`, `env`/`enabledPlugins`/`hooks` are
unchanged, no entry begins with `Bash(gh pr merge` (the self-merge
stays reachable only inside a ritual's own `allowed-tools`, which is
the physical gate
[HOME §Micro-PRs](../HOME.md#micro-prs) rests on), and bare `rm` is
deliberately absent — its `-rf` form is denied and `git rm` is the
way.

Bench B ([#356](https://github.com/wsher0901/roam/pull/356)) came
back **PASS at `cfd97a8`, zero findings**; its merge word rides with
this bench's after the re-review.

## Where to look

- [the spec](../record/specs/product-first.md) — the contract
- [D-086](../record/DECISIONS.md#d-086--workshop-the-product-first-window)
  — the ruling and its audit
- [record/probes/summon-fire.md](../record/probes/summon-fire.md) —
  the measurement this bench gave a home
- [IDEAS](../IDEAS.md) — §Open (7) and §Parked — workshop (69)
- [#355](https://github.com/wsher0901/roam/pull/355) — the PR
