# Packages

The below table explains why certain dependencies are required by the project in case their purpose isn't clear.

## Dependencies

| Package name | Purpose |
| ------------ | ------- |
|              |         |

[]()

## Dev Dependencies

Since the `react-scripts` build is served using an Express server, any module which is not directly required by the server is a dev dependency.

| Package name                | Purpose                                      |
| --------------------------- | -------------------------------------------- |
| @types/jest                 | Required for `expect()` in tests             |
| @testing-library/jest-dom   | Required for tests setup                     |
| @testing-library/react      | Required for writing tests                   |
| @testing-library/user-event | Simulating user events for testing           |
| @testing-library/dom        | Required by [@testing-library/user-event][1] |

[1]: https://github.com/testing-library/user-event#installation
