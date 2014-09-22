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

        var _this = this;

        $scope.taskId = $routeParams.taskId;
        $scope.task = {};

        taskService.getTask($scope.taskId).then(function(t){
            $scope.task = t;
        });

        this.updateTask = function(task) {
            taskService.updateTask(task).then(function(){
                _this.goBack();
            })
        };

        this.goBack = function() {
            $location.path("task/" + $scope.taskId);
        }

        this.addSubtask = function(task) {
            task.subTasks.push({});
        };

        this.removeSubtask = function(task, subtask) {
            console.log("remove subtask id=" + subtask.id + ", description=" + subtask.description);
            for(var i=0;i<task.subTasks.length;i++){
                if(task.subTasks[i] == subtask){
                    console.log("removed: " + task.subTasks[i].description);
                    task.subTasks.splice(i, 1);
                } else {
                    console.log("not removed: " + task.subTasks[i].description);
                }
            }
            console.log("after remove: " + JSON.stringify(task));
        };

        $scope.getError = function (fieldName, id) {
            var errors =  $scope.errordata;
            if (errors!=null) {
                for (var i = 0; i < errors.length; i++) {
                    if (typeof errors[i] !='undefined' && errors[i].context.field == fieldName) {
                        if (id!=null) {
                            if (id==errors[i].context.id) {
                                return errors[i].messageName;
                            }
                        } else {
                            return errors[i].messageName;
                        }
                    }
                }
            }
            return "";
        };


  });
