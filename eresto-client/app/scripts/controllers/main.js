define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name erestoClientApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the erestoClientApp
   */
  angular.module('erestoClientApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, $rootScope, $cookieStore, $location, $state) {
      $rootScope.title = "eresto";
      // config
      $scope.app = {
        name: 'eresto',
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

      if (!$cookieStore.get('user') || $cookieStore.get('user') === undefined){
        $state.go('sessions.signin');
      }else {
        var user = $cookieStore.get('user');
        switch(user.role) {
          case "admin":
            $state.go('app.store.admin');
            break;
          case "cashier":
            $state.go('app.store.cashier');
            break;
          case "waitress":
            $state.go('app.store.waitress');
            break;
          case "manager":
            $state.go('app.store.manager');
            break;
          default:
            $state.go('app.dashboard');
            break;
        } 
      }

      $scope.logout = function(){
        $cookieStore.remove('user');
        $state.go('sessions.signin');
      }
    });
});
