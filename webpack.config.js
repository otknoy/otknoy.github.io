const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  }
}
