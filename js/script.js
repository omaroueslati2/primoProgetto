/// <reference path="../typings/globals/jquery/index.d.ts" />

var child = $(".header_menu__centrale").children()
console.log(child)

$(child[0]).on({
  mouseenter: function () {
    $($(".menu_nascosto")[0]).toggleClass("nuoviArrivi_menuINvisibile")
    $($(".menu_nascosto")[0]).toggleClass("nuoviarrivi_menu")  },
  mouseleave: function () {
    $($(".menu_nascosto")[0]).toggleClass("nuoviArrivi_menuINvisibile")
    $($(".menu_nascosto")[0]).toggleClass("nuoviarrivi_menu")  }
})


var elem = $("video")[0]; /*play video*/
console.log(elem);
$(elem).on("click", function () {
  console.log("difla");
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

$(".collezioneUomo_carosello").slick({
  prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
  draggable: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$(".carosseloCollezione").slick({
  prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
});

$(".secondoCarosselo").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 1,

  prevArrow: '<i class="fas fa-chevron-circle-left"></i>',
  nextArrow: '<i class="fas fa-chevron-circle-right"></i>',
  responsive: [
    {
      breakpoint: 900,
      settings: {
        centerMode: false,
      },
    },
  ],
});

$(".heroBanner").slick({
  prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
});

$(".carosello3").slick();

var elem = $(".header_menu__humburger")[0];
var i = 0;
$(elem).on("click", function () {
  $(this).toggleClass("open");
  console.log($(window).width());
  if (i % 2 == 0 && $(window).width() < 900) {
    $(".header_menu__mobile").stop().animate({ left: "0vw" }, 1000);
    
    $("html,body").css({
      "height": '100%',
      "overflow-y": "hidden"
    })
  } else {
    $(".header_menu__mobile").stop().animate({ left: "-100vw" }, 1000);
    $("html,body").css({
      "height": "auto",
      "overflow-y": "auto"
    })
  }
  i++;
});

$(window).on("resize", function () {
  if ($(window).width() > 995) {
    $("html,body").css({
      "height": "auto",
      "overflow-y": "auto"
    })
    $(".header_menu__mobile").stop().animate({ left: "-100vw" }, 1000);
  }
});
$(window).on("scroll", function (e) {
  
  if ($("html,body").scrollTop().valueOf() > $(".header_sidebar").height()) {
    $(".header_menu").stop().animate({ top: "0vh" }, 500);
  } else {
    $(".header_menu").stop().animate({ top: "4vh" }, 500);
  }
});

