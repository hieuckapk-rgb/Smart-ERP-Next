# ADR 0001: Record Architecture Decisions

## Status

Accepted

## Context

Smart ERP Next is a monorepo with a NestJS API, Next.js web app, PostgreSQL/Drizzle database package, shared UI/util packages, sync/offline logic, and accounting logic. Production ERP changes often affect multiple roles and modules, so architectural decisions need a durable record.

## Decision

Use Architecture Decision Records (ADRs) for decisions that affect public APIs, data models, module boundaries, deployment, security posture, offline sync, integrations, or release operations.

## ADR rules

- Store ADRs in `docs/adr/`.
- Use sequential filenames: `0002-short-title.md`, `0003-short-title.md`.
- Status values: `Proposed`, `Accepted`, `Superseded`, `Deprecated`.
- Every ADR must include Context, Decision, Consequences, Alternatives considered, and Review date.
- Link ADRs from PRs that implement the decision.

## Template

```md
# ADR NNNN: Title

## Status

Proposed / Accepted / Superseded / Deprecated

## Context

What problem are we solving? What constraints exist?

## Decision

What are we choosing?

## Consequences

Positive and negative outcomes.

## Alternatives considered

Options rejected and why.

## Review date

YYYY-MM-DD
```

## Consequences

- Maintainers can review API versioning, domain refactoring, and production-readiness changes consistently.
- New contributors can understand trade-offs without reverse-engineering old PRs.
