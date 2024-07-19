const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./package.json');

const domain = process.env.PRODUCTION_DOMAIN || 'https://localhost:8081'; // Update with your production domain

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${domain}/`, // Ensure the trailing slash for proper path concatenation
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      // Add other loaders for CSS, images, etc. if needed
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      exposes: {
        './App2': './src/AppWrapper', // Adjust path if necessary
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // Add any necessary configurations for HtmlWebpackPlugin
    }),
  ],
});
