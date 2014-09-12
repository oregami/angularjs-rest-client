'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:LanguageeditCtrl
 * @description
 * # LanguageeditCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularjsRestClientApp')
  .controller('LanguageeditCtrl', function ($scope, $routeParams, languageService, Restangular, $location) {

        $scope.languageId = $routeParams.languageId;
        $scope.selectedLanguage = {};

        languageService.getLanguage($scope.languageId).then(function(t){
            $scope.selectedLanguage = t;
        });

        $scope.updateLanguage = function(language) {
            languageService.updateLanguage(language).then(function(){
                $scope.goBack();
            });
        };

        $scope.goBack = function() {
            $location.path("language/" + $scope.languageId);
        }



    });
