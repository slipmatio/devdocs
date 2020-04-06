# Events

::: warning Work in progress
This document is still under development.
:::

## Tehchnical

- V2 event fat models have become seriously obese. (The DJ-related app models.py is over 1600 lines long, user-related one is nearly 900 lines.) These need to be splitted into multiple packages and especially the main event model needs to be completely refactored to make it more lean.
- The warmup phase could be made optional. Many DJs don't have the need for a warmup phase so we might as well get rid of it for them.
- Instead of throwing live listeners to the street when ending each event should have a 30 min cooldown afte the set has ended.
- For typical events we should have states of: scheduled, in warmup, live, cooldown, archived.

## User Stories

### User

- As a user I should be able to list and read all non-private events via the API.
- As a user I should be able to read private events with a direct link via the API.

### DJ

- As a DJ I should be able to start an event with zero-configuration, just by starting my streamer.
- As a DJ I should be able to schedule my event far into the future.
- As a DJ I should be able to get a modern and well-working marketing page for my scheduled events after putting in proper metadata and content.
- As a DJ I should be able to list and read all my events (including private) via the API.
