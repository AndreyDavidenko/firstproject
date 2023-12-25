const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

require("dotenv").config({ path: "../.env" });

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "js/[name].bundle.js",
    publicPath: "/",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    hot: true,
    host: process.env.GW_IP,
    historyApiFallback: true,
    proxy: [
      {
        context: ["/api", "/auth"],
        target: `http://${process.env.GW_IP}`,
        changeOrigin: true,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // uncomment to use BundleAnalyzer
    // new BundleAnalyzerPlugin({ analyzerPort: 8070, openAnalyzer: false }),
  ],
});
