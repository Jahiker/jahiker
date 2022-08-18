const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/jahiker/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/img/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
    })
  ],
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    compress: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
  }
}
