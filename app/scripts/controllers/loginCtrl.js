'use strict';

angular.module('navigatorGlassProjectApp')
  .controller('LoginCtrl', function ($scope, $location, authService, $cookies, Global) {

    $scope.loginData = {
      userName: '',
      password: '',
      useRefreshTokens: false
    };


    $scope.message = '';

    $scope.login = function () {

      // authService.login($scope.loginData).then(function (response) {
      authService.login($scope.loginData).then(function () {
          $location.path('/timeline');

        },
        function (err) {
          $scope.message = err.error_description;
        });
    };

    // $scope.authExternalProvider = function (provider) {
    $scope.authExternalProvider = function () {
      var redirectUri = location.protocol + '//' + location.host + '/authComplete.html';

      var externalProviderUrl = Global.oAuth + '/Account/ExternalLoginCallback?' + 'returnUrl=' + $scope.encodeData(redirectUri) + '&client_id=' + Global.clientId;
      window.$windowScope = $scope;

      // var oauthWindow = window.open(externalProviderUrl, 'Authenticate Account', 'location=0,status=0,width=600,height=750');
      return window.open(externalProviderUrl, 'Authenticate Account', 'location=0,status=0,width=600,height=750');
    };

    $scope.encodeData = function (data) {
      return encodeURIComponent(data).replace(/\-/g, '%2D').replace(/\_/g, '%5F').replace(/\./g, '%2E').replace(/\!/g, '%21').replace(/\~/g, '%7E').replace(/\*/g, '%2A').replace(/\'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29');
    };

    $scope.authCompletedCB = function (fragment) {

      $scope.$apply(function () {

        //var externalData = { provider: fragment.provider, externalAccessToken: fragment.external_access_token };
        // var userId = $cookies['csrftoken'];
        // userId = $cookies['userId'];
        // userId = $cookies.userId;
        // authService.obtainAccessToken(fragment).then(function (response) {
        authService.obtainAccessToken(fragment).then(function () {
          $location.path('/timeline');
        });
      });
    };
  });