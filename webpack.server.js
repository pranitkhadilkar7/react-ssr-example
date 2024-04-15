const path = require('path');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
        React: 'react'
    })
],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
},
};