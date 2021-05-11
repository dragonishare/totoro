# totoro

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 目录结构

* packages: 组件源码
* website: 原src目录，改为组件文档官网，展示示例
* website/docs: 组件文档和示例代码 markdown格式
* src: 组件公用工具函数
* src/theme: 组件样式文件夹（组件所有样式统一放这里）
* src/index.ts: 组件统一导出入口文件（整体导出，全量包）
* scripts: 脚本文件


### 展示目录树结构 tree命令

mac安装tree `brew install tree`

### 2.tree常用命令

在终端直接执行`tree`命令，展示当前文件夹下所有的目录树结构（包含文件和文件夹以及子文件夹）

* 查看帮助 `tree --help`
* 指定层级 `tree -L 2`
* 显示目录名称而非内容 `tree -d "src"`
* 不显示符合范本样式的文件或目录名称 `tree -I "node_modules"`
* 不显示符合范本样式的文件或目录名称 `tree -I "node_modules|tests"`
* 写入指定文件，如果文件不存在自动创建，如果存在则覆盖内容 `tree -I "node_modules|test*|LICENSE|README.en.md" -L 2 > README.md`

## npm包

### 1. 删除文件和文件夹 `rimraf` https://github.com/isaacs/rimraf

**yarn 安装**
`yarn add rimraf -D`

**在`package.json scripts`中使用** 
`"clean": "rimraf dist" //删除dist文件夹`

### 2. 实现代码高亮 `highlight.js`

`yarn add highlight.js -D`

### 3. 解析markdown文件 `vue-markdown-loader`

`yarn add vue-markdown-loader -D`

```
# vue.config.js配置
chainWebpack: (config) => {
  config.module
    .rule('markdown')
    .test(/\.md$/)
    .use('vue-loader')
    .loader('vue-loader')
    .end()
    .use('vue-markdown-loader')
    .loader('vue-markdown-loader/lib/markdown-compiler')
    .options({
    preset: 'default',
    breaks: true,
    raw: true,
    typographer: true,
  })
}

# 入口文件main.ts中配置样式
// main.ts
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
```
