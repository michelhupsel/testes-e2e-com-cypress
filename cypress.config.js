const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    defaultCommandTimeout: 10000,
    env: {
      viewportWidthBreakpoint: 768,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
  projectId: '857m3o'
})
