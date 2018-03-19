initMap = () => {
  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;
  let beetroot = { lat: 47.815922, lng: 35.170716 };
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: beetroot,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  directionsDisplay.setMap(map);
  let content = '<div><p>Title</p><p>Description Description Description</p></div>';
  let infowindow = new google.maps.InfoWindow({
    content: content
  });
  let marker = new google.maps.Marker({
    position: beetroot,
    map: map,
    title: 'fbilwekhfweilhkfp weiuf eiwl',
    icon: './marker.png'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

  let geocoder = new google.maps.Geocoder();

  // document.getElementById('submit').addEventListener('click', function () {
  //   geocodeAddress(geocoder, map);
  // });

  document.getElementById('submit').addEventListener('click', function () {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

}

geocodeAddress = (geocoder, resultsMap) => {
  var start = document.getElementById('cityStart').value;
  geocoder.geocode({ 'address': start }, function (results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

calculateAndDisplayRoute = (directionsService, directionsDisplay) => {
  directionsService.route({
    origin: document.getElementById('cityStart').value,
    destination: document.getElementById('cityEnd').value,
    optimizeWaypoints: true,
    travelMode: 'DRIVING'
  }, function (response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}