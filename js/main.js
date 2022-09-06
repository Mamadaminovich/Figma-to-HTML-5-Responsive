$(function () {
  $(".video__box-btn").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  let acc = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  const menu = document.querySelector(".menu__list");
  const burger = document.querySelector(".menu__btn");
  burger.onclick = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  };
  // $(".testimon__slider").slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   infinity: true,
  //   prevArrow:
  //     '<button class="prev__btn slider__btn"><img src="images/prev__btn.svg"></button>',
  //   nextArrow:
  //     '<button class="next__btn slider__btn"><img src="images/next__btn.svg"></button>',
  //   responsive: [
  //     {
  //       breakpoint: 1315,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 780,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // });
  // $(".blog__inner").slick({
  //   centerMode: true,
  //   centerPadding: "0px",
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   infinity: true,
  //   prevArrow:
  //     '<button class="prev__btn-2 slider__btn"><img src="images/prev__btn.svg"></button>',
  //   nextArrow:
  //     '<button class="next__btn-2 slider__btn"><img src="images/next__btn.svg"></button>',
  //   responsive: [
  //     {
  //       breakpoint: 800,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         centerPadding: "0px",
  //       },
  //     },
  //     {
  //       breakpoint: 540,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         centerMode: false,
  //         centerPadding: "0px",
  //       },
  //     },
  //   ],
  // });
});
