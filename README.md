# CPA Dashboard

The dashboard now lives at <https://edocf.wznln.com:8443/dashboard/>. Detection and
account management share one navigation shell. Switching panels preserves the
management login and unfinished import form; it does not open another tab.

This GitHub Pages site is the compatibility entry and redirects to the fixed
center URL once. It never forwards tokens, query parameters, or stored credentials.
Bookmark the center URL for direct access.

The center hosts the account panel in a **same-origin** frame, with matching colors,
responsive height, desktop/mobile layouts, and a recoverable loading state.
Management uses a Secure/HttpOnly/SameSite=Strict session with CSRF protection.
Only the center origin may frame it. The parent receives readiness, height, and
login-state notifications, never passwords or API keys.

After administrator login, the overview uses the same session; a separate viewer
token is optional for read-only access. Viewing a client key remains an explicit
action, and the key is hidden when leaving the management panel. Read-only tokens
and model API keys cannot log in as an administrator.

On the owner's Mac, from the deployment workspace:

```bash
python3 tools/cpa_web_access.py admin --open  # copy admin credential and open the embedded panel
python3 tools/cpa_web_access.py viewer --open  # copy read-only token and open the overview
```

Account access keys are shared within an account, not across accounts. Header
shape and injected-state evidence do not independently prove model capability.
No OAuth credentials, management keys, or client keys are stored in this repository.
