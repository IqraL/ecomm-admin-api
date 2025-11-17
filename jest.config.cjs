// jest.config.cjs
/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // Look for test files:
  testMatch: ["**/__tests__/**/*.test.ts", "**/?(*.)+(spec|test).ts"],
  // Make sure Jest looks at your src folder if needed
  moduleFileExtensions: ["ts", "js", "json"],
  roots: ["<rootDir>/src"],
};
