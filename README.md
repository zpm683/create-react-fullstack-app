# 欢迎使用React全栈脚手架TS版  （by 下午茶溢栈）
## 本脚手架可以让你专注于业务组件的开发,而不在周边配置上浪费过多时间
### 本脚手架基于create-react-app二次开发
### 目录结构为基于中/大型应用自行设计

---
## 结构说明
├─.storybook　　//storybook配置  
├─public　　//CRA默认  
└─src　　//CRA默认源码目录  
    ├─app　　//业务工程目录  
    │  ├─common　　//公共目录  
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
    │  │  ├─middlewares　　//中间件  
    │  │  └─utils　　//工具集  
    │  ├─login　　//具体业务（Demo）  
    │  │  ├─@types　　//具体业务接口定义  
    │  │  ├─assets　　//该业务所需资源  
    │  │  │  └─img  
    │  │  ├─components　　//该业务组件  
    │  │  ├─config　　//该业务配置项  
    │  │  ├─redux　　//该业务redux（RTK）  
    │  │  └─service　　//该业务服务层  
    │  │      ├─api　　//api  
    │  │      └─tools　　//纯数据处理工具  
    ├─lib　　//全工程通用目录（长期积累）  
    │  ├─@types　　//通用接口  
    │  ├─components　　//通用组件  
    │  │  ├─ErrPage  
    │  │  ├─Infomation  
    │  │  ├─ListItemWithIcon  
    │  │  └─SettingList  
    │  ├─config　　//通用设定  
    │  ├─hooks　　//通用hooks  
    │  ├─middlewares　　//通用中间件  
    │  └─utils　　//通用工具集  
    ├─stories　　//storybook工程目录  
    └─__tests__　　//工程测试目录  
        ├─app　　//app工程测试目录  
        └─lib　　//lib工程测试目录  

## 如何使用?
- step1: clone源代码
- step2: 重命名
- step3: yarn intsall
- step4: 在src->app层级添加新代码
- step5: yarn start
- （可选）step6: yarn storybook  

## 已经集成的技术有:  

* react  核心前端框架
* redux  状态管理
* @reduxjs/toolkit  redux速成工具
* react-router-dom 路由管理
* react-query 远程数据fetch框架
* material-ui  UI框架
* react-lazyload  组件懒加载
* react-swipeable-views  看板模块
* redux-persist  数据持久化
* i18next  国际化
* axios  服务器异步交互
* typescript  语言
* tslint  代码风格检查
* darft.js 富文本编辑框架 //未来
* jest  代码自动化测试
* enzyme  组件自动化测试
* storybook  组件展示
* react-scripts  启动脚本
* react-use  一个开源的Hook库

## Available Scripts
The project is expand from create-react-app
So, in  directory, you can run:

### 
yarn start`

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
