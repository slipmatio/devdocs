# Authentication / security

::: warning Work in progress
This document is still under development.
:::

**Out of scope**: [user management](./user-management.md) like changing and resetting password etc do not belong here.

## Tehchnical

- Authentication should work well with mobile and also from third-party apps / outside of the main site.
- Authentication should be implemented with tokens (for native apps) + http-only session cookies (for internal apps).
- Prio 3: We should check all new passwords against [Pwned Passwords database](https://haveibeenpwned.com/Passwords). (There probably is a Django solution available already.)

## User Stories

### User

- **DONE:** As a user I should be able to login using email / password.
- **DONE:** As a user I should be able to log out easily.
- Prio 2: As a user I should be able to login with my Facebook account.
- Prio 2: As a user I should be able to login with my Google account.
- Prio 2: As a user I should be able to login with Apple ID.
- Prio 3: As a user I should be notified (by email) when I log in with a previously unseen device.
- Prio 3: As a user I should be able to protect my account with 2FA.

### Admin

- As an admin user I should be able to disable a user (prevent from loggin in).
- Prio 2: As an admin user I should be able to log a user out.

### Third-party Developer

- Prio 2: As a developer I should be able to implement Slipmat login using the API + tokens.
- Prio 3: As a developer I should be able to use Slipmat logins on a third-party site.
