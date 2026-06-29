# Security Baseline

Smart ERP Next handles customer, finance, inventory, HR, and integration data. This baseline defines the minimum security program expected before production releases.

## Threat model checklist

| Area | Threat | Required control |
|---|---|---|
| Authentication | Token theft, weak secrets, brute force | Strong JWT secret, refresh rotation, rate limits, secure storage |
| Authorization | Privilege escalation, broken tenant isolation | Role/permission tests, tenant scoping in queries, deny-by-default guards |
| Input/data | Injection, unsafe imports, malformed files | Zod validation, file type checks, size limits, sanitized exports |
| Accounting/inventory | Fraudulent or inconsistent writes | Audit logs, idempotency, approval flows, immutable history where needed |
| Integrations | Webhook spoofing, replay attacks | Signature verification, timestamps, retry limits, secret rotation |
| Operations | Secret leakage, vulnerable dependencies | Secret scanning, dependency scanning, container scanning, least privilege |

## CI/security controls to add

- Secret scanning for committed credentials.
- Dependency audit for Node packages.
- Container image vulnerability scan for release images.
- SAST for TypeScript/NestJS/Next.js patterns.
- Permission matrix tests for sensitive modules.
- SBOM generation for releases.

## Production configuration requirements

- `JWT_SECRET` and all integration secrets must be environment-provided; no production fallback.
- Swagger/OpenAPI docs must not expose sensitive production endpoints without gating.
- Cookies/tokens must use secure settings appropriate to deployment mode.
- Rate limits must exist for login, password reset, imports, exports, and webhooks.
- Backups must be encrypted and restore-tested.

## Review checklist for PRs

- [ ] Does this change touch auth, permissions, tenant scoping, finance, payroll, inventory, import/export, or integrations?
- [ ] Are validation and error handling explicit?
- [ ] Is sensitive data excluded from logs and client errors?
- [ ] Are tests covering unauthorized and cross-tenant access?
- [ ] Are new secrets documented with rotation guidance?
