define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name erestoClientApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the erestoClientApp
   */
  angular.module('erestoClientApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
