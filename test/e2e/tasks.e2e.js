'use strict';

describe('The task view', function () {

  it("should list 2 tasks", function() {
    browser.get('/#/task');
    //browser.waitForAngular(); // if your test is outrunning the browser
    //browser.driver.sleep(10);
    var rows = element.all(by.repeater('task in taskList'));
    expect(rows.count()).toEqual(2);
  });

  it('should display a single task', function() {
    browser.get('/#/task');
    //click in "view" for first task in list:
    element.all(by.css('.glyphicon-eye-open')).get(0).click();
    //check content for taskId:
    var idInfo = element(by.css('.smallInfo')).click();
    //displayed task id is valid
    idInfo.getText().
      then(function(promise){
        expect(promise.length).toEqual(39);
        expect(promise).toMatch('id=[a-z0-9\\-]{36}');
        console.log("Expected text is: " + promise);
      });

  });

});


