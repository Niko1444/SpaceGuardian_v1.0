const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    entry: "./game.js",

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
      ],
    },

    externals: {
      phaser: "Phaser",
      firebase: "firebase",
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "",
      filename: isProduction ? "bundle.[contenthash].min.js" : "bundle.js",
    },

    resolve: {
      alias: {
        firebase: path.resolve(__dirname, "node_modules/firebase"),
      },
    },

    mode: isProduction ? "production" : "development",

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "index.html", // Adjust the path to your HTML template
        filename: "index.html",
        // Other configuration options for HtmlWebpackPlugin
      }),
      // Add other plugins as needed
    ],

    // Additional configurations based on the environment (isProduction)
    optimization: {
      minimize: isProduction,
      // Add other optimizations for production
    },

    devtool: isProduction ? "source-map" : "eval-source-map",

    // Other devServer or production server configurations
  };
};
