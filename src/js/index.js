
document.querySelector('.header__btn').onclick = function() {
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('menu-close');
};

$(document).ready((function () {
    $(".phone-mask").mask("+7 (999) 999-99-99")
}));


$(document).ready(function () {
    $('.slider__block').slick({
        slidesToShow: 3,
        centerMode: true,
        autoplay:false,
        variableWidth: true,
        arrow: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true
                }
            },
        ]
    });
})

$('.promo__slider-wrap').slick({
    slidesToShow: 3,
    infinite: true,
    centerMode: true,
    autoplay:true,
    variableWidth: true,
    arrow: false,
    touchMove: true,
    swipeToSlide: true
});
