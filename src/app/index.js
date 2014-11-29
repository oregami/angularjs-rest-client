'use strict';

var app =
    angular.module('angularRest', ['ngAnimate', 'ngSanitize', 'restangular', 'ngRoute', 'LocalStorageModule'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/task', {
        templateUrl: 'app/tasks/task.html',
        controller: 'TaskCtrl'
      })
      .when('/task/new', {
        templateUrl: 'app/tasks/taskEdit.html',
        controller: 'TaskeditCtrl as ctrl'
      })
      .when('/task/edit/:taskId', {
        templateUrl: 'app/tasks/taskEdit.html',
        controller: 'TaskeditCtrl as ctrl'
      })
      .when('/task/:taskId', {
        templateUrl: 'app/tasks/task.html',
        controller: 'TaskCtrl'
      })
      .when('/language/:languageId', {
        templateUrl: 'app/languages/language.html',
        controller: 'LanguageCtrl'
      })
      .when('/language', {
        templateUrl: 'app/languages/language.html',
        controller: 'LanguageCtrl'
      })
      .when('/language/edit/:languageId', {
        templateUrl: 'app/languages/languageEdit.html',
        controller: 'LanguageeditCtrl'
      })
      .when('/login', {
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl as ctrl'
      })



      .otherwise({
        redirectTo: '/main'
      });
  })
;


// Restangular service that uses setFullResponse
app.factory('RestFulResponse', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setFullResponse(true);
  });
});

/*
app.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('angularjsRestClient');
});
  */

app.run(function($rootScope, Restangular) {
  $rootScope.API = 'http://dropwizard-guice-jpa-seed.oregami.org';
  //$rootScope.API = 'http://localhost:8080';
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
