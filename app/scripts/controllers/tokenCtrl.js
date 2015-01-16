'use strict';

angular.module('navigatorGlassProjectApp')
  .controller('TokenCtrl', function ($scope, tokensManagerService) {

    $scope.refreshTokens = [];

    tokensManagerService.getRefreshTokens().then(function (results) {

      $scope.refreshTokens = results.data;

    }, function (error) {
      window.alert(error.data.message);
    });

    $scope.deleteRefreshTokens = function (index, tokenid) {

      tokenid = window.encodeURIComponent(tokenid);

      // tokensManagerService.deleteRefreshTokens(tokenid).then(function (results) {
      tokensManagerService.deleteRefreshTokens(tokenid).then(function () {

        $scope.refreshTokens.splice(index, 1);

      }, function (error) {
        window.alert(error.data.message);
      });
    };

  });