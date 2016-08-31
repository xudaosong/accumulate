/**
 * @ngdoc overview
 * @name yczzApp
 * @description
 * # yczzApp
 *
 * Main module of the application.
 */
define(['ngAMD','angular','uiRouter','ngAnimate','ngResource','ngCookies','ngSanitize'],function(ngAMD){
    'use strict';
    var student = angular.module('angular-amd.student', [
                    'ngAnimate',        
                    'ngCookies',        
                    'ngResource',        
                    'ngSanitize',        
                    'ui.router'
                  ])
                  .config(function($stateProvider,$urlRouterProvider){
                      $stateProvider
                          .state('home',ngAMD.route({
                              url:'/home',
                              templateUrl:'home/home.html',
                              controllerUrl:'home/HomeCtrl'
                          }))
                          .state('about',ngAMD.route({
                              url:'/about',
                              templateUrl:'about/about.html',
                              controllerUrl:'about/AboutCtrl'
                          }));
                      $urlRouterProvider.otherwise('/home');
                  });
    return ngAMD.bootstrap(student);
});


