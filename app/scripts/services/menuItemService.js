'use strict';

/*
This is the MenuUtems Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
  .service('MenuItemService', function (HttpService) {
    return {
      getMenuItems: function () {
        return HttpService.handle('GET', '/menuItem');
      },
      postMenuItems: function (data) {
        return HttpService.handle('POST', '/menuItem', data);
      }
    };
  });