$(document).ready(function() {
  $('.header__menu').on('click', '.header__menu-item', e => {
    e.preventDefault();
    const target = e.target;
    const idElm = $(target).attr('href');
    const topElm = idElm !== '#' ? $(idElm).offset().top : 0;

    $('body,html').animate({ scrollTop: topElm }, 1200);
  });

  $(".header__menu-link, .header__icon").on("click", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({ scrollTop: top }, 1200);
  });
});

/**
 * Filtering with isotope
 */
(function() {
  const portfolioItem = document.querySelector('.portfolio__item');
  
  const clearClass = (elm, selector) => {
    const activeElm = elm.parentElement.querySelector(`.${selector}`);
    activeElm.classList.remove(selector);
  };
  const addClass = (elm, selector) => {
    elm.classList.add(selector);
  };

  const iso = new Isotope( '.portfolio__gallery', {
    // options
    itemSelector: '.portfolio__gallery-block',
    layoutMode: 'fitRows',
    category: '[data-category]'
  });

  // delegation
  portfolioItem.onclick = e => {
    const target = e.target;

    if (!target.classList.contains('portfolio__item-nav')) return;

    const filterValue = target.dataset.filter;

    clearClass(target, 'active');
    addClass(target, 'active');

    iso.arrange({ filter: filterValue });
  };

}());