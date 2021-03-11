## How Setting Jest as a unit testing test tool

### Nota:

- Here you can find the [Puppeteer Documentation](https://pptr.dev/)
- For wirite the test easily I recomend install the [_Headless Recorder - chrome extencion_](https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda?utm_source=chrome-ntp-icon)
- This **Puppeteer** setting with Angular applications with Jest, Puppeteer is based on [this article](https://thilanka-nuwan.medium.com/setting-up-unit-and-end-to-end-testing-for-angular-applications-with-jest-puppeteer-and-spectator-2cfc33dfc60b)

---

- **Step 1: Installing Jest with Typescript support**
  ```bash
  :~$ npm install -D jest @types/jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript
  ```
- **Step 2: Installing Jest Angular preset**
  ```bash
  :~$ npm install -D jest-preset-angular
  ```
- **Step 3: Installing Puppeteer and Jest Puppeteer preset**
  ```bash
  :~$ npm install -D puppeteer jest-puppeteer @types/puppeteer @types/jest-environment-puppeteer @types/expect-puppeteer
  ```
- **Step 4: Create Configuration files**

  - tsconfig.spec.json

    ```js
    // tsconfig.spec.json
    {
      "extends": "./tsconfig.base.json",
      "compilerOptions": {
        "outDir": "./out-tsc/spec",
        "types": ["jest", "node"],
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true
      },
      "files": ["src/polyfills.ts"],
      "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
    }
    ```

  - babel.config.js
    ```js
    // babel.config.js
    module.exports = {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
    };
    ```
  - Jest-setup.ts
    ```js
    // Jest-setup.ts
    /**
     * @deprecated this way to import 'jest-preset-angular'
     * ! import 'jest-preset-angular';
     */
    import "jest-preset-angular/setup-jest";
    ```
  - jest.config.js
    ```js
    // jest.config.js
    module.exports = {
      preset: "jest-preset-angular",
      globals: {
        "ts-jest": {
          tsconfig: "<rootDir>/tsconfig.spec.json",
          stringifyContentPathRegex: "\\.html$",
          astTransformers: {
            before: [
              "jest-preset-angular/build/InlineFilesTransformer",
              "jest-preset-angular/build/StripStylesTransformer",
            ],
          },
        },
      },
      setupFilesAfterEnv: ["<rootDir>/Jest-setup.ts"],
      testMatch: ["**/src/**/*.spec.ts"],
      testPathIgnorePatterns: ["<rootDir>/e2e/"],
      transform: {
        "^.+\\.(ts|js|html)$": "ts-jest",
      },
      moduleFileExtensions: ["ts", "html", "js", "json"],
      moduleNameMapper: {
        "^src/(.*)$": "<rootDir>/src/$1",
        "^app/(.*)$": "<rootDir>/src/app/$1",
        "^assets/(.*)$": "<rootDir>/src/assets/$1",
        "^environments/(.*)$": "<rootDir>/src/environments/$1",
      },
      transformIgnorePatterns: ["node_modules/(?!@ngrx)"],
      snapshotSerializers: [
        "jest-preset-angular/build/serializers/ng-snapshot",
        "jest-preset-angular/build/serializers/html-comment",
      ],
    };
    ```
  - puppeteer-jest-config.js
    ```js
    // babel.config.js
    module.exports = {
      preset: "jest-puppeteer",
      setupFilesAfterEnv: ["expect-puppeteer"],
      testMatch: ["**/e2e/**/*.spec.ts"],
      testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        "<rootDir>/src/test.ts",
      ],
      globals: {
        "ts-jest": {
          tsConfig: "<rootDir>/tsconfig.spec.json",
          stringifyContentPathRegex: "\\.html$",
          astTransformers: [
            "jest-preset-angular/build/InlineFilesTransformer",
            "jest-preset-angular/build/StripStylesTransformer",
          ],
        },
      },
      coverageReporters: ["json", "html", "text"],
      collectCoverageFrom: ["<rootDir>/src/lib/my-component/**", "!**/jest/**"],
      coverageDirectory: "coverage/e2e_coverage",
    };
    ```

- **Step 5: Configure Protractor to use Puppeteer**
  Edit your `e2e/protractor.conf.js` and add the following inside capabilities:

  ```javascript
  // ...
  const puppeteer = require("puppeteer");

  exports.config = {
    // ...
    capabilities: {
      browserName: "chrome",
      chromeOptions: {
        args: ["--headless"],
        binary: puppeteer.executablePath(),
      },
    },
    // ...
  };
  ```

- **Step 3: Write and execute your tests**

  For example, edit your `e2e/src/app.e2e-spec.ts` and do the following:

  ```typescript
  import 'expect-puppeteer';

  describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com')
    });

    it('should display "google" text on page', async () => {
      await expect(page).toMatch('google')
    });

    it("Puppeteer screenshot - from APP", async () => {
      await page.screenshot({ path: "e2e/screenshot/index-home-screenshot.png" });
    });
  })
  ```
