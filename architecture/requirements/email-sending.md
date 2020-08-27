# Email Sending

::: warning Work in progress
This document is still under development.
:::

## Tehchnical

- As we don't want to get stuck with any spesific email provider, we should use [django-anymail](https://github.com/anymail/django-anymail) and at least two providers. (Free / pay as you go plans will get us a long way.)
- Email marketing should be done via a separate tool so it gets done correctly.
- We need to build a log dashboard for admins. (See [anymail docs](https://anymail.readthedocs.io/en/latest/sending/signals/#post-send-signal), [issue #27](https://github.com/anymail/django-anymail/issues/27).)
- We should track all emails sent to be able to respond to support questions ("I didn't get confirmation email.") and abuse/errors (for example act if user marks valid emails as spam). [Mailgun webhook docs](https://documentation.mailgun.com/en/latest/user_manual.html#webhooks), [Anymail webhook docs](https://anymail.readthedocs.io/en/stable/sending/tracking/).
- We should have an easy way to create and use email templates. Should investigate [Maizzle](https://maizzle.com/).
- All transactional emails need to be rewritten and documented.
- Webhooks from sending backends need to be properly implemented so that things won't get out of sync. (For example if someone unsubscribe from the list, they should be changed in Djang db as well, or if they change their email, their list email probably needs changing as well etc.)
- We currently have an inconsistent way for figuring out the users primary email. This should be implemented in dead-simple and fullproof way.

## User Stories

### User

- As a user I should be able to opt in for a marketing email newsletter.
- As a user I should be able to change my preferred email address.

### DJ

- As a DJ I should be able to opt in for a newsletter designed for DJs.

### Admin

- As an admin I should be able to investigate all sent emails through easily searchable and long lasting local logs.
