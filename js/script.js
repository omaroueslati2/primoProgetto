window.addEventListener("resize",function(){
    media()
})

function media(){
let media =window.matchMedia("(max-width: 995px)")
let elem = document.getElementsByClassName("navbar-nav")[0]
if (media.matches) {
    
   
   let li = document.createElement("li")
   if (elem.childElementCount == 6) {
    li.innerHTML='<li class="nav-item"><a class="nav-link" href="#">Store Locator</a></li> ' 
    +'<li class="nav-item"><a class="nav-link" href="#">italia|ita</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="#">Area Account</a></li>'+
    '<li class="nav-item"><a class="nav-link" href="#">servizio clienti</a></li>'+
    '<li class="nav-item"><a class="nav-link" href="#">AREA LEGALE</a></li>'
    elem.append(li)
   }
   
   
}
else{
    while(elem.childElementCount != 6){
        elem.removeChild(elem.lastChild)
    }
}

}