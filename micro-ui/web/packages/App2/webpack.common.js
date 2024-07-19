const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust the entry point as necessary
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
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
      // Add other loaders as necessary for CSS, images, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
