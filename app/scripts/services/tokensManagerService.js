'use strict';

angular.module('navigatorGlassProjectApp')
	.service('tokensManagerService', function ($http, Global) {

		var serviceBase = Global.ApiUrl;
		//ngAuthSettings.apiServiceBaseUri;

		var tokenManagerServiceFactory = {};

		var _getRefreshTokens = function () {

			return $http.get(serviceBase + 'api/refreshtokens').then(function (results) {
				return results;
			});
		};

		var _deleteRefreshTokens = function (tokenid) {

			return $http.delete(serviceBase + 'api/refreshtokens/?tokenid=' + tokenid).then(function (results) {
				return results;
			});
		};

		tokenManagerServiceFactory.deleteRefreshTokens = _deleteRefreshTokens;
		tokenManagerServiceFactory.getRefreshTokens = _getRefreshTokens;

		return tokenManagerServiceFactory;

	});