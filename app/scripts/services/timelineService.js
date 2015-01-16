'use strict';

/*
This is the Timeline Service that retrieves data from the API.
*/
angular.module('navigatorGlassProjectApp')
  .service('TimelineService', function (HttpService) {
    return {

      getTimeline: function () {
        return HttpService.handle('GET', '/timeline');
      },

      getAlbums: function () {
        return HttpService.handle('GET', '/album');
      },

      updateCard: function (card) {
        return HttpService.handle('PUT', '/timeline', card);
      },

      deleteCard: function (id) {
        return HttpService.handle('DELETE', '/timeline/' + id);
      },

      createCard: function (card) {
        return HttpService.handle('POST', '/timeline', card);
      }
    };
  });