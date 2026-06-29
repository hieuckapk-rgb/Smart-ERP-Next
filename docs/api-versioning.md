# API Versioning and Compatibility Policy

This policy turns the API governance gap into an implementation checklist for backend, frontend, integration, and QA work.

## Versioning model

- Current default API remains unversioned until the first public compatibility break is planned.
- New externally consumed endpoints should be introduced under `/api/v1/...` when they are expected to be stable for web, mobile, partners, or customer portal clients.
- Breaking changes require a new version (`/api/v2/...`) or a backwards-compatible transition period.
- Internal-only endpoints must be documented as internal and must not be consumed by external clients.

## Backward compatibility rules

Compatible changes:

- Adding optional request fields.
- Adding response fields when clients ignore unknown fields.
- Adding new endpoints.
- Adding enum values only when clients have fallback handling.

Breaking changes:

- Removing or renaming fields.
- Changing field types or date/currency formats.
- Making optional fields required.
- Changing pagination, authentication, authorization, or error semantics.
- Reusing an error code for a different meaning.

## Deprecation policy

1. Create an ADR for the breaking change.
2. Add migration notes to `docs/api.md` or the module-specific API doc.
3. Keep the old version available for at least one minor release unless there is a critical security issue.
4. Add warning logs/headers where practical.
5. Add E2E or contract tests for both old and new behavior during the transition.

## Contract test checklist

- [ ] Endpoint has request/response examples.
- [ ] Error responses use the shared error envelope.
- [ ] Pagination/filtering behavior is covered where applicable.
- [ ] Authenticated/unauthenticated paths are tested.
- [ ] Role/permission matrix is tested for sensitive modules.
- [ ] Frontend/API integration tests are updated before removing legacy behavior.
