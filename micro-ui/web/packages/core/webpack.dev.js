const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");
const { ModuleFederationPlugin } = require('webpack').container;


module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core",
      remotes: {
        app1: "app1@http://localhost:8081/remoteEntry.js", // Adjust port if necessary
        app2: "app2@http://localhost:8082/remoteEntry.js", // Adjust port if necessary
      },
      shared: packageJson.dependencies,
    }),
  ],
});
