/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name erestoClientApp
   * @description
   * # erestoClientApp
   *
   * Main module of the application.
   */
  return angular
    .module('erestoClientApp', ['erestoClientApp.controllers.MainCtrl',
'erestoClientApp.controllers.AboutCtrl',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
