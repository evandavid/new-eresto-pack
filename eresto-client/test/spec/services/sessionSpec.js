/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: Session', function () {

    // load the service's module
    beforeEach(module('erestoClientApp.services.Session'));

    // instantiate service
    var Session;
    beforeEach(inject(function (_Session_) {
      Session = _Session_;
    }));

    it('should do something', function () {
      expect(!!Session).toBe(true);
    });

  });
});
