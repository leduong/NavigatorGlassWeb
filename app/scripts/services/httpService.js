'use strict';

/*
Service used to make different HTTP requests.
*/
angular.module('navigatorGlassProjectApp')
  .service('HttpService', function ($http, Global) {
    var timeout = 10000;

    return {
      handle: function (method, url, data, params) {
        return $http({
          method: method,
          url: Global.ApiUrl + url,
          data: data,
          params: params,
          timeout: timeout
        });
      },

      mockHandle: function (method, url, data, params) {
        return $http({
          method: method,
          url: 'http://navigatormock.cloudapp.net/api' + url,
          data: data,
          params: params,
          timeout: timeout
        });
      }
    };
  });