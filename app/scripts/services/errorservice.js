'use strict';

/**
 * @ngdoc service
 * @name angularjsRestClientApp.errorService
 * @description
 * # errorService
 * Service in the angularjsRestClientApp.
 */
angular.module('angularjsRestClientApp')
  .service('errorService', function errorService() {

        return {
            getError : function (errors, fieldName, id, errorId) {
                if (errors!=null) {
                    for (var i = 0; i < errors.length; i++) {
                        if (typeof errors[i] !='undefined' && errors[i].context.field == fieldName) {
                            var relevantId = id;
                            if (id == null) {
                                relevantId = errorId;
                            }
                            if (relevantId!=null) {
                                if (relevantId==errors[i].context.id) {
                                    return errors[i].messageName;
                                }
                            } else {
                                //return errors[i].messageName;
                            }
                        }
                    }
                }
                return "";
            } ,

            errorId : function() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                    return v.toString(16);
                });
            }

        }

  });
