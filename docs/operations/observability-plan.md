# Observability Plan

Smart ERP Next needs observable production behavior before it can be operated like a real ERP service. This plan defines minimum logs, metrics, traces, alerts, and SLOs.

## Signals

| Signal | Required content | First implementation target |
|---|---|---|
| Logs | timestamp, level, requestId, tenantId when safe, userId when safe, route, status, duration, error code | API structured logs and web server logs |
| Metrics | request rate, latency, error rate, DB latency, queue/webhook retries, login failures | Prometheus-compatible endpoint or exporter |
| Traces | API request path, DB calls, external integrations, background jobs | OpenTelemetry instrumentation |
| Events | deploys, migrations, backup/restore, incident state changes | Release and operations logs |

## Starter SLOs

| Service area | SLO | Alert threshold |
|---|---|---|
| API availability | 99.5% monthly successful health checks | 5 minutes of failed health checks |
| API latency | p95 under 800 ms for core endpoints | p95 over 1.5 s for 10 minutes |
| Web availability | 99.5% monthly homepage/dashboard success | 5 minutes of failed checks |
| Background jobs | 99% scheduled jobs complete within expected window | Any P0 job failure |
| Backups | Daily backup exists and restore-tested monthly | Missing backup or failed restore drill |

## Minimum alert set

- API/web health check failing.
- PostgreSQL unavailable or disk nearing capacity.
- Error rate above 5% for 10 minutes.
- Login failure spike or rate-limit spike.
- Migration failure.
- Backup failure or restore drill failure.
- Webhook retry queue growth.

## Production readiness checklist

- [ ] Dashboards exist for API, web, database, background jobs, and integrations.
- [ ] Alerts have owners and escalation channels.
- [ ] Runbooks link to alerts.
- [ ] Every production error exposes a request ID for support.
- [ ] Load-test baseline is recorded before major releases.
