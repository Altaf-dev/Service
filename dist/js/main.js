!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){o(1),e.exports=o(2)},function(e,t){document.querySelector(".header__btn").onclick=function(){document.querySelector(".header__nav").classList.toggle("active"),document.querySelector(".menu").classList.toggle("menu-close")},document.querySelector(".main__button").onclick=function(){document.querySelector(".modal").classList.toggle("modal-active")},document.querySelector(".advantage__button").onclick=function(){document.querySelector(".modal").classList.toggle("modal-active")},document.querySelector(".modal__close-btn").onclick=function(){document.querySelector(".modal").classList.remove("modal-active")},$(document).ready((function(){$(".phone-mask").mask("+7 (999) 999-99-99")})),$(document).ready((function(){$("#input__file").change((function(){let e=$(this).val().replace(/.*\\/,"");$("#file-name").html(e),$("#file-name").css("paddingTop","10px")}))})),$(document).ready((function(){$(".slider__block").slick({slidesToShow:3,centerMode:!0,autoplay:!1,variableWidth:!0,arrow:!0,dots:!0,pauseOnFocus:!0,responsive:[{breakpoint:1e3,settings:{slidesToShow:1,variableWidth:!0}}]})})),$(".promo__slider-wrap").slick({slidesToShow:3,infinite:!0,centerMode:!0,autoplay:!0,variableWidth:!0,arrow:!1,touchMove:!0,swipeToSlide:!0,swipe:!0})},function(e,t,o){}]);
//# sourceMappingURL=main.js.map