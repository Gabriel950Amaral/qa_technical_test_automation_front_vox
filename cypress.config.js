const { defineConfig } = require('cypress');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const cucumber = require('@badeball/cypress-cucumber-preprocessor');
      await cucumber.addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', browserify.default(config));

      return config;
    },
    specPattern: "cypress/integration/**/*.feature",
    baseUrl: "https://www.saucedemo.com/v1/",
    supportFile: "cypress/support/e2e.js",
    fixturesFolder: "cypress/fixtures",
    viewportWidth: 1000,
    viewportHeight: 660,
    stepDefinitions: "cypress/support/step_definitions/"
  },
});
