# Chat

::: warning Work in progress
This document is still under development.
:::

## Tehchnical

- V2 implementation relies heavily in unstructured dictionaries passed between functions, these should be refactored as `ChatMessage` dataclasses for easier testing and development.
- V2 implementation works only half-way with websockets. New implementation should rely only on websockets for normal operation.
- Instead of (permanent) muting we should opt for timeout-concept instead: 2-10 min timeouts that automatically resolve. Timeous should add to negative Karma as well.
- We should do more investigations to third-party backends. In the long term developing our own chat platform is not a very smart thing to do, and things like e2e-encryption and native apps would be a great thing to have. Also having bridges to other platforms and apps would be a very good idea.

## User Stories

### Listener

- As a listener I should be able to post to event chat.
- As a listener I should be able to message privately with other listeners.
- As a listener I should be able to mute people on chat.

### DJ

- As a DJ I should be able to appoint moderators per event and in general.
- As a DJ I should be able to block people from chat.
- As a DJ I should not receive private messages during live events.

### Moderator

- As a moderator I should be able to give timeouts to people on chat.

### Developer

- As a developer I should be able to post to event chat via an API.
- As a developer I should be able to create webhook URLS for posting to live event chat.
