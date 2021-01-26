
document.querySelector('.header__btn').onclick = function() {
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('menu-close');
};
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
