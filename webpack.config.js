module.exports = {
  entry: {
    bundle: __dirname + '/src/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
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
