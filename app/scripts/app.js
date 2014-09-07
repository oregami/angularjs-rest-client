'use strict';

/**
 * @ngdoc overview
 * @name angularjsRestClientApp
 * @description
 * # angularjsRestClientApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsRestClientApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
