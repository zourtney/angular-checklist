const path = require('path');
const webpack = require('webpack');


module.exports = {
  context: __dirname,
  entry: {
    app: ['./demo/main.ts'],
    lib: ['./src/index.ts'],
    vendor: [
      'zone.js',
      'reflect-metadata',
      '@angular/common',
      '@angular/core',
      '@angular/compiler',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/, loaders: ['ts'] }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.html'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['lib', 'vendor'],
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    colors: true,
    contentBase: './demo',
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true
  }
};
