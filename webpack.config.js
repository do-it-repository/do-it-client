const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const prod = process.env.NODE_ENV === "production";

module.exports = {
  mode: prod ? "production" : "development", // 프로덕션 모드인지 개발 모드인지
  devtool: prod ? "hidden-source-map" : "eval", // 프로덕션 모드 -> hidden-source-map (외부에서 리액트 구조를 알 수 없음)

  entry: "./src/index.tsx",

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"], // 해당 확장자면 적용
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "ts-loader"], // loader 들은 오른쪽 -> 왼쪽으로 적용됨 (ts 먼저, 이후 babel 해야댐)
      },
    ],
  },

  output: {
    path: path.join(__dirname, "/dist"), // 번들화된 파일이 /dist/bundle.js 로 저장
    filename: "bundle.js",
  },

  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: "/",
  },

  plugins: [
    // 설치한 플러그인을 적용
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
