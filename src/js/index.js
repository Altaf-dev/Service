document.querySelector('.header__btn').onclick = function () {
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('menu-close');
};

document.querySelector('.main__button').onclick = function () {
    document.querySelector('.modal').classList.toggle('modal-active');
};

document.querySelector('.advantage__button').onclick = function () {
    document.querySelector('.modal').classList.toggle('modal-active');
};

document.querySelector('.modal__close-btn').onclick = function () {
    document.querySelector('.modal').classList.remove('modal-active');
};

$(document).ready((function () {
    $(".phone-mask").mask("+7 (999) 999-99-99")
}));

$(document).ready(function () {
    $("#input__file").change(function () {
        let filename = $(this).val().replace(/.*\\/, "");
        $("#file-name").html(filename);
        $('#file-name').css('paddingTop', '10px')
    });
});

$(document).ready(function () {
    $('.slider__block').slick({
        slidesToShow: 3,
        centerMode: true,
        autoplay: false,
        variableWidth: true,
        arrow: true,
        dots: true,
        pauseOnFocus: true,
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
    autoplay: true,
    variableWidth: true,
    arrow: false,
    touchMove: true,
    swipeToSlide: true,
    swipe:true
});
