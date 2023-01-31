//   Swiper businessmen 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 3000,
    // },

    breakpoints: {
        // when window width is >= 320px
        1150: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        // when window width is >= 640px
         // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
      }
});

/*
$(window).resize(function (event) {
    adaptive_function();
});

function adaptive_header(w, h) {
    if (w<1151) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 10,
            // slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if (w<768) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 10,
            // slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if (w<680) {
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: false,
            loopFillGroupWithBlank: false,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
    else{
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            spaceBetween: 20,
            // slidesPerGroup: 4,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w, h);
}
adaptive_function();

*/

$(document).ready(function(){
    $('.slider').slick({
        speed: 700,
        infinite: false,
        touchThreshold: 10
    });
});

$(document).ready(function(){
    $('.slideri').slick({
        speed: 700,
        infinite: false,
        touchThreshold: 10
    });
});