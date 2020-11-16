# Development Log

These are short daily logs about the development process. Read also [development notes](./notes.md) for random thought and ideas that are bubbling behind the scenes.

## November 2020

- Published [@slipmatio/logger](https://www.npmjs.com/package/@slipmatio/logger) (WIP) and [@slipmatio/tailwind-config](https://www.npmjs.com/package/@slipmatio/tailwind-config) packages on NPM. These are our first public and open source NPM packages! The logger is an older project repackaged and needs a bit of work to be properly usable.

## October 2020

- Started a new [Slipmat Program Builder](https://program-builder.vercel.app) experiment project using the new project layout. It seems to work pretty well and most of the needed basic building blocks are now ready.
- Worked on the [new chat requirements](/architecture/requirements/chat.md).

## September 2020

- Started a new project from clean slate for Slipmat Admin for figuring out the best way to build new user-facing UIs for artists and users. This is based on Vue 3, automatically tested with Cypress and automatically deployed via Vercel.
- Also started experimenting with a [new datatable component](https://github.com/Uninen/datatable-experiment) ([live demo](https://datatable-experiment.vercel.app/)) that could be used in all Slipmat projects instead of writing every list view by hand. The rabbit hole was pretty deep here but the alpha component is currently already in use with the new admin site.

## August 2020

- Started a new project from clean slate for Slipmat Admin for figuring out the best way to build new user-facing UIs for artists and users. This is based on Vue 3, automatically tested with Cypress and automatically deployed via Vercel.

## March - July 2020

![Fine](https://media.giphy.com/media/NTur7XlVDUdqM/giphy.gif)

- As the world caught on fire (and COVID-19) most of the development effort has gone into the old code and helping DJs to play and earn money. Released quite a lot of new features and fixed a lot of old (and new) bugs.
- Built a first version of the new [Slipmat Event Planner](https://eventplanner.now.sh/) built from a totally blank slate just to get an idea of how the tool could work.

## February 2020

- Started building a [list of needed UI-mockups](/architecture/requirements/ui.md). We need tickets for these as well.
- Created first tickets for requirements and [built a dynamic list on the requirements page](/architecture/requirements/index.md) that shows the progress of the work.
- Started fleshing out [technical requirements](/architecture/requirements/index.md). This is going to be a big project in itself, but in the end very useful to be able to plan out the work and schedule.
- Sketched out [Slipmat 1, 2 and 3 architectures](/architecture/diagrams.md) based on an old diagram.
- Created (these) docs + started this dev log
- Posted [Slipmat.io Development Update 2/2020](https://backstage.slipmat.io/t/slipmat-io-development-update-2-2020/1864) to Backstage.

## January 2020

- Created the code project and deployed next.slipmat.io + api.slipmat.io. There is no functionality yet but the main development environment is now working and deployments are tested + fully automatic.
- More planning, made some initial software and hosting decisions. (Decided against K8s in favour of a lighter Traefik-based solution but still running on Docker.)

## Late 2019

- Designing, planning and some light prototyping.
- Created the repository on 2019-10-09.
