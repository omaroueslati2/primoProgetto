/// <reference path="../typings/globals/jquery/index.d.ts" />

var child = $(".header_menu__centrale").children();

child.each(function (index) {
  $(this).on({
    mouseenter: function () {
      if (index != 3) {
        $($(".menu_nascosto")[index]).toggleClass("nuoviArrivi_menuINvisibile");
        $($(".menu_nascosto")[index]).toggleClass("nuoviarrivi_menu");
      }
    },
    mouseleave: function () {
      if (index != 3) {
        $($(".menu_nascosto")[index]).toggleClass("nuoviArrivi_menuINvisibile");
        $($(".menu_nascosto")[index]).toggleClass("nuoviarrivi_menu");
      }
    },
  });
});

var elem = $("video")[0]; /*play video*/
$(elem).on("click", function () {
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
  if (i % 2 == 0 && $(window).width() < 900) {
    $(".header_menu__mobile").stop().animate({ left: "0vw" }, 1000);
    $(".header_menu__mobile li").each(function (index) {
      $(this).on("click", function () {
        console.log(index == 5);
        if (index == 5) {
          $(location).attr(
            "href",
            "https://www.harmontblaine.com/IT/it/storelocator"
          );
        } else {
          $($(".header_stotomenu__mobile")[index])
            .stop()
            .animate({ left: "0vw" }, 1000);
          $(".indietro").each(function () {
            $(this).on("click", function () {
              $($(".header_stotomenu__mobile")[index])
                .stop()
                .animate({ left: "-100vw" }, 1000);
            });
          });
        }
      });
    });
    $("html,body").css({
      height: "100%",
      "overflow-y": "hidden",
    });
  } else {
    $(".header_menu__mobile").stop().animate({ left: "-100vw" }, 1000);

    $(".header_stotomenu__mobile").stop().animate({ left: "-100vw" }, 1000);

    $("html,body").css({
      height: "auto",
      "overflow-y": "auto",
    });
  }
  i++;
});

$(window).on("resize", function () {
  if ($(window).width() > 995) {
    $("html,body").css({
      height: "auto",
      "overflow-y": "auto",
    });
    $(".header_menu__mobile").stop().animate({ left: "-100vw" }, 1000);
  }
});
$(window).on("scroll", function (e) {
  if ($("html,body").scrollTop().valueOf() > $(".header_sidebar").height()) {
    $(".header_menu").stop().animate({ top: "0vh" }, 1500);
    $(".menu_nascosto").each(function () {
      $(this).stop().animate({ top: "6vh" });
    });
  } else {
    $(".header_menu").stop().animate({ top: "4vh" }, 1500);
    $(".menu_nascosto").each(function () {
      $(this).stop().animate({ top: "12vh" });
    });
  }
});
