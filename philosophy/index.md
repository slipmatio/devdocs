# Philosophy

Generic design principles and guidelines that govern the development of Slipmat3.

## Iterative Design

When developing new features, development should be splitted up in multiple iterations. At the very minimum: first iteration should be considered as private beta, iteration 2 public beta and iteration 3 the first generally available iteration. Feature flags should be used to be able to test with a small group and to push new features into production as fast as possible.

Feature development should be done via merge requests and tickets that have a standard templates that require pre-defined steps (like docs and testing) to be completed in order to merge.

## High Standards

While iteration is important, no new feature should be made publich without a decent amount of polish. In practise this means that even the very first iterations should look and feel finished, and things like testing and error handling should be implemented properly.

All features and important aspects of the functionality of the product should be covered with proper tests. All regressions should be fixed with acompanying integration tests.

All changes to the product should have a witten technical and end-user documentation. Technical documentation should be written partly as an implementation guide and end-user documentation should be available for every important part of the product.

## Privacy and Security

Security should be at the very heart of the product. We should be an example of a service that builds on strong security and embraces the privacy of its users. Our users should feel secure when using the platform and we should encourage best practises.
