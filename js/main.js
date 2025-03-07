(function ($) {
  "use strict";

  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-header").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-header").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });

  $(document).ready(function () {

    // Initialize Swiper for Hero Slider
    var heroSwiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      effect: "fade", // Optional: For fade effect
      fadeEffect: {
        crossFade: true
      }
    });


    // Mobile Menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    }

    // Initialize Swiper for Testimonials
    var swiper = new Swiper('.testimonial_slider', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });

    // Isotope Filtering
    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: 1,
      },
    });

    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // Wow.js Animation
    new WOW().init();

    // CounterUp
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    // Magnific Popup for Images & Videos
    $('.popup-image').magnificPopup({ type: 'image', gallery: { enabled: true } });
    $('.img-pop-up').magnificPopup({ type: 'image', gallery: { enabled: true } });
    $('.popup-video').magnificPopup({ type: 'iframe' });

    // ScrollUp (Back to Top)
    $.scrollUp({
      scrollName: 'scrollUp',
      topDistance: '4500',
      topSpeed: 300,
      animation: 'fade',
      animationInSpeed: 200,
      animationOutSpeed: 200,
      scrollText: '<i class="fa fa-angle-double-up"></i>',
      activeOverlay: false,
    });

    // Search Toggle
    $("#search_input_box").hide();
    $("#search, #search_1").on("click", function () {
      $("#search_input_box").slideToggle();
      $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
      $('#search_input_box').slideUp(500);
    });

  });

})(jQuery);
