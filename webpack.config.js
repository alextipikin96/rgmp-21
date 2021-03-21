const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist")

module.exports = env => {
  const isProduction = env.NODE_ENV;

  return {
    mode: isProduction ? "production" : "development",
    entry: "./src/index.js",
    output: {
      path: DIST_DIR,
      filename: "index_bundle.js"
    },
    devServer: {
      contentBase: DIST_DIR,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader"
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|jpeg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ]
    },
    devtool: "source-map",
    resolve: {
      modules: ["node_modules"],
      extensions: [".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/public/index.html",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin(),
        new OptimizeCSSAssetsPlugin()
      ],
    },
  }
};
