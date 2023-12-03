// Webpack uses this to work with directories
const path = require("path");

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin its work
  entry: "./game.js", // Corrected the entry path

  // Path and filename of your result bundle.
  externals: {
    phaser: "Phaser",
  },
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "./",
    filename: "bundle.js",
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "expose-loader",
          options: {
            exposes: ["Phaser"],
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg|mp3|ogg|wav|flac|fnt|json)$/i,
        type: "asset/resource",
      },
      {
        test: /phaser\.js$/,
        loader: "expose-loader",
        options: {
          exposes: ["Phaser"],
        },
      },
    ],
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript
  // minifying and other things, so let's set mode to development
  mode: "development",
};
