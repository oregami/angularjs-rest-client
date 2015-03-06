'use strict';

var app =
    angular.module('angularRest', [
      'ngAnimate',
      'ngSanitize',
      'restangular',
      'ngRoute',
      'LocalStorageModule',
      'http-auth-interceptor',
      'mgcrea.ngStrap'
    ])
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
      .when('/revisions', {
        templateUrl: 'app/revisions/revisions.html',
        controller: 'RevisionsCtrl'
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


app.run(function($rootScope, Restangular, localStorageService) {

  $rootScope.debug=false;

  $rootScope.API = 'http://dropwizard-guice-jpa-seed.oregami.org';
  //$rootScope.API = 'http://localhost:8080';

  Restangular.setBaseUrl($rootScope.API);
  Restangular.setErrorInterceptor(function(response) {
    $rootScope.errordata = response.data;
    $rootScope.isLoading--;
    return response;
  });
  $rootScope.isLoading = 0;
  Restangular.addRequestInterceptor(function(element) {
    $rootScope.isLoading++;
    return element;
  });

  Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
    //console.log('FRI for ' + url + ': ' + (localStorageService.get("token")==null?null:localStorageService.get("token").token));
    if (localStorageService.get('token') != null) {
      console.log('auth-header wird gesetzt! \n' + JSON.stringify(localStorageService.get('token')));
      headers.authorization = 'bearer ' + localStorageService.get('token').token;
    }
    return {
      element: element,
      headers: headers,
      params: params,
      httpConfig: httpConfig
    };

  });
  Restangular.addResponseInterceptor(function(response) {
    $rootScope.isLoading--;
    $rootScope.errordata = null;
    return response;
  });
  Restangular.setDefaultHeaders({'Content-Type': 'application/json'});
  $rootScope.loggedIn = false;
  if (localStorageService.get('token') != null) {
    $rootScope.loggedIn = true;
  }

});
