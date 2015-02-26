define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name erestoClientApp.Session
   * @description
   * # Session
   * Service in the erestoClientApp.
   */
  angular.module('erestoClientApp.services.Session', [])
	.service('Session', function (Restangular) {
    var SESSION_ENDPOINT = 'sessions';

    this.doLogin = function(user) {
      var data = {user: user};
      return Restangular.all(SESSION_ENDPOINT).post(data);
    };
	});
});
