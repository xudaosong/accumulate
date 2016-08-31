'use strict';

/**
 * @ngdoc function
 * @name angular-single.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yczz
 */
angular.module('angular-single.school')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.templateUrl = 'news/news.html';
    
  });
