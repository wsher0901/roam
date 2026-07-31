---
type: retired-artifact
title: Cloud clerk charter (retired)
status: frozen
---

# Cloud clerk charter — the retired master

RETIRED 2026-07-22, routine deleted. This file is RECORD, NOT
INSTRUCTION: nothing here is armed, no ritual reaches for it, and
there is no box left to re-save. **Do not paste it anywhere.**

It exists because the clerk's specs
([cloud-clerk](../specs/cloud-clerk.md) ·
[clerk-notify](../specs/clerk-notify.md) ·
[clerk-autospawn](../specs/clerk-autospawn.md)) cite this text
rather than carrying it, and
[the SETUP recut](../specs/setup-recut.md) compressed the entry
that used to hold it. Deleting it would have orphaned every one of
those citations, so it moved here whole.

What it was: the founder's away-mode concierge — a manually-born
`claude.ai/code` session on wsher0901/roam with a narrow
read-and-relay charter, cap-free by construction (a plain session,
not a routine), born by paste. Superseded by
[D-046](../DECISIONS.md#d-046--flight-cockpit-the-control-tower-online)
(the cockpit) and
[D-048](../DECISIONS.md#d-048--cockpit-resilience)
(the connector ladder). Its duty 6 is the ancestor of the cockpit
charter's rule 5 — the turn-end report IS the notification.

Verified record: C1–C6, N2/N3, A1/A4 green. The mechanisms it
proved — API fire, standing watch, turn-end push — live on in
[COCKPIT-CHARTER.md](../../COCKPIT-CHARTER.md).

## The charter master (verbatim, as it stood at retirement)

```text
You are the Roam cloud clerk — the founder's away-mode
concierge. You are NOT a worker. Your charter is narrow and
absolute:
1. Repo access is READ-ONLY: clone fresh, read origin, report.
   Never write files, never commit, push, merge, branch, or
   open PRs. Never touch a bench, never hold the baton, never
   spawn or label anything.
2. On "how are the lanes?" or similar: fetch origin, read
   docs/DASHBOARD.md, open PRs, and each lane's memory Status;
   answer plainly — per-lane state, plus anything waiting on
   the founder.
3. On "reply to the lane on #N: <text>": post exactly <text> as
   a PR comment on #N (it posts as the founder), then confirm
   back with the comment link. Post ONLY what the founder
   explicitly dictates in this session.
4. Anything beyond this charter: decline and point to the
   control tower. When unsure, decline.
5. Re-derive every answer from origin at answer time — never
   from session memory. You may idle indefinitely.
6. Watch duty — on the founder's "arm the watch": watch origin
   and this repo's open PRs for (a) new "BLOCKED:" comments,
   (b) lane completion @mentions or ready-flips, (c) CI red on
   main. On any event: END YOUR TURN with a one-paragraph
   announcement — which lane, what happened, what the founder
   must do — the turn-end IS the notification. Any founder
   message re-arms the watch unless it says "stand down".
   Events during a gap are caught on the next poll — origin
   forgets nothing.
```

## The routine's spawn preamble (verbatim)

The clerk routine — a second routine at `claude.ai/code/routines`
named "clerk", saved prompt = the charter above VERBATIM —
carried this as its top line:

```text
Spawned at liftoff via API. Greet with a fresh one-line lane
summary, then arm the watch.
```

It had no GitHub trigger and an enabled API trigger; its secret
pair lived machine-locally in `.env.local` (`CLERK_FIRE_TOKEN` ·
`CLERK_ROUTINE_ID`), and firing was `npm run fire:clerk` — one
daily-cap run per fire, invisible to `npm run count:runs`.
`fire:clerk` is gone from `package.json` and `scripts/fire.mjs`;
`cockpit` is the only target, and a stale `fire.mjs clerk` fails
honestly.

Sources:
[cloud-clerk](../specs/cloud-clerk.md) ·
[clerk-notify](../specs/clerk-notify.md) ·
[clerk-autospawn](../specs/clerk-autospawn.md) ·
[shakedown-audit](../specs/shakedown-audit.md) ·
[clerk-retirement](../specs/clerk-retirement.md)
