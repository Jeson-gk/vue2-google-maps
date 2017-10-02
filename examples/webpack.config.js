var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve('./dist'),
    publicPath: 'dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=[name].[ext]?[hash]',
      }
    ],
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ];
} else {
  module.exports.devtool = 'source-map';
}
