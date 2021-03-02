### 欢迎使用 React 全栈脚手架 TS 版 （by 下午茶溢栈）

- 本脚手架可以让你专注于业务组件的开发,而不在周边配置上浪费过多时间
- 本脚手架基于 create-react-app 二次开发
- 目录结构为基于中/大型应用自行设计

---

## 组织架构

```
├─.storybook　　//storybook配置
├─.vscode　　// VSCode配置
├─build    // 最终输出
├─coverage // 测试覆盖率报告
├─public　　// React相关静态资源
├─node_modules // 第三方node库
├─.env.development　// 开发环境专用环境变量（npm run start时）
├─.env.production　// 生产环境专用环境变量（npm run build时）
├─.env.test　// 测试环境专用环境变量（npm run test时）
├─.eslintcache // eslint缓存文件
├─.gitignore // git遗忘目录
├─.prettierrc // 代码风格设置
├─e2e.config.json // 端对端测试配置
├─package-lock.json // 工程配置锁
├─package.json // 工程配置
├─README.md // 注意事项
├─tsconfig.json // TS编译设置
└─src　　//CRA默认源码目录
    ├─app　　//业务文件夹
    │  ├─common　　//公共目录 (可以抽离为独立的外部依赖)
    │  │  ├─@types　　//公共接口定义
    │  │  ├─assets　　//公共资源文件
    │  │  │  ├─doc
    │  │  │  ├─img
    │  │  │  └─json
    │  │  ├─components　　//公共组件
    │  │  ├─config　　//公共配置
    │  │  ├─hooks　　//公共Hooks
    │  │  ├─i18n　　//国际化
    │  │  │  └─locales
    │  │  ├─service　　// service
    │  │  └─utils　　//工具集
    │  ├─Xxxxx　　//具体业务（Demo）
    │  │  ├─@types　　//具体业务接口定义
    │  │  │  └─models // view-models定义
    │  │  ├─assets　　//该业务所需资源
    │  │  │  └─img
    │  │  ├─components   //该业务组件UI层
    │  │  │  └─Xxxxx.view.tsx  // Xxxxx组件视图层
    │  │  │  └─Xxxxx.viewmodel.ts  // Xxxxx组件数据&事件处理层
    │  │  │  └─Xxxxx.container.tsx  // Xxxxx组件数据连接包装器
    │  │  ├─config　 // 该业务配置项
    │  │  ├─redux   // 该业务状態管理(RTK)
    │  │  ├─apollo　 // 该业务的graphql处理
    │  │  ├─tools　　//纯数据处理工具
    │  │  └─index.ts    //　导入导出管理
    │  ├─index.tsx　　// 根组件
    │  ├─react-app-env.d.ts　　// react环境类型定义文件
    │  ├─serviceWorker.ts　　// PWA驱动
    │  ├─setupTests.ts　　// 测试环境配置
    ├─stories　　//storybook工程目录
    ├─lib　　// 自定义React通用库
    ├─e2e　　//端对端测试目录
    └─__tests__　　//单元测试目录

```

## 如何使用?

- step1: clone 源代码
- step2: 重命名
- step3: yarn intsall
- step4: 在 src->app 层级添加新代码
- step5: yarn start
- （可选）step6: yarn storybook

## 技术选型:

- react 核心前端框架
- @reduxjs/toolkit redux（状态管理） 速成工具
- react-router-dom 路由管理
- react-query 远程数据 fetch 框架
- material-ui UI 框架
- redux-persist 数据持久化
- i18next 国际化
- axios 服务器异步交互
- typescript 语言
- prettier/eslint 代码风格检查
- jest 代码自动化测试
- @testing-library/\* 组件自动化测试
- storybook 组件展示
- react-scripts 启动脚本
- react-use 一个开源的 Hook 库
- react-color 颜色选择库
- immutable 数据优化
- puppeteer e2e 测试 (未来)
- day.js 日期/时间处理

## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
