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
            $scope.loadSingleTaskWithRevision(id, null);
        }

        $scope.loadSingleTaskWithRevision = function(id, revision) {
            $scope.revisions = taskService.getTaskRevisionNumbers($scope.taskId);//Restangular.all('task/' +  $scope.taskId + "/revisions").getList().$object;
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

        if ($scope.taskId==null) {
            $scope.loadTaskList();
        } else {
            $scope.taskList = {};
            if ($routeParams.revision!=null) {
                $scope.revision = $routeParams.revision;
                $scope.loadSingleTaskWithRevision($scope.taskId, $scope.revision);
                //alert("revision " + $scope.revision);
            } else {
                $scope.loadSingleTask($scope.taskId);
            }
        }



  });
