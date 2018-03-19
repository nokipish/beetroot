$(".header__menu-item, .header__item").on("click", function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
    top = $(id).offset().top;

  $('body,html').animate({ scrollTop: top }, 1200);
});

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
 
  infowindow.open(map, marker);
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}

jQuery(document).ready(function($) {
  $('.elements-gride').masonry({
      // options
      itemSelector: '.element-item',
      columnWidth: 280
  });
});

$('#team__slaider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
});

$('#testimonials__slide-wrap').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
});

$(function() {
  $('.portfolio__item li').click(function() {
      $('.portfolio__item li').removeClass('active');
      $(this).addClass('active');
  });

  $('.portfolio__album').filterizr();
});