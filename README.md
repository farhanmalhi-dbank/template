# Dbank Internal Tools React Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) - typescript.

---

# Suggested IDE and Plugins

Visual Studio Code is the suggested IDE for development, to ensure a coherent experience we have checked in the `.vscode` directory. And we suggest the following two plugins:

- `Prettier` by **Prettier**
- `ESLint` by **Microsoft**

---

# Installing and Running in Dev

- `npm i` to install dependencies.
- `npm start` to run the react app in dev mode.
- `npm test` to run the unit test in dev mode
- `npm run test:ci` to run the unit tests and show the coverage of each file
- `npm run test-e2e:run` to run the e2e tests in dev mode

# Running in Prod

- `npm run build` to create build.
- `npx react-inject-env set -d ./dist` to inject env.ts in dist folder

## Writing unit tests

We are using React Testing Library for UI unit testing with Jest for assertions.

### API Mocking

- Please use `nock` if you want to mock API calls. (Use addNock to set response object and body regex of the API call you want to mock).
- Use `renderWithClient` if the component is making GrahQL calls (i.e. using react-query hook)
- Usually, we require combination of both of the above
