const path = require("path");

module.exports = {
  entry: "./src/pages/index.tsx",
  output: {
    filename: "Main.tsx",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", outputPath: "./public/" },
          },
        ],
      },
    ],
  },
};
