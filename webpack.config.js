const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    // bundle html files
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    // serve static files
    static: {
      publicPath: '/dist',
      directory: path.join(__dirname, 'dist'),
    },
    // proxy for express server
    proxy: {
      '/api': 'http://localhost:3000',
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|svg|woff|woff2|png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
      },
      // babel loaders
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // css loaders
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
};
