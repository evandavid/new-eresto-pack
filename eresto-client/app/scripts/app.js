/*jshint unused: vars */
define([
  'angular', 
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'controllers/main', 
  'controllers/about', 
  'controllers/sessions', 
  'services/user', 
  'services/session', 'directives/global']/*deps*/, function (angular, GlobalDirective)/*invoke*/ {
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
    .module('erestoClientApp', [
    'erestoClientApp.controllers.MainCtrl',
    'erestoClientApp.controllers.AboutCtrl',
    'erestoClientApp.controllers.SessionsCtrl',
    'erestoClientApp.services.User',
    'erestoClientApp.services.Session',
'erestoClientApp.directives.Global',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'restangular'
  ])
    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
      RestangularProvider.setBaseUrl('http://localhost:3000/api/v1/');
      String.prototype.capitalizeFirstLetter = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
      };

      $urlRouterProvider
        .otherwise('/dashboard');
      $stateProvider
        .state('app', {
          url: '',
          templateUrl: 'views/shared/app.html',
          controller: "MainCtrl"
        })

        .state('app.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/shared/app_dashboard_v1.html',
        })

        .state('sessions', {
          url: '/sessions',
          template: '<div ui-view class="fade-in-right-big smooth login-container"></div>'
        })
        .state('sessions.signin', {
          url: '/signin',
          templateUrl: 'views/shared/page_signin.html',
        })
    })

    // .config( function($provide, $httpProvider) {
    //   $provide.factory("myHttpInterceptor",
    //     function($q, userData, $cookieStore, toastr, $location) {
    //       return {
    //         request: function(config) {
    //           config.currentUserData = userData.getCurrent();
    //           return config;
    //         },
    //         responseError: function(rejection) {
    //           if( rejection && rejection.status === 401 && rejection.config && rejection.config.currentUserData && rejection.config.currentUserData.loggedIn ) {
    //             rejection.config.currentUserData.loggedIn = false;
    //             $cookieStore.remove('_angular_devise_user');
    //             toastr.warning('You are logged out');
    //             $location.path('/#/sign_in');
    //           }
    //           return $q.reject(rejection);
    //         }
    //       };
    //     }
    //   );
    //   $httpProvider.interceptors.push("myHttpInterceptor");
    // });
});
