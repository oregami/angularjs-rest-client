'use strict';

function displayError(response, $rootScope) {

    $rootScope.errorMessage = "an error occured. try again. "
                    + response.status + "/" + response.statusText   ;
    return false;
}
/**
 * @ngdoc overview
 * @name angularjsRestClientApp
 * @description
 * # angularjsRestClientApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularjsRestClientApp', [
        'ngRoute', 'mgcrea.ngStrap', 'restangular', 'ngSanitize'
    ])
    .config(function ($routeProvider, RestangularProvider) {

        RestangularProvider.setErrorInterceptor(function(response, deferred, responseHandler) {
            return displayError(response);
        });

        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/task', {
                templateUrl: 'views/task.html',
                controller: 'TaskCtrl'
            })
            .when('/task/:taskId', {
                templateUrl: 'views/task.html',
                controller: 'TaskCtrl'
            })
            .when('/task/edit/:taskId', {
                templateUrl: 'views/taskEdit.html',
                controller: 'TaskeditCtrl'
            })
            .when('/language', {
                templateUrl: 'views/language.html',
                controller: 'LanguageCtrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });

app.run(function($rootScope, Restangular) {
    $rootScope.API = "http://localhost:8080";
    //$rootScope.API = "http://192.168.59.103:8080";
    Restangular.setBaseUrl($rootScope.API);
    Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
        return displayError(response, $rootScope);
    });
})
