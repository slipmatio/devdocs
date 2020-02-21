# Authentication / security

::: warning Work in progress
This document is still under development.
:::

**Out of scope**: [user management](./user-management.md) like changing and resetting password etc do not belong here.

## Tehchnical

- Authentication should work well with mobile and also from third-party apps / outside of the main site.
- This should be implemented with JWTs or similarr tokens.

## User Stories

### User

- As a user I should be able to login with my Facebook account.
- As a user I should be able to login with my Google account.
- As a user I should be able to login using email / password.
- As a user I should be able to log out easily.
- As a user I should be notified (by email) when I log with previously unseen device.
- Prio 2: As a user I should be able to protect my account with 2FA.

### Admin

- As an admin user I should be able to log a user out.
- As an admin user I should be able to disable a user (prevent from loggin in).

### Developer

- As a developer I should be able to implement Slipmat login using the API + tokens.
- Prio 2: As a developer I should be able to use Slipmat logins on a third-party site.
