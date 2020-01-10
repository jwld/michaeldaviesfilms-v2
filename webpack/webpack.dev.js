const CircularDependencyPlugin = require('circular-dependency-plugin')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    clientLogLevel: 'error',
    contentBase: './public',
    historyApiFallback: true,
    open: true
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [{
      include: /node_modules/,
      test: /\.jsx?$/,
      use: 'react-hot-loader/webpack'
    }]
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/
    })
  ]
})
