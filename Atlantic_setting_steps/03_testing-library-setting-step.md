## How Setting Jest as a unit testing test tool

**[⬅️ back to index](./00_index.md)**

### IMPORTANT!!! 
- *I use this tutorial to set up testingLibrary along side angular and jest* [*_LINK HERE_*](https://www.unicorn-utterances.com/posts/writing-better-angular-tests/)


### Nota:
  - Here you can find the [Angular Testing Library API Documentation](https://testing-library.com/docs/angular-testing-library/api)
  - [@testing-library/angular - Documentation](https://www.npmjs.com/package/@testing-library/angular)
  - This **Angular Testing Library** settin is based on [this tutorial](https://www.unicorn-utterances.com/posts/writing-better-angular-tests/)
-----


### Step - 1:  Setting up Jest
Now that the project has no Karma it can be setup with Jest

Install Jest
```bash
:~$ npm i -D @types/jest jest jest-preset-angular ts-jest @angular-builders/jest
```
This installs Jest, the types for Jest, a TypeScript pre-processor for Jest, and a preset that makes setting up Jest much easier.

### Step - 2: Configure Jest
The project now needs to know how to best utilize Jest. Creating and modify the following files will allow Jest to load it's own configuration.


```JS
jest.config.js
module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.ts'
    ]
};
```
```ts
jest.setup.ts
import 'jest-preset-angular';
```
```JSON
tsconfig.spec.json
{
  ...,
  "compilerOptions": {
    ...,
    "types": [
      "jest",
      ...
    ]
  }
}
```
```JSON
tsconfig.json
{
  ...,
  "compilerOptions": {
    ...,
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    ...
  },
  ...
}
```
```JSON
package.json
{
  ...,
  "scripts": {
    ...,
    "test": "jest --coverage --config ./jest.config.js", <- new
    "test:watch": "jest -o --watch --config ./jest.config.js", <- new
    ...
  },
  ...
}
```
```JSON
angular.json
{
  ...,
  "test": {
    "builder": "@angular-builders/jest:run" <- new
  }
  ....
}
```
Jest is now the test runner for the projectand it can be run with NPM, Yarn, or the Angular CLI. It can now be used in combination with Testing Library.

------

## Step - 3: Install Angular Testing Library
Now the project is ready to have better tests written for it and by using Angular Testing Library the tests can be simplified with some great helpers.

```bash
:~$ npm install --save-dev @testing-library/angular
```
- [**here are an Angular testing library tutorial**](https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library)

- [**here you find a real implementation of Angular component and test files with testing library examples**](https://github.com/testing-library/angular-testing-library/tree/master/apps/example-app/app/examples)


## Step - 4: Install Spectator
Now the project is ready to have better tests written for it and by using Angular Testing Library the tests can be simplified with some great helpers.

```bash
:~$ npm install --save-dev @testing-library/angular
```
- [**here are an Angular testing library tutorial**](https://ngneat.github.io/spectator/)

- [**here you find examples Angular component tested with spectator**](https://ngneat.github.io/spectator/docs/testing-components)
