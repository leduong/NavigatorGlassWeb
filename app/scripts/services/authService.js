'use strict';

angular.module('navigatorGlassProjectApp')
  .service('authService', function ($http, $q, localStorageService, Global) {

    var serviceBase = Global.ApiUrl;
    var authServiceFactory = {};

    var authentication = {
      isAuth: false,
      userName: '',
      useRefreshTokens: false
    };

    var externalAuthData = {
      provider: '',
      userName: '',
      externalAccessToken: ''
    };

    var saveRegistration = function (registration) {

      logOut();

      return $http.post(serviceBase + 'account/register', registration).then(function (response) {
        return response;
      });

    };

    var login = function (loginData) {

      var data = 'grant_type=password&username=' + loginData.userName + '&password=' + loginData.password;
      if (loginData.useRefreshTokens) {
        data = data + '&client_id=' + Global.clientId;
      }

      var deferred = $q.defer();

      $http.post(serviceBase + 'token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).success(function (response) {

        if (loginData.useRefreshTokens) {
          localStorageService.set('authorizationData', {
            token: response.access_token,
            userName: loginData.userName,
            refreshToken: response.refresh_token,
            useRefreshTokens: true
          });
        } else {
          localStorageService.set('authorizationData', {
            token: response.access_token,
            userName: loginData.userName,
            refreshToken: '',
            useRefreshTokens: false
          });
        }
        authentication.isAuth = true;
        authentication.userName = loginData.userName;
        authentication.useRefreshTokens = loginData.useRefreshTokens;

        deferred.resolve(response);

      }).error(function (response) {
        logOut();
        deferred.reject(response.error);
      });

      return deferred.promise;

    };

    var logOut = function () {

      localStorageService.remove('authorizationData');

      authentication.isAuth = false;
      authentication.userName = '';
      authentication.useRefreshTokens = false;
      // var data = ''; // unuse

      //$http.post(serviceBase + 'Account/Logoff', data, { withCredentials: true, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

      //    deferred.resolve(response);

      //}).error(function (err, status) {
      //    deferred.reject(err); 
      //});

    };

    var fillAuthData = function () {

      var authData = localStorageService.get('authorizationData');
      if (authData) {
        authentication.isAuth = true;
        authentication.userName = authData.userName;
        authentication.useRefreshTokens = authData.useRefreshTokens;
      }

    };

    var refreshToken = function () {
      var deferred = $q.defer();

      var authData = localStorageService.get('authorizationData');

      if (authData) {

        if (authData.useRefreshTokens) {

          var data = 'grant_type=refresh_token&refresh_token=' + authData.refreshToken + '&client_id=' + Global.clientId;

          localStorageService.remove('authorizationData');

          $http.post(serviceBase + 'token', data, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).success(function (response) {

            localStorageService.set('authorizationData', {
              token: response.access_token,
              userName: response.userName,
              refreshToken: response.refresh_token,
              useRefreshTokens: true
            });

            deferred.resolve(response);

          }).error(function (response) {
            logOut();
            deferred.reject(response.error);
          });
        }
      }

      return deferred.promise;
    };

    var obtainAccessToken = function (externalData) {

      var deferred = $q.defer();

      localStorageService.set('authorizationData', {
        token: 'test',
        userName: externalData.userName,
        refreshToken: '',
        useRefreshTokens: false
      });

      authentication.isAuth = true;
      authentication.userName = externalData.external_user_name;
      authentication.useRefreshTokens = false;
      deferred.resolve();
      //$http.get(serviceBase + 'account/ObtainLocalAccessToken', { params: { provider: externalData.provider, externalAccessToken: externalData.externalAccessToken } }).success(function (response) {

      //    localStorageService.set('authorizationData', { token: response.access_token, userName: response.userName, refreshToken: '', useRefreshTokens: false });

      //    _authentication.isAuth = true;
      //    _authentication.userName = response.userName;
      //    _authentication.useRefreshTokens = false;

      //    deferred.resolve(response);

      //}).error(function (err, status) {
      //    _logOut();
      //    deferred.reject(err);
      //});

      return deferred.promise;

    };

    var registerExternal = function (registerExternalData) {

      var deferred = $q.defer();

      $http.post(serviceBase + 'api/account/registerexternal', registerExternalData).success(function (response) {

        localStorageService.set('authorizationData', {
          token: response.access_token,
          userName: response.userName,
          refreshToken: '',
          useRefreshTokens: false
        });

        authentication.isAuth = true;
        authentication.userName = response.userName;
        authentication.useRefreshTokens = false;

        deferred.resolve(response);

      }).error(function (response) {
        logOut();
        deferred.reject(response.error);
      });

      return deferred.promise;

    };

    authServiceFactory.saveRegistration = saveRegistration;
    authServiceFactory.login = login;
    authServiceFactory.logOut = logOut;
    authServiceFactory.fillAuthData = fillAuthData;
    authServiceFactory.authentication = authentication;
    authServiceFactory.refreshToken = refreshToken;

    authServiceFactory.obtainAccessToken = obtainAccessToken;
    authServiceFactory.externalAuthData = externalAuthData;
    authServiceFactory.registerExternal = registerExternal;

    return authServiceFactory;
  });