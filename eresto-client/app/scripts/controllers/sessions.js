define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name erestoClientApp.controller:SessionsCtrl
   * @description
   * # SessionsCtrl
   * Controller of the erestoClientApp
   */
  angular.module('erestoClientApp.controllers.SessionsCtrl', [])
    .controller('SessionsCtrl', function ($scope, $interval, $rootScope, User, Session) {
      $scope.clock = Date.now(); $interval(function () { $scope.clock = Date.now(); }, 1000);
      $rootScope.title = "eresto - signin"

      // do login
      $scope.user = User;
      $scope.errorAuth = null;

      $scope.login = function(){
        Session.doLogin($scope.user).then(function(result){
          if (result.status_code != 200)
            $scope.errorAuth = result.message
        })
      };
    });
});
