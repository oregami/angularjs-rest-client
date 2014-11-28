'use strict';

describe('Controller: TaskCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsRestClientApp'));

  var TaskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskCtrl = $controller('TaskCtrl', {
      $scope: scope
    });
  }));

});
