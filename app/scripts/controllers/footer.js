'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
    .controller('FooterCtrl', function ($scope, Restangular) {

        $scope.modal = {
            'content': '--' //real text comes from html file
        };

        $scope.save = function(formdata) {
            $scope.API = formdata.url;
            Restangular.setBaseUrl($scope.API);
        };

        $scope.startModal = function() {
            $scope.formdata = {};
            $scope.formdata.url = $scope.API;
        };

    });
