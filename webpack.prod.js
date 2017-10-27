const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MinifyPlugin = require("babel-minify-webpack-plugin")

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: { presets: [ 'env' ] },
      }
    }, {
      test: /\.styl$/,
      use: [
        'style-loader',
        'css-loader',
        { loader: 'postcss-loader', options: { sourceMap: false } },
        'stylus-loader',
      ],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [ 'file-loader' ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MinifyPlugin({ removeConsole: true, removeDebugger: true }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
}

module.exports = config
