'use strict';

angular.module('navigatorGlassProjectApp')
  // .controller('AuthCtrl', function (HttpService, $scope) {
  // 
  .controller('AuthCtrl', function () {
    var clientId = '126018090035.apps.googleusercontent.com';
    var apiKey = 'AIzaSyAzVOX38TBgREYPddfnxCJFPfZhN9uYODw';
    var scopes = 'https://www.googleapis.com/auth/glass.timeline';
    var gapi = gapi || {};

    window.handleClientLoad = function () {
      gapi.client.setApiKey(apiKey);
      window.setTimeout(checkAuth, 1);
    };

    function checkAuth() {
      gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: true
      }, handleAuthResult);
    }

    function handleAuthResult(authResult) {
      var authorizeButton = document.getElementById('authorize-button');
      if (authResult && !authResult.error) {
        authorizeButton.style.visibility = 'hidden';
        console.log(authResult);
        var xhr = new XMLHttpRequest();
        var oauthToken = gapi.auth.getToken();
        xhr.open('GET',
          'http://navigatorglassweb.cloudapp.net:80/api/TimeLine');
        xhr.setRequestHeader('Authorization',
          'Bearer ' + oauthToken.access_token);
        xhr.send();
      } else {
        authorizeButton.style.visibility = '';
        authorizeButton.onclick = handleAuthClick;
      }
    }

    // function handleAuthClick(event) {
    function handleAuthClick() {
      gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
      }, handleAuthResult);
      return false;
    }
  });