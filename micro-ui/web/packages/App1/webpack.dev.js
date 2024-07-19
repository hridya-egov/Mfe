const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./package.json');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    publicPath: 'https://localhost:8080/', // Adjust if using a different local server
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    https: true,
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
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './App1': './src/AppWrapper', // Adjust path if necessary
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // Add any necessary configurations for HtmlWebpackPlugin
    }),
  ],
});
