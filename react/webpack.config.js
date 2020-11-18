const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const configs = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash:6].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "./src"), // 推荐使用include
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "./src"), // 推荐使用include
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        include: path.resolve(__dirname, "./src"), // 推荐使用include
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash:6].[ext]",
              outputPath: "images/",
              limit: 1024, // 1kb
            },
          },
          "image-webpack-loader",
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        include: path.resolve(__dirname, "./src"), // 推荐使用include
        use: "url-loader",
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    host: "0.0.0.0",
    port: 8000,
    hot: true,
    // 禁止浏览器刷新
    // hotOnly: true,
    // 允许自定义配置host访问
    disableHostCheck: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true, // 压缩内联
      },
    }),
    new MiniCssExtractPlugin({
      // 容易造成路径问题：比如图片路径不对，不显示。可以在loader里配置publicPath解决
      filename: "css/[name].[contenthash:6].css",
    }),
    // 压缩单独的css文件
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"), // 引入cssnano配置压缩选型
      cssProcessorOptions: {
        discardComments: { removeAll: true },
      },
    }),
  ],
};

if (process.env.NODE_ENV === "development") {
  configs.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = configs;
