/*jshint unused: vars */
define([
  'angular', 
  'ui.router',
  'ui.bootstrap',
  'angular-momentjs',
  'controllers/main', 
  'controllers/about', 
  'controllers/sessions'
  ]/*deps*/, function (angular)/*invoke*/ {
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
    /*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'angular-momentjs',
  ])
    .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider
        .otherwise('/dashboard');
      $stateProvider
        .state('app', {
          abstract: true,
          url: '',
          templateUrl: 'views/shared/app.html',
          controller: function($scope, $cookieStore, $location, $state){
            // config
            $scope.app = {
              name: 'Angulr',
              version: '2.0.0',
              // for chart colors
              color: {
                primary: '#7266ba',
                info:    '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger:  '#f05050',
                light:   '#e8eff0',
                dark:    '#3a3f51',
                black:   '#1c2b36'
              },
              settings: {
                themeID: 10,
                navbarHeaderColor: 'bg-info dker',
                navbarCollapseColor: 'bg-info dk',
                asideColor: 'bg-black',
                headerFixed: true,
                asideFixed: false,
                asideFolded: false,
                asideDock: false,
                container: false
              }
            };

            if (!$cookieStore.get('signed_in') || $cookieStore.get('signed_in') === undefined){
              $state.go('sessions.signin');
            }
          }
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
