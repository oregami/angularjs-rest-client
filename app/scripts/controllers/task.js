'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
  .controller('TaskCtrl', function ($scope, taskService, Restangular, $routeParams, $window) {


        $scope.taskId = $routeParams.taskId;

        $scope.loadTaskList = function() {
            $scope.taskList = taskService.getAll();
        };
        $scope.loadSingleTask = function(id) {
            $scope.revisions = taskService.getTaskRevisionNumbers($scope.taskId);//Restangular.all('task/' +  $scope.taskId + "/revisions").getList().$object;
            $scope.currentRevision = null;
            taskService.getTask($scope.taskId).then(function(t){
                $scope.selectedTask = t;
            });
        }

        if ($scope.taskId==null) {
            $scope.loadTaskList();
        } else {
            $scope.taskList = {};
            $scope.loadSingleTask($scope.taskId);

        }


  });
