---
type: history
id: sources-restamp
shipped: 2026-09-11 14:33 UTC
pr: #364
synthesis: deferred — D-086
---
# sources-restamp — the three weather spikes, re-run and restamped

## Status
shipped — merged [#364](https://github.com/wsher0901/roam/pull/364) on
2026-09-11, after the batched external Web review passed it on an
independent clone, its reviewer having re-run the spikes.

All three weather spikes re-run today, the Open-Meteo terms page
re-read, and the four stamps in [SOURCES](../../../../data/SOURCES.md)
carry today's date and today's observed values. Nothing
contradicted a grade, freshness window, coverage claim or cost
line, so nothing else moved and the bench never had to block.

Repaired at the critic round: the licence stamp now carries a
captured, re-runnable artifact like the three spikes, and the spec
was widened so the contract demands that of every re-verification
rather than of spikes alone.

## What this task is
[SOURCES](../../../../data/SOURCES.md)'s three weather spike stamps and its
Open-Meteo licence line all read 2026-06-12. This bench re-runs
`weather-forecast.mjs`, `weather-climatology.mjs` and
`weather-alerts.mjs`, then restamps those four lines with today's
date and today's observed values — keys present, days of history,
active-alert count.

Nothing else moves. A grade, freshness window or coverage claim
changes ONLY if a spike contradicts it, and then the bench STOPS
with a `BLOCKED:` comment rather than editing it — a demotion takes
evidence and a D-number. The [IDEAS](../../../../IDEAS.md) T7 rider stays
open: T7 re-runs every spike in the registry at consolidation,
including the families that do not exist yet.

## Pending issues
none. No spike contradicted anything it was measured against.

## Left / idle
nothing. The payload is complete and pushed; the bench waits on
review and the merge word.

## The story
Born bench-first from freshly pulled `main` (`a893524`) as lane B of
the test flight — the dress rehearsal for
[V1.S1](../../../../ROADMAP.md#v1s1--data-definition-the-gate-docs--spike-scripts-only-no-app-code)
T3–T6, run as an agent team with the founder at the desk. Canary
pushed, ack read back from origin as a commit
(`airborne · work PC agent team · 2026-09-11`), then the work.

**The three runs.** Each script was read before it was run, so the
stamps quote values the script actually prints rather than values
the old stamp asserted. All three succeeded first try — no retries,
no transient failures against either live API. Their verbatim
output is below, by command.

**The forecast spike held every claim it touches.** All fourteen
hourly Dictionary keys came back, `missing vs Dictionary: none`,
plus `uv_index_max` daily; the horizon printed 7 days, which is what
the entry's "7 days spiked" says. The old stamp said "all Dictionary
keys present" — true, and now said with the count and the
zero-missing line that prove it.

**The climatology spike returned numbers identical to June's.** Mean
daily max 6.8 °C and 18.0 rain days per October, the same two values
the old stamp carried, from the same 3,653-day 2016–2025 ERA5 window.
That is the entry's own "yearly recompute (near-immutable)" freshness
claim behaving exactly as written: a fixed historical window does not
drift between June and September. The stamp now also carries the days
of history returned and the mean daily min (2.8 °C), so a cold reader
can see the run was real rather than copied.

**The alerts count moved, which is why it is observed and not
recalled.** The Miami point had no active alerts, so the script fell
back to area FL as designed and found **3** — not June's 2. A Flood
Advisory for Bay and Walton counties was the first feature, and its
payload carried every key the entry's "Confirmed keys" line names
(event, severity, urgency, certainty, onset, expires, ends, status,
messageType, areaDesc, headline, description, instruction) inside a
32-key CAP payload. Claim intact; count restamped.

**The licence line was re-verified, not assumed — and at the critic
round it gained the artifact that proves it.** open-meteo.com/en/terms
was fetched and read today: CC-BY 4.0, attribution required, free
tier under 10,000 calls/day for non-commercial use, and no
share-alike condition anywhere on the page. That matches the entry's
licence class, its attribution note, its "no share-alike
contamination" reading and its cost line, so only the `verified`
date moved. Had the page been unreachable, the stamp would have
stayed at 2026-06-12 and the bench would have blocked — a
verification date is a claim about an act performed, not a date to
refresh on faith.

**But as first written this bench held that stamp to a WEAKER
standard than the three cheap ones, and the critic was right to
catch it.** The three spike stamps could each be re-derived by a
cold reader running a command; the licence stamp could not, and the
account of the page given here was exactly the set of claims the
entry already asserts — so the record could not tell a real read
apart from a restatement of the thing being verified. That is an
evidentiary hole whether or not the fetch happened, and the
expensive stamp is precisely the one that must not rest on trust.
The page has been re-fetched with `curl` and the SENTENCES THAT
CARRY THE CLAIMS are pasted verbatim below, with the URL, the
retrieval time and a re-runnable command — the same standard the
three spikes met. The wording is the page's own, not a paraphrase:
"Less than 10'000 API calls per day" and "the terms of the CC-BY
4.0 licence" are quotations, and the apostrophe-as-thousands-separator
is Open-Meteo's own typography rather than the entry's "10,000".

**The spec shared the fault, so the spec was widened.** Its Plan
step 2 scoped by-command capture to the three spikes, and Done-means
item 1 named only the spikes — so the fourth stamp was never
required to leave a trace, and a bench that met its contract exactly
would still have shipped the hole. Plan step 2 now covers the
licence re-verification and Done-means carries its own box, per the
dual-write rule: the contract takes the edit, this file narrates it.

**The hard-stop rule never fired.** Every observed value was
compared against the claim standing beside it — keys against
"Confirmed keys", horizon against "7 days spiked", days of history
against the cost line's "3,653 days in a single response", the alert
payload against the alerts "Confirmed keys", the terms page against
the licence and cost lines. Nothing came back short, so no grade,
freshness window, coverage claim or cost line was touched, and no
`BLOCKED:` comment was owed. The diff is four lines in
[SOURCES](../../../../data/SOURCES.md), this memory, and the spec.

**One gotcha, environmental and worth the next lane's minute.** A
fresh agent-team worktree carries an EMPTY `node_modules`, so
`npm run build` fails there with Next reporting "node_modules/next
was removed, renamed, or has a broken symlink" — nothing to do with
the diff. Vitest, ESLint and Prettier survive it by resolving up to
the clone root; Next does not, because it fixes its workspace root
at the worktree's own lockfile. `npm ci` in the worktree fixes it,
and the build then passes clean. The full CI mirror is green here
and on the pushed head.

## The runs, by command
Run from the repository root on 2026-09-11. A cold reader re-runs
these four commands and compares — the three spikes, and the
licence page that the fourth stamp rests on.

`node scripts/spikes/weather-forecast.mjs`

```text
location: 64.139565 -21.971603 Atlantic/Reykjavik
hourly keys returned: time, temperature_2m, apparent_temperature, precipitation_probability, precipitation, rain, snowfall, snow_depth, weather_code, wind_speed_10m, wind_gusts_10m, cloud_cover, visibility, relative_humidity_2m, uv_index
missing vs Dictionary: none
daily keys returned: time, uv_index_max

sample @ 2026-09-11T12:00
  temperature_2m: 8.1 °C
  apparent_temperature: 3.4 °C
  precipitation_probability: 100 %
  precipitation: 0 mm
  rain: 0 mm
  snowfall: 0 cm
  snow_depth: 0 m
  weather_code: 3 wmo code
  wind_speed_10m: 22.3 km/h
  wind_gusts_10m: 39.2 km/h
  cloud_cover: 100 %
  visibility: 33140 m
  relative_humidity_2m: 75 %
  uv_index: 1.95 
forecast horizon (days available): 7
```

`node scripts/spikes/weather-climatology.mjs`

```text
daily keys returned: time, temperature_2m_max, temperature_2m_min, precipitation_sum, wind_speed_10m_max, sunshine_duration
days of history returned: 3653

October normals (Reykjavik, 10y ERA5):
  mean daily max temp: 6.8 degC
  mean daily min temp: 2.8 degC
  rain days (>=1mm) per October: 18.0
  mean daily max wind: 23.0 km/h
  mean sunshine h/day: 4.3
```

`node scripts/spikes/weather-alerts.mjs`

```text
scope: area FL; active alerts: 3
first alert payload keys: @id, @type, id, areaDesc, geocode, affectedZones, references, sent, effective, onset, expires, ends, status, messageType, category, severity, certainty, urgency, event, sender, senderName, headline, description, instruction, response, note, parameters, scope, code, language, web, eventCode

sample:
  event: Flood Advisory
  severity: Minor
  urgency: Expected
  onset: 2026-09-11T08:40:00-04:00
  expires: 2026-09-11T11:45:00-04:00
  areaDesc: Bay, FL; Walton, FL
```

### The licence re-verification
URL: `https://open-meteo.com/en/terms`, retrieved
2026-09-11T13:39:08Z. ONE fetch produced every value below — the
status and size, the sentences, and the share-alike count — so no
line here is spliced from a different retrieval:

```sh
curl -sS -L -o terms.html -w "HTTP %{http_code} BYTES %{size_download}" https://open-meteo.com/en/terms
echo
grep -oE "Less than [^<]+|You may only use the free API[^<]+|You accept to the CC-BY 4.0 licence[^<]*|the terms of the CC-BY 4.0 licence[^<]*" terms.html
grep -cioE "share-alike|BY-SA|ShareAlike" terms.html
```

```text
HTTP 200 BYTES 37511
Less than 10'000 API calls per day, 5'000 per hour and 600 per minute.
You may only use the free API services for non-commercial purposes.
You accept to the CC-BY 4.0 licence, as specified in the 
the terms of the CC-BY 4.0 licence,
0
```

Reading it. The first two lines are the page's "Non-Commercial
Use" section, and the first carries the cost line's limit in the
page's own typography — `10'000`, apostrophe as thousands separator,
which the entry renders as 10,000. The third and fourth are the
licence class, stated twice on the page: once in Non-Commercial Use
and once in the ownership section. Both print short because
`grep -o` emits only the matched span and the pattern stops at the
`licence conditions` hyperlink that follows each; the ownership
sentence reads in full "The data obtained through the API is
provided under the terms of the CC-BY 4.0 licence, as specified in
the licence conditions."

**The final `0` is the load-bearing line.** The entry's "no
share-alike contamination" reading is a claim about an ABSENCE, and
an absence cannot be evidenced by quoting what IS there — so the
count of `share-alike`, `BY-SA` and `ShareAlike` across the whole
fetched page stands in for it, and it is zero.

Every claim the entry makes about this source is therefore pinned to
a line above: `license_class: CC-BY-4.0` to the two CC-BY sentences,
the attribution requirement to the licence they name, the cost
line's free-tier limit to the first sentence, and the no-share-alike
reading to the zero.

## Where to look
- [SOURCES](../../../../data/SOURCES.md) — the four restamped lines: the
  `weather-forecast`, `weather-climatology` and `weather-alerts`
  Spike lines, and the `weather-forecast` licence `verified` date.
- `scripts/spikes/weather-forecast.mjs` ·
  `scripts/spikes/weather-climatology.mjs` ·
  `scripts/spikes/weather-alerts.mjs`.
- [IDEAS](../../../../IDEAS.md) — the T7 rider, deliberately untouched.
- [the spec](../../../specs/sources-restamp.md) · PR #364.
