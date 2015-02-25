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
    .controller('SessionsCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
