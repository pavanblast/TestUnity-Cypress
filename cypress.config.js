const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'aw1i9f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
