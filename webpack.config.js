const path = require('path');
const outputPath = path.resolve(__dirname, 'build');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
	test: /\.tsx?$/,
	exclude: /node_modules/,
	use: 'ts-loader'
      },
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
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: outputPath
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    contentBase: outputPath,
    open: true
  }
}
