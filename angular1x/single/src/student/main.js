'use strict';

/**
 * @ngdoc overview
 * @name yczzApp
 * @description
 * # yczzApp
 *
 * Main module of the application.
 */
angular
  .module('angular-single.student', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
      $stateProvider.
        state('home',{
          url:'/',
          templateUrl:'home/home.html',
          controller:'HomeCtrl'
        })
        .state('about', {
          url:'/about',
          templateUrl: 'about/about.html',
          controller: 'AboutCtrl'
        });
      $urlRouterProvider.otherwise('/');
  });
