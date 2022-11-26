$(document).ready(function () {

    $(".menu__icon").click(function () {

        $(".menu__icon").toggleClass("menuX__icon");
        $(".nav__links").toggleClass("menu__toggle");

    });






    const nav = document.querySelector("[data-navbar]");

    window.addEventListener("scroll", function () {
        if (window.scrollY >= 100) {
            nav.classList.add("active__nav");
        } else {
            nav.classList.remove("active__nav");
        }
    });









});