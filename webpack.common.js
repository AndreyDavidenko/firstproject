const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

// https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5
const env = dotenv.config()?.parsed;

const envKeys = env
  ? Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {})
  : {};

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader",
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        // https://webpack.js.org/guides/asset-modules/
        type: "asset/inline",
      },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|webp)$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin(envKeys),
  ],
};
