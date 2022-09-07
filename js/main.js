$(function () {
  $(".video__box-btn").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  let acc = document.getElementsByClassName("accordion-item-btn");
  let i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      console.log(panel.style.height);
      if (panel.style.height === "0px" || panel.style.height === "") {
        panel.style.height = "auto";
      } else {
        panel.style.height = "0px";
      }
    });
  }
  const menu = document.querySelector(".menu__list");
  const burger = document.querySelector(".menu__btn");
  burger.onclick = () => {
    menu.classList.toggle("active");
    burger.classList.toggle("active");
  };

  $(".tab__form-btn-1").on("click", function () {
    document.getElementById(
      "price__box-1"
    ).style.border = `2.5px solid #3FDBB1`;
    document.getElementById("price__box-2").style.border = `1px solid #f3f4f5`;
    document.getElementById("old__tab-title-1").style.display = `none`;
    document.getElementById("tab__title-1").style.display = `block`;
    document.getElementById("old__tab-subtitle-1").style.display = `none`;
    document.getElementById("tab__subtitle-1").style.display = `block`;
    document.getElementById("old__tab-title-2").style.display = `flex`;
    document.getElementById("tab__title-2").style.display = `none`;
    document.getElementById("old__tab-subtitle-2").style.display = `flex`;
    document.getElementById("tab__subtitle-2").style.display = `none`;
  });
  $(".tab__form-btn-2").on("click", function () {
    document.getElementById(
      "price__box-2"
    ).style.border = `2.5px solid #3FDBB1`;
    document.getElementById("price__box-1").style.border = `1px solid #f3f4f5`;
    document.getElementById("old__tab-title-2").style.display = `none`;
    document.getElementById("tab__title-2").style.display = `flex`;
    document.getElementById("old__tab-subtitle-2").style.display = `none`;
    document.getElementById("tab__subtitle-2").style.display = `flex`;
    document.getElementById("old__tab-title-1").style.display = `block`;
    document.getElementById("tab__title-1").style.display = `none`;
    document.getElementById("old__tab-subtitle-1").style.display = `block`;
    document.getElementById("tab__subtitle-1").style.display = `none`;
  });
});
