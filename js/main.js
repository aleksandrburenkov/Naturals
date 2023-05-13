// CARUSEL

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    item: 3,
});

$('.slider__btn--next').click(function () {
    owl.trigger('prev.owl.carousel');
});
$('.slider__btn--prev').click(function () {
    owl.trigger('next.owl.carousel');
});

// Nav-icon
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
navBtn.onclick = function () {
    nav.classList.toggle('nav__mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};
