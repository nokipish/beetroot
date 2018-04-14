$(document).ready(function () {

  // add active class to clicked nav item
  $(".header__nav a").click(function (event) {
    event.preventDefault();
    $(".header__nav a").removeClass('active');
    $(this).addClass('active');
  });


  // Slow scroll from nav item to current section
  $(".header__nav a, .section-home__btn-next").click(function (event) {
      event.preventDefault();
      let id = $(this).attr("href");
      let top = $(id).offset().top;
      let headerHeight = $('.header').height();
      let isHeaderSticky = $('.header').hasClass('header--sticky');
      let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight - 60;
      $("body, html").animate({ scrollTop }, 700 );
    }
  );


  // sticky header
  if ($('.header').length) {
    let renderHeader = function () {
      const HEADER = $('.header');
      let headerHeight = HEADER.height();
      let scrollTop = $(window).scrollTop();
      if (scrollTop > headerHeight) {
        HEADER.addClass("header--sticky");
      } else {
        HEADER.removeClass("header--sticky");
      }
    }
    renderHeader();
    $(window).scroll(function () {
      renderHeader();
    })
  }


  // button back to top
  if ($("#button__page-up").length) {
    let scrollTrigger = 300; // px
    let backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#button__page-up").addClass("is-visible");
      } else {
        $("#button__page-up").removeClass("is-visible");
      }
    };
    backToTop();
    $(window).scroll(function () { backToTop(); });
    $("#button__page-up").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
          }, 700
        );
      }
    );
  }


  // open modal
  $(".section-about__btn--show-modal").click(function() {
    $('#modal').addClass('modal--show');
    $('body').addClass('hidden');
  });


  // close modal
  $('.modal__btn--close, .modal__btn--cancel').click(function() {
    $('#modal').removeClass('modal--show');
    $('body').removeClass('hidden');
  });


  // close modal by clicking outside of modal content
  $(document).click(function (event) {
    if (!$(event.target).closest(".modal__wrapper, .section-about__btn--show-modal").length) {
      $("#modal").removeClass("modal--show");
      $('body').removeClass('hidden');
    }
  });


  // change navigation active class oncroll
  function onScroll(event) {
    let scrollPos = $(document).scrollTop();
    $('.header__nav a').each(function () {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.header__nav a').removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  $(document).on("scroll", onScroll);


  // show media header navigation
  $('.header__nav-btn').click(function() {
    $('.header__nav').toggleClass('header__nav--show');
    $(this).toggleClass('is-active');
  });


  // show sidebar
  $('.btn__show-sidebar').click(function() {
    $('.sidebar').addClass('sidebar--show');
  })

  // hide sidebar
  $('.btn__close-sidebar').click(function () {
    $('.sidebar').removeClass('sidebar--show');
  })

  // toggle accordion
  $('.accordion__btn-toggle').click(function() {
    let isActive = $(this).next().hasClass('accordion__content--show');
    $('.accordion__btn-toggle').removeClass('active');
    $('.accordion__content').removeClass('accordion__content--show');
    if (!isActive) {
      $(this).toggleClass('active');
      $(this).next().toggleClass('accordion__content--show');
    }
  })


  // slick-slider
  $('#slider').slick({
    // dots: true,
    // infinite: true,
    // speed: 300,
    // slidesToShow: 1,
    // adaptiveHeight: true,
    // fade: true,
    // centerMode: true,
    // nextArrow: '<button type="button" class="slick-next"> <i class= "fas fa-chevron-right" ></i> </button>',
    // prevArrow: '<button type="button" class="slick-prev"> <i class= "fas fa-chevron-left" ></i> </button>',
    // autoplay: true,
    // autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      nextArrow: '<button type="button" class="slick-next"> <i class= "fa fa-chevron-right" ></i> </button>',
      prevArrow: '<button type="button" class="slick-prev"> <i class= "fa fa-chevron-left" ></i> </button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });


  // tabs
  $('[data-tab-nav]').on('click', function () {
    let that = $(this);
    let tabs = $('.about__tab-content > div');
    $('.about__tab-menu li').removeClass('active');
    $(that).addClass('active');
    $(tabs).removeClass('active');
    $('[' + $(that).attr("data-tab-nav") + ']').addClass('active');
  });



});





$('#slider--team').slick({
  // dots: true,
  // infinite: true,
  // speed: 300,
  // slidesToShow: 1,
  // adaptiveHeight: true,
  // fade: true,
  // centerMode: true,
  // nextArrow: '<button type="button" class="slick-next"> <i class= "fas fa-chevron-right" ></i> </button>',
  // prevArrow: '<button type="button" class="slick-prev"> <i class= "fas fa-chevron-left" ></i> </button>',
  // autoplay: true,
  // autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    nextArrow: '<button type="button" class="slick-next"> <i class= "fa fa-chevron-right" ></i> </button>',
    prevArrow: '<button type="button" class="slick-prev"> <i class= "fa fa-chevron-left" ></i> </button>',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});


