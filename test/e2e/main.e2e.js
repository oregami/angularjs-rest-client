'use strict';

var fs = require('fs');
function writeScreenshot(data, filename) {
  var stream = fs.createWriteStream(filename);

  stream.write(new Buffer(data, 'base64'));
  stream.end();
}

describe('The main view', function () {

  describe("initial load", function() {

    it("should display", function() {
      browser.get('/#');
      var title='Angular JS REST client (ToDo app)';
      expect(browser.getTitle()).toEqual(title);
      //browser.takeScreenshot().then(function (png) {
       // writeScreenshot(png, 'screenshot_main.png');
      //});
    });
  });

});
