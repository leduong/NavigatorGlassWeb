'use strict';

/*
This is the Location Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
  .service('LocationService', function (HttpService) {
    return {
      getLocations: function () {
        return HttpService.handle('GET', '/location');
      }
    };
  });