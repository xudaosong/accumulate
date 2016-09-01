module.exports = function (grunt) {
    'use strict';
    // 自动加载Grunt插件
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-html-reporter'),
                reporterOutput: 'jshint-report.html'
            },
            core: {
                src: ['src/**/*.js','!src/lib/**','!src/css/**']
            }
        }
    });
    grunt.registerTask('lint', ['jshint:core']);
};