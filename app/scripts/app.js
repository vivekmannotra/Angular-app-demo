'use strict';
angular
  .module('lexstartProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/viewTasks.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
