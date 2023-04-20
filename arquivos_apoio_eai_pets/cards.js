var swiper = new Swiper(".slide-content", {
    slidesPerView: 6,
    spaceBetween: 4,
    slidesPerGroup: 6,
    loop: true,
    // loopFillGroupWithBlank: true,
    centerSlide:'true',
    fade:'true',
    gragCursos:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // breakpoints:{
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     520: {
    //         slidesPerView: 2,
    //     },
    //     950: {
    //         slidesPerView: 3,
    //     },
    // },
  });