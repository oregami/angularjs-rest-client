'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.taskService
 * @description
 * # taskService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularjsRestClientApp')
  .service('taskService', function taskService(Restangular, RestFulResponse) {

        return {
            getAll: function() {
                return Restangular.all('task').getList().$object;
            },
            updateTask: function(task) {
                if (task.id===null) {
                  return RestFulResponse.all('task').post(task).then(function(response) {
                    console.log(JSON.stringify(response.headers));
                    return response;
                  });
                }
                var ret = task.put();
                return ret;
            },
            getTask: function(id) {
                return Restangular.one('task', id).get();
            },
            deleteTask: function(id) {
                return Restangular.one('task', id).remove();
            },
            getTaskRevisionNumbers: function(taskId) {
                return Restangular.all('task/' +  taskId + "/revisions").getList().$object;
            },
            getTaskWithRevision: function(taskId, revision) {
                return Restangular.one('task/' +  taskId + "/revisions/" + revision).get();
            }

        }

  });
