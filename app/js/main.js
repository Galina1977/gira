$(function () {
   $('body').append('<div class="upbtn"></div>');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('.upbtn').css({
            bottom: '15px'
         });
      } else {
         $('.upbtn').css({
            bottom: '-80px'
         });
      }
   });
   $('.upbtn').on('click', function () {
      $('html, body').animate({
         scrollTop: 0
      }, 500);
      return false;
   });


   $(".header__burger").click(function (event) {
      $(".header__burger, .header__menu ").toggleClass("active");
      $("body").toggleClass("lock");
   });


   $(".header__menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
   });

   $(".footer__menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 2500);
   });


   $(".service-slider__slider").slick({
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
   });

   // Большой слайд
   $('.product-slide-big__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
      asNavFor: '.product-slide-thumb__slider',
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               dots: true,
               arrows: false,
               draggable: true,
               fade: false,
               autoplay: true,
               autoplaySpead: 2000,
            }
         },
         {
            breakpoint: 768,
            settings: {
               dots: true,
               arrows: false,
               draggable: true,
               fade: false,
               autoplay: true,
               autoplaySpead: 2000,
            },
         },
         {
            breakpoint: 576,
            settings: {
               dots: true,
               arrows: false,
               draggable: true,
               fade: false,
               autoplay: true,
               autoplaySpead: 2000,
            },
         },
      ]
   });

   // Маленький слайд
   $('.product-slide-thumb__slider').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 5,
      asNavFor: '.product-slide-big__slider',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      prevArrow:
         '<button class="slick-prev"><img src="images/icons/arrow_bottom.png"></button>',
      nextArrow:
         '<button class="slick-next"><img src="images/icons/arrow_up.png"></button>',
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               dots: false,
               arrows: false,
            }
         },
      ]
   });
   // 

   $(".footer__title-drop").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("footer__title-drop--active");
   });



});
