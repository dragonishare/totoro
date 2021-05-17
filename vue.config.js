// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  devServer: {
    open: true,
  },
  pages: {
    index: {
      // page 的入口
      entry: "website/main.ts",
      // 模板来源
      template: "public/index.html",
      // 在 dist/index.html 的输出
      filename: "index.html",
      // 当使用 title 选项时
    },
  },

  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        "totoro-ui": path.join(__dirname, "./"),
        packages: path.join(__dirname, "./packages"),
        "@": path.join(__dirname, "./website"),
        main: path.join(__dirname, "./src"),
      },
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.resolve.extensions.add(".json");
    // config.resolve.extensions.add(".md");
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
};
