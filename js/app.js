/* #Hamburger
  ======================================================= */
const body = document.querySelector('body');
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-hamburger button');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.toggle('show');
  body.classList.toggle('no-scroll');
  headerBtn.classList.toggle('is-active');
});

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

/* #Hall Of Fame Slider
  ======================================================= */
if (document.querySelector('.hall-of-fame .swiper')) {
  const hallOfFameSliders = document.querySelectorAll('.hall-of-fame .swiper');

  hallOfFameSliders.forEach((slider) => {
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');
    
    new Swiper(slider, {
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 5,
        }
      }
    });
  });

}


/* #Popup 18 Plus
  ======================================================= */
if (document.querySelector('.popup-18-plus')) {
  const popupClose = document.querySelector('.popup-18-plus .popup-close');

  popupClose.addEventListener('click', (e) => {
    popupClose.closest('.popup-18-plus').classList.remove('show');
  });
}