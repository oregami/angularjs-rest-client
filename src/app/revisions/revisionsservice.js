'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.revisionsService
 * @description
 * # revisionsService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularRest')
  .service('revisionsService', function revisionsService(Restangular) {

        return {
            getAll: function() {
                return Restangular.all('revisions').getList().$object;
            }

        };

  });
