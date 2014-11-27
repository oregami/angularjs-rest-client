'use strict';

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
        'ngRoute', 'mgcrea.ngStrap', 'restangular', 'ngSanitize', 'LocalStorageModule'
    ])
    .config(function ($routeProvider, RestangularProvider) {

        $routeProvider
            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/task', {
                templateUrl: 'views/task.html',
                controller: 'TaskCtrl'
            })
            .when('/task/new', {
                templateUrl: 'views/taskEdit.html',
                controller: 'TaskeditCtrl as ctrl'
            })
            .when('/task/:taskId', {
                templateUrl: 'views/task.html',
                controller: 'TaskCtrl'
            })
            .when('/task/edit/:taskId', {
                templateUrl: 'views/taskEdit.html',
                controller: 'TaskeditCtrl as ctrl'
            })
            .when('/language/:languageId', {
                templateUrl: 'views/language.html',
                controller: 'LanguageCtrl'
            })
            .when('/language', {
                templateUrl: 'views/language.html',
                controller: 'LanguageCtrl'
            })
            .when('/language/edit/:languageId', {
                templateUrl: 'views/languageEdit.html',
                controller: 'LanguageeditCtrl'
            })
            .when('/login', {
              templateUrl: 'views/login.html',
              controller: 'LoginCtrl as ctrl'
            })
            .otherwise({
                redirectTo: '/main'
            });
    });

// Restangular service that uses setFullResponse
app.factory('RestFulResponse', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
        RestangularConfigurer.setFullResponse(true);
    });
});

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('angularjsRestClient');
});
app.run(function($rootScope, Restangular) {
    $rootScope.API = "http://dropwizard-guice-jpa-seed.oregami.org";
    //$rootScope.API = "http://localhost:8080";
    //$rootScope.API = "http://192.168.59.103:8080";
    Restangular.setBaseUrl($rootScope.API);
    Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
        $rootScope.errordata = response.data;
        $rootScope.isLoading--;
        return response;
    });
    $rootScope.isLoading = 0;
    Restangular.addRequestInterceptor(function(element) {
        $rootScope.isLoading++;
        return element;
    });
    Restangular.addResponseInterceptor(function(response) {
        $rootScope.isLoading--;
        $rootScope.errordata = null;
        return response;
    });
    Restangular.setDefaultHeaders({'Content-Type': 'application/json'});
    $rootScope.loggedIn = false;

    });
