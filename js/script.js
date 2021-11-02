/// <reference path="../typings/globals/jquery/index.d.ts" />

$(".carosseloResp").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 1,

  prevArrow: '<i class="fas fa-chevron-circle-left"></i>',
  nextArrow: '<i class="fas fa-chevron-circle-right"></i>',
});

$(".carosello1").slick({
  prevArrow: '<i class="fas fa-chevron-left"></i>',
  nextArrow: '<i class="fas fa-chevron-right"></i>',
});
var i = 1;
var elem = $("span")[0];
var elem1 = $("span")[1];
var elem2 = $("span")[2];
var i = 1;
$(".pulsante").click(function () {
  console.log();
  $(elem).toggleClass("primaS");
  $(elem1).toggleClass("secondaS");
  $(elem2).toggleClass("terzaT");
  if (i % 2 != 0) {
    $(".menuLaterale").animate({ left: "0vw" }, 1000);
  } else {
    $(".menuLaterale").animate({ left: "-100vw" }, 1000);
  }
  i++;
}); /*fine del click */

$(window).on("scroll", function () {
  console.log("omarrrrrr");
  console.log($(".spedizione").height());
  console.log($("html,body").scrollTop().valueOf() >= $(".spedizione"));
  console.log($("html,body").scrollTop().valueOf());
  if ($("html,body").scrollTop().valueOf() > $(".spedizione").height()) {
    $(".header").stop().animate({ top: "0vh" }, 500);
  } else {
    $(".header").stop().animate({ top: "4vh" }, 500);
  }
});
