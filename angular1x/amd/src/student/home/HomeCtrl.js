/**
 * @ngdoc function
 * @name yczz.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the yczz
 */
define(['main'], function (main) {
    'use strict';
    main.controller('HomeCtrl',function($scope){
 		$scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
    });
});