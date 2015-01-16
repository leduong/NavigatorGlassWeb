'use strict';

angular.module('navigatorGlassProjectApp')
  .controller('headerCtrl', function ($scope, $location, authService) {

    $scope.logOut = function () {
      authService.logOut();
      $location.path('/#/');
    };

    $scope.authentication = authService.authentication;

  });