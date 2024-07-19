const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("./package.json");

const domain = process.env.PRODUCTION_DOMAIN || "https://unified-dev.digit.org";

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    publicPath: "/core-digit-ui/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "core-digit-ui",
      remotes: {
        app1: `app1@${domain}/app1-ui/remoteEntry.js`,
        app2: `app2@${domain}/app2-ui/remoteEntry.js`,
      },
      shared: {
        ...packageJson.dependencies,
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-query': { singleton: true },
      },
    }),
  ],
});
