'use strict'

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

exports.default = merge(baseWebpackConfig, {
  entry: {
    immage-clipper: './src/immage-clipper.js',
  },

  output: {
    path: path.resolve(__dirname, '../dist', 'prod'),
    filename: '[name].dist.js',

    library: 'ImageClipper',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    // globalObject: "this || window",
  },

  devtool: "source-map",

  externals: {
    jquery: {
      root: 'jQuery',
      commonjs: 'jquery',
      commonjs2: 'jquery',
      amd: 'jquery',
    },
    bootstrap: {
      root: 'bootstrap',
      commonjs: 'bootstrap',
      commonjs2: 'bootstrap',
      amd: 'bootstrap',
    }
  },
});
