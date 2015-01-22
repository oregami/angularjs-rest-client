'use strict';

/**
 * @ngdoc function
 * @name angularjsRestClientApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the angularjsRestClientApp
 */
angular.module('angularRest')
  .controller('LanguageCtrl', function ($scope, $routeParams, languageService) {

        $scope.languageId = $routeParams.languageId;

        $scope.loadLanguageList = function() {
            $scope.languageList = languageService.getAll();
        };
        $scope.loadSingleLanguage = function(id) {
            $scope.loadSingleLanguageWithRevision(id, null);
        };

        $scope.loadSingleLanguageWithRevision = function(id, revision) {
            $scope.revisions = languageService.getLanguageRevisionNumbers($scope.languageId);
            $scope.currentRevision = revision;
            if (revision==null) {
                languageService.getLanguage($scope.languageId).then(function (t) {
                    $scope.selectedLanguage = t;
                });
            } else {
                languageService.getLanguageWithRevision($scope.languageId, $scope.revision).then(function (t) {
                    $scope.selectedLanguage = t;
                });
            }

        };

        if ($scope.languageId==null) {
            $scope.loadLanguageList();
        } else {
            $scope.languageList = {};
            if ($routeParams.revision!=null) {
                $scope.revision = $routeParams.revision;
                $scope.loadSingleLanguageWithRevision($scope.languageId, $scope.revision);
                //alert("revision " + $scope.revision);
            } else {
                $scope.loadSingleLanguage($scope.languageId);
            }
        }


  });
