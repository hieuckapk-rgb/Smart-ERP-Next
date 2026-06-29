# API Error Catalog

All API errors should be predictable so web, mobile, integrations, and support teams can diagnose failures quickly.

## Standard envelope

```json
{
  "success": false,
  "error": {
    "code": "PRODUCT_NOT_FOUND",
    "message": "Product was not found",
    "details": {},
    "requestId": "req_..."
  }
}
```

## Error code naming

- Use upper snake case: `ORDER_ALREADY_PAID`, `INSUFFICIENT_STOCK`.
- Prefix with the business domain when useful: `INVENTORY_NEGATIVE_STOCK`, `ACCOUNTING_PERIOD_CLOSED`.
- Do not reuse a code for a different meaning.

## Core errors

| Code | HTTP | Meaning | Client action |
|---|---:|---|---|
| VALIDATION_FAILED | 400 | Request shape or business validation failed. | Show field-level errors and keep user input. |
| UNAUTHENTICATED | 401 | Missing or invalid token. | Redirect to login or refresh token. |
| FORBIDDEN | 403 | User lacks permission. | Show access denied and log support context. |
| NOT_FOUND | 404 | Resource does not exist or is hidden by tenant isolation. | Show not found state. |
| CONFLICT | 409 | State changed or duplicate business key. | Reload data or show conflict resolver. |
| RATE_LIMITED | 429 | Endpoint throttle exceeded. | Retry after delay and show friendly message. |
| INTERNAL_ERROR | 500 | Unexpected server error. | Show retry/support path with request ID. |

## Domain errors to standardize next

| Domain | Candidate codes |
|---|---|
| Inventory | INSUFFICIENT_STOCK, INVENTORY_LOCATION_REQUIRED, STOCK_MOVEMENT_LOCKED |
| Orders/POS | ORDER_ALREADY_PAID, PAYMENT_AMOUNT_INVALID, PRICE_CHANGED |
| Accounting | ACCOUNTING_PERIOD_CLOSED, JOURNAL_ENTRY_UNBALANCED, TAX_CODE_INVALID |
| HR/Payroll | PAYROLL_PERIOD_LOCKED, LEAVE_BALANCE_EXCEEDED |
| Integrations | WEBHOOK_SIGNATURE_INVALID, EXTERNAL_RATE_LIMITED, SYNC_CONFLICT |

## Review checklist

- [ ] New errors are added to this catalog.
- [ ] Frontend maps the error to a user-friendly message.
- [ ] Tests assert error `code`, HTTP status, and request ID behavior.
