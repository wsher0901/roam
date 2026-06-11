// Placeholder entry point. The real engine contract (CheckModule,
// Verdict, orchestrator) is defined in V1.S3.T1 — do not extend this
// file before that task opens.

export const ENGINE_NAME = "roam-engine";

export function engineSmokeCheck(): string {
  return `${ENGINE_NAME} is wired up`;
}
