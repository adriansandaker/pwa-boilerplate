const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      { test: /\.(js|ts)$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
              modules: {
                namedExport: true,
              },
            }
          },
          'css-loader'
        ],
      },
      { 
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
      }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new CopyWebpackPlugin({
          patterns: [
              { from: 'manifest.webmanifest'},
          ],
      }),
  ],
  optimization: {
    splitChunks: {
        chunks: 'all',
    }
  }
};