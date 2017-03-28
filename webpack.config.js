var path = require('path');

module.exports = {
  entry: path.resolve('./src/index.jsx'),
  output: {
    path: path.resolve('./build/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'latest']
        }
      },
      {
        test: /\.css?$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.svg?$/,
        loader: 'svg-url-loader',
      },
      {
        test: /\.less?$/,
        loader: 'style-loader!css-loader!less-loader',
      },
    ]
  },
  stats: {
    reasons: true,
    errorDetails: true,
    chunks: true,
    modules: true,
    chunkModules: true,
    cached: true,
    cachedAssets: true,
    colors: true,
  },
  devServer: {
    publicPath: "/assets/",
  }
}
