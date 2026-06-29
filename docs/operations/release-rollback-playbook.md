# Release and Rollback Playbook

This playbook defines how Smart ERP Next releases should be promoted, verified, and rolled back.

## Release candidate checklist

- [ ] PRD/requirements changes are approved for user-facing modules.
- [ ] ADR exists for architecture/API/data compatibility changes.
- [ ] `pnpm qa:commit` passes.
- [ ] API E2E and web E2E pass against migrated database.
- [ ] Database migrations are reviewed for backward compatibility and rollback/data repair strategy.
- [ ] Security-sensitive changes are reviewed by a security owner.
- [ ] Release notes include user-visible changes, migration notes, and known issues.

## Deployment sequence

1. Build immutable artifacts/images from the release SHA.
2. Deploy to staging and run smoke tests.
3. Run migration dry-run or backup verification if schema changes exist.
4. Promote to production during approved window.
5. Run post-deploy smoke tests for login, dashboard, POS/order, inventory, accounting/reporting, and status API.
6. Monitor error rate, latency, DB health, and support channels.

## Rollback decision tree

Rollback immediately when:

- Login or tenant isolation is broken.
- POS/orders, inventory, or accounting writes corrupt data.
- Error rate stays above threshold after mitigation.
- A migration blocks startup and cannot be fixed safely in place.

Prefer hotfix/config mitigation when:

- Issue is isolated to a non-critical feature.
- Data model is forward-only and rollback would be riskier.
- A feature flag or environment variable can disable the path safely.

## Rollback checklist

- [ ] Announce rollback decision and owner.
- [ ] Stop new deploys.
- [ ] Restore previous artifact/image.
- [ ] Verify database compatibility; do not roll back schema blindly if data migration is irreversible.
- [ ] Run smoke tests.
- [ ] Monitor for at least 30 minutes.
- [ ] Open postmortem and update `GAPS.md` with prevention work.
