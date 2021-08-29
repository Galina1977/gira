$(function () {
   $(document).ready(function () {
      $(window).scroll(function () {
         if ($(this).scrollTop() > 0) {
            $("#scroller").fadeIn();
         } else {
            $("#scroller").fadeOut();
         }
      });
      $("#scroller").click(function () {
         $("body,html").animate(
            {
               scrollTop: 0,
            },
            800
         );
         return false;
      });
   });


   $(".header__menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
      //1500  время скролла..чем больше тем медленней
   });



   $(".footer__menu").on("click", "a", function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 2500);
   });



   $(".header__burger").click(function (event) {
      $(".header__burger, .header__menu ").toggleClass("active");
      $("body").toggleClass("lock");
   });

   new Swiper(".service-slider", {
      direction: "vertical",
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },

      effect: 'fade',
      fadeEffect: {
         crossFade: true
      },

      autoplay: {
         delay: 2000,
         stopOnLastSlide: true,
         disableOnInteraction: false,
      },
      speed: 800,

      keyboard: {
         enabled: true,
         onlyInViewport: true,
         pageUpDown: true,
      },
   });

   new Swiper(".gallery-slider", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      thumbs: {
         swiper: {
            el: ".gallery-mini-slider",
            slidesPerView: 5,
         },
      },
      slidesPerView: 1,
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      slideToClickedSlide: true,

      keyboard: {
         enabled: true,
         onlyInViewport: true,
         pageUpDown: true,
      },

      mousewheel: {
         sensitivity: 1,
      },
   });

   $(".footer__title-drop").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("footer__title-drop--active");
   });

});
