'use strict';

describe('Controller: LanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsRestClientApp'));

  var LanguageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LanguageCtrl = $controller('LanguageCtrl', {
      $scope: scope
    });
  }));



});
