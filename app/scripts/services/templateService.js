'use strict';

/*
  Template Service retrieves Google Glass Card Templates 
*/
angular.module('navigatorGlassProjectApp')
  .service('TemplateService', function (HttpService) {
    return {
      getTemplates: function () {
        return HttpService.handle('GET', '/template');
      }
    };
  });