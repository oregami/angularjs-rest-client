exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  multiCapabilities: [
    {'browserName': 'chrome'}
    //,{'browserName': 'firefox'}
  ],


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../test/e2e/**/*.e2e.js'],

  baseUrl: 'http://localhost:3000'
  //baseUrl: 'http://angularjs-rest-client.oregami.org'

  /*
  ,getPageTimeout: 60000
  ,allScriptsTimeout: 60000
  ,jasmineNodeOpts: {defaultTimeoutInterval: 60000}
  */

};

