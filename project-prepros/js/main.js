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
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      nextArrow: '<button type="button" class="slick-next"> <i class= "fas fa-chevron-right" ></i> </button>',
      prevArrow: '<button type="button" class="slick-prev"> <i class= "fas fa-chevron-left" ></i> </button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
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
(function() {
  // Carousel variables
  var carouselContent, carouselIndex, carouselLength, firstClone, firstItem, isAnimating, itemWidth, lastClone, lastItem;

  carouselContent = $(".carousel__content");

  carouselIndex = 0;

  carouselLength = carouselContent.children().length;

  isAnimating = false;

  itemWidth = 100 / carouselLength;

  firstItem = $(carouselContent.children()[0]);

  lastItem = $(carouselContent.children()[carouselLength - 1]);

  firstClone = null;

  lastClone = null;

  // Apply the 3D transformations to avoid a white blink when you slide for the first time
  carouselContent.css("width", carouselLength * 100 + "%");

  carouselContent.transition({
    x: `${carouselIndex * -itemWidth}%`
  }, 0);

  $.each(carouselContent.children(), function() {
    return $(this).css("width", itemWidth + "%");
  });

  
  // Click on the "Previous" button
  $(".nav--left").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    carouselIndex--;
    if (carouselIndex === -1) {
      lastItem.prependTo(carouselContent);
      carouselContent.transition({
        x: `${(carouselIndex + 2) * -itemWidth}%`
      }, 0);
      return carouselContent.transition({
        x: `${(carouselIndex + 1) * -itemWidth}%`
      }, 1000, "easeInOutExpo", function() {
        carouselIndex = carouselLength - 1;
        lastItem.appendTo(carouselContent);
        carouselContent.transition({
          x: `${carouselIndex * -itemWidth}%`
        }, 0);
        return isAnimating = false;
      });
    } else {
      return carouselContent.transition({
        x: `${carouselIndex * -itemWidth}%`
      }, 1000, "easeInOutExpo", function() {
        return isAnimating = false;
      });
    }
  });

  // Click on the "Next" button
  $(".nav--right").on("click", function() {
    if (isAnimating) {
      return;
    }
    isAnimating = true;
    carouselIndex++;
    return carouselContent.transition({
      x: `${carouselIndex * -itemWidth}%`
    }, 1000, "easeInOutExpo", function() {
      isAnimating = false;
      if (firstClone) {
        carouselIndex = 0;
        carouselContent.transition({
          x: `${carouselIndex * -itemWidth}%`
        }, 0);
        firstClone.remove();
        firstClone = null;
        carouselLength = carouselContent.children().length;
        itemWidth = 100 / carouselLength;
        carouselContent.css("width", carouselLength * 100 + "%");
        $.each(carouselContent.children(), function() {
          return $(this).css("width", itemWidth + "%");
        });
        return;
      }
      if (carouselIndex === carouselLength - 1) {
        carouselLength++;
        itemWidth = 100 / carouselLength;
        firstClone = firstItem.clone();
        firstClone.addClass("clone");
        firstClone.appendTo(carouselContent);
        carouselContent.css("width", carouselLength * 100 + "%");
        $.each(carouselContent.children(), function() {
          return $(this).css("width", itemWidth + "%");
        });
        return carouselContent.transition({
          x: `${carouselIndex * -itemWidth}%`
        }, 0);
      }
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUEsZUFBQSxFQUFBLGFBQUEsRUFBQSxjQUFBLEVBQUEsVUFBQSxFQUFBLFNBQUEsRUFBQSxXQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTs7RUFDQSxlQUFBLEdBQWtCLENBQUEsQ0FBRSxvQkFBRjs7RUFDbEIsYUFBQSxHQUFnQjs7RUFDaEIsY0FBQSxHQUFpQixlQUFlLENBQUMsUUFBaEIsQ0FBQSxDQUEwQixDQUFDOztFQUU1QyxXQUFBLEdBQWM7O0VBQ2QsU0FBQSxHQUFZLEdBQUEsR0FBTTs7RUFDbEIsU0FBQSxHQUFZLENBQUEsQ0FBRSxlQUFlLENBQUMsUUFBaEIsQ0FBQSxDQUEyQixDQUFBLENBQUEsQ0FBN0I7O0VBQ1osUUFBQSxHQUFXLENBQUEsQ0FBRSxlQUFlLENBQUMsUUFBaEIsQ0FBQSxDQUEyQixDQUFBLGNBQUEsR0FBaUIsQ0FBakIsQ0FBN0I7O0VBQ1gsVUFBQSxHQUFhOztFQUNiLFNBQUEsR0FBWSxLQVZaOzs7RUFhQSxlQUFlLENBQUMsR0FBaEIsQ0FBb0IsT0FBcEIsRUFBNkIsY0FBQSxHQUFpQixHQUFqQixHQUF1QixHQUFwRDs7RUFDQSxlQUFlLENBQUMsVUFBaEIsQ0FBMkI7SUFBRSxDQUFBLEVBQUUsQ0FBQSxDQUFBLENBQUcsYUFBQSxHQUFnQixDQUFDLFNBQXBCLENBQThCLENBQTlCO0VBQUosQ0FBM0IsRUFBbUUsQ0FBbkU7O0VBRUEsQ0FBQyxDQUFDLElBQUYsQ0FBTyxlQUFlLENBQUMsUUFBaEIsQ0FBQSxDQUFQLEVBQW1DLFFBQUEsQ0FBQSxDQUFBO1dBQUcsQ0FBQSxDQUFFLElBQUYsQ0FBSSxDQUFDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLFNBQUEsR0FBWSxHQUE5QjtFQUFILENBQW5DLEVBaEJBOzs7O0VBbUJBLENBQUEsQ0FBRSxZQUFGLENBQWUsQ0FBQyxFQUFo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LENBQUMsUUFBWCxDQUFvQixlQUFwQjtRQUVBLGVBQWUsQ0FBQyxHQUFoQixDQUFvQixPQUFwQixFQUE2QixjQUFBLEdBQWlCLEdBQWpCLEdBQXVCLEdBQXBEO1FBQ0EsQ0FBQyxDQUFDLElBQUYsQ0FBTyxlQUFlLENBQUMsUUFBaEIsQ0FBQSxDQUFQLEVBQW1DLFFBQUEsQ0FBQSxDQUFBO2lCQUFHLENBQUEsQ0FBRSxJQUFGLENBQUksQ0FBQyxHQUFMLENBQVMsT0FBVCxFQUFrQixTQUFBLEdBQVksR0FBOUI7UUFBSCxDQUFuQztlQUNBLGVBQWUsQ0FBQyxVQUFoQixDQUEyQjtVQUFFLENBQUEsRUFBRSxDQUFBLENBQUEsQ0FBSSxhQUFELEdBQWtCLENBQUMsU0FBdEIsQ0FBZ0MsQ0FBaEM7UUFBSixDQUEzQixFQUFxRSxDQUFyRSxFQVZGOztJQWR3RixDQUExRjtFQU4yQixDQUE3QjtBQXBDQSIsInNvdXJjZXNDb250ZW50IjpbIiMgQ2Fyb3VzZWwgdmFyaWFibGVzXG5jYXJvdXNlbENvbnRlbnQgPSAkKFwiLmNhcm91c2VsX19jb250ZW50XCIpXG5jYXJvdXNlbEluZGV4ID0gMFxuY2Fyb3VzZWxMZW5ndGggPSBjYXJvdXNlbENvbnRlbnQuY2hpbGRyZW4oKS5sZW5ndGhcblxuaXNBbmltYXRpbmcgPSBmYWxzZVxuaXRlbVdpZHRoID0gMTAwIC8gY2Fyb3VzZWxMZW5ndGhcbmZpcnN0SXRlbSA9ICQoY2Fyb3VzZWxDb250ZW50LmNoaWxkcmVuKClbMF0pXG5sYXN0SXRlbSA9ICQoY2Fyb3VzZWxDb250ZW50LmNoaWxkcmVuKClbY2Fyb3VzZWxMZW5ndGggLSAxXSlcbmZpcnN0Q2xvbmUgPSBudWxsXG5sYXN0Q2xvbmUgPSBudWxsXG5cbiMgQXBwbHkgdGhlIDNEIHRyYW5zZm9ybWF0aW9ucyB0byBhdm9pZCBhIHdoaXRlIGJsaW5rIHdoZW4geW91IHNsaWRlIGZvciB0aGUgZmlyc3QgdGltZVxuY2Fyb3VzZWxDb250ZW50LmNzcyBcIndpZHRoXCIsIGNhcm91c2VsTGVuZ3RoICogMTAwICsgXCIlXCJcbmNhcm91c2VsQ29udGVudC50cmFuc2l0aW9uIHsgeDpcIiN7Y2Fyb3VzZWxJbmRleCAqIC1pdGVtV2lkdGh9JVwiIH0sIDBcblxuJC5lYWNoIGNhcm91c2VsQ29udGVudC5jaGlsZHJlbigpLCAtPiAkKEApLmNzcyBcIndpZHRoXCIsIGl0ZW1XaWR0aCArIFwiJVwiXG4gIFxuIyBDbGljayBvbiB0aGUgXCJQcmV2aW91c1wiIGJ1dHRvblxuJChcIi5uYXYtLWxlZnRcIikub24gXCJjbGlja1wiLCAtPlxuICByZXR1cm4gaWYgaXNBbmltYXRpbmdcbiAgaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgXG4gIGNhcm91c2VsSW5kZXgtLVxuICBpZiBjYXJvdXNlbEluZGV4ID09IC0xXG4gICAgbGFzdEl0ZW0ucHJlcGVuZFRvIGNhcm91c2VsQ29udGVudFxuICAgIGNhcm91c2VsQ29udGVudC50cmFuc2l0aW9uIHsgeDpcIiN7KGNhcm91c2VsSW5kZXggKyAyKSAqIC1pdGVtV2lkdGh9JVwiIH0sIDBcbiAgICBjYXJvdXNlbENvbnRlbnQudHJhbnNpdGlvbiB7IHg6XCIjeyhjYXJvdXNlbEluZGV4ICsgMSkgKiAtaXRlbVdpZHRofSVcIiB9LCAxMDAwLCBcImVhc2VJbk91dEV4cG9cIiwgLT5cbiAgICAgIGNhcm91c2VsSW5kZXggPSBjYXJvdXNlbExlbmd0aCAtIDFcbiAgICAgIGxhc3RJdGVtLmFwcGVuZFRvIGNhcm91c2VsQ29udGVudFxuICAgICAgY2Fyb3VzZWxDb250ZW50LnRyYW5zaXRpb24geyB4OlwiI3soY2Fyb3VzZWxJbmRleCkgKiAtaXRlbVdpZHRofSVcIiB9LCAwXG4gICAgICBpc0FuaW1hdGluZyA9IGZhbHNlXG4gIGVsc2VcbiAgICBjYXJvdXNlbENvbnRlbnQudHJhbnNpdGlvbiB7IHg6XCIje2Nhcm91c2VsSW5kZXggKiAtaXRlbVdpZHRofSVcIiB9LCAxMDAwLCBcImVhc2VJbk91dEV4cG9cIiwgLT4gaXNBbmltYXRpbmcgPSBmYWxzZVxuXG4jIENsaWNrIG9uIHRoZSBcIk5leHRcIiBidXR0b25cbiQoXCIubmF2LS1yaWdodFwiKS5vbiBcImNsaWNrXCIsIC0+XG4gIHJldHVybiBpZiBpc0FuaW1hdGluZ1xuICBpc0FuaW1hdGluZyA9IHRydWVcbiAgICBcbiAgY2Fyb3VzZWxJbmRleCsrXG4gICAgXG4gIGNhcm91c2VsQ29udGVudC50cmFuc2l0aW9uIHsgeDpcIiN7Y2Fyb3VzZWxJbmRleCAqIC1pdGVtV2lkdGh9JVwiIH0sIDEwMDAsIFwiZWFzZUluT3V0RXhwb1wiLCAtPlxuICAgIGlzQW5pbWF0aW5nID0gZmFsc2VcbiAgICBpZiBmaXJzdENsb25lXG4gICAgICBjYXJvdXNlbEluZGV4ID0gMFxuICAgICAgY2Fyb3VzZWxDb250ZW50LnRyYW5zaXRpb24geyB4OlwiI3soY2Fyb3VzZWxJbmRleCkgKiAtaXRlbVdpZHRofSVcIiB9LCAwXG4gICAgICBmaXJzdENsb25lLnJlbW92ZSgpXG4gICAgICBmaXJzdENsb25lID0gbnVsbFxuICAgICAgXG4gICAgICBjYXJvdXNlbExlbmd0aCA9IGNhcm91c2VsQ29udGVudC5jaGlsZHJlbigpLmxlbmd0aFxuICAgICAgaXRlbVdpZHRoID0gMTAwIC8gY2Fyb3VzZWxMZW5ndGhcbiAgICAgIGNhcm91c2VsQ29udGVudC5jc3MgXCJ3aWR0aFwiLCBjYXJvdXNlbExlbmd0aCAqIDEwMCArIFwiJVwiXG4gICAgICAkLmVhY2ggY2Fyb3VzZWxDb250ZW50LmNoaWxkcmVuKCksIC0+ICQoQCkuY3NzIFwid2lkdGhcIiwgaXRlbVdpZHRoICsgXCIlXCJcbiAgICAgIHJldHVyblxuICAgICAgICBcbiAgICBpZiBjYXJvdXNlbEluZGV4ID09IGNhcm91c2VsTGVuZ3RoIC0gMVxuICAgICAgY2Fyb3VzZWxMZW5ndGgrK1xuICAgICAgaXRlbVdpZHRoID0gMTAwIC8gY2Fyb3VzZWxMZW5ndGhcbiAgICAgIFxuICAgICAgZmlyc3RDbG9uZSA9IGZpcnN0SXRlbS5jbG9uZSgpXG4gICAgICBmaXJzdENsb25lLmFkZENsYXNzIFwiY2xvbmVcIlxuICAgICAgZmlyc3RDbG9uZS5hcHBlbmRUbyBjYXJvdXNlbENvbnRlbnRcbiAgICAgICBcbiAgICAgIGNhcm91c2VsQ29udGVudC5jc3MgXCJ3aWR0aFwiLCBjYXJvdXNlbExlbmd0aCAqIDEwMCArIFwiJVwiXG4gICAgICAkLmVhY2ggY2Fyb3VzZWxDb250ZW50LmNoaWxkcmVuKCksIC0+ICQoQCkuY3NzIFwid2lkdGhcIiwgaXRlbVdpZHRoICsgXCIlXCJcbiAgICAgIGNhcm91c2VsQ29udGVudC50cmFuc2l0aW9uIHsgeDpcIiN7KGNhcm91c2VsSW5kZXgpICogLWl0ZW1XaWR0aH0lXCIgfSwgMCJdfQ==
//# sourceURL=coffeescript