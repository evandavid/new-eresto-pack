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
    .controller('SessionsCtrl', 
      function ($scope, $interval, $rootScope, $sce, $cookieStore, $state, User, Session) {
        // check user signed in
        if ($cookieStore.get('user'))
          $state.go('app');

        $scope.clock = Date.now(); $interval(function () { $scope.clock = Date.now(); }, 1000);
        $rootScope.title = "eresto - signin";
        $scope.login_label = "Log in";

        // do login
        $scope.user = User;
        $scope.errorAuth = null;

        $scope.login = function(){
          $scope.login_label = $sce.trustAsHtml("<i class='fa fa-circle-o-notch fa-spin'></i>");
          Session.doLogin($scope.user).then(function(result){
            if (result.status_code != 200)
              $scope.errorAuth = result.message;
            else{
              $scope.errorAuth = null;
              $cookieStore.put('user', result.results);
              $scope.user.username = null;
              $scope.user.password = null;
              $state.go('app');
            }
            $scope.login_label = "Log in";
          });
        };
    });
});
