'use strict';

angular.module('navigatorGlassProjectApp')
  .controller('TemplatesCtrl', function (HttpService, $scope, $sce, TemplateService) {

    $scope.loadingTemplate = null;
    /*
		Method that outputs the TemplateItem as HTML & Text.
		*/
    function setTemplateItemOutput(item) {
        if (item.html && item.html.length > 0) {
          item.output = item.html;
          item.htmlState = item.html;
          var articles = angular.element(item.html).find('article');
          item.thumb = articles.length > 0 ? angular.element(articles[0]).prop('outerHTML') : item.html; // display only 1st article
        } else {
          item.output = item.textState = item.text;
        }
        return item;
      }
      /*
			Method that uses the TemplateService to retrieve Template data from
			API.Upon success it will call the setTemplateItemOutput for each 
			TemplateItem.
			*/
    $scope.loadTemplates = function () {
      $scope.loadingTemplate = true;
      TemplateService.getTemplates().success(function (result) {
        $scope.templateTimelines = result;
        for (var i = 0; i < $scope.templateTimelines.length; i++) {
          setTemplateItemOutput($scope.templateTimelines[i]);
        }
        $scope.loadingTemplate = false;
      });
    };

    /*
      Tempplate is empty or not
      */
    $scope.isTemplateEmpty = function () {
      var isEmpty = ($scope.loadingTemplate === false && $scope.templateTimelines.length === 0);
      return isEmpty;
    };


    $scope.loadTemplates();
  });