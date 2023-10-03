const swiper = new Swiper(".last-news .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 200,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".slider-buttons .right",
        prevEl: ".slider-buttons .left",
    },
});

const swiperr = new Swiper(".tests-section .swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 200,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".slider-buttons .right",
        prevEl: ".slider-buttons .left",
    },
});

$(".mobile-menu-icon").on("click", function () {
    $(this).toggleClass("show");
    $(".mobile-menu").slideToggle("fast");
});
