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
var i = 1 ;
var elem = $("span")[0]
var elem1 = $("span")[1]
var elem2 = $("span")[2]
$(".pulsante").click(function(){
$(elem).toggleClass("primaS")
$(elem1).toggleClass("secondaS")
$(elem2).toggleClass("terzaT")
  
 /* if ($(elem1).hasClass("sconda")) {
   add("primaS","secondaS","terzaT")
   remuve("prima","sconda","terza")
   
 }
 else if($(elem1).hasClass("secondaS")){
   add("prima","seconda","terza")
   remuve("primaS","secondaS","terzaT") */
 
  
})
function add( pram,param1,param2){
  $(elem).addClass(pram)
  $(elem1).addClass(param1)
  $(elem2).addClass(param2)

}
function remuve(pram,param1,param2){
  $(elem).removeClass(pram)
  $(elem1).removeClass(param1)
  $(elem2).removeClass(param2)
}