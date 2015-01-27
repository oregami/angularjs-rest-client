[![Build Status](https://travis-ci.org/oregami/angularjs-rest-client.svg?branch=master)](https://travis-ci.org/oregami/angularjs-rest-client)

angularjs-rest-client
=====================

JavaScript REST client for the [dropwizard-guice-jpa-seed](https://github.com/oregami/dropwizard-guice-jpa-seed) server application. 

Currently it has the following features:

- integrated dependency management with [npm](https://www.npmjs.org/)/[Bower](http://bower.io/)
- build management with [Gulp](http://gulpjs.com/)
- automatic reload of the website during development (gulp feature)
- JavaScript unit tests with [Karma](http://karma-runner.github.io) 
- end2end tests with [Protractor](http://www.protractortest.org) 
- REST calls with [Restangular](https://github.com/mgonto/restangular)
- edit task objects, including subtasks (1-n relation)
- list revisions of task objects and language objects (stored on the server via Hibernate Envers)

# system architecture

![](docs/system_architecture.png?raw=true)
