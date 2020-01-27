'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ENV = process.env.npm_lifecycle_event;
const isProd = ENV === 'build';

module.exports = (() => {
  const config = {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval-source-map',
    entry: {
      app: './src/app/app.js',
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {loader: 'css-loader', options: {sourceMap: !isProd}},
            {loader: 'sass-loader', options: {sourceMap: !isProd}},
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
          loader: 'file-loader',
        }, {
          test: /\.html$/,
          loader: 'raw-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
        inject: 'body',
      }),
      new MiniCssExtractPlugin({filename: 'css/[name].css', disable: !isProd, allChunks: true}),
    ]
  };

  if (isProd) {
    config.optimization = {
      runtimeChunk: 'single',
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          cssProcessorPluginOptions: {
            preset: ['default', {discardComments: {removeAll: true}}],
          },
        }),
        new UglifyJSPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
      ],
    };
    config.plugins.push(
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public',
      }]),
    );
    config.devServer = {
      contentBase: './src/public',
      stats: 'minimal',
      host: '127.0.0.2',
    };
  }

  return config;
})();
