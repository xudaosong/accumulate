'use strict';

/**
 * @ngdoc function
 * @name angular-single.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yczz
 */
angular.module('angular-single.school')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.templateUrl = 'home/home.html';
  });
