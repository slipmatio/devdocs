# Architecture

- [Diagrams](./diagrams.md)
- [Requirements](./requirements/index.md)

## Software stack

### Backend

- Python 3.8
- Django 3

### Frontend

- Vue 2/3 w/ Vue CLI
- Tailwind CSS

### Opinionated Devtools

- VS Code
- Docker

## Devops

- GitLab
- Docker
- Traefik
- Netlify (main frontend)
- Zeit.co (docs)

## Code Organization

### Backend packags

- **core**
  - [Authentication](./requirements/authentication.md)
  - [Tags](./requirements/tags.md)
  - [Emails](./requirements/emails.md)
  - [Logs](./requirements/logs.md)
  - [Backups](./requirements/backups.md)
  - [Background tasks](./requirements/background-tasks.md)
  - [Search](./requirements/search.md)
  - [Tickets](./requirements/tickets.md)
  - [Feedback](./requirements/feedback.md)
- **events**
  - [Events](./requirements/events.md)
  - [Shows](./requirements/shows.md)
  - [Festivals](./requirements/festivals.md)
- **dj**
  - [DJs](./requirements/djs.md)
  - [Groups](./requirements/groups.md)
  - [Checklists](./requirements/checklists.md)
  - [Playlist Converter](./requirements/playlist-converter.md)
- **chat**
  - [Chat](./requirements/chat.md)
- **requests**
  - [Requests](./requirements/requests.md)
- **songs**
  - [Song Database](./requirements/songs.md)
- **users**
  - [Users](./requirements/users.md)
- **statistics**
  - [DJ analytics](./requirements/dj-analytics.md)
  - [Site analytics](./requirements/site-analytics.md)
- **money**
  - [Tips](./requirements/tips.md)
  - [Subscriptions](./requirements/subscriptions.md)
- **admin**
  - [Admin functionality](./requirements/admin-functionality.md)

## Third-party Packages

[WIP]

- [django-taggit](https://github.com/jazzband/django-taggit) for tagging
- [django-anymail](https://github.com/anymail/django-anymail) for emails
- [django-friendship](https://github.com/revsys/django-friendship) for managing friendships and blocks
- [django-q](https://github.com/Koed00/django-q) for backend tasks
- [django-rest-framework](https://www.django-rest-framework.org/) for the API
