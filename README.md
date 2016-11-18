## Prerequisites

[Node.js](http://nodejs.org/) >= v6 must be installed.

## Installation

```
git clone https://github.com/marsch/minicrm.git
cd minicrm
npm install
```

## Development Server

- `npm start` will run the app's development server at [http://localhost:3000](http://localhost:3000) with hot module reloading.

## Running Tests

- `npm test` will run the tests once.

- `npm run test:watch` will run the tests on every change.

## Building

- `npm run build` creates a production build by default.

   To create a development build, set the `NODE_ENV` environment variable to `development` while running this command.

- `npm run clean` will delete built resources.
