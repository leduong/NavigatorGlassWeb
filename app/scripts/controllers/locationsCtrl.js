'use strict';

angular.module('navigatorGlassProjectApp')
  .controller('LocationCtrl', function (HttpService, $scope, LocationService) {
    /*
		    Retrieving location data using the angular service named Location Service
		*/
    LocationService.getLocations().success(function (result) {
      /*
			    In case of success here I will create the new divs with the maps 
			    based on the information sent by the API
			*/
      $scope.createNewMaps(result);
    });
    $scope.loadLocations = function () {
      var maps = [];
      var mapsDivs = [];
      var infos = [];
      var markers = [];
      // var map;
      var objJson;
      /*
			Method that creates the Marker(Pin) from Google Maps
			*/
      function createMarkerInfo(MapSel, iE, Pos, elem) {
          var acc = elem.accuracy;
          //var add = elem.address;
          //var dsp = elem.displayName;
          var lat = elem.latitude;
          var lon = elem.longitude;
          var tim = elem.timestamp;
          var id = elem.id;
          var infoContent = '<font style="font-size: 6pt;font-family: Verdana;font-weight: normal;font-style: normal;color: black;">';
          infoContent += '<b>ID:</b>' + id;
          infoContent += '&nbsp;&nbsp;<b>Accuracy:</b>' + acc + '<br>';
          infoContent += '<b>lat/lon:</b>' + lat + '/' + lon + '<br>';
          infoContent += '<b>Date:</b>' + tim + '<br>';

          infos[iE] = new google.maps.InfoWindow({
            content: infoContent
          });
          markers[iE] = new google.maps.Marker({
            map: MapSel,
            position: Pos
          });

          google.maps.event.addListener(
            markers[iE],
            'click',
            function () {
              infos[iE].open(MapSel, markers[iE]);
              setTimeout
                (
                  function () {
                    infos[iE].close();
                    maps[iE].setCenter(Pos);
                  }, 4000
                );
            }
          );
        }
        /*
				Method that creates maps as div elements
				*/
      $scope.createNewMaps = function (json) {
        objJson = json;

        for (var iE = 0; iE < objJson.length; iE++) {
          mapsDivs[iE] = document.createElement('div');
          mapsDivs[iE].id = 'map_canvas_' + iE;
          mapsDivs[iE].style.cssText = 'width:265px;height:150px';
          document.getElementById('scroll').appendChild(mapsDivs[iE]);
        }
        init();
      };
      /*
			Method that initalizes each map
			*/
      function init() {

        if (objJson.length > 0) {
          for (var iE = 0; iE < objJson.length; iE++) {
            var elem = objJson[iE];
            var lat = elem.latitude;
            var lon = elem.longitude;
            // var time = elem.timestamp; // unuser
            var center = new google.maps.LatLng(lat, lon);

            var NewLeft = (270 * ((iE - 1) + 1));
            var NewTop = (150 * (iE) * -1);

            mapsDivs[iE].style.top = NewTop + 'px';
            mapsDivs[iE].style.left = NewLeft + 'px';

            var MapOptions = {
              zoom: 17,
              center: center,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            if (mapsDivs[iE]) {
              maps[iE] = new google.maps.Map(mapsDivs[iE], MapOptions);
            }
            createMarkerInfo(maps[iE], iE, center, elem);
          }
        } else {
          console.log('Error while loading');
        }
      }
    };

    $scope.loadLocations();
  });