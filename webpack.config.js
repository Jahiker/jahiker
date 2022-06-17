const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "."),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
          filename: 'bundle.css'
      })
  ],
  devServer: {
    static: path.join(__dirname, "."),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    open: true
  },
};
