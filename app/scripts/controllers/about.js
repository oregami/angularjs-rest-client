'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
