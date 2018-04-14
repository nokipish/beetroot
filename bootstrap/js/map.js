function initMap() {
 const coordinates = { lat: 47.815922, lng: 35.170716 };
 const map = new google.maps.Map(document.getElementById('map'), {
   zoom: 15,
   center: coordinates,
   zoomControl: true,
   //disableDefaultUI: true,
   mapTypeControl: false,
   scaleControl: false,
   streetViewControl: false,
   rotateControl: false,
   fullscreenControl: false,
 });
 const mapMarker = './img/map.png';
 const marker = new google.maps.Marker({
   position: coordinates,
   map,
   icon: mapMarker,
 });
 const infowindow = new google.maps.InfoWindow({
   content: '<p>Hello world!</p>'
 });

 infowindow.open(map, marker);
 marker.addListener('click', function () {
   infowindow.open(map, marker);
 });
}