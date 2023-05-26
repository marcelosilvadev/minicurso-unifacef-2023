// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/config/",
    "/server/",
    "/common/",
  ],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
    },
  },
  setupFilesAfterEnv: ["./jest/jest.setup.js"],
  setupFiles: ["./jest/global.js"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/config/", "/server/"],
  verbose: true,
};
