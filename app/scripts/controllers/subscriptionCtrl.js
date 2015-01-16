'use strict';

angular.module('navigatorGlassProjectApp')
  .controller('subscriptionCtrl', function ($scope, SubscriptionService) {

    $scope.subscriptions = {};

    var init = function () {
      /*
			    Retrieving data using the angular service named Subscription Service
			*/
      SubscriptionService.getSubscriptions().success(function (response) {
        $scope.subscriptions = response;
      });
    };


    $scope.onSave = function () {
      SubscriptionService.updateSubscriptions($scope.subscriptions);
      init();
    };

    init();

  });