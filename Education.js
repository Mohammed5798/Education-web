let meunbtu = document.querySelector("#meun-btu");
let navbar = document.querySelector(".navbar");

meunbtu.onclick = () =>{

    meunbtu.classList.toggle("fa-times");
    navbar.classList.toggle("active")
};

var swiper = new Swiper(".courses-slider", {

    spaceBetween: 30,
    grabCursor:true,
    loop:true,
    clickable:true,
    cssMode: true,
    mousewheel: true,

    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});


var swiper = new Swiper(".teachers-slider", {

  spaceBetween: 30,
  grabCursor:true,
  loop:true,
  clickable:true,
  cssMode: true,
  mousewheel: true,

  pagination:{
      el: ".swiper-pagination",
      clickable:true,
  },
  
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {

  spaceBetween: 30,
  grabCursor:true,
  loop:true,
  clickable:true,
  cssMode: true,
  mousewheel: true,

  pagination:{
      el: ".swiper-pagination",
      clickable:true,
  },
  
  breakpoints: {
      540: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});