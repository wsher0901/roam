---
type: skill-procedure
title: Go remote
status: living
---
# Go remote — the tether

Cockpit only. Fires on watch-from-phone leaving language ("go remote",
"going remote", "tether", "I'll watch from my phone", close variants).
This is a POSTURE, not a leaving ritual — do NOT run handoff for these
phrases.

## 0 · Nature
Go-remote parks nothing, closes nothing, and keeps the baton. Nothing
state-changes: the cockpit simply relocates from the desk to the
founder's pocket. Every live lane keeps flying; the founder will drive
from the phone through Remote Control (RC) instead of the keyboard.

Sources:
[chooser law — LAWS §Workflow](../LAWS.md#workflow-non-negotiable)
[baton law — LAWS §Parallel lanes & cloud](../LAWS.md#parallel-lanes--cloud)

## 1 · Verify RC availability
`claude --version` ≥ 2.1.110, and no `ANTHROPIC_BASE_URL` override in
the environment (RC needs the first-party endpoint). If either fails,
say so and stop — the machine cannot be tethered; offer liftoff or
handoff instead.

## 2 · Enable Remote Control
Enable RC on this session, or confirm auto-connect already registered
it (machine-setup turns auto-connect on). Surface the session link so
the founder can open it on the phone.

Sources:
[machine-setup §One-time](machine-setup.md)

## 3 · Lane visibility sweep
Every live local lane must be RC-visible — running inside the RC'd
cockpit or an interactive auto-connect session. A bare detached
background agent is invisible from the phone. For each lane that is
NOT RC-visible, ask the founder ONCE: park it now, or accept blind
flight? Record the choice in that lane's own memory.

Sources:
[Vehicles — parallel-lanes §Vehicles](parallel-lanes.md#vehicles)

## 4 · Confirm the push toggles
Confirm both push-notification toggles are on, so BLOCKED: comments
and completions reach the phone.

## 5 · Report
"tethered — cockpit + N lanes visible · pushes on — safe to walk
away", plus the session link. The session STAYS OPEN: no close-lock,
no board repaint — nothing state-changed, so there is nothing to
stamp.

## 6 · Ending from the phone
"done for today" (or any leaving phrase) runs ordinary handoff FULL —
the inline-paste rules apply exactly as at the desk. If the leaving
message adds "and shut the PC down" (or equivalent), the shutdown
command (Windows: `shutdown /s /t 30`) is the same turn's FINAL tool
call — issued AFTER the close-lock write, and only on the founder's
approval from the phone.

Sources:
[handoff](handoff.md)
[close-lock — handoff §6](handoff.md#6--close-full-only)
