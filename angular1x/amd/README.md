# angular1.x版本的AMD模式脚手架

## 说明
src/school目录是多页站点
src/student目录是单页站点

## 配置环境
执行 bower-install.bat和npm-install.bat,bower-install.bat要一条一条拷贝执行
执行bower命令时，如果报错：Failed to execute "git ls-remote --tags --heads https://github.com/jquery/jquery-dist.git", exit code of #128 fatal: unable to access 'https://github.com/jquery/jquery-dist.git/': Unknown SSL protocol error in connection to github.com:443，请执行git config --global url."https://".insteadOf git://

## 开发阶段
1. 执行grunt wiredep injector命令，用于注入bower文件和业务文件到【src/子站点目录】下的*.html，后续有新增或删除文件时也需执行该命令重新注入相关文件，因为angular需要在执行前加载所有的模块文件
2. 用浏览器打开子站点目录下的index.html

## 发布阶段
执行grunt build命令，该命令会打包文件到dist目录下，把dist目录发布到生产环境即可