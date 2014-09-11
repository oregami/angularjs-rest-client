'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:TaskeditCtrl
 * @description
 * # TaskeditCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
  .controller('TaskeditCtrl', function ($scope, $routeParams, taskService, Restangular, $location) {

        $scope.taskId = $routeParams.taskId;
        $scope.selectedTask = {};

        taskService.getTask($scope.taskId).then(function(t){
            $scope.selectedTask = t;
        });

        $scope.updateTask = function(task) {
            taskService.updateTask(task).then(function(){
                $scope.goBack();
            });
        };

        $scope.goBack = function() {
            $location.path("task/" + $scope.taskId);
        }

        $scope.addSubtask = function() {
            $scope.selectedTask.subTasks.push({});
        };

        $scope.removeSubtask = function(subtask) {
            $scope.selectedTask.subTasks.pop(subtask);
        };


  });
