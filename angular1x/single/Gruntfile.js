
'use strict';

module.exports = function (grunt) {

  // 自动加载Grunt插件
  require('load-grunt-tasks')(grunt);

  // 计算grunt任务的运行时间
  require('time-grunt')(grunt);
  var config = require('./bower.json');
  // 全局的配置文件
  var appConfig = {
    src: config.src || 'src',
    student: config.student || 'src/student',
    school: config.school || 'src/school',
    timestamp: new Date().getTime(),
    dist: 'dist'
  };

  
  grunt.initConfig({

    // 配置文件
    yeoman: appConfig,


    // 代码检查
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.student %>/{,*/}*.js',
          '<%= yeoman.school %>/{,*/}*.js'
        ]
      }
    },

    // 清除目录
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // 解析CSS文件并且添加浏览器前缀到CSS规则里
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/css/',
          src: '{,*/}*.css',
          dest: '.tmp/css/'
        }]
      }
    },

    // 自动注入Bower的组件
    wiredep: {
      html: {
        src: ['<%= yeoman.student %>/index.html','<%= yeoman.school %>/*.html']
      }
    },

    // 编译SASS文件
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd:'<%= yeoman.src %>/css',
          src:['*.scss'],
          dest:'.tmp/css',
          ext: '.css'
        }]
      }
    },

    // 给CSS和JS文件的链接添加时间戳，防止浏览器缓存
    cachebreaker: {
        dist: {
            options: {
                match: ['base.min.js', 'base.min.css', 'student.min.js', 'student.min.css', 'school.min.js', 'school.min.css'],
                replacement: '<%= yeoman.timestamp %>'
            },
            files: {
                src: ['<%= yeoman.dist %>/**/*.html']
            }
        }
    },

    // 准备配置文件。配置文件是根据结构化的文件（如html）里面的块声明来生成的。
    // 最终把这些应用替换成优化后的文件引用。
    // 在这个过程中，为每个优化的步骤生成了很多的名为generated的子任务，这些优化的步骤每步都是一个grunt插件
    useminPrepare: {
      html: ['<%= yeoman.student %>/index.html','<%= yeoman.school %>/*.html'],
      options: {
        dest: '.',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // 把结构化文件（html）的块声明里面的文件引用替换。
    // 如果那些脚本文件有打过版本声明的，将会用版本声明的文件应用来替换。
    // 这个个过程会直接修改结构化文件（如html）的内容。
    usemin: {
      html: ['<%= yeoman.dist %>/student/{,*/}*.html','<%= yeoman.dist %>/school/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/css/{,*/}*.css'],
      options: {
        assetsDirs: [
          '<%= yeoman.dist %>/student',
          '<%= yeoman.dist %>/school',
          '<%= yeoman.dist %>/css'
        ]
      }
    },

    // 压缩图片
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: './img',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '.tmp/img'
        }]
      }
    },

    // 压缩HTML文件 
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'student/{,*/}*.html','school/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // 添加，移除和重建 AngularJS 依赖注入注解，防止uglify压缩后，因为AngularJS没有显式注入，导致代码运行异常
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/dist/js',
          src: '*.js',
          dest: '.tmp/concat/dist/js'
        }]
      }
    },

    // 复制文件
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.html',
            'student/{,*/}*.html',
            'school/{,*/}*.html'
          ]
        }]
      },
      images: {
        expand: true,
        cwd: '.tmp/img',
        dest: './img/',
        src: '{,*/}*.{png,jpg,jpeg,gif}'
      }
    },

    // 并行运行一组任务
    concurrent: {
      dist: [
        'sass:dist'
      ]
    },
    
    // 注入本地的业务JS文件到HTML
    injector: {
      options: {
        addRootSlash: false,
        ignorePath: ['<%= yeoman.student %>/','<%= yeoman.school %>/']
      },
      localDependencies: {
         files: (function () {
                    var files = {};
                    // 遍历school目录
                    grunt.file.recurse('src/school/', function (abspath, rootdir, subdir, filename) {
                        if(subdir === undefined && grunt.file.match('*.html', filename)){ // 如果是根目录并且是html文件
                          files['<%= yeoman.school %>/'+filename] = ['<%= yeoman.school %>/main.js','<%= yeoman.school %>/**/*.js'];
                        }
                    });
                    // 遍历student目录
                    grunt.file.recurse('src/student/', function (abspath, rootdir, subdir, filename) {
                        if(subdir === undefined && grunt.file.match('*.html', filename)){
                          files['<%= yeoman.student %>/'+filename] = ['<%= yeoman.student %>/main.js','<%= yeoman.student %>/**/*.js'];
                        }
                    });
                    return files;
                }())
      }
    }
  });


  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'injector',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'usemin',
    'cachebreaker',
    'htmlmin'
  ]);
  
  // 压缩图片任务
  grunt.registerTask('images', [
    'imagemin',
    'copy:images'
  ]);
  
  grunt.registerTask('default', [
    'newer:jshint',
    'build'
  ]);
};
