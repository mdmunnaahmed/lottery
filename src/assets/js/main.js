"user strict";

// Preloader
$(window).on("load", function () {
    $(".preloader").fadeOut(1000);
});

//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$(".menu li a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(300, "swing");
    } else {
        element.addClass("open");
        element.children("ul").slideDown(300, "swing");
        element.siblings("li").children("ul").slideUp(300, "swing");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp(300, "swing");
    }
});

// Responsive Menu
var headerTrigger = $(".header-trigger");
headerTrigger.on("click", function () {
    $(".menu").toggleClass("active");
    $(".overlay").toggleClass("active");
});

var headerTrigger2 = $(".top-bar-trigger");
headerTrigger2.on("click", function () {
    $(".header-top").toggleClass("active");
    $(".overlay").addClass("active");
    $(".overlay").removeClass("active");
});

// Overlay Event
var over = $(".overlay");
over.on("click", function () {
    $(".overlay").removeClass("overlay-color");
    $(".overlay").removeClass("active");
    $(".menu, .header-trigger").removeClass("active");
    $(".header-top").removeClass("active");
});

// Sticky Menu
window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Wow init
new WOW({
    mobile: false, // default
}).init();

// Scroll To Top
var scrollTop = $(".scrollToTop");
$(window).on("scroll", function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$(".scrollToTop").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        300
    );
    return false;
});

$(".testimonial-slider").slick({
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: true,
    arrows: false,
    nextArrow: '<i class="las la-long-arrow-alt-right arrow-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left arrow-left"></i> ',
});
$(".winner-slider").slick({
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    pauseOnHover: true,
    centerMode: false,
    dots: true,
    arrows: false,
    nextArrow: '<i class="las las la-long-arrow-alt-right arrow-right"></i>',
    prevArrow: '<i class="las la-long-arrow-alt-left arrow-left"></i> ',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});

// Odometer Counter
$(".counter__item, .dashboard__card__item").each(function () {
    $(this).isInViewport(function (status) {
        if (status === "entered") {
            for (
                var i = 0;
                i < document.querySelectorAll(".odometer").length;
                i++
            ) {
                var el = document.querySelectorAll(".odometer")[i];
                el.innerHTML = el.getAttribute("data-odometer-final");
            }
        }
    });
});

//Faq
$(".faq-item__title").on("click", function (e) {
    var element = $(this).parent(".faq-item");
    if (element.hasClass("open")) {
        element.removeClass("open");
        element.find(".faq-item__content").removeClass("open");
        element.find(".faq-item__content").slideUp(300, "swing");
    } else {
        element.addClass("open");
        element.children(".faq-item__content").slideDown(300, "swing");
        element
            .siblings(".faq-item")
            .children(".faq-item__content")
            .slideUp(300, "swing");
        element.siblings(".faq-item").removeClass("open");
        element
            .siblings(".faq-item")
            .find(".faq-item__content")
            .slideUp(300, "swing");
    }
});

$(".video-button, .video").magnificPopup({
    type: "iframe",
});

// Lottery Countdown
$("[data-countdown]").each(function () {
    var $this = $(this),
        finalDate = $(this).data("countdown");
    $this
        .countdown(finalDate)
        .on("update.countdown", function (event) {
            var format = "%D days %H hr : %M mn : %S sec";
            $(this).html(event.strftime(format));
        })
        .on("finish.countdown", function (event) {
            var expireData = $(this).data("title");
            $(this).html(expireData).parent().addClass("disabled");
        });
});

new AirDatepicker("#el", {
    dateFormat(date) {
        return date.toLocaleString("en", {
            year: "numeric",
            day: "2-digit",
            month: "long",
            language: "en",
            autoClose: true,
        });
    },
});

// Lottery Number Pick
$(".lottery-number-list li").on("click", function () {
    // var lenth01 = $(".lottery-number-list li.active").length;
    // console.log(lenth01);
    // if (lenth01 + 1 > 5) {
    //     alert("You can select upto 5 Numbers only");
    // } else {
    $(this).toggleClass("active");
    // }
});
