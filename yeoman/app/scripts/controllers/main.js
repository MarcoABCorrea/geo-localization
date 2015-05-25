'use strict';

angular.module('geoLocationApp')
.controller('MainCtrl', function ($scope, $http) {

	////////////////////////	Init map functions

	var myLocationIndex = undefined;

    var mapOptions = {
        zoom: 3,
        // center: new google.maps.LatLng(40.0000, -98.0000),
        center: new google.maps.LatLng(0.0629563,-20.4218893),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lon),
            title: info.org + ' - ' + info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.city + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
	//////////////////////// end map functions

   $scope.updateLocationDetails = function(data, isMyLocation){
    $scope.data = data;   

    if(isMyLocation && !angular.isUndefined(myLocationIndex)){
    	$scope.markers.splice(myLocationIndex, 1);	
    }

	createMarker(data);

	if(isMyLocation){
		myLocationIndex = $scope.markers.length -1;
	}



    var now = new Date();

    $("table").removeClass("empty");
    $(".help").click(function(e){
      var fieldName = $(e.currentTarget).closest('tr').find('.field_name').text();
      alert("This is your " + fieldName + " from ISP " + data.isp + " at " + now);
    });
  }

 $scope.getLocation = function(url, isMyLocation) {
    $http.get(url).
      success(function(data, status, headers, config) {
        $scope.updateLocationDetails(data, isMyLocation);
      });
  }

  $scope.getMyLocation = function() {
    $scope.getLocation('http://ip-api.com/json/', true);
  }

  $scope.getSiteLocation = function() {
    var domain = $scope.site.replace('http://','').replace('https://','').split(/[/?#]/)[0];
 	$scope.getLocation('http://ip-api.com/json/'+domain, false);
  }

  $scope.resetLocationDetails = function() {
    if(!angular.isUndefined(myLocationIndex)){
    	$scope.markers[myLocationIndex].setMap(null);
    	$scope.markers.splice(myLocationIndex, 1);	
	    myLocationIndex = undefined;
    }	
    $scope.data = {query: "0.0.0.0"};
    $("table").addClass("empty");
  }

  $scope.initializePage = function(){
    $scope.data = {query: "0.0.0.0"};
  }

});
