'use strict';

/**
 * @ngdoc function
 * @name yczz.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yczz
 */
angular.module('angular-single.student')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
