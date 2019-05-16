const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './client/index.tsx',
  //
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist'),
  // },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-env'],
            ['@babel/preset-typescript'],
            ['@babel/preset-react']
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },

  output: {
    path: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};
