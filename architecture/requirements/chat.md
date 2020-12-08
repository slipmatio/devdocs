# Chat

::: warning Work in progress
This document is still under development.
:::

## Tehchnical

- We should base the next stack on top of Matrix. Maybe Slipmat homeserver + Slipmat native Chat client for live events and Web + some 3rd-party client for off-event use.
- V2 implementation relies heavily in unstructured dictionaries passed between functions, these should be refactored as `ChatMessage` dataclasses for easier testing and development.
- V2 implementation works only half-way with websockets. New implementation should rely only on websockets for normal operation.
- Instead of (permanent) muting we should opt for timeout-concept instead: 2-10 min timeouts that automatically resolve. Timeous should add to negative Karma as well.
- There should be one megachannel plus always live DJ-channels.
- Messages should be stored on Redis first and only periodically saved back to main db.
- Chat should keep both a list of seen users and currently connected users.
- Chat should collect links and media posted on the channel in a browseable list.
- Chat should post channel rules to everyone on join. Optionally the rules need to be accepted before posting.
- Chat should remember channel message read status.
- We should do more investigations to third-party backends. In the long term developing our own chat platform is not a very smart thing to do, and things like e2e-encryption and native apps would be a great thing to have. Also having bridges to other platforms and apps would be a very good idea.

## User Stories

### User

- As a user I should be able to post to event chat.
- As a user I should be able to join other channels.
- As a user I should be able to message privately with 1 or more other listeners.
- As a user I should be able to message privately with myself.
- As a user I should be able to mute people (prevent seeing their public messages).
- As a user I should be able to block people (prevent sending private messages).
- As a user I should be able to edit my last message with an up arrow key.

### DJ

- As a DJ I should be able to appoint moderators per event and in general.
- As a DJ I should be able to block people from chat.
- As a DJ I should not receive private messages during live events.
- As a DJ I should have a private moderator channel for me and my moderators.

### Moderator

- As a moderator I should be able to give timeouts to people on chat.
- As a moderator I should be able to mark posted image as safe or NSFW.

### Developer

- As a developer I should be able to post to event chat via an API.
- As a developer I should be able to create webhook URLS for posting to a live events chat.

### Admin

- As admin I should be able to join (only) public channels unnoticed

## Notes

- This was very interesting (it only took about 2 months): https://matrix.org/blog/2020/12/07/gitter-now-speaks-matrix
