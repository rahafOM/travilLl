const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

// Determine if we are in production mode
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: "./src/client/index.js",
  testEnvironment: 'node',
  mode: isProduction ? "production" : "development", // Dynamic mode setting
  devtool: isProduction ? 'source-map' : 'inline-source-map', // Source maps for easier debugging
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: "bundle.js",
    libraryTarget: "var",
    library: "Client",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/, // Match SCSS files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
    open: true, // Open the browser after server has started
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin({
      dry: false, // Actually clean files
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

