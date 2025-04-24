export default {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testMatch: ["**/src/**/*.test.{js,jsx}"],
};
