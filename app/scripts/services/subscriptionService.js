'use strict';

/*
  Subscription Service  Manages Google Glass Registered Subscriptions 
*/
angular.module('navigatorGlassProjectApp')
  .service('SubscriptionService', function (HttpService) {
    return {
      getSubscriptions: function () {
        return HttpService.handle('GET', '/subscription');
      },
      updateSubscriptions: function (subscriptions) {
        return HttpService.handle('PUT', '/subscription', subscriptions);
      }

    };
  });