#!/usr/bin/env node
// Routine-run counter: how many GitHub-triggered cloud-lane runs have
// fired today, and how many remain of the daily cap. A run fires when
// a PR gains the lane:cloud label (SETUP §Once and done — cloud
// accounts; the label-spawn route in parallel-lanes §Cloud spawn), so
// this counts today's `labeled` events with that label across the
// repo's recently-updated PRs, via `gh api` — read-only, zero deps.
//
// "Today" means since LOCAL midnight — an approximation of the
// provider's daily reset, chosen conservative: if the counter and the
// provider disagree, this one flips to "spent" earlier, never later.
// The cap constant (15/day, flat across Max tiers, confirmed) lives
// in SETUP §Once and done — cloud accounts; keep in step with it.
//
// Prints "<N> GitHub-triggered runs today · <15−N> remaining"; any
// API failure exits nonzero with a plain message — liftoff §2 then
// asks the founder for the remaining number rather than guessing.
import { execFileSync } from "node:child_process";

const DAILY_CAP = 15; // home: SETUP §Once and done — cloud accounts

function ghApi(path) {
  return JSON.parse(
    execFileSync("gh", ["api", path], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      // a 100-PR page overflows the 1 MB default (ENOBUFS)
      maxBuffer: 64 * 1024 * 1024,
    }),
  );
}

try {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // PRs updated today (open + closed) — a label event always bumps
  // updated_at, so nothing labeled today can be missed by this cut.
  const prs = ghApi(
    "repos/{owner}/{repo}/pulls?state=all&sort=updated&direction=desc&per_page=100",
  ).filter((pr) => new Date(pr.updated_at) >= midnight);

  let runs = 0;
  for (const pr of prs) {
    const events = ghApi(
      `repos/{owner}/{repo}/issues/${pr.number}/events?per_page=100`,
    );
    runs += events.filter(
      (e) =>
        e.event === "labeled" &&
        e.label?.name === "lane:cloud" &&
        new Date(e.created_at) >= midnight,
    ).length;
  }

  console.log(
    `${runs} GitHub-triggered runs today · ${DAILY_CAP - runs} remaining`,
  );
} catch {
  console.error(
    "count-routine-runs: could not read GitHub (gh api failed — offline, " +
      "unauthenticated, or rate-limited). Ask the founder for the " +
      "remaining run count; never guess.",
  );
  process.exit(1);
}
