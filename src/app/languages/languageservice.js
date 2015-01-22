'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.languageService
 * @description
 * # languageService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularRest')
  .service('languageService', function languageService(Restangular) {

        return {
            getAll: function() {
                return Restangular.all('language').getList().$object;
            },
            updateLanguage: function(language) {
                var ret = language.put();
                return ret;
            },
            getLanguage: function(id) {
                return Restangular.one('language', id).get();
            },
            getLanguageRevisionNumbers: function(languageId) {
                return Restangular.all('language/' +  languageId + '/revisions').getList().$object;
            },
            getLanguageWithRevision: function(languageId, revision) {
                return Restangular.one('language/' +  languageId + '/revisions/' + revision).get();
            }

        };

  });
