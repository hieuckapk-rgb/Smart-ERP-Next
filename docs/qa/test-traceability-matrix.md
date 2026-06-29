# QA Test Traceability Matrix

This matrix links product requirements, risk level, automated coverage, and release gates. It should be updated whenever a module PRD or acceptance criteria changes.

## Risk levels

| Risk | Definition | Required coverage |
|---|---|---|
| P0 | Security, money, payroll, inventory integrity, tenant isolation | Unit + integration + E2E/contract + manual release checklist |
| P1 | Core user workflow or critical report | Unit/integration + E2E smoke |
| P2 | Secondary workflow or admin setting | Unit or integration + manual checklist if UI-heavy |
| P3 | Cosmetic/docs-only | Review + targeted checks |

## Matrix

| Module | Requirement source | Risk | Automated tests | Manual/release check | Owner |
|---|---|---|---|---|---|
| Auth/permissions | PRD/role matrix | P0 | API auth tests, roles E2E | Verify admin/staff/customer denial paths | QA + Security |
| POS/order payment | Sales PRD | P0 | POS checkout E2E, order integration tests | Cash/transfer receipt sanity check | QA + Backend |
| Inventory movements | Inventory PRD | P0 | Inventory workflow E2E, service tests | Negative stock and transfer review | QA + Backend |
| Accounting journal | Accounting PRD | P0 | Accounting service tests, reports E2E | Trial balance and tax sample review | QA + BA |
| Customer portal | Customer PRD | P1 | Portal API tests, order detail E2E | Customer login and tracking path | QA + Frontend |
| Forecast/reporting | Forecast docs | P1 | Forecast API tests, analytics E2E | Compare sample forecast accuracy | QA + Data |
| Integrations/webhooks | Integration docs | P1 | Webhook/API tests | Retry and signature checks | QA + DevOps |
| Settings/i18n | Settings PRD | P2 | i18n audit, settings E2E | Vietnamese/English spot check | QA + Docs |

## Flaky test policy

- A flaky test must be tagged with owner, failure signature, and fix deadline.
- Do not delete coverage without adding equivalent coverage or documenting why risk changed.
- Quarantine is allowed only when the release manager approves and the risk has a manual mitigation.

## Release evidence

Every release should attach:

- CI run link.
- E2E run summary.
- Known flaky tests and mitigation.
- Manual checks for P0 modules.
- Open production risks and owner sign-off.
