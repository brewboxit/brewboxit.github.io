const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // resolve: { extensions: ['', '.js', '.json', '.styl', '*'] },
  devtool: 'source-map',
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
        { loader: 'postcss-loader', options: { sourceMap: true } },
        'stylus-loader',
      ],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [ 'file-loader' ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  }
}

module.exports = config
