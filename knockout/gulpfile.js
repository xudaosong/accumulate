'use strict';
// Node modules
var fs = require('fs'), vm = require('vm'), merge = require('deeply'), chalk = require('chalk'), es = require('event-stream'), cs = require('combined-stream');

// Gulp and plugins
var gulp = require('gulp'), rjs = require('gulp-requirejs-bundler'), concat = require('gulp-concat'), clean = require('gulp-clean'),
    replace = require('gulp-replace'), uglify = require('gulp-uglify'), htmlreplace = require('gulp-html-replace'),
    minifyCSS = require('gulp-minify-css'), minifyHTML = require('gulp-minify-html'), sass = require('gulp-sass'), removeLogs = require('gulp-removelogs');

// Config
var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync('src/require.config.js') + '; require;');

var requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
    out: 'js/lib.js',
    baseUrl: './src',
    paths: {
        requireLib: 'lib/requirejs/require'
    },
    include: [
        'requireLib',
        'jquery',
        'knockout',
        'text',
        'require.config.dist'
    ],
    bundles: {
        // 学生空间
        'student/js/student': [
            'student/js/startup',
            'student/components/header/header',
            'student/components/footer/footer'
        ],
        'student/js/home': ['student/components/home/home'],
        'student/js/about': ['student/components/about/about'],
        // 学校空间
        'school/js/school': [
            'school/js/startup',
            'school/components/header/header',
            'school/components/footer/footer'],
        'school/js/home': ['school/components/home/home'],
        'school/js/news': ['school/components/news/news']
    }
});

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', function () {
    return rjs(requireJsOptimizerConfig)
        .pipe(removeLogs())
        .pipe(gulp.dest('./dist/'));
});

// Concatenates CSS files, rewrites relative paths to Bootstrap fonts, copies Bootstrap fonts
gulp.task('student_css', function () {

    var licenseCss = gulp.src('src/css/license.css'),
        appCss = gulp.src('src/css/student.scss').pipe(sass()),
        combinedStream = cs.create();
    combinedStream.append(licenseCss);
    combinedStream.append(appCss);
    var combinedCss = combinedStream.pipe(concat('student.css'));
    return es.concat(combinedCss)
        .pipe(minifyCSS({compatibility: 'ie7'}))
        .pipe(gulp.dest('./dist/css/'));
});
gulp.task('school_css', function () {
    var licenseCss = gulp.src('src/css/license.css'),
        appCss = gulp.src('src/css/school.scss').pipe(sass()),
        combinedStream = cs.create();
    combinedStream.append(licenseCss);
    combinedStream.append(appCss);
    var combinedCss = combinedStream.pipe(concat('school.css'));
    return es.concat(combinedCss)
        .pipe(minifyCSS({compatibility: 'ie7'}))
        .pipe(gulp.dest('./dist/css/'));
});

// Copies index.html, replacing <script> and <link> tags to reference production URLs
gulp.task('student_html', function () {
    var version = requireJsOptimizerConfig.urlArgs;
    return gulp.src('./src/student/*.html')
        .pipe(htmlreplace({
            'css': {
                src: '../css/student.css',
                tpl: ' <link href="%s?' + version + '" rel="stylesheet">'
            },
            'lib': {
                src: '../js/lib.js',
                tpl: ' <script src="%s?' + version + '"></script>'
            },
            'student': {
                src: 'js/student.js',
                tpl: ' <script src="%s?' + version + '"></script>'
            }
        }))
        .pipe(minifyHTML({comments: true}))
        .pipe(gulp.dest('./dist/student'));
});

gulp.task('school_html', function () {
    var version = requireJsOptimizerConfig.urlArgs;
    return gulp.src('./src/school/*.html')
        .pipe(htmlreplace({
            'css': {
                src: '../css/school.css',
                tpl: ' <link href="%s?' + version + '" rel="stylesheet">'
            },
            'lib': {
                src: '../js/lib.js',
                tpl: ' <script src="%s?' + version + '"></script>'
            },
            'school': {
                src: 'js/school.js',
                tpl: ' <script src="%s?' + version + '"></script>'
            }
        }))
        .pipe(minifyHTML({comments: true}))
        .pipe(gulp.dest('./dist/school'));
});
// 压缩image
gulp.task('student_image', function () {
    return gulp.src(['src/student/img/**/*'])
        .pipe(gulp.dest('dist/student/img'));
});
gulp.task('school_image', function () {
    return gulp.src('src/school/img/**/*')
        .pipe(gulp.dest('./dist/school/img'));
});
// Removes all files from ./dist/
gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean({force: true}));
});
gulp.task('student', ['js', 'student_html', 'student_css', 'study_css'], function (callback) {
    callback();
    console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});
gulp.task('school', ['js', 'school_html', 'school_css'], function (callback) {
    callback();
    console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});
gulp.task('default', ['js', 'school_html', 'student_html', 'school_css', 'student_css','student_image','school_image'], function (callback) {
    callback();
    console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});