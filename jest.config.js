// jest.config.js
module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!react-toastify/)",
    "/node_modules/(?!your-css-module/)",
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  // ... other Jest configurations
};
