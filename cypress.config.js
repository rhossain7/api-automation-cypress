const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "49eq7b",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
