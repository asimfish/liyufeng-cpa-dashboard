# CPA Dashboard

Static GitHub Pages frontend for the authenticated read-only center snapshot.
Enter the separately issued viewer token; the API origin is fixed, not taken from URL parameters.

The **账号管理** navigation opens the center HTTPS subpanel. It requires a separate
admin login and supports account import, connection URL, on-demand API key viewing,
status, a single probe, and pause/resume for added accounts. OAuth credentials and
account management keys are never stored in this repository. Read-only tokens and
model API keys cannot log in as an administrator.

On the owner’s Mac, from the deployment workspace:

```bash
python3 tools/cpa_web_access.py viewer  # copy read-only dashboard token
python3 tools/cpa_web_access.py admin  # copy account-management login credential
```

Account access keys are shared within an account, not across accounts. Header
shape and injected-state evidence do not independently prove model capability.
