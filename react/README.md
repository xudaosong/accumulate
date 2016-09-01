# react脚手架

## 说明
该脚手架使用es6开发，material-ui作为UI组件库，使用formsy-react开发表单。
cfg目录是webpack的配置文件，cfg/base.js是基本的配置，cfg/default.js是默认的配置，cfg/dev.js是开发时的配置,cfg/dist是发布时的配置。
其中base.js依赖default.js，dev.js和dist.js都依赖base.js。
src目录是源文件目录，src/config是源代码开发、测试和发布的配置文件，base.js是基础配置（即各环境的统一配置）。


## 配置环境
执行 npm-install.bat npm-install-dev.bat

## 开发阶段
1. 执行npm run start初始化开发环境
2. 用浏览器打开链接：http://192.168.248.64:8800/src/index.html

## 发布阶段
执行npm run dist构建生产环境包到dist目录，发布dist目录即可

## 其它
1. 查看package.json文件里的scripts对象，该对象的每个成员都对应的不同的命令，其中serve和start命令一致
2. 参考[我的钱](https://github.com/xudaosong/myMoney/tree/master/mobile_app)的实现