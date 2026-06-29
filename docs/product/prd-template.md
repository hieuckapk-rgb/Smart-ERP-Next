# Product Requirements Template

Use this template before implementing or changing any Smart ERP Next module. The goal is to make every business requirement traceable to acceptance criteria, API/UI changes, and tests.

## 1. Metadata

| Field | Value |
|---|---|
| Module | Sales / Inventory / Accounting / HR / CRM / Manufacturing / Reporting / Settings |
| PRD owner |  |
| Engineering owner |  |
| QA owner |  |
| Target release |  |
| Status | Draft / Review / Approved / Shipped |

## 2. Problem statement

- Who has the problem?
- What workflow is blocked or slow today?
- What business risk appears if we do not solve it?

## 3. Personas and permissions

| Persona | Goal | Permissions needed | Out of scope |
|---|---|---|---|
| Business owner |  |  |  |
| Accountant |  |  |  |
| Warehouse staff |  |  |  |
| Sales staff |  |  |  |

## 4. Success metrics

| Metric | Baseline | Target | Measurement source |
|---|---:|---:|---|
| Task completion rate |  |  | E2E/user testing |
| Time to complete workflow |  |  | Analytics/session replay |
| Error/retry rate |  |  | API logs/status API |
| Support tickets |  |  | Support triage log |

## 5. Requirements

| ID | Requirement | Priority | Business rule | Acceptance criteria | Test link |
|---|---|---|---|---|---|
| REQ-001 |  | Must |  | Given/When/Then |  |
| REQ-002 |  | Should |  | Given/When/Then |  |

## 6. API/UI/data impact

| Area | Change | Owner | Migration/backfill needed? |
|---|---|---|---|
| API |  |  |  |
| Web UI |  |  |  |
| Database |  |  |  |
| Reports/export |  |  |  |
| Permissions |  |  |  |

## 7. Release checklist

- [ ] Requirements reviewed by Product + BA/domain SME.
- [ ] API and UI owners agree on acceptance criteria.
- [ ] QA maps every Must requirement to an automated or manual test.
- [ ] Security/privacy impact reviewed for PII, finance, payroll, or customer data.
- [ ] Rollback path documented if migration or integration behavior changes.
- [ ] `GAPS.md`, module docs, and release notes updated when relevant.
