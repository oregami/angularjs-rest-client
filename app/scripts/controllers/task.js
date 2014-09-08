'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
  .controller('TaskCtrl', function ($scope, taskService) {
        $scope.taskList = taskService.getAll();
  });
