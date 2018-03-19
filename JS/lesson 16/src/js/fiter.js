$(function() {
  $('.portfolio__item li').click(function() {
      $('.portfolio__item li').removeClass('active');
      $(this).addClass('active');
  });

  $('.portfolio__album').filterizr();
});