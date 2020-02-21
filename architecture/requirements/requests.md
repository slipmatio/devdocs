# Request System

::: warning Work in progress
This document is still under development.
:::

## Technical

- The v2 init request can take nearly 1000ms. It's a POST that gets the whole user track collection and request system state back as the response. This should be either re-engineered totally or split into at least two cacheable GET requests of which the second one should be done in the background while idling. (We want to retain very fast searching but it's probably not necessary to have every single song in the app memory at all times.)
- Reading collection files should be done in background task.
- Maximum initial cold request time should be no more than 200ms with a library of 5000 songs.

## User Stories

### Listener

- As a listener I should be able to make requests from DJs collection.
- As a listener I should be able to make free requests that are not in DJs collection.
- As a listener I should be able to undo a request in a reasonable time (for example 5 s or so).
- As a listener I should be able to vote on requests.
- As a listener I want to be able to add details (like URL) to free request.

### DJ

- As a DJ I should be able to upload a collection file of at least 5000 songs without a problem.
- As a DJ I should be able to upload multiple collection files to form a bigger library.
- As a DJ I should be able to choose one or many sub-collections (uploaded files) to be used as the request library in my event.
- As a DJ I want to be able to mark a request as played.
- As a DJ I want to be able to mark a free request as "Don't have".

### Developer
