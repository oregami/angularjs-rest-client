'use strict';

describe('Controller: TaskeditCtrl', function () {

    // load the controller's module
    beforeEach(module('angularjsRestClientApp'));

    var TaskeditCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TaskeditCtrl = $controller('TaskeditCtrl', {
            $scope: scope
        });
    }));

    it('should add a subtask', function () {
        var _subTasks = [];
        var task = {id: 1, name: 'task1', description: 'this is task 1', subTasks: _subTasks};
        TaskeditCtrl.addSubtask(task);
        TaskeditCtrl.addSubtask(task);
        expect(task.subTasks.length).toEqual(2);
        TaskeditCtrl.addSubtask(task);
        expect(task.subTasks.length).toEqual(3);
    });

    it('should remove the right subtask', function () {
        var _subTasks = [];
        var task = {id: 1, name: 'task1', description: 'this is task 1', subTasks: _subTasks};
        TaskeditCtrl.addSubtask(task);
        task.subTasks[0].id="stid1";
        var st1 = task.subTasks[0];
        TaskeditCtrl.addSubtask(task);
        task.subTasks[1].id="stid2";
        var st2 = task.subTasks[0];
        expect(task.subTasks.length).toEqual(2);
        console.log(JSON.stringify(task));
        TaskeditCtrl.removeSubtask(task, st1);
        console.log(JSON.stringify(task));
        expect(task.subTasks.length).toEqual(1);
        expect(task.subTasks[0].id).toEqual("stid2");
    });


});
