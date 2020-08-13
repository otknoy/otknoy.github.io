const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
	  loader: 'babel-loader',
	  options: {
	    presets: [
	      '@babel/preset-env',
	      '@babel/preset-react'
	    ]
	  }
	}
      },
      {
	test: /\.css$/,
	use: [
	  'style-loader',
	  'css-loader'
	]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  devServer: {
    contentBase: outputPath
  }
}
