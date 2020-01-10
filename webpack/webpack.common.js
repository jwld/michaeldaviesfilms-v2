const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }]
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
    modules: ['./src', 'node_modules']
  }
}
