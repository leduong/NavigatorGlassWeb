'use strict';

/*
Directive that creates pane elements inside tab elements.
*/
angular.module('navigatorGlassProjectApp')
  .directive('pane', function () {
    return {
      require: '^tabitem',
      restrict: 'E',
      transclude: true,
      scope: {
        heading: '@'
      },
      link: function (scope, element, attrs, tabsCtrl) {
        tabsCtrl.addPane(scope);
      },
      template: '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  });