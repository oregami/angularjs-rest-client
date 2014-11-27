'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.loginService
 * @description
 * # loginService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularjsRestClientApp')
  .service('loginService', function loginService(Restangular) {
        return {
            login: function(user) {
                /*
                //works:
                Restangular.oneUrl('login', 'http://localhost:8080/jwt/login')
                    .customPOST(
                    "username=user1&password=password1",
                    undefined, // put your path here
                    undefined, // params here, e.g. {format: "json"}
                    {'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"}
                );
                */
                var params = null;
                if (user && user!=null) {
                    params = 'username=' + user.username + '&password=' + user.password;
                }
                //works also:
                return Restangular.one('jwt', 'login').customPOST(
                    //"username=user1&password=password1",
                    params,
                    undefined,
                    undefined,
                    {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
                );

            }

        }
  });
