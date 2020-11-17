# Contributing

Slipmat is a community project and all contributions are welcome.

## Tools

Slipmat development doesn't require any specific tools. You do, however, need to have a working development environment for Python 3 for backend code and Node / TYpeScript for frontend code.

#### Languages

Current Slipmat codebase is currently written with

- Python
- Go
- Node
- TypeScript
- JavaScript

#### Required tooling

You need the following:

- Node LTS
- TypeScript
- Git
- GitLab account
- Discord account
- Slipmat / Backstage account

#### Recommended tooling

Apart from GitLab, you can use whatever tools work best for you, the following are just recommendations.

- VSCode
  - Vetur extension for Vue development
  - Live Share extension for pair programming
  - Tailwind Intellisense extension for TailwindCSS
- Docker for running backend services
- Gitlab Runner for local testing

## Coding Guidelines

We follow [Contributing to Django](https://docs.djangoproject.com/en/3.1/internals/contributing/) guidelines as far as they make sense for Slipmat with the followin exceptions:

### Version control

- We are in process of moving to conventional commits and all new projects and new commits should use that format
- All code should be merged to trunk via marge requests, and merge requests should be reviewed and tested

### Frontend

- Follow [Vue 3 Style Guide](https://v3.vuejs.org/style-guide/)
- For code formatting, use repo-specific linting and formatting rules, namely
  - Standard style as base
  - No semi, single quote, trailing comma where it's allowed
  - Configure your editor to lint and format on save
- All new code must be tested, no exceptions. Aim for 90%+ coverage

## Contributor Responsibilities

Slipmat is a community project and not owned by any company. This means that individuals are responsible for developing and running the services. Currently all code is owned by Ville Säävuori and he is also the controller and processor of GDPR-related data. Our aim is to move Slipmat under a non-profit corporation or a similar entity but before that happens we want to make sure all our volunteers understand they responsibilities and only participate as much as they feel comfortable.

To put it short: Slipmat volunteers are not responsible for anything that happens on Slipmat or because of Slipmat.

### Contributor License Agreement

Slipmat is not yet open source (we hope to be one day) and it's important that all contributors sign the Contributor License Agreement so that the code ownership is clear. By signing the CLA, you state that you are entitled to contibute that code and are willing to it be used by Slipmat and any derivative works. The CLA also ensures that once you have provided a contribution, you cannot try to withdraw permission for its use at a later date.

CLA is a license agreement, not a copyright assignment. You still maintain the full copyright for your contributions. You are only providing a license to Slipmat to distribute your code without further restrictions.

When you volunteer for development work on Slipmat, we will ask you to sign a CLA before you commit any code.
