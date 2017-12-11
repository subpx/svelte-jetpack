const {readFileSync} = require('fs');
const path = require("path");
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const prod = process.env.NODE_ENV === 'production';
const babelSettings = JSON.parse(readFileSync(__dirname + '/../.babelrc'));

module.exports = {
  entry: {
    bundle: ['./src/index.js']
  },
  resolve: {
    extensions: ['.js', '.html']
  },
  output: {
    path: __dirname + '/../public',
    filename: '[name].js',
    chunkFilename: '[name].[id].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(html|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: babelSettings
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            cascade: false,
            store: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader', options: {sourceMap: !prod}}]
        })
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    // new StyleLintPlugin({
    //   configFile: '.stylelintrc',
    //   context: 'src',
    //   files: '**/*.html',
    //   failOnError: false,
    //   quiet: false
    // }),
    new ExtractTextPlugin('bundle.css'),
    new LodashModuleReplacementPlugin,
    prod && new webpack.optimize.ModuleConcatenationPlugin(),
    prod && new UglifyJSPlugin(),
    // prod && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  devServer: {
    contentBase: path.join(__dirname, "/../public"),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool: prod ? false : 'cheap-module-eval-source-map'
};
