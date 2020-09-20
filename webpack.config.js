const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(css|scss)$/,
        exclude: /(src)/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              modules: true,
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentHashPrefix: "my-custom-hash"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
        options: {
          limit: 25000
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
    historyApiFallback: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
