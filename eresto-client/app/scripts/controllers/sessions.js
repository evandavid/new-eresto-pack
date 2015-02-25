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
    .controller('SessionsCtrl', function ($scope, $interval, $rootScope) {
      $scope.clock = Date.now(); $interval(function () { $scope.clock = Date.now(); }, 1000);
      $rootScope.title = "eresto - signin"
    });
});
