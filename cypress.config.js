const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.nubank.com.br",
    supportFile: "cypress/support/e2e.js",
    video: false,
    screenshotOnRunFailure: false,
    videoUploadOnPasses: false,
    responseTimeout: 12000,
    defaultCommandTimeout: 12000,
    pageLoadTimeout: 15000,
    watchForFileChanges: false,
    retries: 1,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    viewportWidth: 1366,
    viewportHeight: 768,
    browser: "chrome",
    slowTestThreshold: 10000,
    requestTimeout: 8000,
    env: {
      disableScrollingIntercept: true,
    },
  },
});
