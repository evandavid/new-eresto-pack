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
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
