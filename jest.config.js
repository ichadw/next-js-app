// Jest.config.js
module.exports = {
  coverageThreshold: {
    global: {
      statements: 30,
      branches: 30,
      functions: 30,
      lines: 30,
    },
  },
  collectCoverageFrom: [
    "<rootDir>/**/*.js",

    // Next Files.
    "!<rootDir>/.next/**",

    // Test Files.
    "!**/__buggy_tests__/**",
    "!**/__data_mocks__/**",
    "!**/__page_tests__/**",
    "!**/__test_utils__/**",
    "!**/__tests__/**",

    // Jest Files.
    "!<rootDir>/.coverage/**",
    "!<rootDir>/jest.config.js",
    "!<rootDir>/jest.setup.js",
  ],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its coverage files
  coverageDirectory: ".coverage",
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/context(.*)$": "<rootDir>/context$1",
    "^@/helpers(.*)$": "<rootDir>/helpers$1",
    "^@/layouts(.*)$": "<rootDir>/layouts$1",
    "^@/pages(.*)$": "<rootDir>/pages$1",
    "^@/styles(.*)$": "<rootDir>/styles$1",
  },
};
