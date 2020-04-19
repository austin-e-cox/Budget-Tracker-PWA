const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  entry: {
    app: "./public/index.js",
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  plugins: [
    new WebpackPwaManifest({
      // output usual names, not unique ones
      fingerprints: false,
      // not building our html with webpack
      inject: false,

      name: "Budget app",
      short_name: "Budget",
      description: "An application that allows you to track your budget.",
      background_color: "#ffffff",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [{
        src: path.resolve(__dirname, "public/icons/icon-192x192.png"),
        sizes: [192, 512],
        destination: path.join("assets", "icons")
      }]
    })
  ]
};

module.exports = config;
