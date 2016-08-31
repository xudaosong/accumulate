# angular1.x版本的单文件捆绑打包脚手架
## 说明
src/school目录是多页站点
src/student目录是单页站点
## 起始阶段
执行 bower-install.bat和npm-install.bat,bower-install.bat要一条一条拷贝执行
## 开发阶段
1. 执行grunt wiredep injector命令，用于注入bower文件和业务文件到【src/子站点目录】下的*.html，后续有新增或删除文件时也需执行该命令重新注入相关文件，因为angular需要在执行前加载所有的模块文件
2. 用浏览器打开子站点目录下的index.html
## 发布阶段
执行grunt build命令，该命令会打包文件到dist目录下，把dist目录发布到生产环境即可