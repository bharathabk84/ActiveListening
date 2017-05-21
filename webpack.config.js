const HtmlWebpackPlugin = require('html-webpack-plugin');
const injectConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolveLoader: {
  moduleExtensions: ['-loader']
  },
  devServer: {
    host: '0.0.0.0',
<<<<<<< HEAD
    port: 8008
=======
    port: 8008,
      compress: true,
      disableHostCheck: true
>>>>>>> 0175e8c9db0d2470f26d620fef18db9981aa86b3
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?presets[]=es2015', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', include: __dirname, exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader?limit=100000000'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=assets/fonts/[name].[ext]'
      }
    ]
 },
externals: {
'react/lib/ExecutionEnvironment': true,
'react/addons': true,
'react/lib/ReactContext': 'window'
  },
 plugins: [injectConfig]
}
