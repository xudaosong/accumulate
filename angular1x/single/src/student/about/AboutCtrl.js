'use strict';

/**
 * @ngdoc function
 * @name yczz.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yczz
 */
angular.module('yczz.student')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
