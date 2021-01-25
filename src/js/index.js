
$('.autoplay').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
});


// $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//         {
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });


//Настройки по выводу слайдов в зависимости от разрешения экрана
// $('.autoplay').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     adaptiveHeight: true,
//     centerMode: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

document.querySelector('.header__btn').onclick = function() {
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('menu-close');
};
