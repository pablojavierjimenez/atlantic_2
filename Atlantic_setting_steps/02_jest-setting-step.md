## How Setting Jest as a unit testing test tool

**[⬅️ back to index](./00_index.md)**

### *IMPORTANT!!! 
- *I use this tutorial to set up again* [*_LINK HERE_*](https://www.youtube.com/watch?v=cnfpdSzSUH4&ab_channel=TypeWithMe)
- [Angular jest builder](https://github.com/just-jeb/angular-builders/tree/master/packages/jest#jest-builder-for-angular-build-facade)

### Nota:
  - Here you can find the [Jest API Documentation](https://jestjs.io/docs/en/api)
  - [Angular jest builder - Documentation](https://www.npmjs.com/package/@angular-builders/jest)
  - This **Jest** settin is based on [this tutorial](https://dev.to/alfredoperez/angular-10-setting-up-jest-2m0l)
-----

- **Step 1: Install dependenciaes**

  ```bash
  #Romoving karma-jasmine test dependencies files:
  :~$ npm remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
  :~$ rm karma.conf.js src/test.ts

  # Install Jest as a globbal dependency
  :~$ npm install jest -g

  # Install Jest as a globbal dependency
  :~$ npm i -D jest jest-preset-angular @types/jest @angular-builders/jest
  ```

- **Step 2: Configure Jest**

  - **Step 2-A:** Edit the `tsconfig.spec.json` and fill it with the next content:
    ```JSON
    {
      "extends": "./tsconfig.base.json",
      "compilerOptions": {
        "outDir": "./out-tsc/spec",
        "types": [
          "jest"
        ]
      },
      "files": [
        "src/test.ts",
        "src/polyfills.ts"
      ],
      "include": [
        "src/**/*.spec.ts",
        "src/**/*.d.ts"
      ]
    }
    ```
  - **Step 2-B:** Modify the `tsconfig.base.json` to add the nex configuration key:
    ```JSON
    {
      //change te module to
      "module": "commonjs",
      //...
    }
    ```

  - **Step 2-C:** Modify the `angular.json` search the test object and replace with this:
    ```JSON
    "test": {
      "builder": "@angular-builders/jest:run",
      "options": {
      }
    }
    ```

- **Step 3: Configure Jest**

  Create the `Jest-setup.ts` with this content:
  ```typescript
  import 'jest-preset-angular';
  ```


- **Step 4: Edit package.json to include Jest**
  
  then update the `package.json` with the following content:

  1. Modify the test scripts to the following:
      ```JSON
        "test": "jest",
        "coverage": "jest --coverage",
      ```
  2. Add Jest configuration to the end of the `package.json` file
      ```JSON
      "jest": {
        "preset": "jest-preset-angular",
        "setupFilesAfterEnv": [
          "<rootDir>/Jest-setup.ts"
        ],
        "testPathIgnorePatterns": [
          "<rootDir>/node_modules/",
          "<rootDir>/dist/",
          "<rootDir>/src/test.ts"
        ],
        "globals": {
          "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.spec.json",
            "stringifyContentPathRegex": "\\.html$"
          }
        }
      }
      ```

  and to end this step run test comand
  ```bash
  #to run test you can use:
  :~$ npm test
  :~$ npm run jest
  #and this for coverage
  :~$ npm run test:coverage
  ```
