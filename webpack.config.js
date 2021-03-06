var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './javascripts/index.js']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  devtool: "source-map",

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
