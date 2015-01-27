'use strict';
var wd = require('wd');

describe('The language view', function () {

  beforeEach(function () {
    //browser.get('http://localhost:3000/index.html');
  });

  it('should list 2 languages', function() {
    browser.get('/#/language');
    //browser.waitForAngular();
    browser.driver.sleep(10);
    var rows = element.all(by.repeater('language in languageList'));
    expect(rows.count()).toEqual(2);
  });

});


