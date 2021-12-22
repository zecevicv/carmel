/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  if (window.innerWidth > 1023) {
    new Swiper('.banner .swiper', {
      loop: true,
      pagination: {
        el: ".banner  .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: '.banner .next',
        prevEl: '.banner .prev',
      },
    });
  } else {
    new Swiper('.banner .swiper', {
      loop: true,
      pagination: {
        el: '.banner .swiper-pagination',
      },
      navigation: {
        nextEl: '.banner .next',
        prevEl: '.banner .prev',
      },
    });
  }
}

/* #News Slider
  ======================================================= */
if (document.querySelector('.news-slider .swiper')) {
  new Swiper(".news-slider .swiper", {
    pagination: {
      el: ".news-slider .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".news-slider .next",
      prevEl: ".news-slider .prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.25
      },
      1024: {
        slidesPerView: 2.2
      }
    }
  });
}

/* #Culture Gallery
  ======================================================= */
if (document.querySelector('.culture-gallery .swiper')) {
  new Swiper(".culture-gallery .swiper", {
    pagination: {
      el: ".culture-gallery .swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".culture-gallery .next",
      prevEl: ".culture-gallery .prev",
    },
    freeMode: true,
    breakpoints: {
      0: {
        slidesPerView: 'auto',
      },
      1024: {
        slidesPerView: 'auto'
      }
    }
  });
}