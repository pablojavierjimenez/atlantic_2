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
