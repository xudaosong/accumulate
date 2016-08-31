'use strict';
require.config({
    baseUrl: '/src/student',
    paths:{
        'angular':'../../bower_components/angular/angular',
        'uiRouter':'../../bower_components/angular-ui-router/release/angular-ui-router',
        'ngAnimate':'../../bower_components/angular-animate/angular-animate',
        'ngResource':'../../bower_components/angular-resource/angular-resource',
        'ngCookies':'../../bower_components/angular-cookies/angular-cookies',
        'ngSanitize':'../../bower_components/angular-sanitize/angular-sanitize',
        'ngAMD':'../../bower_components/angularAMD/angularAMD',
        'ngload':'../../bower_components/angularAMD/ngload',
        'text':'../../bower_components/text/text',
        'requirejs':'../../bower_components/requirejs/require'
    },
    shim:{
        'uiRouter':['angular'],
        'ngAnimate':['angular'],
        'ngResource':['angular'],
        'ngCookies':['angular'],
        'ngSanitize':['angular'],
        'ngAMD':['angular'],
        'ngload':['ngAMD'],
        'text:':['requirejs']
    },
    deps:['main']
});