$(document).ready(function () {
  $(".menu__icon").click(function () {
    $(".menu__icon").toggleClass("menuX__icon");
    $(".nav__links").toggleClass("menu__toggle");
  });
});

function linkClicked() {
  console.log("hello");
  $(".menu__icon").removeClass("menuX__icon");
  $(".nav__links").removeClass("menu__toggle");
}

const nav = document.querySelector("[data-navbar]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 99) {
    nav.classList.add("active__nav");
  } else {
    nav.classList.remove("active__nav");
  }
});
