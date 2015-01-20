'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:TaskCtrl
 * @description
 * # TaskCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularRest')
  .controller('TaskCtrl', function ($scope, taskService, Restangular, $routeParams) {

        $scope.taskId = $routeParams.taskId;

        $scope.loadTaskList = function() {
            $scope.taskList = taskService.getAll();
        };
        $scope.loadSingleTask = function(id) {
            $scope.loadSingleTaskWithRevision(id, null);
        }

        $scope.loadSingleTaskWithRevision = function(id, revision) {
            $scope.revisions = taskService.getTaskRevisionNumbers($scope.taskId);
            $scope.currentRevision = revision;
            if (revision==null) {
                taskService.getTask($scope.taskId).then(function (t) {
                    $scope.task = t;
                });
            } else {
                taskService.getTaskWithRevision($scope.taskId, $scope.revision).then(function (t) {
                    $scope.task = t;
                });
            }

        }

        $scope.deleteTask = function(id) {
            $scope.revisions = taskService.deleteTask(id).then(function (t) {
                $scope.loadTaskList();
            });
        }

        if ($scope.taskId==null) {
            $scope.loadTaskList();
        } else {
            $scope.taskList = {};
            if ($routeParams.revision!=null) {
                $scope.revision = $routeParams.revision;
                $scope.loadSingleTaskWithRevision($scope.taskId, $scope.revision);
            } else {
                $scope.loadSingleTask($scope.taskId);
            }
        }



  });
