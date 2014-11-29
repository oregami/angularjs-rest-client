'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:TaskeditCtrl
 * @description
 * # TaskeditCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularRest')
  .controller('TaskeditCtrl', function ($scope, $routeParams, taskService, Restangular, $location, errorService) {

        var _this = this;

        $scope.taskId = $routeParams.taskId;
        $scope.task = {'name':'new name', 'id' : null, 'validationId' : errorService.validationId()};

        if ($scope.taskId!=null) {
            taskService.getTask($scope.taskId).then(function (t) {
                $scope.task = t;
            });
        }

        this.updateTask = function(task) {
            taskService.updateTask(task).then(function (ret) {
                var url = null;
                if (ret.headers) {
                    url = ret.headers('Location');
                }
                _this.goBack(url);
            })
        };

        this.goBack = function(url) {
            if (url!=null) {
                var id = url.split("/").pop();
                $scope.taskId = id;
            }
            if ($scope.taskId) {
                $location.path("task/" + $scope.taskId);
            } else {
                $location.path("task/");
            }

        };

        this.addSubtask = function(task) {
            if (task.subTasks==null) {
                task.subTasks = [];
            }
            task.subTasks.push({validationId : errorService.validationId()});
        };

        this.removeSubtask = function(task, subtask) {
            for(var i=0;i<task.subTasks.length;i++){
                if(task.subTasks[i] == subtask){
                    task.subTasks.splice(i, 1);
                }
            }
        };

        $scope.getError = function(fieldName, entity) {
            return errorService.getError($scope.errordata, fieldName, entity);
        };

        $scope.availableLanguages = Restangular.all("language").getList().$object;


  });
