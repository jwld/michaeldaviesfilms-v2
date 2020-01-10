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
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../public')
  },
  resolve: {
    extensions: ['.mjs', '.js', '.jsx'],
    modules: ['./src', 'node_modules']
  }
}
