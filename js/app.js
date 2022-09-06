var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
     slidesPerView: 1,
    loop: true,

     autoplay: {
        delay: 5000,
        disableOnInteraction: false
     },
     allowTouchMove: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
  });

  console.log(mySwiper);