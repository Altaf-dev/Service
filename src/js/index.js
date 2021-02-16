const FORM = document.querySelector(".promo__form")
const MENU_BTN = document.querySelector(".header__btn")
const MENU = document.querySelector(".header__nav")

function openMenu() {
    MENU.classList.toggle('menu-active')
}
function closeMenu() {
    MENU.classList.remove('menu-active')
}

function openForm() {
    FORM.classList.add('active')
}

function closeForm() {
    FORM.classList.remove('active')
}

function openModal() {
    $('.modal').fadeIn()
}

function closeModal() {
    $('.modal').fadeOut()
}

MENU_BTN.onclick = function () {
    openMenu()
}

window.addEventListener('click', (event) => {
    let element = event.target

    if (element.classList.contains('open-modal')) {
        openModal()
    }
})

window.addEventListener('click', (event) => {
    let element = event.target

    if (element.classList.contains('slider__btn')) {
        openForm()
    }
})

window.addEventListener('click', (event) => {
    let element = event.target
    if (element.classList.contains('close-btn') ||
        element.classList.contains('modal')     ||
        element.classList.contains('promo__form')) {
        closeMenu()
        closeModal()
        closeForm()
    }
})

$(document).ready((function () {
    $(".phone-mask").mask("+7 (999) 999-99-99")
}));

$(document).ready(function () {
    $("#input__file").change(function () {
        let filename = $(this).val().replace(/.*\\/, "");
        $("#file-name").html('(Файл прикреплен)');
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
    swipe: true
});
