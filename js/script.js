/// <reference path="../typings/globals/jquery/index.d.ts" />


  var elem = $("video")[0]
  console.log(elem)
  $(elem).on("click",function(){
    console.log("difla")
  })


 

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
 
  if (i % 2 == 0) {
    $(".header_menu__mobile").stop().animate({ left: "0vw" }, 1000);
  } else {
    $(".header_menu__mobile").stop().animate({ left: "-100vw" }, 1000);
  }
  i++;
});

$(window).on("scroll", function () {
  console.log("omar");
  if ($("html,body").scrollTop().valueOf() > $(".header_sidebar").height()) {
    $(".header_menu").stop().animate({ top: "0vh" }, 500);
  } else {
    $(".header_menu").stop().animate({ top: "4vh" }, 500);
  }
});

/*$(window).on("resize", function () {
  console.log($(window).width()<=995)
  console.log($(window).width())
  if ($(window).width() < 995 ) {
    $('.carosseloResp').not('.slick-initialized').slick(
      {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      }
    );
  }
  else{
    
  }
})*/
