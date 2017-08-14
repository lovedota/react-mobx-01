var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    main: './main.tsx'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      '_master-page': path.resolve(__dirname, './app/common/root-component/master-page')
    },
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      {
        test: require.resolve('./node_modules/jquery/dist/jquery.js'),
        loader: "expose-loader?$!expose-loader?jQuery"
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        context: __dirname
      }
    }),
    new ExtractTextPlugin('style.css'),
    //new webpack.optimize.CommonsChunkPlugin('vendor.js')
  ]
}