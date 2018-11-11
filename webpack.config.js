const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dist = __dirname + '/dist';

module.exports = {
  entry: {
    bundle: __dirname + '/src/index.js'
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin([dist]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.jpg|gif$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
            }
          }
        ]
      }
    ]
  }
};
