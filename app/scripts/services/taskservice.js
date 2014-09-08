'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.taskService
 * @description
 * # taskService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularjsRestClientApp')
  .service('taskService', function taskService(Restangular) {

        return {
            getAll: function() {
                //Restangular.all('task').getList().then(function(tasks){
                //    return tasks;
                //});
                return Restangular.all('task').getList().$object;
            }
        }

  });
