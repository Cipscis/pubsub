# Pubsub Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.1] - 2022-04-02

### Changed

* Converted to TypeScript
* Updated build system

## [2.0.0] - 2021-06-30

### Added

* Both `publish` and `subscribe` can now take multiple events using single string with each event name separated by whitespace. This is a breaking change because event names can no longer contain whitespace.

## [1.0.3] - 2021-06-17

### Changed

* Rewrote demonstration code to have no dependencies.
* Updated `README.md`

## [1.0.2] - 2021-06-17

### Added

* Added a test for passing arguments through to subscribed functions when using `publish`

### Changed

* Moved change log into `CHANGELOG.md`

## [1.0.1] - 2021-06-16

### Added

* Updated tests to use [Jasmine](https://jasmine.github.io/)

## [1.0.0] - 2021-06-13

### Added

* Initial release, with `subscribe`, `publish`, and `unsubscribe` methods.

## [0.1.0] - 2021-06-13

### Added

* Initial commit
