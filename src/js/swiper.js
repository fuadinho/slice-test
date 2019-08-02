import Swiper from 'swiper/dist/js/swiper.js';


  document.addEventListener ("DOMContentLoaded", function(){
    var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      speed: 800,
      grabCursor: true,
      spaceBetween: 50,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
      });
  })