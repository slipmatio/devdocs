# Tags

::: warning Work in progress
This document is still under development.
:::

## Tehchnical

- We should use django-taggit (after fix for [#490](https://github.com/jazzband/django-taggit/issues/490) gets merged) and custon through models to gather more metadata about the relations.
- Custom model should have `is_featured` and `is_synonym` -attributes and we should have a system for managing synonyms (see [Discourse tag synonyms](https://meta.discourse.org/t/merging-tags-tag-synonyms/81869/16) for prior art)
