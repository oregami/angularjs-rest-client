'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:LanguageeditCtrl
 * @description
 * # LanguageeditCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularRest')
  .controller('LanguageeditCtrl', function ($scope, $routeParams, languageService, Restangular, $location, errorService) {

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
            $location.path('language/' + $scope.languageId);
        };

        $scope.getError = function(fieldName, entity) {
            return errorService.getError($scope.errordata, fieldName, entity);
        };



    });
