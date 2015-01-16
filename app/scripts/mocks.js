'use strict';

angular.module('navigatorGlassMock', ['ngMockE2E'])
	.run(function ($httpBackend) {

		var timelineResponse, templateResponse, locationResponse;

		// $httpBackend.whenGET(new RegExp('.*/api/Timeline.*')).respond(200, timelineResponse);
		$httpBackend.whenGET(new RegExp('.*/api/Template.*')).respond(200, templateResponse);
		$httpBackend.whenGET(new RegExp('.*/api/Location.*')).respond(200, locationResponse);

		$httpBackend.whenPUT(new RegExp('.*/api/Timeline.*')).respond(function (method, url, data) {
			data = JSON.parse(data);
			for (var i = 0; i < timelineResponse.length; i++) {
				if (timelineResponse[i].id === data.id) {
					data.updated = new Date().toDateString();
					timelineResponse[i] = data;
					return [200, data];
				}
			}

			return [4040];
		});

		$httpBackend.whenDELETE(new RegExp('.*/api/Timeline/*.')).respond(function (method, url) {
			var strings = url.split('/');
			var id = strings[strings.length - 1];

			for (var i = 0; i < timelineResponse.length; i++) {
				if (timelineResponse[i].id === id) {
					timelineResponse.splice(i, 1);
					return [200];
				}
			}

			return [400];
		});

		$httpBackend.whenPOST(new RegExp('.*/api/Timeline.*')).respond(function (method, url, data) {
			data = JSON.parse(data);
			data.created = new Date().toDateString();
			data.updated = data.created;
			data.id = Math.round(Math.random() * 100000);
			timelineResponse.push(data);

			return [200, data];
		});

		// Pass through any unmocked calls
		$httpBackend.whenGET().passThrough();
		$httpBackend.whenPOST().passThrough();
		$httpBackend.whenPUT().passThrough();
		$httpBackend.whenDELETE().passThrough();
	});