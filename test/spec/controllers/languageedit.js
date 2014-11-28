'use strict';

describe('Controller: LanguageeditCtrl', function () {

    // load the controller's module
    beforeEach(module('angularjsRestClientApp'));

    var LanguageeditCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LanguageeditCtrl = $controller('LanguageeditCtrl', {
            $scope: scope
        });
    }));

});
