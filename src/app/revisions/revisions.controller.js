'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:RevisionsCtrl
 * @description
 * # RevisionsCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularRest')
  .controller('RevisionsCtrl', function ($scope, $routeParams, revisionsService) {

    $scope.loadRevisionsList = function () {
      $scope.revisionsList = revisionsService.getAll();
    };

    $scope.loadRevisionsList();

    $scope.getDate = function(timestamp) {
      //var s = new Date(timestamp).toISOString();
      //var s = new Date(timestamp).toDateString();
      //var s = new Date(timestamp).toLocaleDateString();
      //var s2 = new Date(timestamp).toLocaleTimeString();
      //return s + ' ' + s2;
      return moment(timestamp).format('YYYY-MM-DD HH:mm');
    }


  });
