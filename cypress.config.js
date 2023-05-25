module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/#",
    supportFile: false,
  },



  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
};
