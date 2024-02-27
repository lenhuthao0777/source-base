const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  (mode = 'production'), (target = 'browserslist');
}
/** @type {import('webpack').Configuration} **/
module.exports = {
  mode: mode,
  target: target,
  devtool: mode === 'production' ? false : 'source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  output: {
    filename: 'static/js/main.[contenthash:6].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: false },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: false },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: false },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:
                mode === 'production'
                  ? 'static/media/[name].[contenthash:6].[ext]'
                  : '[path][name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:
                mode === 'production'
                  ? 'static/fonts/[name].[ext]'
                  : '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:
        mode == 'production'
          ? 'static/css/[name].[contenthash:6].css'
          : '[name].css',
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/public',
          to: '.',
          filter: (name) => {
            return !name.endsWith('index.html');
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/public', 'index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, './src/public', 'index.html'),
      serveIndex: true,
      watch: true,
    },
  },
};
