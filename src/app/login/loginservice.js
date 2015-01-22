'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.loginService
 * @description
 * # loginService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularRest')
  .service('loginService', function loginService(Restangular) {
        return {
            login: function(user) {
                var params = null;
                if (user && user!=null) {
                    params = 'username=' + user.username + '&password=' + user.password;
                }
                //works also:
                return Restangular.one('jwt', 'login').customPOST(
                    params,
                    undefined,
                    undefined,
                    {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                );

            }

        };
  });
