const path = require("path");

module.exports = {
  displayName: "test",
  roots: [path.join(__dirname, "./src")],
  rootDir: path.join(__dirname),
  testEnvironment: "node",
  testMatch: ["**/__tests__/*.*"],
  moduleDirectories: ["node_modules", __dirname, path.join(__dirname, "./src")],
  coverageDirectory: path.join(__dirname, "./coverage"),
  collectCoverageFrom: ["**/src/**/*.js"],
  coveragePathIgnorePatterns: [".*/__tests__/.*"],
  setupFilesAfterEnv: [require.resolve("./test/setup-env")],
  watchPlugins: [
    require.resolve("jest-watch-typeahead/filename"),
    require.resolve("jest-watch-typeahead/testname"),
  ],
};
