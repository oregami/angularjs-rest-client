[![Build Status](https://travis-ci.org/oregami/angularjs-rest-client.svg?branch=master)](https://travis-ci.org/oregami/angularjs-rest-client)

angularjs-rest-client
=====================

JavaScript REST client for the [dropwizard-guice-jpa-seed](https://github.com/oregami/dropwizard-guice-jpa-seed) server application. 

Currently it has the following features:

- created with the [Yeoman generator for AngularJS](https://github.com/yeoman/generator-angular)
- integrated dependency managament with [npm](https://www.npmjs.org/)/[Bower](http://bower.io/)
- build management with [Grunt](http://gruntjs.com/)
- JavaScript unit tests with [Karma](http://karma-runner.github.io) (TODO: end2end tests)
- [live reload](https://github.com/gruntjs/grunt-contrib-watch) of the website during development 
- REST calls with [Restangular](https://github.com/mgonto/restangular)
- edit task objects, including subtasks (1-n relation)
- list revisions of task objects and language objects (stored on the server via Hibernate Envers)
