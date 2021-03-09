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
