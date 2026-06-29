# Incident Runbook

Use this runbook for production-impacting incidents affecting login, POS/orders, inventory, accounting, integrations, reports, or customer portal.

## Severity

| Severity | Definition | Response target |
|---|---|---|
| SEV-1 | System down, tenant isolation issue, financial/inventory corruption, data loss | Start response immediately |
| SEV-2 | Core workflow degraded for many users | Start within 30 minutes |
| SEV-3 | Non-critical feature broken or workaround exists | Start within 1 business day |

## First 15 minutes

1. Assign incident commander and scribe.
2. Confirm impact: affected tenants, modules, start time, user-visible symptoms.
3. Freeze risky deploys unless they are part of mitigation.
4. Capture links: CI run, deploy SHA, logs, dashboards, support tickets.
5. Decide mitigation: rollback, feature flag/config change, hotfix, or external provider escalation.

## Investigation checklist

- [ ] Check API/web health endpoints.
- [ ] Check database connectivity and recent migrations.
- [ ] Check error codes and request IDs from user reports.
- [ ] Check recent deploys and dependency changes.
- [ ] Check rate limits, auth failures, webhook retries, and background jobs.
- [ ] For financial/inventory issues, stop writes only if corruption risk is active.

## Communication template

```md
Status: Investigating / Mitigating / Monitoring / Resolved
Severity: SEV-1 / SEV-2 / SEV-3
Impact: Who and what workflows are affected
Started: YYYY-MM-DD HH:mm UTC
Current action: What the team is doing now
Next update: HH:mm UTC
```

## Resolution

- [ ] User impact is gone or accepted workaround is documented.
- [ ] Data repair/backfill plan is complete if needed.
- [ ] Monitoring confirms stability for at least 30 minutes for SEV-1/2.
- [ ] Postmortem owner and due date assigned.
- [ ] Follow-up gaps added to `GAPS.md` or issue tracker.
