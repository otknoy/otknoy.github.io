const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      {
	test: /\.ts?$/,
	use: [
	  {
	    loader: 'babel-loader'
	  },
	  {
	    loader: 'ts-loader'
	  }
	],
	exclude: /node_modules/
      }
    ]
  }
}
