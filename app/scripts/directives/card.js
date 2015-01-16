'use strict';

/*
Directive that display card
*/
angular.module('navigatorGlassProjectApp')
  .directive('card', function () {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        card: '='
      },
      controller: function ($scope) {

        $scope.enablePrev = false;
        $scope.enableNext = false;

        $scope.onPrev = function () {
          $scope.html = angular.element($scope.articles[--$scope.index]).prop('outerHTML');

          $scope.enablePrev = $scope.index > 0;
          $scope.enableNext = $scope.index < $scope.articles.length - 1;
        };
        $scope.onNext = function () {
          $scope.html = angular.element($scope.articles[++$scope.index]).prop('outerHTML');

          $scope.enablePrev = $scope.index > 0;
          $scope.enableNext = $scope.index < $scope.articles.length - 1;
        };
      },
      // link: function ($scope, element, attrs) {
      link: function ($scope) {
        $scope.$watch('card.output', function () {
          $scope.articles = angular.element($scope.card.output).find('article');
          if ($scope.articles.length > 1) {
            $scope.index = 0;
            $scope.html = angular.element($scope.articles[$scope.index]).prop('outerHTML');
            $scope.enableNext = true;
          } else {
            $scope.html = $scope.card.output;
          }
        });
      },
      template: '<div class="full">' +
        '<div class="scalable">' +
        '<div id="leftscroll" class="scroll leftscroll" ng-click="onPrev()" ng-show="enablePrev"></div>' +
        '<div id="card" class="card" style="left: 0px; width: 640px;" ng-bind-html="html">' +
        'abd' +
        '</div>' +
        '<div id="rightscroll" class="scroll rightscroll" ng-click="onNext()" ng-show="enableNext"></div>' +
        '</div>' +
        '</div>',
      replace: true
    };
  });