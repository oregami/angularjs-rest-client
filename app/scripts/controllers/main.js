'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
