'use strict';

describe('Controller: PseudocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularjsRestClientApp'));

  var PseudocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PseudocontrollerCtrl = $controller('PseudocontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
