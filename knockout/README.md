# knockout的AMD模式脚手架

## 说明
src/school目录是多页站点
src/student目录是单页站点

## 配置环境
执行 bower-install.bat和npm-install.bat,bower-install.bat要一条一条拷贝执行
执行bower命令时，如果报错：Failed to execute "git ls-remote --tags --heads https://github.com/jquery/jquery-dist.git", exit code of #128 fatal: unable to access 'https://github.com/jquery/jquery-dist.git/': Unknown SSL protocol error in connection to github.com:443，请执行git config --global url."https://".insteadOf git://

## 开发阶段
1. 执行grunt lint进行代码检查，会生成jshint-report.html报表(非必须）
2. 用浏览器打开子站点目录下的index.html

## 发布阶段
执行gulp命令，该命令会打包文件到dist目录下，把dist目录发布到生产环境即可