const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve('./encourage_remove_lodash_loader.js'),
          }
        ]
      }
    ]
  }
};