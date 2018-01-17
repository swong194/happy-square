var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./scripts/main.js",
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: "happy-square.js"
  }
};
