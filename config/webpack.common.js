const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
// const helpers = require('./helpers');

module.exports = {
  entry: {
    polyfills: './polyfills.ts',
    vendor: './vendor.ts',
    app: './src/main.ts'
  },
  resolve: {
    extensions: ['*','.js', '.ts']
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      loader: 'file?name=assets/[name].[hash].[ext]'
    }, {
      test: /\.css$/,
      loaders: ['to-string-loader', 'css-loader']
    }]
  },
  plugins: [
  //     // Workaround for angular/angular#11580
  // new webpack.ContextReplacementPlugin(
  //   // The (\\|\/) piece accounts for path separators in *nix and Windows
  //   /angular(\\|\/)core(\\|\/)@angular/,
  //   helpers.root('./src'), // location of your src
  //   {} // a map of your routes
  // ),
  //

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
