const path = require("path");
const WebpackBar = require("webpackbar");
const CracoLessPlugin = require("craco-less");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    // 别名配置
    alias: {
      "@": pathResolve("src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = "dist";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        // publicPath: "./dist/",
      };
      return webpackConfig;
    },
    plugins: [
      new WebpackBar({ profile: true }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     {
      //       from: path.join(__dirname, "src/config/env.js"),
      //       to: path.join(__dirname, "dist/config/env.js"),
      //     },
      //   ],
      // }),
    ],
    babel: {
      plugins: [
        [
          "import",
          { libraryName: "antd", libraryDirectory: "es", style: true },
          "antd",
        ],
      ],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
