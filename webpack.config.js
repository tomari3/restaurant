const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    aboutUs: "./src/about-us.js",
    contact: "./src/contact.js",
    mainPage: "./src/mainPage.js",
    products: "./src/products.js",
    order: "./src/order.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant",
    }),
  ],

  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  devServer: {
    static: "./dist",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
