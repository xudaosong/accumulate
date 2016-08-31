'use strict';

/**
 * @ngdoc function
 * @name yczz.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yczz
 */
angular.module('yczz.student')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
