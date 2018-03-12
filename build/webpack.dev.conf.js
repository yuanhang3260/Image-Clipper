'use strict'

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devWebpackConfig = merge(baseWebpackConfig, {
  entry: {
    app: './src/app.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].dev.js',
    publicPath: '/',
  },

  devtool: "#source-map",

  devServer: {
    contentBase: './',
    historyApiFallback: true,
    inline: true,
    progress: true,
    host: 'localhost',
    port: 9090,
  },

  plugins: [  
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    // new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true
    }),
  ]
});

module.exports = devWebpackConfig;
