'use strict';

/**
 * @ngdoc function
 * @name yczz.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yczz
 */
angular.module('angular-amd.school')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.templateUrl = 'news/news.html';
    
  });
