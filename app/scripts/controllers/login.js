'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
    .controller('LoginCtrl', function ($scope, $rootScope, loginService, localStorageService) {

        var _this = this;
        this.login = function (user) {
            loginService.login(user).then(function (t) {
                if (!t || t == null) {
                    _this.handleLoginError();
                    return;
                }
                $rootScope.loggedIn = true;
                $rootScope.username = user.username;
                localStorageService.set("token", t);
            }, function (response) {
                console.log("Error with status code", response.status);
                _this.handleLoginError();
            });
        };

        this.logout = function () {
            $rootScope.loggedIn = false;
            localStorageService.remove("token");
            $rootScope.username = null;
            $scope.user = null;
        };

        this.handleLoginError = function() {
            $rootScope.loggedIn = false;
            localStorageService.remove("token");
            $rootScope.username = null;
            $scope.user = null;
        };
    });
