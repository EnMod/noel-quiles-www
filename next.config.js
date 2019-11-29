const withCSS = require("@zeit/next-css");
require("dotenv").config();

module.exports = withCSS({
  env: {
    testEnv: process.env.testEnv
  }
});
